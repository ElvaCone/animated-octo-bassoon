import { useRef } from 'react'

function App() {

  const inputRef1 = useRef(null)
  const showDOM = () => {
    console.dir(inputRef1.current);
    console.log(inputRef1.current.value);
  }

  return (
    < div className="App" >
      <input type='text' ref={inputRef1}></input>
      <button onClick={showDOM}>获取DOM</button>
    </div>
  );
}

export default App;
