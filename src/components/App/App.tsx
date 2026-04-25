// import { useState } from "react";

import CafeInfo from "../CafeInfo/CafeInfo";
import VoteOptions from "../VoteOptions/VoteOptions";
import css from "./App.module.css";

function App() {
  return (
    <>
      <div className={css.app}>
        <CafeInfo />
        <VoteOptions />
      </div>
    </>
  );
}

export default App;
