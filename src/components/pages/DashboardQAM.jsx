import { DASHBOARD_QAM } from "../../360_Json_files/QA_Manager/QAM_Dasboard";
import RenderComponent from "../customComponents/ComponentRenderer";

function DashboardQAM() {
  return (
    <>
      <div className="home-screen">
        <RenderComponent jsonToRender={DASHBOARD_QAM} />
      </div>
    </>
  );
}

export default DashboardQAM;
