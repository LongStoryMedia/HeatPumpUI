import type {ReactElement} from 'react';
import {useCallback, useState, lazy} from 'react';
import useAsyncPoller from '../utils/useAsyncPoller';

/* eslint-disable @typescript-eslint/promise-function-async */
const Thermostat = lazy(() => import('@mui/icons-material/Thermostat'));
const List = lazy(() => import('@mui/material/List'));
const ListItem = lazy(() => import('@mui/material/ListItem'));
const ListItemIcon = lazy(() => import('@mui/material/ListItemIcon'));
const ListItemText = lazy(() => import('@mui/material/ListItemText'));
/* eslint-enable @typescript-eslint/promise-function-async */

export default function Readings(): ReactElement {
    const [temps, setTemps] = useState<Array<[string, number]>>();

    const getTemps = useCallback(async () => {
        // TODO: get temps from api
        const res = {
            tank: Math.floor((Math.random() * (110 - 90)) + 90),
            outside: Math.floor((Math.random() * (110 - -15)) - 15),
            inside: Math.floor((Math.random() * (74 - 67)) + 67)
        };
        setTemps(Object.entries(res));
    }, []);

    useAsyncPoller(getTemps, 2000);

    return (
        <List>
            {
                temps?.map(([name, temp]) => (
                    <ListItem key={name} disablePadding>
                        <ListItemIcon>
                            <Thermostat/>
                        </ListItemIcon>
                        <ListItemText primary={`${name}: ${temp}`}/>
                    </ListItem>
                ))
            }
        </List>
    );
}
