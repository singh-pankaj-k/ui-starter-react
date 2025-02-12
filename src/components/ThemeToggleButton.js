import { useColorScheme } from '@mui/material/styles';
import {
    IconButton,
    Box,
    Typography,
    Paper,
    Button,
    AppBar,
    Toolbar
} from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';


export function ThemeDemo( ) {
    return (
        <Box sx={ { p: 4, maxWidth: 1200, margin: '0 auto' } }>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" sx={ { flexGrow: 1 } }>
                        MUI Theme Demo
                    </Typography>
                </Toolbar>
            </AppBar>

            <Paper sx={ { p: 4, mt: 4, mb: 4 } }>
                <Typography variant="h1" gutterBottom>
                    Theme Demo
                </Typography>

                <Box sx={ { display: 'flex', gap: 2, mb: 4 } }>
                    <Button variant="contained" color="primary">
                        Primary Button
                    </Button>
                    <Button variant="contained" color="secondary">
                        Secondary Button
                    </Button>
                    <Button variant="gradient">
                        Custom Gradient
                    </Button>
                </Box>

                <Box sx={ {
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: 3,
                    mb: 4
                } }>
                    <Box sx={ {
                        bgcolor: 'background.default',
                        p: 3,
                        borderRadius: 2
                    } }>
                        <Typography variant="h6">Default Background</Typography>
                        <Typography variant="body2">
                            Using palette.background.default
                        </Typography>
                    </Box>

                    <Box sx={ {
                        bgcolor: 'background.paper',
                        p: 3,
                        borderRadius: 2
                    } }>
                        <Typography variant="h6">Paper Background</Typography>
                        <Typography variant="body2">
                            Using palette.background.paper
                        </Typography>
                    </Box>

                    <Box sx={ {
                        bgcolor: 'custom.accent',
                        p: 3,
                        borderRadius: 2,
                        color: 'white'
                    } }>
                        <Typography variant="h6">Custom Accent</Typography>
                        <Typography variant="body2">
                            Using custom palette colors
                        </Typography>
                    </Box>
                </Box>
            </Paper>
        </Box>
    );
}

function renderToggleIcon( mode ) {
    const systemMode = window.matchMedia( '(prefers-color-scheme: dark)' ).matches
        ? 'dark'
        : 'light';

    if ( mode === 'system' ) {
        return ( systemMode === 'dark' ? (
            <Brightness7Icon fontSize="large"/>
        ) : (
            <Brightness4Icon fontSize="large"/>
        ) )
    } else {
        return ( mode === 'dark' ? (
            <Brightness7Icon fontSize="large"/>
        ) : (
            <Brightness4Icon fontSize="large"/>
        ) )
    }

}

export function ThemeToggleButton() {
    const { mode, setMode } = useColorScheme();

    const toggleColorMode = () => {
        const newMode = mode === 'light' ? 'dark' : 'light';
        setMode( newMode );
    };

    return (
        <Box sx={ { position: 'fixed', top: 16, right: 16, zIndex: 1000 } }>
            <IconButton onClick={ toggleColorMode } color="inherit">
                { renderToggleIcon( mode ) }
            </IconButton>
        </Box> );
}


