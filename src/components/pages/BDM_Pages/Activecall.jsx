import { Active_call_Sheduled_Call } from "../../../360_Json_files/sdr_bdm/active_call_sheduled_call"
import RenderComponent from "../../customComponents/ComponentRenderer"






function ActiveCall(jsonToRender) {


  return (
    <>

      <div className="home-screen">
        <RenderComponent jsonToRender={Active_call_Sheduled_Call} />
      </div>
    </>

  )
}

export default ActiveCall