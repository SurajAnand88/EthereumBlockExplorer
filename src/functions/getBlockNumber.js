import alchemy from "./alchemy";
import getLastestBlocks from "./getLastestBlock";

export default async function getBlockNumber(isInverval, dispatch) {
  const block = await alchemy().core.getBlockNumber();
  dispatch({
    type: "GOT_BLOCK",
    payload: block,
  });
  getLastestBlocks(block, dispatch);
  // if (isInverval) {
  //   if (id) clearInterval(id);
  //   var id = setInterval(async () => {
  //     const block = await alchemy().core.getBlockNumber();
  //     dispatch({
  //       type: "GOT_BLOCK",
  //       payload: block,
  //     });
  //   }, 12000);
  // }
}
