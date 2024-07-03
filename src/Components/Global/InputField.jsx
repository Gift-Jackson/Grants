import PropTypes from "prop-types";
import { useState } from "react";
const InputField = ({
  label,
  type,
  placeholder,
  name,
  id,
  onChange,
  value,
  accept
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <>
      <div className="flex flex-col gap-1 w-full">
        <label htmlFor={id} className="text-sm font-semibold">
          {label}:
        </label>
        <div className="relative">
          <input
            type={isPasswordVisible ? "text" : type}
            name={name}
            id={id}
            placeholder={placeholder}
            accept={accept}
            value={value}
            onChange={onChange}
            className="w-full pl-4 h-[40px] font-medium bg-secondary rounded text-sm focus:ring-1 ring-primary"
          />
          {type === "password" && (
            <span
              onClick={togglePasswordVisibility}
              className="material-symbols-outlined absolute text-[1.2em] showpass"
            >
              {isPasswordVisible ? "visibility" : "visibility_off"}
            </span>
          )}
        </div>
      </div>
    </>
  );
};

InputField.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  accept: PropTypes.string,
};

export default InputField;
