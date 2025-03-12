import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const FAQ = () => {
  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Header /> {/* Display the Header */}

      <div className="py-16 px-8 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-6xl mx-auto text-center"> {/* Centering content horizontally */}
          <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-8">
            Frequently Asked Questions
          </h1>

          <div className="space-y-6">
            {/* FAQ Content */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 mb-8 transition-transform transform hover:scale-105 duration-300 ease-in-out">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Technical Skills</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Languages</h3>
                  <ul className="list-none space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Java</li>
                    <li>Python</li>
                    <li>C/C++</li>
                    <li>TypeScript</li>
                    <li>JavaScript</li>
                    <li>SQL</li>
                    <li>Rust</li>
                    <li>Haskell</li>
                    <li>Kotlin</li>
                  </ul>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Frameworks</h3>
                  <ul className="list-none space-y-2 text-gray-700 dark:text-gray-300">
                    <li>React</li>
                    <li>Next.js</li>
                    <li>JUnit</li>
                    <li>Express.js</li>
                    <li>Node.js</li>
                    <li>Spring Boot</li>
                    <li>SQLite</li>
                  </ul>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Developer Tools</h3>
                  <ul className="list-none space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Git</li>
                    <li>Heroku</li>
                    <li>Redis</li>
                    <li>PostgreSQL</li>
                    <li>Firebase</li>
                    <li>Google Cloud Platform</li>
                    <li>Visual Studio</li>
                    <li>Maven</li>
                    <li>Figma</li>
                    <li>MSSQL</li>
                  </ul>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Libraries</h3>
                    <ul className="list-none space-y-2 text-gray-700 dark:text-gray-300">
                        <li>pandas</li>
                        <li>NumPy</li>
                        <li>Matplotlib</li>
                        <li>Seaborn</li>
                        <li>scikit-learn</li>
                        <li>PyTorch</li>
                        <li>TensorFlow</li>
                        <li>BeautifulSoup</li>
                        <li>Redis</li>
                    </ul>
                    </div>

              </div>
            </section>

            {/* Education Section */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 mb-8 transition-transform transform hover:scale-105 duration-300 ease-in-out">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Education</h2>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Simon Fraser University, Burnaby, BC</h3>
              <h4 className="text-lg font-medium text-gray-600 dark:text-gray-300">Bachelor of Science in Computer Science</h4>
              <h5 className="text-md text-gray-500 dark:text-gray-400">September 2020 - Present</h5>
            </section>

            {/* Social Media Links Section */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 mb-8 transition-transform transform hover:scale-105 duration-300 ease-in-out">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Links & Contact Info</h2>
              <ul className="list-none space-y-3 text-gray-700 dark:text-gray-300">
                <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/tanjodh-hayer/" className="text-blue-500 hover:text-blue-700">https://www.linkedin.com/in/tanjodh-hayer/</a></li>
                <li><strong>GitHub:</strong> <a href="https://github.com/TanjodhHayer" className="text-blue-500 hover:text-blue-700">https://github.com/TanjodhHayer</a></li>
                <li><strong>Email:</strong> <span>tanjodhhayer@gmail.com</span></li>
                <li><strong>Phone Number:</strong> <span>778-558-9375</span></li>
              </ul>
            </section>

            {/* Resume Section */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 mb-8 transition-transform transform hover:scale-105 duration-300 ease-in-out">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Resume/CV</h2>
              <h4>
                Download my resume: 
                <a href="resume.pdf" className="text-blue-500 hover:text-blue-700"> Tanjodh Hayer Resume PDF</a>
              </h4>
            </section>
          </div>
        </div>
      </div>

      <Footer /> {/* Display the Footer */}
    </main>
  );
};

export default FAQ;
