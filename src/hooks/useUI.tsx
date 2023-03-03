import { useSelector} from "react-redux";

function useUI() {
  const ui = useSelector((state:any) => state.ui);
  return ui;
}

export default useUI;