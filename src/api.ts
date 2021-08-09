import axios from 'axios';

import { dataId, dataTypes } from './types';

const instance = axios.create({
    baseURL: 'https://front-test.beta.aviasales.ru/',
});

export const getId = async (): Promise<dataId> => {
    const response = await instance.get<dataId>(`search`);
    return response.data;
};

export const getTicket =  async (id: string): Promise<dataTypes | null> => {
    try {
        const { data } = await instance.get<dataTypes>(`tickets?searchId=${id}`);
        return data?.stop ? data : getTicket(id);
    } catch (error) {
        if (error.response.status === 500) {
            return getTicket(id);
        } else {
            return null
        }
    }
};


