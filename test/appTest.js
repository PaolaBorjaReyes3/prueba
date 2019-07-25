const chaiHttp = require('chai-http');
const chai = require('chai')
const assert = require('chai').assert;
const home = require('../negocio/home')
chai.use(chaiHttp);
const url = 'http://localhost:8042';


describe('getuser()', function () {
  it('probando si traer datos() es un  array', function (done) {
    home.datos((r, data) => {
      assert.typeOf(data, "array");
      done()
    })

  });

  it('probando el tamaño del array de los datos', async function (done) {
    home.datos((r, data) => {
      let tam = r.length;
      assert.equal(tam, 1, "Tamaño 1")
      done();
    })
  })

  it('probando la consulta', function (done) {
    let consulta = 'select * from libro'
    home.datos((r, data) => {
      db.query(consulta,
        (e, r) => {
          if (e) {
            done(e)
            return
          }
          assert.equal('select * from libro', consulta, 'asdasdas')
          done()
        }
      )
    })
  })

});

/* describe('get all users: ', () => {
  it('should get all users', (done) => {
    chai.request(url)
      .get('/user')
      .end(function (err, res) {
        console.log(res)
        spect(res).to.have.status(200);
        done();
      });
  });
}); */
