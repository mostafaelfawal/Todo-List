import ProgressCalculation from "../utils/ProgressCalculation";

export default function ProgressBar() {
  const progress = ProgressCalculation();
  return (
    <div className="border-1 h-2 rounded-full overflow-hidden ">
      <div
        className={`bg-green-500 h-2 border-r-1`}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}
