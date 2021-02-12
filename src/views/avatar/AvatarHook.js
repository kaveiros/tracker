import React, { useContext, useEffect, useState, useRef } from 'react'
import { Avatar, Whisper, Popover, Dropdown } from 'rsuite'
import { AuthContext } from '../../context/Context'
import jwt_decode from "jwt-decode";

let decoded

const AvatarHook = () => {

    const triggerRef = useRef(null);
    const [username, setUsername] = useState('')

    function handleSelectMenu(eventKey, event) {
        console.log(eventKey);
        triggerRef.current.hide();
      }

    useEffect(() => {
        const data = localStorage.getItem("userData")

        
        if (data) {
            const tokenJson = JSON.parse(data)
            console.log(tokenJson.token);
            decoded = jwt_decode(tokenJson.token);
            console.log(decoded)
            setUsername(decoded.email)
        }
    }, [])

    const MenuPopover = ({ onSelect, ...rest }) => (
        <Popover {...rest} full>
          <Dropdown.Menu onSelect={onSelect}>
            <Dropdown.Item >{username}</Dropdown.Item>
            <Dropdown.Item eventKey={2}>New File with Current Profile</Dropdown.Item>
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