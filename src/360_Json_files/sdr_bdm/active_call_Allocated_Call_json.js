 
 
 
 
const HEADER = {
  type: CONTAINER_365,
  className: "homeHeader",
  
  children: [
    {
      type: "PAGE_HEADER",
      url: "/",
      image: "Dashboard",
      title: "dashBoard",
      titleMobile: "Dashboard",
      className: "page_header_comp",
    },
    {
      dataKey: "data_Key",
      label: "searchHere",
      name: "searchHere",
      requiredErrorMessage: "",
      type: "TEXT_INPUT",
    },
    
  ],
};

//menu item of sidebar
const MENU_ITEMS = [
  {
    name: "Home",
    path: "/",
    icon: "HOME_logo",
  },
  {
    name: "dashBoard",
    path: "/dashBoard",
    icon: "DASHBOARD",
  },
  {
    name: "sales",
    path: "/sales",
    icon: "sales",
    subItems:[
     {
      name:"sale1",
      Route:"/Activecall"
     },
     {
      name:"sale2",
      Route:"/RecordedCall"
     }

    ]
  },
  {
    name: "Call",
    path: "/call",
    icon: "Call",
    subItems:[
      {
        name:"Active Call",
        Route:"Activecall"
       },
       {
        name:"Recorded Call",
        Route:"/RecordedCall"
       }
    ]
  },
];

export const Active_Call_Allocated_Call_Screen = {
  name: "active_call_allocated_call_screen",
  children: [
    HEADER,
    {
      type: SIDE_MENU_365,
      items: MENU_ITEMS,
      className: "menu_comp",
      text: "Menu",
    },
    {
      type: "CONTAINER",
      name: "Scheduled Calls",
      children: [
        {
          type: SELECT,
          className: "select-name-button",
          sliceName: "filter",
          name: "Company Name",
          defaultValue: { label: "ABCcorp" },
          options: [{ label: "ABCcorp", value: "DBCcorp" }],
          onClickApi: "API_ENDPOINTS[GET_SEARCH_RESULT]",
          onClickApiMethod: "POST",
        },
        {
          type: SELECT,
          className: "select-filter-button",
          sliceName: "filter",
          name: "Product/Service",
          defaultValue: { label: "Product A", value: "Product b" },
          options: [{ label: "Product A", value: "Product b" }],
          onClickApi: "API_ENDPOINTS[GET_SEARCH_RESULT]",
          onClickApiMethod: "POST",
        },
        {
          type: SELECT,
          className: "select-meeting-button",
          sliceName: "filter",
          name: "Meeting Owner",
          defaultValue: { label: "John", value: "john" },
          options: [{ label: "Jhon", value: "john" }],
          onClickApi: "API_ENDPOINTS[GET_SEARCH_RESULT]",
          onClickApiMethod: "POST",
        },
        {
          type: SELECT,
          className: "select-meeting-button",
          sliceName: "filter",
          name: "Meeting Type",
          defaultValue: { label: "Demo Call", value: "demoCall" },
          options: [{ label: "Demo call", value: "demoCall" }],
          onClickApi: "API_ENDPOINTS[GET_SEARCH_RESULT]",
          onClickApiMethod: "POST",
        },
        {
          type: SELECT,
          className: "select-location-button",
          sliceName: "filter",
          name: "Location",
          defaultValue: { label: "Zoom", value: "zoom" },
          options: [{ label: "Zoom", value: "zoom" }],
          onClickApi: "API_ENDPOINTS[GET_SEARCH_RESULT]",
          onClickApiMethod: "POST",
        },
        {
          type: SELECT,
          className: "select-call-disposition-button",
          sliceName: "filter",
          name: "Call Disposition",
          defaultValue: {
            label: "Call Desposition",
            value: "callDisposition",
          },
          options: [{ label: "Call Desposition", value: "callDisposition" }],
          onClickApi: "API_ENDPOINTS[GET_SEARCH_RESULT]",
          onClickApiMethod: "POST",
        },
        {
          type: LOGIN_REFRESH,
          name: "",
          className: "",
          children: [
            {
              type: CONTAINER,
              name: "",
              className: "",
              children: [
                {
                  type: DASHBOARD_LISTING,
                  data: {},
                  desktopHeaders: {
                    "Call ID": "callId",
                    "Call Title": "callTitle",
                    "Lead Id": "leadId",
                    "Lead Title": "leadTitle",
                    Participants: "participants",
                    "Call Owner": "callOwner",
                    "Team Manager": "teamManager",
                    "Client POC": "clientPOC",
                    "Company Name": "companyName",
                    "Call Date And Time": "callDateTime",
                    "Product/Service": "productOrService",
                    "Call Duration": "callDuration",
                    "Call Disposition": "callDisposition",
                    "Call Type": "callType",
                    "Call Score": "callScore",
                    "Call Review Type": "callReviewType",
                    "Call Review Statys": "callReviewStatus",
                    "Close Date": "closeDate",
                    "Allocated On": "allocatedOn",
                    "Review Due Date": "reviewDueDate",
                    "Last Updated On": "lastUpdatedOn",
                  },
                  mobileHeaders: {
                    "Call ID": "callId",
                    "Call Title": "callTitle",
                    "Lead Id": "leadId",
                    "Lead Title": "leadTitle",
                    Participants: "participants",
                    "Call Owner": "callOwner",
                    "Team Manager": "teamManager",
                    "Client POC": "clientPOC",
                    "Company Name": "companyName",
                    "Call Date And Time": "callDateTime",
                    "Product/Service": "productOrService",
                    "Call Duration": "callDuration",
                    "Call Disposition": "callDisposition",
                    "Call Type": "callType",
                    "Call Score": "callScore",
                    "Call Review Type": "callReviewType",
                    "Call Review Statys": "callReviewStatus",
                    "Close Date": "closeDate",
                    "Allocated On": "allocatedOn",
                    "Review Due Date": "reviewDueDate",
                    "Last Updated On": "lastUpdatedOn",
                  },

                  fieldConst: "newPropertyConst",
                  editApi: "ALTER_ACTIVE_CALL_SCHEDULED_CALL_DATA",
                  deleteApi: "DELETE_ACTIVE_CALL_SCHEDULED_CALL_DATA",
                  getDataApi: "GET_ACTIVE_CALL_SCHEDULED_CALL",
                  approveApi: "APPROVE_ACTIVE_CALL_SCHEDULED_CALL_DATA",
                  endpoint: "API_ENDPOINTS[GET_ACTIVE_CALL_SCHEDULED_CALL]",
                  dataPoint: "GET_ACTIVE_CALL_SCHEDULED_CALL",
                  onRefreshApiType: POST,
                  disableRowModal: true,
                  showPreviewButton: true,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
