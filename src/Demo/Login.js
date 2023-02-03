import React, { useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import logo from "../Assests/logo-sunderland.png";
import Icon from "@mui/material/Icon";

const Login = () => {
  const [seenPassword, setSeenPassword] = useState(false);
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");

  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  const seenHandler = (e) => {
    e.preventDefault();
    setSeenPassword(!seenPassword);
  };

  const LoginForm = () => (
    <div className="login-card">
      <div className="img-main">
        <img src={logo} alt="" />
      </div>
      <h2>Welcome Back</h2>
      <input
        type="text"
        placeholder="Enter Username Here..."
        className="login-input"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />
      <br />
      <input
        type={seenPassword ? "text" : "password"}
        placeholder="Enter Password Here..."
        className="login-input"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />
      <br />
      {seenPassword ? (
        <span className="eye-position" onClick={(e)=>seenHandler(e)}>
          <i class="fa-solid fa-eye"></i>
        </span>
      ) : (
        <span className="eye-position" onClick={(e)=>seenHandler(e)}>
          <i class="fa-solid fa-eye-slash"></i>
        </span>
      )}

      <div className="btn-main">
        <button type="submit">Login</button>
      </div>
    </div>
  );
  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#0d47a1",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
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
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <LoginForm />
      </div>
    </>
  );
};

export default Login;
