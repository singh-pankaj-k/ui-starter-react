import * as React from "react";
import Button from "@mui/material/Button";
import { FacebookIcon, GoogleIcon } from "./CustomIcons";

export function ThirdPartySignIn( props ) {
    const { googleSignIn, facebookSignIn } = props;
    return (
        <>
            {
                googleSignIn ?
                    <Button
                        fullWidth
                        variant="outlined"
                        onClick={ () => alert( 'Sign in with Google' ) }
                        startIcon={ <GoogleIcon/> }
                    >
                        Sign in with Google
                    </Button> :
                    null
            }
            {
                facebookSignIn ?
                    <Button
                        fullWidth
                        variant="outlined"
                        onClick={ () => alert( 'Sign in with Facebook' ) }
                        startIcon={ <FacebookIcon/> }
                    >
                        Sign in with Facebook
                    </Button> :
                    null
            }
        </>
    );
}