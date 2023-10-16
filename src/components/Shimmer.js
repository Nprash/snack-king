import React from "react";

const Shimmer = () => {
  return (
    <div className="p-2 bg-slate-100 ">
      <div className="flex flex-nowrap">
      <div className="w-80 h-[300px] p-3 ">
        <div className="w-64 left-3 h-40 rounded-3xl bg-slate-400"></div>
        <div className="pl-4 pt-2 h-32">
          <h5 className="w-60 h-2 bg-slate-400">name</h5>
          <div className="mt-1 w-6 h-4 bg-slate-400">name22</div>
          <p className="text-gray-400 w-5 h-2">hellow</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Shimmer;
