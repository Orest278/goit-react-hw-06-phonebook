const Filter = ({ value, onChange }) => (
  <input
    type="text"
    name="filter"
    placeholder="Find contacts by name"
    value={value}
    onChange={onChange}
  />
);

export default Filter;