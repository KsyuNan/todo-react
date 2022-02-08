import "./style.css"

export const SearchItem = ({search, setSearch}) => {
    return (
        <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="search">Search</label>
            <input
              id="search"
              type="text"
              role="search"
              placeholder="Search item"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
        </form>
    );
};
