import React, { Component } from 'react'

import Header from '../Header/index.jsx'
import Carousel from '../Carousel/index.jsx'
import Worklist from '../Worklist/index.jsx'
import About from '../About/index.jsx'
import Contact from '../Contact/index.jsx'
import Footer from '../Footer/index.jsx'

export class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <Carousel />
        <Worklist />
        <About />
        <Contact />
        <Footer />
      </div>
    )
  }
}

export default App
