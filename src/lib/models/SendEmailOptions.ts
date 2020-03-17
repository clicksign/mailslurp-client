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
 * Options for sending an email message from an inbox. You must provide one of: `to`, `toGroup`, or `toContacts` to send an email. All other parameters are optional.
 * @export
 * @interface SendEmailOptions
 */
export interface SendEmailOptions {
    /**
     * Optional list of attachment IDs to send with this email. You must first upload each attachment separately in order to obtain attachment IDs. This way you can reuse attachments with different emails once uploaded.
     * @type {Array<string>}
     * @memberof SendEmailOptions
     */
    attachments?: Array<string>;
    /**
     * Optional list of bcc destination email addresses
     * @type {Array<string>}
     * @memberof SendEmailOptions
     */
    bcc?: Array<string>;
    /**
     * Optional contents of email. If body contains HTML then set `isHTML` to true to ensure that email clients render it correctly. You can use moustache template syntax in the email body in conjunction with `toGroup` contact variables or `templateVariables` data. If you need more templating control consider creating a template and using the `template` property instead of the body.
     * @type {string}
     * @memberof SendEmailOptions
     */
    body?: string;
    /**
     * Optional list of cc destination email addresses
     * @type {Array<string>}
     * @memberof SendEmailOptions
     */
    cc?: Array<string>;
    /**
     * Optional charset
     * @type {string}
     * @memberof SendEmailOptions
     */
    charset?: string;
    /**
     * Optional from address. If not set the source inbox address will be used for this field. Beware of potential spam penalties when setting this field to an address not used by the inbox. For custom email addresses use a custom domain.
     * @type {string}
     * @memberof SendEmailOptions
     */
    from?: string;
    /**
     * Optional HTML flag. If true the `content-type` of the email will be `text/html`. Set to true when sending HTML to ensure proper rending on email clients
     * @type {boolean}
     * @memberof SendEmailOptions
     */
    isHTML?: boolean;
    /**
     * Optional replyTo header
     * @type {string}
     * @memberof SendEmailOptions
     */
    replyTo?: string;
    /**
     * Optional strategy to use when sending the email
     * @type {string}
     * @memberof SendEmailOptions
     */
    sendStrategy?: SendEmailOptionsSendStrategyEnum;
    /**
     * Optional email subject line
     * @type {string}
     * @memberof SendEmailOptions
     */
    subject?: string;
    /**
     * Optional template ID to use for body. Will override body if provided. When using a template make sure you pass the corresponding map of `templateVariables`. You can find which variables are needed by fetching the template itself or viewing it in the dashboard.
     * @type {string}
     * @memberof SendEmailOptions
     */
    template?: string;
    /**
     * Optional map of template variables. Will replace moustache syntax variables in subject and body or template with the associated values if found.
     * @type {object}
     * @memberof SendEmailOptions
     */
    templateVariables?: object;
    /**
     * List of destination email addresses. Even single recipients must be in array form. Maximum recipients per email depends on your plan. If you need to send many emails try using contacts or contact groups or use a non standard sendStrategy to ensure that spam filters are not triggered (many recipients in one email can affect your spam rating).
     * @type {Array<string>}
     * @memberof SendEmailOptions
     */
    to?: Array<string>;
    /**
     * Optional list of contact IDs to send email to. Manage your contacts via the API or dashboard. When contacts are used the email is sent to each contact separately so they will not see other recipients.
     * @type {Array<string>}
     * @memberof SendEmailOptions
     */
    toContacts?: Array<string>;
    /**
     * Optional contact group ID to send email to. You can create contacts and contact groups in the API or dashboard and use them for email campaigns. When contact groups are used the email is sent to each contact separately so they will not see other recipients
     * @type {string}
     * @memberof SendEmailOptions
     */
    toGroup?: string;
}

export function SendEmailOptionsFromJSON(json: any): SendEmailOptions {
    return SendEmailOptionsFromJSONTyped(json, false);
}

export function SendEmailOptionsFromJSONTyped(
    json: any,
    ignoreDiscriminator: boolean
): SendEmailOptions {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        attachments: !exists(json, 'attachments')
            ? undefined
            : json['attachments'],
        bcc: !exists(json, 'bcc') ? undefined : json['bcc'],
        body: !exists(json, 'body') ? undefined : json['body'],
        cc: !exists(json, 'cc') ? undefined : json['cc'],
        charset: !exists(json, 'charset') ? undefined : json['charset'],
        from: !exists(json, 'from') ? undefined : json['from'],
        isHTML: !exists(json, 'isHTML') ? undefined : json['isHTML'],
        replyTo: !exists(json, 'replyTo') ? undefined : json['replyTo'],
        sendStrategy: !exists(json, 'sendStrategy')
            ? undefined
            : json['sendStrategy'],
        subject: !exists(json, 'subject') ? undefined : json['subject'],
        template: !exists(json, 'template') ? undefined : json['template'],
        templateVariables: !exists(json, 'templateVariables')
            ? undefined
            : json['templateVariables'],
        to: !exists(json, 'to') ? undefined : json['to'],
        toContacts: !exists(json, 'toContacts')
            ? undefined
            : json['toContacts'],
        toGroup: !exists(json, 'toGroup') ? undefined : json['toGroup'],
    };
}

export function SendEmailOptionsToJSON(value?: SendEmailOptions | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        attachments: value.attachments,
        bcc: value.bcc,
        body: value.body,
        cc: value.cc,
        charset: value.charset,
        from: value.from,
        isHTML: value.isHTML,
        replyTo: value.replyTo,
        sendStrategy: value.sendStrategy,
        subject: value.subject,
        template: value.template,
        templateVariables: value.templateVariables,
        to: value.to,
        toContacts: value.toContacts,
        toGroup: value.toGroup,
    };
}

/**
 * @export
 * @enum {string}
 */
export enum SendEmailOptionsSendStrategyEnum {
    SINGLEMESSAGE = 'SINGLE_MESSAGE',
}
