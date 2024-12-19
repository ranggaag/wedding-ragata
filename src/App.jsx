import Index from "./pages/index"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/wedding-iftah-rangga" element={<Index />} />
      </Routes>
    </Router>
  )
}

export default App