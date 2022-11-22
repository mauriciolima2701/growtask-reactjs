import Task from '../../../../config/interfaces/tasks';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../store/modules/hooks';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { removeTask, updateTask } from '../../../../store/modules/task/taskSlice';
import ModalEdit from '../modal/ModalEdit';
import AlertRemoveTask from '../../../../shared/components/alerts/AlertRemoveTask';






const CardTask: React.FC<Task> = ({ uid, title, description }) => {


    const dispatch = useAppDispatch();

    const [titleCard, setTitle] = useState(title);
    const [descriptionCard, setDescription] = useState(description);


    const handleEdit = () => {

        dispatch(updateTask({ id: uid, changes: { title: titleCard, description: descriptionCard } }))

        handleClose();
    }


    const handleRemove = () => {

        handleOpenAlertRemove();
    }


    const [image, setImage] = useState('')

    useEffect(() => {

        setImage('https://api.lorem.space/image/watch?w=400&amp;amp;amp;amp;h=400')

    }, [title, description, image])



    // ------ MODAL Edit -----------

    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);

    const handleClose = () => {
        setOpen(false)
    };

    //----- MODAL Del ------

    const [openAlertRemove, setOpenAlertRemove] = useState(false);

    const handleOpenAlertRemove = () => {
        setOpenAlertRemove(true)

        if (openAlertRemove) {
            dispatch(removeTask(uid));
            return;
        }
    }

    const handleCloseAlertRemove = () => setOpenAlertRemove(false)


    return (
        <>
            <Card sx={{ maxWidth: 200, minWidth: 200, boxShadow: '2px 2px 5px 5px rgb(153, 153, 156)' }}>

                <CardMedia
                    component="img"
                    height="100"
                    // image="https://source.unsplash.com/random"
                    image={image}
                    alt="imagem aleatórias"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" align='center'>
                        {title}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>

                <CardActions sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <Button size="small" onClick={handleOpen}> <EditIcon /> </Button>
                    <Button size="small" onClick={handleRemove}> <DeleteForeverIcon sx={{ color: 'red' }} /> </Button>
                </CardActions>

                <AlertRemoveTask openRemove={openAlertRemove} closeAlertRemove={handleCloseAlertRemove} clickAlertRemove={handleOpenAlertRemove} />

                <ModalEdit
                    openModal={open}
                    closeModal={handleClose}
                    clickCancel={handleClose}
                    clickEdit={handleEdit}
                    titleEdit={title}
                    descriptionEdit={description}
                    myOnChangeTitle={setTitle}
                    myOnChangeDescription={setDescription}
                />

            </Card>
        </>
    );
}


export default CardTask;