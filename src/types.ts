import type {ReactElement} from 'react';

export type RadioGroupProps = {
    label: string;
    values: string[];
    defaultValue?: string;
};

export type FormProps = {
    children: ReactElement[];
};

export type Differential = {
    start: number;
    stop: number;
};

export type Config = {
    [key: string]: any;
    setpoint: number;
    tempdifferential: number;
    deadband?: number;
    aparam: number;
    bparam: number;
    cparam: number;
    scale: number;
    name: string;
    _id: string;
    active: boolean;
};

export type ConfigRow = {
    name: string;
    _id: string;
    active: boolean;
};
