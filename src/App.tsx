import Search from "./components/UI/Search";
import "./App.css";

function App() {
  return (
    <div className="App">
      <article className="video_con">
        <video
          src={process.env.PUBLIC_URL + "/images/egg.mp4"}
          autoPlay
          muted
          loop
        ></video>
      </article>
      <Search fixed={false}></Search>
      {/* <ItemTable></ItemTable> */}
    </div>
  );
}

export default App;
