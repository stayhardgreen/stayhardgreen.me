import React from "react";

// components
import * as C from "@/components";

export default function Home() {
  return (
    <C.AppLayout>
      <>
        <C.Avatar />
        <C.Intro />
      </>
    </C.AppLayout>
  );
}
