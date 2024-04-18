import React from "react";
import TopbarGeneral from "../../components/General/TopbarGeneral";
import FeedMenu from "../../components/Home/FeedMenu";
import CardArtigo from "../../components/General/CardArtigo";
import DemoDescubra from "../../components/Demo/DemoDescubra";
import QuemSeguir from "../../components/General/QuemSeguir";

const Home = () => {
  return (
    <>
      <TopbarGeneral />
      <div className="container mx-auto h-screen">
        <div className="grid grid-cols-1 md:grid-cols-5 md:h-full h-auto ">
          <div className="md:col-span-3">
            <FeedMenu />

            <div className="flex justify-center">
              <div>
                <CardArtigo />
                <CardArtigo />
                <CardArtigo />
                <CardArtigo />
                <CardArtigo />
                <CardArtigo />
                <CardArtigo />
                <CardArtigo />
                <CardArtigo />
              </div>
            </div>
          </div>

          <div className=" md:col-span-2  md:pl-10 ">
            <DemoDescubra />
            <QuemSeguir />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
