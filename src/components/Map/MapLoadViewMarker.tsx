

import { MapMarker, MapTypeId } from "react-kakao-maps-sdk"
import MapInfoWindow from "./MapInfoWindow"
import type { MarkerType } from "./Maps"


interface PropsType {
    marker: MarkerType
    pickCenter: { lat: number, lng: number }
    onPositionChange:(marker:kakao.maps.Marker)=>void
    name: string
}
export default function MapLoadViewMarker({ marker, pickCenter, name, onPositionChange }: PropsType) {

    return (
        <>
            <MapTypeId type={kakao.maps.MapTypeId.ROADVIEW} />
            <MapMarker
                key={`marker-${marker?.content}-${marker?.position.lat},${marker?.position.lng}`}
                position={{ lat: pickCenter.lat, lng: pickCenter.lng }}
                draggable={true}
                onDragEnd={(marker) => { onPositionChange(marker) }}
                image={{
                    src: "https://t1.daumcdn.net/localimg/localimages/07/2018/pc/roadview_minimap_wk_2018.png",
                    size: { width: 26, height: 46 },
                    options: {
                        spriteSize: { width: 1666, height: 168 },
                        spriteOrigin: { x: 705, y: 114 },
                        offset: { x: 13, y: 46 },
                    }
                }}
            ><MapInfoWindow name={name} /></MapMarker>
        </>
    )
}