import { VisibilityFilters } from '../actions'

const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    lists: []
}

export default function listApp (state=initialState, action) {
    switch (action.type) {
        case 'ADD_LIST':
            let list = [ ...state.lists ];
            list.push({title:action.title});
            return Object.assign({}, state, {
                lists: list
            });
        default:
            return state
    }
}