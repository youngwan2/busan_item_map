import { type MouseEventHandler, type FormEventHandler } from 'react';

import SearchForm from '@/components/Search/SearchForm';

interface PropsType {
  onSearch: MouseEventHandler<HTMLButtonElement>;
  onReset: MouseEventHandler<HTMLButtonElement>;
  action: FormEventHandler<HTMLFormElement>;
}

export default function NutritionSearchForm({
  action,
  onSearch,
  onReset,
}: PropsType) {
  const inputOptions = {
    placeholder: '음식 이름 혹은 키워드를 입력해주세요. ex)감자탕 or 된장',
    id: 'nutrition-search',
    type: 'search',
    name: 'nutrition-search',
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
