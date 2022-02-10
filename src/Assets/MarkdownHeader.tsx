import * as React from "react";

function MarkdownHeader(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="13px" height="25px" viewBox="0 0 13 16" fill="none" {...props}>
      <path
        d="M12.146 16h-1.98V8.674H2.114V16H.134V.292h1.98v6.644h8.052V.292h1.98V16z"
        fill="#5E5E5E"
      />
    </svg>
  );
}

const MemoMarkdownHeader = React.memo(MarkdownHeader);
export default MemoMarkdownHeader;
