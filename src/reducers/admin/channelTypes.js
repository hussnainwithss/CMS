import { types } from '../../actions/admin';

const INITIAL_STATE = {
    channelTypes: [],
};

export const channelTypes = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.ADMIN_GET_CHANNEL_TYPES_ATTEMPT:
            return {
                ...state,
            };
        case types.ADMIN_GET_CHANNEL_TYPES_SUCCESS:
            return {
                ...state,
                channelTypes: action.payload,
            };
        case types.ADMIN_GET_CHANNEL_TYPES_FAILED:
            return {
                ...state,
                channelTypes: [],
            };
        case types.ADMIN_ADD_CHANNEL_TYPE_ATTEMPT:
            return {
                ...state,
            };
        case types.ADMIN_ADD_CHANNEL_TYPE_SUCCESS:
            return {
                ...state,
                channelTypes: [...state.channelTypes, action.payload],
            };
        case types.ADMIN_ADD_CHANNEL_TYPE_FAILED:
            return {
                ...state,
            };
        case types.ADMIN_EDIT_CHANNEL_TYPE_ATTEMPT:
            return {
                ...state,
            };
        case types.ADMIN_EDIT_CHANNEL_TYPE_SUCCESS:
            const channelTypeData = action.payload;
            const newChannelTypes = state.channelTypes.map((channelType) => {
                if (channelType.id === channelTypeData.id) {
                    return { ...channelTypeData };
                } else {
                    return channelType;
                }
            });
            return {
                ...state,
                channelTypes: newChannelTypes,
            };
        case types.ADMIN_EDIT_CHANNEL_TYPE_FAILED:
            return {
                ...state,
            };
        case types.ADMIN_DELETE_CHANNEL_TYPE_ATTEMPT:
            return {
                ...state,
            };
        case types.ADMIN_DELETE_CHANNEL_TYPE_SUCCESS: {
            const channelTypeData = action.payload;
            const newChannelTypes = state.channelTypes.filter(
                (channelType) => channelType.id !== channelTypeData.id,
            );
            return {
                ...state,
                channelTypes: newChannelTypes,
            };
        }
        case types.ADMIN_DELETE_CHANNEL_TYPE_FAILED:
            return {
                ...state,
            };

        default:
            return {
                ...state,
            };
    }
};
