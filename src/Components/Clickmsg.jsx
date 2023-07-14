import { Typography  } from '@mui/material';
import { Box } from '@mui/material';
import {useParams} from 'react-router-dom'

const messages = [
    {
      id:1,
      hospital: 'Apolo Hospital',
      city: 'Banglore',
      Messages: 'Hii Medpick, I am Dr. Jayadev from Apolo Hospital your product is good and service maintenance is also good Thank you, Hii Medpick, I am Dr. Jayadev from Apolo Hospital your product is good and service maintenance is also good Thank you, Hii Medpick, I am Dr. Jayadev from Apolo Hospital your product is good and service maintenance is also good Thank you, Hii Medpick, I am Dr. Jayadev from Apolo Hospital your product is good and service maintenance is also good Thank you.   ',
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

const ClickMsg = () => {

    const {hospital} = useParams();
    const selectedHospital = messages.find(item => item.hospital === hospital);
   
    return ( 
        <Box width='100%' minHeight='100vh' backgroundColor='#FAF5EE'>
            <Typography sx={{fontSize:{xl:'24px', lg:'24px', md:'22px', sm:'20px', xs:'20px'}, fontWeight:'500', color:'#FF731D', marginLeft:{xl:'280px', lg:'120px', md:'30px', sm:'20px', xs:'20px'}, width:{xl:'220px', lg:'220px', md:'220px', sm:'200px', xs:'200px'} }}>Messages</Typography>
        <Box maxWidth='1030px' minHeight='100%' sx={{boxShadow : "0px 0px 4px 0px #00000033",background:'white', border: "0px solid #1746A280", borderRadius:'15px', marginTop:{xl:'20px', lg:'20px', md:'20px', sm:'20px', xs:'20px'}, marginLeft:{xl:'280px', lg:'120px'}}}>
         <Box padding='30px' display='flex'>
         <Typography sx={{fontSize:{xl:'24px',lg:'24px', md:'24px', sm:'20px', xs:'20px'},width:{xl:'250px',lg:'250px', md:'350px', sm:'450px'}, fontWeight:'500', color:'#1746A2',}}>{hospital}</Typography>
         <Typography sx={{fontSize:{xl:'24px',lg:'24px', md:'24px', sm:'20px', xs:'20px'},width:'200px', fontWeight:'500', color:'#212427',}}>{selectedHospital.city}</Typography>
         <Typography sx={{fontSize:{xl:'20px',lg:'20px', md:'20px', sm:'18px', xs:'18px'}, fontWeight:'500', color:'#212427', marginLeft:{xl:'400px', lg:'400px', md:'400px', sm:'250px'}}}>{selectedHospital.date}</Typography>
         </Box>
         <Typography sx={{fontSize:{xl:'20px', lg:'20px',md:'20px',sm:'20px',xs:'20px'}, fontWeight:'400', color:'#212427', maxWidth:'700px', marginLeft:'30px'}}>{selectedHospital.Messages}</Typography>
         <Typography sx={{fontSize:{xl:'20px', lg:'20px',md:'20px',sm:'20px',xs:'20px'}, fontWeight:'500', color:'#212427',maxWidth:'300px',marginLeft:{xl:'810px', lg:'810px', md:'680px', sm:'380px', xs:'200px'}, padding:'20px'}}>{selectedHospital.contact}</Typography>
        </Box>
        </Box>
     );
}
 
export default ClickMsg;