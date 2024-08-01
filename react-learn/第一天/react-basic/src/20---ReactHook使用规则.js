import { useState } from 'react'

// const [value, setValue] = useState('') // Hook只能在组件或自定义Hook中调用

function App() {
  if (Math.random() > 0.5) {
    // const [value, setValue] = useState('') // Hook只能在最顶层调用
  }
  return (
    < div className="App" >
      This is App.
    </div>
  );
}

export default App;
