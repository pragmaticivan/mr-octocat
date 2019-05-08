export function pick(object: object, keys: string[]) {
  return keys.reduce((obj, key) => {
     if (object[key]) {
        obj[key] = object[key];
     }
     return obj;
   }, {});
}
