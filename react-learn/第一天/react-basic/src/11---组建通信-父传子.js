function Son(props) {
  return (<div>This is son. {props.name}</div>)
}

function App() {

  const name = 'This is app name.'

  return (
    < div className="App" >
      <Son name={name} />
    </div>
  );
}

export default App;
