import { DASHBOARD_QAE } from "../../360_Json_files/QA_excutive/Dashboard_QA_Executive";
import RenderComponent from "../customComponents/ComponentRenderer";
import dynamic from 'next/dynamic'

function Comp() {
  return (
    <>
      <div className="home-screen">
        <RenderComponent jsonToRender={DASHBOARD_QAE} />
      </div>
    </>
  );
}

const DashBoardQAE = dynamic(() => Promise.resolve(Comp), { ssr: false })

export default DashBoardQAE;
