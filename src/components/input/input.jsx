import "../styles/Input.css";

const Input = ({
  onChange,
  id,
  placeholder,
  name,
  htmlForId,
  labelTitle,
  type,
  value,
} = {}) => (
  <div className=" form-label-group">
    <input
      type={type}
      id={id}
      className="form-control"
      name={name}
      value={value}
      placeholder={placeholder}
      required
      onChange={onChange}
    />
    <label htmlFor={htmlForId}>{labelTitle}</label>
  </div>
);

export default Input;
