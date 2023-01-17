import { useEffect, useState } from "react";

const Searchbar = (props) => {
  const [searchValue, setSerachValue] = useState("");
  const [searchText, setSearchText] = useState("");
  const [filteredCards, setfilteredCards] = useState([])

  useEffect(()=>{
    fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5324846&lng=73.8374954")
    .then((data)=>{
        return data.json();
    })
    .then((list)=>{
        // console.log(list.data.cards[3]);
        let dataToBeSent =list.data.cards.filter((card)=>card.data.type=="restaurant");
        props.getListOfResturants(dataToBeSent);
    })

  },[searchValue])

  return (
    <div className="restroant-search-bar-input">
      <input
        type="text"
        className="serach-input"
        name="restroant-search-bar"
        value={searchText}
        placeholder="search here"
        onChange={(e) => {
            setSearchText(e.target.value);
          }}
      />
      <button onClick={setSerachValue}>Search</button>
    </div>
  );
};

export default Searchbar;
