'use strict';

const expect = require('chai').expect;
const request = require('superagent');
const Drink = require('../model/drink.js');
const PORT = process.env.PORT || 3000;
const url = `http://localhost:${PORT}`;

require('../server.js');

const exampleDrink = {
  temp: 'hot test',
  size: 'small test',
  name: 'example test'
};

describe('Drink Routes', function(){
  describe('GET: /api/drink', function(){
    before( done => {
      Drink.createDrink(exampleDrink)
      .then( drink => {
        this.tempDrink = drink;
        done();
      })
      .catch( err => done(err));
    });

    after (done => {
      Drink.deleteDrink(this.tempDrink.id)
      .then( () => done() )
      .catch( err => done(err));
    });
    it('should return a drink', done => {
      request.get(`${url}/api/drink/${this.tempDrink.id}`)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).to.equal(200);
        expect(res.body.id).to.equal(this.tempDrink.id);
        expect(res.body.name).to.equal(this.tempDrink.name);
        expect(res.body.content).to.equal(this.tempDrink.content);
        done();
      });
    });

    describe('with an invalid id', function(){
      it('should return 404', done => {
        request.get(`${url}/api/drink/1234`)
        .end((err, res) => {
          expect(res.status).to.equal(404);
          done();
        });
      });
    });
  });

  describe('POST: /api/drink', function(){
    describe('with a valid body', function(){
      after( done => {
        if(this.tempDrink){
          Drink.deleteDrink(this.tempDrink.id)
          .then( () => done())
          .catch( err => done(err));
        }
      });
      it('should return a drink', done => {
        request.post(`${url}/api/drink`)
        .send(exampleDrink)
        .end((err, res) => {
          if(err) return done(err);
          expect(res.status).to.equal(200);
          expect(res.body.name).to.equal(exampleDrink.name);
          expect(res.body.content).to.equal(exampleDrink.content);
          this.tempDrink = res.body;
          done();
        });
      });
    });
  });
  describe('PUT: /api/drink', function(){
    describe('with a valid id and body', function(){
      before( done => {
        Drink.createDrink(exampleDrink)
        .then( drink => {
          this.tempDrink = drink;
          done();
        })
        .catch(err => done(err));
      });
      after( done => {
        if(this.tempDrink){
          Drink.deleteDrink(this.tempDrink.id)
          .then( () => done() )
          .catch( err => done(err));
        }
      });

      it('should return a drink', done => {
        let updateDrink = {
          temp: 'new temp',
          size: 'new size',
          name: 'new name'
        };
        request.put(`${url}/api/drink?id=${this.tempDrink.id}`)
        .send(updateDrink)
        .end((err, res) => {
          if(err) return done(err);
          expect(res.status).to.equal(200);
          expect(res.body.id).to.equal(this.tempDrink.id);
          for( var key in updateDrink ){
            expect(res.body[key]).to.equal(updateDrink[key]);
          }
          done();
        });
      });
    });
  });
});//end wrapper
