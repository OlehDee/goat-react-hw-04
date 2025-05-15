import { SyncLoader } from "react-spinners";

export default function Loader() {
  return (
    <SyncLoader
  color="#6e6c6c"
  cssOverride={{}}
  loading
  margin={24}
  size={15}
  speedMultiplier={1}
/>
  );
}