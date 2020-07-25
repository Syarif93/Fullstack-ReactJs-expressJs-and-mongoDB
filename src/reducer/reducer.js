import { createStore } from 'redux'
import uuid from 'uuid/v4'

const initialState = {
    exercise: [
        {
            id: uuid(),
            data: {}
        }
    ]
}

export const store = createStore(
    reducer,
    initialState
)

function reducer(state, { type, payload }) {
    switch (type) {
        case 'EXERCISE':
            return {
                ...state,
                exercise: [...state.exercise, payload]
            }
        default:
            return state
    }
}

export const addExercise = (data) => ({
    type: 'EXERCISE',
    payload: data
})