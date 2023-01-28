import { PRODUCTS_UPDATE, SORTING_TYPE } from './types.js'

export function rootReducer(state, action = { type: 'INIT' }) {
    switch (action.type) {
        case PRODUCTS_UPDATE:
            return { ...state, products: action.payload }
        case SORTING_TYPE:
            return { ...state, sortingType: action.payload }
    }
    return state
}
