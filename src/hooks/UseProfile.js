import { useContext } from "react";
import { ProfileContext } from "../context";

export default function UseProfile() {
  return useContext(ProfileContext);
}
