import React from "react";

const Index = ({handler, skills}) => {
  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4 w-full max-w-md mx-auto p-4">
        <input
          type="text"
          placeholder="Search developers..."
          onChange={(e) => handler(e.target.value)}
          className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
        />
        <select 
        onChange={(e) => handler(e.target.value)}
        className="w-full sm:w-40 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm">
          {skills.map((skill, index) => (
            <option key={index} value={skill}>
              {skill}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Index;
