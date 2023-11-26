import {
  CONTAINER,
  CONTAINER_365,
  LOGIN_REFRESH,
  PAGES_365,
  SELECT,
  SELECT3,
  SIDE_MENU_365,
} from "../../components/utils/Const";

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
    subItems: [
      {
        name: "sale1",
        Route: "Activecall",
      },
      {
        name: "sale2",
        Route: "RecordedCall",
      },
    ],
  },
  {
    name: "Call",
    path: "/call",
    icon: "Call",
    subItems: [
      {
        name: "Active Call",
        Route: "Activecall",
      },
      {
        name: "Recorded Call",
        Route: "RecordedCall",
      },
    ],
  },
];

export const Active_call_Sheduled_Call = {
  name: "active_call",

  children: [
    HEADER,

    {
      type: SIDE_MENU_365,
      items: MENU_ITEMS,
      className: "menu_comp",
      text: "Menu",
    },

    {
      type: PAGES_365,
      Pageslist: [
        {
          name: "Scheduled Calls",
          children: [
            ///FETCH DATA OF COLUMN
            {
              type: "AUTO_FETCH_API_USER",
              api: "API_ENDPOINTS[GET_ACTIVE_CALL_SCHEDULED_CALL]",
              data: {
                sortType: "desc",
                sortColumn: "updatedAt",
              },
              method: "POST",
              className: "header",
              user: true,
            },

            {
              type: SELECT3,
              className: "select-city-button",
              sliceName: "filter",
              name: "Company Name",
              label: "Company Name",
              defaultValue: { label: "ABCcorp" },
              options: [{ label: "ABCcorp", value: "DBCcorp" }],
              onClickApi: "API_ENDPOINTS[GET_SEARCH_RESULT]",
              onClickApiMethod: "POST",
            },
            {
              type: SELECT,
              className: "select-city-button",
              sliceName: "filter",
              name: "Product/service",
              defaultValue: { label: "Product A", value: "Product b" },
              options: [{ label: "Product A", value: "Product b" }],
              onClickApi: "API_ENDPOINTS[GET_SEARCH_RESULT]",
              onClickApiMethod: "POST",
            },
            {
              type: SELECT,
              className: "select-city-button",
              sliceName: "filter",
              name: "Call Owner",
              defaultValue: { label: "Jhon", value: "sam" },
              options: [{ label: "Jhon", value: "sam" }],
              onClickApi: "API_ENDPOINTS[GET_SEARCH_RESULT]",
              onClickApiMethod: "POST",
            },
            {
              type: SELECT,
              className: "select-city-button",
              sliceName: "filter",
              name: "Call Type",
              defaultValue: { label: "Gurgaon", value: "Gurgaon" },
              options: [{ label: "Product Demo", value: "Gurgaon" }],
              onClickApi: "API_ENDPOINTS[GET_SEARCH_RESULT]",
              onClickApiMethod: "POST",
            },
            ///for calemder INCOMPLETE
            {
              dataKey: "data_Key",
              label: "date",
              name: "searchHere",
              requiredErrorMessage: "",
              type: "TEXT_INPUT",
              max: "",
              min: "",
            },

            {
              type: CONTAINER,
              name: "",
              className: "table",
              children: [
                {
                  type: "DASHBOARD_LISTING",
                  data: {},
                  desktopHeaders: {
                    "Call ID": "Call Id",
                    "Call Title": "Call Tile",
                    "Lead ID": "Lead ID ",
                    "Lead Title": "Lead Title",
                    "Company Name": "Company Name",
                    "Product/Service": "Product/Service",
                    Participants: "Participants",
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
                    Participants: "Participants",
                    "Call Owner": "Call Owner  ",
                    "Call Type": "Call Type",
                    "Call Date & Time": "Call Date & Time",
                  },

                  fieldConst: "newPropertyConst",
                  editApi: "ALTER_ACTIVE_CALL_SCHEDULED_CALL_DATA",
                  deleteApi: "DELETE_ACTIVE_CALL_SCHEDULED_CALL_DATA",
                  getDataApi: "GET_ACTIVE_CALL_SCHEDULED_CALL",
                  approveApi: "APPROVE_ACTIVE_CALL_SCHEDULED_CALL_DATA",
                  endpoint: "API_ENDPOINTS[GET_ACTIVE_CALL_SCHEDULED_CALL]",
                  dataPoint: "GET_ACTIVE_CALL_SCHEDULED_CALL",
                  onRefreshApiType: "POST",
                  disableRowModal: true,
                  showPreviewButton: true,
                },
              ],
            },
          ],
        },

        //for scheduled meeting
        {
          name: "Sheduled Meeting",
          children: [
            {
              type: "AUTO_FETCH_API_USER",
              api: "API_ENDPOINTS[GET_ACTIVE_CALL_SCHEDULED_MEETING]",
              data: {
                sortType: "desc",
                sortColumn: "updatedAt",
              },
              method: "POST",
              className: "header",
              user: true,
            },

            {
              type: SELECT,
              className: "select-city-button",
              sliceName: "filter",
              name: "Company Name",
              defaultValue: { label: "ABCcorp" },
              options: [{ label: "ABCcorp", value: "DBCcorp" }],
              onClickApi: "API_ENDPOINTS[GET_SEARCH_RESULT]",
              onClickApiMethod: "POST",
            },
            {
              type: SELECT,
              className: "select-city-button",
              sliceName: "filter",
              name: "Product/service",
              defaultValue: { label: "Product A", value: "Product b" },
              options: [{ label: "Product A", value: "Product b" }],
              onClickApi: "API_ENDPOINTS[GET_SEARCH_RESULT]",
              onClickApiMethod: "POST",
            },
            {
              type: SELECT,
              className: "select-city-button",
              sliceName: "filter",
              name: "Meeting Owner",
              defaultValue: { label: "Jhon", value: "sam" },
              options: [{ label: "Jhon", value: "sam" }],
              onClickApi: "API_ENDPOINTS[GET_SEARCH_RESULT]",
              onClickApiMethod: "POST",
            },
            {
              type: SELECT,
              className: "select-city-button",
              sliceName: "filter",
              name: "Meeting Type",
              defaultValue: { label: "Gurgaon", value: "Gurgaon" },
              options: [{ label: "Product Demo", value: "Gurgaon" }],
              onClickApi: "API_ENDPOINTS[GET_SEARCH_RESULT]",
              onClickApiMethod: "POST",
            },
            ///for calemder INCOMPLETE
            {
              dataKey: "data_Key",
              label: "date",
              name: "searchHere",
              requiredErrorMessage: "",
              type: "TEXT_INPUT",
              max: "",
              min: "",
            },
            {
              type: SELECT,
              className: "select-city-button",
              sliceName: "filter",
              name: "Location",
              defaultValue: { label: "Zoom", value: "Meet" },
              options: [{ label: "Zoom", value: "Zoom              " }],
              onClickApi: "API_ENDPOINTS[GET_SEARCH_RESULT]",
              onClickApiMethod: "POST",
            },

            {
              type: CONTAINER,
              name: "",
              className: "",
              children: [
                {
                  type: "DASHBOARD_LISTING",
                  data: {},
                  desktopHeaders: {
                    "Meeting ID": "Call Id",
                    "Meeting Title": "Call Tile",

                    "Lead Title": "Lead Title",
                    "Company Name": "Company Name",
                    "Product/Service": "Product/Service",
                    Participants: "Participants",
                    "Meeting Owner": "Call Owner  ",
                    "Meeting  Type": "Call Type",
                    "Meeting Date & Time": "Call Date & Time",
                    Duration: "Duration",
                    Location: "Location",
                    "Joining Innfo": "Joining Innfo",
                  },
                  mobileHeaders: {
                    "Meeting ID": "Call Id",
                    "Meeting Title": "Call Tile",

                    "Lead Title": "Lead Title",
                    "Company Name": "Company Name",
                    "Product/Service": "Product/Service",
                    Participants: "Participants",
                    "Meeting Owner": "Call Owner  ",
                    "Meeting  Type": "Call Type",
                    "Meeting Date & Time": "Call Date & Time",
                    Duration: "Duration",
                    Location: "Location",
                    "Joining Innfo": "Joining Innfo",
                  },

                  fieldConst: "newPropertyConst",
                  editApi: "ALTER_ACTIVE_CALL_SCHEDULED_MEETING_DATA",
                  deleteApi: "DELETE_ACTIVE_CALL_SCHEDULED_MEETING_DATA",
                  getDataApi: "GET_ACTIVE_CALL_SCHEDULED_MEETING",
                  approveApi: "APPROVE_ACTIVE_CALL_SCHEDULED_MEETING_DATA",
                  endpoint: "API_ENDPOINTS[GET_ACTIVE_CALL_SCHEDULED_MEETING]",
                  dataPoint: "GET_ACTIVE_CALL_SCHEDULED_MEETING",
                  onRefreshApiType: "POST",
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
