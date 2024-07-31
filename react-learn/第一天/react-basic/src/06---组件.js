function App() {
  
  // 写成普通函数和箭头函数都行
  const Button1 = () => {
    return <button>按钮1</button>
  }

  return (
    < div className="App" >
      {/* 自闭合标签 */}
      <Button1 />
      {/* 成对标签 */}
      <Button1></Button1>
    </div>
  );
}

export default App;
