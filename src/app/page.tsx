import Image from "next/image";
import Link from "next/link"; // Import Link for client-side transitions between routes
import "./home.css";
export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center p-24"
      style={{ backgroundColor: "#ffdc00" }}
    >
      <Image
        src="/boone-bars.png"
        alt="Boone Bars Logo"
        height={600}
        width={300}
        priority
      />

      {/* Adjusted Bar Login Link */}
      <Link href="/bar/login" className="myButton">
        Bar Login
      </Link>

      {/* Adjusted Customer Login Link */}
      <Link href="/customer/login" className="myButton">
        Customer Login
      </Link>
    </main>
  );
}
