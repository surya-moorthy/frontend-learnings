import { ArrowButton } from "@/components/ArrowButton";

export default function Marketers() {
    return(
         <div className="flex flex-col justify-center m-auto text-center gap-2.5 mt-20 w-[1000px]">
             <p className="text-md text-neutral-500 font-poppins">Marketers</p>
             <h1 className="text-3xl text-neutral-900 font-bold  font-poppins">Craft a respectful customer journey</h1>
            
            <div className="flex flex-col justify-center items-center w-full bg-white rounded-2xl p-8 mt-10">
                    <p className="text-md text-neutral-900 font-poppins font-bold my-3">Build your Loop</p>
                    <p className="w-[65%]] text-center text-sm text-neutral-600 my-0.5">From onboarding emails to engaging users who </p>
                    <p className="w-[65%]] text-center text-sm text-neutral-600 ">haven’t explored your app, automate it all with Loops.</p>
                    <div className="my-5">
                         <ArrowButton title="Learn more"/>
                    </div>
              <WorkflowUI/>
            </div>
        
        </div>
    )
}

import React from "react";

const steps = [
  {
    step: "1",
    title: "Start with a trigger",
    items: ["Contact updated", "Event fired", "Contact added"],
  },
  {
    step: "2",
    title: "Refine your audience",
    items: ["Timer", "Branch", "Audience filter"],
  },
  {
    step: "3",
    title: "Send your message",
    items: ["Welcome to Loops"],
    subtitle: "Email you actually want to read",
  },
];

const WorkflowUI = () => {
  return (
    <div className="relative bg-[#f8fafc] py-16 px-6 ">
      {/* Top connector line */}
      <div className="absolute top-[88px] left-0 w-full flex justify-center z-0">
        <div className="w-[75%] h-[2px] bg-neutral-200 rounded-full opacity-60" />
      </div>

      {/* Steps */}
      <div className="relative z-10 flex justify-center gap-8 max-w-5xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-6 w-72 flex flex-col gap-4"
          >
            <div className="text-sm font-semibold text-neutral-500">
              {step.step}
            </div>
            <div className="text-lg font-semibold text-neutral-900">
              {step.title}
            </div>
            <div className="flex flex-col gap-2">
              {step.items.map((item, i) => (
                <div
                  key={i}
                  className="bg-[#e4e4e7] text-sm font-medium text-neutral-800 px-4 py-2 rounded-xl shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
            {step.subtitle && (
              <div className="text-xs text-neutral-400 pt-2">
                {step.subtitle}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#fdfdfc] to-transparent pointer-events-none" />
    </div>
  );
};

