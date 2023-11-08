import axios from "axios";
import styles from "../NaverDictionary.module.scss";
import { DictionaryType } from "../NaverDictionary";
import { useState } from "react";
import ReactSpinner from "../../../UI/ReactSpinner";
import NaverDictionaryList from "./NaverDictionaryList";
import NaverCloseIcon from "./NaverCloseIcon";
import NaverSearchForm from "./NaverSearchForm";

interface PropsType {
  display: boolean;
  setDisplay: (p: boolean) => void;
}

const NaverDictionaryView = ({ display, setDisplay }: PropsType) => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState<DictionaryType[]>();

  const reqNaverSearchAPI = (value: string) => {
    setLoading(true);
    if (process.env.NODE_ENV === "production") {
      axios
        .get(`/search/encyc?query=${value}`)
        .then((result) => {
          const data = result.data.response.items;
          setItems(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          alert("데이터를 가져오던 중 문제가 발생하였습니다.");
          setLoading(false);
        });
    } else {
      axios
        .get(`http://localhost:3000/search/encyc?query=${value}`)
        .then((result) => {
          const data = result.data.response.items;
          setItems(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
        });
    }
  };

  return (
    <article
      className={styles.form}
      style={
        display
          ? {
              visibility: "visible",
              opacity: 1,
              transform: "translate(-50%,-50%)",
              transformOrigin: "bottom bottom",
            }
          : {
              visibility: "hidden",
              opacity: 0,
              transform: "translate(-50%,50%))",
              transformOrigin: "center bottom",
            }
      }
    >
      <h3 style={{ textAlign: "center", color: "black" }}>네이버 백과사전</h3>
      <NaverCloseIcon setDisplay={setDisplay} />
      <NaverSearchForm
        getNaverSearchData={reqNaverSearchAPI}
        display={display}
      />
      {loading ? (
        <span
          style={{
            position: "relative",
            transform: "translate(-50%)",
            left: "40%",
          }}
        >
          <ReactSpinner />
        </span>
      ) : (
        <NaverDictionaryList items={items} />
      )}
    </article>
  );
};

export default NaverDictionaryView;
