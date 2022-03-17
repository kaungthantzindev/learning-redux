import * as actions from './actionTypes'

export const bugAdded = desc => ({
    type: actions.BUG_ADDED,
    payload: {
        description: desc,
    }
})

export const bugRemoved = id => ({
    type: actions.BUG_REMOVED,
    payload: {
        id,
    }
})