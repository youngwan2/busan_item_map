import { Link } from 'react-router-dom';
import styles from './GuideMessage.module.scss';

interface PropsType {
  path: string;
  mainName: string;
  subName?: string;
  finalPathName?: string
  totalCount?: number;
}



export default function GuideMessage({ path, mainName, subName, finalPathName, totalCount }: PropsType) {
  const TWO_PATH = `>` + subName
  const THREE_PATH = `>` + subName + '>' + finalPathName
  return (
    <article className={styles.guide}>
      <Link to={path}>{mainName}</Link>
      {/* 경로 깊이 */}
      {subName
        ?
        finalPathName
          ? THREE_PATH
          : TWO_PATH : null}
      {/* 콘텐츠 갯수 */}
      {totalCount
        ? `(${totalCount})`
        : null}
    </article>
  );
}
