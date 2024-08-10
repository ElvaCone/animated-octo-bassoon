import sum from '@/testCraco' // craco.config.js起效了,@符号等同于src目录了 jsconfig.json起效了，有路径联想功能了
import router from './router';
import { RouterProvider } from 'react-router-dom'
import store from './store';
import { Provider } from 'react-redux'
/* The following line can be included in your src/index.js or App.js file */
import '@/styles/App.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';

console.log(sum(1, 3));

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
