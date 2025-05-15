import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";
import { FiSearch } from "react-icons/fi";


export default function SearchBar({ onFind }) {
  function submitHandler(event) {
    event.preventDefault();
    const data = event.target.elements.search.value;
    if (data.length === 0) {
      toast.error("The field is empty!");
      return;
    }
    onFind(event.target.elements.search.value);
    event.target.reset();
  }

  return (
    <header className={css.header}>
        <form onSubmit={submitHandler} className="search-form">
  
    <FiSearch className="search-icon" />
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
      > Щось пішло не так</Toaster>
    </header>
  );
}
