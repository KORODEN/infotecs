import { Controls } from './components/Controls/index.js'
import { List } from './components/List/index.js'
import { Loader } from './components/Loader/index.js'
import { productsUpdateAction, selectProductsList } from './store/index.js'
import { store } from './store/store.js'

const root = document.querySelector('#root')

export function drawProductsList() {
    root.append(List(selectProductsList(store.getState())))
}

export function deleteList() {
    const list = root.querySelector('.list')
    if (list) {
        while (list.firstChild) {
            list.firstChild.remove()
        }
        list.remove()
    }
}

export function fetchData(limit) {
    const url = `https://dummyjson.com/products?limit=${limit}`

    deleteList()

    const loader = Loader()
    root.append(loader)

    fetch(url)
        .then(data => data.json())
        .then(({ products }) => {
            store.dispatch(productsUpdateAction(products))
            loader.remove()
        })
}

function start() {
    root.append(Controls())
    fetchData(10)
}

start()
