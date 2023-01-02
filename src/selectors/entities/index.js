export const selectEntitiesFromState = (state) => state.entities.entities || [];

export const selectEntityFromState = (state, entityId) =>
    state.filter((entity) => entity.id === entityId);
