import styles from "./Search.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { asyncGetSearchData } from "../../app/slice/searchSlice";
import Header from "./Header";

interface SearchType {
  fixed: boolean;
}

function Search({ fixed }: SearchType) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <>
      <Header isStyle={true}></Header>
      <article
        className={styles.search}
        style={
          fixed
            ? {
                position: "relative",
                top: "8rem",
                maxWidth: "600px",
              }
            : { position: "fixed" }
        }
      >
        <div className={styles.search_container}>
          <label className={styles.search_icon} htmlFor="search">
            <FontAwesomeIcon
              style={{ color: "black" }}
              icon={faMagnifyingGlass}
            />
          </label>
          <input
            onKeyUp={(e) => {
              if (e.code === "Enter") {
                // sendURL(e.currentTarget.value);
                if (e.currentTarget.value !== "")
                  dispatch(asyncGetSearchData(e.currentTarget.value));
                e.currentTarget.value = "";
                return navigate("/busan_item_map/search");
              }
            }}
            placeholder="음식명을 입력 후 [Enter] 를 눌러주세요!!"
            type="text"
            id="search"
            className={styles.search_input}
            style={fixed ? { border: '1px solid rgba(28, 99, 231,0.1)', boxShadow:'inset 0 0 5px 2px rgba(55,55,55,0.5)' } : {}}
          />
        </div>
      </article>
    </>
  );
}

export default Search;
