import React, { useState, useEffect } from 'react';
import {Grid, Button, TextField, makeStyles } from "@material-ui/core";
import ClassCard from './ClassCard';

const AddClass = () =>{
    const classes = useStyles();

    const [classList, setClassList] = useState(JSON.parse(localStorage.getItem("lessons")) || []);

    const [newClassName, setNewClassName] = useState("");
    const [newClassLink, setNewClassLink] = useState("");
    const [newClassCode, setNewClassCode] = useState("");
    const [newClassDescription, setNewClassDescription] = useState("");
    const [newClassProfessor, setNewClassProfessor] = useState("");
    const [newClassDate, setNewClassDate] = useState("2021-07-04T10:30");
    const [canAddClass, setCanAddClass] = useState(false);

    useEffect(() =>{
        //chamada pro backEnd
        //setar o estado de classList
    }, []);

    useEffect(() =>{
        setCanAddClass(newClassName && newClassLink && newClassCode && newClassDescription && newClassProfessor && newClassDate);
    }, [newClassName, newClassLink, newClassCode, newClassDescription, newClassProfessor, newClassDate ]);

    const handleAddClass = () => {
        //chamar o backend para salva a aula
        const newClass = {
            name: newClassName,
            link:newClassLink,
            code: newClassCode,
            description: newClassDescription,
            professor: newClassProfessor,
            date: newClassDate
        };

        const classListClone = [...classList];

        classListClone.push(newClass);

        setClassList(classListClone);
        localStorage.setItem("lessons", JSON.stringify(classListClone));
    };

    const handleDeleteItem = (code) =>{
        //chamada pra apagar do backend
        const newClassList = classList.filter(e => e.code !== code);
        setClassList(newClassList);
        localStorage.setItem("lessons", JSON.stringify(newClassList));
    }

    return (
        <Grid item container className={classes.container}>
            <Grid container spacing={3} item xs={12}>
                <Grid item xs={3}>
                    <TextField
                        className={classes.fullWidth}
                        label="Nome da aula"
                        variant="outlined"
                        value={newClassName}
                        onChange={e => setNewClassName(e.target.value)}
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        className={classes.fullWidth}
                        label="Codigo"
                        variant="outlined"
                        value={newClassCode}
                        onChange={e => setNewClassCode(e.target.value)}
                    />
                </Grid>

                <Grid item xs={3}>
                    <TextField
                        className={classes.fullWidth}
                        label="Descrição"
                        variant="outlined"
                        value={newClassDescription}
                        onChange={e => setNewClassDescription(e.target.value)}
                    />
                </Grid>

                <Grid item xs={3}>
                    <TextField
                        className={classes.fullWidth}
                        label="Professor"
                        variant="outlined"
                        value={newClassProfessor}
                        onChange={e => setNewClassProfessor(e.target.value)}
                    />
                </Grid>




            </Grid>

            <Grid container spacing={3} item xs={12} className={classes.container2}>

                <Grid item xs={3}>
                    <TextField className={classes.dataHora}
                        id="datetime-local"
                        label="Data e Hora"
                        type="datetime-local"
                        value={newClassDate}
                        onChange={ (e)=> setNewClassDate(e.target.value)}

                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        className={classes.fullWidth}
                        label="Link para aula"
                        variant="outlined"
                        value={newClassLink}
                        onChange={e => setNewClassLink(e.target.value)}
                    />
                </Grid>
                <Grid item xs={3}>
                    <Button
                        className={`${classes.fullWidth} ${classes.fullHeight}`}
                        disabled={!canAddClass}
                        variant="contained"
                        onClick={() => handleAddClass()}
                    >
                        ADICIONAR
                    </Button>
                </Grid>
            </Grid>
            
            
            <Grid container item xs={12} className={classes.semana}>
                <Grid item xs={2}>
                    Segunda
                </Grid>
                <Grid item xs={2}>
                    Terça
                </Grid>
                <Grid item xs={2}>
                    Quarta
                </Grid>
                <Grid item xs={2}>
                    Quinta
                </Grid>
                <Grid item xs={2}>
                    Sexta
                </Grid>
            </Grid>

            <Grid container item xs={12}>
                {[1, 2, 3, 4, 5].map(weekday =>  (
                    <Grid item xs={2} key={weekday} className={classes.weekdayColumn}>
                        {!!classList && classList
                            .filter(lesson => new Date(lesson.date).getDay() === weekday )
                            .map((lesson, index) => 
                                <ClassCard key={index} item={lesson} deleteItem={handleDeleteItem}/>
                            )
                        }
                    </Grid>
                ))}
            </Grid>
        </Grid>
    )
}

const useStyles = makeStyles((theme) => ({
    fullWidth:{
        width: "100%",
    },
    fullHeight:{
        height: "100%",
    },
    container:{
        padding: "32px 16px",
    },
    container2:{
        marginTop:"10px",
    },
    dataHora:{
        paddingLeft:"32px",
    },
    semana:{
        justifyContent:"center",
        marginTop:"10px",
    },
    weekdayColumn:{
        padding: "10px",
    }
}));

export default AddClass;