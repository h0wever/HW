import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            if (action.payload === 'up') {
                state.sort((a, b) => a.name.localeCompare(b.name))
            } else if (action.payload === 'down') {
                state.sort((a, b) => a.name.localeCompare(b.name)).reverse()
            }
            return state // need to fix
        }
        case 'check': {

            return state.filter(el => el.age > 17).reverse() // need to fix
        }
        default:
            return state
    }
}
