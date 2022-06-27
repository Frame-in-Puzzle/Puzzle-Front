import * as React from "react";

function DefaultImage(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 262 178" fill="none" {...props}>
      <rect
        x={0.5}
        y={0.5}
        width={261}
        height={177}
        rx={9.5}
        fill="#F5F5F5"
        stroke="#D9D9D9"
      />
      <path
        d="M123.696 84.48a5.213 5.213 0 01-.94 2.24c-.494.667-1.167 1.207-2.02 1.62-.84.413-1.834.62-2.98.62h-2.12l-.9 5.04h-3.42l2.48-14.04h5.54c1.466 0 2.573.327 3.32.98.746.64 1.12 1.513 1.12 2.62 0 .333-.027.64-.08.92zm-5.74 1.8c1.28 0 2.033-.6 2.26-1.8.026-.213.04-.367.04-.46 0-.427-.14-.753-.42-.98-.267-.24-.68-.36-1.24-.36h-1.86l-.62 3.6h1.84zm10.08-6.32l-1.48 8.38a5.71 5.71 0 00-.08.72c0 .613.174 1.087.52 1.42.347.32.86.48 1.54.48.8 0 1.454-.227 1.96-.68.507-.453.834-1.1.98-1.94l1.48-8.38h3.42l-1.48 8.38c-.226 1.267-.68 2.34-1.36 3.22a6.202 6.202 0 01-2.46 1.94c-.96.427-2.006.64-3.14.64-1.466 0-2.653-.38-3.56-1.14-.893-.76-1.34-1.86-1.34-3.3 0-.427.04-.88.12-1.36l1.46-8.38h3.42zm10.802 11.24h6.04l-.5 2.8h-9.92l.46-2.6 7.52-8.64h-6l.5-2.8h9.92l-.46 2.6-7.56 8.64zm10.314 0h6.04l-.5 2.8h-9.92l.46-2.6 7.52-8.64h-6l.5-2.8h9.92l-.46 2.6-7.56 8.64zm10.054.2h4.48l-.46 2.6h-7.9l2.48-14.04h3.42l-2.02 11.44zm9.471-8.74l-.5 2.92h4.58l-.46 2.58h-4.58l-.56 3.14h5.18l-.48 2.7h-8.6l2.48-14.04h8.6l-.48 2.7h-5.18z"
        fill="#B4B4B4"
      />
      <path fill="url(#prefix__pattern787)" d="M86 75h20.077v20H86z" />
      <defs>
        <pattern
          id="prefix__pattern787"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use
            xlinkHref="#prefix__image787_3959_14"
            transform="matrix(.00195 0 0 .00196 0 -.002)"
          />
        </pattern>
        <image
          id="prefix__image787_3959_14"
          width={512}
          height={512}
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
}

const MemoDefaultImage = React.memo(DefaultImage);
export default MemoDefaultImage;
