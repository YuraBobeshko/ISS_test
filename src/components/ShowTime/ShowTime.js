import React from 'react';
import Moment from 'react-moment';

import './ShowTime.scss';

function ShowTime({string, time, data, formatTime, formatData, ...attrs}) {
  return (
    <div className={'ShowTime'}>
      <b>
        <span>{string}</span>
        { time &&
        <Moment {...attrs} format={formatTime} interval={1000} />
        }
      </b>
      <br/>
     { data &&
      <Moment {...attrs} format={formatData} interval={100000} />
      }
    </div>
    )
}

export default ShowTime


