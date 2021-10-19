import PropTypes from "prop-types";
import {
  ButtonTypes,
  ButtonSizes,
  ButtonThemes,
} from "../../config/buttonTypes";
import "../styles/Button.css";

const Button = (props) => {
  const getButtonClasses = () => {
    const { size, type, theme, rule } = props;
    const buttonClasses = [
      rule,
      "button",
      `button--${size}`,
      `button--${type}`,
      `button--${theme}`,
    ];

    return buttonClasses.join(" ");
  };

  const { disabled, onClickHandler, label } = props;

  return (
    <button
      className={getButtonClasses()}
      onClick={(event) => onClickHandler(event.target)}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
Button.propTypes = {
  type: PropTypes.oneOf(Object.values(ButtonTypes)),
  disabled: PropTypes.bool,
  onClickHandler: PropTypes.func,
  label: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.values(ButtonSizes)),
  theme: PropTypes.oneOf(Object.values(ButtonThemes)),
};

Button.defaultProps = {
  type: ButtonTypes.PRIMARY,
  onClickHandler: () => console.log("No click handler specified"),
  label: "",
  disabled: false,
  size: ButtonSizes.MEDIUM,
  theme: ButtonThemes.LIGHT,
};

export default Button;
