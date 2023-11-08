import styles from "../NaverDictionary.module.scss";
import { DictionaryType } from "../NaverDictionary";

interface Type {
  items?: DictionaryType[];
}

function NaverDictionaryList({ items }: Type) {
  return (
    <section className={styles.result_section}>
      {Array.isArray(items)
        ? items.map((item, i) => {
            return (
              <ol className={styles.item_ul} key={i}>
                <li>
                  {" "}
                  <h2>
                    {i + 1}.{" "}
                    {item.title.replaceAll("<b>", "").replaceAll("</b>", "")}
                  </h2>
                </li>
                <li>
                  {item.description
                    .replaceAll("<b>", "")
                    .replaceAll("</b>", "")}
                </li>
                <li>
                  {" "}
                  <a target="_blank" href={`${item.link}`}>
                    자세히보기..
                  </a>
                </li>
              </ol>
            );
          })
        : null}
    </section>
  );
}

export default NaverDictionaryList;
