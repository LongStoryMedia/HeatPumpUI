import type {ReactElement} from 'react';
import {useState, useEffect, lazy} from 'react';
import {useRecoilState} from 'recoil';
import {useForm} from 'react-hook-form';
import {create, update} from '../utils/crud';
import {selectedId} from '../state/atoms';
import {configState} from '../state/selectors';
import type {Config} from '../types';

/* eslint-disable @typescript-eslint/promise-function-async */
const Button = lazy(() => import('@mui/material/Button'));
const Input = lazy(() => import('../components/Input'));
const TextField = lazy(() => import('@mui/material/TextField'));
/* eslint-enable @typescript-eslint/promise-function-async */

function ConfigView(): ReactElement {
    const [config, setConfig] = useRecoilState<Config>(configState);
    const [_id, setId] = useRecoilState<string>(selectedId);
    const {register, handleSubmit, watch, formState: {errors}} = useForm<Config>();

    const onSubmit = async (conf: Config) => {
        if (_id && _id !== 'new') {
            console.log('updating config', conf);
            await update<Config>({
                ...conf,
                _id
            });
        } else {
            console.log('creating new config', conf);
            const newId = await create<Config>(conf);
            setId(newId);
        }
    };

    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setValues({
    //         ...values,
    //         [event.target.id]: event.target.value
    //     });
    // };

    useEffect(() => {
        setId(config._id);
        // setValues(config);
    }, [config._id, setId]);

    useEffect(() => {
        for (const key of Object.keys(config)) {
            const el: HTMLInputElement = document.getElementById(key) as HTMLInputElement;
            if (el) {
                el.value = config[key]; // eslint-disable-line @typescript-eslint/no-unsafe-assignment
            }
        }
    }, [config]);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
                type='number'
                label='set point'
                id='setpoint'
                defaultValue={config.setpoint}
                {...register('setpoint')}
            />
            <TextField {...register('tempdifferential')} type='number' label='temp differential' id='tempdifferential' defaultValue={config.tempdifferential}/>
            <TextField {...register('aparam')} type='number' label='a param' id='aparam' defaultValue={config.aparam}/>
            <TextField {...register('bparam')} type='number' label='b param' id='bparam' defaultValue={config.bparam}/>
            <TextField {...register('cparam')} type='number' label='c param' id='cparam' defaultValue={config.cparam}/>
            <TextField {...register('name')} label='name' id='name' defaultValue={config.name}/>
            <Button
                variant='outlined'
                style={{float: 'right', marginRight: '2em'}}
                type='submit'
            >Save
            </Button>
        </form>
    );
}

export default ConfigView;
