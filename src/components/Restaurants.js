import { useState } from "react";
import Restaurantcard from "./Restaurantcard";
import Searchbar from "./Searchbar";

const Restaurants = ()=>{


const [list, setList] = useState([]);


    return(
        <div className="restaurants-list">
             <Searchbar getListOfResturants={setList}></Searchbar>
             {
            list.map(element=>{
                return(
                    <Restaurantcard restname={element.data.data.name}></Restaurantcard>
                   
                )
               
            })
      }
        </div>
    )
}

export default Restaurants;