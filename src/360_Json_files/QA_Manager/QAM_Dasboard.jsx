import {
  CONTAINER_365,
  DYNAMIC_CARD_CONTAINER_365,
  GRAP_SELLING_SKILL_365,
  LEADER_BOARD_365,
  PAGES_365,
  SALE_PITHC_ANALUSIS_365,
  SIDE_MENU_365,
  TOP_CALLS_TABLE_365,
  AUTO_FETCH_API,
  SELECT2,
  POST,
  GET_QAE_DASHBOARD,
  GRAP_DEAL_ANALYTICS_365,
  GRAP_EMOTIONAL_ANALYSIS_365,
  GRAP_TALK_RATIO_365,
  GRAPH_INTERRUPTION_365,
  GRAPH_CALL_SENTIMENT_365,
} from "../../components/utils/Const.js";

import { API_ENDPOINTS } from "../../redux/utils/api.js";

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
  },
  {
    name: "Call",
    path: "/call",
    icon: "Call",
  },
];

export const DASHBOARD_QAM = {
  name: "dashboard",

  children: [
    // {
    //   type: SIDE_MENU_365,
    //   items: MENU_ITEMS,
    //   className: "menu_comp",
    //   text: "Menu",
    // },
    HEADER,
    {
      type: SELECT2,
      sliceName: "filter",
      name: "sortBy",
      label: "Last 7 Days",
      className: "filterbutton",
      maxAllowed: 1,
      onClickApi: API_ENDPOINTS[GET_QAE_DASHBOARD],
      onClickApiMethod: POST,
      options: [
        { label: "Last 7 Days", value: 7 },
        { label: "Last 15 Days", value: 15 },
        { label: "Last 30 Days", value: 30 },
      ],
      zIndex: 89,
    },
    {
      type: PAGES_365,
      Pageslist: [
        {
          name: "callreview",
          children: [
            {
              type: DYNAMIC_CARD_CONTAINER_365,
              loadingApi: "GET_CARD_DEALS_DEATILS",
              sliceName: "filter",
              className: "result-searchdiv",
              apiName: "GET_CARD_DEALS_DEATILS",
              paginatioName: "searchPage",
              defaultPage: 1,
              cardPerPage: 5,
              name: "Search Card",
              onClickApi: "API_ENDPOINTS[GET_CARD_DEALS_DEATILS]",
              onClickApiMethod: "POST",
              renderComponentsInLoop: {
                type: "SEARCH_CARD",
                className: "homeCards",
              },
              cardClickApi: "API_ENDPOINTS[GET_CARD_DATA]",
              cardClickNavigate: "/",
              cardClickApiType: "GET",
            },

            {
              type: TOP_CALLS_TABLE_365,
              name: "Top_calls",
              className: "",
              loadingApi: "GET_TOP_CALLS",
            },
            {
              type: GRAP_SELLING_SKILL_365,
              apiName: "GET_NUMBER_OF_QUESTION_ASK",
              className: "",
              loadingApi: "GET_NUMBER_OF_QUESTION_ASK",
            },
            {
              type: GRAP_SELLING_SKILL_365,
              apiName: "GET_NUMBER_OF_QUESTION_ASK",
              className: "",
              loadingApi: "GET_NUMBER_OF_QUESTION_ASK",
            },
            {
              type: GRAP_SELLING_SKILL_365,
              apiName: "GET_NUMBER_OF_QUESTION_ASK",
              className: "",
              loadingApi: "GET_NUMBER_OF_QUESTION_ASK",
            },
            {
              type: GRAP_SELLING_SKILL_365,
              apiName: "GET_NUMBER_OF_QUESTION_ASK",
              className: "",
              loadingApi: "GET_NUMBER_OF_QUESTION_ASK",
            },
            {
              type: GRAP_SELLING_SKILL_365,
              apiName: "GET_HIGH_INTENT_VOLUME",
              className: "",
              loadingApi: "GET_HIGH_INTENT_VOLUME",
            },
            {
              type: GRAP_EMOTIONAL_ANALYSIS_365,
              apiName: "GET_EMOTIONAL_ANALYSIS",
              className: "",
              loadingApi: "GET_EMOTIONAL_ANALYSIS",
            },
            {
              type: GRAPH_CALL_SENTIMENT_365,
              apiName: "GET_CALL_SENTIMENT",
              className: "",
              loadingApi: "GET_CALL_SENTIMENT",
            },
            {
              type: GRAP_SELLING_SKILL_365,
              apiName: "GET_HIGH_INTENT_VOLUME",
              className: "",
              loadingApi: "GET_HIGH_INTENT_VOLUME",
            },
          ],
        },
        {
          name: "communication",
          children: [
            {
              type: SALE_PITHC_ANALUSIS_365,
              name: "deal_analytics",
              className: "",
              loadingApi: "GET_SALE_PITHC_ANALUSIS_365",
            },
            {
              type: GRAP_SELLING_SKILL_365,
              apiName: "GET_HIGH_INTENT_VOLUME",
              className: "",
              loadingApi: "GET_HIGH_INTENT_VOLUME",
            },
            {
              type: GRAP_SELLING_SKILL_365,
              apiName: "GET_HIGH_INTENT_VOLUME",
              className: "",
              loadingApi: "GET_HIGH_INTENT_VOLUME",
            },
            {
              type: GRAP_SELLING_SKILL_365,
              apiName: "GET_HIGH_INTENT_VOLUME",
              className: "",
              loadingApi: "GET_HIGH_INTENT_VOLUME",
            },
            {
              type: GRAP_SELLING_SKILL_365,
              apiName: "GET_HIGH_INTENT_VOLUME",
              className: "",
              loadingApi: "GET_HIGH_INTENT_VOLUME",
            },
          ],
        },

        // {
        //   name: "Scoring",
        //   children: [
        //     {
        //       type: "AUTO_FETCH_API_USER",
        //       api: "API_ENDPOINTS[GET_INSIGHT_SCORING]",
        //       data: {
        //         sortType: "desc",
        //         sortColumn: "updatedAt",
        //       },
        //       method: POST,
        //       className: "header",
        //       user: true,
        //     },

        //     {
        //       type: SELECT,
        //       className: "select-Team-Manager-button",
        //       sliceName: "filter",
        //       name: "Team Manager",
        //       defaultValue: { label: "Jogn .C" },
        //       options: [{ label: "ABCcorp", value: "DBCcorp" }],
        //       onClickApi: "API_ENDPOINTS[GET_Team_Manger]",
        //       onClickApiMethod: "POST",
        //     },
        //     {
        //       type: SELECT,
        //       className: "select-sale-Rep-button",
        //       sliceName: "filter",
        //       name: "Sales Rep",
        //       defaultValue: { label: "Product A", value: "Product b" },
        //       options: [{ label: "Product A", value: "Product b" }],
        //       onClickApi: "API_ENDPOINTS[GET_Sale_Rep]",
        //       onClickApiMethod: "POST",
        //     },
        //     {
        //       type: SELECT,
        //       className: "select-Call_Review-button",
        //       sliceName: "filter",
        //       name: "Call Review Type",
        //       defaultValue: { label: "Jhon", value: "sam" },
        //       options: [{ label: "Jhon", value: "sam" }],
        //       onClickApi: "API_ENDPOINTS[GET_Call_Review_Types]",
        //       onClickApiMethod: "POST",
        //     },
        //     {
        //       type: SELECT,
        //       className: "select-Call_Disposition-button",
        //       sliceName: "filter",
        //       name: "Call Disposition",
        //       defaultValue: { label: "Gurgaon", value: "Gurgaon" },
        //       options: [{ label: "Product Demo", value: "Gurgaon" }],
        //       onClickApi: "API_ENDPOINTS[GET_Call_Disposition]",
        //       onClickApiMethod: "POST",
        //     },
        //     ///for calemder INCOMPLETE
        //     {
        //       dataKey: "data_Key",
        //       label: "date",
        //       name: "searchHere",
        //       requiredErrorMessage: "",
        //       type: "TEXT_INPUT",
        //       max: "",
        //       min: "",
        //     },
        //     {
        //       type: LOGIN_REFRESH,
        //       name: "",
        //       className: "",
        //       children: [
        //         {
        //           type: CONTAINER,
        //           name: "",
        //           className: "",
        //           children: [
        //             {
        //               type: DASHBOARD_LISTING,
        //               data: {},
        //               desktopHeaders: {
        //                 "Namec( QA Executive)": "Namec( QA Executive)",
        //                 "Averge Overall Score": "Averge Overall Score",
        //                 "Highest Score": "Highest Score",
        //                 "Lowest Score": "Lowest Score",
        //                 "Parameter 1": "Parameter 1",
        //                 "Parameter 2": "Parameter 2",
        //                 "Parameter 3": "Parameter 3",
        //                 "Parameter 4": "Parameter 4",
        //                 "Parameter 5": "Parameter 5               ",
        //               },
        //               mobileHeaders: {
        //                 "Namec( QA Executive)": "Namec( QA Executive)",
        //                 "Averge Overall Score": "Averge Overall Score",
        //                 "Highest Score": "Highest Score",
        //                 "Lowest Score": "Lowest Score",
        //                 "Parameter 1": "Parameter 1",
        //                 "Parameter 2": "Parameter 2",
        //                 "Parameter 3": "Parameter 3",
        //                 "Parameter 4": "Parameter 4",
        //                 "Parameter 5": "Parameter 5 ",
        //               },

        //               fieldConst: "newPropertyConst",
        //               editApi: "ALTER_ACTIVE_CALL_SCHEDULED_MEETING_DATA",
        //               deleteApi: "DELETE_ACTIVE_CALL_SCHEDULED_MEETING_DATA",
        //               getDataApi: "GET_ACTIVE_CALL_SCHEDULED_MEETING",
        //               approveApi: "APPROVE_ACTIVE_CALL_SCHEDULED_MEETING_DATA",
        //               endpoint:
        //                 "API_ENDPOINTS[GET_ACTIVE_CALL_SCHEDULED_MEETING]",
        //               dataPoint: "GET_ACTIVE_CALL_SCHEDULED_MEETING",
        //               onRefreshApiType: POST,
        //               disableRowModal: true,
        //               showPreviewButton: true,
        //             },
        //             //table for QA
        //             {
        //               type: DASHBOARD_LISTING,
        //               data: {},
        //               desktopHeaders: {
        //                 "Namec( QA Executive)": "Namec( QA Executive)",
        //                 "Averge Overall Score": "Averge Overall Score",
        //                 "Highest Score": "Highest Score",
        //                 "Lowest Score": "Lowest Score",
        //                 "Parameter 1": "Parameter 1",
        //                 "Parameter 2": "Parameter 2",
        //                 "Parameter 3": "Parameter 3",
        //                 "Parameter 4": "Parameter 4",
        //                 "Parameter 5": "Parameter 5               ",
        //               },
        //               mobileHeaders: {
        //                 "Namec( QA Executive)": "Namec( QA Executive)",
        //                 "Averge Overall Score": "Averge Overall Score",
        //                 "Highest Score": "Highest Score",
        //                 "Lowest Score": "Lowest Score",
        //                 "Parameter 1": "Parameter 1",
        //                 "Parameter 2": "Parameter 2",
        //                 "Parameter 3": "Parameter 3",
        //                 "Parameter 4": "Parameter 4",
        //                 "Parameter 5": "Parameter 5 ",
        //               },

        //               fieldConst: "newPropertyConst",
        //               editApi: "ALTER_ACTIVE_CALL_SCHEDULED_MEETING_DATA",
        //               deleteApi: "DELETE_ACTIVE_CALL_SCHEDULED_MEETING_DATA",
        //               getDataApi: "GET_ACTIVE_CALL_SCHEDULED_MEETING",
        //               approveApi: "APPROVE_ACTIVE_CALL_SCHEDULED_MEETING_DATA",
        //               endpoint:
        //                 "API_ENDPOINTS[GET_ACTIVE_CALL_SCHEDULED_MEETING]",
        //               dataPoint: "GET_ACTIVE_CALL_SCHEDULED_MEETING",
        //               onRefreshApiType: POST,
        //               disableRowModal: true,
        //               showPreviewButton: true,
        //             },
        //           ],
        //         },
        //       ],
        //     },
        //   ],
        // },
        // {
        //   name: "Call Review ",
        //   children: [
        //     [
        //       {
        //         type: SELECT,
        //         className: "select-filter-button",
        //         sliceName: "filter",
        //         name: "Team Manager",
        //         defaultValue: { label: "John C", value: "john" },
        //         options: [{ label: "John C", value: "john" }],
        //         onClickApi: "API_ENDPOINTS[GET_SEARCH_RESULT]",
        //         onClickApiMethod: "POST",
        //       },
        //       {
        //         type: SELECT,
        //         className: "select-sales-rep-button",
        //         sliceName: "filter",
        //         name: "Sales Rep",
        //         defaultValue: {
        //           label: "BDM",
        //           value: "BDM",
        //         },
        //         options: [{ label: "BDM", value: "BDM" }],
        //         onClickApi: "API_ENDPOINTS[GET_SEARCH_RESULT]",
        //         onClickApiMethod: "POST",
        //       },
        //       {
        //         type: SELECT,
        //         className: "select-call-review-type-button",
        //         sliceName: "filter",
        //         name: "Call Review Type",
        //         defaultValue: { label: "Allocated", value: "allocated" },
        //         options: [{ label: "Allocated", value: "allocated" }],
        //         onClickApi: "API_ENDPOINTS[GET_SEARCH_RESULT]",
        //         onClickApiMethod: "POST",
        //       },
        //       {
        //         type: SELECT,
        //         className: "select-call-review-type-button",
        //         sliceName: "filter",
        //         name: "Call Type",
        //         defaultValue: { label: "Product Demo", value: "productDemo" },
        //         options: [{ label: "Product Demo", value: "productDemo" }],
        //         onClickApi: "API_ENDPOINTS[GET_SEARCH_RESULT]",
        //         onClickApiMethod: "POST",
        //       },
        //       {
        //         type: SELECT,
        //         className: "select-call-disposition-button",
        //         sliceName: "filter",
        //         name: "Call Disposition",
        //         defaultValue: {
        //           label: "Follow-up required",
        //           value: "followUp",
        //         },
        //         options: [{ label: "Follow-up required", value: "followUp" }],
        //         onClickApi: "API_ENDPOINTS[GET_SEARCH_RESULT]",
        //         onClickApiMethod: "POST",
        //       },

        //       {
        //         type: LOGIN_REFRESH,
        //         name: "",
        //         className: "",
        //         children: [
        //           {
        //             type: CONTAINER,
        //             name: "",
        //             className: "",
        //             children: [
        //               {
        //                 type: DASHBOARD_LISTING,
        //                 data: {},
        //                 desktopHeaders: {
        //                   "Name(QA Executive)": "name",
        //                   "Total Calls Allocated": "totalCallsAllocated",
        //                   "Allocated Calls In Progress":
        //                     "allocatedCallsInProgress",
        //                   "Allocated Calls Complete": "allocatedCallsComplete",
        //                   "On Time Call Reviews": "onTimeCallReviews",
        //                   "Call Reviews Exceeding Time Limit":
        //                     "callReviewsExceedingTimeLimit",
        //                 },
        //                 mobileHeaders: {
        //                   "Name(QA Executive)": "name",
        //                   "Total Calls Allocated": "totalCallsAllocated",
        //                   "Allocated Calls In Progress":
        //                     "allocatedCallsInProgress",
        //                   "Allocated Calls Complete": "allocatedCallsComplete",
        //                   "On Time Call Reviews": "onTimeCallReviews",
        //                   "Call Reviews Exceeding Time Limit":
        //                     "callReviewsExceedingTimeLimit",
        //                 },

        //                 fieldConst: "newPropertyConst",
        //                 editApi: "ALTER_DASHBOARD_CALL_REVIEW_DATA",
        //                 deleteApi: "DELETE_DASHBOARD_CALL_REVIEW_DATA",
        //                 getDataApi: "GET_DASHBOARD_CALL_REVIEW",
        //                 approveApi: "APPROVE_DASHBOARD_CALL_REVIEW_DATA",
        //                 endpoint: "API_ENDPOINTS[GET_DASHBOARD_CALL_REVIEW]",
        //                 dataPoint: "GET_DASHBOARD_CALL_REVIEW",
        //                 onRefreshApiType: POST,
        //                 disableRowModal: true,
        //                 showPreviewButton: true,
        //               },
        //             ],
        //           },
        //         ],
        //       },
        //       {
        //         type: LOGIN_REFRESH,
        //         name: "",
        //         className: "",
        //         children: [
        //           {
        //             type: CONTAINER,
        //             name: "",
        //             className: "",
        //             children: [
        //               {
        //                 type: DASHBOARD_LISTING,
        //                 data: {},
        //                 desktopHeaders: {
        //                   "Call ID": "callId",
        //                   "Call Title": "callTitle",
        //                   "Lead Id": "leadId",
        //                   "Lead Title": "leadTitle",
        //                   Participants: "participants",
        //                   "Call Owner": "callOwner",
        //                   "Team Manager": "teamManager",
        //                   "Client POC": "clientPOC",
        //                   "Company Name": "companyName",
        //                   "Call Date And Time": "callDateTime",
        //                   "Product/Service": "productOrService",
        //                   "Call Duration": "callDuration",
        //                   "Call Disposition": "callDisposition",
        //                   "Call Type": "callType",
        //                   "Call Score": "callScore",
        //                   "Call Review Type": "callReviewType",
        //                   "Call Review Status": "callReviewStatus",
        //                   "Close Date": "closeDate",
        //                   "Allocated On": "allocatedOn",
        //                   "Review Due Date": "reviewDueDate",
        //                   "Last Updated On": "lastUpdatedOn",
        //                   "On Time Review": "onTimeReview",
        //                   "Delay Time": "delayTime",
        //                   "Time to complete review": "timeToCompleteReview",
        //                 },
        //                 mobileHeaders: {
        //                   "Call ID": "callId",
        //                   "Call Title": "callTitle",
        //                   "Lead Id": "leadId",
        //                   "Lead Title": "leadTitle",
        //                   Participants: "participants",
        //                   "Call Owner": "callOwner",
        //                   "Team Manager": "teamManager",
        //                   "Client POC": "clientPOC",
        //                   "Company Name": "companyName",
        //                   "Call Date And Time": "callDateTime",
        //                   "Product/Service": "productOrService",
        //                   "Call Duration": "callDuration",
        //                   "Call Disposition": "callDisposition",
        //                   "Call Type": "callType",
        //                   "Call Score": "callScore",
        //                   "Call Review Type": "callReviewType",
        //                   "Call Review Statys": "callReviewStatus",
        //                   "Close Date": "closeDate",
        //                   "Allocated On": "allocatedOn",
        //                   "Review Due Date": "reviewDueDate",
        //                   "Last Updated On": "lastUpdatedOn",
        //                   "On Time Review": "onTimeReview",
        //                   "Delay Time": "delayTime",
        //                   "Time to complete review": "timeToCompleteReview",
        //                 },

        //                 fieldConst: "newPropertyConst",
        //                 editApi: "ALTER_CALL_REVIEW_INFO_DATA",
        //                 deleteApi: "DELETE_CALL_REVIEW_INFO_DATA",
        //                 getDataApi: "GET_CALL_REVIEW_INFO",
        //                 approveApi: "APPROVE_CALL_REVIEW_INFO_DATA",
        //                 endpoint: "API_ENDPOINTS[GET_CALL_REVIEW_INFO]",
        //                 dataPoint: "GET_CALL_REVIEW_INFO",
        //                 onRefreshApiType: POST,
        //                 disableRowModal: true,
        //                 showPreviewButton: true,
        //               },
        //             ],
        //           },
        //         ],
        //       },
        //     ],
        //   ],
        // },
      ],
    },
  ],
};
