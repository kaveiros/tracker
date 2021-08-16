import React from 'react'
import { Nav, Sidenav, Dropdown, Drawer, } from 'rsuite'
import DashboardIcon from '@rsuite/icons/Dashboard';
import ImportIcon from '@rsuite/icons/Import';
import ToolsIcon from '@rsuite/icons/Tools';
import StorageIcon from '@rsuite/icons/Storage';
import ExportIcon from '@rsuite/icons/Export'
import GearIcon from '@rsuite/icons/Gear';
import MemberIcon from '@rsuite/icons/Member';


const DrawerHook = ({handleToggle, renderTitle:rendertitle, open, isAdmin}) => {

    return(
        <Drawer
            open={open}
            backdrop={true}
            placement="left"
            size="xs"
            onClose={handleToggle}>
            <Drawer.Header>
                Tracker
            </Drawer.Header>
            <Drawer.Body>
                <Sidenav>
                    <Sidenav.Body>
                        <Nav>
                            <Nav.Item href="/" icon={<DashboardIcon />} onSelect={handleToggle}>
                                Αρχική
                            </Nav.Item>
                            <Dropdown
                                trigger="hover"
                                title="Εισερχόμενα 'Εργα"
                                icon={<ImportIcon/>}
                                placement="rightStart"
                            >
                                <Dropdown.Item  href="/incoming-work-tab" onSelect={handleToggle}>
                                    Προσθήκη εισερχόμενου
                                </Dropdown.Item>
                                <Dropdown.Item  href="/incomingWorkTable" onSelect={handleToggle}>
                                    Πίνακας εισερχομένων
                                </Dropdown.Item>
                            </Dropdown>
                            <Dropdown
                                eventKey="34"
                                trigger="hover"
                                title="Εξερχόμενα 'Εργα"
                                icon={<ExportIcon/>}
                                placement="rightStart"
                            >
                                <Dropdown.Item  href="/outgoing-work-tab" onSelect={handleToggle}>
                                    Προσθήκη εξερχομένου
                                </Dropdown.Item>
                                { isAdmin && <Dropdown.Item  href="/outgoingWorkTable" onSelect={handleToggle}>
                                    Πίνακας εξερχομένων
                                </Dropdown.Item>}
                            </Dropdown>
                            <Dropdown
                                eventKey="31"
                                trigger="hover"
                                title="Προσωπικό"
                                icon={<MemberIcon />}
                                placement="rightStart"
                            >
                                <Dropdown.Item  href="/employeetab" onSelect={handleToggle}>
                                    Προσθήκη εργαζομένου
                                </Dropdown.Item>
                                <Dropdown.Item  href="/employeeTable" onSelect={handleToggle}>
                                    Πίνακας εργαζομένων
                                </Dropdown.Item>
                            </Dropdown>
                            <Dropdown
                                eventKey="36"
                                trigger="hover"
                                title="Έργαλεία"
                                icon={<ToolsIcon/>}
                                placement="rightStart"
                            >
                                <Dropdown.Item  href="/tools" eventKey="3-4">Προσθήκη εργαλείου</Dropdown.Item>
                                <Dropdown.Item  href="/tools" eventKey="3-4">Πίνακας εργαλειών</Dropdown.Item>
                            </Dropdown>
                            <Dropdown
                                eventKey="365"
                                trigger="hover"
                                title="Αποθήκη"
                                icon={<StorageIcon/>}
                                placement="rightStart"
                            >
                                <Dropdown.Item  href="/warehouse" eventKey="3-3">Προσθήκη υλικών</Dropdown.Item>
                                <Dropdown.Item  href="/warehouse-table" eventKey="3-4">Πίνακας υλικών</Dropdown.Item>
                            </Dropdown>
                            <Dropdown
                                eventKey="4"
                                trigger="hover"
                                title="Διαχείριση"
                                icon={<GearIcon />}
                                placement="rightStart"
                            >
                                <Dropdown.Item  href="/adminPage" onSelect={handleToggle}>Πίνακες</Dropdown.Item>
                                <Dropdown.Item  href="/sector" onSelect={handleToggle}>Προσθήκη τομέα</Dropdown.Item>
                                <Dropdown.Item  href="/section" onSelect={handleToggle}>Προσθήκη τμήματος</Dropdown.Item>
                                <Dropdown.Item  href="/user" as="div" onSelect={handleToggle}>Προσθήκη χρήστη</Dropdown.Item>
                            </Dropdown>
                        </Nav>

                    </Sidenav.Body>
                </Sidenav>
            </Drawer.Body>
        </Drawer>
    )

}

export default DrawerHook
