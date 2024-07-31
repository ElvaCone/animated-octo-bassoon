import { useState } from 'react'

function App() {

  // 数组中第一个元素是状态变量，第二个元素是设置状态变量的函数
  const [count1, setCount1] = useState(0) // 设置初始值
  let [count2, setCount2] = useState(0) // 设置初始值

  // 更新简单类型的函数
  const handleClick1 = () => {
    setCount1(count1 + 1) // 调用设置状态变量的函数
  }

  // 更新简单类型的函数
  const handleClick2 = () => {
    count2++ // 状态是只读的，应该替换它而不是修改它，直接修改状态变量无法引发视图更新
  }

  // 数组中第一个元素是状态变量，第二个元素是设置状态变量的函数
  const [form1, setForm1] = useState({ name: 'Jack' }) // 设置初始值
  const [form2, setForm2] = useState({ name: 'Jack' }) // 设置初始值

  // 更新复杂类型的函数
  const changeForm1 = () => {
    setForm1({
      ...form1,
      name: form1.name + 'a'
    }) // 调用设置状态变量的函数
  }

  // 更新复杂类型的函数
  const changeForm2 = () => {
    form2.name += 'a' // 状态是只读的，应该替换它而不是修改它，直接修改状态变量无法引发视图更新
  }

  return (
    < div className="App" >
      {/* 绑定点击事件 */}
      <button onClick={handleClick1}>替换：{count1}</button>
      <button onClick={handleClick2}>修改：{count2}</button>

      {/* 绑定点击事件 */}
      <button onClick={changeForm1}>替换：{form1.name}</button>
      <button onClick={changeForm2}>修改：{form2.name}</button>
    </div>
  );
}

export default App;
