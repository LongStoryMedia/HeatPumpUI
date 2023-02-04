import type {DefaultValue} from 'recoil';
import {selector} from 'recoil';
import type {Config, ConfigRow} from 'types';
import {getMany, getOne} from '../utils/crud';
import {refreshConfig, refreshConfigList, selectedId} from './atoms';

export const activeId = selector<string>({
    key: 'activeId',
    async get({get}) {
        const configs: ConfigRow[] = get(configListState) as ConfigRow[];
        const id = (configs.find(conf => conf.active) as Config)._id;
        return id;
    }
});

export const configState = selector<Config>({
    key: 'configState',
    async get({get}) {
        get(refreshConfig);
        const sid = get(selectedId);
        const defaultConfig = {
            name: '',
            setpoint: 0,
            tempdifferential: 0,
            aparam: 0,
            bparam: 0,
            cparam: 0,
            scale: 0,
            active: false,
            _id: 'new'
        };

        console.log('selected id:', sid);

        if (sid) {
            if (sid === 'new') {
                return defaultConfig;
            }

            try {
                return await getOne<Config>(sid);
            } catch (error: unknown) {
                console.error(error);
            }
        }

        const aid = get(activeId);
        try {
            return await getOne<Config>(aid);
        } catch (error: unknown) {
            console.error(error);
        }

        return defaultConfig;
    },
    set({set}) {
        set(refreshConfig, i => i + 1);
    }
});

export const configListState = selector<ConfigRow[] | DefaultValue>({
    key: 'configListState',
    async get({get}) {
        get(refreshConfigList);
        get(refreshConfig);

        return getMany<ConfigRow>();
    },
    set({set}) {
        set(refreshConfigList, i => i + 1);
    }
});
