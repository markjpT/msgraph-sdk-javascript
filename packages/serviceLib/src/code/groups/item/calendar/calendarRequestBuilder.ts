import {Calendar} from '../../../models/microsoft/graph/';
import {AllowedCalendarSharingRolesWithUserRequestBuilder} from './allowedCalendarSharingRolesWithUser/';
import {CalendarPermissionsRequestBuilder} from './calendarPermissions/';
import {CalendarPermissionItemRequestBuilder} from './calendarPermissions/item/';
import {CalendarViewRequestBuilder} from './calendarView/';
import {EventItemRequestBuilder as i488710905421f7854d26da34eabd1645586018a6b1b71fcd4ef86b53a5f5d688} from './calendarView/item/';
import {EventsRequestBuilder} from './events/';
import {EventItemRequestBuilder as i0e379969bebb6618247d6f40e0602bd08ea87a0254af1bb0b8972f57a69375be} from './events/item/';
import {GetScheduleRequestBuilder} from './getSchedule/';
import {MultiValueExtendedPropertiesRequestBuilder} from './multiValueExtendedProperties/';
import {MultiValueLegacyExtendedPropertyItemRequestBuilder} from './multiValueExtendedProperties/item/';
import {SingleValueExtendedPropertiesRequestBuilder} from './singleValueExtendedProperties/';
import {SingleValueLegacyExtendedPropertyItemRequestBuilder} from './singleValueExtendedProperties/item/';
import {getPathParameters, HttpMethod, Parsable, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /groups/{group-id}/calendar  */
export class CalendarRequestBuilder {
    public get calendarPermissions(): CalendarPermissionsRequestBuilder {
        return new CalendarPermissionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get calendarView(): CalendarViewRequestBuilder {
        return new CalendarViewRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get events(): EventsRequestBuilder {
        return new EventsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get getSchedule(): GetScheduleRequestBuilder {
        return new GetScheduleRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get multiValueExtendedProperties(): MultiValueExtendedPropertiesRequestBuilder {
        return new MultiValueExtendedPropertiesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request  */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    public get singleValueExtendedProperties(): SingleValueExtendedPropertiesRequestBuilder {
        return new SingleValueExtendedPropertiesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    /**
     * Builds and executes requests for operations under /groups/{group-id}/calendar/microsoft.graph.allowedCalendarSharingRoles(User='{User}')
     * @param User Usage: User={User}
     * @returns a allowedCalendarSharingRolesWithUserRequestBuilder
     */
    public allowedCalendarSharingRolesWithUser(user: string | undefined) : AllowedCalendarSharingRolesWithUserRequestBuilder {
        if(!user) throw new Error("user cannot be undefined");
        return new AllowedCalendarSharingRolesWithUserRequestBuilder(this.pathParameters, this.requestAdapter, user);
    };
    /**
     * Gets an item from the MicrosoftGraph.groups.item.calendar.calendarPermissions.item collection
     * @param id Unique identifier of the item
     * @returns a calendarPermissionItemRequestBuilder
     */
    public calendarPermissionsById(id: string) : CalendarPermissionItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["calendarPermission_id"] = id
        return new CalendarPermissionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.groups.item.calendar.calendarView.item collection
     * @param id Unique identifier of the item
     * @returns a eventItemRequestBuilder
     */
    public calendarViewById(id: string) : i488710905421f7854d26da34eabd1645586018a6b1b71fcd4ef86b53a5f5d688 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["event_id"] = id
        return new i488710905421f7854d26da34eabd1645586018a6b1b71fcd4ef86b53a5f5d688(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new CalendarRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/groups/{group_id}/calendar{?select}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * The group's calendar. Read-only.
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        if(h) requestInfo.headers = h;
        o && requestInfo.addRequestOptions(o);
        return requestInfo;
    };
    /**
     * The group's calendar. Read-only.
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @returns a RequestInformation
     */
    public createGetRequestInformation(q?: {
                    select?: string[]
                    } | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        if(h) requestInfo.headers = h;
        q && requestInfo.setQueryStringParametersFromRawObject(q);
        o && requestInfo.addRequestOptions(o);
        return requestInfo;
    };
    /**
     * The group's calendar. Read-only.
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: Calendar | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        if(h) requestInfo.headers = h;
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        o && requestInfo.addRequestOptions(o);
        return requestInfo;
    };
    /**
     * The group's calendar. Read-only.
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            h, o
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the MicrosoftGraph.groups.item.calendar.events.item collection
     * @param id Unique identifier of the item
     * @returns a eventItemRequestBuilder
     */
    public eventsById(id: string) : i0e379969bebb6618247d6f40e0602bd08ea87a0254af1bb0b8972f57a69375be {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["event_id"] = id
        return new i0e379969bebb6618247d6f40e0602bd08ea87a0254af1bb0b8972f57a69375be(urlTplParams, this.requestAdapter);
    };
    /**
     * The group's calendar. Read-only.
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Calendar
     */
    public get(q?: {
                    select?: string[]
                    } | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Calendar | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.requestAdapter?.sendAsync<Calendar>(requestInfo, Calendar, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the MicrosoftGraph.groups.item.calendar.multiValueExtendedProperties.item collection
     * @param id Unique identifier of the item
     * @returns a multiValueLegacyExtendedPropertyItemRequestBuilder
     */
    public multiValueExtendedPropertiesById(id: string) : MultiValueLegacyExtendedPropertyItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["multiValueLegacyExtendedProperty_id"] = id
        return new MultiValueLegacyExtendedPropertyItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * The group's calendar. Read-only.
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: Calendar | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the MicrosoftGraph.groups.item.calendar.singleValueExtendedProperties.item collection
     * @param id Unique identifier of the item
     * @returns a singleValueLegacyExtendedPropertyItemRequestBuilder
     */
    public singleValueExtendedPropertiesById(id: string) : SingleValueLegacyExtendedPropertyItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["singleValueLegacyExtendedProperty_id"] = id
        return new SingleValueLegacyExtendedPropertyItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
}
