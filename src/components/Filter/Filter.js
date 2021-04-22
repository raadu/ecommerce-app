// Title: Filter Component
// Details: Component for filtering products.
// Author: raadu

// Dependencies
import FilterStyle from "./Filter.module.scss";

const Filter = ({
    count,
    sort,
    sortProducts,
}) => {
    return (
        <div className={FilterStyle.filter}>
            <div>
                {count} Products
            </div>
            <div>
                Order By{" "}
                <select value={sort} onChange={sortProducts}>
                    <option value="Latest" defaultValue>Latest</option>
                    <option value="Lowest">Lowest Price</option>
                    <option value="Highest">Highest Price</option>
                </select>
            </div>
        </div>
    );
}
 
export default Filter;
