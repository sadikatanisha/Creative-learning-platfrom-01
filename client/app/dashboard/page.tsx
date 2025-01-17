"use client";
import React, { FC, useState } from "react";
import DashboardSidebar from "../components/Dashboard/DashboardSidebar";
import { useLogoutQuery } from "@/redux/features/auth/authApi";
import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";

type Props = {
  user: any;
};

const Profile: FC<Props> = ({ user }) => {
  const [scroll, setScroll] = useState(false);

  const [active, setActive] = useState(1);
  const [logout, setLogout] = useState(false);
  const {} = useLogoutQuery(undefined, {
    skip: !logout ? true : false,
  });
  const logOutHandler = async () => {
    setLogout(true);
    await signOut();
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }

  return (
    <div className="w-[85%] flex mx-auto">
      <div
        className={`w-[60px] 800px:w-[310px] h-[450px] dark:bg-slate-900 bg-opacity-90 border bg-white dark:border-[#ffffff1d] border-[#0d5ca518] rounded-[5px] dark:shadow-sm shadow-xl mt-[80px] mb-[80px] sticky ${
          scroll ? "top-[120px]" : "top-[30px]"
        } lext-[30px]`}
      >
        <DashboardSidebar
          user={user}
          active={active}
          setActive={setActive}
          logOutHandler={logOutHandler}
        />
      </div>
    </div>
  );
};

export default Profile;
function setActive(arg0: boolean) {
  throw new Error("Function not implemented.");
}
