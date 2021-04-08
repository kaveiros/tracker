import React from 'react'
import { Nav, Sidenav, Icon, Dropdown, Drawer, } from 'rsuite'
import { Link } from 'react-router-dom';

const DrawerHook = ({handleToggle, expand}) => {

    return(
        <Drawer
            show={expand}
            backdrop={true}
            placement="left"
            size="xs"
            onHide={handleToggle}
        >
            <Drawer.Header>
                <div>
                    <Icon icon="logo-analytics" size="lg" style={{ verticalAlign: 0 }} />
                    <span style={{ marginLeft: 12 }}>Tracker</span>
                </div>
            </Drawer.Header>
            <Drawer.Body>
                <Sidenav>
                    <Sidenav.Body>
                        <Nav>
                            <Nav.Item componentClass="div" icon={<Icon icon="dashboard" />} onClick={handleToggle}>
                                <Link className="rs-dropdown-item-content" style={{ textDecoration: 'none' }} to="/">Αρχική</Link>
                            </Nav.Item>
                            <Dropdown
                                eventKey="34"
                                trigger="hover"
                                title="Εισερχόμενα 'Εργα"
                                icon={<Icon icon="import" />}
                                placement="rightStart"
                            >
                                <Dropdown.Item componentClass="div" onSelect={handleToggle}>
                                    <Link className="rs-dropdown-item-content" style={{ textDecoration: 'none' }} to="/incoming-work-tab">Προσθήκη εισερχόμενου</Link>
                                </Dropdown.Item>
                                <Dropdown.Item componentClass="div" onSelect={handleToggle}>
                                    <Link className="rs-dropdown-item-content" style={{ textDecoration: 'none' }} to="/incomingWorkTable">Πίνακας εισερχομένων</Link>
                                </Dropdown.Item>
                            </Dropdown>
                            <Dropdown
                                eventKey="34"
                                trigger="hover"
                                title="Εξερχόμενα 'Εργα"
                                icon={<Icon icon="export" />}
                                placement="rightStart"
                            >
                                <Dropdown.Item componentClass="div" onSelect={handleToggle}>
                                    <Link className="rs-dropdown-item-content" style={{ textDecoration: 'none' }} to="/outgoing-work-tab">Προσθήκη εξερχομένου</Link>
                                </Dropdown.Item>
                                <Dropdown.Item componentClass="div" onSelect={handleToggle}>
                                    <Link className="rs-dropdown-item-content" style={{ textDecoration: 'none' }} to="/outgoingWorkTable">Πίνακας εξερχομένων</Link>
                                </Dropdown.Item>
                            </Dropdown>
                            <Dropdown
                                eventKey="31"
                                trigger="hover"
                                title="Προσωπικό"
                                icon={<Icon icon="vcard" />}
                                placement="rightStart"
                            >
                                <Dropdown.Item componentClass="div" onSelect={handleToggle}>
                                    <Link className="rs-dropdown-item-content" style={{ textDecoration: 'none' }} to="/employeetab">Προσθήκη εργαζομένου</Link>
                                </Dropdown.Item>
                                <Dropdown.Item componentClass="div" onSelect={handleToggle}>
                                    <Link className="rs-dropdown-item-content" style={{ textDecoration: 'none' }} to="/employeeTable">Πίνακας εργαζομένων</Link>
                                </Dropdown.Item>
                            </Dropdown>
                            <Dropdown
                                eventKey="36"
                                trigger="hover"
                                title="Έργαλεία"
                                icon={<Icon icon="wrench" />}
                                placement="rightStart"
                            >
                                <Dropdown.Item href="/tools" eventKey="3-4">Προσθήκη εργαλείου</Dropdown.Item>
                                <Dropdown.Item href="/tools" eventKey="3-4">Πίνακας εργαλειών</Dropdown.Item>
                            </Dropdown>
                            <Dropdown
                                eventKey="365"
                                trigger="hover"
                                title="Αποθήκη"
                                icon={<Icon icon="building" />}
                                placement="rightStart"
                            >
                                <Dropdown.Item href="/warehouse" eventKey="3-3">Προσθήκη υλικών</Dropdown.Item>
                                <Dropdown.Item href="/warehouse-table" eventKey="3-4">Πίνακας υλικών</Dropdown.Item>
                            </Dropdown>
                            <Dropdown
                                eventKey="4"
                                trigger="hover"
                                title="Ρυθμίσεις"
                                icon={<Icon icon="gear-circle" />}
                                placement="rightStart"
                            >
                                <Dropdown.Item componentClass="div" onSelect={handleToggle}>
                                    <Link className="rs-dropdown-item-content" style={{ textDecoration: 'none' }} to="/adminPage">
                                        Διαχείριση
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item componentClass="div" onSelect={handleToggle}>
                                    <Link className="rs-dropdown-item-content" style={{ textDecoration: 'none' }} to="/sector">Τομείς</Link></Dropdown.Item>
                            </Dropdown>
                        </Nav>

                    </Sidenav.Body>
                </Sidenav>
            </Drawer.Body>
        </Drawer>

    )

}

export default DrawerHook
