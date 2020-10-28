# Class: BaseAPI

## Hierarchy

* **BaseAPI**

  ↳ [AliasControllerApi](_generated_api_.aliascontrollerapi.md)

  ↳ [AttachmentControllerApi](_generated_api_.attachmentcontrollerapi.md)

  ↳ [BulkActionsControllerApi](_generated_api_.bulkactionscontrollerapi.md)

  ↳ [CommonActionsControllerApi](_generated_api_.commonactionscontrollerapi.md)

  ↳ [ContactControllerApi](_generated_api_.contactcontrollerapi.md)

  ↳ [DomainControllerApi](_generated_api_.domaincontrollerapi.md)

  ↳ [EmailControllerApi](_generated_api_.emailcontrollerapi.md)

  ↳ [FormControllerApi](_generated_api_.formcontrollerapi.md)

  ↳ [GroupControllerApi](_generated_api_.groupcontrollerapi.md)

  ↳ [InboxControllerApi](_generated_api_.inboxcontrollerapi.md)

  ↳ [MailServerControllerApi](_generated_api_.mailservercontrollerapi.md)

  ↳ [SentEmailsControllerApi](_generated_api_.sentemailscontrollerapi.md)

  ↳ [TemplateControllerApi](_generated_api_.templatecontrollerapi.md)

  ↳ [WaitForControllerApi](_generated_api_.waitforcontrollerapi.md)

  ↳ [WebhookControllerApi](_generated_api_.webhookcontrollerapi.md)

## Constructors

###  constructor

\+ **new BaseAPI**(`configuration?`: [Configuration](_generated_configuration_.configuration.md), `basePath`: string, `fetch`: [FetchAPI](../interfaces/_generated_api_.fetchapi.md)): *[BaseAPI](_generated_api_.baseapi.md)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L57)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](_generated_configuration_.configuration.md) | - |
`basePath` | string |  BASE_PATH |
`fetch` | [FetchAPI](../interfaces/_generated_api_.fetchapi.md) |  portableFetch |

**Returns:** *[BaseAPI](_generated_api_.baseapi.md)*

## Properties

### `Protected` basePath

• **basePath**: *string*

*Defined in [src/generated/api.ts:61](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L61)*

___

### `Protected` configuration

• **configuration**: *[Configuration](_generated_configuration_.configuration.md)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L57)*

___

### `Protected` fetch

• **fetch**: *[FetchAPI](../interfaces/_generated_api_.fetchapi.md)*

*Defined in [src/generated/api.ts:62](https://github.com/mailslurp/mailslurp-client/blob/a26884c/src/generated/api.ts#L62)*
