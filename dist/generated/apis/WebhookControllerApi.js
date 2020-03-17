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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var runtime = __importStar(require("../runtime"));
var models_1 = require("../models");
/**
 * no description
 */
var WebhookControllerApi = /** @class */ (function (_super) {
    __extends(WebhookControllerApi, _super);
    function WebhookControllerApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Get notified whenever an inbox receives an email via a WebHook URL. An emailID will be posted to this URL every time an email is received for this inbox. The URL must be publicly reachable by the MailSlurp server. You can provide basicAuth values if you wish to secure this endpoint.
     * Attach a WebHook URL to an inbox
     */
    WebhookControllerApi.prototype.createWebhookRaw = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (requestParameters.inboxId === null || requestParameters.inboxId === undefined) {
                            throw new runtime.RequiredError('inboxId', 'Required parameter requestParameters.inboxId was null or undefined when calling createWebhook.');
                        }
                        if (requestParameters.webhookOptions === null || requestParameters.webhookOptions === undefined) {
                            throw new runtime.RequiredError('webhookOptions', 'Required parameter requestParameters.webhookOptions was null or undefined when calling createWebhook.');
                        }
                        queryParameters = {};
                        headerParameters = {};
                        headerParameters['Content-Type'] = 'application/json';
                        if (this.configuration && this.configuration.apiKey) {
                            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
                        }
                        return [4 /*yield*/, this.request({
                                path: "/inboxes/{inboxId}/webhooks".replace("{" + "inboxId" + "}", encodeURIComponent(String(requestParameters.inboxId))),
                                method: 'POST',
                                headers: headerParameters,
                                query: queryParameters,
                                body: models_1.CreateWebhookOptionsToJSON(requestParameters.webhookOptions),
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, new runtime.JSONApiResponse(response, function (jsonValue) { return models_1.WebhookDtoFromJSON(jsonValue); })];
                }
            });
        });
    };
    /**
     * Get notified whenever an inbox receives an email via a WebHook URL. An emailID will be posted to this URL every time an email is received for this inbox. The URL must be publicly reachable by the MailSlurp server. You can provide basicAuth values if you wish to secure this endpoint.
     * Attach a WebHook URL to an inbox
     */
    WebhookControllerApi.prototype.createWebhook = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.createWebhookRaw(requestParameters)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Delete and disable a Webhook for an Inbox
     */
    WebhookControllerApi.prototype.deleteWebhookRaw = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (requestParameters.inboxId === null || requestParameters.inboxId === undefined) {
                            throw new runtime.RequiredError('inboxId', 'Required parameter requestParameters.inboxId was null or undefined when calling deleteWebhook.');
                        }
                        if (requestParameters.webhookId === null || requestParameters.webhookId === undefined) {
                            throw new runtime.RequiredError('webhookId', 'Required parameter requestParameters.webhookId was null or undefined when calling deleteWebhook.');
                        }
                        queryParameters = {};
                        headerParameters = {};
                        if (this.configuration && this.configuration.apiKey) {
                            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
                        }
                        return [4 /*yield*/, this.request({
                                path: "/inboxes/{inboxId}/webhooks/{webhookId}".replace("{" + "inboxId" + "}", encodeURIComponent(String(requestParameters.inboxId))).replace("{" + "webhookId" + "}", encodeURIComponent(String(requestParameters.webhookId))),
                                method: 'DELETE',
                                headers: headerParameters,
                                query: queryParameters,
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, new runtime.VoidApiResponse(response)];
                }
            });
        });
    };
    /**
     * Delete and disable a Webhook for an Inbox
     */
    WebhookControllerApi.prototype.deleteWebhook = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.deleteWebhookRaw(requestParameters)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * List webhooks in paginated form. Allows for page index, page size, and sort direction.
     * List Webhooks Paginated
     */
    WebhookControllerApi.prototype.getAllWebhooksRaw = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryParameters = {};
                        if (requestParameters.page !== undefined) {
                            queryParameters['page'] = requestParameters.page;
                        }
                        if (requestParameters.size !== undefined) {
                            queryParameters['size'] = requestParameters.size;
                        }
                        if (requestParameters.sort !== undefined) {
                            queryParameters['sort'] = requestParameters.sort;
                        }
                        headerParameters = {};
                        if (this.configuration && this.configuration.apiKey) {
                            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
                        }
                        return [4 /*yield*/, this.request({
                                path: "/webhooks/paginated",
                                method: 'GET',
                                headers: headerParameters,
                                query: queryParameters,
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, new runtime.JSONApiResponse(response, function (jsonValue) { return models_1.PageWebhookProjectionFromJSON(jsonValue); })];
                }
            });
        });
    };
    /**
     * List webhooks in paginated form. Allows for page index, page size, and sort direction.
     * List Webhooks Paginated
     */
    WebhookControllerApi.prototype.getAllWebhooks = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAllWebhooksRaw(requestParameters)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Get a webhook for an Inbox
     */
    WebhookControllerApi.prototype.getWebhookRaw = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (requestParameters.webhookId === null || requestParameters.webhookId === undefined) {
                            throw new runtime.RequiredError('webhookId', 'Required parameter requestParameters.webhookId was null or undefined when calling getWebhook.');
                        }
                        queryParameters = {};
                        headerParameters = {};
                        if (this.configuration && this.configuration.apiKey) {
                            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
                        }
                        return [4 /*yield*/, this.request({
                                path: "/webhooks/{webhookId}".replace("{" + "webhookId" + "}", encodeURIComponent(String(requestParameters.webhookId))),
                                method: 'GET',
                                headers: headerParameters,
                                query: queryParameters,
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, new runtime.JSONApiResponse(response, function (jsonValue) { return models_1.WebhookDtoFromJSON(jsonValue); })];
                }
            });
        });
    };
    /**
     * Get a webhook for an Inbox
     */
    WebhookControllerApi.prototype.getWebhook = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getWebhookRaw(requestParameters)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Get all Webhooks for an Inbox
     */
    WebhookControllerApi.prototype.getWebhooksRaw = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (requestParameters.inboxId === null || requestParameters.inboxId === undefined) {
                            throw new runtime.RequiredError('inboxId', 'Required parameter requestParameters.inboxId was null or undefined when calling getWebhooks.');
                        }
                        queryParameters = {};
                        headerParameters = {};
                        if (this.configuration && this.configuration.apiKey) {
                            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
                        }
                        return [4 /*yield*/, this.request({
                                path: "/inboxes/{inboxId}/webhooks".replace("{" + "inboxId" + "}", encodeURIComponent(String(requestParameters.inboxId))),
                                method: 'GET',
                                headers: headerParameters,
                                query: queryParameters,
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, new runtime.JSONApiResponse(response, function (jsonValue) { return jsonValue.map(models_1.WebhookDtoFromJSON); })];
                }
            });
        });
    };
    /**
     * Get all Webhooks for an Inbox
     */
    WebhookControllerApi.prototype.getWebhooks = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getWebhooksRaw(requestParameters)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Send webhook test data
     */
    WebhookControllerApi.prototype.sendTestDataRaw = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (requestParameters.webhookId === null || requestParameters.webhookId === undefined) {
                            throw new runtime.RequiredError('webhookId', 'Required parameter requestParameters.webhookId was null or undefined when calling sendTestData.');
                        }
                        queryParameters = {};
                        headerParameters = {};
                        if (this.configuration && this.configuration.apiKey) {
                            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
                        }
                        return [4 /*yield*/, this.request({
                                path: "/webhooks/{webhookId}/test".replace("{" + "webhookId" + "}", encodeURIComponent(String(requestParameters.webhookId))),
                                method: 'POST',
                                headers: headerParameters,
                                query: queryParameters,
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, new runtime.JSONApiResponse(response, function (jsonValue) { return models_1.WebhookTestResultFromJSON(jsonValue); })];
                }
            });
        });
    };
    /**
     * Send webhook test data
     */
    WebhookControllerApi.prototype.sendTestData = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.sendTestDataRaw(requestParameters)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return WebhookControllerApi;
}(runtime.BaseAPI));
exports.WebhookControllerApi = WebhookControllerApi;
/**
    * @export
    * @enum {string}
    */
var GetAllWebhooksSortEnum;
(function (GetAllWebhooksSortEnum) {
    GetAllWebhooksSortEnum["ASC"] = "ASC";
    GetAllWebhooksSortEnum["DESC"] = "DESC";
})(GetAllWebhooksSortEnum = exports.GetAllWebhooksSortEnum || (exports.GetAllWebhooksSortEnum = {}));
