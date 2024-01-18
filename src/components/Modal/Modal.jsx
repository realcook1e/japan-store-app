import { useEffect } from "react";
import Card from "../../UI/Card/Card";
import styles from "./Modal.module.scss";

const Modal = ({ actionLabel, children, onCloseModal, onCreateOrder }) => {
	useEffect(() => {
		document.body.style.overflow = "hidden";

		return () => {
			document.body.style.overflow = "auto";
		};
	}, []);

	return (
		<div
			className={styles.modal}
			onClick={onCloseModal}
		>
			<Card>
				<div
					className={styles.dialog}
					onClick={evt => {
						evt.stopPropagation();
					}}
				>
					<div className={styles.content}>{children}</div>
					<div className={styles.controls}>
						<button
							className={styles.close}
							onClick={onCloseModal}
						>
							Закрыть
						</button>
						{actionLabel ? (
							<button
								className={styles.action}
								onClick={onCreateOrder}
							>
								{actionLabel}
							</button>
						) : (
							""
						)}
					</div>
				</div>
			</Card>
		</div>
	);
};

export default Modal;
