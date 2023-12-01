
import { Outlet } from "react-router-dom";
import Gpt from "../Common/Gpt/Gpt";
import Header from "./Header";
import Movement from "../Common/Movement";
import NavSearch from "../Common/NaverDictionary/NaverDictionary";
import Footer from "./Footer";


const Layout = () => {


  return (
    <>
      <Header isStyle={true}/>
      <main style={{minHeight:'100vh', height:'100%', width:'100%'}}>
      <Outlet />
      <Gpt />
      <Movement />
      <NavSearch />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
