import Header from "./modules/header/Header"
import Banner from "./modules/banner/Banner"
import Description from "./modules/description/Description"
import Screens from "./modules/screens/Screens"
import Footer from "./modules/footer/Footer"
import Download from "./modules/download/Download"
import Contacts from "./modules/contacts/Contacts"

import { useEffect } from "react"
import { Observing } from "./utils/Observing"

function App() {
  useEffect(() => {
    Observing()
  }, [])

  return (
    <>
      <Header />
      <main>
        <Banner />
        <Description />
        <Screens />
        <Download />
        <Contacts />
      </main>
      <Footer />
    </>
  )
}

export default App