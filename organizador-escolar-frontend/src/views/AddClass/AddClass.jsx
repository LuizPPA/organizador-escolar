import React, { useState, useEffect } from 'react';
import {Grid, Button, TextField, makeStyles} from "@material-ui/core";
import ClassCard from './ClassCard';

const AddClass = () =>{
    const classes = useStyles();

    const [classList, setClassList] = useState([]);

    const [newClassName, setNewClassName] = useState("");
    const [newClassLink, setNewClassLink] = useState("");

    useEffect(() =>{
        //chamada pro backEnd
        //setar o estado de classList
    }, []);

    const handleAddClass = () => {
        //chamar o backend para salva a aula
        const newClass = {name: newClassName, link:newClassLink  };

        const classListClone = [...classList];

        classListClone.push(newClass);

        setClassList(classListClone);
    };

    const handleDeleteItem = (name) =>{
        //chamada pra apagar do backend
        const newClassList = classList.filter(e => e.name !== name);
        setClassList(newClassList);
    }

    return (
        <Grid container className={classes.container}>
            <Grid container spacing={3} item xs={12}>
                <Grid item xs={4}>
                    <TextField
                        className={classes.fullWidth}
                        label="Nome da aula"
                        variant="outlined"
                        value={newClassName}
                        onChange={e => setNewClassName(e.target.value)}
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        className={classes.fullWidth}
                        label="Link para aula"
                        variant="outlined"
                        value={newClassLink}
                        onChange={e => setNewClassLink(e.target.value)}
                    />
                </Grid>
                <Grid item xs={4}>
                    <Button
                        className={`${classes.fullWidth} ${classes.fullHeight}`}
                        variant="contained"
                        onClick={() => handleAddClass()}
                    >
                        ADICIONAR
                    </Button>
                </Grid>
            </Grid>

            <Grid container item xs={12}>
                {classList && classList.map(e => 
                    <ClassCard item={e} deleteItem={handleDeleteItem}/>
                )}
            </Grid>
        </Grid>
    )
}

const useStyles = makeStyles((theme) => ({
    fullWidth:{
        width: "100%"
    },
    fullHeight:{
        height: "100%"
    },
    container:{
        padding: "32px 16px"
    }
}));

export default AddClass;