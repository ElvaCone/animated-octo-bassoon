import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, goToNum } from './store/modules/counterStore'
import { fetchChannelList } from './store/modules/channelStore'

function App() {
  const { count } = useSelector(state => state.counter)
  const { channelList } = useSelector(state => state.channel)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchChannelList())
  }, [dispatch]) // 依赖项数组里要放dispatch

  return (
    <div className="App">
      <button onClick={() => dispatch(decrement())}>-</button>
      {count}
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(goToNum(10))}>go to 10</button>
      <button onClick={() => dispatch(goToNum(20))}>go to 20</button>
      <hr></hr>
      <ul>
        {channelList.map(item => (<li key={item.id}>{item.name}</li>))}
      </ul>
    </div>
  );
}

export default App;
