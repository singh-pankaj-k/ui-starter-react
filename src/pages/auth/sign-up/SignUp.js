import * as React from 'react';
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Divider from '@mui/material/Divider';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import { FormHelperText, Link as MuiLink } from '@mui/material';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { ForgotPassword } from '../components/ForgotPassword';
import { SitemarkIcon } from '../components/CustomIcons';
import { ColorModeSelect } from 'AppTheme';
import { AuthCard, AuthContainer } from "../components/CustomComponents";
import { useAuthFunctions } from "../lib/useAuthFunctions";
import { ForgotPasswordConfirmation } from "../components/ForgotPasswordConfirmation";
import { useAppPaths } from "AppPaths";


export function SignUp() {
    let navigate = useNavigate();
    const { authPaths } = useAppPaths();

    const {
        open,
        emailError,
        openRecoveryConfirmation,
        emailErrorMessage,
        passwordError,
        passwordErrorMessage,
        nameError,
        nameErrorMessage,
        agreeError,
        agreeErrorMessage,
        forgotEmailError,
        emailForgotErrorMessage,
        handleClose,
        handleClickOpen,
        validateSignUpInputs,
        handleSignUpSubmit,
        handleForgotPasswordSubmit,
        handleClickConfirmationOpen,
        handleConfirmationClose
    } = useAuthFunctions();

    return (
        <>
            <AuthContainer direction="column" justifyContent="space-between">
                <ColorModeSelect sx={ { position: 'fixed', top: '1rem', right: '1rem' } }/>
                <AuthCard variant="outlined">
                    <SitemarkIcon/>
                    <Typography
                        component="h1"
                        variant="h4"
                        sx={ { width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' } }
                    >
                        Sign Up
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={ handleSignUpSubmit }
                        noValidate
                        sx={ {
                            display: 'flex',
                            flexDirection: 'column',
                            width: '100%',
                            gap: 2,
                        } }
                    >
                        <FormControl>
                            <FormLabel required htmlFor="name">Full name</FormLabel>
                            <TextField
                                error={ nameError }
                                helperText={ nameErrorMessage }
                                id="name"
                                type="name"
                                name="name"
                                placeholder="Your name"
                                autoComplete="name"
                                autoFocus
                                required
                                fullWidth
                                variant="outlined"
                                color={ emailError ? 'error' : 'primary' }
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel required htmlFor="email">Email</FormLabel>
                            <TextField
                                error={ emailError }
                                helperText={ emailErrorMessage }
                                id="email"
                                type="email"
                                name="email"
                                placeholder="your@email.com"
                                autoComplete="email"
                                required
                                fullWidth
                                variant="outlined"
                                color={ emailError ? 'error' : 'primary' }
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel required htmlFor="password">Password</FormLabel>
                            <TextField
                                error={ passwordError }
                                helperText={ passwordErrorMessage }
                                name="password"
                                placeholder="••••••"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                required
                                fullWidth
                                variant="outlined"
                                color={ passwordError ? 'error' : 'primary' }
                            />
                        </FormControl>
                        <FormControl error={ agreeError }>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        id="agreeToTerms"
                                        value="agreeToTerms"
                                        color="primary"
                                    />
                                }
                                label={ "Agree to terms and conditions" }
                            />
                            { agreeError && (
                                <FormHelperText>
                                    { agreeErrorMessage }
                                </FormHelperText>
                            ) }
                        </FormControl>
                        <ForgotPassword
                            open={ open }
                            forgotEmailError={ forgotEmailError }
                            emailForgotErrorMessage={ emailForgotErrorMessage }
                            handleClose={ handleClose }
                            handleClickConfirmationOpen={ handleClickConfirmationOpen }
                            handleForgotPasswordSubmit={ handleForgotPasswordSubmit }
                        />
                        <ForgotPasswordConfirmation
                            open={ openRecoveryConfirmation }
                            handleClose={ handleConfirmationClose }
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            onClick={ validateSignUpInputs }
                        >
                            Sign in
                        </Button>
                        <MuiLink
                            component="button"
                            type="button"
                            onClick={ handleClickOpen }
                            variant="body2"
                            sx={ { alignSelf: 'center' } }
                        >
                            Forgot your password?
                        </MuiLink>
                    </Box>
                    <Divider>or</Divider>
                    <Box sx={ { display: 'flex', flexDirection: 'column', gap: 2 } }>
                        <Typography sx={ { textAlign: 'center' } }>
                            Already have an account?{ ' ' }
                            <MuiLink
                                component="button"
                                type="button"
                                onClick={ () => navigate( authPaths.makeAbsolute( authPaths.login ) ) }
                                variant="body2"
                                sx={ { alignSelf: 'center' } }
                            >
                                Sign in
                            </MuiLink>
                        </Typography>
                    </Box>
                </AuthCard>
            </AuthContainer>
        </>
    );
}
