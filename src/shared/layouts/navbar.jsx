import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
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
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../configs/store';
import { reset as logoutGoogle } from '../reducers/user.reducer';
import { toast } from 'react-toastify';

const WNavBar = props => {
  const userData = useAppSelector(state => state.user.account);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { title, styles, expand, items } = props;
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);

  const onGoogleLogout = () => {
    dispatch(logoutGoogle());
    navigate('/');
    toast.warn('Logout Successful');
  };

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
                    <NavLink tag={Link} to={it.path}>
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
            <NavLink tag={Link} to="/cart">
              <FontAwesomeIcon icon="cart-shopping" />
              &nbsp;Cart
            </NavLink>
          </NavItem>
          {userData && JSON.stringify(userData) !== JSON.stringify({}) ? (
            <UncontrolledDropdown inNavbar nav>
              <DropdownToggle caret nav>
                &nbsp;Logged In
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem onClick={() => navigate('/profile')}>Profile</DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={() => onGoogleLogout()}>Google Logout</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          ) : (
            <NavItem>
              <NavLink tag={Link} to="/login">
                <FontAwesomeIcon icon="right-to-bracket" />
                &nbsp;Login
              </NavLink>
            </NavItem>
          )}
        </Nav>
      </Collapse>
    </Navbar>
  );
};
export default WNavBar;
