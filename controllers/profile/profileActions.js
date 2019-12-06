export const getUserTips = allTips => {
  return allTips
    .filter(val => {
      return val.class === 'tip';
    })
    .sort((a, b) => {
      return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
    });
};
