// actions/attendanceActions.js
import axios from 'axios';

// Action Types

export const GET_ATTENDENCE_REQUEST = 'GET_ATTENDENCE_REQUEST';
export const GET_ATTENDENCE_SUCCESS = 'GET_ATTENDENCE_SUCCESS';
export const GET_ATTENDENCE_FAILURE = 'GET_ATTENDENCE_FAILURE';

// Action Creators


// Get Attendance
export const getAttendenceRequest = () => ({
    type: GET_ATTENDENCE_REQUEST,
});

export const getAttendenceSuccess = (attendence) => ({
    type: GET_ATTENDENCE_SUCCESS,
    payload: attendence,
});

export const getAttendenceFailure = (error) => ({
    type: GET_ATTENDENCE_FAILURE,
    payload: error,
});


// Async Action: Get Attendance
export const getAttendence = (attendenceData) => (dispatch) => {
    dispatch(getAttendenceRequest());

    axios
        .get('/attendence/get-attendence', attendenceData) // Replace with your actual API endpoint
        .then((response) => {
            dispatch(getAttendenceSuccess(response.data));
        })
        .catch((error) => {
            dispatch(getAttendenceFailure(error.message));
        });
};