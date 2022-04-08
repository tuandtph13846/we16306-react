import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

type Props = {}

const WebsiteLayout = (props: Props) => {
  return (
    <div>
      <div className="header" id="home">
        <header>
          <Header />
        </header>
        <Outlet />

      </div>


      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default WebsiteLayout