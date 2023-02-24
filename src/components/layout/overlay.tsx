import React from "react";

// styles
import * as SH from "./styles";

export const Overlay: React.FC = () => {
  return (
    <SH.OverlayWrapper>
      <SH.OverlayInner>
        <SH.OverlayContent />
      </SH.OverlayInner>
    </SH.OverlayWrapper>
  );
};
