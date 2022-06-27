import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from 'reactstrap';

const dark = `rgb(102, 103, 171)`;
const lite = `white`;
const headerBg = dark;
const headerText = lite;
const Header = ({ siteTitle }) => (
  <header
    style={{background: headerBg, marginBottom: `1.45rem`,
      boxShadow: `inset -1em -1em 6em rgba(0,0,0,0.3), 0 0.3em 0.5em rgba(0,0,0,0.3)`, 
    }}>
    <div style={{color: headerText, margin: `0 auto`, maxWidth: 940, padding: 5,}}>
		<Menu siteTitle={siteTitle}/>
	</div>
  </header>
)

export function Menu({siteTitle}) {
  
	const [state, setState] = React.useState({
		collapsed: true
	});

	function toggleNavbar () {
	  setState(s => ({...s,
		collapsed: !s.collapsed
	  }));
	}
  
	return (
		<Navbar className="navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow">
			<NavbarBrand className="text-light" tag={Link} href="/"> {siteTitle} </NavbarBrand>
			<i>The joy of personal computing</i>

			<NavbarToggler onClick={toggleNavbar} className="mr-2" />
			<Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!state.collapsed} navbar>
			<Nav>
				<NavItem>
				<Link className="nav-link text-light" to="/">Home</Link>
				</NavItem>
				<NavItem>
				<Link className="nav-link text-light" to="/downloads">Downloads</Link>
				</NavItem>
				<NavItem>
				<Link className="nav-link text-light" to="/pay">Order</Link>
				</NavItem>
				<NavItem>
				<Link className="nav-link text-light" to="/searchcut">More...</Link>
				</NavItem>
				<NavItem>
				<Link className="nav-link text-light" to="/contact">Contact</Link>
				</NavItem>
			</Nav>
			</Collapse>
		</Navbar>
	);
}


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
