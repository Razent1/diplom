import {combineReducers} from 'redux';

const SET_DB = 'SET_DB';
const SET_TABLE = 'SET_TABLE';
const SET_CHECKERS = 'SET_CHECKERS';

export function setDatabase(db) {
    return {
        type: SET_DB,
        db
    }
}

export function setTable(table) {
    return {
        type: SET_TABLE,
        table
    }
}

export function setCheckers(checker) {
    return {
        type: SET_CHECKERS,
        checker
    }
}

const defaultData =
    {
        db: null,
        table: null,
        checker: {
            duplication: false,
            nullCols: false,
            countRows: false,
            actualitySimple: false,
            actualityDifficulty: false
        }
    };

function data(state = defaultData, action) {
    switch (action.type) {
        case SET_DB:
            return (
                {
                    ...state,
                    db: action.db
                })
        case SET_TABLE:
            return (
                {
                    ...state,
                    table: action.table
                }
            )
        case SET_CHECKERS:
            return (
                {
                    ...state,
                    checker: action.checker
                }
            )
        default:
            return state;
    }
}

const exportData = combineReducers({
    data
});

export default exportData;