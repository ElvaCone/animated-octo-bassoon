import { useState, useEffect } from 'react'

function A() {
  const [count, setCount] = useState(0)

  // 没有依赖项
  // 组件初始渲染和组件更新时执行
  useEffect(() => {
    console.log('没有依赖项');
  })

  const updateCount = () => {
    setCount(count + 1)
  }

  return (
    < div>
      {count}
      <button onClick={updateCount}>没有依赖项</button>
    </div>
  );
}

function B() {
  const [count, setCount] = useState(0)

  // 有依赖项但为空数组
  // 组件初始渲染时执行
  useEffect(() => {
    console.log('有依赖项但为空数组');
  }, [])

  const updateCount = () => {
    setCount(count + 1)
  }

  return (
    < div>
      {count}
      <button onClick={updateCount}>有依赖项但为空数组</button>
    </div>
  );
}

function C() {
  const [count, setCount] = useState(0)

  // 有依赖项且不为空数组
  // 组件初始渲染和依赖项变化时执行
  useEffect(() => {
    console.log('有依赖项且不为空数组');
  }, [count])

  const updateCount = () => {
    setCount(count + 1)
  }

  return (
    < div>
      {count}
      <button onClick={updateCount}>有依赖项且不为空数组</button>
    </div>
  );
}

function App() {
  return (
    < div className="App" >
      <A />
      <B />
      <C />
    </div>
  );
}

export default App;
