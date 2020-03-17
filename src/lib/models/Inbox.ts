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
 * Representation of an inbox with an email address. Emails can be sent to or from this email address.
 * @export
 * @interface Inbox
 */
export interface Inbox {
    /**
     * When was the inbox created
     * @type {Date}
     * @memberof Inbox
     */
    createdAt?: Date;
    /**
     * Optional description of an inbox for labelling purposes
     * @type {string}
     * @memberof Inbox
     */
    description?: string;
    /**
     * The inbox\'s email address. Send an email to this address and the inbox will receive and store it for you. To retrieve the email use the Inbox and Email Controller endpoints.
     * @type {string}
     * @memberof Inbox
     */
    emailAddress?: string;
    /**
     * When, if ever, will the inbox expire and be deleted. If null then this inbox is permanent and the emails in it won\'t be deleted.
     * @type {Date}
     * @memberof Inbox
     */
    expiresAt?: Date;
    /**
     * Is the inbox favourited
     * @type {boolean}
     * @memberof Inbox
     */
    favourite?: boolean;
    /**
     * ID of the inbox
     * @type {string}
     * @memberof Inbox
     */
    id?: string;
    /**
     * Optional name of the inbox. Displayed in the dashboard for easier search
     * @type {string}
     * @memberof Inbox
     */
    name?: string;
    /**
     * Tags that inbox has been tagged with
     * @type {Array<string>}
     * @memberof Inbox
     */
    tags?: Array<string>;
    /**
     * ID of user that inbox belongs to
     * @type {string}
     * @memberof Inbox
     */
    userId?: string;
}

export function InboxFromJSON(json: any): Inbox {
    return InboxFromJSONTyped(json, false);
}

export function InboxFromJSONTyped(
    json: any,
    ignoreDiscriminator: boolean
): Inbox {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        createdAt: !exists(json, 'createdAt')
            ? undefined
            : new Date(json['createdAt']),
        description: !exists(json, 'description')
            ? undefined
            : json['description'],
        emailAddress: !exists(json, 'emailAddress')
            ? undefined
            : json['emailAddress'],
        expiresAt: !exists(json, 'expiresAt')
            ? undefined
            : new Date(json['expiresAt']),
        favourite: !exists(json, 'favourite') ? undefined : json['favourite'],
        id: !exists(json, 'id') ? undefined : json['id'],
        name: !exists(json, 'name') ? undefined : json['name'],
        tags: !exists(json, 'tags') ? undefined : json['tags'],
        userId: !exists(json, 'userId') ? undefined : json['userId'],
    };
}

export function InboxToJSON(value?: Inbox | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        createdAt:
            value.createdAt === undefined
                ? undefined
                : value.createdAt.toISOString(),
        description: value.description,
        emailAddress: value.emailAddress,
        expiresAt:
            value.expiresAt === undefined
                ? undefined
                : value.expiresAt.toISOString(),
        favourite: value.favourite,
        id: value.id,
        name: value.name,
        tags: value.tags,
        userId: value.userId,
    };
}
