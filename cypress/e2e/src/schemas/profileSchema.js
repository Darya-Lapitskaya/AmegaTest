const profileJsonSchema = 
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

module.exports = profileJsonSchema;