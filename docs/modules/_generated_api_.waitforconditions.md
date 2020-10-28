# Module: WaitForConditions

**`export`** 

**`namespace`** WaitForConditions

## Properties

### `Optional` count

• **count**? : *number*

*Defined in [src/generated/api.ts:2530](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L2530)*

Number of results that should match conditions. Either exactly or at least this amount based on the `countType`. If count condition is not met and the timeout has not been reached the `waitFor` method will retry the operation.

**`type`** {number}

**`memberof`** WaitForConditions

___

### `Optional` countType

• **countType**? : *[CountTypeEnum](../enums/_generated_api_.waitforconditions.counttypeenum.md)*

*Defined in [src/generated/api.ts:2536](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L2536)*

How should the found count be compared to the expected count.

**`type`** {string}

**`memberof`** WaitForConditions

___

### `Optional` inboxId

• **inboxId**? : *string*

*Defined in [src/generated/api.ts:2542](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L2542)*

ID of inbox to search within and apply conditions to. Essentially filtering the emails found to give a count.

**`type`** {string}

**`memberof`** WaitForConditions

___

### `Optional` matches

• **matches**? : *Array‹[MatchOption](_generated_api_.matchoption.md)›*

*Defined in [src/generated/api.ts:2548](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L2548)*

Conditions that should be matched for an email to qualify for results. Each condition will be applied in order to each email within an inbox to filter a result list of matching emails you are waiting for.

**`type`** {Array<MatchOption>}

**`memberof`** WaitForConditions

___

### `Optional` sortDirection

• **sortDirection**? : *[SortDirectionEnum](../enums/_generated_api_.waitforconditions.sortdirectionenum.md)*

*Defined in [src/generated/api.ts:2554](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L2554)*

Direction to sort matching emails by created time

**`type`** {string}

**`memberof`** WaitForConditions

___

### `Optional` timeout

• **timeout**? : *number*

*Defined in [src/generated/api.ts:2560](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L2560)*

Max time in milliseconds to retry the `waitFor` operation until conditions are met.

**`type`** {number}

**`memberof`** WaitForConditions

___

### `Optional` unreadOnly

• **unreadOnly**? : *boolean*

*Defined in [src/generated/api.ts:2566](https://github.com/mailslurp/mailslurp-client/blob/2f39d3c/src/generated/api.ts#L2566)*

Apply conditions only to **unread** emails. All emails begin with `read=false`. An email is marked `read=true` when an `EmailDto` representation of it has been returned to the user at least once. For example you have called `getEmail` or `waitForLatestEmail` etc., or you have viewed the email in the dashboard.

**`type`** {boolean}

**`memberof`** WaitForConditions
