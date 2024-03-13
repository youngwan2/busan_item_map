import { useEffect } from 'react';
const api_key = import.meta.env.VITE_KAKAO;


const MIN_LA = 1
const MIN_LO = 1
const MIN_ADRESS = 5

/**
 * @param la : 위도
 * @param lo : 경도
 * @param bss : 판매점명
 * @param id : 지도 식별자
 * @param addres : 주소
 */
const useMap = (
  la: number,
  lo: number,
  bss: string,
  id: string,
  addres: string,
) => {

  const addressLength = addres.length

  useEffect(() => {
    if (addressLength < MIN_ADRESS && (la < MIN_LA && lo < MIN_LO)) return
    
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.id = 'kakao-script'
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${api_key}&autoload=false&libraries=services`;
    document.head.appendChild(script);

    script.addEventListener('load', mapLoader)

    return () => {
      script.removeEventListener('load',mapLoader)
      script.remove()
    }

  }, [la, lo, bss]);

  function renderAddressBaseMap(geoconder: kakao.maps.services.Geocoder, map: kakao.maps.Map) {
    geoconder.addressSearch(`${addres}`, function (results, status) {
      const hasResults = status === kakao.maps.services.Status.OK;
      const { y: geoLa, x: geoLo } = results[0];

      const position = new kakao.maps.LatLng(
        hasResults ? Number(geoLa) : Number(la),
        hasResults ? Number(geoLo) : Number(lo),
      );

      const marker = new kakao.maps.Marker({
        map,
        position,
      });

      /* 지도의 인포윈도우 옵션 설정 */
      const iwContent = `<div style="width:200px;text-align:center;padding:3px 0; min-height:10px">${bss}</div>`;
      const infowindow = new kakao.maps.InfoWindow({
        position,
        content: iwContent,
      });

      // 마커 위에 인포윈도우를 표시합니다
      infowindow.open(map, marker);
      return map.setCenter(position);
    });
  }

  // 좌표 기반
  function renderRatingBaseMap(map: kakao.maps.Map) {
    const position = new kakao.maps.LatLng(Number(la), Number(lo));
    new kakao.maps.Marker({
      map,
      position,
    });

    // 마커 위에 인포윈도우를 표시합니다
    return map.setCenter(position);
  }

  function mapLoader() {
    kakao.maps.load(function () {
      const options = {
        center: new kakao.maps.LatLng(Number(la), Number(lo)),
        level: 3,
      };
      const container = document.getElementById(id) as HTMLElement;
      const map = new kakao.maps.Map(container, options);
      const geoconder = new kakao.maps.services.Geocoder();

      // 주소 기반 검색
      if (addres.length > 2) {
         renderAddressBaseMap(geoconder, map)
        
      }
      // 좌표 기반 검색
      renderRatingBaseMap(map)

      
    });
  }

};

export default useMap;
