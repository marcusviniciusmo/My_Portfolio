import { Search } from "@mui/icons-material";
import { FilterContainer, InputSearch } from "./styles";

export function Filter() {
  return (
    <FilterContainer>
      <Search fontSize="large" />
      <InputSearch type="text" placeholder="Search" />
    </FilterContainer>
  );
}