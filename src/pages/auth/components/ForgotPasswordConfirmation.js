import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from "react-router-dom";
import { useAppPaths } from "AppPaths";


export function ForgotPasswordConfirmation( { open, handleClose } ) {
    const navigate = useNavigate();
    const { authPaths } = useAppPaths();

    return (
        <Dialog
            open={ open }
            onClose={ handleClose }
            slotProps={ {
                paper: {
                    component: 'form',
                    onSubmit: ( event ) => {
                        event.preventDefault();
                        navigate( authPaths.makeAbsolute( '' ) )
                        handleClose();
                    },
                    sx: { backgroundImage: 'none' },
                },
            } }
        >
            <DialogTitle>Email sent</DialogTitle>
            <DialogContent
                sx={ { display: 'flex', flexDirection: 'column', gap: 2, width: '100%' } }
            >
                <DialogContentText>
                    If this email email address is in our record, we&apos;ll send you a link to
                    reset your password.
                </DialogContentText>
            </DialogContent>
            <DialogActions sx={ { pb: 3, px: 3 } }>
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

ForgotPasswordConfirmation.propTypes = {
    handleClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};

