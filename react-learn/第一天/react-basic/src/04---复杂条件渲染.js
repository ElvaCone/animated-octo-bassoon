function App() {
  let articalType = 0
  articalType = 1
  articalType = 2

  function getArticalTemplate() {
    if (articalType === 0) {
      return <div>我是无图模式</div>
    } else if (articalType === 1) {
      return <div>我是单图模式</div>
    } else {
      return <div>我是多图模式</div>
    }
  }

  return (
    < div className="App" >
      {/* 调用函数渲染不同的模板 */}
      {getArticalTemplate()}
    </div>
  );
}

export default App;
