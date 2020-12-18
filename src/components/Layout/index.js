import React from 'react'
import PropTypes from 'prop-types'

import MenuBar from '../MenuBar'

const Layout = ({ children }) => {
  return (
    <>
      <MenuBar />
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
