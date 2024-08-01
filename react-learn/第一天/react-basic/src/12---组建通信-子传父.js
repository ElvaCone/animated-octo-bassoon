import { useState } from 'react'

function Son(props) {
  const sonMsg = 'This is son msg.'
  return (<button onClick={() => props.onGetSonMsg(sonMsg)}>子传父按钮</button>) // 子组件调用父组件的函数时传参
}

function App() {

  const [msg, setMsg] = useState('')

  const getMsg = (msg) => {
    setMsg(msg)
  }

  return (
    < div className="App" >
      This is app. {msg}
      {/* 给子组件绑定一个函数 */}
      <Son onGetSonMsg={getMsg} />
    </div>
  );
}

export default App;
