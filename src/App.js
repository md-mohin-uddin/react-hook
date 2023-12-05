import logo from './logo.svg';
import './App.css';
import Todo from './component/Todo';
// import Counter from './component/Counter';
import MyComponent from './component/MyComponent';
import Title from './component/Title';
import ShowCount from './component/ShowCount';
import Button from './component/Button';
import { useCallback, useMemo, useState } from 'react';
import Form from './Form';

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const incrementByOne = useCallback(() => {
    setCount1((prevCount) => prevCount + 1);
  }, []);
  const incrementByFive = useCallback(() => {
    setCount2((prevCount) => prevCount + 5);
  }, []);
  const isEvenOrOdd = useMemo(() => {
    let i = 0;
    while (i < 100000000) i += 1;
    return count1 % 2 === 0;
  }, [count1]);
  return (
    <div className="App">


      <Form />
      <Title />
      <ShowCount count={count1} title="Counter 1" />
      <span>{isEvenOrOdd ? 'Even' : 'Odd'}</span>
      <Button handleClick={incrementByOne}>Increment By One</Button>
      <hr />
      <ShowCount count={count2} title="Counter 2" />
      <Button handleClick={incrementByFive}>Increment By Five</Button>
    </div>
  );
}

export default App;
