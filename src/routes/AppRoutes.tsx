import styled from "styled-components";
import Home from "../pages/home/Home";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";



const StylePageNotFound = styled.body`
    background-color: #0007;
    color: #fff;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    text-align: center;


    .link{
        text-decoration: none;
        color: #08A1E4;
        margin-top: 15px;
        font-size: 1.2rem;
    }

`



function AppRoutes(): JSX.Element {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/home" element={<Home />} />
                <Route path="*" element={

                    <StylePageNotFound>
                        Página não encontrada!
                        <Link className="link" to='/'> Voltar para o login</Link>
                    </StylePageNotFound>}
                />
            </Routes>
        </BrowserRouter>
    );

}

export default AppRoutes;