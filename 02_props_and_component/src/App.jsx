import "./App.css";
import Card from "./components/Card";

function App() {
  let acerDesc =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?";
  let acerPrice = 1000;
  let macDesc =
    "lorem macbook sit amet consectetur adipisicing elit. Excepturi, debitis?";
  let macPrice = 2000;
  return (
    <>
      <div className="flex space-x-10">
        <Card name="Acer" desc={acerDesc} price={acerPrice} />
        <Card name="Macbook" desc={macDesc} price={macPrice} />
      </div>
    </>
  );
}

export default App;
