import React, { useContext, useEffect, useState, useRef  } from 'react'
import { Avatar, Whisper, Popover } from 'rsuite'
import { AuthContext } from '../../context/Context'
import jwt_decode from "jwt-decode";

let decoded

const AvatarHook = () => {

    //const triggerRef = useRef(null);
    const triggerRef = React.createRef()
    const authContext = useContext(AuthContext)
    const [username, setUsername] = useState('')
    const open = () => triggerRef.current.open();

    useEffect(() => {
        if (authContext.token) {
            decoded = jwt_decode(authContext.token);
            setUsername(decoded.username)
        }
    }, [])

    const speaker = (
        <Popover title="Title">
          <p>{username}</p>
          <p>Content</p>
          <p>
          </p>
        </Popover>
      );


    return (
        <div>{username}</div>
        // <Whisper placement="bottom" speaker={speaker} ref={triggerRef} trigger="none">
        // <Avatar onClick={open} size="xs" src="https://avatars2.githubusercontent.com/u/12592949?s=460&v=4"/>
        // </Whisper>


    )
}

export default AvatarHook