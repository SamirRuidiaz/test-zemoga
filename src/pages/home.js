import React from 'react';
import { BoxInformation } from '../components/BoxInformation/BoxInformation';
import { BoxSuggest } from '../components/BoxSuggest/BoxSuggest';
import { Footer } from '../components/Footer/Footer';
import { GridVotes } from '../components/GridVotes/GridVotes';
import { Header } from '../components/Header/Header';

export const HomeScreen = () => {
  return(
    <main>
      <Header />     
      <section className="section">
        <div className="container">

          <BoxInformation />
          
          <GridVotes />

          <BoxSuggest />

          <Footer />

        </div>
      </section>
    </main>
  );
}