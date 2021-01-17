import React from 'react'
import { FormControl, Input, Panel } from 'rsuite'

const AdditionalInfo = () => {
    
    return(
        <Panel>
            <FormControl componentClass="textarea" rows={4} placeholder="Παρατηρήσεις"/>
            <FormControl placeholder="Απο τμήμα"/>
            <FormControl placeholder="Προς τμήμα"/>
        </Panel>
    )

} 

export default AdditionalInfo