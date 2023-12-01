import styles from "./Introduce.module.scss";
import { useEffect, MouseEvent, useState,useRef } from "react";
import IntroSlide from "./IntroSlide";
import IntroSlideButton from "./IntroSlideButton";
import Header from "../../../components/Layout/Header";

const Introduce = () => {
  useEffect(() => {
    document.title = "Food Picker";
  }, []);


const sectionRef = useRef<HTMLAreaElement>(null)

const [page,setPage] = useState(1)
const pageSwitch=(e:MouseEvent<HTMLUListElement>)=>{
  if(e.target instanceof HTMLLIElement) {
    const index = Number(e.target.dataset.index)||0
    setPage(index)
  }
}

useEffect(()=>{
  const interval = setInterval(()=>{
    setPage(old => ++old)
    if(page>=5) {setPage(1)}
  },5000)
  return () =>{
    clearInterval(interval)
  }
},[page])

  return (
    <section className={styles.Introduce} ref={sectionRef}>
    <Header isStyle={false}/>
    <IntroSlideButton pageSwitch={pageSwitch} page={page}/>
    <IntroSlide page={page}/>
    </section>
  );
};

export default Introduce;
