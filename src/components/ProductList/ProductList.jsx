import Card from "../../UI/Card/Card";
import ProductItem from "../ProductItem/ProductItem";
import styles from "./ProductList.module.scss";

const ProductList = ({ products, error }) => {
	return (
		<div className={styles.container}>
			<Card>
				{error && (
					<div className={styles.error}>
						<p>Произошла ошибка при загрузке данных</p>
					</div>
				)}

				{!error && products.length > 0 && (
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
				)}

				{!error && products.length === 0 && (
					<div className={styles.empty}>
						<p>Список блюд пуст</p>
					</div>
				)}
			</Card>
		</div>
	);
};

export default ProductList;
