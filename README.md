Server startup:
- npm intall
- node app.js

Assumptions:
- ATM has infinite amount of currency notes
- preferred denomination should not be more than withdrawal amount
- account number is of 6 digits and password is of 4 digits only (md5 hash is used)
- account numbers and details are stored in config file
- balance gets updated during transaction and reinitialised on restart

TEST CASES - 
- npm test

CURL - 
curl --location --request POST 'localhost:8080/atm/withdraw' \
--header 'Content-Type: application/json' \
--data-raw '{
	"accountId":"GHZ123",
	"password":"1234",
	"amount":2000,
	"denomination":2000
}'