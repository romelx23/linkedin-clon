import React from "react";

export const CardNotification = () => {
  return (
    <div className="flex p-3 bg-blue-800 border-b border-gray-400">
      <img
        className="w-16 h-16 rounded-full"
        src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/d6/d6f9f5e578519aa21b363abb5bf7b8d3edfbc960.jpg"
        alt="logo__corp"
      />
      <div className="pl-2 flex-1 flex justify-between items-center">
        <h3>
          ALvaro Rojas
          <span>ha compartido una publcacion</span>
        </h3>
        <i className="fas fa-ellipsis-h"></i>
      </div>
    </div>
  );
};
