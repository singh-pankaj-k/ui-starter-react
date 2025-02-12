import Typography from "@mui/material/Typography";
import * as React from "react";
import Grid from "@mui/material/Grid2";

import { UserInformation } from "./UserInformation";


export function SettingsHome() {
    return (
        <div>
            {/* cards */ }
            <Typography
                component="h2"
                variant="h6"
                sx={ { mb: 2 } }
            >
                Settings
            </Typography>
            <Grid
                container
                spacing={ 2 }
                columns={ 12 }
                sx={ { mb: ( theme ) => theme.spacing( 2 ) } }
            >
                <Grid
                    size={ { xs: 12, sm: 6, lg: 12 } }
                    // sx={ { backgroundColor: 'red', height: '70vh' } }
                >
                    <UserInformation/>
                </Grid>
                {/*<Grid*/ }
                {/*    size={ { xs: 12, sm: 6, lg: 3 } }*/ }
                {/*    sx={ { backgroundColor: 'green', height: '70vh' } }*/ }
                {/*>*/ }

                {/*</Grid>*/ }
                {/*<Grid*/ }
                {/*    size={ { xs: 12, sm: 6, lg: 3 } }*/ }
                {/*    sx={ { backgroundColor: 'blue', height: '70vh' } }*/ }
                {/*>*/ }

                {/*</Grid>*/ }
                {/*<Grid*/ }
                {/*    size={ { xs: 12, sm: 6, lg: 3 } }*/ }
                {/*    sx={ { backgroundColor: 'purple', height: '70vh' } }*/ }
                {/*>*/ }

                {/*</Grid>*/ }
            </Grid>
        </div>
    );
}
