**[MailSlurp JS](../README.md)**

> [Globals](../README.md) / CreateWebhookOptions

# Interface: CreateWebhookOptions

Options for creating a webhook. Webhooks can be attached to inboxes and MailSlurp will POST a webhook payload to the URL specified whenever the inbox receives an email. Webhooks are great for processing many inbound emails.

**`export`** 

**`interface`** CreateWebhookOptions

## Hierarchy

* **CreateWebhookOptions**

## Index

### Properties

* [basicAuth](createwebhookoptions.md#basicauth)
* [name](createwebhookoptions.md#name)
* [url](createwebhookoptions.md#url)

## Properties

### basicAuth

• `Optional` **basicAuth**: [BasicAuthOptions](basicauthoptions.md)

*Defined in [src/generated/api.ts:511](https://github.com/mailslurp/mailslurp-client/blob/c6aef6d/src/generated/api.ts#L511)*

Optional basic authentication that MailSlurp should use when calling the URL. For instance if your URL is https://example.com then basic auth will call a URL like https://{username}@{password}:example.com

**`memberof`** CreateWebhookOptions

___

### name

• `Optional` **name**: string

*Defined in [src/generated/api.ts:517](https://github.com/mailslurp/mailslurp-client/blob/c6aef6d/src/generated/api.ts#L517)*

Optional name for the webhook

**`memberof`** CreateWebhookOptions

___

### url

• `Optional` **url**: string

*Defined in [src/generated/api.ts:523](https://github.com/mailslurp/mailslurp-client/blob/c6aef6d/src/generated/api.ts#L523)*

Public URL on your server that MailSlurp can post WebhookNotification payload to when an email is received. The payload of the submitted JSON is described by https://api.mailslurp.com/schemas/webhook-payload

**`memberof`** CreateWebhookOptions
