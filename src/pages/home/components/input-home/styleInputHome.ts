import styled from "styled-components";


export const StyleInputHome = styled.div`
    min-width: 800px;
    max-width: 1124px;
    padding: 10px 25px;
    margin: 0 30px;
    
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    /* background-color: rgb(50, 50, 54); */
    

    @media (max-width: 830px){
        text-align: center;
        flex-direction: column;
        flex-wrap: wrap;
        width: 100%;
        min-width: 0px;
        justify-content: center;
        align-items: center;
        padding: 5px;
        margin: auto;
    }

    .inputHome{
        background-color: red !important;
        border: 1px solid white;
    }

`