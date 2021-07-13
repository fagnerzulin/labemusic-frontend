const addZero = (number) => (number < 10 ? `0${number}` : number);

const formatDate = (unformatedDate) => {
  const date = new Date(unformatedDate);

  const year = date.getFullYear();
  const month = addZero(date.getMonth() + 1);
  const day = addZero(date.getDate());

  return `${day}/${month}/${year}`;
};

export default formatDate;
