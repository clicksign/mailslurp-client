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
function WebhookTestRequestFromJSON(json) {
    return WebhookTestRequestFromJSONTyped(json, false);
}
exports.WebhookTestRequestFromJSON = WebhookTestRequestFromJSON;
function WebhookTestRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'headers': json['headers'],
        'method': json['method'],
        'payload': !runtime_1.exists(json, 'payload') ? undefined : json['payload'],
        'url': json['url'],
    };
}
exports.WebhookTestRequestFromJSONTyped = WebhookTestRequestFromJSONTyped;
function WebhookTestRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'headers': value.headers,
        'method': value.method,
        'payload': value.payload,
        'url': value.url,
    };
}
exports.WebhookTestRequestToJSON = WebhookTestRequestToJSON;
/**
* @export
* @enum {string}
*/
var WebhookTestRequestMethodEnum;
(function (WebhookTestRequestMethodEnum) {
    WebhookTestRequestMethodEnum["GET"] = "GET";
    WebhookTestRequestMethodEnum["HEAD"] = "HEAD";
    WebhookTestRequestMethodEnum["POST"] = "POST";
    WebhookTestRequestMethodEnum["PUT"] = "PUT";
    WebhookTestRequestMethodEnum["PATCH"] = "PATCH";
    WebhookTestRequestMethodEnum["DELETE"] = "DELETE";
    WebhookTestRequestMethodEnum["OPTIONS"] = "OPTIONS";
    WebhookTestRequestMethodEnum["TRACE"] = "TRACE";
})(WebhookTestRequestMethodEnum = exports.WebhookTestRequestMethodEnum || (exports.WebhookTestRequestMethodEnum = {}));
