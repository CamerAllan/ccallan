import React from "react"
import useIconClasses from '../styles/IconStyle'
import { Avatar as CoreAvatar } from "@material-ui/core"

export const MaterialIcon = ({ icon }) => {
    let iconName = icon.replace(/Icon$/, '')
    let resolved = require(`@material-ui/icons/${iconName}Outlined`).default

    if (!resolved) {
        throw Error(`Could not find material-ui-icons/${iconName}`)
    }

    return (
        <CoreAvatar>
            {React.createElement(resolved, { className: useIconClasses().icon, color: 'secondary', fontSize: 'inherit' })}
        </CoreAvatar>
    )
}