import { useEffect, useState } from "react";
import useAxios from "../../hooks/UseAxios";
import { useAuth } from "../../hooks/Useauth";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { api } = useAxios();
  const { auth } = useAuth();

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${auth?.user?.id}`
        );
        setUser(response?.data?.user);
        setPosts(response?.data?.posts);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);
  return (
    <>
      <div>
        Welcome, {user?.firstName} {user?.lastName}
        <p>You have {posts.length} posts.</p>
      </div>
    </>
  );
}
