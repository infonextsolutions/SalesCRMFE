import { Recorded_calls_Call_Recordings } from "../../../360_Json_files/sdr_bdm/RecordedCalls";

import RenderComponent from "../../customComponents/ComponentRenderer"
import dynamic from 'next/dynamic'





function Comp(){


    return(
        <>
   
        <div className="home-screen">
          <RenderComponent jsonToRender={Recorded_calls_Call_Recordings} />                                                                                                                                                          
        </div>
      </>
   
)
}

const RecordedCall = dynamic(() => Promise.resolve(Comp), { ssr: false })

export default RecordedCall;