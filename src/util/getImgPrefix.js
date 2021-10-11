const getImgPrefix = (imgFolder) => {
  return `${process.env.PUBLIC_URL}images/${imgFolder}/`;
};
export default getImgPrefix;
