import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import styled from 'styled-components';



const BackLoginStyle = styled.div`
    display: flex;
    align-items: center;

    h5{
        font-size: 1rem;
        color: #08A1E4;
        padding-left: 10px;

        &:hover{
            color: #13DFDC;
        }
    }  
`


const BackLogin: React.FC = () => {
    return (
        <BackLoginStyle >
            <ArrowBackIcon sx={{ color: '#13DFDC' }} />
            <Link to='/' style={{ textDecoration: 'none' }}>
                <h5>Voltar para Login </h5>
            </Link>
        </BackLoginStyle>
    );
}


export default BackLogin;