import { Button, SxProps } from "@mui/material";


interface PropsButton {
    children: string;
    style: SxProps;
    click: React.MouseEventHandler<HTMLButtonElement>;
    disable?: boolean;
}



const MyButton: React.FC<PropsButton> = ({ children, style, click, disable }) => {
    return (
        <Button
            variant="contained"
            sx={style}
            onClick={click}
            disabled={disable}

        >

            {children}

        </Button>
    );
}

export default MyButton