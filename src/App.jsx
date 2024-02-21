import Footer from "./components/Footer/Footer"
import Profile from "./components/Profile/Profile"
import SectionCash from "./components/SectionCash/SectionCash"
import SectionProfile from "./components/SectionProfile/SectionProfile"

const App = () => {
  return (
    <>
      <Profile />
      <main>
        <SectionProfile />
        <SectionCash />
      </main>
      <Footer />
    </>
  )
}

export default App
