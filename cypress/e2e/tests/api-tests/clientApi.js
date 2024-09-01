describe("Client api", () => {


  beforeEach(() => {
  
  })

    it("get client profile - with correct token (no cookies)", () => {

        cy.request({
          url: 'https://my.amega.finance/client-api/profile',
          method: 'GET',
          headers: {
            'Authorization': 'Bearer 2d8117fc21a1b9f3776612e990fa65f748d0425e11a7b4b68b8c9af60819b0870b20f6c6ff0e0de601d88420f9d9bb78af60aca442b1788c57b8aa7b',
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

      it("verify schema of the response", () => {

        const schema = 
          {
            
            "type": "object",
            "properties": {
              "id": {
                "type": "integer"
              },
              "cid": {
                "type": "integer"
              },
              "token": {
                "type": "null"
              },
              "isIb": {
                "type": "boolean"
              },
              "canRequestIb": {
                "type": "boolean"
              },
              "ibLinksRestricted": {
                "type": "boolean"
              },
              "canCreateIbLinks": {
                "type": "boolean"
              },
              "clientType": {
                "type": "string"
              },
              "title": {
                "type": "null"
              },
              "firstName": {
                "type": "string"
              },
              "lastName": {
                "type": "string"
              },
              "country": {
                "type": "string"
              },
              "phone": {
                "type": "null"
              },
              "language": {
                "type": "string"
              },
              "email": {
                "type": "string"
              },
              "password": {
                "type": "null"
              },
              "isVerified": {
                "type": "boolean"
              },
              "notificationPreferences": {
                "type": "object",
                "properties": {
                  "helpdesk": {
                    "type": "boolean"
                  },
                  "transfer": {
                    "type": "boolean"
                  },
                  "documents": {
                    "type": "boolean"
                  },
                  "marketing": {
                    "type": "boolean"
                  },
                  "ib-new-reg": {
                    "type": "boolean"
                  },
                  "applications": {
                    "type": "boolean"
                  },
                  "transactions": {
                    "type": "boolean"
                  },
                  "payment-methods": {
                    "type": "boolean"
                  },
                  "referral_deposit": {
                    "type": "boolean"
                  },
                  "referral_withdrawal": {
                    "type": "boolean"
                  },
                  "referral_opened_account": {
                    "type": "boolean"
                  }
                },
                "required": [
                  "helpdesk",
                  "transfer",
                  "documents",
                  "marketing",
                  "ib-new-reg",
                  "applications",
                  "transactions",
                  "payment-methods",
                  "referral_deposit",
                  "referral_withdrawal",
                  "referral_opened_account"
                ]
              },
              "birthDate": {
                "type": "null"
              },
              "customFields": {
                "type": "object",
                "properties": {
                  "custom_partner_field": {
                    "type": "null"
                  },
                  "custom_app_registration": {
                    "type": "null"
                  },
                  "custom_date_email_verified_at": {
                    "type": "string"
                  }
                },
                "required": [
                  "custom_partner_field",
                  "custom_app_registration",
                  "custom_date_email_verified_at"
                ]
              },
              "financialPermissions": {
                "type": "array",
                "items": [
                  {
                    "type": "string"
                  },
                  {
                    "type": "string"
                  },
                  {
                    "type": "string"
                  },
                  {
                    "type": "string"
                  },
                  {
                    "type": "string"
                  }
                ]
              },
              "smsNotificationEnabled": {
                "type": "boolean"
              },
              "twoFactorAuthEnabled": {
                "type": "boolean"
              },
              "referralLinkId": {
                "type": "null"
              },
              "firstDepositDate": {
                "type": "null"
              },
              "firstDepositId": {
                "type": "null"
              },
              "lastDepositId": {
                "type": "null"
              },
              "lastDepositDate": {
                "type": "null"
              },
              "lastTradedAt": {
                "type": "null"
              },
              "emailVerified": {
                "type": "boolean"
              },
              "phoneVerified": {
                "type": "boolean"
              },
              "registrationDate": {
                "type": "string"
              },
              "marketingLinkId": {
                "type": "null"
              }
            },
            "required": [
              "id",
              "cid",
              "token",
              "isIb",
              "canRequestIb",
              "ibLinksRestricted",
              "canCreateIbLinks",
              "clientType",
              "title",
              "firstName",
              "lastName",
              "country",
              "phone",
              "language",
              "email",
              "password",
              "isVerified",
              "notificationPreferences",
              "birthDate",
              "customFields",
              "financialPermissions",
              "smsNotificationEnabled",
              "twoFactorAuthEnabled",
              "referralLinkId",
              "firstDepositDate",
              "firstDepositId",
              "lastDepositId",
              "lastDepositDate",
              "lastTradedAt",
              "emailVerified",
              "phoneVerified",
              "registrationDate",
              "marketingLinkId"
            ]
          
          }
        
          cy.request({
            url: 'https://my.amega.finance/client-api/profile',
            method: 'GET',
            headers: {
              'Authorization': 'Bearer 2d8117fc21a1b9f3776612e990fa65f748d0425e11a7b4b68b8c9af60819b0870b20f6c6ff0e0de601d88420f9d9bb78af60aca442b1788c57b8aa7b',
              'Content-type': 'application/json'
            },
            failOnStatusCode: false
  
          }).then((resp) => {
           
            expect(resp.status).to.eq(200);
            console.log(resp.body);
            expect(resp.body).to.be.jsonSchema(schema);
           
          })

      })
     
      });


 
