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
var BulkActionsControllerApi = /** @class */ (function (_super) {
    __extends(BulkActionsControllerApi, _super);
    function BulkActionsControllerApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Bulk create Inboxes (email addresses)
     */
    BulkActionsControllerApi.prototype.bulkCreateInboxesRaw = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (requestParameters.count === null || requestParameters.count === undefined) {
                            throw new runtime.RequiredError('count', 'Required parameter requestParameters.count was null or undefined when calling bulkCreateInboxes.');
                        }
                        queryParameters = {};
                        if (requestParameters.count !== undefined) {
                            queryParameters['count'] = requestParameters.count;
                        }
                        headerParameters = {};
                        if (this.configuration && this.configuration.apiKey) {
                            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
                        }
                        return [4 /*yield*/, this.request({
                                path: "/bulk/inboxes",
                                method: 'POST',
                                headers: headerParameters,
                                query: queryParameters,
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, new runtime.JSONApiResponse(response, function (jsonValue) { return jsonValue.map(models_1.InboxFromJSON); })];
                }
            });
        });
    };
    /**
     * Bulk create Inboxes (email addresses)
     */
    BulkActionsControllerApi.prototype.bulkCreateInboxes = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.bulkCreateInboxesRaw(requestParameters)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Bulk Delete Inboxes
     */
    BulkActionsControllerApi.prototype.bulkDeleteInboxesRaw = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (requestParameters.ids === null || requestParameters.ids === undefined) {
                            throw new runtime.RequiredError('ids', 'Required parameter requestParameters.ids was null or undefined when calling bulkDeleteInboxes.');
                        }
                        queryParameters = {};
                        headerParameters = {};
                        headerParameters['Content-Type'] = 'application/json';
                        if (this.configuration && this.configuration.apiKey) {
                            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
                        }
                        return [4 /*yield*/, this.request({
                                path: "/bulk/inboxes",
                                method: 'DELETE',
                                headers: headerParameters,
                                query: queryParameters,
                                body: requestParameters.ids,
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, new runtime.VoidApiResponse(response)];
                }
            });
        });
    };
    /**
     * Bulk Delete Inboxes
     */
    BulkActionsControllerApi.prototype.bulkDeleteInboxes = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.bulkDeleteInboxesRaw(requestParameters)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Bulk Send Emails
     */
    BulkActionsControllerApi.prototype.bulkSendEmailsRaw = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (requestParameters.bulkSendEmailOptions === null || requestParameters.bulkSendEmailOptions === undefined) {
                            throw new runtime.RequiredError('bulkSendEmailOptions', 'Required parameter requestParameters.bulkSendEmailOptions was null or undefined when calling bulkSendEmails.');
                        }
                        queryParameters = {};
                        headerParameters = {};
                        headerParameters['Content-Type'] = 'application/json';
                        if (this.configuration && this.configuration.apiKey) {
                            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
                        }
                        return [4 /*yield*/, this.request({
                                path: "/bulk/send",
                                method: 'POST',
                                headers: headerParameters,
                                query: queryParameters,
                                body: models_1.BulkSendEmailOptionsToJSON(requestParameters.bulkSendEmailOptions),
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, new runtime.VoidApiResponse(response)];
                }
            });
        });
    };
    /**
     * Bulk Send Emails
     */
    BulkActionsControllerApi.prototype.bulkSendEmails = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.bulkSendEmailsRaw(requestParameters)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return BulkActionsControllerApi;
}(runtime.BaseAPI));
exports.BulkActionsControllerApi = BulkActionsControllerApi;
