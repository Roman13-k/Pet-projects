import styles from "./App.module.css";

function App() {
  return (
    <>
      <div className={styles.container}>
        <header className=''>
          <h1 className='mt-14 mb-5 text-center'>TODO LIST</h1>
          <nav className='flex gap-4'>
            <input
              className={styles.input}
              type='text'
              role='search'
              placeholder='Search note...'
            />
            <select className={styles.select}>
              <option className=''>All</option>
              <option>Complete</option>
              <option>Incomplete</option>
            </select>
            <button className='p-2 rounded-md'>
              <img src='../public/night.svg' alt='' />
            </button>
          </nav>
        </header>
        <section className={styles.tasks}></section>
        <button className={styles.btn}>
          <img src='../public/plus.svg' />
        </button>
      </div>
    </>
  );
}

export default App;
