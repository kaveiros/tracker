import React from 'react'
import {
  Content, Breadcrumb, Header, Steps,
  Panel
} from 'rsuite'
import EmployeeStep1 from './EmployeeStep1'
import EmployeeStep2 from './EmployeeStep2'

const EmployeeTab = () => {

  const [step, setStep] = React.useState(1);

  
    return (
      <Panel>
        <Header>
          <Breadcrumb>
            <Breadcrumb.Item href="/">Αρχική</Breadcrumb.Item>
            <Breadcrumb.Item href="/employeetab" active>Καρτέλα εργαζομένου</Breadcrumb.Item>
          </Breadcrumb>
        </Header>
        <Content>
          <Steps current={step}>
            <Steps.Item title="Βασικά στοιχεία" />
            <Steps.Item title="Παρατηρήσεις" />
          </Steps>
          <hr />
          <EmployeeStep1/>
          <EmployeeStep2/>
        </Content>
      </Panel>
    )

}

export default EmployeeTab