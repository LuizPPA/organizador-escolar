import React from 'react';
import {Grid, Button, makeStyles} from "@material-ui/core";
import { useHistory } from 'react-router';

const ClassCard = (props) =>{
    const {children, logout} = props;

    const history = useHistory()

    const handleAutenticate = () => {
        logout && logout(false);
        history.push("/")
    }


    const classes = useStyles();

    return (
        <Grid container>
            <Grid container item xs={12} className={classes.container}>
                <Grid item xs={4}>
                    <Button onClick={() => handleAutenticate() } variant="contained" color="primary">SAIR</Button>
                    
                </Grid>
            </Grid>
            {children}

            
        </Grid>
        
    )
}

const useStyles = makeStyles((theme) => ({
    container:{
        backgroundColor:"#3f51b5"
    }
}));

export default ClassCard;