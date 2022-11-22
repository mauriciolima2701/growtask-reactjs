import React from "react";
import styled from "styled-components";

interface PropsContainer{
    row?: string;
}


const Container = styled.section<PropsContainer>`
    display: flex;
    gap: 40px;
    justify-content: center;
    flex-direction: ${props => props.row ? 'row-reverse' : 'row'};
    max-width: 960px;
    padding: 28px 30px 50px;


    @media (max-width: 800px){
        flex-direction: column;
        width: 100%;
        align-items: center;
    }

    @media (max-width: 450px){
        padding: 10px 10px 10px;
    }

`

const ContainerLogo = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 24px;
    font-size: 50px;
    line-height: 60px;
    gap: 40px;

    @media (max-width: 800px){
        width: 100%;
        text-align: center;
        align-items: center;
    }

    @media (max-width: 450px){
        font-size: 30px;
        margin-bottom: 5px;
        line-height: 35px;
    }
`



const ContainerForm = styled.div`
    width: 50%;
    padding: 50px;
    border-radius: 15px;
    background-color: rgb(50, 50, 54);
    display: flex;
    flex-direction: column;
    max-width: 500px;
    min-height: 350px;
    box-shadow: 0px 10px 26px 0px rgba(0, 0, 0, 0.75);

    gap: 5px;

    @media (max-width: 800px){
        width: 100%;
    }

    @media (max-width: 500px){
        padding: 30px;
    }
`

const ContainerHome = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    min-width: 600px;
    max-width: 1124px;
    min-height: 600px;
    gap: 25px;
    overflow-y: auto;
    overflow-x: hidden;
    /* background-color: aqua; */

    @media (max-width: 599px){
        flex-direction: column;
        min-width: 100%;
        align-items: center;
        justify-content: center;
    }
`





export {Container, ContainerLogo, ContainerForm, ContainerHome}