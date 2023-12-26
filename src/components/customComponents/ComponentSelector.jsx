import { useDispatch, useSelector } from "react-redux";
import {
  API_BUTTON,
  AUTO_FETCH_API,
  CONTAINER,
  DETAILED_VIEW,
  DYNAMIC_CARD_CONTAINER,
  GET,
  HEADING,
  IMAGE_BANNER,
  NAVIGATE_BUTTON,
  PAGE_FOOTER,
  SELECT,
  SLIDER,
  HAMBURGER_MENU,
  SELECT_SLIDER,
  API_HEADING,
  TOGGLE_BUTTON,
  SCROLL_TO_TOP,
  PAGE_HEADER,
  HORIZONTAL_LINE,
  LOADING,
  DASHBOARD_LISTING,
  ROUTE_BUTTON,
  LABEL_MAP,
  POST,
  AUTO_FETCH_API_POST,
  TABLE_HEADER,
  AUTO_FETCH_API_USER,
  TITLE,
  PANEL_HEADER,
  LOGIN_REFRESH,
  BUTTON,
  SELECT2,
  TABS,
  ABOUT_HERO,
  CONTACT_US,
  CONTAINER_365,
  SIDE_MENU_365,
  PAGES_365,
  DYNAMIC_CARD_CONTAINER_365,
  TOP_CALLS_TABLE_365,
  GRAP_SELLING_SKILL_365,
  LEADER_BOARD_365,
  SALE_PITHC_ANALUSIS_365,
  GRAP_DEAL_ANALYTICS_365,
  GRAP_EMOTIONAL_ANALYSIS_365,
  GRAPH_CALL_SENTIMENT_365,
  GRAPH_INTERRUPTION_365,
  GRAP_TALK_RATIO_365,
  SELECT3,
  CUSTOMTABLE,
  MAINLAYOUT,
} from "../utils/Const.js";
import Banner from "./Banner.jsx";
import Footer from "./Footer.jsx";
import Slider from "./Slider.jsx";
import Heading from "./Heading.jsx";
import ApiButton from "./ApiButton.jsx";
import DynamicHeading from "./DynamicHeading.jsx";
import SelectButton from "./SelectButton.jsx";
import AutoFetchApi from "./AutoFetchApi.jsx";
import NavigateButton from "./NavigateButton.jsx";
import SelectSlider from "./SelectSlider.jsx";
import RenderComponent from "./ComponentRenderer.jsx";
import {
  resetFilterData,
  storeFilterData,
} from "../../redux/slice/filterSlice.js";
import { callApi } from "../../redux/utils/apiActions.js";
import Header from "./Header.jsx";
import CustomToogleButton from "./CustomToogleButton.jsx";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress.js";
import { selectApiStatus } from "../../redux/utils/selectors.js";
import DashboardListing from "./DashboardListing.jsx";
import RouteButton from "./RouteButton.jsx";
import LabelMap from "./LabelMap.jsx";
import TableHeader from "./TableHeader.jsx";
import AutoFetchApiPost from "./AutoFetchApiPost.jsx";
import PanelHeader from "./PanelHeader.jsx";
import LoginRefresh from "./LoginRefresh.jsx";
import { useEffect, useState } from "react";
import Button from "./Button.jsx";
import DropSelect from "./DropSelect.jsx";
import Tabbar from "./Tabbar.jsx";

import AboutHero from "./AboutHero.jsx";
import ContactForm from "./ContactForm.jsx";
import Line from "./Line.jsx";
import Title from "./Title.jsx";
import SidebarMenu from "./360_components/menu_items.jsx";
import Selected_page from "./360_components/page_Change.jsx";

import BarChartComp from "./360_components/BarGraps.jsx";
import CallSentiment from "./360_components/CallSentiment.jsx";
import Leaderboard from "./360_components/TOP_leaderBoard.jsx";
import PitchAnalysis from "./360_components/Sale_Pitch_Analysis.jsx";
import Top_Call from "./360_components/table_TOPcall.jsx";
import DealsCard from "./360_components/cardDeals.jsx";
import Header_360 from "./360_components/Header.jsx";
import DealAnalysis from "./360_components/SRM_Bdm_Dashboard/Deal_Analytics.jsx";
import EmotionalAnalysisComp from "./360_components/SRM_Bdm_Dashboard/Emotional_Analysis.jsx";
import TalkRatio from "./360_components/SRM_Bdm_Dashboard/Ratio_bar.jsx";
import Interruptions from "./360_components/SRM_Bdm_Dashboard/Interruptions_Graph.jsx";
import DropSelect3 from "./Drop_Select3.jsx";
import CustomTable from "./360_components/CustomTable.jsx";
import MainLayout from "./360_components/MainLayout.jsx";
import dynamic from "next/dynamic";

