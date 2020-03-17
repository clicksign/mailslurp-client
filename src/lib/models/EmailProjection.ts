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
 *
 * @export
 * @interface EmailProjection
 */
export interface EmailProjection {
    /**
     *
     * @type {Array<string>}
     * @memberof EmailProjection
     */
    attachments?: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof EmailProjection
     */
    bcc?: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof EmailProjection
     */
    cc?: Array<string>;
    /**
     *
     * @type {Date}
     * @memberof EmailProjection
     */
    createdAt: Date;
    /**
     *
     * @type {string}
     * @memberof EmailProjection
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof EmailProjection
     */
    inboxId: string;
    /**
     *
     * @type {boolean}
     * @memberof EmailProjection
     */
    read?: boolean;
    /**
     *
     * @type {string}
     * @memberof EmailProjection
     */
    subject?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof EmailProjection
     */
    to: Array<string>;
}

export function EmailProjectionFromJSON(json: any): EmailProjection {
    return EmailProjectionFromJSONTyped(json, false);
}

export function EmailProjectionFromJSONTyped(
    json: any,
    ignoreDiscriminator: boolean
): EmailProjection {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        attachments: !exists(json, 'attachments')
            ? undefined
            : json['attachments'],
        bcc: !exists(json, 'bcc') ? undefined : json['bcc'],
        cc: !exists(json, 'cc') ? undefined : json['cc'],
        createdAt: new Date(json['createdAt']),
        id: json['id'],
        inboxId: json['inboxId'],
        read: !exists(json, 'read') ? undefined : json['read'],
        subject: !exists(json, 'subject') ? undefined : json['subject'],
        to: json['to'],
    };
}

export function EmailProjectionToJSON(value?: EmailProjection | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        attachments: value.attachments,
        bcc: value.bcc,
        cc: value.cc,
        createdAt: value.createdAt.toISOString(),
        id: value.id,
        inboxId: value.inboxId,
        read: value.read,
        subject: value.subject,
        to: value.to,
    };
}
