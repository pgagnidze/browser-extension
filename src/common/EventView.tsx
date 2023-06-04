import React, { useState, useEffect } from 'react';

export default function EventView({ event }) {
  // vertical flexbox
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="bg-blue-500 rounded-lg p-4">
        <div className="text-white text-2xl font-bold">
          {event.eventInput}
        </div>
      </div>
      <div className="bg-gray-100 rounded-lg p-2 mt-4">
        <div className="text-gray-900 text-2xl font-bold">
          {event?.eventProperties?.parsedResponse?.thought}
          {event?.eventProperties?.parsedResponse?.action}
        </div>
      </div>
    </div>
  );
}
