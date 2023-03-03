import React from "react";

const Kanban=({list}:KanbasProps)=>{
    console.log(list);
    var enq = list.filter(obj => {
        return obj.type === "enquiry"
      })
    return(
        <>
            {enq.length && (
                <>
                    <div className="w-[300px]">
                        <div className="leadName flex">
                            <div className="w-[70%] bg-renal-blue h-[40px]"></div>
                        </div>
                    </div>
                </>
            )
            }
        </>
    )
}

export default Kanban;

interface KanbasProps{
    list:{}[];
}