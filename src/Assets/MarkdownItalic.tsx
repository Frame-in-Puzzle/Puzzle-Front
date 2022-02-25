import * as React from "react";

function MarkdownItalic(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="10px" height="25px" viewBox="0 0 10 16" fill="none" {...props}>
      <path
        d="M.56 16l.22-1.078 1.87-.44L5.334 1.81l-1.672-.418.22-1.1h5.5l-.22 1.1-1.892.418-2.684 12.672 1.694.44L6.06 16H.56z"
        fill="#5E5E5E"
      />
    </svg>
  );
}

const MemoMarkdownItalic = React.memo(MarkdownItalic);
export default MemoMarkdownItalic;
