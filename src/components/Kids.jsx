import React from "react";
import { connect } from "react-redux";

function Kids() {
  return <React.Fragment> </React.Fragment>;
}
const mapStateToProps = (state) => ({
  kids: state.kids,
});
export default connect(mapStateToProps, mapDispatchToProps)(Kids);
