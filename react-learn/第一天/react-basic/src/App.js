function App() {
  const count = 100
  function getName() {
    return 'Jack'
  }
  return (
    <div className="App">
      This is new React app.
      {/* 字符串 */}
      {'This is string.'}
      {/* 变量 */}
      {count}
      {/* 函数调用 */}
      {getName()}
      {/* 方法调用 */}
      {new Date().getDate()}
      {/* 对象 */}
      <div style={{ color: 'red' }}>This is div.</div>
    </div>
  );
}

export default App;
