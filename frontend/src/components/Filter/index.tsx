import { useEffect, useState } from "react";
import { Search } from "@mui/icons-material";
import { FilterContainer, InputSearch, Results } from "./styles";

interface FilterProps<T extends { name: string }> {
  list: Array<T>;
  setListFiltered: (filteredList: T[]) => void;
}

export function Filter<T extends { name: string }>({
  list,
  setListFiltered
}: FilterProps) {
  const [inputSearch, setInputSearch] = useState<string>('');
  const [results, setResults] = useState<T[]>(list);

  useEffect(() => {
    const filteredList = list.filter((item) => {
      return String(item.name)
        .toLowerCase()
        .includes(inputSearch.toLowerCase());
    });

    setListFiltered(filteredList);
    setResults(filteredList);
  }, [inputSearch, list]);

  return (
    <div>
      <FilterContainer>
        <Search fontSize="large" />
        <InputSearch
          type="text"
          placeholder="Search by name"
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
        />
      </FilterContainer>

      <Results>{`Found ${results.length} result(s)`}</Results>
    </div>
  );
}