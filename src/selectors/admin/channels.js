const selectAdminFromState = (state) => state.admin;

export const selectChannelsFromState = (state) =>
    selectAdminFromState(state).channels.channels;
