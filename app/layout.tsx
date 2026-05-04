import CMSLoader from "@/components/CMSLoader";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <CMSLoader />
        {children}
      </body>
    </html>
  );
}