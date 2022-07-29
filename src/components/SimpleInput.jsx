import React from "react";

const SimpleInput = React.forwardRef((props, ref) => (
  <div className="form-control">
    <input ref={ref} {...props} />
  </div>
));

export default SimpleInput;
