import styled from "styled-components";

const StyleLogo = styled.div`

    display: flex;
    align-items: center;
    gap: 15px;


    img{
        width: 80px;
    }


    .grow{
        color: #08A1E4;
    }
    .task{
        color: #13DFDC;
    }

    @media (max-width: 360px){
        .grow,
        .task{
            display: none;
        }
    }

`



const Logo_: React.FC = () => {
    return (
        <StyleLogo>
            <img src="./assets/growTask.png" alt="Logo do sistema" />
            <h5> <span className='grow'> Grow</span><span className='task'>Task</span> </h5>
        </StyleLogo>
    );
}

export default Logo_;