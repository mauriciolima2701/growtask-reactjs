import styled from "styled-components";


export const StyleModalEdit = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    background-color: azure;
    border: 2px solid #13DFDC;
    border-radius: 15px;
    box-shadow: 0px 10px 26px 0px rgba(0, 0, 0, 1);
    padding: 40px;

    

    .textTitleEdit{
       text-align: center;
       margin: 15px 0;
       font-size: 1.2rem;
       font-weight: 700;
    }


    @media (max-width: 500px){
        width: 100%;
        padding: 15px;
        border-radius: 0px;
    }
`

