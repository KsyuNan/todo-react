import "./style.css"

export const SearchItem = () => {
    return (
        <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="search">Search</label>
            <input
              id="search"
              type="text"
              role="search"
              placeholder="search item"

            />
        </form>
    );
};
