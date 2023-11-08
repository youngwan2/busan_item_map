import styles from "./NecessitiesMap.module.css";

const MapRender = () => {
    return (
        <section
        id="map"
        className={styles.KaMap}
        style={{ maxWidth: "500px", maxHeight: "500px", width:'90%',height:'100%',display: "block" }}
      ></section>
    );
}

export default MapRender;