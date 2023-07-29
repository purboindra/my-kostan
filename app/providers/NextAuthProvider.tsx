"use client";

import { Session } from "next-auth";
import { SessionProvider, getSession } from "next-auth/react";
import React, { useEffect } from "react";

type NextAuthProviderProps = {
  children?: React.ReactNode;
  session: Session | null;
};

export const NextAuthProvider = ({
  children,
  session,
}: NextAuthProviderProps) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};
