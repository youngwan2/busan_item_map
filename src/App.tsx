import "./App.css";
import Introduce from "./components/UI/Introduce";
import GPT from "./util/kakao/gpt";
function App() {
  return (
    <div className="App">
      <Introduce />
      <GPT/>
      <article className="background">
        <img src={process.env.PUBLIC_URL + "/images/background.png"} alt="background"/>
      </article>
    </div>
  );
}

export default App;
