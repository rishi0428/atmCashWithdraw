
const {validateWithdrawal}          = require('./validators/withdrawalValidator');
const {withdrawCash}                = require('./controllers/withdrawalController');
const {authenticateAccountPassword} = require('./../../middlewares/passwordAuthentication');

// api for cash withdrawl request
app.post("/atm/withdraw", validateWithdrawal, authenticateAccountPassword, withdrawCash);