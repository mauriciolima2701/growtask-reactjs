import { InputAdornment, TextField } from "@mui/material";
import { InputHTMLAttributes } from "react";


interface PropsInput extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    id: string;
    children: React.ReactNode | JSX.Element;
    erro?: boolean;
    info?: string;
    required?: boolean;
    type?: string;
    value?: string;
    myOnChange: (value: string) => void
}


const MyInput: React.FC<PropsInput> = ({ label, children, id, myOnChange, type, required, info, value, erro, ...props }) => {
    return (
        <TextField
            id={id} label={label} variant="outlined"
            sx={{ mb: 2 }} autoComplete='off'
            InputLabelProps={{ sx: { color: '#b9b5b5' } }}
            onChange={(ev) => myOnChange(ev.target.value)}
            error={erro}
            value={value}
            required={required}
            helperText={info}
            type={type}
            InputProps={{
                sx: { color: "white", borderInlineColor: '1px solid white' },
                startAdornment: (
                    <InputAdornment position="start">
                        {children}
                    </InputAdornment>
                ),
            }}
        />
    );
}

export default MyInput;