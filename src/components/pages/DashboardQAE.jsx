import { DASHBOARD_QAE } from "../../360_Json_files/QA_excutive/Dashboard_QA_Executive";
import RenderComponent from "../customComponents/ComponentRenderer";

function DashBoard() {
  return (
    <>
      <div className="home-screen">
        <RenderComponent jsonToRender={DASHBOARD_QAE} />
      </div>
    </>
  );
}

export default DashBoard;
