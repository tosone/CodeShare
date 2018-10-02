import React from 'react';

import { Layout } from 'antd';

import Banner from '../../components/Navbar';

class Signin extends React.Component {

  componentDidMount = () => {
    this.setState({
      current: "signin",
    })
  }

  render() {
    return (
      <Layout>
        <Banner />
        <div>Signin</div>
      </Layout>
    );
  }
}

export default Signin;
