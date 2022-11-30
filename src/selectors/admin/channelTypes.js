const selectAdminFromState = (state) => state.admin;

export const selectChannelTypesFromState = (state) =>
    selectAdminFromState(state).channelTypes.channelTypes;
