import "@emotion/react";

declare module "@emotion/react" {
  export interface theme {
    buttons: {
      Big: string;
      Medium: string;
      Regular: string;
      Small: string;
    };
    fonts: {
      h1: string;
      h2: string;
      h3: string;
      h4: string;
      h5: string;
      h6: string;
    };
  }
}
