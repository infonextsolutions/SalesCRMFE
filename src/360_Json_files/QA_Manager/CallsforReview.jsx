import { API_BUTTON, AUTO_FETCH_API_USER, CONTAINER, CONTAINER_365, DASHBOARD_LISTING, GET_SEARCH_RESULT, HEADING, LOGIN_REFRESH, POST, SELECT, SIDE_MENU_365 } from "../../components/utils/Const";
import { API_ENDPOINTS } from "../../redux/utils/api";

const HEADER = {
  type: CONTAINER_365,
  className: "homeHeader",

  children: [
    {
      type: "PAGE_HEADER",
      url: "/",
      image: "Calls for Review",
      title: "Calls for Review",
      titleMobile: "Calls for Review",
      className: "page_header_comp",
    },
    {
      dataKey: "data_Key",
      label: "searchHere",
      name: "searchHere",
      icon: "search ",
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
    name: "Insights",
    path: "/Insights",
    icon: "Insights",
  },
  {
    name: "Calls",
    path: "/Calls",
    icon: "Calls",
  },
  {
    name: "Indicators",
    path: "/Indicators",
    icon: "Indicators",
  },
];

export const Calls_for_Review_Allocated_Call_Review = {
  name: "Allocated Call Reviews",

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
          type: CONTAINER,
          name: "Calls for Review-Allocated Call Reviews",
          children: [
            ///FETCH DATA OF COLUMN
            {
              type: HEADING,
              name: "subHeading",
              text: "Calls for Review-Calls To Be Allocated",
              className: "sub_heading",
              tag: "h2",
            },
            {
              type: AUTO_FETCH_API_USER,
              api: "API_ENDPOINTS[GET_CALLS_FOR_REVIEW_CALLS_TO_BE_ALLOCATED]",
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
              type: SELECT,
              className: "select-Assign To-button",
              sliceName: "filter",
              name: "Assign To",
              defaultValue: { label: "XYZ" },
              options: [{ label: "XYZ", value: "XYZ" }],
              onClickApi: API_ENDPOINTS[GET_SEARCH_RESULT],
              onClickApiMethod: POST,
            },
            {
              type: API_BUTTON,
              name: "Auto-Allocate API Button",
              buttonLabel: "Auto-Allocate",
              api: "API_ENDPOINT",
              apiType: "Post",
              className: "btn refresh_btn standalone_btn",
            },
            {
              type: "click",
              name: "Download",
              label: "Download",
              icon: " download",
              dataKey: "",
              isRequired: " True",
              requiredErrorMessage: ".",
            },
            {
              fromDate: {
                dataKey: "Call Date Start",
                label: "From Call Date Start",
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
              className: "select-call type-button",
              sliceName: "filter",
              name: "Call Type",
              defaultValue: { label: "Product Demo", value: " Product demo" },
              options: [{ label: "Product Demo", value: "Gurgaon" }],
              onClickApi: "API_ENDPOINTS[GET_SEARCH_RESULT]",
              onClickApiMethod: "POST",
            },
            {
              type: SELECT,
              className: "select-call-disposition-button",
              sliceName: "filter",
              name: "Call Disposition",
              defaultValue: {
                label: "Call Disposition",
                value: "call Disposition",
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
                        "Call ID": "Call Id",
                        "Call Title": "Call Tile",
                        "Lead ID": "Lead ID ",
                        "Lead Title": "Lead Title",
                        "Company Name": "Company Name",
                        "Call Owner": "Call Owner  ",
                        "Team Manager": "Team Manager",
                        "Client POC": "Client POC",
                        "Call Date & Time": "Call Date & Time",
                        "Produtc/Service": "Product/Service",
                        "call Disposition": " Call Disposition",
                        "Call Type": " Call Type",
                        "Call Review Type": " Call Review Type",

                      },
                      mobileHeaders: {
                        "Call ID": "Call Id",
                        "Call Title": "Call Tile",
                        "Lead ID": "Lead ID ",
                        "Lead Title": "Lead Title",
                        "Company Name": "Company Name",
                        "Call Owner": "Call Owner  ",
                        "Team Manager": "Team Manager",
                        "Client POC": "Client POC",
                        "Call Date & Time": "Call Date & Time",
                        "Produtc/Service": "Product/Service",
                        "call Disposition": " Call Disposition",
                        "Call Type": " Call Type",
                        "Call Review Type": " Call Review Type",
                      },

                      fieldConst: "newPropertyConst",
                      editApi: "ALTER_CALLS_FOR_REVIEW_CALLS_TO_BE_ALLOCATED_DATA",
                      deleteApi: "DELETE_CALLS_FOR_REVIEW_CALLS_TO_BE_ALLOCATED_DATA",
                      getDataApi: "GET_CALLS_FOR_REVIEW_CALLS_TO_BE_ALLOCATED",
                      approveApi: "APPROVE_CALLS_FOR_REVIEW_CALLS_TO_BE_ALLOCATED_DATA",
                      endpoint: 'API_ENDPOINTS[GET_CALLS_FOR_REVIEW_CALLS_TO_BE_ALLOCATED]',
                      dataPoint: "GET_CALLS_FOR_REVIEW_CALLS_TO_BE_ALLOCATED",
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

        //for Feedback Requested Call Review
        {
          type: CONTAINER,
          name: " Feedback Requested Call Review",
          children: [
            ///FETCH DATA OF COLUMN
            {
              type: "AUTO_FETCH_API_USER",
              api: "API_ENDPOINTS[GET_CALL_FOR-REVIEW_FEEDBACK_REQUESTED_CALL_REVIEW]",
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
              type: SELECT,
              className: "select-Assign To-button",
              sliceName: "filter",
              name: "Assign To",
              defaultValue: { label: "XYZ" },
              options: [{ label: "XYZ", value: "XYZ" }],
              onClickApi: "API_ENDPOINTS[GET_SEARCH_RESULT]",
              onClickApiMethod: "POST",
            },
            {
              type: "API_BUTTON",
              name: "Auto-Allocate API Button",
              buttonLabel: "Auto-Allocate",
              api: "API_ENDPOINT",
              apiType: "Post",
              className: "btn refresh_btn standalone_btn",
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
              fromDate: {
                dataKey: "Call Date Start",
                label: "From Call Date Start",
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
              fromDate: {
                dataKey: "Feedback Requested Start",
                label: "Feedback Requested Start",
                name: "CFeedback Requested Start",
                type: "DATE_PICKER"
              },
              toDate: {
                dataKey: "Feedback Requested End Date",
                label: "Feedback Requested End Date",
                name: "Feedback Requested End Date",
                type: "DATE_PICKER"
              }
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
              className: "select-call type-button",
              sliceName: "filter",
              name: "Call Type",
              defaultValue: { label: "Product Demo", value: " Product demo" },
              options: [{ label: "Product Demo", value: "Gurgaon" }],
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
                        "Call ID": "Call Id",
                        "Call Title": "Call Tile",
                        "Lead ID": "Lead ID ",
                        "Lead Title": "Lead Title",
                        "Company Name": "Company Name",
                        "Call Owner": "Call Owner  ",
                        "Team Manager": "Team Manager",
                        "Client POC": "Client POC",
                        "Call Date & Time": "Call Date & Time",
                        "Produtc/Service": "Product/Service",
                        "call Disposition": " Call Disposition",
                        "Call Type": " Call Type",
                        " Call Review Type": " Call Review Type",
                        "Feedback Requested on": "Feedback Requested on",
                        " Feedback Requested By": "Feedback Requested By",
                        " On Time Riview": "On Time Riview",
                        " Delay Time": " Delay Time",
                        " Time to Complete Review": "Time to Complete Review",


                      },
                      mobileHeaders: {
                        "Call ID": "Call Id",
                        "Call Title": "Call Tile",
                        "Lead ID": "Lead ID ",
                        "Lead Title": "Lead Title",
                        "Company Name": "Company Name",
                        "Call Owner": "Call Owner  ",
                        "Team Manager": "Team Manager",
                        "Client POC": "Client POC",
                        "Call Date & Time": "Call Date & Time",
                        "Produtc/Service": "Product/Service",
                        "call Disposition": " Call Disposition",
                        "Call Type": " Call Type",
                        " Call Review Type": " Call Review Type",
                        "Feedback Requested on": "Feedback Requested on",
                        " Feedback Requested By": "Feedback Requested By",
                        " On Time Riview": "On Time Riview",
                        " Delay Time": " Delay Time",
                        " Time to Complete Review": "Time to Complete Review",
                      },

                      fieldConst: "newPropertyConst",
                      editApi: "ALTER_CALL_FOR-REVIEW_FEEDBACK_REQUESTED_CALL_REVIEW_DATA",
                      deleteApi: "DELETE_CALL_FOR-REVIEW_FEEDBACK_REQUESTED_CALL_REVIEW_DATA",
                      getDataApi: "GET_CALL_FOR-REVIEW_FEEDBACK_REQUESTED_CALL_REVIEW",
                      approveApi: "APPROVE_CALL_FOR-REVIEW_FEEDBACK_REQUESTED_CALL_REVIEW_DATA",
                      endpoint: 'API_ENDPOINTS[GET_CALL_FOR-REVIEW_FEEDBACK_REQUESTED_CALL_REVIEW]',
                      dataPoint: "GET_CALL_FOR-REVIEW_FEEDBACK_REQUESTED_CALL_REVIEW",
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

    },

  ]
}