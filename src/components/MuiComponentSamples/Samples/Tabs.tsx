import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import PhoneIcon from "@mui/icons-material/Phone";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { Typography } from "@mui/material";
import React from "react";
import Styles from "../../../styles/styles"

const h6Styles = Styles.h6
const groupStyle = Styles.box

interface TabPanelProps {
  children?: React.ReactNode
  index: any
  value: any
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  }
}

export default function TabsExample() {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box sx={{
      flexGrow: 1,
      bgcolor: 'background.paper',
    }}>
      <Typography variant="h6" sx={h6Styles}>Default Tab</Typography>
      <Box position="static" sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab wrapped label="New Arrivals in the Longest Text of Nonfiction that should appear in the next line" {...a11yProps(0)} />
          <Tab label="Favourites" {...a11yProps(1)} />
          <Tab label="Nearby" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>

      <Typography variant="h6" sx={h6Styles}>Disabled Tab</Typography>
      <Box position="static" sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab wrapped label="New Arrivals in the Longest Text of Nonfiction that should appear in the next line" {...a11yProps(0)} />
          <Tab label="Disabled" disabled {...a11yProps(1)} />
          <Tab label="Nearby" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>

      <Typography variant="h6" sx={h6Styles}>Centered</Typography>
      <Box position="static" sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          aria-label="simple tabs example"
        >
          <Tab label="New Arrivals" {...a11yProps(0)} />
          <Tab label="Favourites" {...a11yProps(1)} />
          <Tab label="Nearby" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>

      <Typography variant="h6" sx={h6Styles}>Full Width</Typography>
      <Box position="static" sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="New Arrivals" {...a11yProps(0)} />
          <Tab label="Favourites" {...a11yProps(1)} />
          <Tab label="Nearby" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>

      <Typography variant="h6" sx={h6Styles}>Icon Tab</Typography>
      <Box position="static">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab icon={<PhoneIcon />} label="Recents" {...a11yProps(0)} />
          <Tab icon={<FavoriteIcon />} label="Favourites" {...a11yProps(1)} />
          <Tab icon={<PersonPinIcon />} label="Nearby" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>

      <Typography variant="h6" sx={h6Styles}>Scrollable</Typography>
      <Box position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Item 1" />
          <Tab label="Item 2" />
          <Tab label="Item 3 with much longer text" />
          <Tab label="Item 4" />
          <Tab label="Item 5" />
          <Tab label="Item 6" />
          <Tab label="Item 7" />
          <Tab label="Item 8" />
          <Tab label="Item 9" />
          <Tab label="Item 10" />
          <Tab label="Item 11" />
          <Tab label="Item 12" />
          <Tab label="Item 13" />
          <Tab label="Item 14" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Item 1
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item 2
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item 3
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item 4
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item 5
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item 6
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item 7
      </TabPanel>
      <TabPanel value={value} index={7}>
        Item 8
      </TabPanel>
      <TabPanel value={value} index={8}>
        Item 9
      </TabPanel>
      <TabPanel value={value} index={9}>
        Item 10
      </TabPanel>
      <TabPanel value={value} index={10}>
        Item 11
      </TabPanel>
      <TabPanel value={value} index={11}>
        Item 12
      </TabPanel>
      <TabPanel value={value} index={12}>
        Item 13
      </TabPanel>
      <TabPanel value={value} index={13}>
        Item 14
      </TabPanel>

      <Typography variant="h6" sx={h6Styles}>Vertical</Typography>
      <Box
        sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: 'divider' }}
        >
          <Tab label="Item 1" {...a11yProps(0)} />
          <Tab label="Item 2" {...a11yProps(1)} />
          <Tab wrapped label="Item 3 with much longer text" {...a11yProps(2)} />
          <Tab label="Item 4" {...a11yProps(3)} />
          <Tab label="Item 5" {...a11yProps(4)} />
          <Tab label="Item 6" {...a11yProps(5)} />
          <Tab label="Item 7" {...a11yProps(6)} />
          <Tab label="Item 8" {...a11yProps(0)} />
          <Tab label="Item 9" {...a11yProps(1)} />
          <Tab label="Item 10" {...a11yProps(2)} />
          <Tab label="Item 11" {...a11yProps(3)} />
          <Tab label="Item 12" {...a11yProps(4)} />
          <Tab label="Item 13" {...a11yProps(5)} />
          <Tab label="Item 14" {...a11yProps(6)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          Item 1
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item 2
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item 3
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item 4
        </TabPanel>
        <TabPanel value={value} index={4}>
          Item 5
        </TabPanel>
        <TabPanel value={value} index={5}>
          Item 6
        </TabPanel>
        <TabPanel value={value} index={6}>
          Item 7
        </TabPanel>
        <TabPanel value={value} index={7}>
          Item 8
        </TabPanel>
        <TabPanel value={value} index={8}>
          Item 9
        </TabPanel>
        <TabPanel value={value} index={9}>
          Item 10
        </TabPanel>
        <TabPanel value={value} index={10}>
          Item 11
        </TabPanel>
        <TabPanel value={value} index={11}>
          Item 12
        </TabPanel>
        <TabPanel value={value} index={12}>
          Item 13
        </TabPanel>
        <TabPanel value={value} index={13}>
          Item 14
        </TabPanel>
      </Box>
    </Box>


  )
}
