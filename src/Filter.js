import PropTypes from "prop-types";
import s from './style/Filter.module.css';

function Filter({ filter, onFilterChange }) {
  return (
    <label className={s.label}>
      Find contacts by name
        <input
        className={s.input}
        type="text"
        name="name"
        value={filter}
        onChange={onFilterChange}
      />
    </label>
  );
}

Filter.propTypes = {
  onFilterChange: PropTypes.func,
  filter: PropTypes.string,
};

export default Filter;