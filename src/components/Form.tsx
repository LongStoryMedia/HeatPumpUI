import type {ReactElement} from 'react';
import {useState, lazy} from 'react';
import type {FormProps} from 'types';

/* eslint-disable @typescript-eslint/promise-function-async */
const Grid = lazy(() => import('@mui/material/Unstable_Grid2'));
/* eslint-enable @typescript-eslint/promise-function-async */

function Form(props: FormProps): ReactElement {
    const [values, setValues] = useState({});

    const updateValues = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    };

    console.log(values);

    return (
        <Grid container spacing={{sm: 1, md: 2}}>
            {
                /* eslint-disable react/no-array-index-key */
                props.children.map((Component, i) => {
                    const El = Component.type;
                    return (
                        <Grid key={i} xs={12} md={6} lg={4}>
                            <El onChange={updateValues} {...Component.props}/>
                        </Grid>
                    );
                })
                /* eslint-enable react/no-array-index-key */
            }
        </Grid>
    );
}

export default Form;
