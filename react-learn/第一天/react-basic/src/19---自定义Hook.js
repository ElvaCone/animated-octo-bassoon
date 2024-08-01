import { useState } from 'react'

function useToggle() { // 自定义Hook名字用use开头
  const [isShow, setIsShow] = useState(true)

  const toggle = () => setIsShow(!isShow)

  return {
    isShow,
    toggle
  }
}

function App() {
  const { isShow, toggle } = useToggle()
  return (
    < div className="App" >
      <button onClick={toggle}>显示/隐藏</button>
      {isShow && '哈哈哈哈哈哈哈哈哈哈哈哈'}
    </div>
  );
}

export default App;
