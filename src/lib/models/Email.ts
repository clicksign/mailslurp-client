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
import {
    EmailAnalysis,
    EmailAnalysisFromJSON,
    EmailAnalysisFromJSONTyped,
    EmailAnalysisToJSON,
} from './';

/**
 * Representation of an email received by an inbox. Use the ID to access more properties of an email using the EmailController endpoints.
 * @export
 * @interface Email
 */
export interface Email {
    /**
     *
     * @type {EmailAnalysis}
     * @memberof Email
     */
    analysis?: EmailAnalysis;
    /**
     * List of IDs of attachments found in the email. Use these IDs with the Inbox and Email Controllers to download attachments and attachment meta data such as filesize, name, extension.
     * @type {Array<string>}
     * @memberof Email
     */
    attachments?: Array<string>;
    /**
     * List of `BCC` recipients email was addressed to
     * @type {Array<string>}
     * @memberof Email
     */
    bcc?: Array<string>;
    /**
     * The body of the email message
     * @type {string}
     * @memberof Email
     */
    body?: string;
    /**
     * List of `CC` recipients email was addressed to
     * @type {Array<string>}
     * @memberof Email
     */
    cc?: Array<string>;
    /**
     * Detected character set of the email body such as UTF-8
     * @type {string}
     * @memberof Email
     */
    charset?: string;
    /**
     * When was the email received by MailSlurp
     * @type {Date}
     * @memberof Email
     */
    createdAt?: Date;
    /**
     * Who the email was sent from
     * @type {string}
     * @memberof Email
     */
    from?: string;
    /**
     *
     * @type {{ [key: string]: string; }}
     * @memberof Email
     */
    headers?: { [key: string]: string };
    /**
     * ID of the email
     * @type {string}
     * @memberof Email
     */
    id?: string;
    /**
     * ID of the inbox that received the email
     * @type {string}
     * @memberof Email
     */
    inboxId?: string;
    /**
     * Was HTML sent in the email body
     * @type {boolean}
     * @memberof Email
     */
    isHTML?: boolean;
    /**
     * Has the email been viewed ever
     * @type {boolean}
     * @memberof Email
     */
    read?: boolean;
    /**
     * The subject line of the email message
     * @type {string}
     * @memberof Email
     */
    subject?: string;
    /**
     * List of `To` recipients email was addressed to
     * @type {Array<string>}
     * @memberof Email
     */
    to?: Array<string>;
    /**
     * When was the email last updated
     * @type {Date}
     * @memberof Email
     */
    updatedAt?: Date;
    /**
     * ID of user that email belongs
     * @type {string}
     * @memberof Email
     */
    userId?: string;
}

export function EmailFromJSON(json: any): Email {
    return EmailFromJSONTyped(json, false);
}

export function EmailFromJSONTyped(
    json: any,
    ignoreDiscriminator: boolean
): Email {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        analysis: !exists(json, 'analysis')
            ? undefined
            : EmailAnalysisFromJSON(json['analysis']),
        attachments: !exists(json, 'attachments')
            ? undefined
            : json['attachments'],
        bcc: !exists(json, 'bcc') ? undefined : json['bcc'],
        body: !exists(json, 'body') ? undefined : json['body'],
        cc: !exists(json, 'cc') ? undefined : json['cc'],
        charset: !exists(json, 'charset') ? undefined : json['charset'],
        createdAt: !exists(json, 'createdAt')
            ? undefined
            : new Date(json['createdAt']),
        from: !exists(json, 'from') ? undefined : json['from'],
        headers: !exists(json, 'headers') ? undefined : json['headers'],
        id: !exists(json, 'id') ? undefined : json['id'],
        inboxId: !exists(json, 'inboxId') ? undefined : json['inboxId'],
        isHTML: !exists(json, 'isHTML') ? undefined : json['isHTML'],
        read: !exists(json, 'read') ? undefined : json['read'],
        subject: !exists(json, 'subject') ? undefined : json['subject'],
        to: !exists(json, 'to') ? undefined : json['to'],
        updatedAt: !exists(json, 'updatedAt')
            ? undefined
            : new Date(json['updatedAt']),
        userId: !exists(json, 'userId') ? undefined : json['userId'],
    };
}

export function EmailToJSON(value?: Email | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        analysis: EmailAnalysisToJSON(value.analysis),
        attachments: value.attachments,
        bcc: value.bcc,
        body: value.body,
        cc: value.cc,
        charset: value.charset,
        createdAt:
            value.createdAt === undefined
                ? undefined
                : value.createdAt.toISOString(),
        from: value.from,
        headers: value.headers,
        id: value.id,
        inboxId: value.inboxId,
        isHTML: value.isHTML,
        read: value.read,
        subject: value.subject,
        to: value.to,
        updatedAt:
            value.updatedAt === undefined
                ? undefined
                : value.updatedAt.toISOString(),
        userId: value.userId,
    };
}