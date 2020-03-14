import React, { Component } from 'react';
import CardContainer from './component/CardContainer';
import ShowLoading from './component/showLoading';
import 'antd/dist/antd.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
    }
  }
  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 5000);
  }
  render() {
    return (
      // ShowLoading(<CardContainer loading={this.state.loading} />)
      <CardContainer loading={this.state.loading} />
    );
  }
}
export default App;
