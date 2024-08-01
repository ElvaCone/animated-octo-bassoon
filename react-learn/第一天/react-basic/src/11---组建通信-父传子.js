function Son(props) { // props对于子组件而言是只读的 props可传递任意数据，例如数字、字符串、布尔值、数组、对象、函数、JSX

  console.log(props);
  return (<div>This is son. {props.name} {props.children}</div>)
}

function App() {

  const name = 'This is app name.'

  return (
    < div className="App" >
      <Son
        name={name}
        str={'aaa'}
        num={18}
        bool={false}
        arr={['aaa', 'bbb']}
        obj={{ name: 'Tom' }}
        func={() => console.log('aaa')}
        jsx={<div>This is child div.</div>}
      >
        <span>This is special props children.</span> // children是一个特殊的props
      </Son>
    </div>
  );
}

export default App;
