//Base page should be clean 
import './App.css';
import { getContactList } from "./redux/actions"
import CustomRouter from './router';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const loadingFlag = useSelector(state=>state.contactArrayList.loadingFlag);
  const errorMsgFlag = useSelector(state=>state.contactArrayList.errorMsgFlag);
  const contactListUpdated = useSelector(state=>state.contactArrayList.contact);
  const customDispatch = useDispatch();
  

  // we need to add this in diff file to dispatch action 
  useEffect(()=>{
    customDispatch(getContactList());
  }, []);

  return (
    <>
      <CustomRouter loadingFlag={loadingFlag} errorMsgFlag={errorMsgFlag}></CustomRouter>
    </>
  );
}

export default App;
