**[MailSlurp JS](../README.md)**

> [Globals](../README.md) / CreateContactOptions

# Interface: CreateContactOptions

**`export`** 

**`interface`** CreateContactOptions

## Hierarchy

* **CreateContactOptions**

## Index

### Properties

* [company](createcontactoptions.md#company)
* [emailAddresses](createcontactoptions.md#emailaddresses)
* [firstName](createcontactoptions.md#firstname)
* [groupId](createcontactoptions.md#groupid)
* [lastName](createcontactoptions.md#lastname)
* [metaData](createcontactoptions.md#metadata)
* [optOut](createcontactoptions.md#optout)
* [tags](createcontactoptions.md#tags)

## Properties

### company

• `Optional` **company**: string

*Defined in [src/generated/api.ts:411](https://github.com/mailslurp/mailslurp-client/blob/c6aef6d/src/generated/api.ts#L411)*

**`memberof`** CreateContactOptions

___

### emailAddresses

• `Optional` **emailAddresses**: Array\<string>

*Defined in [src/generated/api.ts:369](https://github.com/mailslurp/mailslurp-client/blob/c6aef6d/src/generated/api.ts#L369)*

Set of email addresses belonging to the contact

**`memberof`** CreateContactOptions

___

### firstName

• `Optional` **firstName**: string

*Defined in [src/generated/api.ts:375](https://github.com/mailslurp/mailslurp-client/blob/c6aef6d/src/generated/api.ts#L375)*

**`memberof`** CreateContactOptions

___

### groupId

• `Optional` **groupId**: string

*Defined in [src/generated/api.ts:381](https://github.com/mailslurp/mailslurp-client/blob/c6aef6d/src/generated/api.ts#L381)*

Group IDs that contact belongs to

**`memberof`** CreateContactOptions

___

### lastName

• `Optional` **lastName**: string

*Defined in [src/generated/api.ts:405](https://github.com/mailslurp/mailslurp-client/blob/c6aef6d/src/generated/api.ts#L405)*

**`memberof`** CreateContactOptions

___

### metaData

• `Optional` **metaData**: [JsonNode](jsonnode.md)

*Defined in [src/generated/api.ts:387](https://github.com/mailslurp/mailslurp-client/blob/c6aef6d/src/generated/api.ts#L387)*

User metadata key value pairs to save for this contact. Can be any values you like.

**`memberof`** CreateContactOptions

___

### optOut

• `Optional` **optOut**: boolean

*Defined in [src/generated/api.ts:393](https://github.com/mailslurp/mailslurp-client/blob/c6aef6d/src/generated/api.ts#L393)*

Has the user explicitly or implicitly opted out of being contacted? If so MailSlurp will ignore them in all actions.

**`memberof`** CreateContactOptions

___

### tags

• `Optional` **tags**: Array\<string>

*Defined in [src/generated/api.ts:399](https://github.com/mailslurp/mailslurp-client/blob/c6aef6d/src/generated/api.ts#L399)*

Tags that can be used to search and group contacts

**`memberof`** CreateContactOptions
