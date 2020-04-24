import { makeStyles } from "@material-ui/core";

const useIconStyles = makeStyles((theme) => ({
    icon: {
        display: 'inline',
        position: 'relative',
        fontColor: theme.palette.primary
    },
}));

export default useIconStyles;