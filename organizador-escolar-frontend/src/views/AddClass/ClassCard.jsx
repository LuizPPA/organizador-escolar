import React, { useState } from 'react';
import {Grid, IconButton, TextField, makeStyles} from "@material-ui/core";
import {Trash} from 'react-feather';

const ClassCard = (props) =>{
    const {item, deleteItem} = props;

    const classes = useStyles();

    return (
        <Grid container item xs={12} className={classes.container}>
            <Grid item xs={1}>
                <IconButton onClick={() => deleteItem(item.name)} className={classes.itemAlignCenter}>
                    <Trash size={32}/>
                </IconButton>
            </Grid>
            <Grid item xs={5}>
                <p>Nome: {item.name}</p>
            </Grid>
            <Grid item xs={6}>
                <p>link: {item.link}</p>
            </Grid>
        </Grid>
    )
}

const useStyles = makeStyles((theme) => ({
    itemAlignCenter:{
        margin: "auto",
        display:"flex"
    },
    container:{
        marginTop:"8px",
        border:"1px solid gray"
    }
}));

export default ClassCard;