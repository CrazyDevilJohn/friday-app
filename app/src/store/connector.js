import { connect } from "react-redux";

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  setIsDrawerOpen: (isOpen) =>
    dispatch({
      type: "IS_DRAWER_OPEN",
      payload: isOpen,
    }),
  setUser: (user) =>
    dispatch({
      type: "SET_USER",
      payload: user,
    }),
});
const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector;
