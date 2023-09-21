import "./App.css";
import Header from "./components/UI/Header";
import Introduce from "./components/UI/Introduce";

function App() {
  return (
    <div className="App">
      <Header isStyle={true}></Header>
      <Introduce />

      <article className="video_con">
        <video
          src={process.env.PUBLIC_URL + "/images/egg.mp4"}
          autoPlay
          muted
          loop
        ></video>
      </article>
    </div>
  );
}

export default App;
