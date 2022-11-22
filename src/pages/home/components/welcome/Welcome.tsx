import { StyleWelcome } from "./styleWelcome";

interface PropsWelcome {
    userName?: string;
}


const Welcome: React.FC<PropsWelcome> = ({ userName }) => {
    return (
        <>
            <StyleWelcome>Bem vindo, <span> {userName} </span></StyleWelcome>
        </>
    );
}

export default Welcome;