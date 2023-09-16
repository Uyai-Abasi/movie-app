import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Upcoming from '@/component/singlepage/upcoming';
import Moviedetail from '@/component/singlepage/moviedetail';
import Series from '@/component/singlepage/series';
import { useRouter } from 'next/router';
import Link from 'next/link';
import loadingGif from '/src/images/giphy.gif';
import { useMovieDetails } from '@/hooks/movies';

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

export default function MoviePage() {
  const [value, setValue] = React.useState(1); // Initialize with 1 for "Movies" tab
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);

  const { id } = router.query;
  const { data: movie, isLoading, isError } = useMovieDetails(id); // Use id here
console.log(movie)
  React.useEffect(() => {
    if (id) {
      setValue(1); // Set to the index of the "Movies" tab when id is present
    }
  }, [id]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) {
      setLoading(true);
      router.push('/');
    }
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex' }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="HOME" {...a11yProps(0)} />
        <Tab label="Movies" {...a11yProps(1)} />
        <Tab label="TV Series" {...a11yProps(2)} />
        <Tab label="Upcoming" {...a11yProps(3)} />
        <Tab label="Log out" {...a11yProps(4)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        {loading ? (
          <img src={loadingGif} alt="Loading" />
        ) : (
          <></>
        )}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {isLoading ? (
          <div>Loading...</div>
        ) : isError ? (
          <div>Error fetching movie details</div>
        ) : movie ? (
          <Moviedetail movie={movie} /> // Pass the movie data to the component
        ) : (
          <div>Movie not found</div>
        )}
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Series />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Upcoming />
      </TabPanel>
      <TabPanel value={value} index={4}></TabPanel>
    </Box>
  );
}
