import React from "react";
import { CardMessage } from "../components/CardMessage/CardMessage";
import { Layout } from "../components/Layout/Layout";
import { Navbar } from "../components/Navbar/Navbar";

export const MessageScreen = () => {
  return (
    <div>
      <Navbar />
      {/* <div className="bg-blue-700 min-h-screen pt-3"> */}
      <Layout>
        <div className="w-full h-message flex justify-center pt-3">
          <CardMessage />
        </div>
      {/* </div> */}
      </Layout>
    </div>
  );
};
