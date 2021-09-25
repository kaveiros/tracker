import React, {useEffect, useRef, useState} from 'react'
import {Avatar, Whisper, Popover, Dropdown, Button} from 'rsuite'
import jwt_decode from "jwt-decode";
import LoginService from "../../services/LoginService";

const selectedItemListener = (ev) => {
    console.log(ev)
}

const MenuPopover = React.forwardRef(({ onSelect, renderTitle:rendertitle,  user:user, ...rest }, ref) => (
    <Popover ref={ref} {...rest} full>

        <Dropdown.Menu onSelect={selectedItemListener}>
            <Dropdown.Item eventKey={1}>{user.username}</Dropdown.Item>
            <Dropdown.Item eventKey={2}>{user.email}</Dropdown.Item>
            <Dropdown.Item eventKey={3}>Download As...</Dropdown.Item>
            <Dropdown.Item eventKey={4}>Export PDF</Dropdown.Item>
            <Dropdown.Item eventKey={5}>Export HTML</Dropdown.Item>
            <Dropdown.Item eventKey={6}>Settings</Dropdown.Item>
            <Dropdown.Item eventKey={7}>About</Dropdown.Item>
        </Dropdown.Menu>
    </Popover>
));

const AvatarHook = () => {

    const [user, setUser] = useState()
    useEffect(() => {

        const token = LoginService.getCurrentUser()

        if (token) {
            let decoded = jwt_decode(token);
            //console.log(decoded)
            setUser(decoded)
        }
    },[])

    const ref = React.useRef();
    const handleSelectMenu=(eventKey) =>( event) =>{
        console.log(event);
        ref.current.close();
    }
    return (
        <Whisper
            placement="bottomStart"
            controlId="control-id-with-dropdown"
            trigger="click"
            ref={ref}
            speaker={<MenuPopover onSelect={handleSelectMenu} user={user} />}
        >
            <Avatar>File</Avatar>
        </Whisper>
    );




}

export default AvatarHook
