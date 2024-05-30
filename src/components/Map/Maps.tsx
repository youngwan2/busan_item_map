import styles from './Maps.module.scss'

import { useEffect, useRef, useState } from "react";

import MapInfoWindow from "./MapInfoWindow";
import RoadviewButton from "./RoadviewButton";
import MapRoadViewContainer from './MapRoadViewContainer';
import MapRoadViewCloseButton from './MapRoadViewCloseButton';

import { Map, MapMarker, MapTypeId, Roadview } from "react-kakao-maps-sdk";
import MapResetButton from './MapResetButton';
import MapRoadViewSizeControlButton from './MapRoadViewSizeControlButton';

interface MarkerType { position: { lat: number, lng: number }, content: string }
interface MapType extends kakao.maps.Map { }
interface RoadViewType extends kakao.maps.Roadview { }
interface PropsType {
    defaultCenter: { lat: number, lng: number }
    name?: string
    address?: string
}

export default function Maps({ defaultCenter, name, address = '' }: PropsType) {


    const [isAtive, setIsAtive] = useState(false)
    const [isFull, setIsFull] = useState(false)
    const [_, setIsVisible] = useState(false)
    const [pickCenter, setPickCenter] = useState(defaultCenter)
    const [marker, setMarker] = useState<MarkerType>()

    const mapRef = useRef<MapType>(null)
    const roadviewRef = useRef<RoadViewType>(null)

    const mapSize = { width: '100%', height: '350px' }

    const loadViewSize = isFull ? { width: '100vw', height: '100vh' } : { width: '100%', height: '400px' }


    function onClickMapPositionReset() {
        setPickCenter({ lat: marker?.position.lat || defaultCenter.lat, lng: marker?.position.lng || defaultCenter.lng })
    }


    function onClickRoadViewDiplay() {
        setIsVisible(old => !old)
        setIsAtive(old => !old)
    }

    function handlePositionChange(target: kakao.maps.Marker | kakao.maps.Roadview) {
        setPickCenter({
            lat: target.getPosition().getLat(),
            lng: target.getPosition().getLng(),
        })

    }

    useEffect(() => {
        if (address.length < 2) return

        const geocoder = new kakao.maps.services.Geocoder
        geocoder.addressSearch(address, (result, status) => {

            if (status === kakao.maps.services.Status.OK) {
                const coords = new kakao.maps.LatLng(Number(result[0].y), Number(result[0].x))
                const position = { lat: coords.getLat(), lng: coords.getLng() }
                const marker = {
                    position,
                    content: result[0].address_name
                }
                setMarker(marker)
                setPickCenter(position)
            }
        })
    }, [address])

    if (!marker) return <></>
    return (
        <>
            <div className={styles.maps_container}>
                <Map
                    ref={mapRef}
                    style={mapSize}
                    onClick={(_, mouseEvent) => {
                        const latlng = mouseEvent.latLng
                        setPickCenter({
                            lat: latlng.getLat(),
                            lng: latlng.getLng(),
                        })

                        if (mapRef.current && roadviewRef.current) {
                            roadviewRef.current.relayout()
                            mapRef.current.relayout()
                            mapRef.current.setCenter(new kakao.maps.LatLng(pickCenter.lat, pickCenter.lng))
                        }
                    }}
                    level={3}
                    center={pickCenter}>

                    {/* 로드뷰 온 오프 버튼 */}
                    <RoadviewButton id="roadviewControl" isAtive={isAtive} onClick={onClickRoadViewDiplay} />
                    <MapResetButton isAtive={isAtive} onClick={onClickMapPositionReset} />

                    {/* 로드뷰 활성 유무 따른 지도 렌더 */}
                    {isAtive ? (
                        // 로드뷰 활성화 시 보여줄 마커
                        <>
                            <MapTypeId type={kakao.maps.MapTypeId.ROADVIEW} />
                            <MapMarker
                                key={`marker-${marker?.content}-${marker?.position.lat},${marker?.position.lng}`}
                                position={{ lat: pickCenter.lat, lng: pickCenter.lng }}
                                draggable={true}
                                onDragEnd={(marker) => { handlePositionChange(marker) }}
                                image={{
                                    src: "https://t1.daumcdn.net/localimg/localimages/07/2018/pc/roadview_minimap_wk_2018.png",
                                    size: { width: 26, height: 46 },
                                    options: {
                                        spriteSize: { width: 1666, height: 168 },
                                        spriteOrigin: { x: 705, y: 114 },
                                        offset: { x: 13, y: 46 },
                                    }
                                }}
                            />
                        </>
                        // 로드뷰 비활성화 시 보여줄 마커
                    ) : <><MapMarker
                        key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
                        position={{ lat: pickCenter.lat, lng: pickCenter.lng }}   >
                        <MapInfoWindow name={name} />
                    </MapMarker>

                    </>

                    }
                    <MapRoadViewContainer isAtive={isAtive} isFull={isFull}>
                        <Roadview
                            position={{ ...pickCenter, radius: 100 }}
                            style={loadViewSize}
                            onPositionChanged={(rv) => { handlePositionChange(rv) }}
                            onPanoidChange={() => {
                                isAtive && setIsVisible(true)
                            }}
                            onErrorGetNearestPanoId={() => {
                                setIsVisible(false)
                            }}
                            ref={roadviewRef}
                        >
                            <MapRoadViewCloseButton id='close' onClick={onClickRoadViewDiplay} title='로드뷰 닫기' />
                            <MapRoadViewSizeControlButton isFull={isFull} onClick={() => setIsFull(old => !old)} />
                        </Roadview>
                    </MapRoadViewContainer>

                </Map>
            </div>


        </>
    )
}