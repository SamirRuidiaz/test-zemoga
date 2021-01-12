import React from 'react';
import { dataVotes } from './data/data';
import { AppRouter } from './routers/AppRouter';


export const App = () => {
  
  if(localStorage.getItem("dataVotes") === null){
    localStorage.setItem('dataVotes', JSON.stringify(dataVotes));
  }

  return (
    <>
      <AppRouter />
    </>
  );
}