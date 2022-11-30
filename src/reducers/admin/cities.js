import { types } from '../../actions/admin';

const INITIAL_STATE = {
    cities: [],
};

export const cities = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.ADMIN_GET_CITIES_ATTEMPT:
            return {
                ...state,
            };
        case types.ADMIN_GET_CITIES_SUCCESS:
            return {
                ...state,
                cities: action.payload,
            };
        case types.ADMIN_GET_CITIES_FAILED:
            return {
                ...state,
                cities: [],
            };
        case types.ADMIN_ADD_CITY_ATTEMPT:
            return {
                ...state,
            };
        case types.ADMIN_ADD_CITY_SUCCESS:
            return {
                ...state,
                cities: [...state.cities, action.payload],
            };
        case types.ADMIN_ADD_CITY_FAILED:
            return {
                ...state,
            };
        case types.ADMIN_EDIT_CITY_ATTEMPT:
            return {
                ...state,
            };
        case types.ADMIN_EDIT_CITY_SUCCESS:
            const cityData = action.payload;
            const newCities = state.cities.map((city) => {
                if (city.id === cityData.id) {
                    return { ...cityData };
                } else {
                    return city;
                }
            });
            return {
                ...state,
                cities: newCities,
            };
        case types.ADMIN_EDIT_CITY_FAILED:
            return {
                ...state,
            };
        case types.ADMIN_DELETE_CITY_ATTEMPT:
            return {
                ...state,
            };
        case types.ADMIN_DELETE_CITY_SUCCESS: {
            const cityData = action.payload;
            const newCities = state.cities.filter(
                (city) => city.id !== cityData.id,
            );
            return {
                ...state,
                cities: newCities,
            };
        }
        case types.ADMIN_DELETE_CITY_FAILED:
            return {
                ...state,
            };

        default:
            return {
                ...state,
            };
    }
};
