import { Stack, Typography } from "@mui/material";
import  logo  from "../utils/pinkLogo.png";
import { Link } from "react-router-dom";
import { SearchBar } from "./";
import Notification from '../utils/notification.png'
import Upload from '../utils/upload.png'
import Profile from '../utils/jas2.jpg'

const Navbar = () => 
   (
    <Stack direction='row' alignItems='center' p={2} sx={{ position:  "sticky", background: '#1c1b1b', top: 0, }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={55} />
      
    </Link>
    
    <SearchBar />
    <Stack direction="row" spacing={2} sx={{ml:49}}>
    <img src={Notification} alt="noyt" height={35} sx={{ml:8, pl: 4 }}/>
    <img src={Upload} alt="wj" height={35} />
    <img src={Profile} alt="ejhj" height={35} sx={{ml:8}}/>
    </Stack>
    
    
    


    </Stack>
  )


export default Navbar
