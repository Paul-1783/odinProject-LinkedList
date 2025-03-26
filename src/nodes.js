function Nodes() {
  let value = null;
  let nextNode = null;

  let setValue = (val) => {
    value = val;
  };

  let getValue = () => {
    return value;
  };

  let setNeighbour = (elem) => {
    nextNode = elem;
  };

  let getNeighbour = () => {
    return nextNode;
  };

  return { setValue, getValue, setNeighbour, getNeighbour };
}

export default Nodes;
