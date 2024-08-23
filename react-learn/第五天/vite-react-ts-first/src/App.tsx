import TestChildren from "./components/TestChildren"
import TestUseState from "./components/TestUseState"
import TestUseRef from "./components/TestUseRef"


function App() {
  return (
    <>
      This is App.<br />
      TestChildren:<br /><TestChildren />
      TestUseState:<br /><TestUseState />
      TestUseRef:<br /><TestUseRef />
    </>
  )
}

export default App

