/**
 * @function validateSearch
 * @param {string} source
 * @param {string} dest
 * @param {string} deptDate
 * @param {string} returnDate
 * @param {string} selectTrip
 * @description validate search criteria
 */
const validateSearch = (source, dest, deptDate, passengers) => {
  return (
    source?.length === 0 ||
    dest?.length === 0 ||
    deptDate?.length === 0 ||
    !passengers
  );
};

/**
 * @function thousandSeparator
 * @param {int} x
 * @description Thosand Separator
 */
const thousandSeparator = (x) => {
  return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
};

/**
 * @function filterBySourceDest
 * @param {object} payload
 * @param {array} response data from API
 * @description filter flight list by source and destination
 */
const filterBySourceDest = (payload, response) => {
  let resultArr = [];

  let tempArr = [...response];
  const sourceCity = payload?.source;
  const destCity = payload?.destination;
  resultArr = tempArr.filter(
    (val) =>
      val?.deptCity?.toLowerCase() === sourceCity?.toLowerCase() &&
      val?.arivalCity?.toLowerCase() === destCity?.toLowerCase()
  );

  return resultArr;
};

const calculateTotalPrice = (reservation) =>
  reservation.reduce(
    (acc, { price, passengers } = {}) => (
      (acc += parseInt(price) * parseInt(passengers)), acc
    ),
    0
  );

export {
  validateSearch,
  thousandSeparator,
  filterBySourceDest,
  calculateTotalPrice,
};
