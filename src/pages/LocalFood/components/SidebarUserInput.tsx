import styles from "../LocalFood.module.scss";
import { KeyboardEvent } from "react";

const SidebarUserInput = ({ titleFilter }: { titleFilter: (e: KeyboardEvent<HTMLInputElement>) => void }) => {
  return (
    <input
      onKeyUp={titleFilter}
      className={styles.category_search_input}
      type="text"
      placeholder="키워드를 입력하세요!"
    />
  );
};

export default SidebarUserInput;
