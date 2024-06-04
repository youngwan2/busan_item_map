
import styles from '../NaverDictionary.module.scss';

import {type MouseEventHandler} from 'react'

import { HiX } from 'react-icons/hi';

interface PropsType {
  onToggle:MouseEventHandler<HTMLButtonElement>
}
const NaverCloseIcon = ({onToggle}: PropsType) => {
  return (
    <button
      aria-label='백과사전 모달 닫기'
      title='백과사전 모달 닫기'
      className={styles.close_btn}
      onClick={onToggle}
    >
      <HiX/>
    </button>
  );
};

export default NaverCloseIcon;
