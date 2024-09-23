import s from "./tableSection.module.css";

const TableSection = ({ children }) => {
  return <section className={s.tableSection}>{children}</section>;
};

export default TableSection;
