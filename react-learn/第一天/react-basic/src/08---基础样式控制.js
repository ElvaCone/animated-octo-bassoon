import './08---基础样式控制.css' // 导入css样式表

function App() {

  // 可以将行内样式抽出来
  const div2Style = {
    color: 'pink',
    fontSize: '30px'
  }

  return (
    < div className="App" >
      {/* 行内，不推荐 */}
      {/* 超过一个单词就要小驼峰 */}
      <div style={{ color: 'red', fontSize: '40px' }}>This is div1</div>
      <div style={div2Style}>This is div2</div>
      {/* 要用className，不能用class */}
      <div className='foo'>This is div3</div>
      {/* 类 */}
    </div>
  );
}

export default App;
