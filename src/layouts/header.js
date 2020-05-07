import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <nav>
    <div className="logo">
      <Link to="/">Safe Support Chat</Link>
    </div>

    <div className="hide-on-mobile">
      <ul className="horizontal">
        <li><Link to={'/getting-started'}>Getting Started</Link></li>
        <li><Link to={'/using-the-support-chat'}>Using the Chat</Link></li>
        <li><Link to={'/customizing-your-account'}>Account Customization</Link></li>
        <li><Link to={'/encryption'}>Encryption</Link></li>
        <li><Link to={'/troubleshooting'}>Troubleshooting</Link></li>
        <li><Link to={'/platform-customization'}>Platform Customization</Link></li>
      </ul>
    </div>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
