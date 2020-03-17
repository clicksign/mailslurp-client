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
var InboxControllerApi = /** @class */ (function (_super) {
    __extends(InboxControllerApi, _super);
    function InboxControllerApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Create a new inbox and with a randomized email address to send and receive from. Pass emailAddress parameter if you wish to use a specific email address. Creating an inbox is required before sending or receiving emails. If writing tests it is recommended that you create a new inbox during each test method so that it is unique and empty.
     * Create an Inbox (email address)
     */
    InboxControllerApi.prototype.createInboxRaw = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryParameters = {};
                        if (requestParameters.description !== undefined) {
                            queryParameters['description'] = requestParameters.description;
                        }
                        if (requestParameters.emailAddress !== undefined) {
                            queryParameters['emailAddress'] = requestParameters.emailAddress;
                        }
                        if (requestParameters.expiresAt !== undefined) {
                            queryParameters['expiresAt'] = requestParameters.expiresAt.toISOString();
                        }
                        if (requestParameters.favourite !== undefined) {
                            queryParameters['favourite'] = requestParameters.favourite;
                        }
                        if (requestParameters.name !== undefined) {
                            queryParameters['name'] = requestParameters.name;
                        }
                        if (requestParameters.tags) {
                            queryParameters['tags'] = requestParameters.tags;
                        }
                        headerParameters = {};
                        if (this.configuration && this.configuration.apiKey) {
                            headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
                        }
                        return [4 /*yield*/, this.request({
                                path: "/inboxes",
                                method: 'POST',
                                headers: headerParameters,
                                query: queryParameters,
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, new runtime.JSONApiResponse(response, function (jsonValue) {
                                return models_1.InboxFromJSON(jsonValue);
                            })];
                }
            });
        });
    };
    /**
     * Create a new inbox and with a randomized email address to send and receive from. Pass emailAddress parameter if you wish to use a specific email address. Creating an inbox is required before sending or receiving emails. If writing tests it is recommended that you create a new inbox during each test method so that it is unique and empty.
     * Create an Inbox (email address)
     */
    InboxControllerApi.prototype.createInbox = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.createInboxRaw(requestParameters)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Permanently delete all inboxes and associated email addresses. This will also delete all emails within the inboxes. Be careful as inboxes cannot be recovered once deleted. Note: deleting inboxes will not impact your usage limits. Monthly inbox creation limits are based on how many inboxes were created in the last 30 days, not how many inboxes you currently have.
     * Delete all inboxes
     */
    InboxControllerApi.prototype.deleteAllInboxesRaw = function () {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryParameters = {};
                        headerParameters = {};
                        if (this.configuration && this.configuration.apiKey) {
                            headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
                        }
                        return [4 /*yield*/, this.request({
                                path: "/inboxes",
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
     * Permanently delete all inboxes and associated email addresses. This will also delete all emails within the inboxes. Be careful as inboxes cannot be recovered once deleted. Note: deleting inboxes will not impact your usage limits. Monthly inbox creation limits are based on how many inboxes were created in the last 30 days, not how many inboxes you currently have.
     * Delete all inboxes
     */
    InboxControllerApi.prototype.deleteAllInboxes = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.deleteAllInboxesRaw()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Permanently delete an inbox and associated email address aswell as all emails within the given inbox. This action cannot be undone. Note: deleting an inbox will not affect your account usage. Monthly inbox usage is based on how many inboxes you create within 30 days, not how many exist at time of request.
     * Delete inbox
     */
    InboxControllerApi.prototype.deleteInboxRaw = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (requestParameters.inboxId === null ||
                            requestParameters.inboxId === undefined) {
                            throw new runtime.RequiredError('inboxId', 'Required parameter requestParameters.inboxId was null or undefined when calling deleteInbox.');
                        }
                        queryParameters = {};
                        headerParameters = {};
                        if (this.configuration && this.configuration.apiKey) {
                            headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
                        }
                        return [4 /*yield*/, this.request({
                                path: "/inboxes/{inboxId}".replace("{" + 'inboxId' + "}", encodeURIComponent(String(requestParameters.inboxId))),
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
     * Permanently delete an inbox and associated email address aswell as all emails within the given inbox. This action cannot be undone. Note: deleting an inbox will not affect your account usage. Monthly inbox usage is based on how many inboxes you create within 30 days, not how many exist at time of request.
     * Delete inbox
     */
    InboxControllerApi.prototype.deleteInbox = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.deleteInboxRaw(requestParameters)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * List inboxes in paginated form. Allows for page index, page size, and sort direction. Can also filter by favourited or email address like pattern.
     * List Inboxes Paginated
     */
    InboxControllerApi.prototype.getAllInboxesRaw = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryParameters = {};
                        if (requestParameters.favourite !== undefined) {
                            queryParameters['favourite'] = requestParameters.favourite;
                        }
                        if (requestParameters.page !== undefined) {
                            queryParameters['page'] = requestParameters.page;
                        }
                        if (requestParameters.search !== undefined) {
                            queryParameters['search'] = requestParameters.search;
                        }
                        if (requestParameters.size !== undefined) {
                            queryParameters['size'] = requestParameters.size;
                        }
                        if (requestParameters.sort !== undefined) {
                            queryParameters['sort'] = requestParameters.sort;
                        }
                        headerParameters = {};
                        if (this.configuration && this.configuration.apiKey) {
                            headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
                        }
                        return [4 /*yield*/, this.request({
                                path: "/inboxes/paginated",
                                method: 'GET',
                                headers: headerParameters,
                                query: queryParameters,
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, new runtime.JSONApiResponse(response, function (jsonValue) {
                                return models_1.PageInboxProjectionFromJSON(jsonValue);
                            })];
                }
            });
        });
    };
    /**
     * List inboxes in paginated form. Allows for page index, page size, and sort direction. Can also filter by favourited or email address like pattern.
     * List Inboxes Paginated
     */
    InboxControllerApi.prototype.getAllInboxes = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAllInboxesRaw(requestParameters)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * List emails that an inbox has received. Only emails that are sent to the inbox\'s email address will appear in the inbox. It may take several seconds for any email you send to an inbox\'s email address to appear in the inbox. To make this endpoint wait for a minimum number of emails use the `minCount` parameter. The server will retry the inbox database until the `minCount` is satisfied or the `retryTimeout` is reached
     * Get emails in an Inbox
     */
    InboxControllerApi.prototype.getEmailsRaw = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (requestParameters.inboxId === null ||
                            requestParameters.inboxId === undefined) {
                            throw new runtime.RequiredError('inboxId', 'Required parameter requestParameters.inboxId was null or undefined when calling getEmails.');
                        }
                        queryParameters = {};
                        if (requestParameters.limit !== undefined) {
                            queryParameters['limit'] = requestParameters.limit;
                        }
                        if (requestParameters.minCount !== undefined) {
                            queryParameters['minCount'] = requestParameters.minCount;
                        }
                        if (requestParameters.retryTimeout !== undefined) {
                            queryParameters['retryTimeout'] = requestParameters.retryTimeout;
                        }
                        if (requestParameters.since !== undefined) {
                            queryParameters['since'] = requestParameters.since.toISOString();
                        }
                        if (requestParameters.sort !== undefined) {
                            queryParameters['sort'] = requestParameters.sort;
                        }
                        headerParameters = {};
                        if (this.configuration && this.configuration.apiKey) {
                            headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
                        }
                        return [4 /*yield*/, this.request({
                                path: "/inboxes/{inboxId}/emails".replace("{" + 'inboxId' + "}", encodeURIComponent(String(requestParameters.inboxId))),
                                method: 'GET',
                                headers: headerParameters,
                                query: queryParameters,
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, new runtime.JSONApiResponse(response, function (jsonValue) {
                                return jsonValue.map(models_1.EmailPreviewFromJSON);
                            })];
                }
            });
        });
    };
    /**
     * List emails that an inbox has received. Only emails that are sent to the inbox\'s email address will appear in the inbox. It may take several seconds for any email you send to an inbox\'s email address to appear in the inbox. To make this endpoint wait for a minimum number of emails use the `minCount` parameter. The server will retry the inbox database until the `minCount` is satisfied or the `retryTimeout` is reached
     * Get emails in an Inbox
     */
    InboxControllerApi.prototype.getEmails = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getEmailsRaw(requestParameters)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Returns an inbox\'s properties, including its email address and ID.
     * Get Inbox
     */
    InboxControllerApi.prototype.getInboxRaw = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (requestParameters.inboxId === null ||
                            requestParameters.inboxId === undefined) {
                            throw new runtime.RequiredError('inboxId', 'Required parameter requestParameters.inboxId was null or undefined when calling getInbox.');
                        }
                        queryParameters = {};
                        headerParameters = {};
                        if (this.configuration && this.configuration.apiKey) {
                            headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
                        }
                        return [4 /*yield*/, this.request({
                                path: "/inboxes/{inboxId}".replace("{" + 'inboxId' + "}", encodeURIComponent(String(requestParameters.inboxId))),
                                method: 'GET',
                                headers: headerParameters,
                                query: queryParameters,
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, new runtime.JSONApiResponse(response, function (jsonValue) {
                                return models_1.InboxFromJSON(jsonValue);
                            })];
                }
            });
        });
    };
    /**
     * Returns an inbox\'s properties, including its email address and ID.
     * Get Inbox
     */
    InboxControllerApi.prototype.getInbox = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getInboxRaw(requestParameters)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Get a paginated list of emails in an inbox. Does not hold connections open.
     * Get inbox emails paginated
     */
    InboxControllerApi.prototype.getInboxEmailsPaginatedRaw = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (requestParameters.inboxId === null ||
                            requestParameters.inboxId === undefined) {
                            throw new runtime.RequiredError('inboxId', 'Required parameter requestParameters.inboxId was null or undefined when calling getInboxEmailsPaginated.');
                        }
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
                            headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
                        }
                        return [4 /*yield*/, this.request({
                                path: "/inboxes/{inboxId}/emails/paginated".replace("{" + 'inboxId' + "}", encodeURIComponent(String(requestParameters.inboxId))),
                                method: 'GET',
                                headers: headerParameters,
                                query: queryParameters,
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, new runtime.JSONApiResponse(response, function (jsonValue) {
                                return models_1.PageEmailPreviewFromJSON(jsonValue);
                            })];
                }
            });
        });
    };
    /**
     * Get a paginated list of emails in an inbox. Does not hold connections open.
     * Get inbox emails paginated
     */
    InboxControllerApi.prototype.getInboxEmailsPaginated = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getInboxEmailsPaginatedRaw(requestParameters)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * List the inboxes you have created
     * List Inboxes / Email Addresses
     */
    InboxControllerApi.prototype.getInboxesRaw = function () {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryParameters = {};
                        headerParameters = {};
                        if (this.configuration && this.configuration.apiKey) {
                            headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
                        }
                        return [4 /*yield*/, this.request({
                                path: "/inboxes",
                                method: 'GET',
                                headers: headerParameters,
                                query: queryParameters,
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, new runtime.JSONApiResponse(response, function (jsonValue) {
                                return jsonValue.map(models_1.InboxFromJSON);
                            })];
                }
            });
        });
    };
    /**
     * List the inboxes you have created
     * List Inboxes / Email Addresses
     */
    InboxControllerApi.prototype.getInboxes = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getInboxesRaw()];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Send an email from an inbox\'s email address.  The request body should contain the `SendEmailOptions` that include recipients, attachments, body etc. See `SendEmailOptions` for all available properties. Note the `inboxId` refers to the inbox\'s id not the inbox\'s email address. See https://www.mailslurp.com/guides/ for more information on how to send emails.
     * Send Email
     */
    InboxControllerApi.prototype.sendEmailRaw = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (requestParameters.inboxId === null ||
                            requestParameters.inboxId === undefined) {
                            throw new runtime.RequiredError('inboxId', 'Required parameter requestParameters.inboxId was null or undefined when calling sendEmail.');
                        }
                        queryParameters = {};
                        headerParameters = {};
                        headerParameters['Content-Type'] = 'application/json';
                        if (this.configuration && this.configuration.apiKey) {
                            headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
                        }
                        return [4 /*yield*/, this.request({
                                path: "/inboxes/{inboxId}".replace("{" + 'inboxId' + "}", encodeURIComponent(String(requestParameters.inboxId))),
                                method: 'POST',
                                headers: headerParameters,
                                query: queryParameters,
                                body: models_1.SendEmailOptionsToJSON(requestParameters.sendEmailOptions),
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, new runtime.VoidApiResponse(response)];
                }
            });
        });
    };
    /**
     * Send an email from an inbox\'s email address.  The request body should contain the `SendEmailOptions` that include recipients, attachments, body etc. See `SendEmailOptions` for all available properties. Note the `inboxId` refers to the inbox\'s id not the inbox\'s email address. See https://www.mailslurp.com/guides/ for more information on how to send emails.
     * Send Email
     */
    InboxControllerApi.prototype.sendEmail = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.sendEmailRaw(requestParameters)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Set and return new favourite state for an inbox
     * Set inbox favourited state
     */
    InboxControllerApi.prototype.setInboxFavouritedRaw = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (requestParameters.inboxId === null ||
                            requestParameters.inboxId === undefined) {
                            throw new runtime.RequiredError('inboxId', 'Required parameter requestParameters.inboxId was null or undefined when calling setInboxFavourited.');
                        }
                        if (requestParameters.setInboxFavouritedOptions === null ||
                            requestParameters.setInboxFavouritedOptions === undefined) {
                            throw new runtime.RequiredError('setInboxFavouritedOptions', 'Required parameter requestParameters.setInboxFavouritedOptions was null or undefined when calling setInboxFavourited.');
                        }
                        queryParameters = {};
                        headerParameters = {};
                        headerParameters['Content-Type'] = 'application/json';
                        if (this.configuration && this.configuration.apiKey) {
                            headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
                        }
                        return [4 /*yield*/, this.request({
                                path: "/inboxes/{inboxId}/favourite".replace("{" + 'inboxId' + "}", encodeURIComponent(String(requestParameters.inboxId))),
                                method: 'PUT',
                                headers: headerParameters,
                                query: queryParameters,
                                body: models_1.SetInboxFavouritedOptionsToJSON(requestParameters.setInboxFavouritedOptions),
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, new runtime.JSONApiResponse(response, function (jsonValue) {
                                return models_1.InboxFromJSON(jsonValue);
                            })];
                }
            });
        });
    };
    /**
     * Set and return new favourite state for an inbox
     * Set inbox favourited state
     */
    InboxControllerApi.prototype.setInboxFavourited = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.setInboxFavouritedRaw(requestParameters)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Update editable fields on an inbox
     * Update Inbox
     */
    InboxControllerApi.prototype.updateInboxRaw = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (requestParameters.inboxId === null ||
                            requestParameters.inboxId === undefined) {
                            throw new runtime.RequiredError('inboxId', 'Required parameter requestParameters.inboxId was null or undefined when calling updateInbox.');
                        }
                        if (requestParameters.updateInboxOptions === null ||
                            requestParameters.updateInboxOptions === undefined) {
                            throw new runtime.RequiredError('updateInboxOptions', 'Required parameter requestParameters.updateInboxOptions was null or undefined when calling updateInbox.');
                        }
                        queryParameters = {};
                        headerParameters = {};
                        headerParameters['Content-Type'] = 'application/json';
                        if (this.configuration && this.configuration.apiKey) {
                            headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
                        }
                        return [4 /*yield*/, this.request({
                                path: "/inboxes/{inboxId}".replace("{" + 'inboxId' + "}", encodeURIComponent(String(requestParameters.inboxId))),
                                method: 'PATCH',
                                headers: headerParameters,
                                query: queryParameters,
                                body: models_1.UpdateInboxOptionsToJSON(requestParameters.updateInboxOptions),
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, new runtime.JSONApiResponse(response, function (jsonValue) {
                                return models_1.InboxFromJSON(jsonValue);
                            })];
                }
            });
        });
    };
    /**
     * Update editable fields on an inbox
     * Update Inbox
     */
    InboxControllerApi.prototype.updateInbox = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.updateInboxRaw(requestParameters)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return InboxControllerApi;
}(runtime.BaseAPI));
exports.InboxControllerApi = InboxControllerApi;
/**
 * @export
 * @enum {string}
 */
var GetAllInboxesSortEnum;
(function (GetAllInboxesSortEnum) {
    GetAllInboxesSortEnum["ASC"] = "ASC";
    GetAllInboxesSortEnum["DESC"] = "DESC";
})(GetAllInboxesSortEnum = exports.GetAllInboxesSortEnum || (exports.GetAllInboxesSortEnum = {}));
/**
 * @export
 * @enum {string}
 */
var GetEmailsSortEnum;
(function (GetEmailsSortEnum) {
    GetEmailsSortEnum["ASC"] = "ASC";
    GetEmailsSortEnum["DESC"] = "DESC";
})(GetEmailsSortEnum = exports.GetEmailsSortEnum || (exports.GetEmailsSortEnum = {}));
/**
 * @export
 * @enum {string}
 */
var GetInboxEmailsPaginatedSortEnum;
(function (GetInboxEmailsPaginatedSortEnum) {
    GetInboxEmailsPaginatedSortEnum["ASC"] = "ASC";
    GetInboxEmailsPaginatedSortEnum["DESC"] = "DESC";
})(GetInboxEmailsPaginatedSortEnum = exports.GetInboxEmailsPaginatedSortEnum || (exports.GetInboxEmailsPaginatedSortEnum = {}));
