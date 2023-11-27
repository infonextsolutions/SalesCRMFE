import { CONTAINER, CONTAINER_365, DASHBOARD_LISTING, LOGIN_REFRESH, POST, SELECT, SIDE_MENU_365 } from "../../components/utils/Const";

const HEADER = {
  type: CONTAINER_365,
  className: "homeHeader",

  children: [
    {
      type: "PAGE_HEADER",
      url: "/",
      image: "Calls > Active Calls",
      title: "Calls > Active Calls",
      titleMobile: "Calls > Active Calls",
      className: "page_header_comp",
    },
    {
      dataKey: "data_Key",
      label: "searchHere",
      name: "searchHere",
      requiredErrorMessage: "",
      type: "TEXT_INPUT",
    },
    {
      name: "Notification",
      label: "notification",
      icon: " bell_notification",
      dataKey: "text",
      type: "click",
      isRequired: " True",
      requiredErrorMessage: ".",
    },
    {
      name: "user_profile",
      label: "User",
      icon: " user-icon",
      dataKey: "text",
      type: "click",
      isRequired: " True",
      requiredErrorMessage: ".",
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
  },
  {
    name: "Call",
    path: "/call",
    icon: "Call",
  },
  {
    name: "Indicators",
    path: "/Indicators",
    icon: "Indicators",
  },
  {
    name: "Team Manager",
    path: "/Team Manager",
    icon: "Team Manager",
  },
];


export const Active_calls_Scheduled_Calls = {
  name: "Active_Calls",

  children: [
    HEADER,

    {
      type: SIDE_MENU_365,
      items: MENU_ITEMS,
      className: "menu_comp",
      text: "Menu",
    },


    {
      type: "PAGES_365",
      Pageslist: [
        {
          name: "Scheduled Calls",
          children: [
            ///FETCH DATA OF COLUMN
            {
              type: "AUTO_FETCH_API_USER",
              api: "API_ENDPOINTS[GET_ACTIVE_CALLS_SCHEDULED_CALLS]",
              data: {
                sortType: "desc",
                sortColumn: "updatedAt"
              },
              method: POST,
              className: "header",
              user: true,
            },
            {
              dataKey: "text",
              label: "search leads",
              name: "search leads",
              icon: " search",
              requiredErrorMessage: "",
              type: "TEXT_INPUT",
            },
            {
              name: "Download",
              label: "Download",
              icon: " download",
              dataKey: "",
              type: "click",
              isRequired: " True",
              requiredErrorMessage: ".",
            },

            {
              type: SELECT,
              className: "select-company name-button",
              sliceName: "filter",
              name: "Company Name",
              defaultValue: { label: "ABCcorp" },
              options: [{ label: "ABCcorp", value: "DBCcorp" }],
              onClickApi: "API_ENDPOINTS[GET_SEARCH_RESULT]",
              onClickApiMethod: "POST",
            },
            {
              type: SELECT,
              className: "select-product/service-button",
              sliceName: "filter",
              name: "Product/service",
              defaultValue: { label: "Product A", value: "Product b" },
              options: [{ label: "Product A", value: "Product b" }],
              onClickApi: "API_ENDPOINTS[GET_SEARCH_RESULT]",
              onClickApiMethod: "POST",
            },
            {
              type: SELECT,
              className: "select-call owner-button",
              sliceName: "filter",
              name: "Call Owner",
              defaultValue: { label: "Jhon", value: "sam" },
              options: [{ label: "Jhon", value: "sam" }],
              onClickApi: "API_ENDPOINTS[GET_SEARCH_RESULT]",
              onClickApiMethod: "POST",
            },
            {
              type: SELECT,
              className: "select-call type-button",
              sliceName: "filter",
              name: "Call Type",
              defaultValue: { label: "Product Demo", value: " Product demo" },
              options: [{ label: "Product Demo", value: "Gurgaon" }],
              onClickApi: "API_ENDPOINTS[GET_SEARCH_RESULT]",
              onClickApiMethod: "POST",
            },
            {
              fromDate: {
                dataKey: "Call Date Start",
                label: "Call  Date Start",
                name: "Call Date Start",
                type: "DATE_PICKER"
              },
              toDate: {
                dataKey: "Call End Date",
                label: "Call End Date",
                name: "Call end Date",
                type: "DATE_PICKER"
              }
            },
            {
              dataKey: "data_Key",
              label: "date",
              name: "searchHere",
              requiredErrorMessage: "",
              type: "TEXT_INPUT",
              max: "",
              min: ""
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
                        "Call ID": "Call Id",
                        "Call Title": "Call Tile",
                        "Lead ID": "Lead ID ",
                        "Lead Title": "Lead Title",
                        "Company Name": "Company Name",
                        "Product/Service": "Product/Service",
                        "Participants": "Participants",
                        "Call Owner": "Call Owner  ",
                        "Call Type": "Call Type",
                        "Call Date & Time": "Call Date & Time",

                      },
                      mobileHeaders: {
                        "Call ID": "Call Id",
                        "Call Title": "Call Tile",
                        "Lead ID": "Lead ID ",
                        "Lead Title": "Lead Title",
                        "Company Name": "Company Name",
                        "Product/Service": "Product/Service",
                        "Participants": "Participants",
                        "Call Owner": "Call Owner  ",
                        "Call Type": "Call Type",
                        "Call Date & Time": "Call Date & Time",
                      },

                      fieldConst: "newPropertyConst",
                      editApi: "ALTER_ACTIVE_CALL_SCHEDULED_CALL_DATA",
                      deleteApi: "DELETE_ACTIVE_CALL_SCHEDULED_CALL_DATA",
                      getDataApi: "GET_ACTIVE_CALL_SCHEDULED_CALL",
                      approveApi: "APPROVE_ACTIVE_CALL_SCHEDULED_CALL_DATA",
                      endpoint: 'API_ENDPOINTS[GET_ACTIVE_CALL_SCHEDULED_CALL]',
                      dataPoint: "GET_ACTIVE_CALL_SCHEDULED_CALL",
                      onRefreshApiType: POST,
                      disableRowModal: true,
                      showPreviewButton: true
                    },
                  ],
                },
              ],
            },


          ]

        },


        //for   Scheduled meeting
        {
          name: "  Scheduled Meeting",
          children: [
            ///FETCH DATA OF COLUMN
            {
              type: "AUTO_FETCH_API_USER",
              api: "API_ENDPOINTS[GET_ACTIVE_CALLS_SCHEDULED_MEETINGS]",
              data: {
                sortType: "desc",
                sortColumn: "updatedAt"
              },
              method: POST,
              className: "header",
              user: true,
            },
            {
              dataKey: "text",
              label: "search leads",
              name: "search leads",
              icon: " search",
              requiredErrorMessage: "",
              type: "TEXT_INPUT",
            },
            {
              name: "Download",
              label: "Download",
              icon: " download",
              dataKey: "",
              type: "click",
              isRequired: " True",
              requiredErrorMessage: ".",
            },


            {
              type: SELECT,
              className: "select-company name-button",
              sliceName: "filter",
              name: "Company Name",
              defaultValue: { label: "ABCcorp" },
              options: [{ label: "ABCcorp", value: "DBCcorp" }],
              onClickApi: "API_ENDPOINTS[GET_SEARCH_RESULT]",
              onClickApiMethod: "POST",
            },
            {
              type: SELECT,
              className: "select-product/service-button",
              sliceName: "filter",
              name: "Product/service",
              defaultValue: { label: "Product A", value: "Product b" },
              options: [{ label: "Product A", value: "Product b" }],
              onClickApi: "API_ENDPOINTS[GET_SEARCH_RESULT]",
              onClickApiMethod: "POST",
            },
            {
              type: SELECT,
              className: "select-Meeting owner-button",
              sliceName: "filter",
              name: "Meeting Owner",
              defaultValue: { label: "Jhon", value: "sam" },
              options: [{ label: "Jhon", value: "sam" }],
              onClickApi: "API_ENDPOINTS[GET_SEARCH_RESULT]",
              onClickApiMethod: "POST",
            },
            {
              type: SELECT,
              className: "select-Meeting type-button",
              sliceName: "filter",
              name: "Meeting Type",
              defaultValue: { label: "Product Demo", value: " Product demo" },
              options: [{ label: "Product Demo", value: "Gurgaon" }],
              onClickApi: "API_ENDPOINTS[GET_SEARCH_RESULT]",
              onClickApiMethod: "POST",
            },
            {
              type: SELECT,
              className: "select-Location-button",
              sliceName: "filter",
              name: "Location",
              defaultValue: {
                label: "Location",
                value: "Zoom",
              }
            },
            {
              fromDate: {
                dataKey: "Call Date Start",
                label: "Call  Date Start",
                name: "Call Date Start",
                type: "DATE_PICKER"
              },
              toDate: {
                dataKey: "Call End Date",
                label: "Call End Date",
                name: "Call end Date",
                type: "DATE_PICKER"
              }
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
                        "Meeting ID": "Meeting Id",
                        "Meeting Title": "Meeting Tilte",
                        "Lead ID": "Lead ID ",
                        "Lead Title": "Lead Title",
                        "Company Name": "Company Name",
                        "Product/Service": "Product/Service",
                        "Participants": "Participants",
                        "Meeting Owner": "Call Owner  ",
                        "Meeting Type": "Call Type",
                        "Meeting Date & Time": "Call Date & Time",
                        "Duration": " Duration",
                        "Location": "Location",
                        "Joining Info ": " Joining Info",


                      },
                      mobileHeaders: {
                        "Meeting ID": "Meeting Id",
                        "Meeting Title": "Meeting Tilte",
                        "Lead ID": "Lead ID ",
                        "Lead Title": "Lead Title",
                        "Company Name": "Company Name",
                        "Product/Service": "Product/Service",
                        "Participants": "Participants",
                        "Meeting Owner": "Call Owner  ",
                        "Meeting Type": "Call Type",
                        "Meeting Date & Time": "Call Date & Time",
                        "Duration": " Duration",
                        "Location": "Location",
                        "Joining Info ": " Joining Info",


                      },

                      fieldConst: "newPropertyConst",
                      editApi: "ALTER_ACTIVE_CALLS_SCHEDULED_MEETINGS",
                      deleteApi: "DELETE_ACTIVE_CALLS_SCHEDULED_MEETINGS_DATA",
                      getDataApi: "GET_ACTIVE_CALLS_SCHEDULED_MEETINGS",
                      approveApi: "APPROVE_ACTIVE_CALLS_SCHEDULED_MEETINGS_DATA",
                      endpoint: 'API_ENDPOINTS[GET_ACTIVE_CALLS_SCHEDULED_MEETINGS]',
                      dataPoint: "GET_ACTIVE_CALLS_SCHEDULED_MEETINGS",
                      onRefreshApiType: POST,
                      disableRowModal: true,
                      showPreviewButton: true
                    },
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}