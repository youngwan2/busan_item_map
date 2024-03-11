import styles from '../NaverDictionary.module.scss';
import { DictionaryType } from '../NaverDictionary';

interface Type {
  items?: DictionaryType[];
  error: string;
}

function NaverDictionaryList({ items, error }: Type) {
  const isError = error.length > 1;
  return (
    <section className={styles.result_section}>
      {Array.isArray(items) && !isError ? (
        items.map((item, i) => {
          return (
            <ol className={styles.item_ul} key={i}>
              <li>
                {' '}
                <h2>
                  {i + 1}. {item.title.replaceAll('<b>', '').replaceAll('</b>', '')}
                </h2>
              </li>
              <li>{item.description.replaceAll('<b>', '').replaceAll('</b>', '')}</li>
              <li>
                {' '}
                <a target="_blank" href={`${item.link}`}>
                  자세히보기..
                </a>
              </li>
            </ol>
          );
        })
      ) : (
        <h4 style={{ margin: '3em auto', textAlign: 'center', maxWidth: 300 }}>{error}</h4>
      )}
    </section>
  );
}

export default NaverDictionaryList;
