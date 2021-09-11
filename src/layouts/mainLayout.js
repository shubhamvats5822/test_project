// import external modules
import React, { PureComponent } from "react";
import Navbar from "./components/navbar/navbar";
import Footer from './components/footer/footer'

class MainLayout extends PureComponent {
   state = {
      width: window.innerWidth,
      sidebarState: "close",
      sidebarSize: '',
      layout: ''
   };

   updateWidth = () => {
      this.setState(prevState => ({
         width: window.innerWidth
      }));
   };

   handleSidebarSize = (sidebarSize) => {
      this.setState({ sidebarSize });
   }

   handleLayout = (layout) => {
      this.setState({ layout });
   }

   componentDidMount() {
      if (window !== "undefined") {
         window.addEventListener("resize", this.updateWidth, false);
      }
   }

   componentWillUnmount() {
      if (window !== "undefined") {
         window.removeEventListener("resize", this.updateWidth, false);
      }
   }

   toggleSidebarMenu(sidebarState) {
      this.setState({ sidebarState });
   }

   render() {
      return (
            <div>
                        <Navbar
                           toggleSidebarMenu={this.toggleSidebarMenu.bind(this)}
                           sidebarState={this.state.sidebarState}
                        />
                        <main>{this.props.children}</main>
                        <Footer />
                     </div>
      );
   }
}

export default MainLayout;
