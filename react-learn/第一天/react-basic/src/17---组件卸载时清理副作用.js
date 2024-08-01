import { useState, useEffect } from 'react'

function A() {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('定时器运行了一次!');
    }, 1000);

    // 有依赖项但为空数组时在组件卸载时执行
    return () => {
      clearInterval(timer)
      console.log('清除副作用');
    }
  }, [])

  return (
    < div>
      This is A.
    </div>
  );
}

function App() {
  const [isShow, setIsShow] = useState(true)

  return (
    < div className="App" >
      This is App.
      {isShow && <A />}
      <button onClick={() => setIsShow(false)}>卸载组件清除副作用</button>
    </div>
  );
}

export default App;
