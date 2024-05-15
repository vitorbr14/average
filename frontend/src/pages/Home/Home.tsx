import React, { useContext, useEffect, useState } from "react";
import TopbarGeneral from "../../components/General/TopbarGeneral";
import FeedMenu from "../../components/Home/FeedMenu";
import CardArtigo from "../../components/General/CardArtigo";
import DemoDescubra from "../../components/Demo/DemoDescubra";
import QuemSeguir from "../../components/General/QuemSeguir";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { FeedType } from "../../types/types";
import { useAuthContext } from "../../hooks/useAuthContext";

const Home = () => {
  const { currentUser, userToken } = useAuthContext();
  const [feed, setFeed] = useState<FeedType[]>();
  useEffect(() => {
    if (currentUser) {
      if (currentUser.accessToken) {
        axios
          .get("http://localhost:5656/api/v1/feed", {
            headers: {
              "x-firebase-appcheck": `Bearer ${currentUser?.accessToken}`,
            },
          })
          .then(function (response) {
            const slicedArray = response.data;
            setFeed(slicedArray.slice(0, 4));
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }
  }, [currentUser]);

  return (
    <>
      <TopbarGeneral />

      <div className="container mx-auto h-screen">
        <div className="grid grid-cols-1 md:grid-cols-5 md:h-full h-auto ">
          <div className="md:col-span-3">
            <FeedMenu />

            <div className="flex justify-center">
              <div>
                {feed &&
                  feed.map((feedItem: FeedType) => {
                    console.log(feedItem);
                    return <CardArtigo feedItem={feedItem} />;
                  })}
              </div>
            </div>
          </div>

          <div className=" md:col-span-2  md:pl-10 ">
            <DemoDescubra />
            {/* <QuemSeguir /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
