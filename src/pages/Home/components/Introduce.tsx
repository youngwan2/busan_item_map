import styles from "./Introduce.module.scss";
import { useEffect, MouseEvent, useState } from "react";
import IntroSlide from "./IntroSlide";
import IntroSlideButton from "./IntroSlideButton";
import Header from "../../../components/Common/Header";

const Introduce = () => {
  useEffect(() => {
    document.title = "Food Picker";
  }, []);


const [page,setPage] = useState(1)

const pageSwitch=(e:MouseEvent<HTMLUListElement>)=>{
  if(e.target instanceof HTMLLIElement) {
    const index = Number(e.target.dataset.index)||0
    setPage(index)
  }
}

  return (
    <section className={styles.Introduce}>
    <Header isStyle={false}/>
    <IntroSlideButton pageSwitch={pageSwitch} page={page}/>
    <IntroSlide page={page}/>
    </section>
  );
};

export default Introduce;
