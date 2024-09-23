"use client";

import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import { Octokit } from "@octokit/rest";

import s from "./searchBar.module.css";

const octokit = new Octokit();

const SearchBar = ({ queryConfig, setData }) => {
  const [inputValue, setInputValue] = useState("");
  const [resultsPerPage, setResultsPerPage] = useState(5);
  const [page, setPage] = useState(1);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    if (inputValue !== "") {
      octokit
        .request("GET /search/repositories", {
          q: inputValue,
          per_page: queryConfig.resultsPerPage,
          page: queryConfig.pageNumber,
        })
        .then((data) => {
          setData(data.data);
        });
    }
  }, [queryConfig]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    octokit
      .request("GET /search/repositories", {
        q: inputValue,
        per_page: queryConfig.resultsPerPage,
        page: queryConfig.pageNumber,
      })
      .then((data) => {
        setData(data.data);
      });
  };

  return (
    <header className={s.header}>
      <form className={s.searchFrom} onSubmit={handleSubmit}>
        <input
          className={s.input}
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Введите поисковой запрос"
          required
        />
        <button type="submit" className={s.button}>
          ИСКАТЬ
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
