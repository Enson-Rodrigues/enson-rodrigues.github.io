//Base page should be clean 
import './App.css';
import { getContactList } from "./redux/actions"
import CustomRouter from './router';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const loadingFlag = useSelector(state=>state.Contact.loadingFlag);
  const errorMsgFlag = useSelector(state=>state.Contact.errorMsgFlag);
  const customDispatch = useDispatch();

  // we need to add this in diff file to dispatch action 
  useEffect(()=>{
    customDispatch(getContactList());
  }, [])

  return (
    <>
      <CustomRouter loadingFlag={loadingFlag} errorMsgFlag={errorMsgFlag}></CustomRouter>
    </>
  );
}

export default App;
