import { useState, useRef, forwardRef, useImperativeHandle } from "react";
import { CodeInput } from "./CodeInput";
import { CoreEval } from "@agoric/cosmic-proto/swingset/swingset.js";
import { Button } from "./Button";

interface CodeInputGroupProps {
  onPairsChange: (pairs: CoreEval[]) => void;
}

interface CodeInputGroupMethods {
  reset: () => void;
}

const CodeInputGroup = forwardRef<CodeInputGroupMethods, CodeInputGroupProps>(
  ({ onPairsChange }, ref) => {
    const [pairs, setPairs] = useState<CoreEval[]>([
      { jsonPermits: "", jsCode: " " },
    ]);
    const jsRef = useRef<{ reset: () => void } | null>(null);
    const jsonRef = useRef<{ reset: () => void } | null>(null);

    const handlePermitChange = (index: number, content: string) => {
      const newPairs = [...pairs];
      newPairs[index].jsonPermits = content;
      setPairs(newPairs);
      onPairsChange(newPairs);
    };

    const handleCodeChange = (index: number, content: string) => {
      const newPairs = [...pairs];
      newPairs[index].jsCode = content;
      setPairs(newPairs);
      onPairsChange(newPairs);
    };

    const addMore = () => {
      setPairs([...pairs, { jsonPermits: "", jsCode: "" }]);
    };

    useImperativeHandle(ref, () => ({
      reset: () => {
        jsonRef.current?.reset();
        jsRef.current?.reset();
        setPairs([{ jsonPermits: "", jsCode: " " }]);
      },
    }));

    return (
      <div className="flex flex-col items-start">
        {pairs.map((_, index) => (
          <div key={index} className="grid grid-cols-2 gap-[10px] mb-5">
            <div className={``}>
              <CodeInput
                ref={jsonRef}
                label="JSON Permit"
                accept="application/json"
                prismTag="lang-json"
                onContentChange={(content) => handlePermitChange(index, content)}
                subtitle=".json files accepted"
              />
            </div>
            <div className={``}>
              <CodeInput
                ref={jsRef}
                label="JS Script"
                accept="text/javascript"
                prismTag="lang-javascript"
                onContentChange={(content) => handleCodeChange(index, content)}
                subtitle=".js files accepted"
              />
            </div>
          </div>
        ))}
        <Button
          onClick={addMore}
          Icon={null}
          text="Add more files"
          theme="grey"
          layoutStyle="flex w-1/3"
        />
      </div>
    );
  },
);

export { CodeInputGroup };
