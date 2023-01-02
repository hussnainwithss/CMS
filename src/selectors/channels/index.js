export const selectChannelsFromState = (state) => state.channels.channels;

export const selectChannelFromState = (state, channelId) =>
    state.filter((channel) => channel.id === channelId);
