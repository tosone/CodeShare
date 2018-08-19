import React from 'react';
import { Layout, Menu, Icon } from 'antd';

class Navbar extends React.Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <Layout.Header>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
          theme="dark"
          defaultSelectedKeys={['1']}
          style={{ lineHeight: '64px' }}>
          <Menu.Item key="home">
            <Icon type="home" />首页
          </Menu.Item>
          <Menu.Item key="explor">
            <Icon type="star" />探索
          </Menu.Item>
          <Menu.Item key="ranking">
            <Icon type="line-chart" />排行榜
          </Menu.Item>
        </Menu>
      </Layout.Header>
    );
  }
}

export default Navbar;
