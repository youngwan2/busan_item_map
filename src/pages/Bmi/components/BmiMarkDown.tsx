import styles from "./BmiMarkDown.module.scss";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { highweight2 } from "../../../data/Markdown/highweight2";
import { lowweight } from "../../../data/Markdown/lowweight";
import { standard } from "../../../data/Markdown/standard";
import { obesity } from "../../../data/Markdown/obesity";

function BmiMarkDown({ choice }: { choice: string }) {
  const markdown = switchMarkdown(choice);

  function switchMarkdown(choice: string) {
    switch (choice) {
      case "저체중": {
        return lowweight;
      }
      case "과체중": {
        return highweight2;
      }
      case "정상": {
        return standard;
      }
      case "비만": {
        return obesity;
      }
      default : {
        return lowweight
      }
    }
  }

  return (
    <section className={styles.markdown_container}>
      <Markdown className={styles.markdown} remarkPlugins={[remarkGfm]}>
        {markdown}
      </Markdown>
    </section>
  );
}

export default BmiMarkDown;
