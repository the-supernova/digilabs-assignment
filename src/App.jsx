import { useState } from "react";
import iconLight from "./assets/icon-light.png";
import iconDark from "./assets/icon-dark.png";
import lock from "./assets/lock.svg";
import lockDark from "./assets/lock-dark.svg";
import dollar from "./assets/dollar.svg";
import dollarDark from "./assets/dollar-dark.svg";
import like from "./assets/like.svg";
import likeDark from "./assets/like-dark.svg";
import user from "./assets/user.svg";
import userDark from "./assets/user-dark.svg";
import divider from "./assets/Divider.svg";
import chevronRight from "./assets/chevron-right.svg";
import "./App.css";

import Notification from "./components/Notification";

function App() {
  const [notif, setNotif] = useState({ type: null, msg: null });
  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(document.getElementById("email").value)) {
      const changedObj = { ...notif, type: "invalidEmail", msg: "Please input a real Email Address" }
      setNotif(changedObj)
      return
    }
    
    if(document.getElementById('password').value === "") {
      const changedObj = { ...notif, type: "emptyPassword", msg: "Please enter your password" }
      setNotif(changedObj)
      return
    }

    if(document.getElementById('password').value !== document.getElementById('confirmPassword').value) {
      const changedObj = { ...notif, type: "differentPasswords", msg: "Passwords need to match" }
      setNotif(changedObj)
      return
    }
    setNotif({...notif, type: null})
  }

  return (
    <div className="h-[100vh] flex flex-col items-center justify-center gap-6 bg-[#FAFBFC] dark:bg-[#151B28]">
      <picture>
        <source srcSet={iconLight} media="(prefers-color-scheme: dark)" />
        <img src={iconDark} alt="icon" />
      </picture>

      <div className="flex flex-col rounded-lg border-[1px] border-[#DAE0E6] dark:border-[#252D3C] gap-2 overflow-hidden mx-2">
        <div className="flex justify-between bg-[#FAFBFC] dark:bg-[#252D3C] p-6 font-semibold">
          <div className="w-[15%] flex flex-col items-center gap-1 text-[#437EF7]">
            <picture>
              <source srcSet={lockDark} media="(prefers-color-scheme: dark)" />
              <img src={lock} />
            </picture>
            <p>Account</p>
          </div>
          {/* <img src={divider} /> */}
          <div className="w-[15%] flex flex-col items-center gap-1 text-[#5F6D7E] dark:text-[#A5ACBA]">
            <picture>
              <source srcSet={userDark} media="(prefers-color-scheme: dark)" />
              <img src={user} />
            </picture>
            <p>Personal</p>
          </div>
          {/* <img src={divider} /> */}
          <div className="w-[15%] flex flex-col items-center gap-1 text-[#5F6D7E] dark:text-[#A5ACBA]">
            <picture>
              <source srcSet={dollarDark} media="(prefers-color-scheme: dark)" />
              <img src={dollar} />
            </picture>
            <p>Billing</p>
          </div>
          {/* <img src={divider} /> */}
          <div className="w-[15%] flex flex-col items-center gap-1 text-[#5F6D7E] dark:text-[#A5ACBA]">
            <picture>
              <source srcSet={likeDark} media="(prefers-color-scheme: dark)" />
              <img src={like} />
            </picture>
            <p>Done</p>
          </div>
        </div>

        <form className="flex flex-col gap-4 p-8 font-medium text-[#272D37] dark:text-[#F9F9F9]">
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Name</label>
            <input
              className="input w-full border-[1px] border-[#DAE0E6] dark:border-[#252D3C] dark:bg-[#333B48] rounded-md p-3 font-normal"
              type="text"
              id="name"
              placeholder="Name"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email*</label>
            <input
              className="input w-full border-[1px] border-[#DAE0E6] dark:border-[#252D3C] dark:bg-[#333B48] rounded-md p-3 font-normal"
              type="email"
              id="email"
              placeholder="Email Address"
              required
            />
            {notif.type == "invalidEmail" && (
              <Notification type={notif.type} msg={notif.msg} />
            )}
          </div>

          <div className="flex flex-col md:flex-row gap-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="password">Password*</label>
              <input
                className="input w-full border-[1px] border-[#DAE0E6] dark:border-[#252D3C] dark:bg-[#333B48] rounded-md p-3 font-normal"
                type="password"
                id="password"
                placeholder="Password"
                required
              />
              {notif.type == "emptyPassword" && (
                <Notification type={notif.type} msg={notif.msg} />
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="confirmPassword">Confirm Password*</label>
              <input
                className="input w-full border-[1px] border-[#DAE0E6] dark:border-[#252D3C] dark:bg-[#333B48] rounded-md p-3 font-normal"
                type="password"
                id="confirmPassword"
                placeholder="Confirm Password"
                required
              />
              {notif.type == "differentPasswords" && (
                <Notification type={notif.type} msg={notif.msg} />
              )}
            </div>
          </div>

          <div>
            <input
              className="border-[1px] border-[#DAE0E6] dark:border-[#252D3C] dark:bg-[#333B48] mr-2"
              type="checkbox"
              required
            />
            <span>I accept the Terms and Privacy Policy</span>
          </div>
        </form>

        <div className="flex bg-[#FAFBFC] dark:bg-[#252D3C] justify-end p-4 text-white font-semibold">
          <button onClick={handleSubmit} className="w-full md:w-fit justify-center bg-[#437EF7] py-3 px-5 rounded-lg flex gap-2">
            Next <img src={chevronRight} width="10" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
