import React from 'react';
import { IWaterfallEvent } from '../state/store';
import { eventTypeToHumanText, formatDuration } from './Waterfall';
import clsx from 'clsx';

export default function EventView({
  event,
}: {
  event: IWaterfallEvent | null;
}) {
  // vertical flexbox
  return (
    <div className="my-4 h-full w-full flex flex-col bg-gray-100 overflow-scroll">
      {event !== null ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: '0px',
            gap: '24px',
            paddingLeft: '24px',
            paddingRight: '24px',
            paddingTop: '24px',
          }}
        >
          <p
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-start',
              padding: '6.48101px 9.72152px',
              gap: '3.24px',
            }}
            className={clsx(
              event.eventInput === 'ProcessDOM'
                ? 'bg-sky-300 text-sky-800'
                : event.eventInput === 'DetermineAction'
                ? 'bg-blue-300 text-blue-800'
                : event.eventInput === 'PerformAction'
                ? 'bg-blue-500 text-white'
                : event.eventInput === 'FinishAction' &&
                  'bg-gray-200 text-gray-700 ',
              ' font-semibold rounded-md'
            )}
          >
            {eventTypeToHumanText[event.eventInput]}
          </p>
          {/* Timing */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              padding: '0px',
              gap: '48px',
            }}
          >
            {/* Duration */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '0px',
                gap: '0px',
              }}
            >
              <p className="text-[16px] text-gray-600">Process Duration</p>
              <h3 className="text-[32px] text-black">
                {event.elapsed ? formatDuration(event.elapsed) : 'Pending'}
              </h3>
            </div>
            {/* Start and finish time */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '0px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'flex-start',
                  padding: '6px 0px',
                  gap: '24px',
                }}
                className="text-base text-gray-600 border-b border-gray-200 w-[180px]"
              >
                <p className="w-[100px]">Start Time</p>
                <p>{formatDuration(event.start)}</p>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'flex-start',
                  padding: '6px 0px',
                  gap: '24px',
                }}
                className="text-base text-gray-600"
              >
                <p className="w-[100px]">Finish Time</p>
                <p>
                  {event.finished ? formatDuration(event.finished) : 'Pending'}
                </p>
              </div>
            </div>
          </div>
          {/* Thoughts and actions */}
          {event.eventInput === 'DetermineAction' && (
            <div className="p-6 w-full bg-gray-200 rounded-md">
              {event.eventProperties!.parsedResponse.thought}
            </div>
          )}
          {event.eventInput === 'PerformAction' && (
            <div className="p-6 w-full bg-gray-200 rounded-md">
              {`I am going to ${event.eventProperties!.parsedResponse.action}`}
            </div>
          )}

          {/* Event Properties */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              padding: '0px',
              gap: '4px',
            }}
            className="w-full"
          >
            <h2 className="text-3xl font-light">Event Properties</h2>
            {Object.keys(event.eventProperties).length !== 0 &&
              Object.keys(event.eventProperties).map((key, index) => (
                <div
                  className={clsx(
                    'w-full py-2 border-b border-gray-200 last:border-b-0 flex flex-row text-sm'
                  )}
                  key={index}
                >
                  <p className="w-[180px] text-gray-600">{key}</p>
                  <p className="grow">
                    {typeof event.eventProperties![key] === 'object'
                      ? JSON.stringify(event.eventProperties![key])
                      : `${event.eventProperties![key]}`}
                  </p>
                </div>
              ))}
          </div>
        </div>
      ) : (
        <div>'Select an event to view its details'</div>
      )}
    </div>
  );
}
