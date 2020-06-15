

const {CURRENCY_NOTES_VALUES} = require('./../constants/withdrawalConstants');
const logging                 = require('./../../../logging/logging');

/**
 * function that will return an object with key as note amount and value as number of notes 
 * for withdrawl purpose according to the preferred denomination
 * it will return empty object in case of no notes
 * @param {*} apiReference 
 * @param {*} param1 {amount, preference}
 */
const withdrawCash = (apiReference, {amount, preference}) => {
  logging.log(apiReference, {EVENT : "withdrawCash service", opts : {amount, preference}});
    let map = {};
    let number_of_notes = 0;
    if(preference){
      number_of_notes = Math.floor(amount/preference);
      if(number_of_notes){
        map[preference] = number_of_notes;
        amount = amount - (number_of_notes * preference);
      }
    }
    if(amount){
      for(let i=0; i<CURRENCY_NOTES_VALUES.length; i++){
          number_of_notes = Math.floor(amount / CURRENCY_NOTES_VALUES[i]);
          if(number_of_notes){
              map[CURRENCY_NOTES_VALUES[i]] = number_of_notes;
              amount = amount - (number_of_notes * CURRENCY_NOTES_VALUES[i]);
          }
      }
    }
    if(amount){
      return {};
    }
    return map;
};

module.exports = {withdrawCash};