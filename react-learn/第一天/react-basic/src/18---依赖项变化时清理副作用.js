import { useState, useEffect } from 'react'

function A() {
  const [size, setSize] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth)
      console.log('size变化');
    }

    window.addEventListener('resize', handleResize)

    // 有依赖项且不为空数组时在依赖项变化时执行
    return () => {
      window.removeEventListener('resize', handleResize)
      console.log('清除副作用');
    }
  }, [size])

  return (
    < div>
      window size: {size}
    </div>
  );
}

function App() {
  return (
    < div className="App" >
      This is App.
      <A />
    </div>
  );
}

export default App;
