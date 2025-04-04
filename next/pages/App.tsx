import React, { Component } from 'react';
// import Navbar from '@/src/app/shared/Navbar';
import Sidebar from "@/src/app/shared/Sidebar";
import Footer from '@/src/app/shared/Footer';

export default class App extends Component {
  state = {
    isFullPageLayout: false
  }

  render() {
    // const navbarComponent = !this.state.isFullPageLayout ? <Navbar/> : null;
    const sidebarComponent = !this.state.isFullPageLayout ? <Sidebar /> : null;
    const footerComponent = !this.state.isFullPageLayout ? <Footer/> : null;
    return (
      <div className="container-scroller">
        {/* { navbarComponent } */}
        <div className="container-fluid page-body-wrapper">
          {sidebarComponent}
          <div className="main-panel">
            <div className="content-wrapper">
              {/* Seu conteúdo aqui */}
            </div>
            { footerComponent }
          </div>
        </div>
      </div>
    );
  }
}