import {checkTypes} from "../types";

export { default as Header} from './Header';
export { default as Filter } from './Filter';
export { default as Sort } from './Sort';
export { default as Ticket } from './Ticket';
export { default as ButtonComp } from './ButtonComp';
export { default as TicketsList } from './TiketsList';

export const tickets: checkTypes[] = [
    { name: "checked", id: 4, value: "all", label: "Все" },
    { name: "checked", id: 0, value: "no", label: "Без пересадок" },
    { name: "checked", id: 1, value: "one", label: "1 пересадка" },
    { name: "checked", id: 2, value: "two", label: "2 пересадки" },
    { name: "checked", id: 3, value: "three", label: "3 пересадки" },
];