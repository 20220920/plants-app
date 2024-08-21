import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import Sidebar from "../../components/sidebar/Sidebar"
import Intro from "../../components/introduction/Intro"
import "./Profile.css"


export default function Profile() {

  return (
    <>
     <Navbar />
     <div className="profileContainer">
     <Sidebar />
     <Intro />
     </div>
     <Footer />

    </>
  )
}
