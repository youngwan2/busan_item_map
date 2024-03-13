import ReactSpinner from '../../../components/UI/ReactSpinner';
import useFoucs from '../../../hooks/useFocus';
import styles from '../Haccp.module.scss';
import { FormEventHandler, useEffect, useRef } from 'react';
import HaccpInput from './HaccpInput';
import SearchButton from './SearchButton';

interface Type {
  loading: boolean;
  productName: string;
  search: () => void;
  searchAction:FormEventHandler<HTMLFormElement>
}

function HaccpSearchForm({ search, loading, productName, searchAction }: Type) {
  const inputRef = useRef<HTMLInputElement>(null);



  function onClickSearch() {
    search();
  }
  useFoucs(inputRef)
  useEffect(() => {
    if (inputRef.current) inputRef.current.value = productName;
  }, [productName]);

  return (
    <form className={styles.search_container} onSubmit={searchAction}>
      <HaccpInput />
      {/* 조회 버튼 */}
      <SearchButton onClickSearch={onClickSearch} />
      <div className={styles.spinner} style={loading ? { display: 'block' } : { display: 'none' }}>
        <ReactSpinner />
      </div>
    </form>
  );
}

export default HaccpSearchForm;
