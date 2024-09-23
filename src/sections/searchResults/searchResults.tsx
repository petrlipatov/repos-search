"use client";

import { useContext, useEffect } from "react";

import Template from "@/components/template/template";

import s from "./searchResults.module.css";

const SearchResults = ({ children, data }) => {
  useEffect(() => {
    console.log(data);
  }, [data]);

  return data ? (
    <section className={s.searchResults}>{children}</section>
  ) : (
    <Template />
  );
};

export default SearchResults;
