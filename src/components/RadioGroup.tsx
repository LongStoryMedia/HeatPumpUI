import type {ReactElement} from 'react';
import {Suspense, lazy} from 'react';
import type {RadioGroupProps} from '../types';
import {capitalize} from '../utils/string';

/* eslint-disable @typescript-eslint/promise-function-async */
const Radio = lazy(() => import('@mui/material/Radio'));
const MuiRadioGroup = lazy(() => import('@mui/material/RadioGroup'));
const FormControlLabel = lazy(() => import('@mui/material/FormControlLabel'));
const FormControl = lazy(() => import('@mui/material/FormControl'));
const FormLabel = lazy(() => import('@mui/material/FormLabel'));
const Skeleton = lazy(() => import('@mui/material/Skeleton'));
/* eslint-enable @typescript-eslint/promise-function-async */

function RadioGroup(props: RadioGroupProps): ReactElement {
    return (
        <Suspense fallback={<Skeleton variant='rectangular'/>}>
            <FormControl>
                <FormLabel id='scale'>{capitalize(props.label)}</FormLabel>
                <MuiRadioGroup
                    aria-labelledby='scale'
                    defaultValue={props.defaultValue ?? props.values[0]}
                    name='scale-buttons-group'
                >
                    {props.values.map(val =>
                        <FormControlLabel key={val} value={val} control={<Radio/>} label={capitalize(val)}/>)}
                </MuiRadioGroup>
            </FormControl>
        </Suspense>
    );
}

export default RadioGroup;
