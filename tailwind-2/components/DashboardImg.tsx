import Image from "next/image";

export default function DashboardImg() {
    return (
       <div className="p-2.5 rounded-xl bg-[#f4f4f5] w-fit flex m-auto">
           <div className="p-2 rounded-xl bg-[#e4e4e7]">
                 <img
                 className="rounded-xl" 
                 src="das.png" 
                 alt="dashboardImage" 
                 width={1000} 
                 height={1000} />
           </div>
       </div>   
    )
}