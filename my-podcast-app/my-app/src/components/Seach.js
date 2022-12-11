import { useState } from "react";
var data = require("../MOCK_DATA.json");
export default function SearchBar() {

    const [value, setValue] = useState("");

    const onChange = (event) => {
        setValue(event.target.value);
    };

    const onSearch = (searchTerm) => {
        setValue(searchTerm);
        // our api to fetch the search result
        console.log("search ", searchTerm);
    };
    return (
        <div className="search-container">
                <div className="search-inner">
                    
                    <input type="text"  placeholder="Search" value={value} onChange={onChange} />
                    <button onClick={() => onSearch(value)}  > Search </button>
                </div>
                <div className="dropdown">
                    {data
                        .filter((item) => {
                            const searchTerm = value.toLowerCase();
                            const fullName = item.full_name.toLowerCase();

                            return (
                                searchTerm &&
                                fullName.startsWith(searchTerm) &&
                                fullName !== searchTerm
                            );
                        })
                        .slice(0, 10)
                        .map((item) => (
                            <div
                                onClick={() => onSearch(item.full_name)}
                                className="dropdown-row"
                                key={item.full_name}
                            >
                                {item.full_name}
                            </div>
                        ))}
                </div>
            
        </div>
    );

}