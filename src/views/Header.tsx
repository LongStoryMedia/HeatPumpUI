import type {ReactElement} from 'react';
import {lazy} from 'react';

/* eslint-disable @typescript-eslint/promise-function-async */
const AppBar = lazy(() => import('@mui/material/AppBar'));
const Box = lazy(() => import('@mui/material/Box'));
const Toolbar = lazy(() => import('@mui/material/Toolbar'));
const Typography = lazy(() => import('@mui/material/Typography'));
/* eslint-enable @typescript-eslint/promise-function-async */

export default function ButtonAppBar() {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant='h6' sx={{flexGrow: 1}}>
                        Heat Pump Controller
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
