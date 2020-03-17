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
var EmailControllerApi = /** @class */ (function (_super) {
    __extends(EmailControllerApi, _super);
    function EmailControllerApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Deletes all emails in your account. Be careful as emails cannot be recovered
     * Delete all emails
     */
    EmailControllerApi.prototype.deleteAllEmailsRaw = function () {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryParameters = {};
                        headerParameters = {};
                        if (this.configuration && this.configuration.apiKey) {
                            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
                        }
                        return [4 /*yield*/, this.request({
                                path: "/emails",
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
     * Deletes all emails in your account. Be careful as emails cannot be recovered
     * Delete all emails
     */
    EmailControllerApi.prototype.deleteAllEmails = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.deleteAllEmailsRaw()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Deletes an email and removes it from the inbox. Deleted emails cannot be recovered.
     * Delete an email
     */
    EmailControllerApi.prototype.deleteEmailRaw = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (requestParameters.emailId === null || requestParameters.emailId === undefined) {
                            throw new runtime.RequiredError('emailId', 'Required parameter requestParameters.emailId was null or undefined when calling deleteEmail.');
                        }
                        queryParameters = {};
                        headerParameters = {};
                        if (this.configuration && this.configuration.apiKey) {
                            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
                        }
                        return [4 /*yield*/, this.request({
                                path: "/emails/{emailId}".replace("{" + "emailId" + "}", encodeURIComponent(String(requestParameters.emailId))),
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
     * Deletes an email and removes it from the inbox. Deleted emails cannot be recovered.
     * Delete an email
     */
    EmailControllerApi.prototype.deleteEmail = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.deleteEmailRaw(requestParameters)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Returns the specified attachment for a given email as a byte stream (file download). You can find attachment ids in email responses endpoint responses. The response type is application/octet-stream.
     * Get email attachment bytes
     */
    EmailControllerApi.prototype.downloadAttachmentRaw = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (requestParameters.attachmentId === null || requestParameters.attachmentId === undefined) {
                            throw new runtime.RequiredError('attachmentId', 'Required parameter requestParameters.attachmentId was null or undefined when calling downloadAttachment.');
                        }
                        if (requestParameters.emailId === null || requestParameters.emailId === undefined) {
                            throw new runtime.RequiredError('emailId', 'Required parameter requestParameters.emailId was null or undefined when calling downloadAttachment.');
                        }
                        queryParameters = {};
                        if (requestParameters.apiKey !== undefined) {
                            queryParameters['apiKey'] = requestParameters.apiKey;
                        }
                        headerParameters = {};
                        if (this.configuration && this.configuration.apiKey) {
                            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
                        }
                        return [4 /*yield*/, this.request({
                                path: "/emails/{emailId}/attachments/{attachmentId}".replace("{" + "attachmentId" + "}", encodeURIComponent(String(requestParameters.attachmentId))).replace("{" + "emailId" + "}", encodeURIComponent(String(requestParameters.emailId))),
                                method: 'GET',
                                headers: headerParameters,
                                query: queryParameters,
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, new runtime.TextApiResponse(response)];
                }
            });
        });
    };
    /**
     * Returns the specified attachment for a given email as a byte stream (file download). You can find attachment ids in email responses endpoint responses. The response type is application/octet-stream.
     * Get email attachment bytes
     */
    EmailControllerApi.prototype.downloadAttachment = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.downloadAttachmentRaw(requestParameters)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Forward an existing email to new recipients.
     * Forward email
     */
    EmailControllerApi.prototype.forwardEmailRaw = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (requestParameters.emailId === null || requestParameters.emailId === undefined) {
                            throw new runtime.RequiredError('emailId', 'Required parameter requestParameters.emailId was null or undefined when calling forwardEmail.');
                        }
                        if (requestParameters.forwardEmailOptions === null || requestParameters.forwardEmailOptions === undefined) {
                            throw new runtime.RequiredError('forwardEmailOptions', 'Required parameter requestParameters.forwardEmailOptions was null or undefined when calling forwardEmail.');
                        }
                        queryParameters = {};
                        headerParameters = {};
                        headerParameters['Content-Type'] = 'application/json';
                        if (this.configuration && this.configuration.apiKey) {
                            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
                        }
                        return [4 /*yield*/, this.request({
                                path: "/emails/{emailId}/forward".replace("{" + "emailId" + "}", encodeURIComponent(String(requestParameters.emailId))),
                                method: 'POST',
                                headers: headerParameters,
                                query: queryParameters,
                                body: models_1.ForwardEmailOptionsToJSON(requestParameters.forwardEmailOptions),
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, new runtime.VoidApiResponse(response)];
                }
            });
        });
    };
    /**
     * Forward an existing email to new recipients.
     * Forward email
     */
    EmailControllerApi.prototype.forwardEmail = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.forwardEmailRaw(requestParameters)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Returns the metadata such as name and content-type for a given attachment and email.
     * Get email attachment metadata
     */
    EmailControllerApi.prototype.getAttachmentMetaDataRaw = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (requestParameters.attachmentId === null || requestParameters.attachmentId === undefined) {
                            throw new runtime.RequiredError('attachmentId', 'Required parameter requestParameters.attachmentId was null or undefined when calling getAttachmentMetaData.');
                        }
                        if (requestParameters.emailId === null || requestParameters.emailId === undefined) {
                            throw new runtime.RequiredError('emailId', 'Required parameter requestParameters.emailId was null or undefined when calling getAttachmentMetaData.');
                        }
                        queryParameters = {};
                        headerParameters = {};
                        if (this.configuration && this.configuration.apiKey) {
                            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
                        }
                        return [4 /*yield*/, this.request({
                                path: "/emails/{emailId}/attachments/{attachmentId}/metadata".replace("{" + "attachmentId" + "}", encodeURIComponent(String(requestParameters.attachmentId))).replace("{" + "emailId" + "}", encodeURIComponent(String(requestParameters.emailId))),
                                method: 'GET',
                                headers: headerParameters,
                                query: queryParameters,
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, new runtime.JSONApiResponse(response, function (jsonValue) { return models_1.AttachmentMetaDataFromJSON(jsonValue); })];
                }
            });
        });
    };
    /**
     * Returns the metadata such as name and content-type for a given attachment and email.
     * Get email attachment metadata
     */
    EmailControllerApi.prototype.getAttachmentMetaData = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAttachmentMetaDataRaw(requestParameters)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Returns an array of attachment metadata such as name and content-type for a given email if present.
     * Get all email attachment metadata
     */
    EmailControllerApi.prototype.getAttachmentsRaw = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (requestParameters.emailId === null || requestParameters.emailId === undefined) {
                            throw new runtime.RequiredError('emailId', 'Required parameter requestParameters.emailId was null or undefined when calling getAttachments.');
                        }
                        queryParameters = {};
                        headerParameters = {};
                        if (this.configuration && this.configuration.apiKey) {
                            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
                        }
                        return [4 /*yield*/, this.request({
                                path: "/emails/{emailId}/attachments".replace("{" + "emailId" + "}", encodeURIComponent(String(requestParameters.emailId))),
                                method: 'GET',
                                headers: headerParameters,
                                query: queryParameters,
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, new runtime.JSONApiResponse(response, function (jsonValue) { return jsonValue.map(models_1.AttachmentMetaDataFromJSON); })];
                }
            });
        });
    };
    /**
     * Returns an array of attachment metadata such as name and content-type for a given email if present.
     * Get all email attachment metadata
     */
    EmailControllerApi.prototype.getAttachments = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAttachmentsRaw(requestParameters)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Returns a email summary object with headers and content. To retrieve the raw unparsed email use the getRawEmail endpoints
     * Get email content
     */
    EmailControllerApi.prototype.getEmailRaw = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (requestParameters.emailId === null || requestParameters.emailId === undefined) {
                            throw new runtime.RequiredError('emailId', 'Required parameter requestParameters.emailId was null or undefined when calling getEmail.');
                        }
                        queryParameters = {};
                        if (requestParameters.decode !== undefined) {
                            queryParameters['decode'] = requestParameters.decode;
                        }
                        headerParameters = {};
                        if (this.configuration && this.configuration.apiKey) {
                            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
                        }
                        return [4 /*yield*/, this.request({
                                path: "/emails/{emailId}".replace("{" + "emailId" + "}", encodeURIComponent(String(requestParameters.emailId))),
                                method: 'GET',
                                headers: headerParameters,
                                query: queryParameters,
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, new runtime.JSONApiResponse(response, function (jsonValue) { return models_1.EmailFromJSON(jsonValue); })];
                }
            });
        });
    };
    /**
     * Returns a email summary object with headers and content. To retrieve the raw unparsed email use the getRawEmail endpoints
     * Get email content
     */
    EmailControllerApi.prototype.getEmail = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getEmailRaw(requestParameters)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Retrieve email content as HTML response for viewing in browsers. Decodes quoted-printable entities and converts charset to UTF-8. Pass your API KEY as a request parameter when viewing in a browser: `?apiKey=xxx`
     * Get email content as HTML
     */
    EmailControllerApi.prototype.getEmailHTMLRaw = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (requestParameters.emailId === null || requestParameters.emailId === undefined) {
                            throw new runtime.RequiredError('emailId', 'Required parameter requestParameters.emailId was null or undefined when calling getEmailHTML.');
                        }
                        queryParameters = {};
                        if (requestParameters.decode !== undefined) {
                            queryParameters['decode'] = requestParameters.decode;
                        }
                        headerParameters = {};
                        if (this.configuration && this.configuration.apiKey) {
                            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
                        }
                        return [4 /*yield*/, this.request({
                                path: "/emails/{emailId}/html".replace("{" + "emailId" + "}", encodeURIComponent(String(requestParameters.emailId))),
                                method: 'GET',
                                headers: headerParameters,
                                query: queryParameters,
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, new runtime.TextApiResponse(response)];
                }
            });
        });
    };
    /**
     * Retrieve email content as HTML response for viewing in browsers. Decodes quoted-printable entities and converts charset to UTF-8. Pass your API KEY as a request parameter when viewing in a browser: `?apiKey=xxx`
     * Get email content as HTML
     */
    EmailControllerApi.prototype.getEmailHTML = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getEmailHTMLRaw(requestParameters)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * By default returns all emails across all inboxes sorted by ascending created at date. Responses are paginated. You can restrict results to a list of inbox IDs. You can also filter out read messages
     * Get all emails
     */
    EmailControllerApi.prototype.getEmailsPaginatedRaw = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryParameters = {};
                        if (requestParameters.inboxId) {
                            queryParameters['inboxId'] = requestParameters.inboxId;
                        }
                        if (requestParameters.page !== undefined) {
                            queryParameters['page'] = requestParameters.page;
                        }
                        if (requestParameters.size !== undefined) {
                            queryParameters['size'] = requestParameters.size;
                        }
                        if (requestParameters.sort !== undefined) {
                            queryParameters['sort'] = requestParameters.sort;
                        }
                        if (requestParameters.unreadOnly !== undefined) {
                            queryParameters['unreadOnly'] = requestParameters.unreadOnly;
                        }
                        headerParameters = {};
                        if (this.configuration && this.configuration.apiKey) {
                            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
                        }
                        return [4 /*yield*/, this.request({
                                path: "/emails",
                                method: 'GET',
                                headers: headerParameters,
                                query: queryParameters,
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, new runtime.JSONApiResponse(response, function (jsonValue) { return models_1.PageEmailProjectionFromJSON(jsonValue); })];
                }
            });
        });
    };
    /**
     * By default returns all emails across all inboxes sorted by ascending created at date. Responses are paginated. You can restrict results to a list of inbox IDs. You can also filter out read messages
     * Get all emails
     */
    EmailControllerApi.prototype.getEmailsPaginated = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getEmailsPaginatedRaw(requestParameters)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Returns a raw, unparsed, and unprocessed email. If your client has issues processing the response it is likely due to the response content-type which is text/plain. If you need a JSON response content-type use the getRawEmailJson endpoint
     * Get raw email string
     */
    EmailControllerApi.prototype.getRawEmailContentsRaw = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (requestParameters.emailId === null || requestParameters.emailId === undefined) {
                            throw new runtime.RequiredError('emailId', 'Required parameter requestParameters.emailId was null or undefined when calling getRawEmailContents.');
                        }
                        queryParameters = {};
                        headerParameters = {};
                        if (this.configuration && this.configuration.apiKey) {
                            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
                        }
                        return [4 /*yield*/, this.request({
                                path: "/emails/{emailId}/raw".replace("{" + "emailId" + "}", encodeURIComponent(String(requestParameters.emailId))),
                                method: 'GET',
                                headers: headerParameters,
                                query: queryParameters,
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, new runtime.TextApiResponse(response)];
                }
            });
        });
    };
    /**
     * Returns a raw, unparsed, and unprocessed email. If your client has issues processing the response it is likely due to the response content-type which is text/plain. If you need a JSON response content-type use the getRawEmailJson endpoint
     * Get raw email string
     */
    EmailControllerApi.prototype.getRawEmailContents = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getRawEmailContentsRaw(requestParameters)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Returns a raw, unparsed, and unprocessed email wrapped in a JSON response object for easier handling when compared with the getRawEmail text/plain response
     * Get raw email in JSON
     */
    EmailControllerApi.prototype.getRawEmailJsonRaw = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (requestParameters.emailId === null || requestParameters.emailId === undefined) {
                            throw new runtime.RequiredError('emailId', 'Required parameter requestParameters.emailId was null or undefined when calling getRawEmailJson.');
                        }
                        queryParameters = {};
                        headerParameters = {};
                        if (this.configuration && this.configuration.apiKey) {
                            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
                        }
                        return [4 /*yield*/, this.request({
                                path: "/emails/{emailId}/raw/json".replace("{" + "emailId" + "}", encodeURIComponent(String(requestParameters.emailId))),
                                method: 'GET',
                                headers: headerParameters,
                                query: queryParameters,
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, new runtime.JSONApiResponse(response, function (jsonValue) { return models_1.RawEmailJsonFromJSON(jsonValue); })];
                }
            });
        });
    };
    /**
     * Returns a raw, unparsed, and unprocessed email wrapped in a JSON response object for easier handling when compared with the getRawEmail text/plain response
     * Get raw email in JSON
     */
    EmailControllerApi.prototype.getRawEmailJson = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getRawEmailJsonRaw(requestParameters)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Get number of emails unread
     * Get unread email count
     */
    EmailControllerApi.prototype.getUnreadEmailCountRaw = function () {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryParameters = {};
                        headerParameters = {};
                        if (this.configuration && this.configuration.apiKey) {
                            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
                        }
                        return [4 /*yield*/, this.request({
                                path: "/emails/unreadCount",
                                method: 'GET',
                                headers: headerParameters,
                                query: queryParameters,
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, new runtime.JSONApiResponse(response, function (jsonValue) { return models_1.UnreadCountFromJSON(jsonValue); })];
                }
            });
        });
    };
    /**
     * Get number of emails unread
     * Get unread email count
     */
    EmailControllerApi.prototype.getUnreadEmailCount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getUnreadEmailCountRaw()];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Validate the HTML content of email if HTML is found. Considered valid if no HTML.
     * Validate email
     */
    EmailControllerApi.prototype.validateEmailRaw = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (requestParameters.emailId === null || requestParameters.emailId === undefined) {
                            throw new runtime.RequiredError('emailId', 'Required parameter requestParameters.emailId was null or undefined when calling validateEmail.');
                        }
                        queryParameters = {};
                        headerParameters = {};
                        if (this.configuration && this.configuration.apiKey) {
                            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
                        }
                        return [4 /*yield*/, this.request({
                                path: "/emails/{emailId}/validate".replace("{" + "emailId" + "}", encodeURIComponent(String(requestParameters.emailId))),
                                method: 'POST',
                                headers: headerParameters,
                                query: queryParameters,
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, new runtime.JSONApiResponse(response, function (jsonValue) { return models_1.ValidationDtoFromJSON(jsonValue); })];
                }
            });
        });
    };
    /**
     * Validate the HTML content of email if HTML is found. Considered valid if no HTML.
     * Validate email
     */
    EmailControllerApi.prototype.validateEmail = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.validateEmailRaw(requestParameters)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return EmailControllerApi;
}(runtime.BaseAPI));
exports.EmailControllerApi = EmailControllerApi;
/**
    * @export
    * @enum {string}
    */
var GetEmailsPaginatedSortEnum;
(function (GetEmailsPaginatedSortEnum) {
    GetEmailsPaginatedSortEnum["ASC"] = "ASC";
    GetEmailsPaginatedSortEnum["DESC"] = "DESC";
})(GetEmailsPaginatedSortEnum = exports.GetEmailsPaginatedSortEnum || (exports.GetEmailsPaginatedSortEnum = {}));
