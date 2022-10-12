import { types } from '../../actions/admin';

const INITIAL_STATE = {
    channels: [],
};

export const channels = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.ADMIN_GET_CHANNELS_ATTEMPT:
            return {
                ...state,
            };
        case types.ADMIN_GET_CHANNELS_SUCCESS:
            return {
                ...state,
                channels: action.payload,
            };
        case types.ADMIN_GET_CHANNELS_FAILED:
            return {
                ...state,
                channels: [],
            };
        case types.ADMIN_ADD_CHANNEL_ATTEMPT:
            return {
                ...state,
            };
        case types.ADMIN_ADD_CHANNEL_SUCCESS:
            return {
                ...state,
                channels: [...state.channels, action.payload],
            };
        case types.ADMIN_ADD_CHANNEL_FAILED:
            return {
                ...state,
            };
        case types.ADMIN_EDIT_CHANNEL_ATTEMPT:
            return {
                ...state,
            };
        case types.ADMIN_EDIT_CHANNEL_SUCCESS:
            const channelData = action.payload;
            const newChannels = state.channels.map((channel) => {
                if (channel.id === channelData.id) {
                    return { ...channelData };
                } else {
                    return channel;
                }
            });
            return {
                ...state,
                channels: newChannels,
            };
        case types.ADMIN_EDIT_CHANNEL_FAILED:
            return {
                ...state,
            };
        case types.ADMIN_DELETE_CHANNEL_ATTEMPT:
            return {
                ...state,
            };
        case types.ADMIN_DELETE_CHANNEL_SUCCESS: {
            const channelData = action.payload;
            const newChannels = state.channels.filter(
                (channel) => channel.id !== channelData.id,
            );
            return {
                ...state,
                channels: newChannels,
            };
        }
        case types.ADMIN_DELETE_CHANNEL_FAILED:
            return {
                ...state,
            };

        default:
            return {
                ...state,
            };
    }
};
