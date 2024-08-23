import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Suspense, lazy } from "react"

const TestUseState = lazy(() => import('./components/TestUseState'))
const TestChildren = lazy(() => import('./components/TestChildren'))
const TestUseRef = lazy(() => import('./components/TestUseRef'))


function App() {
  return (
    <Router> // BrowserRouter重命名为了Router
      <Suspense>
        <Routes>
          <Route path="/TestUseState" element={<TestUseState />} />
          <Route path="/TestChildren" element={<TestChildren />} />
          <Route path="/TestUseRef" element={<TestUseRef />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App

