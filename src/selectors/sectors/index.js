export const selectSectorsFromState = (state) => state.sectors.sectors;

export const selectSectorFromState = (state, sectorId) =>
    state.filter((sector) => sector.id === sectorId);
