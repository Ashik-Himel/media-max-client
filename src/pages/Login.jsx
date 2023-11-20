import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {AiFillEye, AiFillEyeInvisible} from 'react-icons/ai';
import {signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../firebase.config";
import { AllContext } from "../context/GlobalContext";
import Swal from "sweetalert2";

const Login = () => {
  const {setUser} = useContext(AllContext);
  const [showEye, setShowEye] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  const handleLogin = e => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        setUser(userCredential.user);
        Swal.fire({
          title: "Successful!",
          text: "Login Successful!",
          icon: "success"
        });
        navigate('/dashboard/home');
      })
      .catch(err => {
        Swal.fire({
          title: "Error!",
          text: err.message,
          icon: "error"
        });
      })
  }
  const handlePassOnChange = e => {
    const password = e.target.value;
    if (password) setShowEye(true)
    else setShowEye(false);
  }

  return (
    <main>
      <Helmet>
        <title>Login - Media Max</title>
      </Helmet>

      <section className="mt-16">
        <div className="container">
          <div className="bg-secondary px-6 py-10 rounded-lg shadow-regular w-full max-w-[500px] mx-auto">
            <h2 className="text-3xl font-medium text-primary text-center mb-4">Login</h2>
            <span className="block w-max mx-auto bg-primary bg-opacity-30 px-4 py-[2px] rounded-md mb-8">Admin Login Only !!!</span>
            <form className="[&_input]:text-black" onSubmit={handleLogin}>
              <label className="block font-medium mb-2" htmlFor="email">Email Address</label>
              <input className="w-full p-3 rounded-lg mb-4" type="email" name="email" id="email" placeholder="Enter email address" required />

              <label className="block font-medium mb-2" htmlFor="password">Password</label>
              <div className="relative mb-6">
                <input className="w-full p-3 rounded-lg" onChange={handlePassOnChange} type={showPass ? "text" : "password"} name="password" id="password" placeholder="Enter your password" required />
                <div className="absolute top-1/2 right-4 -translate-y-1/2 text-black text-2xl select-none cursor-pointer" style={showEye ? {display: "block"} : {display: "none"}} onClick={() => setShowPass(!showPass)}>
                  {
                    showPass ? <AiFillEyeInvisible /> : <AiFillEye />
                  }
                </div>
              </div>

              <button className="btn btn-primary w-full" type="submit">Login</button>
              <Link className="block mt-6 text-center text-primary font-medium">Forgotten password?</Link>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;