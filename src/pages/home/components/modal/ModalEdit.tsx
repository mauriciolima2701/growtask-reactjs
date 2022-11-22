import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField/TextField';
import Logo_ from '../../../../shared/components/logo/Logo_';
import Divider from '@mui/material/Divider';
import CancelIcon from '@mui/icons-material/Cancel';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { StyleModalEdit } from './styleModalEdit';



interface PropsModal {
    openModal: boolean;
    closeModal: ((event: {}, reason: "backdropClick" | "escapeKeyDown") => void) | undefined
    clickCancel: React.MouseEventHandler<HTMLButtonElement>;
    clickEdit: React.MouseEventHandler<HTMLButtonElement>;
    titleEdit: string;
    descriptionEdit: string;
    myOnChangeTitle: (value: string) => void
    myOnChangeDescription: (value: string) => void
}


const ModalEdit: React.FC<PropsModal> = ({ openModal, clickCancel, closeModal, titleEdit, descriptionEdit, clickEdit, myOnChangeTitle, myOnChangeDescription }) => {


    return (
        <>
            <Modal
                open={openModal}
                onClose={closeModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <StyleModalEdit>
                    <Box>
                        <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                            sx={{ display: 'flex', justifyContent: 'space-around' }}
                        >
                            <Logo_ />
                        </Typography>

                        <div className='textTitleEdit'> - Editando Tarefa - </div>

                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>

                            <TextField fullWidth label="Título" defaultValue={titleEdit} variant="outlined" sx={{ mb: 3 }} onChange={(ev) => myOnChangeTitle(ev.target.value)} />

                            <TextField fullWidth label="Descrição" defaultValue={descriptionEdit} variant="outlined" onChange={(ev) => myOnChangeDescription(ev.target.value)} />

                        </Typography>

                        <Divider sx={{ mb: 3, mt: 2, border: 1, color: '#13DFDC', width: '100%' }} />

                        <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                            <Button onClick={clickEdit}>  <BorderColorIcon sx={{ color: 'green', fontSize: 35 }} /> </Button>
                            <Button onClick={clickCancel}>  <CancelIcon sx={{ color: 'orangered', fontSize: 35 }} /> </Button>
                        </Box>
                    </Box>
                </StyleModalEdit>
            </Modal>
        </>
    );
}

export default ModalEdit;