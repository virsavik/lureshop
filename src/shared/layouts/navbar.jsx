import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavLink,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

const WNavBar = (props) => {
  const { title, styles, expand, items } = props;
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <Navbar style={styles} fixed="top" dark expand={expand}>
      <NavbarBrand href="/">{title}</NavbarBrand>
      <NavbarToggler className="me-2" onClick={() => toggleNavbar()}>
        <FontAwesomeIcon icon="bars" />
      </NavbarToggler>
      <Collapse navbar isOpen={isOpen}>
        <Nav className="me-auto" navbar>
          {items.length > 0 &&
            items.map(it => {
              if (it.subItems) {
                return (
                  <UncontrolledDropdown key={it.label} inNavbar nav>
                    <DropdownToggle caret nav>
                      {it.icon && <FontAwesomeIcon icon={it.icon} />}
                      &nbsp;{it.label}
                    </DropdownToggle>
                    <DropdownMenu end>
                      {it.subItems &&
                        it.subItems.map(sub => (
                          <DropdownItem key={sub.label} href={sub.path}>
                            {sub.label}
                          </DropdownItem>
                        ))}
                    </DropdownMenu>
                  </UncontrolledDropdown>
                );
              } else {
                return (
                  <NavItem key={it.label}>
                    <NavLink href={it.path}>
                      <FontAwesomeIcon icon={it.icon} />
                      &nbsp; {it.label}
                    </NavLink>
                  </NavItem>
                );
              }
            })}
        </Nav>
        <Nav navbar>
          <NavItem>
            <NavLink href="/cart">
              <FontAwesomeIcon icon="cart-shopping" />
              &nbsp;Cart
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/login">
              <FontAwesomeIcon icon="right-to-bracket" />
              &nbsp;Login
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};
export default WNavBar;
