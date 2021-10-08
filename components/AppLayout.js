import React from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'next/link';
import { Menu, Input, Row, Col } from "antd";
import LoginForm from "./LoginForm";
import UserProfile from "./UserProfile";
import { useSelector } from "react-redux";

 
const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`

const AppLayout = ({children}) => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return(
    <div>
      <Menu mode="horizontal" >
        <Menu.Item>
          <Link href="/"><a>노드버드</a></Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile"><a>프로필</a></Link>
        </Menu.Item>
        <Menu.Item>             
           <SearchInput />
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup"><a>회원가입</a></Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} s={6}>
          {isLoggedIn ? <UserProfile/> : <LoginForm/>}
        </Col>
        <Col xs={22} s={12} >   
          {children}
        </Col>
      </Row>
    </div>
  )
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired, // node : nodejs의 노드가 아니고 return에 들어가는 모든 것들을 의미한다.
}

export default AppLayout;