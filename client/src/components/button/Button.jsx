import styles from "./Button.module.scss";
import classNames from "classnames/bind";
// import { useEffect, useState } from "react";
const cx = classNames.bind(styles);
const Button = ({
  children,
  onClick,
  className,
  notMargin = false,
  disabled = false,
  fullWidth = false,
  user = false,
  primary = false,
}) => {
  // const [count, setCount] = useState(0);
  // useEffect(() => {
  //   console.log(user);
  // }, [count]);

  //if have primary then add class 'primary'
  const classes = cx("wrapper", {
    [className]: className,
    user,
    primary,
    fullWidth,
    notMargin,
    // outline,
    // small,
    // large,
    // text,
    // disabled,
    // rounded,
  });
  return (
    <button disabled={disabled} className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
