import React from 'react';
import {Grid, Button, makeStyles} from "@material-ui/core";
import {Trash} from 'react-feather';

const ClassCard = (props) =>{
    const {children, logout} = props;

    const classes = useStyles();

    return (
        <Grid container>
            <Grid container item xs={12}>
                <Grid item xs={4}>
                    <Button onClick={() => logout && logout(false)} variant="contained" color="primary">SAIR</Button>

                </Grid>
            </Grid>
            {children}
        </Grid>
    )
}

const useStyles = makeStyles((theme) => ({
}));

export default ClassCard;