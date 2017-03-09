const datePath = (date = new Date()) => {
  const year = date.getFullYear();
  const monthInt = date.getMonth() + 1;
  const month = monthInt < 10 ? `0${monthInt}` : `${monthInt}`;
  return `${year}/${month}/`;
};

module.exports = datePath;
