// src/components/ServerLayout.tsx
import React from "react";
import Layout from "@/app/(root)/layout";
import { getCurrentUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

const ServerLayout = async ({ children }: { children: React.ReactNode }) => {
  const currentUser = await getCurrentUser();

  if (!currentUser) return redirect("/sign-in");

  return <Layout currentUser={currentUser}>{children}</Layout>;
};

export default ServerLayout;
