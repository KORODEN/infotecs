import {
    INEXPENSIVE_TO_EXPENSIVE_VALUE,
    EXPENSIVE_TO_INEXPENSIVE_VALUE,
    BEST_RATING_VALUE,
    DISCOUNT_VALUE,
    DEFAULT_VALUE,
} from '../constants.js'

import { selectProductsList, selectSortingType } from '../store/selectors.js'
import { store } from '../store/store.js'

/** Сортировка элементов */
export function sortItems() {
    const state = store.getState()
    const products = selectProductsList(state)
    const sortingType = selectSortingType(state)

    if (sortingType === DEFAULT_VALUE) {
        products.sort((a, b) => a.id - b.id)
    } else if (sortingType === INEXPENSIVE_TO_EXPENSIVE_VALUE) {
        products.sort((a, b) => a.price - b.price)
    } else if (sortingType === EXPENSIVE_TO_INEXPENSIVE_VALUE) {
        products.sort((a, b) => b.price - a.price)
    } else if (sortingType === BEST_RATING_VALUE) {
        products.sort((a, b) => b.rating - a.rating)
    } else if (sortingType === DISCOUNT_VALUE) {
        products.sort((a, b) => b.discountPercentage - a.discountPercentage)
    }
}
