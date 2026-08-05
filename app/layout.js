import "./globals.css";

export const metadata = {
  title: "Dither Blur",
  description:
    "A WebGL carousel where cards ride a helix and dissolve into an ordered dither.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

// The carousel is composed for a desktop aspect, and squeezing it into a phone
// viewport crops the cards rather than rearranging into anything meaningful.
// Below the breakpoint we hand the browser a fixed layout width so it renders
// the desktop composition and zooms it to fit. This has to happen before first
// layout, hence the inline script rather than an effect. Rewriting the layout
// viewport (as opposed to CSS-scaling the stage) also keeps clientX/clientY in
// the same coordinate space the drag handling in gl/scene.js already assumes.
const FORCE_DESKTOP_VIEWPORT = `(function(){try{
var w=1024;if(screen.width>w)return;
var m=document.querySelector('meta[name="viewport"]');
if(!m){m=document.createElement('meta');m.name='viewport';document.head.appendChild(m);}
m.setAttribute('content','width='+w);
}catch(e){}})();`;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: FORCE_DESKTOP_VIEWPORT }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
