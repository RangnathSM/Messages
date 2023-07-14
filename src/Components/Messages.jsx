import React, { useState } from 'react';
import { Table,TableCell,TableHead, TableBody, TableRow, Menu, MenuItem, Typography, FormControlLabel, Checkbox  } from '@mui/material';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import { Box } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import TableContainer from '@mui/material/TableContainer';
import SortIcon from '@mui/icons-material/Sort'
import '../Styles/Messages.css'
import { Link } from 'react-router-dom';

const Messages = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [anchorElSort, setAnchorElSort] = useState(null);
  const [anchorElFilter, setAnchorElFilter] = useState(null);
  const [sortOption, setSortOption] = useState('');
  const [filterCities, setFilterCities] = useState([]);

  const handleSortClick = (event) => {
    setAnchorElSort(event.currentTarget);
  };

  const handleSortClose = () => {
    setAnchorElSort(null);
  };

  
  let handleSortOptionSelect = (option) => {
    setSortOption(option);
    setAnchorElSort(null);
  };
 

  const handleFilterClick = (event) => {
    setAnchorElFilter(event.currentTarget);
  };
  
  const handleFilterClose = () => {
    setAnchorElFilter(null);
  };

  const handleCityCheckboxChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setFilterCities([...filterCities, value]);
    } else {
      setFilterCities(filterCities.filter((city) => city !== value));
    }
  };

  const getMessages = () => {
    
    const messages = [
      {
        id:1,
        hospital: 'Apolo Hospital',
        city: 'Banglore',
        Messages: 'Hii Medpick, I am Dr. Jayadev from Apolo Hospital your product is good and service maintenance is also good Thank you.  ',
        date: '2023/07/01',
        contact:'+91-9591932562'
      },
      {
        id:2,
        hospital: 'Megan Hospital',
        city: 'Shimoga',
        Messages: 'Hii Vajra, I am Dr. Devaraj from Megan Hospital your product is good and service maintenance is also good Thank you.  ',
        date: '2023/07/02',
        contact:'+91-9258193562'
      },
      {
        id:3,
        hospital: 'SS Hospital',
        city: 'Davangere',
        Messages: 'Hii, I am Dr. Rakesh from SS Hospital your product is good and service maintenance is also good Thank you.  ',
        date: '2023/07/03',
        contact:'+91-6258193562'
      },
      {
        id:4,
        hospital: 'Subbhai Hospital',
        city: 'Shimoga',
        Messages: 'Hii Med, I am Dr.Abhijith from Subbhai Hospital your product is good and service maintenance is also good Thank you.  ',
        date: '2023/06/01',
        contact:'+91-7258195562'
      },
      {
        id:5,
        hospital: 'KIIMS Hospital',
        city: 'Banglore',
        Messages: 'Hii Vajra, I am Dr. Chandan from KIIMS Hospital your product is good and service maintenance is also good Thank you.  ',
        date: '2023/06/02',
        contact:'+91-8258593562'
      },
      {
        id:6,
        hospital: 'Max Hospital',
        city: 'Shimoga',
        Messages: 'Hii Medpick, I am Dr. Praveen from Max Hospital your product is good and service maintenance is also good Thank you.  ',
        date: '2023/06/03',
        contact:'+91-6358183562'
      },
      {
        id:7,
        hospital: 'Chigetere Hospital',
        city: 'Davangere',
        Messages: 'Hii , I am Dr. Raghu from Chigetere Hospital your product is good and service maintenance is also good Thank you.  ',
        date: '2023/06/04',
        contact:'+91-9258793562'
      },
      {
        id:8,
        hospital: 'Jayadeva Hospital',
        city: 'Davangere',
        Messages: 'Hii , I am Dr. Jagadeesh from Chigetere Hospital your product is good and service maintenance is also good Thank you.  ',
        date: '2023/06/04',
        contact:'+91-7481935623'
      },
      {
        id:1,
        hospital: 'Apolo Hospital',
        city: 'Banglore',
        Messages: 'Hii Medpick, I am Dr. Jayadev from Apolo Hospital your product is good and service maintenance is also good Thank you.  ',
        date: '2023/07/01',
        contact:'+91-9591932562'
      },
      {
        id:2,
        hospital: 'Megan Hospital',
        city: 'Shimoga',
        Messages: 'Hii Vajra, I am Dr. Devaraj from Megan Hospital your product is good and service maintenance is also good Thank you.  ',
        date: '2023/07/02',
        contact:'+91-9258193562'
      },
      {
        id:3,
        hospital: 'SS Hospital',
        city: 'Davangere',
        Messages: 'Hii, I am Dr. Rakesh from SS Hospital your product is good and service maintenance is also good Thank you.  ',
        date: '2023/07/03',
        contact:'+91-6258193562'
      },
      {
        id:4,
        hospital: 'Subbhai Hospital',
        city: 'Shimoga',
        Messages: 'Hii Med, I am Dr.Abhijith from Subbhai Hospital your product is good and service maintenance is also good Thank you.  ',
        date: '2023/06/01',
        contact:'+91-7258195562'
      },
      {
        id:5,
        hospital: 'KIIMS Hospital',
        city: 'Banglore',
        Messages: 'Hii Vajra, I am Dr. Chandan from KIIMS Hospital your product is good and service maintenance is also good Thank you.  ',
        date: '2023/06/02',
        contact:'+91-8258593562'
      },
      {
        id:6,
        hospital: 'Max Hospital',
        city: 'Shimoga',
        Messages: 'Hii Medpick, I am Dr. Praveen from Max Hospital your product is good and service maintenance is also good Thank you.  ',
        date: '2023/06/03',
        contact:'+91-6358183562'
      },
      {
        id:7,
        hospital: 'Chigetere Hospital',
        city: 'Davangere',
        Messages: 'Hii , I am Dr. Raghu from Chigetere Hospital your product is good and service maintenance is also good Thank you.  ',
        date: '2023/06/04',
        contact:'+91-9258793562'
      },
      {
        id:8,
        hospital: 'Jayadeva Hospital',
        city: 'Davangere',
        Messages: 'Hii , I am Dr. Jagadeesh from Chigetere Hospital your product is good and service maintenance is also good Thank you.  ',
        date: '2023/06/04',
        contact:'+91-7481935623'
      },

    ];

    let filteredData = [...messages];
    if (filterCities.length > 0) {
        filteredData = filteredData.filter((request) => filterCities.includes(request.city));
      }
    if (sortOption === 'newestToOldest') {
        filteredData.sort((a, b) => new Date(b.date) - new Date(a.date));
      } else if (sortOption === 'oldestToNewest') {
        filteredData.sort((a, b) => new Date(a.date) - new Date(b.date));
      }
      return filteredData;
    };
    
    const filteredMessages = getMessages().filter((request) =>
    request.hospital.toLowerCase().includes(searchQuery.toLowerCase())
  );

    return ( 
        <Box maxWidth='100%' minHeight='100%' sx={{background:'#FAF5EE'}}>
            <Box display='flex'  maxWidth='100%'  marginLeft={{xl:'235px', lg:'70px',md:'0px', sm:'0px'}}>
            <Typography sx={{fontSize:{xl:'24px', lg:'24px', md:'22px', sm:'20px', xs:'20px'},marginTop:'10px', fontWeight:'500', color:'#FF731D', marginLeft:'20px', width:{xl:'220px', lg:'220px', md:'220px', sm:'120px', xs:'80px'} }}>Messages</Typography>
            <Box  display='flex' maxWidth='50px' marginLeft={{xl:'700px',lg:'700px', md:'540px', sm:'320px', xs:'230px'}}>
                <IconButton onClick={handleSortClick} type='button'><SortIcon sx={{width:'60px', height:'40px', color:'#FF731D'}}></SortIcon></IconButton>
                <Menu
                    anchorEl={anchorElSort}
                    open={Boolean(anchorElSort)}
                    onClose={handleSortClose}
                >
                   <MenuItem onClick={() => handleSortOptionSelect('newestToOldest')} sx={{color: sortOption === 'newestToOldest' ? '#FF731D' : '#212427', fontSize:'16px', fontWeight:'500'}}>Newest to Oldest</MenuItem>
                   <MenuItem onClick={() => handleSortOptionSelect('oldestToNewest')} sx={{color: sortOption === 'oldestToNewest' ? '#FF731D' : '#212427', fontSize:'16px', fontWeight:'500'}}>Oldest to Newest</MenuItem>
                </Menu>
              <IconButton onClick={handleFilterClick} ><FilterAltOutlinedIcon  sx={{width:'60px', height:'40px', color:'#FF731D',marginLeft:'-30px' }}></FilterAltOutlinedIcon></IconButton>
                <Menu
                    anchorEl={anchorElFilter}
                    open={Boolean(anchorElFilter)}
                    onClose={handleFilterClose}
                >
                 
                 <Typography sx={{color:'#1746A2', fontSize:'18px', fontWeight:'500', marginLeft:'18px'}}>City</Typography>
                  <MenuItem>
                 <FormControlLabel
                      control={<Checkbox sx={{color:'#212427', '&.Mui-checked': {color: '#FF731D'}}} checked={filterCities.includes('Banglore')} onChange={handleCityCheckboxChange} value="Banglore" />}
                      label={<Typography style={{color:'#212427', fontSize:'14px', fontWeight:'500'}}>Banglore</Typography>}
                    />
                  <FormControlLabel
                      control={<Checkbox sx={{color:'#212427', '&.Mui-checked': {color: '#FF731D'}}} checked={filterCities.includes('Shimoga')} onChange={handleCityCheckboxChange} value="Shimoga" />}
                      label={<Typography style={{color:'#212427', fontSize:'14px', fontWeight:'500'}}>Shimoga</Typography>}
                    />
                    <FormControlLabel
                      control={<Checkbox sx={{color:'#212427', '&.Mui-checked': {color: '#FF731D'}}} checked={filterCities.includes('Davangere')} onChange={handleCityCheckboxChange} value="Davangere" />}
                      label={<Typography style={{color:'#212427', fontSize:'14px', fontWeight:'500'}}>Davangere</Typography>}
                    />
                  </MenuItem>
                </Menu>
                </Box>
            </Box>
            <Box  maxWidth='1030px' height='937px' sx={{boxShadow : "0px 0px 4px 0px #00000033",background:'white', border: "0px solid #1746A280", borderRadius:'15px', marginTop:{xl:'20px', lg:'20px', md:'20px', sm:'20px', xs:'20px'}, marginLeft:{xl:'250px', lg:'85px'}}}>
            <TableContainer sx={{ maxWidth:'1030px', height:'937px',borderRadius:'15px', }} aria-label="simple table">
            <Table>
            <TableHead maxWidth='100%' maxHeight='50px'>
            <TableRow sx={{background:'#EFF5FE' }}>
                <TableCell maxWidth='1030px'>
                    <Box display='flex'>
                    <Typography align="left" sx={{fontSize:'20px', fontWeight:'500', color:'#1746A2',width:'250px',height:'30px'}} >Hospital Name</Typography>
                    <Typography align="left" sx={{fontSize:'20px', fontWeight:'500', color:'#1746A2',width:'200px',height:'30px',marginLeft:'250px'}} >City</Typography>
                    <Typography align="left" sx={{fontSize:'20px', fontWeight:'500', color:'#1746A2',height:'30px',marginLeft:'175px'}} >Date</Typography>
                    </Box>
                </TableCell>
            </TableRow>
            </TableHead>
            <TableBody >
                    {filteredMessages.map((request, index) => (
                        <TableRow display="flex"  key={index}>
                        <TableCell maxWidth='1030px' sx={{background:'',borderColor:'black', padding:'10px'}}><Link to={`/messagepage/${request.hospital}`} style={{textDecoration:'none',maxWidth:'1030px'}}>
                        <Box display='flex' width='1030px'>
                        <Typography align="left" sx={{fontSize:'18px', fontWeight:'500', width:'250px', borderColor:'black', color:'#1746A2'}} component="th">{request.hospital}</Typography>
                        <Typography align="left" sx={{fontSize:'18px', fontWeight:'500',color:'#212427',width:'200px', marginLeft:'-60px', borderColor:'black',marginLeft:'255px'}}>{request.city}</Typography>
                        <Typography align="left" sx={{fontSize:'18px', fontWeight:'500', color:'#212427', borderColor:'black',display:'block', marginLeft:'175px'}}>{request.date}</Typography>
                        </Box>
                        <Box display='flex'width='1030px'>
                        <Typography align="left" sx={{fontSize:'18px', fontWeight:'400', color:'#212427',height:'30px',borderColor:'black', width:'450px', marginTop:'10px'}}>{request.Messages.length > 40 ? `${request.Messages.substring(0, 40)}.....` : request.Messages}</Typography>
                        <Typography align="left" sx={{fontSize:'18px', fontWeight:'500', color:'#212427', borderColor:'black', marginLeft:'385px',marginTop:'10px'}}>{request.contact}</Typography>
                        </Box>
                        </Link></TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
     );
}
 
export default Messages;