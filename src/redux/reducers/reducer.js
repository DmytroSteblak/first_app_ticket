const GET_SEARCH_ID = 'GET_SEARCH_ID'
const GET_TICKETS = 'GET_TICKETS'

const initialState = {
    searchId: '',
    tickets: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SEARCH_ID:
            return {
                ...state,
                searchId: action.payload
            }
        case GET_TICKETS:
            return {
                ...state,
                tickets: action.payload
            }
        default:
            return state
    }
}

export default reducer;

export const getSearchId = (payload) => ({type:GET_SEARCH_ID, payload});
export const getTickets = (payload) => ({type:GET_TICKETS, payload});