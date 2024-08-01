import { useState } from 'react'

function A({ onGetAMsg }) {
  const aMsg = '兄弟组件通信了.'
  return (<button onClick={() => onGetAMsg(aMsg)}>兄弟组件通信按钮</button>) // 子组件调用父组件的函数时传参
}

function B({ aMsg }) {
  return (<div>{aMsg}</div>) // 使用状态变量
}

function App() {

  const [aMsg, setAMsg] = useState('')

  const getAMsg = (aMsg) => {
    setAMsg(aMsg)
  }

  return (
    < div className="App" >
      This is App.
      {/* 给子组件绑定一个函数 */}
      <A onGetAMsg={getAMsg} />
      {/* 给子组件绑定一个状态变量 */}
      <B aMsg={aMsg} />
    </div>
  );
}

export default App;
