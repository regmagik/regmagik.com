import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `gold`,
      marginBottom: `1.45rem`,
	  boxShadow: `inset -1em -1em 6em rgba(0,0,0,0.3),
		  0 0.3em 0.5em rgba(0,0,0,0.3)`, 
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 940,
        padding: 5,
      }}
    >
      <h1 style={{marginBottom: 2, paddingBottom:4 }}>
        <Link
          to="/"
          style={{
            color: `black`,
			textShadow: `2px 2px 2px lightblue`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
	  The joy of personal computing
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
