import { Button, Input } from "@nextui-org/react";
import { useContext, useState } from "react";
import { Context } from "../context/context";
import { Link, useNavigate } from "react-router-dom";
import { UserIcon } from "../UI/UserIcon";
import { SearchIcon } from "../UI/SearchIcon";

export function Header() {
  const { setIsAuth, setSearch, setMovies } = useContext(Context);
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSearchClick = () => {
    setSearch(input);
    setInput("");
    navigate("/search");
  };
  const handleSearchKey = (event) => {
    if (event.key == "Enter") {
      setSearch(input);
      setInput("");
      navigate("/search");
    }
  };
  const handleExit = () => {
    setMovies({ results: [] });
    setInput("");
    setIsAuth(false);
    localStorage.removeItem("auth");
    navigate("/");
  };

  return (
    <header className='flex justify-between'>
      <h1 className='font-semibold text-4xl max-w-[130px]'>
        The Movie Tracker
      </h1>
      <nav className='flex min-w-[900px] gap-5 items-center'>
        <Input
          classNames={{
            inputWrapper: ["bg-[#d9d9d9]", "min-h-[45px]", "max-w-[500px]"],
            input: ["placeholder:text-black placeholder:text-center "],
          }}
          endContent={
            <button onClick={handleSearchClick}>
              <SearchIcon />
            </button>
          }
          placeholder='Search a movie or a series'
          type='search'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleSearchKey}
        />
        <Link className='font-medium text-lg ' to={"/"}>
          Home
        </Link>
        <Link className='font-medium text-lg ' to={"/search"}>
          Search
        </Link>
        <Link className='font-medium text-lg ' to={"/watchlist"}>
          WatchList
        </Link>
        <Button
          onPressEnd={handleExit}
          color='danger'
          startContent={<UserIcon />}
          className='font-roboto font-semibold text-1xl min-w-[140px] min-h-[50px] p-2 ml-4'
          variant='bordered'>
          Delete user
        </Button>
      </nav>
    </header>
  );
}
