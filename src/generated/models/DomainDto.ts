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
 * Domain plus verification records and status
 * @export
 * @interface DomainDto
 */
export interface DomainDto {
    /**
     *
     * @type {Date}
     * @memberof DomainDto
     */
    createdAt: Date;
    /**
     *
     * @type {string}
     * @memberof DomainDto
     */
    domain: string;
    /**
     *
     * @type {string}
     * @memberof DomainDto
     */
    id: string;
    /**
     *
     * @type {boolean}
     * @memberof DomainDto
     */
    isVerified: boolean;
    /**
     *
     * @type {Date}
     * @memberof DomainDto
     */
    updatedAt: Date;
    /**
     *
     * @type {string}
     * @memberof DomainDto
     */
    userId: string;
    /**
     *
     * @type {string}
     * @memberof DomainDto
     */
    verificationToken: string;
}

export function DomainDtoFromJSON(json: any): DomainDto {
    return DomainDtoFromJSONTyped(json, false);
}

export function DomainDtoFromJSONTyped(
    json: any,
    ignoreDiscriminator: boolean
): DomainDto {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        createdAt: new Date(json['createdAt']),
        domain: json['domain'],
        id: json['id'],
        isVerified: json['isVerified'],
        updatedAt: new Date(json['updatedAt']),
        userId: json['userId'],
        verificationToken: json['verificationToken'],
    };
}

export function DomainDtoToJSON(value?: DomainDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        createdAt: value.createdAt.toISOString(),
        domain: value.domain,
        id: value.id,
        isVerified: value.isVerified,
        updatedAt: value.updatedAt.toISOString(),
        userId: value.userId,
        verificationToken: value.verificationToken,
    };
}