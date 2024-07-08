"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { RootState } from "@/store";

const withAuth = (WrappedComponent: React.ComponentType, role: string) => {
  return (props: any) => {
    const [isClient, setIsClient] = useState(false);
    const user = useSelector((state: RootState) => state.auth.user);
    const router = useRouter();

    useEffect(() => {
      setIsClient(true);

      if (!user || user.role !== role) {
        router.push("/login");
      }
    }, [user, router]);

    if (!isClient) {
      return null;
    }

    return user && user.role === role ? <WrappedComponent {...props} /> : null;
  };
};

export default withAuth;
