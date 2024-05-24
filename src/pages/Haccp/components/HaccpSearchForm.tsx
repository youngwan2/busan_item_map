import { FormEventHandler, useEffect, useRef } from 'react';

import useFoucs from '../../../hooks/useFocus';

import SearchForm from '../../../components/Common/Search/SearchForm';

interface Type {
  loading: boolean;
  productName: string;
  search: () => void;
  searchAction:FormEventHandler<HTMLFormElement>
}

function HaccpSearchForm({ search, productName, searchAction }: Type) {
  const inputRef = useRef<HTMLInputElement>(null);

  const inputOptions ={
    defaultValue:'',
    placeholder:'ex. 김치',
    id: 'haccp_search',
    type: 'search',
    name: 'search'

  }

  // TODO : 재사용 가능한 검색 폼을 만들어서 각 검색 페이지 마다 적용 해야 함.
  const buttonOptions = {
    text: '조회',
    type :"button" as 'button' // why? 문자열 타입으로 계속 인식하여 타입 주장
  }


  useFoucs(inputRef)
  useEffect(() => {
    if (inputRef.current) inputRef.current.value = productName;
  }, [productName]);

  return (
    <SearchForm action={searchAction} onSearch={search} inputOptions={inputOptions} buttonOptions={buttonOptions}/>
  );
}

export default HaccpSearchForm;
