# External module: "generated/api"

## Variables

### `Const` BASE_PATH

• **BASE_PATH**: *string* =  'https://api.mailslurp.com'.replace(/\/+$/, '')

*Defined in [src/generated/api.ts:19](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L19)*

## Functions

### `Const` AliasControllerApiFactory

▸ **AliasControllerApiFactory**(`configuration?`: [Configuration](../classes/_generated_configuration_.configuration.md), `fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *object*

*Defined in [src/generated/api.ts:3415](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L3415)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](../classes/_generated_configuration_.configuration.md) |
`fetch?` | [FetchAPI](../interfaces/_generated_api_.fetchapi.md) |
`basePath?` | string |

**Returns:** *object*

* **createAlias**(`createOwnedAliasOptions`: [CreateOwnedAliasOptions](../interfaces/_generated_api_.createownedaliasoptions.md), `options?`: any): *Promise‹Response›*

* **createAnonymousAlias**(`createAnonymousAliasOptions`: [CreateAnonymousAliasOptions](../interfaces/_generated_api_.createanonymousaliasoptions.md), `options?`: any): *Promise‹[Alias](../interfaces/_generated_api_.alias.md)›*

* **deleteAlias**(`aliasId`: string, `options?`: any): *Promise‹Response›*

* **getAlias**(`aliasId`: string, `options?`: any): *Promise‹[Alias](../interfaces/_generated_api_.alias.md)›*

* **getAliases**(`page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options?`: any): *Promise‹[PageAlias](../interfaces/_generated_api_.pagealias.md)›*

* **updateAlias**(`aliasId`: string, `createOwnedAliasOptions`: [CreateOwnedAliasOptions](../interfaces/_generated_api_.createownedaliasoptions.md), `options?`: any): *Promise‹Response›*

___

### `Const` AliasControllerApiFetchParamCreator

▸ **AliasControllerApiFetchParamCreator**(`configuration?`: [Configuration](../classes/_generated_configuration_.configuration.md)): *object*

*Defined in [src/generated/api.ts:2822](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L2822)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](../classes/_generated_configuration_.configuration.md) |

**Returns:** *object*

* **createAlias**(`createOwnedAliasOptions`: [CreateOwnedAliasOptions](../interfaces/_generated_api_.createownedaliasoptions.md), `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **createAnonymousAlias**(`createAnonymousAliasOptions`: [CreateAnonymousAliasOptions](../interfaces/_generated_api_.createanonymousaliasoptions.md), `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **deleteAlias**(`aliasId`: string, `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **getAlias**(`aliasId`: string, `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **getAliases**(`page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **updateAlias**(`aliasId`: string, `createOwnedAliasOptions`: [CreateOwnedAliasOptions](../interfaces/_generated_api_.createownedaliasoptions.md), `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

___

### `Const` AliasControllerApiFp

▸ **AliasControllerApiFp**(`configuration?`: [Configuration](../classes/_generated_configuration_.configuration.md)): *object*

*Defined in [src/generated/api.ts:3220](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L3220)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](../classes/_generated_configuration_.configuration.md) |

**Returns:** *object*

* **createAlias**(`createOwnedAliasOptions`: [CreateOwnedAliasOptions](../interfaces/_generated_api_.createownedaliasoptions.md), `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹Response›*

* **createAnonymousAlias**(`createAnonymousAliasOptions`: [CreateAnonymousAliasOptions](../interfaces/_generated_api_.createanonymousaliasoptions.md), `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹[Alias](../interfaces/_generated_api_.alias.md)›*

* **deleteAlias**(`aliasId`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹Response›*

* **getAlias**(`aliasId`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹[Alias](../interfaces/_generated_api_.alias.md)›*

* **getAliases**(`page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹[PageAlias](../interfaces/_generated_api_.pagealias.md)›*

* **updateAlias**(`aliasId`: string, `createOwnedAliasOptions`: [CreateOwnedAliasOptions](../interfaces/_generated_api_.createownedaliasoptions.md), `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹Response›*

___

### `Const` AttachmentControllerApiFactory

▸ **AttachmentControllerApiFactory**(`configuration?`: [Configuration](../classes/_generated_configuration_.configuration.md), `fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *object*

*Defined in [src/generated/api.ts:3900](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L3900)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](../classes/_generated_configuration_.configuration.md) |
`fetch?` | [FetchAPI](../interfaces/_generated_api_.fetchapi.md) |
`basePath?` | string |

**Returns:** *object*

* **uploadAttachment**(`uploadOptions`: [UploadAttachmentOptions](../interfaces/_generated_api_.uploadattachmentoptions.md), `options?`: any): *Promise‹string[]›*

* **uploadMultipartForm**(`file`: any, `contentType?`: string, `contentTypeHeader?`: string, `filename?`: string, `xFilename?`: string, `options?`: any): *Promise‹string[]›*

___

### `Const` AttachmentControllerApiFetchParamCreator

▸ **AttachmentControllerApiFetchParamCreator**(`configuration?`: [Configuration](../classes/_generated_configuration_.configuration.md)): *object*

*Defined in [src/generated/api.ts:3646](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L3646)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](../classes/_generated_configuration_.configuration.md) |

**Returns:** *object*

* **uploadAttachment**(`uploadOptions`: [UploadAttachmentOptions](../interfaces/_generated_api_.uploadattachmentoptions.md), `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **uploadMultipartForm**(`file`: any, `contentType?`: string, `contentTypeHeader?`: string, `filename?`: string, `xFilename?`: string, `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

___

### `Const` AttachmentControllerApiFp

▸ **AttachmentControllerApiFp**(`configuration?`: [Configuration](../classes/_generated_configuration_.configuration.md)): *object*

*Defined in [src/generated/api.ts:3814](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L3814)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](../classes/_generated_configuration_.configuration.md) |

**Returns:** *object*

* **uploadAttachment**(`uploadOptions`: [UploadAttachmentOptions](../interfaces/_generated_api_.uploadattachmentoptions.md), `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹Array‹string››*

* **uploadMultipartForm**(`file`: any, `contentType?`: string, `contentTypeHeader?`: string, `filename?`: string, `xFilename?`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹Array‹string››*

___

### `Const` BulkActionsControllerApiFactory

▸ **BulkActionsControllerApiFactory**(`configuration?`: [Configuration](../classes/_generated_configuration_.configuration.md), `fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *object*

*Defined in [src/generated/api.ts:4311](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L4311)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](../classes/_generated_configuration_.configuration.md) |
`fetch?` | [FetchAPI](../interfaces/_generated_api_.fetchapi.md) |
`basePath?` | string |

**Returns:** *object*

* **bulkCreateInboxes**(`count`: number, `options?`: any): *Promise‹[Inbox](../interfaces/_generated_api_.inbox.md)[]›*

* **bulkDeleteInboxes**(`ids`: Array‹string›, `options?`: any): *Promise‹Response›*

* **bulkSendEmails**(`bulkSendEmailOptions`: [BulkSendEmailOptions](../interfaces/_generated_api_.bulksendemailoptions.md), `options?`: any): *Promise‹Response›*

___

### `Const` BulkActionsControllerApiFetchParamCreator

▸ **BulkActionsControllerApiFetchParamCreator**(`configuration?`: [Configuration](../classes/_generated_configuration_.configuration.md)): *object*

*Defined in [src/generated/api.ts:4015](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L4015)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](../classes/_generated_configuration_.configuration.md) |

**Returns:** *object*

* **bulkCreateInboxes**(`count`: number, `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **bulkDeleteInboxes**(`ids`: Array‹string›, `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **bulkSendEmails**(`bulkSendEmailOptions`: [BulkSendEmailOptions](../interfaces/_generated_api_.bulksendemailoptions.md), `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

___

### `Const` BulkActionsControllerApiFp

▸ **BulkActionsControllerApiFp**(`configuration?`: [Configuration](../classes/_generated_configuration_.configuration.md)): *object*

*Defined in [src/generated/api.ts:4210](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L4210)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](../classes/_generated_configuration_.configuration.md) |

**Returns:** *object*

* **bulkCreateInboxes**(`count`: number, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹Array‹[Inbox](../interfaces/_generated_api_.inbox.md)››*

* **bulkDeleteInboxes**(`ids`: Array‹string›, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹Response›*

* **bulkSendEmails**(`bulkSendEmailOptions`: [BulkSendEmailOptions](../interfaces/_generated_api_.bulksendemailoptions.md), `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹Response›*

___

### `Const` CommonActionsControllerApiFactory

▸ **CommonActionsControllerApiFactory**(`configuration?`: [Configuration](../classes/_generated_configuration_.configuration.md), `fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *object*

*Defined in [src/generated/api.ts:4768](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L4768)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](../classes/_generated_configuration_.configuration.md) |
`fetch?` | [FetchAPI](../interfaces/_generated_api_.fetchapi.md) |
`basePath?` | string |

**Returns:** *object*

* **createNewEmailAddress**(`options?`: any): *Promise‹[Inbox](../interfaces/_generated_api_.inbox.md)›*

* **createNewEmailAddress1**(`options?`: any): *Promise‹[Inbox](../interfaces/_generated_api_.inbox.md)›*

* **emptyInbox**(`inboxId`: string, `options?`: any): *Promise‹Response›*

* **sendEmailSimple**(`emailOptions`: [SimpleSendEmailOptions](../interfaces/_generated_api_.simplesendemailoptions.md), `options?`: any): *Promise‹Response›*

___

### `Const` CommonActionsControllerApiFetchParamCreator

▸ **CommonActionsControllerApiFetchParamCreator**(`configuration?`: [Configuration](../classes/_generated_configuration_.configuration.md)): *object*

*Defined in [src/generated/api.ts:4422](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L4422)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](../classes/_generated_configuration_.configuration.md) |

**Returns:** *object*

* **createNewEmailAddress**(`options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **createNewEmailAddress1**(`options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **emptyInbox**(`inboxId`: string, `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **sendEmailSimple**(`emailOptions`: [SimpleSendEmailOptions](../interfaces/_generated_api_.simplesendemailoptions.md), `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

___

### `Const` CommonActionsControllerApiFp

▸ **CommonActionsControllerApiFp**(`configuration?`: [Configuration](../classes/_generated_configuration_.configuration.md)): *object*

*Defined in [src/generated/api.ts:4641](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L4641)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](../classes/_generated_configuration_.configuration.md) |

**Returns:** *object*

* **createNewEmailAddress**(`options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹[Inbox](../interfaces/_generated_api_.inbox.md)›*

* **createNewEmailAddress1**(`options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹[Inbox](../interfaces/_generated_api_.inbox.md)›*

* **emptyInbox**(`inboxId`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹Response›*

* **sendEmailSimple**(`emailOptions`: [SimpleSendEmailOptions](../interfaces/_generated_api_.simplesendemailoptions.md), `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹Response›*

___

### `Const` ContactControllerApiFactory

▸ **ContactControllerApiFactory**(`configuration?`: [Configuration](../classes/_generated_configuration_.configuration.md), `fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *object*

*Defined in [src/generated/api.ts:5359](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L5359)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](../classes/_generated_configuration_.configuration.md) |
`fetch?` | [FetchAPI](../interfaces/_generated_api_.fetchapi.md) |
`basePath?` | string |

**Returns:** *object*

* **createContact**(`createContactOptions`: [CreateContactOptions](../interfaces/_generated_api_.createcontactoptions.md), `options?`: any): *Promise‹[ContactDto](../interfaces/_generated_api_.contactdto.md)›*

* **deleteContact**(`contactId`: string, `options?`: any): *Promise‹Response›*

* **getAllContacts**(`page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options?`: any): *Promise‹[PageContactProjection](../interfaces/_generated_api_.pagecontactprojection.md)›*

* **getContact**(`contactId`: string, `options?`: any): *Promise‹[ContactDto](../interfaces/_generated_api_.contactdto.md)›*

* **getContacts**(`options?`: any): *Promise‹[ContactProjection](../interfaces/_generated_api_.contactprojection.md)[]›*

___

### `Const` ContactControllerApiFetchParamCreator

▸ **ContactControllerApiFetchParamCreator**(`configuration?`: [Configuration](../classes/_generated_configuration_.configuration.md)): *object*

*Defined in [src/generated/api.ts:4896](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L4896)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](../classes/_generated_configuration_.configuration.md) |

**Returns:** *object*

* **createContact**(`createContactOptions`: [CreateContactOptions](../interfaces/_generated_api_.createcontactoptions.md), `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **deleteContact**(`contactId`: string, `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **getAllContacts**(`page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **getContact**(`contactId`: string, `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **getContacts**(`options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

___

### `Const` ContactControllerApiFp

▸ **ContactControllerApiFp**(`configuration?`: [Configuration](../classes/_generated_configuration_.configuration.md)): *object*

*Defined in [src/generated/api.ts:5192](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L5192)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](../classes/_generated_configuration_.configuration.md) |

**Returns:** *object*

* **createContact**(`createContactOptions`: [CreateContactOptions](../interfaces/_generated_api_.createcontactoptions.md), `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹[ContactDto](../interfaces/_generated_api_.contactdto.md)›*

* **deleteContact**(`contactId`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹Response›*

* **getAllContacts**(`page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹[PageContactProjection](../interfaces/_generated_api_.pagecontactprojection.md)›*

* **getContact**(`contactId`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹[ContactDto](../interfaces/_generated_api_.contactdto.md)›*

* **getContacts**(`options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹Array‹[ContactProjection](../interfaces/_generated_api_.contactprojection.md)››*

___

### `Const` DomainControllerApiFactory

▸ **DomainControllerApiFactory**(`configuration?`: [Configuration](../classes/_generated_configuration_.configuration.md), `fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *object*

*Defined in [src/generated/api.ts:5901](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L5901)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](../classes/_generated_configuration_.configuration.md) |
`fetch?` | [FetchAPI](../interfaces/_generated_api_.fetchapi.md) |
`basePath?` | string |

**Returns:** *object*

* **createDomain**(`domainOptions`: [CreateDomainOptions](../interfaces/_generated_api_.createdomainoptions.md), `options?`: any): *Promise‹[DomainDto](../interfaces/_generated_api_.domaindto.md)›*

* **deleteDomain**(`id`: string, `options?`: any): *Promise‹Response›*

* **getDomain**(`id`: string, `options?`: any): *Promise‹[DomainDto](../interfaces/_generated_api_.domaindto.md)›*

* **getDomains**(`options?`: any): *Promise‹[DomainPreview](../interfaces/_generated_api_.domainpreview.md)[]›*

___

### `Const` DomainControllerApiFetchParamCreator

▸ **DomainControllerApiFetchParamCreator**(`configuration?`: [Configuration](../classes/_generated_configuration_.configuration.md)): *object*

*Defined in [src/generated/api.ts:5542](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L5542)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](../classes/_generated_configuration_.configuration.md) |

**Returns:** *object*

* **createDomain**(`domainOptions`: [CreateDomainOptions](../interfaces/_generated_api_.createdomainoptions.md), `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **deleteDomain**(`id`: string, `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **getDomain**(`id`: string, `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **getDomains**(`options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

___

### `Const` DomainControllerApiFp

▸ **DomainControllerApiFp**(`configuration?`: [Configuration](../classes/_generated_configuration_.configuration.md)): *object*

*Defined in [src/generated/api.ts:5771](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L5771)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](../classes/_generated_configuration_.configuration.md) |

**Returns:** *object*

* **createDomain**(`domainOptions`: [CreateDomainOptions](../interfaces/_generated_api_.createdomainoptions.md), `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹[DomainDto](../interfaces/_generated_api_.domaindto.md)›*

* **deleteDomain**(`id`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹Response›*

* **getDomain**(`id`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹[DomainDto](../interfaces/_generated_api_.domaindto.md)›*

* **getDomains**(`options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹Array‹[DomainPreview](../interfaces/_generated_api_.domainpreview.md)››*

___

### `Const` EmailControllerApiFactory

▸ **EmailControllerApiFactory**(`configuration?`: [Configuration](../classes/_generated_configuration_.configuration.md), `fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *object*

*Defined in [src/generated/api.ts:7264](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L7264)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](../classes/_generated_configuration_.configuration.md) |
`fetch?` | [FetchAPI](../interfaces/_generated_api_.fetchapi.md) |
`basePath?` | string |

**Returns:** *object*

* **deleteAllEmails**(`options?`: any): *Promise‹Response›*

* **deleteEmail**(`emailId`: string, `options?`: any): *Promise‹Response›*

* **downloadAttachment**(`attachmentId`: string, `emailId`: string, `apiKey?`: string, `options?`: any): *Promise‹string›*

* **forwardEmail**(`emailId`: string, `forwardEmailOptions`: [ForwardEmailOptions](../interfaces/_generated_api_.forwardemailoptions.md), `options?`: any): *Promise‹Response›*

* **getAttachmentMetaData**(`attachmentId`: string, `emailId`: string, `options?`: any): *Promise‹[AttachmentMetaData](../interfaces/_generated_api_.attachmentmetadata.md)›*

* **getAttachments**(`emailId`: string, `options?`: any): *Promise‹[AttachmentMetaData](../interfaces/_generated_api_.attachmentmetadata.md)[]›*

* **getEmail**(`emailId`: string, `decode?`: boolean, `options?`: any): *Promise‹[Email](../interfaces/_generated_api_.email.md)›*

* **getEmailHTML**(`emailId`: string, `decode?`: boolean, `options?`: any): *Promise‹string›*

* **getEmailsPaginated**(`inboxId?`: Array‹string›, `page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `unreadOnly?`: boolean, `options?`: any): *Promise‹[PageEmailProjection](../interfaces/_generated_api_.pageemailprojection.md)›*

* **getRawEmailContents**(`emailId`: string, `options?`: any): *Promise‹string›*

* **getRawEmailJson**(`emailId`: string, `options?`: any): *Promise‹[RawEmailJson](../interfaces/_generated_api_.rawemailjson.md)›*

* **getUnreadEmailCount**(`options?`: any): *Promise‹[UnreadCount](../interfaces/_generated_api_.unreadcount.md)›*

* **validateEmail**(`emailId`: string, `options?`: any): *Promise‹[ValidationDto](../interfaces/_generated_api_.validationdto.md)›*

___

### `Const` EmailControllerApiFetchParamCreator

▸ **EmailControllerApiFetchParamCreator**(`configuration?`: [Configuration](../classes/_generated_configuration_.configuration.md)): *object*

*Defined in [src/generated/api.ts:6032](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L6032)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](../classes/_generated_configuration_.configuration.md) |

**Returns:** *object*

* **deleteAllEmails**(`options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **deleteEmail**(`emailId`: string, `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **downloadAttachment**(`attachmentId`: string, `emailId`: string, `apiKey?`: string, `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **forwardEmail**(`emailId`: string, `forwardEmailOptions`: [ForwardEmailOptions](../interfaces/_generated_api_.forwardemailoptions.md), `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **getAttachmentMetaData**(`attachmentId`: string, `emailId`: string, `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **getAttachments**(`emailId`: string, `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **getEmail**(`emailId`: string, `decode?`: boolean, `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **getEmailHTML**(`emailId`: string, `decode?`: boolean, `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **getEmailsPaginated**(`inboxId?`: Array‹string›, `page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `unreadOnly?`: boolean, `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **getRawEmailContents**(`emailId`: string, `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **getRawEmailJson**(`emailId`: string, `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **getUnreadEmailCount**(`options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **validateEmail**(`emailId`: string, `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

___

### `Const` EmailControllerApiFp

▸ **EmailControllerApiFp**(`configuration?`: [Configuration](../classes/_generated_configuration_.configuration.md)): *object*

*Defined in [src/generated/api.ts:6833](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L6833)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](../classes/_generated_configuration_.configuration.md) |

**Returns:** *object*

* **deleteAllEmails**(`options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹Response›*

* **deleteEmail**(`emailId`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹Response›*

* **downloadAttachment**(`attachmentId`: string, `emailId`: string, `apiKey?`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹string›*

* **forwardEmail**(`emailId`: string, `forwardEmailOptions`: [ForwardEmailOptions](../interfaces/_generated_api_.forwardemailoptions.md), `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹Response›*

* **getAttachmentMetaData**(`attachmentId`: string, `emailId`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹[AttachmentMetaData](../interfaces/_generated_api_.attachmentmetadata.md)›*

* **getAttachments**(`emailId`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹Array‹[AttachmentMetaData](../interfaces/_generated_api_.attachmentmetadata.md)››*

* **getEmail**(`emailId`: string, `decode?`: boolean, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹[Email](../interfaces/_generated_api_.email.md)›*

* **getEmailHTML**(`emailId`: string, `decode?`: boolean, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹string›*

* **getEmailsPaginated**(`inboxId?`: Array‹string›, `page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `unreadOnly?`: boolean, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹[PageEmailProjection](../interfaces/_generated_api_.pageemailprojection.md)›*

* **getRawEmailContents**(`emailId`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹string›*

* **getRawEmailJson**(`emailId`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹[RawEmailJson](../interfaces/_generated_api_.rawemailjson.md)›*

* **getUnreadEmailCount**(`options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹[UnreadCount](../interfaces/_generated_api_.unreadcount.md)›*

* **validateEmail**(`emailId`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹[ValidationDto](../interfaces/_generated_api_.validationdto.md)›*

___

### `Const` FormControllerApiFactory

▸ **FormControllerApiFactory**(`configuration?`: [Configuration](../classes/_generated_configuration_.configuration.md), `fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *object*

*Defined in [src/generated/api.ts:7901](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L7901)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](../classes/_generated_configuration_.configuration.md) |
`fetch?` | [FetchAPI](../interfaces/_generated_api_.fetchapi.md) |
`basePath?` | string |

**Returns:** *object*

* **submitForm**(`emailAddress?`: string, `redirectTo?`: string, `spamCheck?`: string, `subject?`: string, `successMessage?`: string, `to?`: string, `toAlias?`: string, `otherParameters?`: string, `options?`: any): *Promise‹string›*

___

### `Const` FormControllerApiFetchParamCreator

▸ **FormControllerApiFetchParamCreator**(`configuration?`: [Configuration](../classes/_generated_configuration_.configuration.md)): *object*

*Defined in [src/generated/api.ts:7722](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L7722)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](../classes/_generated_configuration_.configuration.md) |

**Returns:** *object*

* **submitForm**(`emailAddress?`: string, `redirectTo?`: string, `spamCheck?`: string, `subject?`: string, `successMessage?`: string, `to?`: string, `toAlias?`: string, `otherParameters?`: string, `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

___

### `Const` FormControllerApiFp

▸ **FormControllerApiFp**(`configuration?`: [Configuration](../classes/_generated_configuration_.configuration.md)): *object*

*Defined in [src/generated/api.ts:7838](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L7838)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](../classes/_generated_configuration_.configuration.md) |

**Returns:** *object*

* **submitForm**(`emailAddress?`: string, `redirectTo?`: string, `spamCheck?`: string, `subject?`: string, `successMessage?`: string, `to?`: string, `toAlias?`: string, `otherParameters?`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹string›*

___

### `Const` GroupControllerApiFactory

▸ **GroupControllerApiFactory**(`configuration?`: [Configuration](../classes/_generated_configuration_.configuration.md), `fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *object*

*Defined in [src/generated/api.ts:8772](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L8772)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](../classes/_generated_configuration_.configuration.md) |
`fetch?` | [FetchAPI](../interfaces/_generated_api_.fetchapi.md) |
`basePath?` | string |

**Returns:** *object*

* **addContactsToGroup**(`groupId`: string, `updateGroupContactsOption`: [UpdateGroupContacts](../interfaces/_generated_api_.updategroupcontacts.md), `options?`: any): *Promise‹[GroupContactsDto](../interfaces/_generated_api_.groupcontactsdto.md)›*

* **createGroup**(`createGroupOptions`: [CreateGroupOptions](../interfaces/_generated_api_.creategroupoptions.md), `options?`: any): *Promise‹[GroupDto](../interfaces/_generated_api_.groupdto.md)›*

* **deleteGroup**(`groupId`: string, `options?`: any): *Promise‹Response›*

* **getAllGroups**(`page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options?`: any): *Promise‹[PageGroupProjection](../interfaces/_generated_api_.pagegroupprojection.md)›*

* **getGroup**(`groupId`: string, `options?`: any): *Promise‹[GroupDto](../interfaces/_generated_api_.groupdto.md)›*

* **getGroupWithContacts**(`groupId`: string, `options?`: any): *Promise‹[GroupContactsDto](../interfaces/_generated_api_.groupcontactsdto.md)›*

* **getGroups**(`options?`: any): *Promise‹[GroupProjection](../interfaces/_generated_api_.groupprojection.md)[]›*

* **removeContactsFromGroup**(`groupId`: string, `updateGroupContactsOption`: [UpdateGroupContacts](../interfaces/_generated_api_.updategroupcontacts.md), `options?`: any): *Promise‹[GroupContactsDto](../interfaces/_generated_api_.groupcontactsdto.md)›*

___

### `Const` GroupControllerApiFetchParamCreator

▸ **GroupControllerApiFetchParamCreator**(`configuration?`: [Configuration](../classes/_generated_configuration_.configuration.md)): *object*

*Defined in [src/generated/api.ts:7998](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L7998)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](../classes/_generated_configuration_.configuration.md) |

**Returns:** *object*

* **addContactsToGroup**(`groupId`: string, `updateGroupContactsOption`: [UpdateGroupContacts](../interfaces/_generated_api_.updategroupcontacts.md), `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **createGroup**(`createGroupOptions`: [CreateGroupOptions](../interfaces/_generated_api_.creategroupoptions.md), `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **deleteGroup**(`groupId`: string, `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **getAllGroups**(`page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **getGroup**(`groupId`: string, `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **getGroupWithContacts**(`groupId`: string, `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **getGroups**(`options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **removeContactsFromGroup**(`groupId`: string, `updateGroupContactsOption`: [UpdateGroupContacts](../interfaces/_generated_api_.updategroupcontacts.md), `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

___

### `Const` GroupControllerApiFp

▸ **GroupControllerApiFp**(`configuration?`: [Configuration](../classes/_generated_configuration_.configuration.md)): *object*

*Defined in [src/generated/api.ts:8507](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L8507)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](../classes/_generated_configuration_.configuration.md) |

**Returns:** *object*

* **addContactsToGroup**(`groupId`: string, `updateGroupContactsOption`: [UpdateGroupContacts](../interfaces/_generated_api_.updategroupcontacts.md), `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹[GroupContactsDto](../interfaces/_generated_api_.groupcontactsdto.md)›*

* **createGroup**(`createGroupOptions`: [CreateGroupOptions](../interfaces/_generated_api_.creategroupoptions.md), `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹[GroupDto](../interfaces/_generated_api_.groupdto.md)›*

* **deleteGroup**(`groupId`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹Response›*

* **getAllGroups**(`page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹[PageGroupProjection](../interfaces/_generated_api_.pagegroupprojection.md)›*

* **getGroup**(`groupId`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹[GroupDto](../interfaces/_generated_api_.groupdto.md)›*

* **getGroupWithContacts**(`groupId`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹[GroupContactsDto](../interfaces/_generated_api_.groupcontactsdto.md)›*

* **getGroups**(`options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹Array‹[GroupProjection](../interfaces/_generated_api_.groupprojection.md)››*

* **removeContactsFromGroup**(`groupId`: string, `updateGroupContactsOption`: [UpdateGroupContacts](../interfaces/_generated_api_.updategroupcontacts.md), `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹[GroupContactsDto](../interfaces/_generated_api_.groupcontactsdto.md)›*

___

### `Const` InboxControllerApiFactory

▸ **InboxControllerApiFactory**(`configuration?`: [Configuration](../classes/_generated_configuration_.configuration.md), `fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *object*

*Defined in [src/generated/api.ts:10409](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L10409)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](../classes/_generated_configuration_.configuration.md) |
`fetch?` | [FetchAPI](../interfaces/_generated_api_.fetchapi.md) |
`basePath?` | string |

**Returns:** *object*

* **createInbox**(`description?`: string, `emailAddress?`: string, `expiresAt?`: Date, `favourite?`: boolean, `name?`: string, `tags?`: Array‹string›, `options?`: any): *Promise‹[Inbox](../interfaces/_generated_api_.inbox.md)›*

* **deleteAllInboxes**(`options?`: any): *Promise‹Response›*

* **deleteInbox**(`inboxId`: string, `options?`: any): *Promise‹Response›*

* **getAllInboxes**(`favourite?`: boolean, `page?`: number, `search?`: string, `size?`: number, `sort?`: "ASC" | "DESC", `tag?`: string, `options?`: any): *Promise‹[PageInboxProjection](../interfaces/_generated_api_.pageinboxprojection.md)›*

* **getEmails**(`inboxId`: string, `limit?`: number, `minCount?`: number, `retryTimeout?`: number, `since?`: Date, `sort?`: "ASC" | "DESC", `options?`: any): *Promise‹[EmailPreview](../interfaces/_generated_api_.emailpreview.md)[]›*

* **getInbox**(`inboxId`: string, `options?`: any): *Promise‹[Inbox](../interfaces/_generated_api_.inbox.md)›*

* **getInboxEmailsPaginated**(`inboxId`: string, `page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options?`: any): *Promise‹[PageEmailPreview](../interfaces/_generated_api_.pageemailpreview.md)›*

* **getInboxSentEmails**(`inboxId`: string, `page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options?`: any): *Promise‹[PageSentEmailProjection](../interfaces/_generated_api_.pagesentemailprojection.md)›*

* **getInboxTags**(`options?`: any): *Promise‹string[]›*

* **getInboxes**(`options?`: any): *Promise‹[Inbox](../interfaces/_generated_api_.inbox.md)[]›*

* **sendEmail**(`inboxId`: string, `sendEmailOptions?`: [SendEmailOptions](_generated_api_.sendemailoptions.md), `options?`: any): *Promise‹Response›*

* **setInboxFavourited**(`inboxId`: string, `setInboxFavouritedOptions`: [SetInboxFavouritedOptions](../interfaces/_generated_api_.setinboxfavouritedoptions.md), `options?`: any): *Promise‹[Inbox](../interfaces/_generated_api_.inbox.md)›*

* **updateInbox**(`inboxId`: string, `updateInboxOptions`: [UpdateInboxOptions](../interfaces/_generated_api_.updateinboxoptions.md), `options?`: any): *Promise‹[Inbox](../interfaces/_generated_api_.inbox.md)›*

___

### `Const` InboxControllerApiFetchParamCreator

▸ **InboxControllerApiFetchParamCreator**(`configuration?`: [Configuration](../classes/_generated_configuration_.configuration.md)): *object*

*Defined in [src/generated/api.ts:9057](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L9057)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](../classes/_generated_configuration_.configuration.md) |

**Returns:** *object*

* **createInbox**(`description?`: string, `emailAddress?`: string, `expiresAt?`: Date, `favourite?`: boolean, `name?`: string, `tags?`: Array‹string›, `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **deleteAllInboxes**(`options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **deleteInbox**(`inboxId`: string, `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **getAllInboxes**(`favourite?`: boolean, `page?`: number, `search?`: string, `size?`: number, `sort?`: "ASC" | "DESC", `tag?`: string, `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **getEmails**(`inboxId`: string, `limit?`: number, `minCount?`: number, `retryTimeout?`: number, `since?`: Date, `sort?`: "ASC" | "DESC", `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **getInbox**(`inboxId`: string, `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **getInboxEmailsPaginated**(`inboxId`: string, `page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **getInboxSentEmails**(`inboxId`: string, `page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **getInboxTags**(`options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **getInboxes**(`options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **sendEmail**(`inboxId`: string, `sendEmailOptions?`: [SendEmailOptions](_generated_api_.sendemailoptions.md), `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **setInboxFavourited**(`inboxId`: string, `setInboxFavouritedOptions`: [SetInboxFavouritedOptions](../interfaces/_generated_api_.setinboxfavouritedoptions.md), `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **updateInbox**(`inboxId`: string, `updateInboxOptions`: [UpdateInboxOptions](../interfaces/_generated_api_.updateinboxoptions.md), `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

___

### `Const` InboxControllerApiFp

▸ **InboxControllerApiFp**(`configuration?`: [Configuration](../classes/_generated_configuration_.configuration.md)): *object*

*Defined in [src/generated/api.ts:9943](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L9943)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](../classes/_generated_configuration_.configuration.md) |

**Returns:** *object*

* **createInbox**(`description?`: string, `emailAddress?`: string, `expiresAt?`: Date, `favourite?`: boolean, `name?`: string, `tags?`: Array‹string›, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹[Inbox](../interfaces/_generated_api_.inbox.md)›*

* **deleteAllInboxes**(`options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹Response›*

* **deleteInbox**(`inboxId`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹Response›*

* **getAllInboxes**(`favourite?`: boolean, `page?`: number, `search?`: string, `size?`: number, `sort?`: "ASC" | "DESC", `tag?`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹[PageInboxProjection](../interfaces/_generated_api_.pageinboxprojection.md)›*

* **getEmails**(`inboxId`: string, `limit?`: number, `minCount?`: number, `retryTimeout?`: number, `since?`: Date, `sort?`: "ASC" | "DESC", `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹Array‹[EmailPreview](../interfaces/_generated_api_.emailpreview.md)››*

* **getInbox**(`inboxId`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹[Inbox](../interfaces/_generated_api_.inbox.md)›*

* **getInboxEmailsPaginated**(`inboxId`: string, `page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹[PageEmailPreview](../interfaces/_generated_api_.pageemailpreview.md)›*

* **getInboxSentEmails**(`inboxId`: string, `page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹[PageSentEmailProjection](../interfaces/_generated_api_.pagesentemailprojection.md)›*

* **getInboxTags**(`options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹Array‹string››*

* **getInboxes**(`options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹Array‹[Inbox](../interfaces/_generated_api_.inbox.md)››*

* **sendEmail**(`inboxId`: string, `sendEmailOptions?`: [SendEmailOptions](_generated_api_.sendemailoptions.md), `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹Response›*

* **setInboxFavourited**(`inboxId`: string, `setInboxFavouritedOptions`: [SetInboxFavouritedOptions](../interfaces/_generated_api_.setinboxfavouritedoptions.md), `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹[Inbox](../interfaces/_generated_api_.inbox.md)›*

* **updateInbox**(`inboxId`: string, `updateInboxOptions`: [UpdateInboxOptions](../interfaces/_generated_api_.updateinboxoptions.md), `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹[Inbox](../interfaces/_generated_api_.inbox.md)›*

___

### `Const` MailServerControllerApiFactory

▸ **MailServerControllerApiFactory**(`configuration?`: [Configuration](../classes/_generated_configuration_.configuration.md), `fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *object*

*Defined in [src/generated/api.ts:11188](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L11188)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](../classes/_generated_configuration_.configuration.md) |
`fetch?` | [FetchAPI](../interfaces/_generated_api_.fetchapi.md) |
`basePath?` | string |

**Returns:** *object*

* **describeDomain**(`describeOptions`: [DescribeDomainOptions](../interfaces/_generated_api_.describedomainoptions.md), `options?`: any): *Promise‹Response›*

* **verifyEmailAddress**(`verifyOptions`: [VerifyEmailAddressOptions](../interfaces/_generated_api_.verifyemailaddressoptions.md), `options?`: any): *Promise‹Response›*

___

### `Const` MailServerControllerApiFetchParamCreator

▸ **MailServerControllerApiFetchParamCreator**(`configuration?`: [Configuration](../classes/_generated_configuration_.configuration.md)): *object*

*Defined in [src/generated/api.ts:10978](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L10978)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](../classes/_generated_configuration_.configuration.md) |

**Returns:** *object*

* **describeDomain**(`describeOptions`: [DescribeDomainOptions](../interfaces/_generated_api_.describedomainoptions.md), `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **verifyEmailAddress**(`verifyOptions`: [VerifyEmailAddressOptions](../interfaces/_generated_api_.verifyemailaddressoptions.md), `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

___

### `Const` MailServerControllerApiFp

▸ **MailServerControllerApiFp**(`configuration?`: [Configuration](../classes/_generated_configuration_.configuration.md)): *object*

*Defined in [src/generated/api.ts:11117](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L11117)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](../classes/_generated_configuration_.configuration.md) |

**Returns:** *object*

* **describeDomain**(`describeOptions`: [DescribeDomainOptions](../interfaces/_generated_api_.describedomainoptions.md), `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹Response›*

* **verifyEmailAddress**(`verifyOptions`: [VerifyEmailAddressOptions](../interfaces/_generated_api_.verifyemailaddressoptions.md), `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹Response›*

___

### `Const` SentEmailsControllerApiFactory

▸ **SentEmailsControllerApiFactory**(`configuration?`: [Configuration](../classes/_generated_configuration_.configuration.md), `fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *object*

*Defined in [src/generated/api.ts:11490](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L11490)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](../classes/_generated_configuration_.configuration.md) |
`fetch?` | [FetchAPI](../interfaces/_generated_api_.fetchapi.md) |
`basePath?` | string |

**Returns:** *object*

* **getSentEmail**(`id`: string, `options?`: any): *Promise‹[SentEmail](../interfaces/_generated_api_.sentemail.md)›*

* **getSentEmails**(`inboxId?`: string, `page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options?`: any): *Promise‹[PageSentEmailProjection](../interfaces/_generated_api_.pagesentemailprojection.md)›*

___

### `Const` SentEmailsControllerApiFetchParamCreator

▸ **SentEmailsControllerApiFetchParamCreator**(`configuration?`: [Configuration](../classes/_generated_configuration_.configuration.md)): *object*

*Defined in [src/generated/api.ts:11274](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L11274)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](../classes/_generated_configuration_.configuration.md) |

**Returns:** *object*

* **getSentEmail**(`id`: string, `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **getSentEmails**(`inboxId?`: string, `page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

___

### `Const` SentEmailsControllerApiFp

▸ **SentEmailsControllerApiFp**(`configuration?`: [Configuration](../classes/_generated_configuration_.configuration.md)): *object*

*Defined in [src/generated/api.ts:11410](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L11410)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](../classes/_generated_configuration_.configuration.md) |

**Returns:** *object*

* **getSentEmail**(`id`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹[SentEmail](../interfaces/_generated_api_.sentemail.md)›*

* **getSentEmails**(`inboxId?`: string, `page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹[PageSentEmailProjection](../interfaces/_generated_api_.pagesentemailprojection.md)›*

___

### `Const` TemplateControllerApiFactory

▸ **TemplateControllerApiFactory**(`configuration?`: [Configuration](../classes/_generated_configuration_.configuration.md), `fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *object*

*Defined in [src/generated/api.ts:12054](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L12054)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](../classes/_generated_configuration_.configuration.md) |
`fetch?` | [FetchAPI](../interfaces/_generated_api_.fetchapi.md) |
`basePath?` | string |

**Returns:** *object*

* **createTemplate**(`createTemplateOptions`: [CreateTemplateOptions](../interfaces/_generated_api_.createtemplateoptions.md), `options?`: any): *Promise‹[TemplateDto](../interfaces/_generated_api_.templatedto.md)›*

* **deleteTemplate**(`templateId`: string, `options?`: any): *Promise‹Response›*

* **getAllTemplates**(`page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options?`: any): *Promise‹[PageTemplateProjection](../interfaces/_generated_api_.pagetemplateprojection.md)›*

* **getTemplate**(`templateId`: string, `options?`: any): *Promise‹[TemplateDto](../interfaces/_generated_api_.templatedto.md)›*

* **getTemplates**(`options?`: any): *Promise‹[TemplateProjection](../interfaces/_generated_api_.templateprojection.md)[]›*

___

### `Const` TemplateControllerApiFetchParamCreator

▸ **TemplateControllerApiFetchParamCreator**(`configuration?`: [Configuration](../classes/_generated_configuration_.configuration.md)): *object*

*Defined in [src/generated/api.ts:11591](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L11591)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](../classes/_generated_configuration_.configuration.md) |

**Returns:** *object*

* **createTemplate**(`createTemplateOptions`: [CreateTemplateOptions](../interfaces/_generated_api_.createtemplateoptions.md), `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **deleteTemplate**(`templateId`: string, `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **getAllTemplates**(`page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **getTemplate**(`templateId`: string, `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **getTemplates**(`options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

___

### `Const` TemplateControllerApiFp

▸ **TemplateControllerApiFp**(`configuration?`: [Configuration](../classes/_generated_configuration_.configuration.md)): *object*

*Defined in [src/generated/api.ts:11887](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L11887)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](../classes/_generated_configuration_.configuration.md) |

**Returns:** *object*

* **createTemplate**(`createTemplateOptions`: [CreateTemplateOptions](../interfaces/_generated_api_.createtemplateoptions.md), `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹[TemplateDto](../interfaces/_generated_api_.templatedto.md)›*

* **deleteTemplate**(`templateId`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹Response›*

* **getAllTemplates**(`page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹[PageTemplateProjection](../interfaces/_generated_api_.pagetemplateprojection.md)›*

* **getTemplate**(`templateId`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹[TemplateDto](../interfaces/_generated_api_.templatedto.md)›*

* **getTemplates**(`options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹Array‹[TemplateProjection](../interfaces/_generated_api_.templateprojection.md)››*

___

### `Const` WaitForControllerApiFactory

▸ **WaitForControllerApiFactory**(`configuration?`: [Configuration](../classes/_generated_configuration_.configuration.md), `fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *object*

*Defined in [src/generated/api.ts:12795](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L12795)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](../classes/_generated_configuration_.configuration.md) |
`fetch?` | [FetchAPI](../interfaces/_generated_api_.fetchapi.md) |
`basePath?` | string |

**Returns:** *object*

* **waitFor**(`waitForConditions?`: [WaitForConditions](_generated_api_.waitforconditions.md), `options?`: any): *Promise‹[EmailPreview](../interfaces/_generated_api_.emailpreview.md)[]›*

* **waitForEmailCount**(`count?`: number, `inboxId?`: string, `timeout?`: number, `unreadOnly?`: boolean, `options?`: any): *Promise‹[EmailPreview](../interfaces/_generated_api_.emailpreview.md)[]›*

* **waitForLatestEmail**(`inboxId?`: string, `timeout?`: number, `unreadOnly?`: boolean, `options?`: any): *Promise‹[Email](../interfaces/_generated_api_.email.md)›*

* **waitForMatchingEmail**(`matchOptions`: [MatchOptions](../interfaces/_generated_api_.matchoptions.md), `count?`: number, `inboxId?`: string, `timeout?`: number, `unreadOnly?`: boolean, `options?`: any): *Promise‹[EmailPreview](../interfaces/_generated_api_.emailpreview.md)[]›*

* **waitForNthEmail**(`inboxId?`: string, `index?`: number, `timeout?`: number, `unreadOnly?`: boolean, `options?`: any): *Promise‹[Email](../interfaces/_generated_api_.email.md)›*

___

### `Const` WaitForControllerApiFetchParamCreator

▸ **WaitForControllerApiFetchParamCreator**(`configuration?`: [Configuration](../classes/_generated_configuration_.configuration.md)): *object*

*Defined in [src/generated/api.ts:12236](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L12236)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](../classes/_generated_configuration_.configuration.md) |

**Returns:** *object*

* **waitFor**(`waitForConditions?`: [WaitForConditions](_generated_api_.waitforconditions.md), `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **waitForEmailCount**(`count?`: number, `inboxId?`: string, `timeout?`: number, `unreadOnly?`: boolean, `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **waitForLatestEmail**(`inboxId?`: string, `timeout?`: number, `unreadOnly?`: boolean, `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **waitForMatchingEmail**(`matchOptions`: [MatchOptions](../interfaces/_generated_api_.matchoptions.md), `count?`: number, `inboxId?`: string, `timeout?`: number, `unreadOnly?`: boolean, `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **waitForNthEmail**(`inboxId?`: string, `index?`: number, `timeout?`: number, `unreadOnly?`: boolean, `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

___

### `Const` WaitForControllerApiFp

▸ **WaitForControllerApiFp**(`configuration?`: [Configuration](../classes/_generated_configuration_.configuration.md)): *object*

*Defined in [src/generated/api.ts:12596](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L12596)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](../classes/_generated_configuration_.configuration.md) |

**Returns:** *object*

* **waitFor**(`waitForConditions?`: [WaitForConditions](_generated_api_.waitforconditions.md), `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹Array‹[EmailPreview](../interfaces/_generated_api_.emailpreview.md)››*

* **waitForEmailCount**(`count?`: number, `inboxId?`: string, `timeout?`: number, `unreadOnly?`: boolean, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹Array‹[EmailPreview](../interfaces/_generated_api_.emailpreview.md)››*

* **waitForLatestEmail**(`inboxId?`: string, `timeout?`: number, `unreadOnly?`: boolean, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹[Email](../interfaces/_generated_api_.email.md)›*

* **waitForMatchingEmail**(`matchOptions`: [MatchOptions](../interfaces/_generated_api_.matchoptions.md), `count?`: number, `inboxId?`: string, `timeout?`: number, `unreadOnly?`: boolean, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹Array‹[EmailPreview](../interfaces/_generated_api_.emailpreview.md)››*

* **waitForNthEmail**(`inboxId?`: string, `index?`: number, `timeout?`: number, `unreadOnly?`: boolean, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹[Email](../interfaces/_generated_api_.email.md)›*

___

### `Const` WebhookControllerApiFactory

▸ **WebhookControllerApiFactory**(`configuration?`: [Configuration](../classes/_generated_configuration_.configuration.md), `fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *object*

*Defined in [src/generated/api.ts:13637](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L13637)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](../classes/_generated_configuration_.configuration.md) |
`fetch?` | [FetchAPI](../interfaces/_generated_api_.fetchapi.md) |
`basePath?` | string |

**Returns:** *object*

* **createWebhook**(`inboxId`: string, `webhookOptions`: [CreateWebhookOptions](../interfaces/_generated_api_.createwebhookoptions.md), `options?`: any): *Promise‹[WebhookDto](_generated_api_.webhookdto.md)›*

* **deleteWebhook**(`inboxId`: string, `webhookId`: string, `options?`: any): *Promise‹Response›*

* **getAllWebhooks**(`page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options?`: any): *Promise‹[PageWebhookProjection](../interfaces/_generated_api_.pagewebhookprojection.md)›*

* **getWebhook**(`webhookId`: string, `options?`: any): *Promise‹[WebhookDto](_generated_api_.webhookdto.md)›*

* **getWebhooks**(`inboxId`: string, `options?`: any): *Promise‹[WebhookDto](_generated_api_.webhookdto.md)[]›*

* **sendTestData**(`webhookId`: string, `options?`: any): *Promise‹[WebhookTestResult](../interfaces/_generated_api_.webhooktestresult.md)›*

___

### `Const` WebhookControllerApiFetchParamCreator

▸ **WebhookControllerApiFetchParamCreator**(`configuration?`: [Configuration](../classes/_generated_configuration_.configuration.md)): *object*

*Defined in [src/generated/api.ts:13052](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L13052)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](../classes/_generated_configuration_.configuration.md) |

**Returns:** *object*

* **createWebhook**(`inboxId`: string, `webhookOptions`: [CreateWebhookOptions](../interfaces/_generated_api_.createwebhookoptions.md), `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **deleteWebhook**(`inboxId`: string, `webhookId`: string, `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **getAllWebhooks**(`page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **getWebhook**(`webhookId`: string, `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **getWebhooks**(`inboxId`: string, `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

* **sendTestData**(`webhookId`: string, `options`: any): *[FetchArgs](../interfaces/_generated_api_.fetchargs.md)*

___

### `Const` WebhookControllerApiFp

▸ **WebhookControllerApiFp**(`configuration?`: [Configuration](../classes/_generated_configuration_.configuration.md)): *object*

*Defined in [src/generated/api.ts:13437](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L13437)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration?` | [Configuration](../classes/_generated_configuration_.configuration.md) |

**Returns:** *object*

* **createWebhook**(`inboxId`: string, `webhookOptions`: [CreateWebhookOptions](../interfaces/_generated_api_.createwebhookoptions.md), `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹[WebhookDto](_generated_api_.webhookdto.md)›*

* **deleteWebhook**(`inboxId`: string, `webhookId`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹Response›*

* **getAllWebhooks**(`page?`: number, `size?`: number, `sort?`: "ASC" | "DESC", `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹[PageWebhookProjection](../interfaces/_generated_api_.pagewebhookprojection.md)›*

* **getWebhook**(`webhookId`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹[WebhookDto](_generated_api_.webhookdto.md)›*

* **getWebhooks**(`inboxId`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹Array‹[WebhookDto](_generated_api_.webhookdto.md)››*

* **sendTestData**(`webhookId`: string, `options?`: any): *function*

  * (`fetch?`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md), `basePath?`: string): *Promise‹[WebhookTestResult](../interfaces/_generated_api_.webhooktestresult.md)›*

## Object literals

### `Const` COLLECTION_FORMATS

### ▪ **COLLECTION_FORMATS**: *object*

*Defined in [src/generated/api.ts:25](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L25)*

###  csv

• **csv**: *string* = ","

*Defined in [src/generated/api.ts:26](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L26)*

###  pipes

• **pipes**: *string* = "|"

*Defined in [src/generated/api.ts:29](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L29)*

###  ssv

• **ssv**: *string* = " "

*Defined in [src/generated/api.ts:27](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L27)*

###  tsv

• **tsv**: *string* = "	"

*Defined in [src/generated/api.ts:28](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L28)*
