const initialState = {
  latestBlock: "getting latest block......",
  last10Blocks: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "GOT_BLOCK":
      return {
        ...state,
        latestBlock: action.payload,
      };
    case "LAST_10_BLOCKS":
      return {
        ...state,
        last10Blocks: [...action.payload],
      };
    default:
      return state;
  }
}
