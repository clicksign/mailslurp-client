"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var runtime_1 = require("../runtime");
function EmailPreviewFromJSON(json) {
    return EmailPreviewFromJSONTyped(json, false);
}
exports.EmailPreviewFromJSON = EmailPreviewFromJSON;
function EmailPreviewFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        attachments: !runtime_1.exists(json, 'attachments')
            ? undefined
            : json['attachments'],
        bcc: !runtime_1.exists(json, 'bcc') ? undefined : json['bcc'],
        cc: !runtime_1.exists(json, 'cc') ? undefined : json['cc'],
        createdAt: !runtime_1.exists(json, 'createdAt')
            ? undefined
            : new Date(json['createdAt']),
        id: !runtime_1.exists(json, 'id') ? undefined : json['id'],
        read: !runtime_1.exists(json, 'read') ? undefined : json['read'],
        subject: !runtime_1.exists(json, 'subject') ? undefined : json['subject'],
        to: !runtime_1.exists(json, 'to') ? undefined : json['to'],
    };
}
exports.EmailPreviewFromJSONTyped = EmailPreviewFromJSONTyped;
function EmailPreviewToJSON(value) {
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
        createdAt: value.createdAt === undefined
            ? undefined
            : value.createdAt.toISOString(),
        id: value.id,
        read: value.read,
        subject: value.subject,
        to: value.to,
    };
}
exports.EmailPreviewToJSON = EmailPreviewToJSON;
