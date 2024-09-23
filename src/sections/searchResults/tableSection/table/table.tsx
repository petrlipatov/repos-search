"use client";

import { TABLE_CAPTION, TABLE_HEADERS } from "@/utils/constants";
import s from "./table.module.css";
import Image from "next/image";
import clsx from "clsx";

const Table = ({ data }) => {
  return (
    <table className={s.table}>
      <caption className={s.tableCaption}>{TABLE_CAPTION}</caption>
      <thead className={s.tableHead}>
        <tr className={s.tableRow}>
          {TABLE_HEADERS.map((el) => (
            <th className={s.tableCell} key={el}>
              {el}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.items.map((el) => (
          <tr className={s.tableRow} key={el.name}>
            <td className={s.tableCell}>{el.name}</td>
            <td className={s.tableCell}>{el.language}</td>
            <td className={s.tableCell}>{el.forks_count}</td>
            <td className={s.tableCell}>{el.stargazers_count}</td>
            <td className={s.tableCell}>{el.updated_at}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
