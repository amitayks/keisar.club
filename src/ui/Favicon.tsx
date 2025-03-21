import { useEffect } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import Logo from "./logo/Logo";

export default function Favicon() {
  useEffect(() => {
    const svgString = encodeURIComponent(
      renderToStaticMarkup(<Logo fill='white' />)
    );
    const dataUrl = `data:image/svg+xml,${svgString}`;

    const link = document.createElement("link");
    link.rel = "icon";
    link.type = "image/svg+xml";
    link.href = dataUrl;

    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return null;
}
