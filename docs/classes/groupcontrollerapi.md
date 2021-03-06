**[MailSlurp JS](../README.md)**

> [Globals](../README.md) / GroupControllerApi

# Class: GroupControllerApi

GroupControllerApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **GroupControllerApi**

## Index

### Constructors

* [constructor](groupcontrollerapi.md#constructor)

### Properties

* [basePath](groupcontrollerapi.md#basepath)
* [configuration](groupcontrollerapi.md#configuration)
* [fetch](groupcontrollerapi.md#fetch)

### Methods

* [addContactsToGroup](groupcontrollerapi.md#addcontactstogroup)
* [createGroup](groupcontrollerapi.md#creategroup)
* [deleteGroup](groupcontrollerapi.md#deletegroup)
* [getAllGroups](groupcontrollerapi.md#getallgroups)
* [getGroup](groupcontrollerapi.md#getgroup)
* [getGroupWithContacts](groupcontrollerapi.md#getgroupwithcontacts)
* [getGroupWithContactsPaginated](groupcontrollerapi.md#getgroupwithcontactspaginated)
* [getGroups](groupcontrollerapi.md#getgroups)
* [removeContactsFromGroup](groupcontrollerapi.md#removecontactsfromgroup)

## Constructors

### constructor

\+ **new GroupControllerApi**(`configuration?`: [Configuration](configuration.md), `basePath?`: string, `fetch?`: [FetchAPI](../interfaces/fetchapi.md)): [GroupControllerApi](groupcontrollerapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/c6aef6d/src/generated/api.ts#L57)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string | BASE\_PATH |
`fetch` | [FetchAPI](../interfaces/fetchapi.md) | portableFetch |

**Returns:** [GroupControllerApi](groupcontrollerapi.md)

## Properties

### basePath

• `Protected` **basePath**: string

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#basepath)*

*Defined in [src/generated/api.ts:61](https://github.com/mailslurp/mailslurp-client/blob/c6aef6d/src/generated/api.ts#L61)*

___

### configuration

• `Protected` **configuration**: [Configuration](configuration.md)

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#configuration)*

*Defined in [src/generated/api.ts:57](https://github.com/mailslurp/mailslurp-client/blob/c6aef6d/src/generated/api.ts#L57)*

___

### fetch

• `Protected` **fetch**: [FetchAPI](../interfaces/fetchapi.md)

*Inherited from [BaseAPI](baseapi.md).[fetch](baseapi.md#fetch)*

*Defined in [src/generated/api.ts:62](https://github.com/mailslurp/mailslurp-client/blob/c6aef6d/src/generated/api.ts#L62)*

## Methods

### addContactsToGroup

▸ **addContactsToGroup**(`groupId`: string, `updateGroupContactsOption`: [UpdateGroupContacts](../interfaces/updategroupcontacts.md), `options?`: any): Promise\<[GroupContactsDto](../interfaces/groupcontactsdto.md)>

*Defined in [src/generated/api.ts:9707](https://github.com/mailslurp/mailslurp-client/blob/c6aef6d/src/generated/api.ts#L9707)*

**`summary`** Add contacts to a group

**`throws`** {RequiredError}

**`memberof`** GroupControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`groupId` | string | groupId |
`updateGroupContactsOption` | [UpdateGroupContacts](../interfaces/updategroupcontacts.md) | updateGroupContactsOption |
`options?` | any | - |

**Returns:** Promise\<[GroupContactsDto](../interfaces/groupcontactsdto.md)>

___

### createGroup

▸ **createGroup**(`createGroupOptions`: [CreateGroupOptions](../interfaces/creategroupoptions.md), `options?`: any): Promise\<[GroupDto](../interfaces/groupdto.md)>

*Defined in [src/generated/api.ts:9727](https://github.com/mailslurp/mailslurp-client/blob/c6aef6d/src/generated/api.ts#L9727)*

**`summary`** Create a group

**`throws`** {RequiredError}

**`memberof`** GroupControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`createGroupOptions` | [CreateGroupOptions](../interfaces/creategroupoptions.md) | createGroupOptions |
`options?` | any | - |

**Returns:** Promise\<[GroupDto](../interfaces/groupdto.md)>

___

### deleteGroup

▸ **deleteGroup**(`groupId`: string, `options?`: any): Promise\<Response>

*Defined in [src/generated/api.ts:9742](https://github.com/mailslurp/mailslurp-client/blob/c6aef6d/src/generated/api.ts#L9742)*

**`summary`** Delete group

**`throws`** {RequiredError}

**`memberof`** GroupControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`groupId` | string | groupId |
`options?` | any | - |

**Returns:** Promise\<Response>

___

### getAllGroups

▸ **getAllGroups**(`page?`: number, `size?`: number, `sort?`: \"ASC\" \| \"DESC\", `options?`: any): Promise\<[PageGroupProjection](../interfaces/pagegroupprojection.md)>

*Defined in [src/generated/api.ts:9759](https://github.com/mailslurp/mailslurp-client/blob/c6aef6d/src/generated/api.ts#L9759)*

**`summary`** Get all Contact Groups in paginated format

**`throws`** {RequiredError}

**`memberof`** GroupControllerApi

#### Parameters:

Name | Type |
------ | ------ |
`page?` | number |
`size?` | number |
`sort?` | \"ASC\" \| \"DESC\" |
`options?` | any |

**Returns:** Promise\<[PageGroupProjection](../interfaces/pagegroupprojection.md)>

___

### getGroup

▸ **getGroup**(`groupId`: string, `options?`: any): Promise\<[GroupDto](../interfaces/groupdto.md)>

*Defined in [src/generated/api.ts:9781](https://github.com/mailslurp/mailslurp-client/blob/c6aef6d/src/generated/api.ts#L9781)*

**`summary`** Get group

**`throws`** {RequiredError}

**`memberof`** GroupControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`groupId` | string | groupId |
`options?` | any | - |

**Returns:** Promise\<[GroupDto](../interfaces/groupdto.md)>

___

### getGroupWithContacts

▸ **getGroupWithContacts**(`groupId`: string, `options?`: any): Promise\<[GroupContactsDto](../interfaces/groupcontactsdto.md)>

*Defined in [src/generated/api.ts:9796](https://github.com/mailslurp/mailslurp-client/blob/c6aef6d/src/generated/api.ts#L9796)*

**`summary`** Get group and contacts belonging to it

**`throws`** {RequiredError}

**`memberof`** GroupControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`groupId` | string | groupId |
`options?` | any | - |

**Returns:** Promise\<[GroupContactsDto](../interfaces/groupcontactsdto.md)>

___

### getGroupWithContactsPaginated

▸ **getGroupWithContactsPaginated**(`groupId`: string, `page?`: number, `size?`: number, `sort?`: \"ASC\" \| \"DESC\", `options?`: any): Promise\<[PageContactProjection](../interfaces/pagecontactprojection.md)>

*Defined in [src/generated/api.ts:9814](https://github.com/mailslurp/mailslurp-client/blob/c6aef6d/src/generated/api.ts#L9814)*

**`summary`** Get group and paginated contacts belonging to it

**`throws`** {RequiredError}

**`memberof`** GroupControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`groupId` | string | groupId |
`page?` | number | - |
`size?` | number | - |
`sort?` | \"ASC\" \| \"DESC\" | - |
`options?` | any | - |

**Returns:** Promise\<[PageContactProjection](../interfaces/pagecontactprojection.md)>

___

### getGroups

▸ **getGroups**(`options?`: any): Promise\<[GroupProjection](../interfaces/groupprojection.md)[]>

*Defined in [src/generated/api.ts:9836](https://github.com/mailslurp/mailslurp-client/blob/c6aef6d/src/generated/api.ts#L9836)*

**`summary`** Get all groups

**`throws`** {RequiredError}

**`memberof`** GroupControllerApi

#### Parameters:

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** Promise\<[GroupProjection](../interfaces/groupprojection.md)[]>

___

### removeContactsFromGroup

▸ **removeContactsFromGroup**(`groupId`: string, `updateGroupContactsOption`: [UpdateGroupContacts](../interfaces/updategroupcontacts.md), `options?`: any): Promise\<[GroupContactsDto](../interfaces/groupcontactsdto.md)>

*Defined in [src/generated/api.ts:9852](https://github.com/mailslurp/mailslurp-client/blob/c6aef6d/src/generated/api.ts#L9852)*

**`summary`** Remove contacts from a group

**`throws`** {RequiredError}

**`memberof`** GroupControllerApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`groupId` | string | groupId |
`updateGroupContactsOption` | [UpdateGroupContacts](../interfaces/updategroupcontacts.md) | updateGroupContactsOption |
`options?` | any | - |

**Returns:** Promise\<[GroupContactsDto](../interfaces/groupcontactsdto.md)>
