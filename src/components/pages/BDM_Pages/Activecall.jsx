import { Active_call_Sheduled_Call } from "../../../360_Json_files/sdr_bdm/active_call_sheduled_call"
import RenderComponent from "../../customComponents/ComponentRenderer"
import dynamic from 'next/dynamic'





function Comp(jsonToRender) {


  return (
    <>

      <div className="home-screen">
        <RenderComponent jsonToRender={Active_call_Sheduled_Call} />
      </div>
    </>

  )
}

const ActiveCall = dynamic(() => Promise.resolve(Comp), { ssr: false })

export default ActiveCall