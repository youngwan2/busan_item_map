import ReactSpinner from "../../../components/UI/ReactSpinner";
import styles from "../Haccp.module.scss";
import { useEffect, useRef } from "react";

interface Type {
  setProductName: (value: string) => void;
  search: () => void;
  loading: boolean;
  productName: string;
}

function HaccpSearchForm({
  setProductName,
  search,
  loading,
  productName,
}: Type) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  useEffect(() => {
    if (inputRef.current) inputRef.current.value = productName;
  }, [productName]);
  return (
    <div className={styles.search_container}>
      <input
        ref={inputRef}
        className={styles.search_input}
        type="text"
        id={styles.search}
        placeholder="ex) 치킨"
        onKeyUp={async (e) => {
          setProductName(e.currentTarget.value);
          if (e.code === "Enter") {
            search();
          }
        }}
      />
      {/* 조회 버튼 */}
      <button
        className={styles.search_btn}
        onClick={async () => {
          search();
        }}
      >
        조회
      </button>
      <div
        className={styles.spinner}
        style={loading ? { display: "block" } : { display: "none" }}
      >
        <ReactSpinner />
      </div>
    </div>
  );
}

export default HaccpSearchForm;
