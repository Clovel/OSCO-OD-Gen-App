/**
 * Returns the value of APP_VERSION
 */
export const getVersion = (): string => {
  return process.env.APP_VERSION as string || 'development';
};
