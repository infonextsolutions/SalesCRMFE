import { Recorded_calls_Call_Recordings } from "../../../360_Json_files/sdr_bdm/RecordedCalls";

import RenderComponent from "../../customComponents/ComponentRenderer"






function RecordedCall(){


    return(
        <>
   
        <div className="home-screen">
          <RenderComponent jsonToRender={Recorded_calls_Call_Recordings} />                                                                                                                                                          
        </div>
      </>
   
)
}

export default RecordedCall;