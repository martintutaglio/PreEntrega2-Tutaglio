import { Link } from "react-router-dom";
import Item from "../Item/Item";
import './styles.css';

const ItemList = ({productList}) => {
    return (
        <div className= "item-list-container">

            {productList.map((product) => (
                <Link to={'item/' + product.id} key={product.id}>
                
                    <Item
                        
                        title= {product.title}
                        description={product.description}
                        price={product.image}
                        image={product.image}
                    
                    />
                </Link>

            ))
            
            }

        </div>

    );
};

export default ItemList;