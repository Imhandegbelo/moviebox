import NiceModal, { useModal } from "@ebay/nice-modal-react";
import Drawer from "rc-drawer";
import images from "./images";
import "rc-drawer/assets/index.css";
import { NavLink } from "react-router-dom";

export const MobileMenu = NiceModal.create(function MobileMenu() {
  const modal = useModal();

  return (
    <Drawer
      placement="left"
      open={modal.visible}
      onClose={modal.hide}
      width={null}
      maskMotion={{
        motionAppear: true,
        motionName: "mask-motion",
      }}
      motion={{
        motionAppear: true,
        motionName: "panel-motion-left",
      }}
    >
      <div className="">
        <div className="flex gap-4 items-center p-6">
          <img src={images.tv} alt="tv-logo" className="w-8 h-8" />
          <h2 className="text-xl text-slate-900 font-bold">Moviebox</h2>
        </div>
        <div className="flex flex-col gap-6 w-full">
          <div className="flex flex-col text-neutral-600">
            <NavLink
              onClick={modal.hide}
              to={"/"}
              title="Home"
              className="inline-flex items-center gap-4 pl-6 py-3 hover:bg-rose-100 hover:border-r-4 hover:border-rose-500"
            >
              <img src={images.home} alt="home" className="" />{" "}
              <p className="">Home</p>
            </NavLink>
            <NavLink
              onClick={modal.hide}
              to={`#`}
              title="Movies"
              className="inline-flex items-center py-3 gap-4 pl-6 bg-rose-100 border-r-4 border-rose-500"
            >
              <img src={images.projector} alt="projector" />
              <p className="">Movies</p>
            </NavLink>
            <NavLink
              onClick={modal.hide}
              to={"#"}
              title="TV Shows"
              className="inline-flex items-center gap-4 pl-6 py-3 hover:bg-rose-100 hover:border-r-4 hover:border-rose-500"
            >
              <img src={images.tvshows} alt="tvshows" />{" "}
              <p className="">TV Shows</p>
            </NavLink>
            <NavLink
              onClick={modal.hide}
              to={"#"}
              title="Upcoming"
              className="inline-flex items-center gap-4 pl-6 py-3 hover:bg-rose-100 hover:border-r-4 hover:border-rose-500"
            >
              <img src={images.calender} alt="calender" />{" "}
              <p className="">Upcoming</p>
            </NavLink>
          </div>
          <div className="flex flex-col w-3/5 gap-4 border border-rose-500 bg-rose-50/50 py-6 px-4 mx-auto rounded-3xl">
            <h3 className="text-zinc-800/80 text-base leading-none font-semibold">
              Play movie quizes and earn free tickets
            </h3>
            <p className="text-stone-500 text-xs leading-tight font-medium">
              50k people are playing now
            </p>
            <button className="flex justify-center text-xs text-rose-700 font-medium bg-rose-100 rounded-[30px] px-4 py-1">
              Start playing
            </button>
          </div>
          <NavLink
            onClick={modal.hide}
            to={"/"}
            className="inline-flex items-center gap-4 pl-6 py-3 hover:bg-rose-100 hover:border-r-4 hover:border-rose-500"
          >
            <img src={images.logout} alt="logout" /> <p className="">Logout</p>
          </NavLink>
        </div>
      </div>
    </Drawer>
  );
});
