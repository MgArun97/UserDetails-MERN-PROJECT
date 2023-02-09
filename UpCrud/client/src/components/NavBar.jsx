
import{AppBar,Toolbar,styled} from '@mui/material';

import{NavLink} from 'react-router-dom';

const Header =styled(AppBar)`
    background:pink
`
const Tabs=styled(NavLink)`
    font-size:40px;
    margin-right:60px;
    color:inherit;
    text-decoration: none;
`


const NavBar=()=>{
    return(
        <Header position="static">
            <Toolbar> 
                <Tabs to='/'>CRUD</Tabs>
                <Tabs to='/all'>AllUsers</Tabs>
                <Tabs to='/add'>AddUser</Tabs>
            </Toolbar>
        </Header>
    )
}

export default NavBar;