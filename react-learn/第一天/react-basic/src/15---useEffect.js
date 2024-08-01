import { useState, useEffect } from 'react'

const URL = 'http://geek.itheima.net/v1_0/channels'

function App() {

  const [list, setList] = useState([])

  useEffect(() => {
    async function getList() { // 异步
      try {
        const res = await fetch(URL) // 获取数据
        const jsonRes = await res.json() // 转成对象
        setList(jsonRes.data.channels)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    getList()
  }, [])

  return (
    < div className="App" >
      <ul>
        {list.map(item => (<li key={item.id}>{item.name}</li>))}
      </ul>
    </div>
  );
}

export default App;
