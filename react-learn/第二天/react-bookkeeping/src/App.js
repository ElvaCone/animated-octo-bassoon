import sum from '@/testCraco' // craco.config.js起效了,@符号等同于src目录了 jsconfig.json起效了，有路径联想功能了

console.log(sum(1, 3));

function App() {
  return (
    <div className="App">
      This is App.
    </div>
  );
}

export default App;
