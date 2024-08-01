import { useState } from 'react'

function App() {

  const [inputValue1, setInputValue1] = useState('')

  return (
    < div className="App" >
      <input type='text' value={inputValue1} onChange={(e) => setInputValue1(e.target.value)}></input>
    </div>
  );
}

export default App;
