import React, {useEffect, useRef, useState} from 'react'
import { Avatar, Whisper, Popover, Dropdown } from 'rsuite'
import jwt_decode from "jwt-decode";
import LoginService from "../../services/LoginService";




const AvatarHook = () => {

    const triggerRef = useRef(null);
    const [user, setUser] = useState()

    function handleSelectMenu(eventKey, event) {
        console.log(eventKey);
        triggerRef.current.hide();
      }

    useEffect(() => {

        const token = LoginService.getCurrentUser()

        if (token) {
            let decoded = jwt_decode(token);
            setUser(decoded)
        }
    },[])

    const MenuPopover = ({ onSelect, ...rest }) => (
        <Popover {...rest} full>
          <Dropdown.Menu onSelect={onSelect}>
            <Dropdown.Item eventKey={1}>{user.username}</Dropdown.Item>
            <Dropdown.Item eventKey={2}>{user.email}</Dropdown.Item>
            <Dropdown.Item eventKey={3}>Download As...</Dropdown.Item>
            <Dropdown.Item eventKey={4}>Export PDF</Dropdown.Item>
            <Dropdown.Item eventKey={5}>Export HTML</Dropdown.Item>
            <Dropdown.Item eventKey={6}>Settings</Dropdown.Item>
            <Dropdown.Item eventKey={7}>About</Dropdown.Item>
          </Dropdown.Menu>
        </Popover>
      );
    return (
        <Whisper
            placement="bottomEnd"
            trigger="click"
            triggerRef={triggerRef}
            speaker={<MenuPopover onSelect={handleSelectMenu} />}
        >
            <Avatar size="xs" src="https://avatars2.githubusercontent.com/u/12592949?s=460&v=4" />
        </Whisper>


    )
}

export default AvatarHook
