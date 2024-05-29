
import { type MouseEventHandler, type FormEventHandler } from 'react';

import SearchForm from '@/components/Common/Search/SearchForm';

interface PropsType {
  onSearch: MouseEventHandler<HTMLButtonElement> ;
  action: FormEventHandler<HTMLFormElement>
}

export default function NutritionSearchForm({action, onSearch }: PropsType) {

  const inputOptions = {
    placeholder: '음식 이름 혹은 키워드를 입력해주세요. ex)감자탕 or 된장',
    id:'nutrition-search',
    type: 'search',
    name:'nutrition-search'
  }

  const buttonOptions = {
    text:'조회',
    type:'button' as "button" | "submit" | "reset"

  }

  return (
    <SearchForm action={action} onSearch={onSearch} inputOptions={inputOptions} buttonOptions={buttonOptions}/>
  );
};