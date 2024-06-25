import { Link } from 'react-router-dom';
import styles from './GuideMessage.module.scss';

interface PropsType {
  path: string;
  subPath: string;
  mainName: string;
  stylesClassName?: string;
  subName?: string;
  finalPathName?: string;
  totalCount?: number;
}

export default function GuideMessage({
  path,
  subPath,
  mainName,
  subName,
  finalPathName,
  totalCount,
  stylesClassName,
}: PropsType) {
  // const TWO_PATH =
  return (
    <article className={`${styles.guide} ${stylesClassName}`}>
      <Link to={path}>{mainName}</Link>
      {/* 경로 깊이 */}
      {subName ? (
        finalPathName ? (
          <span>
            {' '}
            {`>`} <Link to={subPath}> {subName}</Link> {'>'} {finalPathName}{' '}
          </span>
        ) : (
          <span>
            {' '}
            {`>`} <Link to={path + subPath}> {subName}</Link>
          </span>
        )
      ) : null}
      {/* 콘텐츠 갯수 */}
      {totalCount ? `(${totalCount})` : null}
    </article>
  );
}
