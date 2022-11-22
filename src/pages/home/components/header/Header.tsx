import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import Logo_ from '../../../../shared/components/logo/Logo_';
import LogoutIcon from '@mui/icons-material/Logout';
import { clearUserLogged } from '../../../../store/modules/userLogged/userLoggedSlice';
import { useAppDispatch, useAppSelector } from '../../../../store/modules/hooks';
import { useNavigate } from 'react-router-dom';




const Header: React.FC = () => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const logoutUser = () => {
        dispatch(clearUserLogged())
        navigate('/')
    }



    return (
        <>
            <AppBar position="fixed" sx={{ backgroundColor: 'rgb(50, 50, 54);' }}>
                <Toolbar>
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                        <Logo_ />
                    </Typography>

                    <Button onClick={() => {

                        logoutUser();

                    }} color="inherit" >
                        <LogoutIcon sx={{ color: '#08A1E4' }} />
                    </Button>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Header;