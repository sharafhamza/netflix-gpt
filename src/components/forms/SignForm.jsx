import React, { useRef, useState } from "react";
import Input from "./Input";
import { checkInput } from "../../utils/validField";
const SignForm = () => {
  const [isLogginPage, SetIsLogginPage] = useState(true);
  const [error, setError] = useState();

  const email = useRef(null);
  const password = useRef(null);

  const pageChanger = () => {
    SetIsLogginPage((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = checkInput(email.current.value, password.current.value);
    setError(message);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[390px]  flex flex-col mx-auto gap-4 py-7"
    >
      <h2 className="text-white text-4xl mb-4 font-semibold">
        {isLogginPage ? "Sign In" : "Sign Up"}
      </h2>
      {!isLogginPage && <Input type="text" placeholder="Your Name" />}
      <Input type="text" placeholder="Email" ref={email} />
      <Input type="password" placeholder="Password" ref={password} />
      {error && <p className="text-red-600 text-xl"> {error}</p>}
      <button
        type="submit"
        className="text-white cursor-pointer bg-red-600 w-full py-2 text-xl font-semibold rounded-md"
      >
        Sign In
      </button>
      <p className="text-gray-300 text-xl ">
        {isLogginPage ? "New to Netflix?" : "Already have an account"}
        <span
          className="text-white cursor-pointer hover:underline"
          onClick={pageChanger}
        >
          {isLogginPage ? " Sign up now." : " Sign In"}
        </span>
      </p>
    </form>
  );
};

export default SignForm;
