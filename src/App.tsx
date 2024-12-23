import Navbar from "./components/custom/ui/NavBar"
import Footer from "./components/custom/ui/Footer"
import Root from "./components/custom/ui/routes/Root";
import HospitalDetails from "./components/custom/ui/routes/HospitalDetails";
import NotFound from "./components/custom/ui/routes/NotFound";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto my-14">
        <Routes>
          <Route path="*" element={<NotFound />}/>
          <Route path="/" element={<Root />} />
          <Route path="/hospital/:hospitalId" element={<HospitalDetails />}/>
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App
