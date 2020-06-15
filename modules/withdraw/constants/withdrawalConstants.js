
const CURRENCY_NOTES = {
  TWO_THOUSAND : 2000,
  THOUSAND     : 1000,
  FIVE_HUNDRED : 500,
  TWO_HUNDRED  : 200,
  HUNDRED      : 100,
  FIFTY        : 50,
  TWENTY       : 20,
  TEN          : 10
};

const CURRENCY_NOTES_VALUES = Object.values(CURRENCY_NOTES);

Object.freeze(CURRENCY_NOTES);
Object.freeze(CURRENCY_NOTES_VALUES);

module.exports = {CURRENCY_NOTES, CURRENCY_NOTES_VALUES};