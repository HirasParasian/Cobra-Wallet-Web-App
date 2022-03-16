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
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { Row, Col, Container } from 'react-bootstrap'
import Button from '@mui/material/Button';
import { borderRight } from '@mui/system';

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
        <Container>
            <Box

                sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: "fit-content" }}
            >
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    sx={{ borderLeft: 2, borderColor: 'divider', borderRight: 0 }}
                    className="bg-color3 rounded-btn px-3"
                >
                    <Tab className='mt-2' icon={<GridViewIcon />} iconPosition="start" label="Dashboard" {...a11yProps(0)} />
                    <Tab icon={<ArrowUpwardIcon />} iconPosition="start" label="Transfer" {...a11yProps(1)} />
                    <Tab icon={<AddIcon />} iconPosition="start" label="Top Up" {...a11yProps(2)} />
                    <Tab icon={<PermIdentityIcon />} iconPosition="start" label="Profile" {...a11yProps(3)} />
                    <div className="my-5"></div>
                    <Tab className='mt-5 mb-2' icon={<LogoutRoundedIcon />} iconPosition="start" label="Logout" {...a11yProps(4)} />
                </Tabs>
                <div className='ms-5 bg-color4 w-100 rounded-btn d-grid'>
                    <TabPanel value={value} index={0} >
                        <Container>
                            <Row className='bg-color2 rounded-btn py-2'>
                                <Col sm={12} md={6} className="d-flex flex-column justify-content-between text-align-between ">
                                    <h5>Balance</h5>
                                    <h2>Rp120.000</h2>
                                    <h5>+62 813-9387-7946</h5>
                                </Col>
                                <Col sm={12} md={2} className="d-flex flex-column justify-content-end">
                                </Col>
                                <Col sm={12} md={4} className="justify-content-end text-align-center d-grid">
                                    <Button startIcon={<ArrowUpwardIcon />} className='mx-4 my-1 py-3 rounded-btn bg-color3' variant="contained" >
                                        Transfer
                                    </Button>
                                    <Button startIcon={<AddIcon />} className='mx-4  my-1 py-3 rounded-btn bg-color3' variant="contained" >
                                        Top Up
                                    </Button>
                                </Col>
                            </Row>
                        </Container>
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
                </div>
            </Box>
        </Container>
    );
}
