import { useSelector } from 'react-redux'

function App() {
  const { count } = useSelector(state => state.counter)
  return (
    <div className="App">
      {count}
    </div>
  );
}

export default App;
