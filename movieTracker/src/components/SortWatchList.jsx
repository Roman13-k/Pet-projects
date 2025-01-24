import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import React, { useState } from "react";

export function SortWatchList({ filteredList, setFilteredList }) {
  const [selected, setSelected] = useState(new Set(["Sort:"]));

  const handleSortByName = () => {
    const sort = [...filteredList].sort((a, b) =>
      a.movie.title.localeCompare(b.movie.title),
    );
    setFilteredList(sort);
  };

  const handleSortByRate = () => {
    const sort = [...filteredList].sort(
      (a, b) => b.movie.vote_average - a.movie.vote_average,
    );
    setFilteredList(sort);
  };

  const handleSelection = (key) => {
    setSelected(key);
    if (key == "name") handleSortByName();
    else if (key == "rate") handleSortByRate();
  };

  return (
    <div>
      <Dropdown>
        <DropdownTrigger>
          <Button
            className='capitalize ml-3'
            color='primary'
            variant='bordered'>
            {selected}
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label='Dropdown Variants'
          color='primary'
          variant='bordered'
          selectionMode='single'
          onSelectionChange={(key) =>
            handleSelection(key.values().next().value)
          }>
          <DropdownItem key='name' textValue='Name'>
            Name
          </DropdownItem>
          <DropdownItem key='rate' textValue='Rate'>
            Rate
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
