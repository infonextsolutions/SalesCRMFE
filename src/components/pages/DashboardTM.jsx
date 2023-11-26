import { DASHBOARD_TM } from "../../360_Json_files/Team_Manager/Team_Mangaer_Dashboard";
import RenderComponent from "../customComponents/ComponentRenderer";
import dynamic from 'next/dynamic'

function Comp() {
  return (
    <>
      <div className="home-screen">
        <RenderComponent jsonToRender={DASHBOARD_TM} />
      </div>
    </>
  );
}

const DashboardTM = dynamic(() => Promise.resolve(Comp), { ssr: false })

export default DashboardTM;
