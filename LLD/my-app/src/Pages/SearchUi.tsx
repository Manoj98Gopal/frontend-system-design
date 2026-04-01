import SearchInput from "../components/searchUi/SearchInput";

const SearchUi = () => {
  return (
    <div className="flex flex-col items-center h-[calc(100vh-64px)] bg-[#1f1f1f]">
      <div className="flex flex-col items-center gap-8 mt-48">
        <h1 className="text-7xl text-white font-bold">Google</h1>
        <SearchInput />
      </div>
    </div>
  );
};

export default SearchUi;
