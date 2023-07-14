
import { Box } from '@mui/material';
import './App.css';
import Messages from './Components/Messages';
import Clickmsg from './Components/Clickmsg';
import { Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Box className="App">
      <Routes>
        <Route path='/' element={<Messages/>} />
        <Route path='/messagepage/:hospital' element={<Clickmsg/>}/>
      </Routes>
    </Box>
  );
}

export default App;
