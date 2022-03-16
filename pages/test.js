import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import GridViewIcon from '@mui/icons-material/GridView';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import AddIcon from '@mui/icons-material/Add';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { convertLength } from '@mui/material/styles/cssUtils';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function VerticalTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            className='m-5'
            sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: convertLength }}
        >
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider' }}
                className="bg-color3 rounded-btn"
            >
                <Tab className='mt-2' icon={<GridViewIcon />} iconPosition="start" label="Dashboard" {...a11yProps(0)} />
                <Tab icon={<ArrowUpwardIcon />} iconPosition="start" label="Transfer" {...a11yProps(1)} />
                <Tab icon={<AddIcon />} iconPosition="start" label="Top Up" {...a11yProps(2)} />
                <Tab icon={<PermIdentityIcon />} iconPosition="start" label="Profile" {...a11yProps(3)} />
                <div className></div>
                <Tab className='mt-5 mb-2' icon={<LogoutRoundedIcon />} iconPosition="start" label="Logout" {...a11yProps(4)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                Item One
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
            <TabPanel value={value} index={3}>
                Item Four
            </TabPanel>
            <TabPanel value={value} index={4}>
                Item Five
            </TabPanel>
        </Box>
    );
}
