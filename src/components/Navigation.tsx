import React from 'react'
import { Tab, makeStyles, Tabs, Theme } from '@material-ui/core';
import { SM } from '../constants/Constants';
import { Link } from '@reach/router';

const useStyles = makeStyles((theme: Theme) => ({
    tabsVertical: {
        width: '100%',
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        }
    },
    tabsHorizontal: {
        width: '100%',
        [theme.breakpoints.up(SM)]: {
            display: 'none'
        }
    }

}));



const Navigation: React.FC = () => {

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
                className={classes.tabsHorizontal}
                orientation='horizontal'
                centered
                value={value}
            >
                <Tab component={Link} {...a11yProps(0)} label="About Me" to="/about" />
                <Tab component={Link} {...a11yProps(1)} label="Blog" to="/blog" />
                <Tab component={Link} {...a11yProps(2)} label="Projects" to="/projects" />
            </Tabs>
            <Tabs
                onChange={handleChange}
                indicatorColor="primary"
                className={classes.tabsVertical}
                orientation='vertical'
                variant="fullWidth"
                value={value}
            >
                <Tab component={Link} {...a11yProps(0)} label="About Me" to="/about" />
                <Tab component={Link} {...a11yProps(1)} label="Blog" to="/blog" />
                <Tab component={Link} {...a11yProps(2)} label="Projects" to="/projects" />
            </Tabs>
        </>
    )
}

export default Navigation;
