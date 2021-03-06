import CalculateProjectedValue from "./CalculateProjectedValue";
import { FaTrash } from "react-icons/fa";
import { usePensions } from "./PensionProvider";

export default function Pension({ id, provider, policy, retirementAge, pensionValue }) {
  const { removePension } = usePensions();
  const myParams = {retirementAge, pensionValue};
  return (
    <section>
      <div style={{border:"1px solid red"}}>
        <h1>Provider: {provider}</h1>
        <h2>Policy number: {policy}</h2>
        <div>Retirement Age: {retirementAge}</div>
        <div>Pension value: {pensionValue}</div>
        <div>Projected value: <CalculateProjectedValue {...myParams} /></div>
        <button
          onClick={() => removePension(id)}
        >
          <FaTrash />
        </button>
      </div>
    </section>
  );
}
