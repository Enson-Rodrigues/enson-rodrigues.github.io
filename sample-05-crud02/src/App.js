//Base page should be clean 
import './App.css';
import http from './api';
import { getContactList } from "./redux/actions"
import CustomRouter from './router';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const contacts = useSelector(state=>console.log(state));
  const loadingFlag = useSelector(state=>state.Contact.loadingFlag);
  const errorMsgFlag = useSelector(state=>state.Contact.errorMsgFlag);
  const customDispatch = useDispatch();
  
  // we need to add this in diff file to dispatch action 
  useEffect(()=>{
      customDispatch(getContactList());
      //setLoadingFlag(true);
  }, [])

  return (
    <>
      <CustomRouter loadingFlag={loadingFlag} errorMsgFlag={errorMsgFlag}></CustomRouter>
    </>
  );
}

export default App;
