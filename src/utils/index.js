export * from './actions';

export const objectMap = (obj, fn) =>
    Object.entries(obj).map(([k, v], i) => [k, fn(v, k, i)]);
