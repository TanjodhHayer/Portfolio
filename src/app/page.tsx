// src/app/page.tsx

import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Header />
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold">Hi, I&apos;m Tanjodh Hayer</h1>
        <p className="text-lg mt-4">Passionate Software Developer | Frontend & Backend</p>
      </section>
      <Projects />
      <Footer />
    </main>
  );
}
