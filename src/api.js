import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://front-test.beta.aviasales.ru/',
});

export const getId = async () => {
    const response = await instance.get(`search`);
    return response.data;
};

export const getTicket =  async (id) => {
    try {
        const { data } = await instance.get(`tickets?searchId=${id}`);
        return data?.stop ? data : getTicket(id);
    }catch (error) {
        if (error.response.status === 500) {
            return getTicket(id);
        }
    }
};


