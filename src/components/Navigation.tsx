import React from 'react'
import { Tab, makeStyles, Tabs, useMediaQuery, useTheme } from '@material-ui/core';
import { SM } from '../constants/Constants';
import { Link } from '@reach/router';

const useStyles = makeStyles(() => ({
    root: {
        width: '100%'
    }
}));



const Navigation: React.FC = () => {

    const theme = useTheme();
    const mobile = !useMediaQuery(theme.breakpoints.up(SM))

    const [value, setValue] = React.useState(0);

    const a11yProps = (index: any) => {
        return {
            id: `vertical-tab-${index}`,
            'aria-controls': `vertical-tabpanel-${index}`,
        };
    }

    const handleChange = (_event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    const classes = useStyles();

    return (
        <>
            <Tabs
                onChange={handleChange}
                indicatorColor="primary"
                className={classes.root}
                orientation={mobile ? 'horizontal' : 'vertical'}
                variant={mobile ? 'standard' : 'fullWidth'}
                centered
                value={value}
            >
                <Tab component={Link} {...a11yProps(0)} label="About Me" to="/about" />
                <Tab component={Link} {...a11yProps(1)} label="My stuff" to="/wiki" />
            </Tabs>
        </>
    )
}

export default Navigation;
