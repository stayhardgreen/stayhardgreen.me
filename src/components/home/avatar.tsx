import React from "react";
import Image from "next/image";
import Link from "next/link";

// components
import { Responsive } from "../common";

// styles
import * as SH from "./styles";

export const Avatar = () => {
  return (
    <SH.AvatarWrapper>
      <Responsive>
        <div className="w-full relative">
          <Link
            href="/"
            className="block h-16 w-16 origin-left pointer-events-auto rounded-full overflow-hidden"
          >
            <Image
              src="https://avatars.githubusercontent.com/u/79384083?v=4"
              width={64}
              height={64}
              alt="stayhardgreen"
            />
          </Link>
        </div>
      </Responsive>
    </SH.AvatarWrapper>
  );
};
