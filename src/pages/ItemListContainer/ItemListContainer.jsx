import { useState, useEffect } from "react";

import ItemCount from "../../components/ItemCount/ItemCount";
import ItemList from "../../components/ItemList/ItemList";


const ItemListContainer = () => {

    const [ productList, setProductList] = useState([]);

    const fetchProducts = () => {
        return fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
        .then((data) => setProductList(data))
        .catch ((error) => console. log(error));
    }; 

    useEffect (() =>{
        fetchProducts();
    }, []);


    return (
        <div>
            <h1>ItemListContainer</h1>
            <ItemCount />
            <ItemList  productList={productList}/>

        </div>
    );
    
};

export default ItemListContainer;