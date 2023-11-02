import React from 'react';
import DateTimeDisplay from './DateTimeDisplay';
import { useCountdown } from '../hooks/useCountdown';

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Expired!!!</span>
      <p>Please select a future date and time.</p>
    </div>
  );
};

const ShowCounter = ({ days='30', hours='59', minutes='59', seconds='59' }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="y-divide">
           <p className="countdown">
              {days.toString().padStart(2,'0')}    
          </p>
          <p>Days</p>
      </div>
      <p className="flex items-center text-2xl pb-5">:</p>
      <div className="y-divide">        
        <p className="countdown">
            {hours.toString().padStart(2,'0')}
        </p>
          <p>hours</p>
      </div>
      <p className="flex items-center text-2xl pb-5">:</p>
      <div className="y-divide">          
          <p className="countdown">
              {minutes.toString().padStart(2,'0')}
          </p>
          <p>minutes</p>
      </div>
      <p className="flex items-center text-2xl pb-5">:</p>
      <div className="y-divide">        
          <p className="countdown">
              {seconds.toString().padStart(2,'0')}
          </p>
          <p>Seconds</p>
      </div>
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
