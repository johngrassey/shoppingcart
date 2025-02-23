import PropTypes from "prop-types";

export default function Button({ name }) {
  return <button className="btn btn-primary btn-block">{name}</button>;
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
};
