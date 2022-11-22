import { Container } from "../../shared/components/container/Container";
import FormLogin from "../../shared/components/form-login/FormLogin";
import LogoDescricao from "../../shared/components/logo/LogoDescricao";


const Login: React.FC = () => {
    return (
        <>
            <Container >

                <LogoDescricao descricao="Faça seu login no sistema" />

                <FormLogin />

            </Container>
        </>
    );
}


export default Login;