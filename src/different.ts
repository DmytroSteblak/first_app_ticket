import { checkTypes } from './types';

export const tickets: checkTypes[] = [
    { name: 'checked', id: 4, value: 'all', label: 'Все' },
    { name: 'checked', id: 0, value: 'no', label: 'Без пересадок' },
    { name: 'checked', id: 1, value: 'one', label: '1 пересадка' },
    { name: 'checked', id: 2, value: 'two', label: '2 пересадки' },
    { name: 'checked', id: 3, value: 'three', label: '3 пересадки' },
];

export const getTime = (duration: number) => {
    return Math.floor(duration / 60) + 'ч: ' + (duration % 60) + 'м';
};

export const getData = (date: string, duration: number) => {
    const dateStart = new Date(date);
    const dateEnd = new Date(dateStart.getTime() + duration * 60 * 1000);
    return dateStart.toTimeString().slice(0, 5) + ' - ' + dateEnd.toTimeString().slice(0, 5);
};
