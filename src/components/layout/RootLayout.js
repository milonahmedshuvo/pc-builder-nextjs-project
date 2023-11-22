import React, { Children } from 'react'
import Navber from '../shered/Navber'
import Footer from '../shered/Footer'

const RootLayout = ({children}) => {


  return (
    <div>
      <Navber></Navber>
      {children}
      <Footer></Footer>
    </div>
  )
}

export default RootLayout;
