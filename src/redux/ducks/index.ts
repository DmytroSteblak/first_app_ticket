import * as Id from './IdReducer';
import * as Ticket from './TicketsReducer';

const ActionCreator = {
    ...Id,
    ...Ticket
};

export default ActionCreator;