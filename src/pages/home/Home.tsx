import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/modules/hooks";
import { v4 as uuid4 } from 'uuid'
import { addTask, selectAll } from "../../store/modules/task/taskSlice";
import Task from "../../config/interfaces/tasks";
import Header from "./components/header/Header";
import Welcome from "./components/welcome/Welcome";
import { StyleInputHome } from "./components/input-home/styleInputHome";
import MyInput from "../../shared/components/input/MyInput";
import TitleIcon from '@mui/icons-material/Title';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Button } from "@mui/material";
import AddBoxIcon from '@mui/icons-material/AddBox';
import Divider from '@mui/material/Divider';
import { ContainerHome } from "../../shared/components/container/Container";
import CardTask from "./components/cards-task/CardTask";




const Home: React.FC = () => {

    const dispatch = useAppDispatch();

    //info user logged
    const userLoggedName = useAppSelector((state) => state.userLogged.name);
    const loggedUser = useAppSelector((state) => state.userLogged);
    const navigate = useNavigate();

    useEffect(() => {
        const navigateLogin = () => {
            navigate('/')
        }
        if (userLoggedName === '') {
            navigateLogin();
        }

    }, [userLoggedName, navigate])

    // -------------------------

    const [taskPage, setTaskPage] = useState<Task[]>([])

    const allTasks = useAppSelector(selectAll)

    // Atualizar recados
    useEffect(() => {

        const taskOfUser = allTasks.filter((task) => task.idUserEmail === loggedUser.email);
        setTaskPage(taskOfUser);

    }, [taskPage, loggedUser])

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')



    const clearInputs = () => {
        setTitle('');
        setDescription('');
    }


    const handleAddTask = () => {

        dispatch(addTask({
            uid: uuid4(),
            title: title,
            description: description,
            idUserEmail: loggedUser.email,
        }))

        clearInputs();
    }



    return (
        <>
            <Header />
            <Welcome userName={userLoggedName} />

            <StyleInputHome>
                <MyInput
                    myOnChange={setTitle}
                    label='Digite o titulo:'
                    id='inputTitle'
                    value={title}
                >
                    <TitleIcon sx={{ color: '#b9b5b5', mr: 1, my: 0.5 }} />
                </MyInput>
                <MyInput
                    myOnChange={setDescription}
                    label='Digite a descrição:'
                    id='inputDescription'
                    value={description}
                >
                    <AssignmentIcon sx={{ color: '#b9b5b5', mr: 1, my: 0.5 }} />
                </MyInput>

                <Button onClick={handleAddTask}> <AddBoxIcon sx={{ fontSize: 50, color: '#13DFDC' }} /> </Button>
            </StyleInputHome>

            <Divider sx={{ mb: 3, mt: 1, border: 1, color: '#13DFDC', width: '100%' }} />

            <ContainerHome>

                {taskPage.map((cardTask) =>

                    <CardTask
                        uid={cardTask.uid}
                        title={cardTask.title}
                        description={cardTask.description}
                        key={cardTask.uid}
                    />
                )}

            </ContainerHome>
        </>
    )
}

export default Home;