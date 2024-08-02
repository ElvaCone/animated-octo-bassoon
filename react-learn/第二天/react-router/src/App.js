import router from "./router";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <div className="App">
      This is App.
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
