import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import First from "./pages/index"
import Second from "./special/index"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<First />} />
        <Route path='/wedding-iftah-rangga' element={<Second />} />
      </Routes>
    </Router>
  )
}

export default App