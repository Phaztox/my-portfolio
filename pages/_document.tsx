// pages/_document.tsx
import { Html, Head, Main, NextScript } from 'next/document';
import { THEME_INIT_SCRIPT } from '@/contexts/ThemeContext';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Inter is self-hosted through next/font in _app.tsx — no third-party
            request, no render-blocking stylesheet, no flash of fallback text. */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="alternate icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      <body>
        {/* Applies the saved theme before the first paint so dark mode never
            flashes light on load. */}
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
