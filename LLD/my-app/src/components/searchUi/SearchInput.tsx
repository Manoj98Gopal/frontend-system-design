import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";

const SearchInput = () => {

  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [inputFocused, setInputFocused] = useState(false);
  const [query, setQuery] = useState("");
  const [cashedResults, setCashedResults] = useState<{ [key: string]: string[] }>({});

  useEffect(() => {
    const id = setTimeout(() => {
        handleFetch(query);
    },300)
    return () => clearTimeout(id);
  }, [query]);

  const handleFetch = async (query: string) => {
    try {
      const trimmedQuery = query.trim();

      if(cashedResults[trimmedQuery]){
        setSuggestions(cashedResults[trimmedQuery]);
        return;
      }else{
        const response = await fetch(
            `http://www.google.com/complete/search?client=firefox&q=${trimmedQuery}`
        );
        const data = await response.json();
        setCashedResults((prev) => ({...prev, [trimmedQuery]: data?.[1] || []}));
        setSuggestions(data?.[1] || []);

      }

    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const showDropdown = inputFocused && suggestions.length > 0;

  return (
    <div>
      <div className="relative">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          className={`bg-[#4d5156] min-w-150 focus:outline-none pl-12 py-4 rounded-4xl ${showDropdown ? 'rounded-b-none' : ''} text-white focus:bg-[#303134] transition-colors duration-300`}
          onFocus={() => {setInputFocused(true)}}
          onBlur={() => {setInputFocused(false)}}
        />
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 cursor-pointer">
          <Icon
            icon="material-symbols:add"
            width="28"
            height="28"
            className="text-white"
          />
        </div>
      </div>
      {showDropdown && <div>
        <ul className="bg-[#303134] rounded-lg rounded-t-none border-t border-[#5f6368] py-1">
          {suggestions?.map((item,idx) =>
            <div
              key={idx}
              className="flex items-center gap-3 hover:bg-[#3c4043] px-4 py-1 cursor-pointer"
            >
              <Icon
                icon="material-symbols:search"
                width="20"
                height="20"
                className="text-[#797e83]"
              />
              <li className="text-[#bfc7e1] py-1 cursor-pointer">
                {item}
              </li>
            </div>
          )}
        </ul>
      </div>}
    </div>
  );
};

export default SearchInput;
