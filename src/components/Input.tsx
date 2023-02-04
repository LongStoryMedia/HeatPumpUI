import type {FormikHelpers} from 'formik';
import type {HTMLInputTypeAttribute} from 'react';
import {lazy} from 'react';
import type {Config} from 'types';

/* eslint-disable @typescript-eslint/promise-function-async */
const TextField = lazy(() => import('@mui/material/TextField'));
const Field = lazy(() => import('../imports/formik/Field'));
/* eslint-enable @typescript-eslint/promise-function-async */

export default function Input({
    name,
    label,
    initialValue,
    setFieldValue,
    type
}: {
    name: string;
    label: string;
    setFieldValue: FormikHelpers<Config>['setFieldValue'];
    type?: HTMLInputTypeAttribute;
    initialValue?: unknown;
}) {
    return (
        <Field
            component={TextField}
            type={type}
            label={label}
            name={name}
            value={initialValue}
            id={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFieldValue(name, e.target.value);
            }}
        />
    );
}
