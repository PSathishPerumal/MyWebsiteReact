import Hero from "./components/Hero"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Article from "./components/Article"
import TableSection from "./components/TableSection"
import Aside from "./components/Aside"
import Footer from "./components/Footer"

function App() {
  

  return (
    <>
   <Navbar />
   <Header />
   <Hero />
   <div className="container flex flex-col md:flex-row mx-auto">
   <main className="flex-1">
  <Article />
  <TableSection />
  
  </main>

  <Aside />
  
  </div>
  <Footer />
    </>
  )
}

export default App
