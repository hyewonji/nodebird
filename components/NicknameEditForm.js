import { Input } from 'antd';
import React,{useMemo} from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const InputSearch = styled(Input.Search)`
  margin-bottom: 28px;
  border: 1px solid #d9d9d9;
  padding: 20px;
`

const NicknameEditForm = () => {

  const {getValues, handleSubmit} = useForm({
    defaultValues: {nicknameEdit: 'hyewon'}
  });

  return(
    <InputSearch name="nicknameEdit" addonBefore="닉네임" enterButton="수정"/>
  )
}

export default NicknameEditForm;