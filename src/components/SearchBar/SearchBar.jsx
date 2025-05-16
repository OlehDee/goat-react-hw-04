import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";
import { FiSearch } from "react-icons/fi";

export default function SearchBar({ onFind }) {
  function submitHandler(event) {
    event.preventDefault();
    const data = event.target.elements.search.value.trim();
    if (data.length === 0) {
      toast.error("The field is empty!");
      return;
    }
    onFind(data);
    event.target.reset();
  }

  return (
    <header className={css.header}>
      <form onSubmit={submitHandler} className={css.searchForm}>
        <FiSearch className={css.searchIcon} />
        <input
          type="text"
          name="search"
          placeholder="Search"
          autoComplete="off"
          autoFocus
        />
      </form>
      <Toaster
        position="top-center"
        containerClassName={css.toast}
        toastOptions={{ style: { color: "white", backgroundColor: "deepblue" } }}
      />
    </header>
  );
}
