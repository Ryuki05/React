import { useState } from "react";
import { ColorText } from "./components/colorText";


function App() {
  // 画面を再描画する必要がある
  // 状態管理をする
  // let count = 0;
  const [count,setCount] = useState(0);

  const CountUp = () => {
    setCount((prev) => prev + 1);
  }

  // JS内でのCSSの当て方(オブジェクトを当てる)
  const countStyle = {
    color:"blue",
    fontSize:"30px",
  }


  return (
    <div className="App">
      {/* JSを使うときは{} */}
      {console.log("test")}
      <ColorText color="red" message="A" />
      <ColorText color="yellow" message="A" />
      <ColorText color="blue" message="A" />
      <h2 style={countStyle}>{count}</h2>
      <button onClick={CountUp}>カウントアップ</button>
    </div>
  );
}

export default App;
