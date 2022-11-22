import { useState } from "react";
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert/Alert';

export interface State extends SnackbarOrigin {
    open: boolean;
}

interface AlertProps {
    message: string;
    openAlert: boolean;
    closeAlert: (event: Event | React.SyntheticEvent<any, Event>) => void;
    typeAlert: 'success' | 'warning' | 'error';
}


const Alerts: React.FC<AlertProps> = ({ message, openAlert, closeAlert, typeAlert }) => {

    const [state, setState] = useState<State>({
        open: false,
        vertical: 'top',
        horizontal: 'center',
    });

    const { vertical, horizontal, open } = state;


    return (
        <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={openAlert}
            onClose={closeAlert}
            autoHideDuration={4000}
        >
            <Alert
                onClose={closeAlert}
                severity={typeAlert}
                variant="filled"
                sx={{ width: '100%' }}
            >
                {message}
            </Alert>
        </Snackbar>
    );
}

export default Alerts

