import { ArrowButton } from "./ArrowButton";

export default function Hero() {
    return (
        <div className="hero-section flex flex-col justify-center items-center m-auto mt-10 max-w-2xl">
               <div className="rounded-2xl px-1.5 py-1 flex justify-center items-center gap-2 bg-neutral-50 w-fit drop-shadow-md mb-8">
                    <img src="/yc.png" alt="yc" width={15} height={10} className="align-middle"/>
                    <span className="text-neutral-400 text-sm font-semibold font-roboto text-center"> Backed by Y Combinator</span>
            </div>
              <div className="space-y-5">
                 <h1 className="text-4xl font-semibold font-poppins text-neutral-900">
                Email for modern software companies
               </h1>
               <p className="text-lg tracking-wide text-neutral-600 font-medium text-center ">
                Send your product, marketing, and transactional email with Loops. 
                One simple interface, for all your email.
               </p>
            </div>
            <div className="m-10 space-y-4">
                <button className="text-lg rounded-xl bg-neutral-950 font-semibold font-poppins px-5.5 py-2 shadow-md">
                    Get Started 
                </button>
               <ArrowButton title={"Read docs"}/>
            </div>
        </div>
    )
}