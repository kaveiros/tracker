import React, {useEffect, useState} from 'react'
import {Whisper, Popover, Dropdown} from 'rsuite'
import jwt_decode from "jwt-decode";
import DoingRoundIcon from '@rsuite/icons/DoingRound';
import TokenService from "../../services/TokenService";


const selectedItemListener = (ev) => {
    console.log(ev)
}

const MenuPopover = React.forwardRef(({ onSelect, renderTitle:rendertitle,  user, ...rest }, ref) => (
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
    const token = TokenService.getCurrentUser()

    useEffect(() => {
        if (token) {
            let decoded = jwt_decode(token);
            //console.log(decoded)
            setUser(decoded)
        }
    },[token])

    const ref = React.useRef();
    const handleSelectMenu=(eventKey) =>( event) =>{
        //console.log(event);
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
            <DoingRoundIcon/>
        </Whisper>
    );




}

export default AvatarHook
