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


import * as runtime from '../runtime';
import {
    Inbox,
    InboxFromJSON,
    InboxToJSON,
    SendEmailOptions,
    SendEmailOptionsFromJSON,
    SendEmailOptionsToJSON,
} from '../models';

export interface EmptyInboxRequest {
    inboxId: string;
}

export interface SendEmailSimpleRequest {
    sendEmailOptions: SendEmailOptions;
}

/**
 * no description
 */
export class CommonActionsControllerApi extends runtime.BaseAPI {

    /**
     * Returns an Inbox with an `id` and an `emailAddress`
     * Create new random inbox
     */
    async createNewEmailAddressRaw(): Promise<runtime.ApiResponse<Inbox>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/newEmailAddress`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => InboxFromJSON(jsonValue));
    }

    /**
     * Returns an Inbox with an `id` and an `emailAddress`
     * Create new random inbox
     */
    async createNewEmailAddress(): Promise<Inbox> {
        const response = await this.createNewEmailAddressRaw();
        return await response.value();
    }

    /**
     * Deletes all emails
     * Delete all emails in an inbox
     */
    async emptyInboxRaw(requestParameters: EmptyInboxRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.inboxId === null || requestParameters.inboxId === undefined) {
            throw new runtime.RequiredError('inboxId','Required parameter requestParameters.inboxId was null or undefined when calling emptyInbox.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.inboxId !== undefined) {
            queryParameters['inboxId'] = requestParameters.inboxId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/emptyInbox`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes all emails
     * Delete all emails in an inbox
     */
    async emptyInbox(requestParameters: EmptyInboxRequest): Promise<void> {
        await this.emptyInboxRaw(requestParameters);
    }

    /**
     * To specify an email address first create an inbox and use that with the other send email methods
     * Send an email from a random email address
     */
    async sendEmailSimpleRaw(requestParameters: SendEmailSimpleRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.sendEmailOptions === null || requestParameters.sendEmailOptions === undefined) {
            throw new runtime.RequiredError('sendEmailOptions','Required parameter requestParameters.sendEmailOptions was null or undefined when calling sendEmailSimple.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/sendEmail`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SendEmailOptionsToJSON(requestParameters.sendEmailOptions),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * To specify an email address first create an inbox and use that with the other send email methods
     * Send an email from a random email address
     */
    async sendEmailSimple(requestParameters: SendEmailSimpleRequest): Promise<void> {
        await this.sendEmailSimpleRaw(requestParameters);
    }

}
