import PropTypes from "prop-types";
import styles from "./Button.module.css";

export default function Button({ name }) {
  return <button className={styles.btn}>{name}</button>;
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
};
