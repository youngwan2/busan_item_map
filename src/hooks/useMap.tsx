import {useEffect} from 'react'


/**
 * @param la : 위도
 * @param lo : 경도
 * @param bss : 판매점명
 * @param id : 지도 식별자
 * @param addres : 주소
 */
const useMap = (la="33", lo="33", bss:string="", id:string="",addres:string|undefined) => {
    
    useEffect(() => {
        const api_key = import.meta.env.VITE_KAKAO
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${api_key}&autoload=false&libraries=services`;
    

        document.head.appendChild(script);
    
        const container = document.getElementById(id)!;
    
        script.onload = () => {
          kakao.maps.load(function () {
            const options = {
              center: new kakao.maps.LatLng(Number(la), Number(lo)),
              level: 3,
            };
            ("@typescript-eslint/no-unused-vars");
            
            const map = new kakao.maps.Map(container, options);
            const geoconder = new kakao.maps.services.Geocoder();
            
            if(bss === undefined) {return}

            geoconder.addressSearch(`${addres}`,function(results, status){
              const hasResults = status === kakao.maps.services.Status.OK
                const geoLa = results[0].y
                const geoLo = results[0].x
                const position =new kakao.maps.LatLng(hasResults? Number(geoLa):Number(la), hasResults? Number(geoLo):Number(lo))
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

                map.setCenter(position)
        
                  // 마커 위에 인포윈도우를 표시합니다
                  infowindow.open(map, marker);
        
                marker.setMap(map);
         
              
            })

          });
        };
      }, [la, lo, bss]);
    
}

export default useMap