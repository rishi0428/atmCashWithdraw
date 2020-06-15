
require('./../app');
const chai = require("chai");
const chaiHttp = require("chai-http");
const { expect } = chai;
chai.use(chaiHttp);

describe("cash withdrawl test", () => {

  it("success with denomination", done => {
    chai
      .request(app)
      .post("/atm/withdraw")
      .send({
        "accountId":"GHZ123",
        "password":"1234",
        "amount":2500,
        "denomination":200
      })
      .end((err, res) => {
        expect(res.body.status).to.equals(200);
        expect(res.body.message).to.equals("success");
        expect(res.body.data).to.eql({"200":12, "100":1});
        done();
      });
  });

  it("success without denomination", done => {
    chai
      .request(app)
      .post("/atm/withdraw")
      .send({
        "accountId":"GHZ123",
        "password":"1234",
        "amount":2500
      })
      .end((err, res) => {
        expect(res.body.status).to.equals(200);
        expect(res.body.message).to.equals("success");
        expect(res.body.data).to.eql({"2000":1, 500 :1});
        done();
      });
  });

  it("wrong password", done => {
    chai
      .request(app)
      .post("/atm/withdraw")
      .send({
        "accountId":"GHZ123",
        "password":"1235",
        "amount":2000,
        "denomination":2000
      })
      .end((err, res) => {
        expect(res.body.status).to.equals(401);
        expect(res.body.message).to.equals("Invalid access");
        expect(res.body.data).to.eql({});
        done();
      });
  });

  it("wrong account", done => {
    chai
      .request(app)
      .post("/atm/withdraw")
      .send({
        "accountId":"GHZ124",
        "password":"1235",
        "amount":2000,
        "denomination":2000
      })
      .end((err, res) => {
        expect(res.body.status).to.equals(401);
        expect(res.body.message).to.equals("Invalid access");
        expect(res.body.data).to.eql({});
        done();
      });
  });

  it("low balance", done => {
    chai
      .request(app)
      .post("/atm/withdraw")
      .send({
        "accountId":"GHZ123",
        "password":"1234",
        "amount":10000,
        "denomination":2000
      })
      .end((err, res) => {
        expect(res.body.status).to.equals(500);
        expect(res.body.message).to.equals("Low Account balance");
        expect(res.body.data).to.eql({});
        done();
      });
  });

  it("denomination greater than withdraw amount", done => {
    chai
      .request(app)
      .post("/atm/withdraw")
      .send({
        "accountId":"GHZ123",
        "password":"1234",
        "amount":1800,
        "denomination":2000
      })
      .end((err, res) => {
        expect(res.body.status).to.equals(500);
        expect(res.body.message).to.equals("Not a valid withdrawl denomination");
        expect(res.body.data).to.eql({});
        done();
      });
  });

  it("amount not in multiple of 10", done => {
    chai
      .request(app)
      .post("/atm/withdraw")
      .send({
        "accountId":"GHZ123",
        "password":"1234",
        "amount":1803,
        "denomination":2000
      })
      .end((err, res) => {
        expect(res.body.status).to.equals(500);
        expect(res.body.message).to.equals("Not a valid withdrawl amount");
        expect(res.body.data).to.eql({});
        done();
      });
  });
});
