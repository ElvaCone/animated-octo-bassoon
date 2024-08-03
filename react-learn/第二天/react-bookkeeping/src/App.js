import sum from '@/testCraco' // craco.config.js起效了,@符号等同于src目录了 jsconfig.json起效了，有路径联想功能了
import router from './router';
import { RouterProvider } from 'react-router-dom'

console.log(sum(1, 3));

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
