import { PRODUCTS_UPDATE, SORTING_TYPE } from './types.js'

export function productsUpdateAction(payload) {
    return {
        type: PRODUCTS_UPDATE,
        payload,
    }
}

export function sortingTypeUpdateAction(payload) {
    return {
        type: SORTING_TYPE,
        payload,
    }
}
