import { TrashIcon } from "lucide-react";
import { column, Id } from "../types/types"

interface Props {
    column : column,
    deleteColumn: (id : Id) => void
}


function ColumnContainer(props : Props) {

    const {column} = props;

  return (
    <div className="flex flex-col bg-neutral-800 w-[350px] h-[500px] p-2 rounded-xl">
        <div className="flex justify-between bg-neutral-700 cursor-pointer px-4 py-2 rounded-xl">
             <div className="flex justify-center items-center gap-2">
                 <div className="flex justify-center items-center rounded-full bg-neutral-950 px-2.5 py-1 text-sm">
                        0
                  </div>

                  <div>
                      {column.title}
                  </div>
             </div>
             <button className="cursor-pointer stroke-white hover:bg-neutral-900 px-2 py-2 rounded-full" onClick={()=>{props.deleteColumn(column.id)}}>
                  <TrashIcon size={20}/>
              </button>
                
             </div>
             
               
        <div className="grow">
              Content
        </div>

        <div>
              Footer
        </div>
    </div>
  )
}

export default ColumnContainer