const Comp = ({ component }) => {
  const isMobile = window.innerWidth <= 768; // Adjust the breakpoint as per your needs
  const dispatch = useDispatch();
  const sliceData = useSelector((state) => state[component.sliceName]);
  const apiStatus = useSelector((state) =>
    selectApiStatus(state, component.loadingApi || "")
  );
  const userProfile = useSelector((state) => state.profile);
  const [refresh, setRefresh] = useState(true);

  function hasValueProperty(input) {
    // Check if the input is an object
    if (typeof input === "object" && input !== null) {
      // Check if the object has a property named "value"
      return "value" in input;
    } else {
      return false;
    }
  }

  const getData = (payload) => {
    const page =
      (component.paginatioName || component.name) !== "page"
        ? sliceData?.page
        : 0;
    let reqPayload = {};
    if (payload == null) {
      reqPayload = {
        budget: sliceData?.budget,
        city: sliceData?.city,
        page: page,
      };
    } else {
      reqPayload = {
        ...sliceData,
        [component.paginatioName || component.name]:
          typeof payload === "object"
            ? Array.isArray(payload)
              ? payload
              : payload.value
            : payload,
      };
    }
    const markForDeletion = [];
    Object.keys(reqPayload).forEach((key) => {
      if (
        reqPayload[key] === false ||
        (Array.isArray(reqPayload[key]) && reqPayload[key].length === 0)
      ) {
        markForDeletion.push(key);
      }
      if (reqPayload[key] === true) {
        reqPayload[key] = "YES";
      }
    });
    markForDeletion.forEach((key) => {
      delete reqPayload[key];
    });
    const options = {
      url: component.onClickApi,
      method: component.onClickApiMethod,
      headers: { "Content-Type": "application/json" },
      data: reqPayload,
    };
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    if (Object.keys(reqPayload).includes("budget")) {
      dispatch(callApi(options));
    }
  };

  const handleValueChange = (value) => {
    if ((component.paginatioName || component.name) === "Reset") {
      // reset filters
      dispatch(
        resetFilterData({
          budget: sliceData?.budget,
          city: sliceData?.city,
          page: 0,
        })
      );
      if (component.onClickApi) {
        getData(null);
      }
    } else {
      dispatch(
        storeFilterData({
          key: component.paginatioName || component.name,
          value:
            typeof value === "object"
              ? Array.isArray(value)
                ? value
                : value.value
              : value,
        })
      );
      if (component.onClickApi) {
        getData(value);
      }
    }
  };

  const handleLoadMore = (payload) => {
    const options = {
      url: component.api,
      method: component.apiType,
      headers: { "Content-Type": "application/json" },
      params: payload,
    };
    if (component.api) {
      dispatch(callApi(options));
    }
  };

  useEffect(() => {
    // just read the querystring & update the filters accordingly and also update the querystring on filters change

    // if component.slicename is budget then set the slicedata budget to the components default
    if (
      (component.paginatioName || component.name) === "budget" &&
      refresh &&
      window.location.pathname === "/"
    ) {
      setRefresh(false);
      dispatch(
        storeFilterData({
          key: "budget",
          value: component.defaultValue,
        })
      );
    }
  }, []);

  return (
    <>
      {component.type === CONTAINER_365 && <Header_360 />}
      {component.type === SIDE_MENU_365 && (
        <SidebarMenu component={component} />
      )}
      {component.type === PAGES_365 && <Selected_page component={component} />}
      {component.type === MAINLAYOUT && <MainLayout component={component} />}
      {component.type === CUSTOMTABLE && <CustomTable component={component} />}
      {component.type === DYNAMIC_CARD_CONTAINER_365 && (
        <DealsCard component={component} />
      )}
      {component.type === TOP_CALLS_TABLE_365 && (
        <Top_Call component={component} />
      )}
      {component.type === GRAP_SELLING_SKILL_365 && (
        <BarChartComp component={component} />
      )}
      {component.type === LEADER_BOARD_365 && (
        <Leaderboard component={component} />
      )}
      {component.type === GRAP_DEAL_ANALYTICS_365 && (
        <DealAnalysis component={component} />
      )}
      {component.type === GRAP_EMOTIONAL_ANALYSIS_365 && (
        <EmotionalAnalysisComp component={component} />
      )}
      {component.type === SALE_PITHC_ANALUSIS_365 && (
        <PitchAnalysis component={component} />
      )}
      {component.type === GRAPH_CALL_SENTIMENT_365 && (
        <CallSentiment component={component} />
      )}
      {component.type === GRAP_TALK_RATIO_365 && (
        <TalkRatio component={component} />
      )}
      {component.type === GRAPH_INTERRUPTION_365 && (
        <Interruptions component={component} />
      )}
      {component.loadingApi && apiStatus === LOADING && (
        <CircularProgress className="loader-class" />
      )}
      {component.type === AUTO_FETCH_API && (
        <AutoFetchApi
          component={component}
          url={component.api}
          method={GET}
          params={component.params}
        />
      )}
      {component.type === AUTO_FETCH_API_POST && (
        <AutoFetchApi component={component} />
      )}
      {component.type === AUTO_FETCH_API_USER && (
        <AutoFetchApiPost component={component} />
      )}
      {component.type === TITLE && <Title component={component} />}
      {component.type === CONTAINER && (
        <RenderComponent jsonToRender={component} />
      )}
      {component.type === PANEL_HEADER && <PanelHeader component={component} />}
      {component.type === IMAGE_BANNER && <Banner component={component} />}
      {component.type === SELECT && (
        <SelectButton
          component={component}
          handleValueChange={handleValueChange}
          value={sliceData?.[component.name]}
        />
      )}
      {component.type === SELECT2 && (
        <DropSelect
          component={component}
          values={sliceData?.[component.name]}
          onSubmit={handleValueChange}
        />
      )}
      {component.type === SELECT3 && (
        <DropSelect3
          component={component}
          values={sliceData?.[component.name]}
          onSubmit={handleValueChange}
        />
      )}
      {component.type === SLIDER && (
        <Slider
          component={component}
          handleValueChange={handleValueChange}
          value={sliceData?.[component.name]}
        />
      )}
      {component.type === API_BUTTON && (
        <ApiButton component={component} data={sliceData} />
      )}
      {component.type === HEADING && <Heading component={component} />}
      {component.type === API_HEADING && (
        <DynamicHeading component={component} />
      )}
      {component.type === NAVIGATE_BUTTON && (
        <NavigateButton component={component} />
      )}
      {component.type === PAGE_FOOTER && <Footer component={component} />}
      {component.type === PAGE_HEADER && (
        <Header component={component} isMobile={isMobile} />
      )}
      {component.type === TABS && <Tabbar component={component} />}
      {component.type === SELECT_SLIDER && (
        <SelectSlider
          component={component}
          handleValueChange={handleValueChange}
          stateValue={sliceData[component.name]}
        />
      )}
      {component.type === TOGGLE_BUTTON && (
        <CustomToogleButton
          component={component}
          handleValueChange={handleValueChange}
          value={sliceData[component.name]}
        />
      )}
      {component.type === BUTTON && (
        <Button component={component} handleOnClick={handleValueChange} />
      )}
      {/* {component.type === CHATBOT && (
        <Chatbot />
      )} */}
      {component.type === DASHBOARD_LISTING && (
        <DashboardListing component={component} />
      )}
      {component.type === ROUTE_BUTTON && <RouteButton component={component} />}
      {component.type === LABEL_MAP && <LabelMap component={component} />}
      {component.type === HORIZONTAL_LINE && <Line />}
      {component.type === TABLE_HEADER && <TableHeader component={component} />}
      {component.type === LOGIN_REFRESH && (
        <LoginRefresh component={component} />
      )}
      {component.type === ABOUT_HERO && <AboutHero />}
      {component.type === CONTACT_US && <ContactForm />}
    </>
  );
};

const ComponentSelector = dynamic(() => Promise.resolve(Comp), { ssr: false });

export default ComponentSelector;
