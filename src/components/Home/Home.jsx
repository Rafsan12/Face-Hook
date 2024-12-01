import { useAuth } from "../../hooks/Useauth";

export default function Home() {
  const { auth } = useAuth();
  console.log(auth);
  return (
    <>
      <h1>This is Home</h1>
    </>
  );
}
