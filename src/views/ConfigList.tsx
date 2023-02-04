import type {ChangeEventHandler, MouseEventHandler} from 'react';
import React, {ChangeEvent, lazy, Suspense} from 'react';
import type {RecoilState} from 'recoil';
import {useSetRecoilState, useRecoilState, useRecoilValue} from 'recoil';
import {selectedId} from '../state/atoms';
import {configListState} from '../state/selectors';
import {activate, del} from '../utils/crud';
import type {Config, ConfigRow} from '../types';

/* eslint-disable @typescript-eslint/promise-function-async */
const TableContainer = lazy(() => import('@mui/material/TableContainer'));
const Table = lazy(() => import('@mui/material/Table'));
const TableHead = lazy(() => import('@mui/material/TableHead'));
const TableBody = lazy(() => import('@mui/material/TableBody'));
const TableRow = lazy(() => import('@mui/material/TableRow'));
const TableCell = lazy(() => import('@mui/material/TableCell'));
const Button = lazy(() => import('@mui/material/Button'));
const Checkbox = lazy(() => import('@mui/material/Checkbox'));
const DeleteIcon = lazy(() => import('@mui/icons-material/Delete'));
const AddIcon = lazy(() => import('@mui/icons-material/Add'));
const IconButton = lazy(() => import('@mui/material/IconButton'));
/* eslint-enable @typescript-eslint/promise-function-async */

function Row({conf, onDelete, onActivate, onSelect}: {conf: ConfigRow; onDelete?: MouseEventHandler; onActivate?: ChangeEventHandler; onSelect?: MouseEventHandler}) {
    return (
        <TableRow sx={{'&:last-child td, &:last-child th': {border: 0}}}>
            <TableCell component='th' scope='row'>
                {onSelect ?
                    <Button onClick={onSelect}>{conf.name}</Button> :
                    ''}
            </TableCell>
            <TableCell align='right'>
                {onDelete ?
                    <IconButton onClick={onDelete}>
                        <DeleteIcon/>
                    </IconButton> :
                    ''}
            </TableCell>
            <TableCell align='right'>
                {onActivate ? <Checkbox checked={conf.active} onChange={onActivate}/> : ''}
            </TableCell>
        </TableRow>
    );
}

export default function Configs() {
    const [rows, setRows] = useRecoilState<ConfigRow[]>(configListState as RecoilState<ConfigRow[]>);
    const setId = useSetRecoilState(selectedId);

    return (
        <>
            <TableContainer>
                <Table sx={{minWidth: 100}} aria-label='configs'>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align='right'>Delete</TableCell>
                            <TableCell width={10} align='right'>Active</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(conf => (
                            <Row
                                {...conf}
                                key={conf._id}
                                conf={conf}
                                onDelete={
                                    async () => {
                                        await del(conf._id);
                                        setRows(rows);
                                    }
                                }
                                onActivate={
                                    async () => {
                                        await activate(conf._id);
                                        setRows(rows);
                                    }
                                }
                                onSelect={
                                    () => {
                                        console.log('setting id:', conf._id);
                                        setId(conf._id);
                                        setRows(rows);
                                    }
                                }
                            />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Button
                onClick={() => {
                    setId('new');
                }}
            >
                <AddIcon/>
            </Button>
        </>
    );
}
