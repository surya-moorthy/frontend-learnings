import { Copy } from "lucide-react";

export default function Developers() {
    return (
        <div className="flex flex-col justify-center m-auto text-center gap-2.5 mt-20 w-[850px]">
             <p className="text-md text-neutral-500 font-poppins">Developers</p>
             <h1 className="text-3xl font-bold text-neutral-900 font-poppins">Simple integration with your stack</h1>
           <div className="bg-white roundex-xl max-w-full px-4 pt-8 pb-6 rounded-2xl border border-neutral-200">
               <div className="flex justify-around">
                    <Button title="Create Contact"/>
                    <Button title="Update Contact"/>
                    <Button title="Delete Contact"/>
                    <Button title="Send Contact"/>
                    <Button title="Send email"/>
               </div>
               <div className="rounded-2xl bg-neutral-100 text-blue-950 p-4 mt-5">
                <button className="flex items-center gap-2.5 ml-auto text-neutral-400">
                    <span>
                        copy to clipboard
                    </span>
                    <Copy size={15}/>
                </button>
                <div className="flex flex-col items-start">
                        {"{"}
                        <JsonDisplay />
                        {"}"}
                </div>
               </div>
                <div className="flex rounded-2xl bg-neutral-100 text-blue-950 p-2 mt-4">
                  <div className="flex gap-2 items-center">
                       <p className="text-blue-600 bg-blue-200 px-2.5 rounded-lg">post</p>
                       <p className="text-sm text-neutral-500">https://app.loops.so/api/v1/transactional</p> 
                  </div>
                  <button className="flex items-center gap-2.5 ml-auto text-neutral-400 px-2">
                    <span>
                        copy to clipboard
                    </span>
                    <Copy size={15}/>
                  </button>
                </div>

           </div>
        </div>
        
    )
}

const Button = ({title} : {title:string}) => {
    return (
     <button className="text-neutral-400 text-md font-semibold hover:text-neutral-600">
          {title}
     </button>
    )
}
function JsonDisplay() {
  const data = {
    email: "alice@example.com",
    firstName: "Alice",
    lastName: "Smith",
    source: "app",
    subscribed: true,
    userGroup: "paying",
    userId: "004",
};

  return (
    <p className="text-blue-950 px-4 text-start">
      {Object.entries(data).map(([key, value], index) => (
        <span key={key}>
          <span>"{key}"</span>: <span>{typeof value === "string" ? `"${value}"` : String(value)}</span>
          {index < Object.keys(data).length - 1 && <br />}
        </span>
      ))}
      <br />

    </p>
  );
}


