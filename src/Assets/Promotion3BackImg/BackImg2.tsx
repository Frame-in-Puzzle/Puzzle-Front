import * as React from "react";

function BackImg2(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={348} height={208} fill="none" {...props}>
      <g filter="url(#prefix__filter0_dii_1912_72)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M84.726 51.336L62.101 23l7.701 33.312C57.381 63.357 49 76.7 49 92c0 22.644 18.356 41 41 41h168c22.644 0 41-18.356 41-41s-18.356-41-41-41H90c-1.787 0-3.547.114-5.274.336z"
          fill="#88AB6D"
        />
      </g>
      <defs>
        <filter
          id="prefix__filter0_dii_1912_72"
          x={0.557}
          y={0.981}
          width={346.886}
          height={206.886}
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
            result="effect1_dropShadow_1912_72"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1912_72"
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
          <feColorMatrix values="0 0 0 0 0.472091 0 0 0 0 0.675 0 0 0 0 0.315 0 0 0 0.8 0" />
          <feBlend in2="shape" result="effect2_innerShadow_1912_72" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={-6.606} />
          <feGaussianBlur stdDeviation={4.404} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 0.336068 0 0 0 0 0.483333 0 0 0 0 0.221528 0 0 0 0.7 0" />
          <feBlend
            in2="effect2_innerShadow_1912_72"
            result="effect3_innerShadow_1912_72"
          />
        </filter>
      </defs>
    </svg>
  );
}

const MemoBackImg2 = React.memo(BackImg2);
export default MemoBackImg2;
