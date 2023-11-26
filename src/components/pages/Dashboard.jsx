import { DASH_BOARD } from "../../360_screenJson";
import RenderComponent from "../customComponents/ComponentRenderer";
import dynamic from 'next/dynamic'

function Comp(){


    return(
        
         <>
   
      <div className="home-screen">
        <RenderComponent jsonToRender={DASH_BOARD} />                                                                                                                                                          
      </div>
    </>
        
    )
}

const DashBoard = dynamic(() => Promise.resolve(Comp), { ssr: false })

export default DashBoard;