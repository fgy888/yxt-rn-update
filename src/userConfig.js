/**
 * @author        fuguiyong <fuguiyong@yxt.wecom.work>
 * @date          2024-04-12 16:27:41
 * Copyright © yxt All rights reserved
 */
export let userConfig = {};

export const setUserConfig = val => {
  userConfig = val;
};

export const getUserConfig = () => {
  return userConfig;
};
