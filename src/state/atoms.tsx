import type {RecoilState} from 'recoil';
import {atom} from 'recoil';

export const selectedId: RecoilState<string> = atom({
    key: 'selectedId',
    default: ''
});

export const refreshConfig: RecoilState<number> = atom({
    key: 'refreshConfig',
    default: 0
});

export const refreshConfigList: RecoilState<number> = atom({
    key: 'refreshConfigList',
    default: 0
});
