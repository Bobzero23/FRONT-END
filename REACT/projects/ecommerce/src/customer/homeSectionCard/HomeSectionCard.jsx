import React from "react";

function HomeSectionCard() {
  return (
    <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3">
      <div className="h-[13rem] w-[10rem] mx-3">
        <img
          className="object-cover object-top w-full h-full"
          src="https://images.unsplash.com/photo-1471970471555-19d4b113e9ed?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGJvb2tzfGVufDB8fDB8fHww"
          alt=""
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">Example</h3>
        <p className="mt-2 text-sm text-gray-500">This is just an Example</p>
      </div>
    </div>
  );
}

export default HomeSectionCard;
