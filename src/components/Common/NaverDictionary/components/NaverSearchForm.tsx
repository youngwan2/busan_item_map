import { FormEventHandler, useEffect, useRef } from 'react';
import styles from '../NaverDictionary.module.scss';

interface PropsType {
  display: boolean;
  action: FormEventHandler<HTMLFormElement>
}
const NaverSearchForm = ({ display, action }: PropsType) => {
  const inputRef = useRef<HTMLInputElement>(null);

  function focus() {
    let timerId: NodeJS.Timeout
    if (!display && !inputRef.current) return
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

  }, [display]);

  return (
    <form
      onSubmit={action}
    >
      <input
        ref={inputRef}
        className={styles.user_input}
        type="search"
      />
      <button
        className={styles.search_btn}
        type="submit"
      >
        찾기
      </button>
    </form>
  );
};

export default NaverSearchForm;
