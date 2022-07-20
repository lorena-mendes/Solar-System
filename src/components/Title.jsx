import React from 'react';
import SolarSystem from './SolarSystem';

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return (
      <h2>
        {headline}
      </h2>
    );
  }
}

Title.propTypes = {
  headline: toString.isRequired,
};

export default Title;
