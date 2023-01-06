import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div>
        <Title headline="Missões" />
        <div data-testid="missions" className="missions">
          {missions.map(({ name, year, country, destination }) => (
            <MissionCard
              name={ name }
              year={ year }
              country={ country }
              destination={ destination }
              key={ name }
            />))}
        </div>
      </div>
    );
  }
}

export default Missions;
