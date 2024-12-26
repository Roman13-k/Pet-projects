import styles from "../styles/Search.module.css";

export function Search() {
  const handleClick = () => {};

  const handleKeyDown = (e) => {
    if (e.key == "Enter") {
      handleClick();
    }
  };

  const tooggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <form role='search' className='flex gap-4'>
      <div className='relative'>
        <input
          className={styles.input}
          type='text'
          role='search'
          placeholder='Search note...'
          onChange={(e) => e.target.value}
          onKeyDown={handleKeyDown}
        />
        <button
          className='absolute w-5 h-5 bg-transparent right-4 top-1/4 active:bg-transparent'
          onClick={handleClick}>
          <img src='../../public/search.svg' />
        </button>
      </div>
      <select className={styles.select}>
        <option>All</option>
        <option>Complete</option>
        <option>Incomplete</option>
      </select>
      <button className='p-2 rounded-md' onClick={tooggleTheme}>
        <img src='../public/night.svg' />
      </button>
    </form>
  );
}
