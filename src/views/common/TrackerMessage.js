import React from 'react'
import { Message } from 'rsuite'

const TrackerMessage = (props) => {
    const {type, description} = props
    return (
        <Message
            showIcon
            type={type}
            closable

        >{description}</Message>

    )
}

export default TrackerMessage
