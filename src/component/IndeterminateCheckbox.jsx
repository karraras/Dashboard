import React from "react";

function IndeterminateCheckbox(prop) {
  const { indeterminate, ...rest } = prop;
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (typeof indeterminate === "boolean") {
      ref.current.indeterminate = !rest.checked && indeterminate;
    }
  }, [ref, indeterminate, rest.checked]);

  return <input type="checkbox" ref={ref} {...rest} />;
}

export default IndeterminateCheckbox;
