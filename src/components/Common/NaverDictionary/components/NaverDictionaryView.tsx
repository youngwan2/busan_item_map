import axios from 'axios';
import styles from '../NaverDictionary.module.scss';
import { DictionaryType } from '../NaverDictionary';
import { CSSProperties, FormEvent, useState } from 'react';
import ReactSpinner from '../../../UI/ReactSpinner';
import NaverDictionaryList from './NaverDictionaryList';
import NaverCloseIcon from './NaverCloseIcon';
import NaverSearchForm from './NaverSearchForm';
import { config } from '../../../../config/config';
import { toast } from 'react-toastify';

interface PropsType {
  display: boolean;
  setDisplay: (p: boolean) => void;
}

const NaverDictionaryView = ({ display, setDisplay }: PropsType) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('')
  const [items, setItems] = useState<DictionaryType[]>();

  const modalDisplayStyle: CSSProperties = display
    ? {
      visibility: 'visible',
      opacity: 1,
      transform: 'translate(-50%,0)',
    }
    : {
      visibility: 'hidden',
      opacity: 0,
      transform: 'translate(-50%,5%)',
    }


  async function searchNaverDictionary(value: string) {
    if (value.length < 2) return toast.error('2자 이상 입력해주세요.')
    setLoading(true);
    const url = config.prefix + config.host + '/naver-search?search=' + value

    try {
      const { data } = await axios.get(url)
      const { status, meg, result } = data
      const { items } = result
      if (status === 200) { toast.success(meg); return setItems(items) }
      if (status !== 200) { toast.error(meg); return setError(meg) }
    } catch (error) {
      toast.error('데이터 조회에 실패하였습니다.')
      setError('서버에서 문제가 발생하였습니다. 나중에 다시시도 해주세요')
    } finally {
      setLoading(false)
    }
  }

  const searchAction = async (formEvent: FormEvent<HTMLFormElement>) => {
    formEvent.preventDefault()
    const input = formEvent.currentTarget.firstChild
    if (!(input instanceof HTMLInputElement)) return
    searchNaverDictionary(input.value || '')

  };

  return (
    <article
      className={styles.naver_search_modal}
      style={modalDisplayStyle}
    >
      <h3 className={styles.title}>네이버 백과사전</h3>
      <NaverCloseIcon setDisplay={setDisplay} />
      <NaverSearchForm display={display} action={searchAction} />
      {loading ? <ReactSpinner /> : <NaverDictionaryList items={items} error={error} />}
    </article>
  );
};

export default NaverDictionaryView;
