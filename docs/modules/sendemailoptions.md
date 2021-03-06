**[MailSlurp JS](../README.md)**

> [Globals](../README.md) / SendEmailOptions

# Namespace: SendEmailOptions

**`export`** 

**`namespace`** SendEmailOptions

## Index

### Enumerations

* [SendStrategyEnum](../enums/sendemailoptions.sendstrategyenum.md)

### Properties

* [attachments](sendemailoptions.md#attachments)
* [bcc](sendemailoptions.md#bcc)
* [body](sendemailoptions.md#body)
* [cc](sendemailoptions.md#cc)
* [charset](sendemailoptions.md#charset)
* [from](sendemailoptions.md#from)
* [isHTML](sendemailoptions.md#ishtml)
* [replyTo](sendemailoptions.md#replyto)
* [sendStrategy](sendemailoptions.md#sendstrategy)
* [subject](sendemailoptions.md#subject)
* [template](sendemailoptions.md#template)
* [templateVariables](sendemailoptions.md#templatevariables)
* [to](sendemailoptions.md#to)
* [toContacts](sendemailoptions.md#tocontacts)
* [toGroup](sendemailoptions.md#togroup)

## Properties

### attachments

• `Optional` **attachments**: Array\<string>

*Defined in [src/generated/api.ts:2104](https://github.com/mailslurp/mailslurp-client/blob/c6aef6d/src/generated/api.ts#L2104)*

Optional list of attachment IDs to send with this email. You must first upload each attachment separately in order to obtain attachment IDs. This way you can reuse attachments with different emails once uploaded.

**`memberof`** SendEmailOptions

___

### bcc

• `Optional` **bcc**: Array\<string>

*Defined in [src/generated/api.ts:2110](https://github.com/mailslurp/mailslurp-client/blob/c6aef6d/src/generated/api.ts#L2110)*

Optional list of bcc destination email addresses

**`memberof`** SendEmailOptions

___

### body

• `Optional` **body**: string

*Defined in [src/generated/api.ts:2116](https://github.com/mailslurp/mailslurp-client/blob/c6aef6d/src/generated/api.ts#L2116)*

Optional contents of email. If body contains HTML then set `isHTML` to true to ensure that email clients render it correctly. You can use moustache template syntax in the email body in conjunction with `toGroup` contact variables or `templateVariables` data. If you need more templating control consider creating a template and using the `template` property instead of the body.

**`memberof`** SendEmailOptions

___

### cc

• `Optional` **cc**: Array\<string>

*Defined in [src/generated/api.ts:2122](https://github.com/mailslurp/mailslurp-client/blob/c6aef6d/src/generated/api.ts#L2122)*

Optional list of cc destination email addresses

**`memberof`** SendEmailOptions

___

### charset

• `Optional` **charset**: string

*Defined in [src/generated/api.ts:2128](https://github.com/mailslurp/mailslurp-client/blob/c6aef6d/src/generated/api.ts#L2128)*

Optional charset

**`memberof`** SendEmailOptions

___

### from

• `Optional` **from**: string

*Defined in [src/generated/api.ts:2134](https://github.com/mailslurp/mailslurp-client/blob/c6aef6d/src/generated/api.ts#L2134)*

Optional from address. If not set the source inbox address will be used for this field. Beware of potential spam penalties when setting this field to an address not used by the inbox. For custom email addresses use a custom domain.

**`memberof`** SendEmailOptions

___

### isHTML

• `Optional` **isHTML**: boolean

*Defined in [src/generated/api.ts:2140](https://github.com/mailslurp/mailslurp-client/blob/c6aef6d/src/generated/api.ts#L2140)*

Optional HTML flag. If true the `content-type` of the email will be `text/html`. Set to true when sending HTML to ensure proper rending on email clients

**`memberof`** SendEmailOptions

___

### replyTo

• `Optional` **replyTo**: string

*Defined in [src/generated/api.ts:2146](https://github.com/mailslurp/mailslurp-client/blob/c6aef6d/src/generated/api.ts#L2146)*

Optional replyTo header

**`memberof`** SendEmailOptions

___

### sendStrategy

• `Optional` **sendStrategy**: [SendStrategyEnum](../enums/sendemailoptions.sendstrategyenum.md)

*Defined in [src/generated/api.ts:2152](https://github.com/mailslurp/mailslurp-client/blob/c6aef6d/src/generated/api.ts#L2152)*

Optional strategy to use when sending the email

**`memberof`** SendEmailOptions

___

### subject

• `Optional` **subject**: string

*Defined in [src/generated/api.ts:2158](https://github.com/mailslurp/mailslurp-client/blob/c6aef6d/src/generated/api.ts#L2158)*

Optional email subject line

**`memberof`** SendEmailOptions

___

### template

• `Optional` **template**: string

*Defined in [src/generated/api.ts:2164](https://github.com/mailslurp/mailslurp-client/blob/c6aef6d/src/generated/api.ts#L2164)*

Optional template ID to use for body. Will override body if provided. When using a template make sure you pass the corresponding map of `templateVariables`. You can find which variables are needed by fetching the template itself or viewing it in the dashboard.

**`memberof`** SendEmailOptions

___

### templateVariables

• `Optional` **templateVariables**: any

*Defined in [src/generated/api.ts:2170](https://github.com/mailslurp/mailslurp-client/blob/c6aef6d/src/generated/api.ts#L2170)*

Optional map of template variables. Will replace moustache syntax variables in subject and body or template with the associated values if found.

**`memberof`** SendEmailOptions

___

### to

• `Optional` **to**: Array\<string>

*Defined in [src/generated/api.ts:2176](https://github.com/mailslurp/mailslurp-client/blob/c6aef6d/src/generated/api.ts#L2176)*

List of destination email addresses. Even single recipients must be in array form. Maximum recipients per email depends on your plan. If you need to send many emails try using contacts or contact groups or use a non standard sendStrategy to ensure that spam filters are not triggered (many recipients in one email can affect your spam rating).

**`memberof`** SendEmailOptions

___

### toContacts

• `Optional` **toContacts**: Array\<string>

*Defined in [src/generated/api.ts:2182](https://github.com/mailslurp/mailslurp-client/blob/c6aef6d/src/generated/api.ts#L2182)*

Optional list of contact IDs to send email to. Manage your contacts via the API or dashboard. When contacts are used the email is sent to each contact separately so they will not see other recipients.

**`memberof`** SendEmailOptions

___

### toGroup

• `Optional` **toGroup**: string

*Defined in [src/generated/api.ts:2188](https://github.com/mailslurp/mailslurp-client/blob/c6aef6d/src/generated/api.ts#L2188)*

Optional contact group ID to send email to. You can create contacts and contact groups in the API or dashboard and use them for email campaigns. When contact groups are used the email is sent to each contact separately so they will not see other recipients

**`memberof`** SendEmailOptions
