import React, { useState,useContext } from "react";
import Particles from "react-tsparticles";
import { useNavigate } from "react-router-dom";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import logo from '../../Assests/logo-sunderland.png'
import Icon from "@mui/material/Icon";
import axios from "axios";
import { useSnackbar } from "notistack";
import { UserContext } from "../../Context/UserContext";

const Login = () => {
  const particlesInit = useCallback(async (engine) => {
    // console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // await console.log(container);
  }, []);
  const { userData, setUserData, userLoading, setUserLoading } = useContext(UserContext)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reviewPassword, setReviewPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  console.log("user Data are : ",userData)

  const reviewHandler = (e) => {
    e.preventDefault();
    setReviewPassword(!reviewPassword);
  };

  const LoginHandler = (e) => {
    setLoading(true);
    e.preventDefault();
    if (email === "" || password === "") {
      enqueueSnackbar("Empty Field Detected", { variant: "error" });
      setLoading(false);
    } else {
      axios({
        url: `${process.env.REACT_APP_API_URL}/students/login`,
        method: "POST",
        data: {
          email: email,
          password: password,
        },
      })
        .then((res) => {
          enqueueSnackbar(`Welcome to Dashboard , ${res?.data?.student?.name}`, { variant: "success" });
          console.log(res.data);
          setUserData(res?.data);
          // setEmail("");
          // setPassword("")
          setLoading(false);
          navigate('/dashboard')
        })
        .catch((err) => {
          enqueueSnackbar(err.response.data.msg, { variant: "error" });
          console.log(err.response.data.msg);
          setLoading(false);
        });
    }
  };

  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#165696",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                // enable: true,
                // mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.8,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              directions: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "47%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="login-card">
          <div className="login-img">
            <img src={logo} alt="" />
          </div>
          <div className="input-login">
            <label htmlFor="">Email : </label>
            <br />
            <input
              type="email"
              placeholder="Email Here . . ."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-login">
            <label htmlFor="">Password : </label>
            <br />
            <input
              type={reviewPassword ? "text" : "password"}
              placeholder="Password Here . . ."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="btn-main">
            <button onClick={(e) => LoginHandler(e)}>Log In</button>
          </div>
          {reviewPassword ? (
            <button className="eye-position" onClick={(e) => reviewHandler(e)}>
              <i className="fa-solid fa-eye"></i>
            </button>
          ) : (
            <button className="eye-position" onClick={(e) => reviewHandler(e)}>
              <i className="fa-solid fa-eye-slash"></i>
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Login;
