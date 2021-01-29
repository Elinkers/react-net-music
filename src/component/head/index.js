import React from 'react';
import {Menu, Row, Col, Input, Button, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './index.less';

const { Search } = Input;

const Head = () => {
    return (
        <div className="main">
            <Row justify="center">
                <Col span={3}>
                    <div className="logo"
                        set
                        style={{ width: "170px", height: "64px" }}
                    >网易云音乐</div></Col>
                <Col span={10}
                    justify="center">
                    <Row justify="center">
                        <Menu
                            theme="dark"
                            mode="horizontal">
                            <Menu.Item key="1">
                                <div style={{ width: "56px", height: "64px" }}>发现音乐</div>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <div style={{ width: "56px", height: "64px" }}>我的音乐</div>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <div style={{ width: "28px", height: "64px" }}>朋友</div>
                            </Menu.Item>
                            <Menu.Item key="4">
                                <div style={{ width: "28px", height: "64px" }}>商城</div>
                            </Menu.Item>
                            <Menu.Item key="5">
                                <div style={{ width: "42px", height: "64px" }}>音乐人</div>
                            </Menu.Item>
                            <Menu.Item key="6">
                                <div style={{ width: "70px", height: "64px" }}>下载客户端</div>
                            </Menu.Item>
                        </Menu>
                    </Row>
                </Col>
                <Col span={4}>
                    <div className="search" set>
                        <Search placeholder="音乐/视频/电台/用户"
                            style={{ width: "180px", height: "32px" }}
                        ></Search>

                    </div>
                </Col>
                <Col span={2}>
                    <div className="button" set>
                        <Button ghost
                            style={{ borderRadius: "30px", width: "100px", height: "32px" }}>创作者中心</Button>
                    </div>
                </Col>
                <Col span={1}>
                    <div className="picture" set>
                        <Avatar icon={<UserOutlined />}
                            style={{ width: "32px", height: "32px" }} />
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Head;