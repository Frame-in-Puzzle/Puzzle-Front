import * as React from "react";

function BurgerMenu(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={6} fill="none" {...props}>
      <circle cx={3} cy={3} r={3} fill="#B7B7B7" />
      <circle cx={12} cy={3} r={3} fill="#B7B7B7" />
      <circle cx={21} cy={3} r={3} fill="#B7B7B7" />
    </svg>
  );
}

const MemoBurgerMenu = React.memo(BurgerMenu);
export default MemoBurgerMenu;
