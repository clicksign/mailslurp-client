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
function JsonNodeFromJSON(json) {
    return JsonNodeFromJSONTyped(json, false);
}
exports.JsonNodeFromJSON = JsonNodeFromJSON;
function JsonNodeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'array': !runtime_1.exists(json, 'array') ? undefined : json['array'],
        'bigDecimal': !runtime_1.exists(json, 'bigDecimal') ? undefined : json['bigDecimal'],
        'bigInteger': !runtime_1.exists(json, 'bigInteger') ? undefined : json['bigInteger'],
        'binary': !runtime_1.exists(json, 'binary') ? undefined : json['binary'],
        '_boolean': !runtime_1.exists(json, 'boolean') ? undefined : json['boolean'],
        'containerNode': !runtime_1.exists(json, 'containerNode') ? undefined : json['containerNode'],
        '_double': !runtime_1.exists(json, 'double') ? undefined : json['double'],
        'empty': !runtime_1.exists(json, 'empty') ? undefined : json['empty'],
        '_float': !runtime_1.exists(json, 'float') ? undefined : json['float'],
        'floatingPointNumber': !runtime_1.exists(json, 'floatingPointNumber') ? undefined : json['floatingPointNumber'],
        '_int': !runtime_1.exists(json, 'int') ? undefined : json['int'],
        'integralNumber': !runtime_1.exists(json, 'integralNumber') ? undefined : json['integralNumber'],
        '_long': !runtime_1.exists(json, 'long') ? undefined : json['long'],
        'missingNode': !runtime_1.exists(json, 'missingNode') ? undefined : json['missingNode'],
        'nodeType': !runtime_1.exists(json, 'nodeType') ? undefined : json['nodeType'],
        '_null': !runtime_1.exists(json, 'null') ? undefined : json['null'],
        'number': !runtime_1.exists(json, 'number') ? undefined : json['number'],
        'object': !runtime_1.exists(json, 'object') ? undefined : json['object'],
        'pojo': !runtime_1.exists(json, 'pojo') ? undefined : json['pojo'],
        '_short': !runtime_1.exists(json, 'short') ? undefined : json['short'],
        'textual': !runtime_1.exists(json, 'textual') ? undefined : json['textual'],
        'valueNode': !runtime_1.exists(json, 'valueNode') ? undefined : json['valueNode'],
    };
}
exports.JsonNodeFromJSONTyped = JsonNodeFromJSONTyped;
function JsonNodeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'array': value.array,
        'bigDecimal': value.bigDecimal,
        'bigInteger': value.bigInteger,
        'binary': value.binary,
        'boolean': value._boolean,
        'containerNode': value.containerNode,
        'double': value._double,
        'empty': value.empty,
        'float': value._float,
        'floatingPointNumber': value.floatingPointNumber,
        'int': value._int,
        'integralNumber': value.integralNumber,
        'long': value._long,
        'missingNode': value.missingNode,
        'nodeType': value.nodeType,
        'null': value._null,
        'number': value.number,
        'object': value.object,
        'pojo': value.pojo,
        'short': value._short,
        'textual': value.textual,
        'valueNode': value.valueNode,
    };
}
exports.JsonNodeToJSON = JsonNodeToJSON;
/**
* @export
* @enum {string}
*/
var JsonNodeNodeTypeEnum;
(function (JsonNodeNodeTypeEnum) {
    JsonNodeNodeTypeEnum["ARRAY"] = "ARRAY";
    JsonNodeNodeTypeEnum["BINARY"] = "BINARY";
    JsonNodeNodeTypeEnum["BOOLEAN"] = "BOOLEAN";
    JsonNodeNodeTypeEnum["MISSING"] = "MISSING";
    JsonNodeNodeTypeEnum["NULL"] = "NULL";
    JsonNodeNodeTypeEnum["NUMBER"] = "NUMBER";
    JsonNodeNodeTypeEnum["OBJECT"] = "OBJECT";
    JsonNodeNodeTypeEnum["POJO"] = "POJO";
    JsonNodeNodeTypeEnum["STRING"] = "STRING";
})(JsonNodeNodeTypeEnum = exports.JsonNodeNodeTypeEnum || (exports.JsonNodeNodeTypeEnum = {}));
