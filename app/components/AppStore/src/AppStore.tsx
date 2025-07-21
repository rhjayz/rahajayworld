import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import  Items  from "./Item";
import { List } from "./List";
import "./styles.css";
import ScrambledText from "../../TextAnimations/ScrambledText/ScrambledText";

const AppStore: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const imageHasLoaded = true;
  return (
    <div className="mx-auto px-auto">
      <center>
      <ScrambledText
        className="text-3xl font-jersey10"
        radius={4}
        duration={5}
        speed={0.9}
        scrambleChars="00110010100101010"
        >
          The Project
        </ScrambledText>
      </center>
      <List selectedId={selectedId} setSelectedId={setSelectedId} />
      <AnimatePresence>
        {selectedId && imageHasLoaded && <Items selectedId={selectedId} onClose={()=>setSelectedId(null)} key="data" />}
      </AnimatePresence>
    </div>
  );
}

export default AppStore;