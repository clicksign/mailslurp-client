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
 * @interface WebhookTestRequest
 */
export interface WebhookTestRequest {
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof WebhookTestRequest
     */
    headers: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof WebhookTestRequest
     */
    method: WebhookTestRequestMethodEnum;
    /**
     * 
     * @type {string}
     * @memberof WebhookTestRequest
     */
    payload?: string;
    /**
     * 
     * @type {string}
     * @memberof WebhookTestRequest
     */
    url: string;
}

export function WebhookTestRequestFromJSON(json: any): WebhookTestRequest {
    return WebhookTestRequestFromJSONTyped(json, false);
}

export function WebhookTestRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebhookTestRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'headers': json['headers'],
        'method': json['method'],
        'payload': !exists(json, 'payload') ? undefined : json['payload'],
        'url': json['url'],
    };
}

export function WebhookTestRequestToJSON(value?: WebhookTestRequest | null): any {
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

/**
* @export
* @enum {string}
*/
export enum WebhookTestRequestMethodEnum {
    GET = 'GET',
    HEAD = 'HEAD',
    POST = 'POST',
    PUT = 'PUT',
    PATCH = 'PATCH',
    DELETE = 'DELETE',
    OPTIONS = 'OPTIONS',
    TRACE = 'TRACE'
}


