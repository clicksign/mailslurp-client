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
function WaitForConditionsFromJSON(json) {
    return WaitForConditionsFromJSONTyped(json, false);
}
exports.WaitForConditionsFromJSON = WaitForConditionsFromJSON;
function WaitForConditionsFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        count: !runtime_1.exists(json, 'count') ? undefined : json['count'],
        countType: !runtime_1.exists(json, 'countType') ? undefined : json['countType'],
        inboxId: !runtime_1.exists(json, 'inboxId') ? undefined : json['inboxId'],
        matches: !runtime_1.exists(json, 'matches')
            ? undefined
            : json['matches'].map(_1.MatchOptionFromJSON),
        sortDirection: !runtime_1.exists(json, 'sortDirection')
            ? undefined
            : json['sortDirection'],
        timeout: !runtime_1.exists(json, 'timeout') ? undefined : json['timeout'],
        unreadOnly: !runtime_1.exists(json, 'unreadOnly')
            ? undefined
            : json['unreadOnly'],
    };
}
exports.WaitForConditionsFromJSONTyped = WaitForConditionsFromJSONTyped;
function WaitForConditionsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        count: value.count,
        countType: value.countType,
        inboxId: value.inboxId,
        matches: value.matches === undefined
            ? undefined
            : value.matches.map(_1.MatchOptionToJSON),
        sortDirection: value.sortDirection,
        timeout: value.timeout,
        unreadOnly: value.unreadOnly,
    };
}
exports.WaitForConditionsToJSON = WaitForConditionsToJSON;
/**
 * @export
 * @enum {string}
 */
var WaitForConditionsCountTypeEnum;
(function (WaitForConditionsCountTypeEnum) {
    WaitForConditionsCountTypeEnum["EXACTLY"] = "EXACTLY";
    WaitForConditionsCountTypeEnum["ATLEAST"] = "ATLEAST";
})(WaitForConditionsCountTypeEnum = exports.WaitForConditionsCountTypeEnum || (exports.WaitForConditionsCountTypeEnum = {}));
/**
 * @export
 * @enum {string}
 */
var WaitForConditionsSortDirectionEnum;
(function (WaitForConditionsSortDirectionEnum) {
    WaitForConditionsSortDirectionEnum["ASC"] = "ASC";
    WaitForConditionsSortDirectionEnum["DESC"] = "DESC";
})(WaitForConditionsSortDirectionEnum = exports.WaitForConditionsSortDirectionEnum || (exports.WaitForConditionsSortDirectionEnum = {}));
