import React from 'react'
import "./styles/index.css"
import Navbar from './components/Navbar'
import Upload from './components/Upload'
import Footer from './components/Footer'
import AnalysisPage from './components/Analysis'

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Upload /> */}
      <AnalysisPage />
      <Footer />
    </div>
  )
}

export default App