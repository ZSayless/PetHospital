import Navbar from "./components/custom/ui/NavBar"
import Banner from "./components/custom/ui/Banner"
import FindHospital from "./components/custom/ui/FindHospital"
import HospitalList from "./components/custom/ui/HospitalList"
import Footer from "./components/custom/ui/Footer"

function App() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto my-14">
        <Banner />
        <FindHospital />
        <HospitalList />
      </div>
      <Footer />
    </>
  )
}

export default App
