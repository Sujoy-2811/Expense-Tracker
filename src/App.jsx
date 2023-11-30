// import viteLogo from "/vite.svg";
import { useEffect } from "react";
import "./App.css";
import authService from "./appwrite/auth";

export default function App() {
  // useEffect(() => {
  //   console.log("hi");
  //   authService.createAccount({
  //     email: "test@test.com",
  //     password: "12345678",
  //     name: "test",
  //   });
  // }, []);
  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}
