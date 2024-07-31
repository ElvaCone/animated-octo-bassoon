function App() {
  let isLogin = true
  isLogin = false

  return (
    < div className="App" >
      {/* 逻辑与 */}
      {isLogin && <span>登录了</span>}
      {/* 三元运算符 */}
      {isLogin ? <span>登录了</span> : <span>没登录</span>}
    </div>
  );
}

export default App;
