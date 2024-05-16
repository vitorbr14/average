import React from "react";
import DemoHeader from "../../components/Demo/DemoHeader";
import DemoHero from "../../components/Demo/DemoHero";
import DemoFeed from "../../components/Demo/DemoFeed";
import DemoDescubra from "../../components/Demo/DemoDescubra";
import Footer from "../../components/General/Footer";

export const Demo = () => {
  return (
    <>
      <DemoHeader />

      <DemoHero />
      <div id="heightDiv" className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 md:h-full h-auto ">
          <div className="md:col-span-3">
            <DemoFeed />
          </div>
          <div className=" md:col-span-2">
            <DemoDescubra />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};
