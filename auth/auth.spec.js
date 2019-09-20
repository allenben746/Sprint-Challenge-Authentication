const db = require("../database/dbConfig.js");
const request = require("supertest");
const User = require("./auth-model");
const server = require("./auth-router");
const jokes = require("../jokes/jokes-router");

describe("Users model", () => {
  beforeEach(async () => {
    
    await db("users").truncate();
  });
  describe("insert function", () => {
    
  });
  describe("insert function", () => {
    it("inserts users into the db", async () => {
      const UserNumber = await db("users");
      expect(UserNumber).toHaveLength(0);
      await User.findBy({ username: "usernameTets", password: "passwordTest" });
      expect(UserNumber).toHaveLength(0);
    });
  });
  describe('POST /users', function() {
    it('responds with json', function() {
      request(server)
        .post('/register')
        .send({username: 'usernameTets',password:'passwordTest'})
      
        .expect('Content-Type', /json/)
        .expect(201)
       
    });
  });
  describe('POST /users', function() {
    it('responds with json', function() {
      request(server)
        .post('/login')
        .send({username: 'usernameTets',password:'passwordTest'})
      
        .expect('Content-Type', /json/)
        .expect(201)
       
    });
  });
  describe('POST /users', function() {
    it('responds with json', function() {
      request(jokes)
        .get('/jokes')
     
      
        .expect('Content-Type', /json/)
        .expect(201)
       
    });
  });
});