import { type FormEventHandler, type MouseEventHandler} from 'react';

import SearchForm from '@/components/Search/SearchForm';

interface PropsType {
  onSearch: MouseEventHandler<HTMLButtonElement> ;
  onReset: MouseEventHandler<HTMLButtonElement> ;
  action: FormEventHandler<HTMLFormElement>
}

function RecipeSearchForm({
  onSearch,onReset, action
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

  const resetButtonOptions = {
    text:'리셋',
    type:'reset' as "button" | "submit" | "reset"
  }

  return (
    <SearchForm action={action} onSearch={onSearch} onReset={onReset} inputOptions={inputOptions} buttonOptions={buttonOptions} resetButtonOptions={resetButtonOptions}/>
   
  );
}

export default RecipeSearchForm;
