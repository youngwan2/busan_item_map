import styles from './Map.module.css';

/**
 * @param {string} id : 지도를 렌더링 할 요소 식별자
 */
const MapRender = ({ id }: { id: string }) => {
  return (
    <section
      id={`${id}`}
      className={styles.KaMap}
      style={{
        maxWidth: '500px',
        maxHeight: '500px',
        width: '90%',
        height: '100%',
        display: 'block',
      }}
    ></section>
  );
};

export default MapRender;
