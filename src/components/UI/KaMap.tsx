/*global kakao*/
import React, { useEffect } from "react";
import styles from "./KaMap.module.css";

interface KaMapType {
  la?: string;
  lo?: string;
  isDisplay?: boolean;
  setIsDisplay?: (state: boolean) => void;
}

function KaMap({ la = "33", lo = "33", isDisplay, setIsDisplay }: KaMapType) {
  console.log(la, lo);

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
      });
    };
  }, [la, lo]);

  return (
    <article
      className={styles.Map}
      style={isDisplay ? { display: "none" } : { display: "block" }}
    >
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
