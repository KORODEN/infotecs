import { DEFAULT_VALUE } from '../constants.js'
import { deleteList, drawProductsList } from '../start.js'
import { sortItems } from '../utils/index.js'
import { rootReducer } from './reducer.js'

export const store = createStore(rootReducer, {
    products: {},
    sortingType: DEFAULT_VALUE,
})

store.subscribe(deleteList)
store.subscribe(sortItems)
store.subscribe(drawProductsList)

export function createStore(rootReducer, initialState) {
    let state = rootReducer(initialState)
    const subscribers = []

    return {
        dispatch(action) {
            state = rootReducer(state, action)
            subscribers.forEach(fn => fn())
        },
        subscribe(callback) {
            subscribers.push(callback)
        },
        getState() {
            return state
        },
    }
}
