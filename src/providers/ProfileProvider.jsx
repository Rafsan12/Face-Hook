/* eslint-disable react/prop-types */
import { useReducer } from "react";
import { ProfileContext } from "../context";
import { initialState, ProfileReducer } from "../reducer/ProfileReducer";

export default function ProfileProvider({ children }) {
  const [state, dispatch] = useReducer(ProfileReducer, initialState);
  return (
    <ProfileContext.Provider value={(state, dispatch)}>
      {children}
    </ProfileContext.Provider>
  );
}
