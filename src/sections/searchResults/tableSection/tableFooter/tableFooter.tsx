import Image from "next/image";
import s from "./tableFooter.module.css";
import clsx from "clsx";

const TableFooter = ({ data, queryConfig, setQueryConfig }) => {
  const { total_count, items } = data;

  const calculateLowerBoundry = () =>
    1 + queryConfig.resultsPerPage * (queryConfig.pageNumber - 1);

  const calculateUpperBoundry = () =>
    Math.min(queryConfig.resultsPerPage * queryConfig.pageNumber, total_count);

  const setPage = (direction: "next" | "prev") => {
    const nextPageNumber =
      direction === "next"
        ? queryConfig.pageNumber + 1
        : queryConfig.pageNumber - 1;

    setQueryConfig((prev) => ({
      ...prev,
      pageNumber: nextPageNumber,
    }));
  };

  return (
    <div className={s.footer}>
      <span className={s.caption}>Rows per page:</span>
      <input
        className={s.input}
        name="resultsPerPage"
        type="number"
        pattern="\d*"
        defaultValue={queryConfig.resultsPerPage}
        onChange={(e) =>
          setQueryConfig((prevValue) => ({
            ...prevValue,
            resultsPerPage: e.target.value,
          }))
        }
        min="1"
        max="8"
      />

      <div>{`${calculateLowerBoundry()}-${calculateUpperBoundry()} of ${total_count}`}</div>

      <button
        className={s.button}
        onClick={() => setPage("prev")}
        disabled={queryConfig.pageNumber === 1}
      >
        <Image
          className={s.chevron}
          src="/chevron-left.svg"
          width={30}
          height={30}
          alt="Chevron-left icon"
        />
      </button>

      <button
        className={s.button}
        onClick={() => setPage("next")}
        disabled={
          queryConfig.pageNumber ===
          Math.ceil(total_count / queryConfig.resultsPerPage)
        }
      >
        <Image
          className={clsx(s.chevron, s.chevronRight)}
          src="/chevron-left.svg"
          width={30}
          height={30}
          alt="Chevron-rigth icon"
        />
      </button>
    </div>
  );
};

export default TableFooter;
