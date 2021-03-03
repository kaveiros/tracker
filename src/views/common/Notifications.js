import {Notification} from "rsuite";
import React from "react";

export const sectorErrorNotification = () => {Notification.error({description:"Σφάλμα στην ανάκτηση των τομέων.",
    placement:"topStart", duration:4000})}

export const showErrorNotification = (errorString) => {Notification.error({description: errorString
        .split('\n').map((str, i) => <p key={i}>{str}</p>),
    placement:"topStart", duration:7000})}

export const showSaveErrorNotification = (errorString) => {Notification.error({description: errorString
        .split('\n').map((str, i) => <p key={i}>{str}</p>),
    placement:"topStart", duration:4000})}

export const showSuccessNotification = (successString) => {Notification.success({description: successString,
    placement:"topStart", duration:4000})}

export const waringNotification = (warningString) => {Notification.warning({description: warningString,
    placement:"topStart", duration:4000})}
