function App() {
  const handleClick1 = () => {
    console.log('111');
  }
  const handleClick2 = (e) => {
    console.log('222', e);
  }
  const handleClick3 = (name) => {
    console.log('333', name);
  }
  const handleClick4 = (name, e) => {
    console.log('444', name, e);
  }

  return (
    < div className="App" >
      <button onClick={handleClick1}>按钮1</button>
      <button onClick={handleClick2}>按钮2</button>
      {/* 传自定义参数就要变成箭头函数 */}
      <button onClick={() => handleClick3('ccc')}>按钮3</button>
      {/* 这里的参数顺序要和函数定义时的参数顺序一致 */}
      <button onClick={(e) => handleClick4('ddd', e)}>按钮4</button>
    </div>
  );
}

export default App;
