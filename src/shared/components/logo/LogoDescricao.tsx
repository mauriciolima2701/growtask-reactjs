import { ContainerLogo } from '../container/Container';
import Logo_ from './Logo_';

interface Descricao {
    descricao: string;
    children?: React.ReactNode | JSX.Element;
}


const LogoDescricao: React.FC<Descricao> = ({ descricao, children }) => {

    return (
        <ContainerLogo>
            <Logo_ />

            <h4 style={{ color: "rgb(233, 233, 241)" }}>{descricao}</h4>
            {children}
        </ ContainerLogo>
    );
}

export default LogoDescricao;