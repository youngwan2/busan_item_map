import styles from '../NaverDictionary.module.scss';

interface PropsType {
    searchList: string[]
    onSearch: (value: string) => void
}
export default function NaverDictionaryRecentSearchList({ searchList = [], onSearch }: PropsType) {
    const dedupedSeachList = [...new Set(searchList)]
    return (
        <div aria-label="사용자 최근 검색어 목록" className={styles.recent_search_list_container}>
            <h3 className={styles.recent_search_list_title}>최근 검색어</h3>
            <div className={styles.recent_search_list}>
                {
                    dedupedSeachList.slice(0, 15).reverse().map((searchText) =>
                        <button
                            key={searchText}
                            onClick={() => onSearch(searchText)}
                            className={styles.search_text}>
                            {searchText}
                        </button>
                    )
                }
            </div>
        </div>
    )
}