import { useState,useEffect } from "react";

const API_KEY = import.meta.env.VITE_FARMING_KEY



const RecommendedDietPage=() => {

function reqListener(e:any) {
    console.log(e.responseText)
}
    
function requestXMLFromAPI(){
    const req = new XMLHttpRequest()
    const METHOD='GET'
    const URL = `http://api.nongsaro.go.kr/${API_KEY}/recomendDiet/mainCategoryList`
    req.addEventListener('load', reqListener)
    req.open(METHOD, URL)
    req.send()


}

useEffect(()=>{
    requestXMLFromAPI()
},[])

    return ( 
        <section>
            <h2>추천 식단 페이지</h2>
            <div id="nongsaroApiLoadingArea"></div>
<div id="nongsaroApiLoadingArea1"></div>
<div id="nongsaroApiLoadingArea3"></div>
<div id="nongsaroApiLoadingArea4"></div>
<div id="nongsaroApiLoadingArea5"></div>
        </section>
     );
}

export default RecommendedDietPage;



