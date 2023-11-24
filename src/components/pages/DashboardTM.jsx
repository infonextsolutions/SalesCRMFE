import { DASHBOARD_TM } from "../../360_Json_files/Team_Manager/Team_Mangaer_Dashboard";
import RenderComponent from "../customComponents/ComponentRenderer";

function DashboardTM() {
  return (
    <>
      <div className="home-screen">
        <RenderComponent jsonToRender={DASHBOARD_TM} />
      </div>
    </>
  );
}

export default DashboardTM;
