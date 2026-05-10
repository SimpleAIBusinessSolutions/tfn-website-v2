import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CMSLoader from "@/components/CMSLoader";
import ChatBot from "@/components/ChatBot";
import AnalyticsTracker from "@/components/AnalyticsTracker";

import { headers } from "next/headers";

import { getWebsite }
from "@/lib/site";

const pages = [
  {
    name: "Home",
    slug: "/",
    showInHeader: true,
    showInFooter: false,
  },
  {
    name: "Class",
    slug: "/class",
    showInHeader: true,
    showInFooter: false,
  },
  {
    name: "Nutrition",
    slug: "/nutrition",
    showInHeader: true,
    showInFooter: false,
  },
  {
    name: "Timetable",
    slug: "/timetable",
    showInHeader: true,
    showInFooter: true,
  },
  {
    name: "Membership",
    slug: "/membership",
    showInHeader: true,
    showInFooter: true,
  },
  {
    name: "Contact",
    slug: "/contact",
    showInHeader: true,
    showInFooter: true,
  },
  {
    name: "Privacy Policy",
    slug: "/privacy-policy",
    showInHeader: false,
    showInFooter: true,
  },
];

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const headersList =
    headers();

  const siteKey =
    headersList.get(
      "x-site-key"
    ) || "tfn";

  const website =
    await getWebsite(
      siteKey
    );

  return (

    <html lang="en">

      <body>

        {website && (

          <AnalyticsTracker
            clientId={
              website.client_id
            }
            siteKey={
              website.site_key
            }
          />

        )}

        <CMSLoader />

        <Header />

        {children}

        <Footer
          pages={pages.filter(
            (p) =>
              p.showInFooter
          )}
        />

        <ChatBot />

      </body>

    </html>
  );
}