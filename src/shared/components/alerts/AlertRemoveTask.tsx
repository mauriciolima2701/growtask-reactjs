import { forwardRef, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Divider from '@mui/material/Divider';

const Transition = forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>
) {
    return <Slide direction="down" ref={ref} {...props} />;
});


interface PropsAlertRemove {
    openRemove: boolean;
    closeAlertRemove: () => void;
    clickAlertRemove: () => void;
}


const AlertRemoveTask: React.FC<PropsAlertRemove> = ({ openRemove, closeAlertRemove, clickAlertRemove }) => {


    return (
        <>
            <Dialog
                open={openRemove}
                TransitionComponent={Transition}
                keepMounted
                onClose={closeAlertRemove}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>Deseja Realmente excluir a tarefa?</DialogTitle>

                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description"></DialogContentText>
                </DialogContent>

                <Divider sx={{ mb: 1, mt: 2, border: 1, color: '#13DFDC', width: '80%', margin: '0 auto' }} />

                <DialogActions sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <Button onClick={clickAlertRemove}>
                        <CheckCircleIcon sx={{ color: 'green', fontSize: '35px' }} />
                    </Button>

                    <Button onClick={closeAlertRemove}>
                        <CancelIcon sx={{ color: 'orange', fontSize: '35px' }} />
                    </Button>

                </DialogActions>

            </Dialog>
        </>
    );
}

export default AlertRemoveTask