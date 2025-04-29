/**
 * 
 * @param {string} key 
 * @param {string} defaultValue 
 * @returns {string}
 */
export const getEnv = (key, defaultValue = undefined) => {
  const value = process.env[key] || defaultValue;
  if (value === undefined) {
    throw new Error(`Environment variable "${key}" is not set and no default value was provided.`);
  }
  return value;
};