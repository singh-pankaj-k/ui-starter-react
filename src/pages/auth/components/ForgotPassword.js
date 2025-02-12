import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import OutlinedInput from '@mui/material/OutlinedInput';
import { FormHelperText, FormControl } from "@mui/material";

export function ForgotPassword( {
                                    open,
                                    forgotEmailError,
                                    emailForgotErrorMessage,
                                    handleClose,
                                    handleClickConfirmationOpen,
                                    handleForgotPasswordSubmit
                                } ) {

    return (
        <Dialog
            open={ open }
            onClose={ handleClose }
            slotProps={ {
                paper: {
                    component: 'form',
                    onSubmit: ( event ) => {
                        event.preventDefault();
                        handleForgotPasswordSubmit( event );
                        if ( !forgotEmailError ) {
                            handleClickConfirmationOpen();
                            handleClose();
                        }
                    },
                    sx: { backgroundImage: 'none' },
                },
            } }
        >
            <DialogTitle>Reset password</DialogTitle>
            <DialogContent
                sx={ { display: 'flex', flexDirection: 'column', gap: 2, width: '100%' } }
            >
                <DialogContentText>
                    Enter your account&apos;s email address, and we&apos;ll send you a link to
                    reset your password.
                </DialogContentText>
                <FormControl error={ forgotEmailError }>
                    <OutlinedInput
                        autoFocus
                        required
                        margin="dense"
                        id="emailForgotPassword"
                        name="email"
                        label="Email address"
                        placeholder="Email address"
                        type="email"
                        fullWidth
                    />
                    { forgotEmailError && (
                        <FormHelperText>
                            { emailForgotErrorMessage }
                        </FormHelperText>
                    ) }
                </FormControl>
            </DialogContent>
            <DialogActions sx={ { pb: 3, px: 3 } }>
                <Button onClick={ handleClose }>Cancel</Button>
                <Button
                    variant="contained"
                    type="submit"
                >
                    Continue
                </Button>
            </DialogActions>
        </Dialog>
    );
}

ForgotPassword.propTypes = {
    open: PropTypes.bool.isRequired,
    forgotEmailError: PropTypes.bool.isRequired,
    emailForgotErrorMessage: PropTypes.string.isRequired,
    handleClose: PropTypes.func.isRequired,
    handleClickConfirmationOpen: PropTypes.func.isRequired,
    handleForgotPasswordSubmit: PropTypes.func.isRequired,
};

