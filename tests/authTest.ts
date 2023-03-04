import chai from "chai";
import chaiHttp from "chai-http";
import app from "../index";

chai.should();

chai.use(chaiHttp);

describe("Express API", () => {
  describe("/POST :signup", () => {
    it("it should signup", (done) => {
      chai
        .request(app)
        .post("/api/auth/signup")
        .send({ 
          name: "tempUser",
          email: "tem@gmail.com",
          password: "password"
         })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.status.should.equal('success');
          res.body.should.have.property('data');
          
          // Test if login works
          
            chai
              .request(app)
              .post("/api/auth/login")
              .send({ 
                name: "tempUser",
                email: "tem@gmail.com",
                password: "password"
               })
              .end((err, res) => {
                res.should.have.status(200);
                res.body.status.should.equal('success');
                res.body.should.have.property('data');
                res.body.data.should.have.property('token');
                // done(0);
                var token = res.body.data.token;
                
                // Test if get all notes works
                chai
                  .request(app)
                  .get("/api/notes")
                  .set('Authorization', 'Bearer ' + token)
                  .end((err, res) => {
                    res.should.have.status(200);
                    res.body.status.should.equal('success');
                    res.body.should.have.property('data');
                    res.body.data.should.be.a('array');

                    // Test if create  a note works
                    chai
                      .request(app)
                      .post("/api/notes")
                      .set('Authorization', 'Bearer ' + token)
                      .send({
                        title: "This is a new title for test",
                        description: "This is a new description for test"
                      })
                      .end((err, res) => {
                        res.should.have.status(200);
                        res.body.status.should.equal('success');
                        res.body.should.have.property('data');
                        res.body.data.should.have.property('_id');

                        var noteId = res.body.data._id;

                        // Test if get a note by ID works
                        chai
                          .request(app)
                          .get(`/api/notes/${noteId}`)
                          .set('Authorization', 'Bearer ' + token)
                          .end((err, res) => {
                            res.should.have.status(200);
                            res.body.status.should.equal('success');
                            res.body.should.have.property('data');
                            res.body.data.should.have.property('title');
                            res.body.data.should.have.property('description');
                            
                            // Test if change a note by ID works
                            chai
                              .request(app)
                              .put(`/api/notes/${noteId}`)
                              .set('Authorization', 'Bearer ' + token)
                              .send({
                                title: 'This is the changed title',
                                description: 'This is the changed description'
                              })
                              .end((err, res) => {
                                res.should.have.status(200);
                                res.body.status.should.equal('success');
                                res.body.should.have.property('data');
                                res.body.data.should.have.property('title');
                                res.body.data.should.have.property('description');
                                
                                // Test if remove a note by id works
                                chai
                                  .request(app)
                                  .delete(`/api/notes/${noteId}`)
                                  .set('Authorization', 'Bearer ' + token)
                                  .end((err, res) => {
                                    res.should.have.status(200);
                                    res.body.status.should.equal('success');

                                    done();
                                  });
                              });
                          });
                      });
                  });
              });
        });
    });
  });
});
