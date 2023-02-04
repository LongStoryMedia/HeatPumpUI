import {PublicClientApplication} from '@azure/msal-browser';
import type {Props, State} from '..';
import getInitialState from '../src/state';
import {defaultUser} from '../src/utils';

const mockProps: Props = {
    scopes: [],
    redirect: '/test/redirect',
    clientId: '5b56f0da-e3b7-4d95-aa84-b6bd39cca8fe'
};

it('gets initial state', () => {
    const state: State = getInitialState(mockProps);
    expect(state.scopes[0]).toBe('https://graph.microsoft.com/.default');
    expect(state.user).toMatchObject(defaultUser);
    expect(state.redirectUri).toBe('http://localhost/test/redirect');
    expect(state.instance instanceof PublicClientApplication).toBeTruthy();
});
