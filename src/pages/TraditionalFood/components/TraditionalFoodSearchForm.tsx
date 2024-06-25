import SearchForm from '@/components/Search/SearchForm';
import { FormEventHandler, MouseEventHandler } from 'react';

interface PropsType {
  onSearch: MouseEventHandler<HTMLButtonElement>;
  onReset: MouseEventHandler<HTMLButtonElement>;
  action: FormEventHandler<HTMLFormElement>;
}

export default function TraditionalFoodSearchForm({
  onSearch,
  onReset,
  action,
}: PropsType) {
  const inputOptions = {
    placeholder: '음식 이름 혹은 키워드를 입력해주세요. ex)감자탕 or 된장',
    id: 'traditionalfood-search',
    type: 'search',
    name: 'traditionalfood-search',
  };

  const buttonOptions = {
    text: '조회',
    type: 'button' as 'button' | 'submit' | 'reset',
  };

  const resetButtonOptions = {
    text: '리셋',
    type: 'reset' as 'button' | 'submit' | 'reset',
  };
  return (
    <SearchForm
      action={action}
      onReset={onReset}
      onSearch={onSearch}
      inputOptions={inputOptions}
      buttonOptions={buttonOptions}
      resetButtonOptions={resetButtonOptions}
    />
  );
}
