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
  CONTAINER,
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

export const DASHBOARD_QAE = {
  name: "dashBoard",

  children: [
    {
      type: SIDE_MENU_365,
      items: MENU_ITEMS,
      className: "menu_comp",
      text: "Menu",
    },
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
          type: CONTAINER,
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
          type: CONTAINER,
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
      ],
    },
  ],
};
