import * as React from 'react';
import Grid from '@mui/material/Grid2';
import { styled } from '@mui/material/styles';
import { useAuth } from "AppStore";
import { Typography } from "@mui/material";

const TextGrid = styled( Grid )( () => ( {
    display: 'flex',
    flexDirection: 'column',
} ) );

export function UserProfile() {
    const { displayName, userEmail } = useAuth();

    return (
        <Grid container spacing={ 3 }>
            <TextGrid size={ { xs: 12 } }>
                <Typography>Name: { displayName?.replace( /\b(\w)/g, s => s.toUpperCase() ) }</Typography>
            </TextGrid>
            <TextGrid size={ { xs: 12 } }>
                <Typography>Email: { userEmail }</Typography>
            </TextGrid>
        </Grid>
    );
}
