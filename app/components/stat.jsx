import React from 'react';
import manhattan from '../assets/data/manhattan';

export default class Stat extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { precinctId } = this.props;
    return (
      <aside>{precinctId}</aside>
    )
  }
}
