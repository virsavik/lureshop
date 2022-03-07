import React, { useEffect } from 'react';
import { Row, Col, Nav, NavItem, NavLink, TabContent, TabPane, Button, Input } from 'reactstrap';
import { useAppDispatch, useAppSelector } from '../../configs/store';
import { setUser as saveProfile } from '../../shared/reducers/user.reducer';
import './ProfileManager.css';

const ProfileManager = () => {
  const [activeTab, setActiveTab] = React.useState('1');
  const dispatch = useAppDispatch();

  const userData = useAppSelector(state => state.user.account);
  const [profile, setProfile] = React.useState({ ...userData });

  useEffect(() => {}, [activeTab]);

  const toggleTab = tabId => {
    setActiveTab(tabId);
  };

  const handleChangeProfile = e => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const onSave = () => {
    dispatch(saveProfile(profile));
  };

  return (
    <div className="bordered">
      <Row>
        <Col sm="12" md="4" lg="2">
          <div className="avatar">
            <img src={userData.ImageUrl} alt={userData.Fullname} />
          </div>
        </Col>
        <Col sm="12" md="8" lg="10">
          <h1>{userData.Fullname}</h1>
          <p>{userData.Email}</p>
          <p>{userData.Career}</p>
        </Col>
      </Row>
      <div className="mt-3">
        <Nav tabs>
          <NavItem>
            <NavLink className={activeTab === '1' ? 'active' : ''} onClick={() => toggleTab('1')}>
              Basic Info
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={activeTab === '2' ? 'active' : ''} onClick={() => toggleTab('2')}>
              Additional Info
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <table className="table" width="100%">
                  <tbody>
                    {Object.keys(profile).map((key, index) => (
                      <tr key={index}>
                        <th>{key}</th>
                        <td>
                          <p>{profile[key]}</p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <table className="table" width="100%">
                  <tbody>
                    {Object.keys(profile).map((key, index) => (
                      <tr key={index}>
                        <th>{key}</th>
                        <td>
                          <Input
                            type="text"
                            name={key}
                            defaultValue={profile[key]}
                            onChange={e => handleChangeProfile(e)}
                          />
                        </td>
                      </tr>
                    ))}
                    <tr>
                      <td colSpan={2}>
                        <Button block color="primary" onClick={() => onSave()}>
                          Save
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    </div>
  );
};
export default ProfileManager;
