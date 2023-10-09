import "./App.css";
import Header from "./components/UI/Header";
import Introduce from "./components/UI/Introduce";
import GPT from "./util/kakao/gpt";
function App() {
  return (
    <div className="App">
      <Header isStyle={true}></Header>
      <Introduce />
      <GPT/>
      <article className="background">
        <img src={process.env.PUBLIC_URL + "/images/background.png"} alt="background"/>
      </article>
    </div>
  );
}

export default App;
