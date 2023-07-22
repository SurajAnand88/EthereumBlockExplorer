import alchemy from "./alchemy";

export default async function getLastestBlocks(lastestBlock, dispatch) {
  const last10Blocks = [];
  for (let i = lastestBlock; i > lastestBlock - 12; i--) {
    const block = await alchemy().core.getBlock(i);
    last10Blocks.push(block);
  }
  dispatch({
    type: "LAST_10_BLOCKS",
    payload: last10Blocks,
  });
}
