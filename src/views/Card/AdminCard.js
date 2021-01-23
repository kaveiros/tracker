import React from 'react'
import {Button, Panel} from 'rsuite'
import {Link} from 'react-router-dom'


const Card = (props) => {

    const {imgIcon, headerTitle, description, buttonTitle, navigationLink} = props

    return (
        <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240 }}>
    <img src={imgIcon} height="240" />
        <Panel header={headerTitle}>
          <p>
            <small>{description}
            <Button appearance="ghost" ><Link to={navigationLink}>{buttonTitle}</Link></Button>
            </small>
          </p>
        </Panel>
      </Panel>
    )

}

export default Card