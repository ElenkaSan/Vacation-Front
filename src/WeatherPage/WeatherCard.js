import React from 'react';
import { Card, CardHeader, CardBody } from 'reactstrap';

const weatherUrl = "https://www.weatherbit.io/static/img/icons";
const WeatherDayCard = (props) => {
 // console.log(props);
  return (
    <div className="justify-content-center align-items-center p-2 col-3 col-6 col-md-3">
      <Card className='J T text-light mt-2 text-center'>
        <CardHeader className='weather-header text-info lead'>{props.day}</CardHeader>
        <CardBody>
          <p className='current-weather'>{props.current} F°</p>
          <img
            src={`${weatherUrl}/${props.icon}.png`}
            alt={props.description}
          />
          <p className='high'>High: {props.high} F°</p>
          <p className='low'>Low: {props.low} F°</p>
        </CardBody>
      </Card>
    </div>
  );
};

export default WeatherDayCard;