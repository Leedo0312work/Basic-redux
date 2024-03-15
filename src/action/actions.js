
import { INCREMENT, DECREMENT, FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_ERROR, CREATE_USER_REQUEST, CREATE_USER_SUCCESS, CREATE_USER_ERROR, DELETE_USER_SUCCESS } from './types';
import axios from 'axios';

export const increaseCounter = () => {
    return {
        type: INCREMENT,
    };
};

export const decreaseCounter = () => {
    return {
        type: DECREMENT,
    };
};

export const fetchAllUsers = () => {
    return async (dispatch, getState) => {
        dispatch(fetchUsersRequest())
        try {
            const res = await axios.get("http://localhost:8080/users/all")
            const data = res && res.data ? res.data : []
            dispatch(fetchUsersSuccess(data))
        } catch (error) {
            console.log(error)
            dispatch(fetchUsersError())
        }

    }
}

export const fetchUsersRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
}

export const fetchUsersSuccess = (data) => {
    return {
        type: FETCH_USER_SUCCESS,
        dataUsers: data
    }
}

export const fetchUsersError = () => {
    return {
        type: FETCH_USER_ERROR
    }
}

export const createUserRequest = () => {
    return {
        type: CREATE_USER_REQUEST
    }
}

export const createUsersSuccess = () => {
    return {
        type: CREATE_USER_SUCCESS,
    }
}

export const createUsersError = () => {
    return {
        type: CREATE_USER_ERROR
    }
}

export const createNewUserRedux = (email, password, username) => {
    return async (dispatch, getState) => {
        dispatch(createUserRequest())
        try {
            let res = await axios.post("http://localhost:8080/users/create", { email, password, username })
            if (res && res.data.errCode === 0) {
                dispatch(createUsersSuccess())
                dispatch(fetchAllUsers())
            }
        } catch (error) {
            console.log(error)
            dispatch(createUsersError())
        }
    }
}

export const deleteUserRedux = (id) => {
    return async (dispatch, getState) => {
        try {
            let res = await axios.post(`http://localhost:8080/users/delele/${id}`)
            if (res && res.data.errCode === 0) {
                dispatch(deleteUsersSuccess())
                dispatch(fetchAllUsers())
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export const deleteUsersSuccess = () => {
    return {
        type: DELETE_USER_SUCCESS
    }
}