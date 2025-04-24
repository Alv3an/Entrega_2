import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import "./NavBar.css";



const NavBar = () => {
  return (
    <nav>        
        <Link to={"/"}>
          <Button sx={{marginTop: -4, margin:0.5, width: 200, backgroundColor: "#1e1e1e",fontSize:20}} variant="contained">HOME PAGE</Button>
        </Link>
        <Link to={"/character/Male"}>
          <Button sx={{marginTop: -4, margin:0.5, width: 200 , backgroundColor: "#1e1e1e",fontSize:20}} variant="contained">MALE</Button>  
        </Link>
        <Link to={"/character/Female"}>
          <Button sx={{marginTop: -4, margin:0.5, width: 200, backgroundColor: "#1e1e1e",fontSize:20}} variant="contained">FEMALE</Button>
        </Link>
        <Link to={"/About"}>
          <Button sx={{marginTop: -4, margin:0.5, width: 200 ,backgroundColor: "#1e1e1e",fontSize:20}} variant="contained">ABOUT</Button>
        </Link>
    </nav>
  )
}

export default NavBar