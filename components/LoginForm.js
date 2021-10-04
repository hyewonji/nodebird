import { Button } from "antd";

import PropTypes from 'prop-types';

import Link from "next/link";

import React, { useCallback, useState } from "react";

import { useForm } from "react-hook-form";

import styled from "styled-components";

const FormContainer = styled.div`
  padding: 10px;
`

const InputContainer = styled.div`
  margin-top: 5px;
`

const ButtonsContainer = styled.div`
  margin-top: 10px;
`

const Input = styled.input``

const Lable = styled.div``


const LoginForm = ({ setIsLogedIn }) => {
  const {control, getValues, handleSubmit} = useForm();
  
  const onSubmit = useCallback(()=> {
    setIsLogedIn(true);
  },[]);
  
  return (
    <FormContainer>
      <InputContainer>
        <Lable>아이디</Lable>
        <Input name="username" ></Input>
      </InputContainer>
      <InputContainer>
        <Lable>비밀번호</Lable>
        <Input name="password"></Input>
      </InputContainer>
      <ButtonsContainer>
        <Button onClick={handleSubmit(onSubmit)}>로그인</Button>
        <Button type="primary">
        <Link href="/signup"><a>회원가입</a></Link>
        </Button>
      </ButtonsContainer>
    </FormContainer>
  );
}

LoginForm.propTypes = {
  setIsLogedIn: PropTypes.node.isRequired
}

export default LoginForm;