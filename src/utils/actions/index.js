export const emptyActionCreator = (type) => () => ({ type });
export const payloadActionCreator = (type) => (payload) => ({ type, payload });

