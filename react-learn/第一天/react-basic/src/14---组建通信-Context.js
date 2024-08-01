import { useState, createContext, useContext } from 'react'

const MsgContext = createContext() // 创建Context

function A() {
  return (
    <div>
      This is A.
      {/* 被Context包起来的可以使用Context */}
      {useContext(MsgContext)}
      <B />
    </div>
  )
}

function B() {
  return (
    <div>
      This is B.
      {/* 被Context包起来的可以使用Context */}
      {useContext(MsgContext)}
    </div>
  )
}

function App() {

  const [msg, setMsg] = useState('This is Context.')

  return (
    < div className="App" >
      {/* 用Context包起来 */}
      <MsgContext.Provider value={msg}>
        This is App.
        <A />
      </MsgContext.Provider>
    </div>
  );
}

export default App;
