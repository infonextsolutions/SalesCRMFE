import { AUTO_FETCH_API_USER, CONTAINER, CONTAINER_365, DASHBOARD_LISTING, HEADING, LOGIN_REFRESH, PAGE_HEADER, POST, SELECT, SIDE_MENU_365 } from "../../components/utils/Const";

const HEADER = {
  type: CONTAINER_365,
  className: "homeHeader",

  children: [
    {
      type: PAGE_HEADER,
      url: "/",
      image: "Calls> Open Reviews> Allocated Call Reviews",
      title: "Calls> Open Reviews> Allocated Call Reviews",
      titleMobile: "Calls> Open Reviews> Allocated Call Reviews",
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
export const Open_Reviews_Allocated_call_Reviews = {
  name: "Allocated Calls Reviews",

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
          name: "Allocated Call Reviews",
          children: [
            ///FETCH DATA OF COLUMN
            {
              type: HEADING,
              name: "subHeading",
              text: "Reviews Closed-Allocated Calls",
              className: "sub_heading",
              tag: "h2",
            },
            {
              type: "AUTO_FETCH_API_USER",
              api: "API_ENDPOINTS[GET_OPEN_REVIEWS_ALLOCATED_CALL_REVIEWS_DATA]",
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
              className: "select-Re-Assign To-button",
              sliceName: "filter",
              name: "Re-Assign To",
              defaultValue: { label: "XYZ" },
              options: [{ label: "XYZ", value: "XYZ" }],
              onClickApi: "API_ENDPOINTS[GET_SEARCH_RESULT]",
              onClickApiMethod: "POST",
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
              className: "select-call-disposition-button",
              sliceName: "filter",
              name: "Call Disposition",
              defaultValue: {
                label: "Call Desposition",
                value: "callDisposition",
              }
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
                        " Allocated To": " Allocated To",
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
                        "Call Score": "Call Score",
                        "Allocation Type": " Allocation Type",
                        "Allocated On": " Allocated On",
                        "Allocated To": " Allocated To",
                        "Review Due Date": " Review Due Date",
                        "Call Review Status": " Call Review status",
                      },

                      fieldConst: "newPropertyConst",
                      editApi: "ALTER_OPEN_REVIEWS_ALLOCATED_CALL_REVIEWS_DATA",
                      deleteApi: "DELETE_OPEN_REVIEWS_ALLOCATED_CALL_REVIEWS_DATA",
                      getDataApi: "GET_OPEN_REVIEWS_ALLOCATED_CALL_REVIEWS_DATA",
                      approveApi: "APPROVE_OPEN_REVIEWS_ALLOCATED_CALL_REVIEWS_DATA",
                      endpoint: 'API_ENDPOINTS[GET_OPEN_REVIEWS_ALLOCATED_CALL_REVIEWS]',
                      dataPoint: "GET_OPEN_REVIEWS_ALLOCATED_CALL_REVIEWS",
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

        //for  Closed Calls - Feedback Requested Call Reviews
        {
          name: " Feedback Requested Call Review",
          children: [
            ///FETCH DATA OF COLUMN
            {
              type: HEADING,
              name: "subHeading",
              text: "Call for Review_Feedback Requested Call Reviews",
              className: "sub_heading",
              tag: "h2",
            },
            {
              type: AUTO_FETCH_API_USER,
              api: "API_ENDPOINTS[GET_CALL_FOR_REVIEW_FEEDBACK_REQUESTED_CALL_REVIEWS]",
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
              className: "select-Re-Assign To-button",
              sliceName: "filter",
              name: "Re-Assign To",
              defaultValue: { label: "XYZ" },
              options: [{ label: "XYZ", value: "XYZ" }],
              onClickApi: "API_ENDPOINTS[GET_SEARCH_RESULT]",
              onClickApiMethod: "POST",
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
                dataKey: "Feedback Request Start",
                label: "Feedback Request Start",
                name: "CFeedback Request Start",
                type: "DATE_PICKER"
              },
              toDate: {
                dataKey: "Feedback Request End Date",
                label: "Feedback Request End Date",
                name: "Feedback Request End Date",
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
              className: "select-call-disposition-button",
              sliceName: "filter",
              name: "Call Disposition",
              defaultValue: {
                label: "Call Desposition",
                value: "callDisposition",
              }
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
                        "Call Review Type": " Call Review Type",
                        "call Disposition": " Call Disposition",
                        "Call Type": " Call Type",
                        "Call Score": " Call Score",
                        "Feedback Requested on": "Feedback Requested on",
                        "Feedback Requested By": "Feedback Requested By",
                        "On Time Riview": "On Time Riview",
                        "Delay Time": " Delay Time",
                        "Time to Complete Review": "Time to Complete Review",
                        "Call Review Status": "Call Review Status",


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
                        "Call Score": " Call Score",
                        "Feedback Requested on": "Feedback Requested on",
                        "Feedback Requested By": "Feedback Requested By",
                        "On Time Riview": "On Time Riview",
                        "Delay Time": " Delay Time",
                        "Time to Complete Review": "Time to Complete Review",
                        "Call Review Status": "Call Review Status",


                      },

                      fieldConst: "newPropertyConst",
                      editApi: "ALTER_CALL_FOR_REVIEW_FEEDBACK_REQUESTED_CALL_REVIEWS_DATA",
                      deleteApi: "DELETE_CALL_FOR_REVIEW_FEEDBACK_REQUESTED_CALL_REVIEWS_DATA",
                      getDataApi: "GET_CALL_FOR_REVIEW_FEEDBACK_REQUESTED_CALL_REVIEWS",
                      approveApi: "APPROVE_CALL_FOR_REVIEW_FEEDBACK_REQUESTED_CALL_REVIEWS_DATA",
                      endpoint: 'API_ENDPOINTS[GET_CALL_FOR_REVIEW_FEEDBACK_REQUESTED_CALL_REVIEWS]',
                      dataPoint: "GET_CALL_FOR_REVIEW_FEEDBACK_REQUESTED_CALL_REVIEWS",
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