import React from 'react';
import { IWaterfallEvent } from '../state/store';
import { eventTypeToHumanText } from './Waterfall';
import clsx from 'clsx';

export default function EventView({
  event,
}: {
  event: IWaterfallEvent | null;
}) {
  // vertical flexbox
  return (
    <div className="my-4 h-full w-full flex flex-col bg-gray-100">
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
                ? 'bg-sky-300 '
                : event.eventInput === 'DetermineAction'
                ? 'bg-blue-300 '
                : event.eventInput === 'PerformAction'
                ? 'bg-blue-500 '
                : event.eventInput === 'FinishAction' && 'bg-gray-200 ',
              'text-white font-semibold rounded-md'
            )}
          >
            {eventTypeToHumanText[event.eventInput]}
          </p>
          <div></div>
        </div>
      ) : (
        <div>'Select an event to view its details'</div>
      )}
    </div>
  );
}
