import styles from '../Nutrition.module.scss';

import { useRef, type KeyboardEvent, type MouseEvent } from 'react';
import { useRecoilState } from 'recoil';

import { NutritionPageNumber } from '../../../atom/NutritionsAtom';

import { FiSearch } from 'react-icons/fi';
import Input from '../../../components/Common/Input';
import Label from '../../../components/Common/Label';

interface PropsType {
  setValue: (p: string) => void;
}

const SearchForm = ({ setValue }: PropsType) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [_, setPage] = useRecoilState(NutritionPageNumber);


  function updateState(value: string, page: number) {
    setValue(value);
    setPage(page);

  }

  function keyInputSetValue(e: KeyboardEvent<HTMLInputElement>) {
    const value = e.currentTarget.value
    if (e.code === 'Enter') updateState(value, 1)

  }

  function clickButtonSetValue(e: MouseEvent<HTMLButtonElement>) {
    if (!inputRef.current) return
    const value = inputRef.current.value
    updateState(value, 1)
  }


  function handleSetSearchValue(e: KeyboardEvent<HTMLInputElement> | MouseEvent<HTMLButtonElement>) {
    if (e.type === 'keyup') keyInputSetValue(e as KeyboardEvent<HTMLInputElement>)
    if (e.type === 'click') clickButtonSetValue(e as MouseEvent<HTMLButtonElement>)
  }

  return (
    <form
      className={styles.nutrtion_search_form}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Label className={styles.nutrition_search_label} htmlFor='search'>
        <FiSearch />
      </Label>

      <Input
        ref={inputRef}
        ariaLabel='식품영양정보 검색창'
        placeholder='음식이름 입력'
        id="search"
        type="search"
        onKeyUp={handleSetSearchValue}

      />
      <button
        type='button'
        onClick={handleSetSearchValue}
      >
        조회
      </button>
    </form>
  );
};

export default SearchForm;
