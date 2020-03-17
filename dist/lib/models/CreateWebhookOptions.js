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
var _1 = require("./");
function CreateWebhookOptionsFromJSON(json) {
    return CreateWebhookOptionsFromJSONTyped(json, false);
}
exports.CreateWebhookOptionsFromJSON = CreateWebhookOptionsFromJSON;
function CreateWebhookOptionsFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        basicAuth: !runtime_1.exists(json, 'basicAuth')
            ? undefined
            : _1.BasicAuthOptionsFromJSON(json['basicAuth']),
        name: !runtime_1.exists(json, 'name') ? undefined : json['name'],
        url: !runtime_1.exists(json, 'url') ? undefined : json['url'],
    };
}
exports.CreateWebhookOptionsFromJSONTyped = CreateWebhookOptionsFromJSONTyped;
function CreateWebhookOptionsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        basicAuth: _1.BasicAuthOptionsToJSON(value.basicAuth),
        name: value.name,
        url: value.url,
    };
}
exports.CreateWebhookOptionsToJSON = CreateWebhookOptionsToJSON;