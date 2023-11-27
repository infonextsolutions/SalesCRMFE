import { CONTAINER, CONTAINER_365, DASHBOARD_LISTING, HEADING, LOGIN_REFRESH, POST, SELECT, SIDE_MENU_365 } from "../../components/utils/Const";

const HEADER = {
  type: CONTAINER_365,
  className: "homeHeader",

  children: [
    {
      type: "PAGE_HEADER",
      url: "/",
      image: "Calls > Closed Calls ",
      title: "Calls > Closed Calls ",
      titleMobile: "Calls > Closed Calls ",
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
export const Closed_Calls_Allocated_Call_Reviews = {
  name: "Reviews Closed_Allocated Calls",

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
          name: "Reviews Closed_Allocated Call",
          children: [
            ///FETCH DATA OF COLUMN
            {
              type: HEADING,
              name: "subHeading",
              text: "Allocated Calls",
              className: "sub_heading",
              tag: "h2",
            },
            {
              type: "AUTO_FETCH_API_USER",
              api: "API_ENDPOINTS[GET_CLOSED_CALLS_ALLOCATED_CALLS_REVIEWS]",
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
                        "Call Review Type": " Call Review Type",
                        " Call Score": "Call Score",
                        "Allocation Type": " Allocation Type",
                        " Allocated On": " Allocated On",
                        " Allocated ": " Allocated On",
                        " Review Due Date": " Review Due Date",
                        " Call Review Status": " Call Review status",

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
                        " Call Score": "Call Score",
                        "Allocation Type": " Allocation Type",
                        " Allocated On": " Allocated On",
                        " Allocated To": " Allocated To",
                        " Review Due Date": " Review Due Date",
                        "Call Review Status": " Call Review status",
                      },

                      fieldConst: "newPropertyConst",
                      editApi: "ALTER_CLOSED_CALLS_ALLOCATED_CALLS_REVIEWS_DATA",
                      deleteApi: "DELETE_CLOSED_CALLS_ALLOCATED_CALLS_REVIEWS_DATA",
                      getDataApi: "GET_CLOSED_CALLS_ALLOCATED_CALLS_REVIEWS_DATA",
                      approveApi: "APPROVE_CLOSED_CALLS_ALLOCATED_CALLS_REVIEWS_DATA",
                      endpoint: 'API_ENDPOINTS[GET_CLOSED_CALLS_ALLOCATED_CALLS_REVIEWS]',
                      dataPoint: "GET_CLOSED_CALLS_ALLOCATED_CALLS_REVIEWS",
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

        //for  Closed Call - Feedback Requested Call Review
        {
          type: CONTAINER,
          name: " Feedback Requested Call Review",
          children: [
            ///FETCH DATA OF COLUMN
            {
              type: HEADING,
              name: "subHeading",
              text: "Reviews Closed-Feedback Requested Call Reviews",
              className: "sub_heading",
              tag: "h2",
            },
            {
              type: "AUTO_FETCH_API_USER",
              api: "API_ENDPOINTS[GET_REVIEW_CLOSED_FEEDBACK_REQUESTED_CALL_REVIEWS]",
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
                        "Call Owner": "Call Owner  ",
                        "Team Manager": "Team Manager",
                        "Client POC": "Client POC",
                        "Company Name": "Company Name",
                        "Call Date & Time": "Call Date & Time",
                        "Produtc/Service": "Product/Service",
                        " Call Review Type": " Call Review Type",
                        "call Disposition": " Call Disposition",
                        "Call Type": " Call Type",
                        "Call Score": " Call Score",
                        "Feedback Requested on": "Feedback Requested on",
                        " Feedback Requested By": "Feedback Requested By",
                        " On Time Riview": "On Time Riview",
                        " Delay Time": " Delay Time",
                        " Time to Complete Review": "Time to Complete Review",
                        " Call Review Status": "Call Review Status",
                      },

                      mobileHeaders: {
                        "Call ID": "Call Id",
                        "Call Title": "Call Tile",
                        "Lead ID": "Lead ID ",
                        "Lead Title": "Lead Title",
                        "Call Owner": "Call Owner  ",
                        "Team Manager": "Team Manager",
                        "Client POC": "Client POC",
                        "Company Name": "Company Name",
                        "Call Date & Time": "Call Date & Time",
                        "Produtc/Service": "Product/Service",
                        " Call Review Type": " Call Review Type",
                        "call Disposition": " Call Disposition",
                        "Call Type": " Call Type",
                        " Call Score": " Call Score",
                        "Feedback Requested on": "Feedback Requested on",
                        "Feedback Requested By": "Feedback Requested By",
                        "On Time Riview": "On Time Riview",
                        "Delay Time": " Delay Time",
                        "Time to Complete Review": "Time to Complete Review",
                        "Call Review Status": "Call Review Status",

                      },

                      fieldConst: "newPropertyConst",
                      editApi: "ALTER_REVIEW_CLOSED_FEEDBACK_REQUESTED_CALL_REVIEWS_DATA",
                      deleteApi: "DELETE_REVIEW_CLOSED_FEEDBACK_REQUESTED_CALL_REVIEWS_DATA",
                      getDataApi: "GET_REVIEW_CLOSED_FEEDBACK_REQUESTED_CALL_REVIEWS",
                      approveApi: "APPROVE_REVIEW_CLOSED_FEEDBACK_REQUESTED_CALL_REVIEWS_DATA",
                      endpoint: 'API_ENDPOINTS[GET_REVIEW_CLOSED_FEEDBACK_REQUESTED_CALL_REVIEWS]',
                      dataPoint: "GET_REVIEW_CLOSED_FEEDBACK_REQUESTED_CALL_REVIEWS",
                      onRefreshApiType: POST,
                      disableRowModal: true,
                      showPreviewButton: true
                    },
                  ],
                },

              ],
            },



          ],
        },
      ],

    },

  ],
}