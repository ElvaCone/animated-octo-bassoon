function App() {
  const list = [
    { id: 1001, name: 'aaa' },
    { id: 1002, name: 'bbb' },
    { id: 1003, name: 'ccc' },
  ]
  
  return (
    < div className="App" >
      <ul>
        {/* 没有key会报错 */}
        {list.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
