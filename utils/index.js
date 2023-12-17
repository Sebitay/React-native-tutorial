export const checkImageURL = (url) => {
  if (!url) return false;
  else {
    const pattern = new RegExp(
      "^https?:\\/\\/.+\\.(png|jpg|jpeg|bpm|gif|webp)$",
      "i"
    );
    return pattern.test(url);
  }
};
