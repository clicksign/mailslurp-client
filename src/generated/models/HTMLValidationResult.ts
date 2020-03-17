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
    ValidationMessage,
    ValidationMessageFromJSON,
    ValidationMessageFromJSONTyped,
    ValidationMessageToJSON,
} from './';

/**
 *
 * @export
 * @interface HTMLValidationResult
 */
export interface HTMLValidationResult {
    /**
     *
     * @type {Array<ValidationMessage>}
     * @memberof HTMLValidationResult
     */
    errors: Array<ValidationMessage>;
    /**
     *
     * @type {boolean}
     * @memberof HTMLValidationResult
     */
    isValid: boolean;
    /**
     *
     * @type {Array<ValidationMessage>}
     * @memberof HTMLValidationResult
     */
    warnings: Array<ValidationMessage>;
}

export function HTMLValidationResultFromJSON(json: any): HTMLValidationResult {
    return HTMLValidationResultFromJSONTyped(json, false);
}

export function HTMLValidationResultFromJSONTyped(
    json: any,
    ignoreDiscriminator: boolean
): HTMLValidationResult {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        errors: (json['errors'] as Array<any>).map(ValidationMessageFromJSON),
        isValid: json['isValid'],
        warnings: (json['warnings'] as Array<any>).map(
            ValidationMessageFromJSON
        ),
    };
}

export function HTMLValidationResultToJSON(
    value?: HTMLValidationResult | null
): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        errors: (value.errors as Array<any>).map(ValidationMessageToJSON),
        isValid: value.isValid,
        warnings: (value.warnings as Array<any>).map(ValidationMessageToJSON),
    };
}
