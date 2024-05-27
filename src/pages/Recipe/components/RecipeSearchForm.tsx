import { type FormEventHandler, type MouseEventHandler} from 'react';

import SearchForm from '@/components/Common/Search/SearchForm';

interface PropsType {
  onSearch: MouseEventHandler<HTMLButtonElement> ;
  action: FormEventHandler<HTMLFormElement>
}

function RecipeSearchForm({
  onSearch, action
}: PropsType) {


  const inputOptions = {
    placeholder: '음식 이름을 입력해주세요. ex)감자탕',
    id:'recipe-search',
    type: 'search',
    name:'recipe-search'
  }

  const buttonOptions = {
    text:'조회',
    type:'button' as "button" | "submit" | "reset"

  }

  return (
    <SearchForm action={action} onSearch={onSearch} inputOptions={inputOptions} buttonOptions={buttonOptions}/>
   
  );
}

export default RecipeSearchForm;
