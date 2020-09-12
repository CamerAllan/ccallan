import { Box } from "@material-ui/core"
import React from "react"
import useIconClasses from '../styles/IconStyle'

export const MaterialIcon = (icon) => {
    let iconName = icon.replace(/Icon$/, '')
    let resolved = require(`@material-ui/icons/${iconName}Outlined`).default

    if (!resolved) {
        throw Error(`Could not find material-ui-icons/${iconName}`)
    }

    return (
        <Box>
            {React.createElement(resolved, { className: useIconClasses().icon, fontSize: 'inherit', color: 'primary' })}
        </Box>
    )
}