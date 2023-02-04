const url = 'http://localhost:8080';

export async function update<T extends Record<string, unknown> & {_id: string}>(body: T) {
    console.log(body);
    await fetch(`${url}/config/${body._id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(body)
    });
}

export async function getOne<T extends Record<string, unknown> & {_id: string}>(_id: string): Promise<T> {
    const res = await fetch(`${url}/config/${_id}`);
    if (res.status >= 400) {
        console.error(res.statusText);
        throw new Error(res.status.toString());
    }

    return res.json() as Promise<T>;
}

export async function getMany<T extends Record<string, unknown> & {_id: string}>(): Promise<T[]> {
    const res = await fetch(`${url}/config`);
    return res.json() as Promise<T[]>;
}

export async function create<T extends Record<string, unknown>>(body: T) {
    console.log(body);
    const res = await fetch(`${url}/config`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    return res.text();
}

export async function del(_id: string) {
    console.log(`deleting ${_id}`);
    await fetch(`${url}/config/${_id}`, {
        method: 'DELETE'
    });
}

export async function activate(_id: string) {
    console.log(`activating ${_id}`);
    await fetch(`${url}/config/activate/${_id}`, {
        method: 'POST'
    });
}
