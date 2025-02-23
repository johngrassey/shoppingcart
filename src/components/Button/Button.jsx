import PropTypes from "prop-types";

export default function Button({ name }) {
  return <button className="btn btn-primary">{name}</button>;
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
};
