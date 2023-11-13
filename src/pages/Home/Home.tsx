import Introduce from "./components/Introduce";
import { Suspense } from "react";
const Home = ()=> {
    return (
        <Suspense fallback={<div style={{position:'absolute', left:0, top:0,height:'100vh', width:'100%', background:'black', zIndex:10000000000000}}>로딩중...</div>}>
            <Introduce/>
        </Suspense>
    );
}
export default Home;