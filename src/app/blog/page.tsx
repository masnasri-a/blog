"use client";

import React, { useState } from "react";
import Header from "./components/header";
import SearchDashboard from "./components/searchDashboard";
import { Spacer } from "@nextui-org/react";
import CategoryHead from "./components/categoryHead";
import RecentPost from "./components/recentPost";

const Page = () => {
  const [category, setCategory] = useState<string>()
  return (
    <>
      <div className="dashboard">
        <Header />
        <Spacer y={2}/>
        <SearchDashboard />
        <Spacer y={1}/>
        <CategoryHead />
        <Spacer y={1}/>
        <RecentPost />
      </div>
    </>
  );
};

export default Page;
