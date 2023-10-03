/*global kakao*/
import { useEffect } from "react";
import styles from "./KaMap.module.css";

interface KaMapType {
  la?: string;
  lo?: string;
  bss?: string;
  isDisplay?: boolean;
  setIsDisplay?: (state: boolean) => void;
}

function KaMap({
  la = "33",
  lo = "33",
  bss,
  isDisplay,
  setIsDisplay,
}: KaMapType) {

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=3b10fb7d5f3f1d9f70a97ca983ca888d&autoload=false`;

    document.head.appendChild(script);

    const container = document.getElementById("map")!;

    script.onload = () => {
      kakao.maps.load(function () {
        const options = {
          center: new kakao.maps.LatLng(Number(la), Number(lo)),
          level: 3,
        };
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const map = new kakao.maps.Map(container, options);
        map.addOverlayMapTypeId(kakao.maps.MapTypeId.ROADVIEW); //지도 위에 로드뷰 도로 올리기

        const marker = new kakao.maps.Marker({
          position: new kakao.maps.LatLng(Number(la), Number(lo)),
        });

        // 지도에 교통정보를 표시하도록 지도타입을 추가합니다
        map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);

        /* 지도의 인포윈도우 옵션 설정 */
        const iwContent = `<div style="padding:5px; background:black; color:white;">${bss}</div>`;
        const infowindow = new kakao.maps.InfoWindow({
          position: new kakao.maps.LatLng(Number(la), Number(lo)),
          content: iwContent,
        });

        kakao.maps.event.addListener(marker, "mouseover", function () {
          // 마커 위에 인포윈도우를 표시합니다
          infowindow.open(map, marker);
        });

        kakao.maps.event.addListener(marker, "mouseout", function () {
          // 마커 위에 인포윈도우를 표시합니다
          infowindow.close();
        });

        marker.setMap(map);
        // infowindow.open(map, marker);
      });
    };
  }, [la, lo, bss]);

  return (
    <article
     onDoubleClick={()=>{
      setIsDisplay && setIsDisplay(!isDisplay);
     }}
      className={styles.Map}
      style={isDisplay ? { display: "none" } : { display: "block" }}
    >
      {/* 지도 닫기 버튼 */}
      <span
        onClick={() => {
          setIsDisplay && setIsDisplay(!isDisplay);
        }}
        className={styles.close_btn}
      >
        ✕
      </span>{" "}
      <section
        id="map"
        className={styles.KaMap}
        style={{ width: "500px", height: "500px", display: "block" }}
      ></section>
    </article>
  );
}

export default KaMap;
