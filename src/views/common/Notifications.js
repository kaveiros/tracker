import {Notification} from "rsuite";
import React from "react";

export const sectorErrorNotification = () => {
    return (
        <Notification type="error" placement="topStart" duration={4000}>
            <div>"Σφάλμα στην ανάκτηση των τομέων."</div>
        </Notification>
    )
}

/**
 * Shows an error notification
 * @param errorString
 * @returns {JSX.Element}
 */
export const showErrorNotification = (errorString) => {

    return (
        <Notification placement="topStart" header="Σφάλμα" duration={7000} type="error">
            <div>{errorString
                // .split('\n').map((str, i) => <p key={i}>{str}</p>)
            }
            </div>
        </Notification>
    )
}

/**
 * Shows success Notification
 * @param successString
 * @returns {JSX.Element}
 */
export const showSuccessNotification = (successString) => {
    return (
        <Notification type="success" header="Επιτυχία" duration={4000}>
            <div>{successString}</div>
        </Notification>
    )
}

/**
 * Shows warning notification
 * @param warningString
 * @returns {JSX.Element}
 */
export const waringNotification = (warningString) => {
    return( <Notification type="warning" duration={4000}>
            <div>{warningString}</div>
        </Notification>
    )
}
