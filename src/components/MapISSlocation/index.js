import { connect } from "react-redux";

import MapISSlocation from "./MapISSlocation";
import { loadData } from "../../store/actions";

function mapState2Props(state) {
  return {
    errorISSlocation: state.errorISSlocation,
    ISSlocation: state.ISSlocation,
  };
}

const mapDispatch2Props = {
  loadData
};

const Enhanced = connect(
  mapState2Props, 
  mapDispatch2Props,
  )(MapISSlocation);

export { Enhanced as MapISSlocation };