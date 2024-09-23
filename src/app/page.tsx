"use client";

import { useState } from "react";

import SearchBar from "@/sections/searchBar/searchBar";
import SearchResults from "@/sections/searchResults/searchResults";
import TableSection from "@/sections/searchResults/tableSection/tableSection";
import SideMenu from "@/sections/searchResults/sideMenu/sideMenu";
import Table from "@/sections/searchResults/tableSection/table/table";
import TableFooter from "@/sections/searchResults/tableSection/tableFooter/tableFooter";

import s from "./page.module.css";

export default function Home() {
  const [data, setData] = useState(null);
  const [queryConfig, setQueryConfig] = useState({
    pageNumber: 1,
    resultsPerPage: 7,
  });

  return (
    <main className={s.page}>
      <SearchBar queryConfig={queryConfig} setData={setData} />
      <SearchResults data={data}>
        <TableSection>
          <Table data={data} />
          <TableFooter
            data={data}
            queryConfig={queryConfig}
            setQueryConfig={setQueryConfig}
          />
        </TableSection>
        <SideMenu />
      </SearchResults>
    </main>
  );
}
