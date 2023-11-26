import { DASHBOARD_QAM } from "../../360_Json_files/QA_Manager/QAM_Dasboard";
import RenderComponent from "../customComponents/ComponentRenderer";
import dynamic from 'next/dynamic'

function Comp() {
  return (
    <>
      <div className="home-screen">
        <RenderComponent jsonToRender={DASHBOARD_QAM} />
      </div>
    </>
  );
}

const DashboardQAM = dynamic(() => Promise.resolve(Comp), { ssr: false })

export default DashboardQAM;
