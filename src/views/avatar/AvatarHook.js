import React, {useEffect, useRef, useState} from 'react'
import { Avatar, Whisper, Popover, Dropdown } from 'rsuite'
import jwt_decode from "jwt-decode";
import useAuthHook from "../../hook/useAuthHook";
import LoginService from "../../services/LoginService";




const AvatarHook = () => {

    const triggerRef = useRef(null);
    const [username, setUsername] = useState('')
    const  { user} = useAuthHook()


    function handleSelectMenu(eventKey, event) {
        console.log(eventKey);
        triggerRef.current.hide();
      }

    useEffect(() => {

        const data = LoginService.getCurrentUser()

        if (data) {
             const {token} = data
             console.log(token);
            let decoded = jwt_decode(token);
            // console.log(decoded)
            setUsername(decoded.username)
        }
    },[username])

    const MenuPopover = ({ onSelect, ...rest }) => (
        <Popover {...rest} full>
          <Dropdown.Menu onSelect={onSelect}>
            <Dropdown.Item >{user[0].username}</Dropdown.Item>
            <Dropdown.Item eventKey={2}>{user[0].email}</Dropdown.Item>
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
