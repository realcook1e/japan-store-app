import Card from "../../UI/Card/Card";
import ProductItem from "../ProductItem/ProductItem";
import styles from "./ProductList.module.scss";

const ProductList = ({ products }) => {
	return (
		<div className={styles.container}>
			<Card>
				<div className={styles.list}>
					{products.map(product => (
						<ProductItem
							key={product._id}
							id={product._id}
							name={product.name}
							description={product.description}
							price={product.price}
						/>
					))}
				</div>
			</Card>
		</div>
	);
};

export default ProductList;
