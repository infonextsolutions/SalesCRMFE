import { useSelector} from "react-redux";

function useAuth() {
  const auth = useSelector((state:any) => state.auth);
  return auth;
}

export default useAuth;