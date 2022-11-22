import { Container } from "../../shared/components/container/Container";
import FormRegister from "../../shared/components/form-register/FormRegister";
import BackLogin from "../../shared/components/logo/BackLogin";
import LogoDescricao from "../../shared/components/logo/LogoDescricao";


const Register: React.FC = () => {
    return (
        <>
            <Container row="row-reverse">

                <LogoDescricao descricao="Cadastre-se para acessar o sistema">
                    <BackLogin />
                </LogoDescricao>

                <FormRegister />

            </Container>

        </>
    );
}


export default Register;