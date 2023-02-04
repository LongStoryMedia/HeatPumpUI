import type {ReactElement} from 'react';
import {useEffect, useState, Suspense, lazy} from 'react';
import type {Theme} from '@mui/material';
import {RecoilRoot} from 'recoil';

/* eslint-disable @typescript-eslint/promise-function-async */
const ThemeProvider = lazy(() => import('@mui/material/styles/ThemeProvider'));
const CssBaseline = lazy(() => import('@mui/material/CssBaseline'));
const Grid = lazy(() => import('@mui/material/Grid'));
const Typography = lazy(() => import('@mui/material/Typography'));
const Config = lazy(() => import('./views/Config'));
const ConfigList = lazy(() => import('./views/ConfigList'));
const Header = lazy(() => import('./views/Header'));
const ThermGraph = lazy(() => import('./views/ThermGraph'));
const Readings = lazy(() => import('./views/Readings'));
/* eslint-enable @typescript-eslint/promise-function-async */

const green = '#41c256';
const blue = '#061c53';

async function makeTheme(): Promise<Theme> {
    const createTheme = await import('@mui/material/styles/createTheme');
    return createTheme.default({
        palette: {
            primary: {
                main: blue,
                contrastText: green
            },
            secondary: {
                main: green,
                contrastText: blue
            },
            background: {
                default: '#f0f3f5'
            }
        }
    });
}

function App(): ReactElement {
    const [theme, setTheme] = useState<Theme>();

    useEffect(() => {
        (async () => {
            setTheme(await makeTheme());
        })();
    }, []);

    return (
        <Suspense>
            <CssBaseline/>
            <ThemeProvider theme={theme!}>
                <Header/>
                <RecoilRoot>
                    <Grid container spacing={10}>
                        <Grid item md={5} sm={12}>
                            <Readings/>
                        </Grid>
                        <Grid item md={7} sm={12}>
                            <ThermGraph/>
                        </Grid>
                        <Grid item md={4} sm={12}>
                            <Config/>
                        </Grid>
                        <Grid item md={8} sm={12}>
                            <Typography gutterBottom variant='h5'>Configs</Typography>
                            <ConfigList/>
                        </Grid>
                    </Grid>
                </RecoilRoot>
            </ThemeProvider>
        </Suspense>
    );
}

export default App;
