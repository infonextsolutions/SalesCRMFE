import { CONTAINER, CONTAINER_365, DASHBOARD_LISTING, LOGIN_REFRESH, POST, SELECT, SIDE_MENU_365 } from "../../components/utils/Const";
import { API_ENDPOINTS } from "../../redux/utils/api";

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
        icon: "search ",
        requiredErrorMessage: "",
        type: "TEXT_INPUT",
      },
      {
        name: "Notification",
        label: "notification",
        icon:" bell_notification",
        dataKey: "text",
        type: "click",
        isRequired: " True",
        requiredErrorMessage: ".",
      },
      {
        name: "user_profile",
        label: "User",
        icon:" user-icon",
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
      name: "Calls",
      path: "/calls",
      icon: "Calls",
    },
  ];


export const Recorded_calls_Call_Recordings={
    name:"Recorded Calls",

    children:[
        HEADER,

        {
            type: SIDE_MENU_365,
            items: MENU_ITEMS,
            className: "menu_comp",
            text: "Menu",
          },


          {
            type:"PAGES_365",
           Pageslist:[
            {
                name:"Call Recordings",
                children:[
                  ///FETCH DATA OF COLUMN
                  {
                    type: "AUTO_FETCH_API_USER",
                    api: "API_ENDPOINTS[GET_RECORDED_CALLS_CALL_RECORDINGS]",
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
                    className: "select-Request Feedback-button",
                    sliceName: "filter",
                    name: "Request Feedback",
                    isRequired: "True",
                    defaultValue: { label: "Regina Cooper", value: "Regina Cooper" },
                    options: [{ label: "Jacob Hawkins", value: "Jacob Hawkins" }],
                    options: [{ label: "Judy", value: "Judy" }],
                    onClickApi: API_ENDPOINTS,
                    onClickApiMethod: POST,
                  },
                  {
                    name: "Download",
                    label: "Download",
                    icon:  " download",
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
                    type: SELECT,
                    className: "select-call-disposition-button",
                    sliceName: "filter",
                    name: "Call Disposition",
                    defaultValue: {
                      label: "Call Desposition",
                      value: "callDisposition",
                    }},
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
                              "Call Duration": " Call Duration",
                              " Call Score": " Call Score",
                              "call Disposition": " Call Disposition",
                              " Feedback Requested On": "Feedback Requested On",
                              "Feedback Requested By": "Feedback Requested By",
                              
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
                              "Call Duration": " Call Duration",
                              "Call Score": " Call Score",
                              "call Disposition": " Call Disposition",
                              "Feedback Requested On": "Feedback Requested On",
                              "Feedback Requested By": "Feedback Requested By",
                              
                            },
                      
                            fieldConst: "newPropertyConst",
                            editApi: "ALTER_RECORDED_CALLS_CALL_RECORDINGS_DATA",
                            deleteApi: "DELETE_RECORDED_CALLS_CALL_RECORDINGS_DATA",
                            getDataApi: "GET_RECORDED_CALLS_CALL_RECORDINGSL",
                            approveApi: "APPROVE_RECORDED_CALLS_CALL_RECORDINGS_DATA",
                            endpoint: 'API_ENDPOINTS[GET_RECORDED_CALLS_CALL_RECORDINGS]',
                            dataPoint: "GET_RECORDED_CALLS_CALL_RECORDINGS",
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
             //for meeting recordings
            {
              name:" Meeting Recordings",
              children:[
                ///FETCH DATA OF COLUMN
                {
                  type: "AUTO_FETCH_API_USER",
                  api: "API_ENDPOINTS[GET_RECORDED_CALLS_MEETING_RECORDINGS]",
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
                    className: "select-Request Feedback-button",
                    sliceName: "filter",
                    name: "Request Feedback",
                    isRequired: "True",
                    defaultValue: { label: "Regina Cooper", value: "Regina Cooper" },
                    options: [{ label: "Jacob Hawkins", value: "Jacob Hawkins" }],
                    options: [{ label: "Judy", value: "Judy" }],
                    onClickApi: API_ENDPOINTS,
                    onClickApiMethod: POST,
                  },
                {
                  name: "Download",
                  label: "Download",
                  icon:  " download",
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
                  className: "select-call-disposition-button",
                  sliceName: "filter",
                  name: "Call Disposition",
                  defaultValue: {
                    label: "Call Desposition",
                    value: "callDisposition",
                  }},
                  {
                    type: SELECT,
                    className: "select-Location-button",
                    sliceName: "filter",
                    name: "Location",
                    defaultValue: {
                      label: "Location",
                      value: "Zoom",
                    }},
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
                            "Meeting Title": "v Tile",
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
                            "Call Score": " Call Score",
                            "call Disposition": " Call Disposition",
                            "Feedback Requested On": "Feedback Requested On",
                            "Feedback Requested By": "Feedback Requested By",
                            
                          },
                          mobileHeaders: {
                            "Meeting ID": "Meeting Id",
                            "Meeting Title": "Meeting Tile",
                            "Lead ID": "Lead ID ",
                            "Lead Title": "Lead Title",
                            "Company Name": "Company Name",
                            "Product/Service": "Product/Service",
                            "Participants": "Participants",
                            "Meeting Owner": "Meeting Owner  ",
                            "Meeting Type": "Meeting Type",
                            "Meeting Date & Time": "Meeting Date & Time",
                            " Duration": "  Duration",
                            "Location": "Location",
                            "Call Score": " Call Score",
                            "call Disposition": " Call Disposition",
                            "Feedback Requested On": "Feedback Requested On",
                            "Feedback Requested By": "Feedback Requested By",
                            
                          },
                    
                          fieldConst: "newPropertyConst",
                          editApi: "ALTER_RECORDED_CALLS_MEETING_RECORDINGS",
                          deleteApi: "DELETE_RECORDED_CALLS_MEETING_RECORDINGS_DATA",
                          getDataApi: "GET_RECORDED_CALLS_MEETING_RECORDINGS",
                          approveApi: "APPROVE_RECORDED_CALLS_MEETING_RECORDINGS_DATA",
                          endpoint: 'API_ENDPOINTS[GET_RECORDED_CALLS_MEETING_RECORDINGS]',
                          dataPoint: "GET_RECORDED_CALLS_MEETING_RECORDINGS",
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