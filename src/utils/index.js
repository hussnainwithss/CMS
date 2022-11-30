export * from './actions';
export * from './dataTable';
export * from './Form';

export const objectMap = (obj, fn) =>
    Object.entries(obj).map(([k, v], i) => [k, fn(v, k, i)]);
