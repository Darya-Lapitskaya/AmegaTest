const profileJsonSchema = require('../../src/schemas/profileSchema.js')
const token = 'Bearer 2d8117fc21a1b9f3776612e990fa65f748d0425e11a7b4b68b8c9af60819b0870b20f6c6ff0e0de601d88420f9d9bb78af60aca442b1788c57b8aa7b'; //put your token here
describe("Client api", () => {


  it("get client profile - with correct token (no cookies)", () => {

    cy.request({
      url: 'https://my.amega.finance/client-api/profile',
      method: 'GET',
      headers: {
        'Authorization': token,
        'Content-type': 'application/json'
      }
    }).then((resp) => {

      expect(resp.status).to.eq(200)

    })

  });

  it("get client profile with wrong token user (no cookies)", () => {

    cy.request({
      url: 'https://my.amega.finance/client-api/profile',
      method: 'GET',
      headers: {
        'Authorization': 'Bearer wrong',
        'Content-type': 'application/json'
      },
      failOnStatusCode: false

    }).then((resp) => {

      expect(resp.status).to.eq(401)

    })

  });

  it("get client profile - verify schema of the response", () => {


    cy.request({
      url: 'https://my.amega.finance/client-api/profile',
      method: 'GET',
      headers: {
        'Authorization': token,
        'Content-type': 'application/json'
      },
      failOnStatusCode: false

    }).then((resp) => {

      expect(resp.status).to.eq(200);

      expect(resp.body).to.be.jsonSchema(profileJsonSchema);

    })

  })

});



