import { actions } from '../actions/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
    selectIsAuthenticatedFromState,
    selectLoggedInUserFromState,
    selectAccessTokenFromState,
    selectLoggedInUserRoleFromState,
    selectTokenExpiredDateFromState,
} from '../selectors/auth';

export const useAuth = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const login = ({ values, setSubmitting }) => {
        dispatch(actions.loginAttempt({ values, navigate, setSubmitting }));
    };

    const logout = () => {
        dispatch(actions.logoutAttempt({ navigate }));
    };

    return {
        login,
        logout,
        isAuthenticated: useSelector((state) =>
            selectIsAuthenticatedFromState(state),
        ),
        user: useSelector((state) => selectLoggedInUserFromState(state)),
        token: useSelector((state) => selectAccessTokenFromState(state)),
        role: useSelector((state) => selectLoggedInUserRoleFromState(state)),
        tokenExpireTimeStamp: useSelector((state) => selectTokenExpiredDateFromState(state)),
    };
};
