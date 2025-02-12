import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { SitemarkIcon } from '../components/CustomIcons';
import { ColorModeSelect } from 'AppTheme';
import { AuthCard, AuthContainer } from "../components/CustomComponents";
import { useAuthFunctions } from "../lib/useAuthFunctions";
import { useAuth } from "AppStore";


export function SignOut() {
    const { logoutUser } = useAuth();
    const [ logoutBegin, setLogoutBegin ] = React.useState( false );

    const {
        handleNavigateToHome
    } = useAuthFunctions();


    React.useEffect( () => {
        if ( !logoutBegin ) {
            setLogoutBegin( true );
            logoutUser();
            // window?.location?.assign( window?.location?.origin );
        }
    }, [ logoutUser, logoutBegin, setLogoutBegin ] );

    return (
        <>
            <AuthContainer direction="column" justifyContent="space-between">
                <ColorModeSelect sx={ { position: 'fixed', top: '1rem', right: '1rem' } }/>
                <AuthCard variant="outlined">
                    <SitemarkIcon/>
                    <Typography
                        component="h1"
                        variant="h4"
                        sx={ { width: '100%', fontSize: 'clamp(1rem, 5vw, 1.08rem)' } }
                    >
                        You have successfully Signed Out.
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={ handleNavigateToHome }
                        noValidate
                        sx={ {
                            display: 'flex',
                            flexDirection: 'column',
                            width: '100%',
                            gap: 2,
                        } }
                    >
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                        >
                            Home
                        </Button>
                    </Box>
                </AuthCard>
            </AuthContainer>
        </>
    );
}
