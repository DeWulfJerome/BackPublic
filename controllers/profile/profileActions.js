export const getUserTips = allTips => {
  return allTips.filter(val => {
    return val.class === 'tip';
  });
};
