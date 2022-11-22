import { useEffect, useState } from 'react';
import { ContainerForm } from "../container/Container";
import MyInput from "../input/MyInput";
import MyButton from '../button/MyButton';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import Divider from '@mui/material/Divider';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../store/modules/hooks';
import User from '../../../config/interfaces/user';
import { addUser } from '../../../store/modules/users/userSlice';
import Alerts from '../alerts/Alerts';




const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

const FormRegister: React.FC = () => {

    const navigate = useNavigate()

    const [name, setName] = useState('');
    const [nameValid, setNameValid] = useState(false);
    const [msgName, setMsgName] = useState('')

    const [email, setEmail] = useState('');
    const [emailValid, setEmailValid] = useState(false);
    const [msgEmail, setMsgEmail] = useState('')

    const [password, setPassword] = useState('');
    const [passwordValid, setPasswordValid] = useState(false);
    const [msgPassword, setMsgPassword] = useState('');
    const [repPassword, setRepPassword] = useState('');

    //getItem
    const usuarios = useAppSelector((state) => state.users);

    //setItem
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!name || name.length < 3) {
            setNameValid(true)
            setMsgName('Nome inválido');

        } else {
            setNameValid(false)
            setMsgName('');

        }

        if (!email || !email.match(regexEmail)) {
            setEmailValid(true)
            setMsgEmail('E-mail inválido')

        } else {
            setEmailValid(false);
            setMsgEmail('');

        }

        if (!password || password !== repPassword) {
            setPasswordValid(true)
            setMsgPassword('Senha inválida')

        } else {
            setPasswordValid(false);
            setMsgPassword('')

        }
    }, [name, email, password, repPassword])


    //Alerts
    const [open, setOpen] = useState(false)
    const [message, setMessage] = useState('')
    const [typeAlert, setTypeAlert] = useState<'success' | 'warning' | 'error'>('error')

    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true)
    }

    const handleRegister = () => {

        const newUser: User = {
            name: name,
            email: email,
            password: password,
            // task: [],
        }

        const userExists = usuarios.find((usuario) => usuario.email === email)

        if (userExists) {

            handleOpen();
            setTypeAlert('warning')
            setMessage(`Usuário ${email} já existe no sistema!`)
            return
        }

        dispatch(addUser(newUser));
        clearInputs();

        handleOpen();
        setTypeAlert('success')
        setMessage(`Usuário ${email} cadastrado com sucesso!`)

        setTimeout(() => {

            navigate('/');

        }, 2400);
    }



    const clearInputs = () => {
        setName('');
        setEmail('');
        setPassword('');
        setRepPassword('');
    }


    return (
        <ContainerForm>
            <Alerts typeAlert={typeAlert} message={message} closeAlert={handleClose} openAlert={open} />
            <h1 style={{ color: '#fff', fontSize: '1.8rem' }}>Crie sua conta</h1>

            <Divider sx={{ mb: 3, mt: 1, border: 1, color: '#13DFDC', width: '80%' }} />

            <MyInput
                label='Nome'
                id='inputCadName'
                myOnChange={setName}
                required
                value={name}
                erro={nameValid}
                info={msgName}
            >
                <PersonOutlineOutlinedIcon sx={{ color: '#b9b5b5', mr: 1, my: 0.5 }} />
            </MyInput>

            <MyInput
                label='E-mail'
                id='inputCadEmail'
                myOnChange={setEmail}
                required
                value={email}
                erro={emailValid}
                info={msgEmail}
            >
                <EmailOutlinedIcon sx={{ color: '#b9b5b5', mr: 1, my: 0.5 }} />
            </MyInput>

            <MyInput
                label='Senha'
                id='inputCadSenha'
                myOnChange={setPassword}
                required
                type='password'
                value={password}
                erro={passwordValid}
                info={msgPassword}
            >
                <HttpsOutlinedIcon sx={{ color: '#b9b5b5', mr: 1, my: 0.5 }} />
            </MyInput>

            <MyInput
                label='Confirme a senha'
                id='inputCadRepSenha'
                myOnChange={setRepPassword}
                required
                type='password'
                value={repPassword}
            >
                <HttpsOutlinedIcon sx={{ color: '#b9b5b5', mr: 1, my: 0.5 }} />
            </MyInput>

            <MyButton style={{ backgroundColor: '#08A1E4', mt: 2, mb: 3, p: 1.5 }} disable={nameValid || emailValid || passwordValid} click={handleRegister} >
                cadastrar
            </MyButton>


        </ContainerForm >

    );
}

export default FormRegister;