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
 * @interface TemplateProjection
 */
export interface TemplateProjection {
    /**
     *
     * @type {Date}
     * @memberof TemplateProjection
     */
    createdAt: Date;
    /**
     *
     * @type {string}
     * @memberof TemplateProjection
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof TemplateProjection
     */
    name: string;
    /**
     *
     * @type {Date}
     * @memberof TemplateProjection
     */
    updatedAt: Date;
    /**
     *
     * @type {Array<string>}
     * @memberof TemplateProjection
     */
    variables: Array<string>;
}

export function TemplateProjectionFromJSON(json: any): TemplateProjection {
    return TemplateProjectionFromJSONTyped(json, false);
}

export function TemplateProjectionFromJSONTyped(
    json: any,
    ignoreDiscriminator: boolean
): TemplateProjection {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        createdAt: new Date(json['createdAt']),
        id: json['id'],
        name: json['name'],
        updatedAt: new Date(json['updatedAt']),
        variables: json['variables'],
    };
}

export function TemplateProjectionToJSON(
    value?: TemplateProjection | null
): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        createdAt: value.createdAt.toISOString(),
        id: value.id,
        name: value.name,
        updatedAt: value.updatedAt.toISOString(),
        variables: value.variables,
    };
}
