import React from 'react';
import ReactDOM  from 'react-dom/client';
import Footer from './components/Footer';
import Header from './components/Header';
import MainBody from './components/Mainbody';


const AppLayout = () => {
    return (
      <>
     <Header></Header>
     <MainBody></MainBody>
     <Footer></Footer>
      </>
    );
  };
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);