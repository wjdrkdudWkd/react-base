// import './App.css';
import MyHeader from './MyHeader';
import Counter from './Counter';
import Container from './Container';


function App() {

  let name = 'wjdrkdud';

  const style = {
    App: {
      backgroundColor: "white",
    },
    h2: {
      color: "red",
    },
    boldText: {
      color: "green",
    },
  };

  const number = 5;

  const counterProps = {
    a: 1,
    b: 2,
    c: 3,
    // initialValue: 5
  }

  return (
    <Container>
      <div className="App" style={style.App}>
        <MyHeader />
        <h2 style={style.h2}>안녕 리액트 {name}</h2>
        <b id='boldText' style={style.boldText}>
          {number}는 : {number % 2 === 0 ? "짝수" : "홀수"}
        </b>
        <Counter a={1} b={2} c={2} initialValue={5} />
      </div>
    </Container>

  );
}

export default App;
