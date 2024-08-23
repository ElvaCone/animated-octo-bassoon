import TestChildren from "./components/TestChildren"
import TestUseState from "./components/TestUseState"


function App() {
  return (
    <>
      <div>
        This is App.
      </div>
      <div>
        TestChildren:
      </div>
      <TestChildren />
      <div>
        TestUseState:
      </div>
      <TestUseState />
    </>
  )
}

export default App

