import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CMSLoader from "@/components/CMSLoader";
import ChatBot from "@/components/ChatBot";

const pages = [{"name":"Home","slug":"/","showInHeader":true,"showInFooter":false},{"name":"Class","slug":"/class","showInHeader":true,"showInFooter":false},{"name":"Nutrition","slug":"/nutrition","showInHeader":true,"showInFooter":false},{"name":"Timetable","slug":"/timetable","showInHeader":true,"showInFooter":true},{"name":"Membership","slug":"/membership","showInHeader":true,"showInFooter":true},{"name":"Contact","slug":"/contact","showInHeader":true,"showInFooter":true},{"name":"Privacy Policy","slug":"/privacy-policy","showInHeader":false,"showInFooter":true}];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CMSLoader />
        <Header />
        {children}
        <Footer pages={pages.filter(p => p.showInFooter)} />
        <ChatBot />
      </body>
    </html>
  );
}
