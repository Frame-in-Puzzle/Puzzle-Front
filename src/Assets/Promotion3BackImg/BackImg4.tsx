import * as React from "react";

function BackImg4(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={348} height={213} fill="none" {...props}>
      <g filter="url(#prefix__filter0_dii_1912_73)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M259.788 104.962l26.111 32.702-8.658-37.45C290.187 93.322 299 79.69 299 64c0-22.643-18.356-41-41-41H90c-22.644 0-41 18.357-41 41 0 22.644 18.356 41 41 41h168c.599 0 1.195-.013 1.788-.038z"
          fill="#4B7828"
        />
      </g>
      <defs>
        <filter
          id="prefix__filter0_dii_1912_73"
          x={0.557}
          y={0.981}
          width={346.886}
          height={211.55}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={26.423} />
          <feGaussianBlur stdDeviation={24.221} />
          <feColorMatrix values="0 0 0 0 0.533333 0 0 0 0 0.670588 0 0 0 0 0.427451 0 0 0 0.2 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1912_73"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1912_73"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={-6.543} />
          <feGaussianBlur stdDeviation={2.453} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 0.245313 0 0 0 0 0.4 0 0 0 0 0.125 0 0 0 0.6 0" />
          <feBlend in2="shape" result="effect2_innerShadow_1912_73" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={-6.606} />
          <feGaussianBlur stdDeviation={4.404} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 0.197282 0 0 0 0 0.354167 0 0 0 0 0.0752604 0 0 0 1 0" />
          <feBlend
            in2="effect2_innerShadow_1912_73"
            result="effect3_innerShadow_1912_73"
          />
        </filter>
      </defs>
    </svg>
  );
}

const MemoBackImg4 = React.memo(BackImg4);
export default MemoBackImg4;
