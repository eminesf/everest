import { FC } from "react";

import "./styles.scss";
import { RadioObjType } from "@/types/to-do";

interface InputRadioProps {
  radioOptions: RadioObjType[];
  name: string;
  setFilterOption: (option: "all" | "to-do" | "done") => void;
  filterOption: "all" | "to-do" | "done";
}

const InputRadio: FC<InputRadioProps> = ({
  radioOptions,
  name,
  setFilterOption,
  filterOption,
}) => {
  return (
    <div className="input-radio">
      {radioOptions.map((opt) => (
        <label className="input-radio__label" key={opt.filterOption}>
          <input
            type="radio"
            name={name}
            value="all"
            size={19}
            checked={filterOption === opt.filterOption}
            onChange={() => setFilterOption(opt.filterOption)}
          />
          {opt.filterOption.charAt(0).toUpperCase() + opt.filterOption.slice(1)}
        </label>
      ))}
    </div>
  );
};

export { InputRadio };
