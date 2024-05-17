import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      <main className="mb-auto h-10 bg-green-500 h-full">
        Content
        </main>
      <Footer />
    </div>
  );
}
