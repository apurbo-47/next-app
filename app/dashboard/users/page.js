import React from "react";

async function getAllUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 10 },
  });
  return await res.json();
}

async function UsersPage() {
  const data = await getAllUsers();
  return (
    <div>
      <h1 className="text-2xl font-bold mb-5">Users</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {data &&
          Array.isArray(data) &&
          data.map((user) => (
            <div
              className="border border-gray-400 p-5 shadow-lg rounded-lg"
              key={user.id}
            >
              <h4 className="text-xl font-bold mb-2">Name: {user.name}</h4>

              <p className="text-base font-semibold">Website: {user.website}</p>
              <p className="text-base font-semibold">Email: {user.email}</p>

              <div className="flex gap-4 mt-2">
                <p className="text-xs font-semibold">Phone: {user.phone}</p>
                <p className="text-xs font-semibold">
                  City: {user.address.city}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default UsersPage;
