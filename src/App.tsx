import React from "react";
import Search from "./components/UI/Search";
import "./App.css";
import Header from "./components/UI/Header";
// import ItemTable from "./components/UI/ItemTable";

function App() {
  return (
    <div className="App">
      <Header isStyle={false}></Header>
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
