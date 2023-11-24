import { DASH_BOARD } from "../../360_screenJson";
import RenderComponent from "../customComponents/ComponentRenderer";


function DashBoard(){


    return(
        
         <>
   
      <div className="home-screen">
        <RenderComponent jsonToRender={DASH_BOARD} />                                                                                                                                                          
      </div>
    </>
        
    )
}

export default DashBoard;