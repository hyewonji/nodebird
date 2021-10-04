import React, { useCallback, useState } from "react";
import AppLayout from "../components/AppLayout";
import styled from "styled-components";
import useInput from '../hooks/useInput';
import { Form, Input, Checkbox, Button } from "antd";


const ErrorMessage = styled.div`
  color: red;
`

const Signup = () => {
  const [id, onChangeId] = useInput('');
  const [nickname,onChangeNickname] = useInput('');
  const [password,onChangePassword] = useInput('');
  const [passwordCheck,setPasswordCheck] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const onChangePasswordCheck = useCallback((e)=>{
    setPasswordCheck(e.target.value)
    setPasswordError(e.target.value !== password);
  },[]);

  const [term,setTerm] = useState('');
  const [termError, setTermError]= useState(false);
  const onChangeTerm = useCallback((e)=>{
    setTerm(e.target.checked);
    setTermError(false);
  })
  
  const onSubmit = useCallback(()=>{
    if(password !== passwordCheck){
      return setPasswordError(true);
    }
    if(!term){
      return setTermError(true);
    }
    console.log(id,nickname,password);
  },[password, id, nickname]);

  return (
    <AppLayout>
      <Form onFinish={onSubmit}>
        <div>
          <label htmlFor="user-id">아이디</label>
          <br/>
          <Input name="user-id" value={id} onChange={onChangeId} required/>
        </div>
        <div>
          <label htmlFor="user-nickname">닉네임</label>
          <br/>
          <Input name="user-nickname" value={nickname} onChange={onChangeNickname} required/>
        </div>
        <div>
          <label htmlFor="user-password">비밀번호</label>
          <br/>
          <Input name="user-password" value={password} onChange={onChangePassword} required type="password"/>
        </div>
        <div>
          <label htmlFor="user-passwordCheck">비밀번호 확인</label>
          <br/>
          <Input name="user-passwordCheck" value={passwordCheck} onChange={onChangePasswordCheck} required type="password"/>
          {passwordError && <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>}
        </div>
        <div>
          <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>매일 TIL을 작성할 것을 동의합니다.</Checkbox>
          {termError && <ErrorMessage>약관에 동의하셔야 합니다.</ErrorMessage>}
        </div>
        <div>
          <Button type="primary" htmlType="submit">가입하기</Button>
        </div>
      </Form>
    </AppLayout>
  );
}

export default Signup;