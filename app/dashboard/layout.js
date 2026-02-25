import Link from "next/link";
import React from "react";

function DashboardLayout(props) {
  return (
    <div className="flex">
      <div className="h-screen bg-black text-white w-[15vw] text-lg">
        <ul className="pt-5 flex flex-col gap-5 px-2 ">
          <li className="hover:text-blue-500">
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li className="hover:text-blue-500">
            <Link href="/dashboard/todos">Todos</Link>
          </li>
          <li className="hover:text-blue-500">
            <Link href="/dashboard/users">Users</Link>
          </li>
          <li className="hover:text-blue-500">
            <Link href="/dashboard/profile">Profile</Link>
          </li>
        </ul>
      </div>
      <div className="p-4 max-h-screen overflow-auto">{props.children}</div>
    </div>
  );
}

export default DashboardLayout;
