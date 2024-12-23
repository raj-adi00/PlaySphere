"use client";

import { useParams } from "next/navigation";
import CustomSportsPage from "@/components/CustomSports";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function CustomSports() {
  const params = useParams();
  const { customSports } = params;

  if (!customSports || Array.isArray(customSports)) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <h2 className="font-semibold text-xl">No such Course Offered Now</h2>
      </div>
    );
  }

  return <CustomSportsPage name={customSports} />;
}
