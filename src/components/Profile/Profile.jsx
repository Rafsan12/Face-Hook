import { useEffect } from "react";
import { actions } from "../../action";
import { useAuth } from "../../hooks/Useauth";
import useAxios from "../../hooks/UseAxios";
import UseProfile from "../../hooks/UseProfile";
import Posts from "./Posts";
import ProfileInfo from "./ProfileInfo";

export default function Profile() {
  const { state, dispatch } = UseProfile();
  const { api } = useAxios();
  const { auth } = useAuth();

  useEffect(() => {
    dispatch({ type: actions.profile.DATA_FETCHING });
    const fetchProfile = async () => {
      try {
        const { data } = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${auth?.user?.id}`
        );
        dispatch({ type: actions.profile.DATA_FETCHED, data });
      } catch (error) {
        console.error(error);
        dispatch({
          type: actions.profile.DATA_FETCH_ERROR,
          error: error.message,
        });
      }
    };
    fetchProfile();
  }, [auth?.user?.id, api]);

  if (state?.loading) return <div>Fetching your Profile data...</div>;
  if (state?.error) return <div>Error: {state.error}</div>;

  return (
    <div>
      {state?.user ? (
        <>
          <ProfileInfo />
          <Posts />
        </>
      ) : (
        <p>No user data available.</p>
      )}
    </div>
  );
}
