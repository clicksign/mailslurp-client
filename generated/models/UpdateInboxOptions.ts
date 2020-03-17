/* tslint:disable */
/* eslint-disable */
/**
 * MailSlurp API
 * MailSlurp is an API for sending and receiving emails from dynamically allocated email addresses. It\'s designed for developers and QA teams to test applications, process inbound emails, send templated notifications, attachments, and more.   ## Resources - [Homepage](https://www.mailslurp.com) - Get an [API KEY](https://app.mailslurp.com/sign-up/) - Generated [SDK Clients](https://www.mailslurp.com/docs/) - [Examples](https://github.com/mailslurp/examples) repository 
 *
 * The version of the OpenAPI document: 67c9a1eda264be4cfe0bb2c76151f0aadf0862bc
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Options for updating inbox properties
 * @export
 * @interface UpdateInboxOptions
 */
export interface UpdateInboxOptions {
    /**
     * Optional description of an inbox for labelling purposes
     * @type {string}
     * @memberof UpdateInboxOptions
     */
    description?: string;
    /**
     * When, if ever, will the inbox expire and be deleted. If null then this inbox is permanent and the emails in it won\'t be deleted.
     * @type {Date}
     * @memberof UpdateInboxOptions
     */
    expiresAt?: Date;
    /**
     * Is the inbox favourited
     * @type {boolean}
     * @memberof UpdateInboxOptions
     */
    favourite?: boolean;
    /**
     * Optional name of the inbox. Displayed in the dashboard for easier search
     * @type {string}
     * @memberof UpdateInboxOptions
     */
    name?: string;
    /**
     * Tags that inbox has been tagged with
     * @type {Array<string>}
     * @memberof UpdateInboxOptions
     */
    tags?: Array<string>;
}

export function UpdateInboxOptionsFromJSON(json: any): UpdateInboxOptions {
    return UpdateInboxOptionsFromJSONTyped(json, false);
}

export function UpdateInboxOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateInboxOptions {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': !exists(json, 'description') ? undefined : json['description'],
        'expiresAt': !exists(json, 'expiresAt') ? undefined : (new Date(json['expiresAt'])),
        'favourite': !exists(json, 'favourite') ? undefined : json['favourite'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
    };
}

export function UpdateInboxOptionsToJSON(value?: UpdateInboxOptions | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'description': value.description,
        'expiresAt': value.expiresAt === undefined ? undefined : (value.expiresAt.toISOString()),
        'favourite': value.favourite,
        'name': value.name,
        'tags': value.tags,
    };
}


