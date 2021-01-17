import React from 'react'
import {Button, Panel,Icon} from 'rsuite'
import sector from '../../img/sector.png'


const Card = (props) => {

    const {imgIcon, headerTitle, description, buttonTitle, navigationLink} = props

    return (
        <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240 }}>
    <img src={imgIcon} height="240" />
        <Panel header={headerTitle}>
          <p>
            <small>{description}
            <Button appearance="ghost" ><a href={navigationLink}>{buttonTitle}</a></Button>
            </small>
          </p>
        </Panel>
      </Panel>
    )

}

export default Card