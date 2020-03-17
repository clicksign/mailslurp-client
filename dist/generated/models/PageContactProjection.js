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
function PageContactProjectionFromJSON(json) {
    return PageContactProjectionFromJSONTyped(json, false);
}
exports.PageContactProjectionFromJSON = PageContactProjectionFromJSON;
function PageContactProjectionFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'content': !runtime_1.exists(json, 'content') ? undefined : (json['content'].map(_1.ContactProjectionFromJSON)),
        'empty': !runtime_1.exists(json, 'empty') ? undefined : json['empty'],
        'first': !runtime_1.exists(json, 'first') ? undefined : json['first'],
        'last': !runtime_1.exists(json, 'last') ? undefined : json['last'],
        'number': !runtime_1.exists(json, 'number') ? undefined : json['number'],
        'numberOfElements': !runtime_1.exists(json, 'numberOfElements') ? undefined : json['numberOfElements'],
        'pageable': !runtime_1.exists(json, 'pageable') ? undefined : _1.PageableFromJSON(json['pageable']),
        'size': !runtime_1.exists(json, 'size') ? undefined : json['size'],
        'sort': !runtime_1.exists(json, 'sort') ? undefined : _1.SortFromJSON(json['sort']),
        'totalElements': !runtime_1.exists(json, 'totalElements') ? undefined : json['totalElements'],
        'totalPages': !runtime_1.exists(json, 'totalPages') ? undefined : json['totalPages'],
    };
}
exports.PageContactProjectionFromJSONTyped = PageContactProjectionFromJSONTyped;
function PageContactProjectionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'content': value.content === undefined ? undefined : (value.content.map(_1.ContactProjectionToJSON)),
        'empty': value.empty,
        'first': value.first,
        'last': value.last,
        'number': value.number,
        'numberOfElements': value.numberOfElements,
        'pageable': _1.PageableToJSON(value.pageable),
        'size': value.size,
        'sort': _1.SortToJSON(value.sort),
        'totalElements': value.totalElements,
        'totalPages': value.totalPages,
    };
}
exports.PageContactProjectionToJSON = PageContactProjectionToJSON;