/** @format */

import React from 'react';

import { Cards } from './componets';
import styles from './app.module.css';
import { fetchData } from './api';

class App extends React.Component {
 state = {
  data: {},
 };
 async componentDidMount() {
  const fetchedData = await fetchData();
  this.setState({ data: fetchedData });
 }
 render() {
  const { data } = this.state;
  return (
   <div className={styles.container}>
    <h1>Live COVID-19 statistics</h1>
    <Cards data={data} />
   </div>
  );
 }
}

export default App;
