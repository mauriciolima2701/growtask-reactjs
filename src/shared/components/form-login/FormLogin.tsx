import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/modules/hooks';
import { setUserLogged } from '../../../store/modules/userLogged/userLoggedSlice';
import { ContainerForm } from "../container/Container";
import { Typography } from "@mui/material";
import MyInput from '../input/MyInput';
import MyButton from '../button/MyButton';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import './formStyle.css';
import Alerts from '../alerts/Alerts';

interface User {
    email: string,
    password: string,
}


const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

const FormLogin: React.FC = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [emailValid, setEmailValid] = useState(false);
    const [msgEmail, setMsgEmail] = useState('')

    const [password, setPassword] = useState('')
    const [passwordValid, setPasswordValid] = useState(false);
    const [msgPassword, setMsgPassword] = useState('');

    const usuarios = useAppSelector((state) => state.users);
    const dispatch = useAppDispatch();



    const validationInput = () => {
        if ((!password) || (!email || !email.match(regexEmail))) {
            setEmailValid(true)
            setMsgEmail('E-mail inválido')
            setPasswordValid(true)
            setMsgPassword('Preencher a senha corretamente')
            return false;
        }

        if ((email.match(regexEmail)) && (password)) {
            setEmailValid(false)
            setMsgEmail('')
            setPasswordValid(false)
            setMsgPassword('')
            return true;
        }

    }

    //alerts
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false);
    };


    const loginUser = () => {
        const user: User = {
            email: email,
            password: password,
        }

        const userLogged = usuarios.find((usuario) => usuario.email === user.email && usuario.password === user.password);

        if (!userLogged) {
            handleOpen();
            return
        }

        dispatch(setUserLogged(userLogged));
        navigate('/home');

    }


    const handleLogin = () => {
        if (validationInput()) {
            loginUser();
            clearInputs();
            return
        }

    }

    const clearInputs = () => {
        setEmail('');
        setPassword('');
    }


    return (
        <>
            <ContainerForm>
                <Alerts typeAlert='error' message='Usuário não existe ou senha incorreta!' closeAlert={handleClose} openAlert={open} />

                <MyInput label='E-mail' id='inputEmail' myOnChange={setEmail} value={email} info={msgEmail} erro={emailValid}>
                    <EmailIcon sx={{ color: '#b9b5b5', mr: 1, my: 0.5 }} />
                </MyInput>


                <MyInput label='Senha' id='inputSenha' myOnChange={setPassword} type='password' value={password} info={msgPassword} erro={passwordValid}>
                    <LockIcon sx={{ color: '#b9b5b5', mr: 1, my: 0.5 }} />
                </MyInput>



                <MyButton style={{ backgroundColor: '#08A1E4', mt: 2, mb: 3, p: 1.5 }} click={handleLogin} >
                    entrar
                </MyButton>


                <Typography variant="subtitle1" color='#fff'>
                    Não tem conta?  <Link to='/register' style={{ textDecoration: 'none' }}> <span className='cad'> Cadastre-se </span> </Link>
                </Typography>

            </ContainerForm>
        </>

    );
}


export default FormLogin;