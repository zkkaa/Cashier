import { useState } from "react";

const PasswordInput = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="form-control">
      <input
        type={passwordVisible ? "text" : "password"}
        id="password"
        className="input-password"
        required
      />
      <span onClick={togglePasswordVisibility} className="toggle-password">
        {passwordVisible ? "🙈" : "👁️"}
      </span>
    </div>
  );
};

export default PasswordInput;
