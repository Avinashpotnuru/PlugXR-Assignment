import "./index.css";

import { useContext } from "react";

import { store } from "../../App";

const Block1 = () => {
  const [popupId, setId] = useContext(store);
  console.log(popupId);

  return (
    <div className="block1">
      {[...Array(9)].map((e, idx) => (
        <div onClick={() => setId(idx + 1)} key={idx} className="card">
          {idx + 1}
        </div>
      ))}
    </div>
  );
};

export default Block1;
