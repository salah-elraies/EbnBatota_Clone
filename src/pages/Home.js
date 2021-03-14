import React from 'react';
import Recommended from '../components/recommended';
// import SearchForm from '../components/SearchForm';
import Header from "../components/Header";

// import CocktailList from '../components/CocktailList';


export default function Home() {
  return (
    <>
      <main>
        <Header />
        <Recommended />
      </main>
    </>
  )
}
