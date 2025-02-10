import React from "react";

import { createClient } from "@/utils/supabase/server";

import { login, signup } from "../app/login/actions";

const Navbar = async () => {
  const supabase = await createClient();

  // authenticate user
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="flex justify-between items-center p-sm bg-sand">
      <h1 className="text-3xl font-bold">paramood</h1>
      {user && user.email ? (
        <form action="/auth/signout" method="post">
          <button className="text-lg">Sign Out</button>
        </form>
      ) : (
        <form>
          <label htmlFor="email">Email:</label>
          <input id="email" name="email" type="email" />
          <label htmlFor="password">Password:</label>
          <input id="password" name="password" type="password" />
          <button formAction={login}>Log in</button>
          <button formAction={signup}>Sign up</button>
        </form>
      )}
    </div>
  );
};

export default Navbar;
