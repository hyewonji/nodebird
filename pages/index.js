import React from "react";
import { useForm } from "react-hook-form";
import AppLayout from "../components/AppLayout";

const Home = () => {
  const {control, getValues, handleSubmit} = useForm()
  return (
    <AppLayout>
      <div>Hello, Next</div>
    </AppLayout>
  );
}

export default Home;