import styles from '../NaverDictionary.module.scss';

import { FormEventHandler, useEffect, useRef } from 'react';

import { HiSearch } from 'react-icons/hi';

interface PropsType {
  isDisplay: boolean;
  action: FormEventHandler<HTMLFormElement>
}


const NaverSearchForm = ({ isDisplay, action }: PropsType) => {
  const inputRef = useRef<HTMLInputElement>(null);

  function focus() {
    let timerId: NodeJS.Timeout
    if (!isDisplay && !inputRef.current) return
    timerId = setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
    return timerId
  }

  useEffect(() => {
    const timerId = focus();
    return () => {
      clearTimeout(timerId)
    }

  }, [isDisplay]);

  return (
    <form
      onSubmit={action}
    >
      <input
        ref={inputRef}
        maxLength={15}
        className={styles.user_input}
        type="search"
      />
      <button
        aria-label='검색'
        title='검색 버튼'
        className={styles.search_btn}
        type="submit"
      >
        <HiSearch/>
      </button>
    </form>
  );
};

export default NaverSearchForm;
