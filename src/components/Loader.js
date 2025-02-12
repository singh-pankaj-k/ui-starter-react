import LinearProgress from '@mui/material/LinearProgress';
import Stack from "@mui/material/Stack";


export const Loader = () => (
    <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
        <LinearProgress color="primary" />
    </Stack>
);

