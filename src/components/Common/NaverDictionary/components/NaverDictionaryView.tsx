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
  const [error, setError] = useState<string>('')

  const reqNaverSearchAPI = (value: string) => {
    setLoading(true);

    axios
      .get(`${import.meta.env.MODE === "production" 
        ?
         '/search/encyc?query='+value
        :'http://localhost:3000/search/encyc?query='+value}`
      )
      .then((result) => {
        if (result.status !== 200) throw new Error('요청에 문제가 있습니다.')
        const { items } = result.data.message
        if (items !== undefined) setItems(items);
        else { setError("데이터가 존재하지 않거나, 서버에서 데이터를 받아올 수 없습니다.") }
        setLoading(false);

      })
      .catch((error) => {
        setError(error)
        setLoading(false);
      });

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
        <NaverDictionaryList items={items} error={error} />
      )}
    </article>
  );
};

export default NaverDictionaryView;
