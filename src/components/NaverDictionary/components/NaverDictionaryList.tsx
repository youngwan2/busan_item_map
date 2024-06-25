import styles from '../NaverDictionary.module.scss';

import NaverDictionaryCard from './NaverDictionaryCard';

import type { DictionaryType } from '../NaverDictionary';

interface PropsType {
  items: DictionaryType[];
  error: string;
}

function NaverDictionaryList({ items }: PropsType) {
  return (
    <ul className={styles.naver_dictionary_list_container}>
      {items.map((item, i) => (
        <NaverDictionaryCard key={item.link} item={item} i={i} />
      ))}
    </ul>
  );
}

export default NaverDictionaryList;
