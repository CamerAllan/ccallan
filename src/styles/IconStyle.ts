import { makeStyles } from "@material-ui/core";

const useIconStyles = makeStyles((theme) => ({
    icon: {
        display: 'inline',
        position: 'relative',
        top: 2,
        marginRight: 4,
        fontColor: theme.palette.primary
    },
}));

export default useIconStyles;