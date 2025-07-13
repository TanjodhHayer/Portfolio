// src/app/components/ExperienceAndProjects.tsx
import React from "react";

const ExperienceAndProjects = () => {
  return (
    <section className="py-16 px-8 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 max-w-7xl mx-auto">
      {/* Experience Section */}
      <div className="mb-20 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-12">
          Experience
        </h2>

        {/* Software Developer */}
        <article className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-10 hover:scale-[1.02] transition-transform duration-300 ease-in-out">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
            Software Developer — Royal City Taxi
          </h3>
          <p className="text-gray-600 dark:text-gray-300 italic mb-4">
            December 2024 - Present
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>
              Designed, developed, and deployed a new online booking system using React, streamlining Royal City Taxi’s digital presence.
            </li>
            <li>
              Monitored user engagement via Google Cloud Platform, achieving hundreds of bookings and tens of thousands of impressions.
            </li>
            <li>
              Collected user feedback, created acceptance criteria, and pitched designs to stakeholders; built automated email confirmation functionality with Nodemailer and Gmail SMTP, sending hundreds of confirmations monthly.
            </li>
            <li>
              Implemented secure authentication and real-time data management with Firebase, supporting user accounts and service interactions.
            </li>
            <li>
              Integrated Google Maps API for location selection with address autocomplete and distance-based logic to improve UX.
            </li>
            <li>
              Provided ongoing maintenance, feature updates, hosting management, bug fixes, and client support post-launch.
            </li>
          </ul>
        </article>

        {/* Computer Science Tutor */}
        <article className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:scale-[1.02] transition-transform duration-300 ease-in-out">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
            Computer Science Tutor
          </h3>
          <p className="text-gray-600 dark:text-gray-300 italic mb-4">
            September 2024 - December 2024
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>
              Conducted one-on-one and group tutoring sessions on foundational Python programming concepts including syntax, data types, control structures, and data structures.
            </li>
            <li>
              Introduced basic machine learning concepts and guided students through hands-on projects using scikit-learn, such as linear regression and k-means clustering.
            </li>
          </ul>
        </article>
      </div>

      {/* Projects Section */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-12">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
          {/* Predicting Diabetes */}
          <a
            href="https://github.com/TanjodhHayer/Predicting-Diabetes"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl"
          >
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Predicting Diabetes
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Built with Python, Machine Learning, Scikit-learn
              </p>
              <ul className="text-gray-700 dark:text-gray-300 space-y-3">
                <li>Implemented a machine learning pipeline for data analysis.</li>
                <li>Achieved an F1-score of 0.73 and AUC-ROC of 0.89.</li>
                <li>Applied unsupervised clustering and advanced feature engineering.</li>
              </ul>
            </div>
          </a>

          {/* LightNovel Recommender */}
          <a
            href="https://github.com/TanjodhHayer/LNProject"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl"
          >
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                LightNovel Recommender
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Built with Java, JavaScript, Python, Spring Boot, MSSQL
              </p>
              <ul className="text-gray-700 dark:text-gray-300 space-y-3">
                <li>Implemented Redis for faster data access and optimized performance.</li>
                <li>Configured master-slave architecture for high availability.</li>
                <li>Added pagination for efficient data display and improved UX.</li>
              </ul>
            </div>
          </a>

          {/* BGC Engineering Inventory System */}
          <a
            href="https://github.com/TanjodhHayer/bgc-engineering-inventory-management"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl"
          >
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                BGC Engineering Inventory System
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Built with JavaScript, React, Express.js, PostgreSQL
              </p>
              <ul className="text-gray-700 dark:text-gray-300 space-y-3">
                <li>Developed an inventory system with barcode scanning functionality.</li>
                <li>Integrated Google Maps API for visual item location display.</li>
                <li>Leveraged PostgreSQL for reliable data integrity and query support.</li>
              </ul>
            </div>
          </a>

          {/* DailyDime Financial App */}
          <a
            href="https://github.com/TanjodhHayer/DailyDime-Website"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl"
          >
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                DailyDime Financial App
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Built with Kotlin, Java, Firebase
              </p>
              <ul className="text-gray-700 dark:text-gray-300 space-y-3">
                <li>Developed a mobile app for managing personal finances through visualizations.</li>
                <li>Utilized Firebase for secure user authentication and saving financial data.</li>
                <li>Incorporated Kotlin MVVM architecture for modular structure.</li>
              </ul>
            </div>
          </a>

          {/* Game Predictor */}
          <a
            href="https://github.com/TanjodhHayer/GamePredictor"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl"
          >
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Game Predictor
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Built with Python
              </p>
              <ul className="text-gray-700 dark:text-gray-300 space-y-3">
                <li>Loaded and cleaned datasets with 65k games.</li>
                <li>Conducted analysis and visualizations on game-related data.</li>
                <li>Trained a Logistic Regression model and compared it with other models.</li>
              </ul>
            </div>
          </a>

          {/* Parent App */}
          <a
            href="https://github.com/TanjodhHayer/ParentApp"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl"
          >
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Parent App
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Built with Java, Android Studio
              </p>
              <ul className="text-gray-700 dark:text-gray-300 space-y-3">
                <li>Developed an app for parents with features like breathing exercises for children.</li>
                <li>Used GSON and Shared Preferences for saving user data.</li>
                <li>Incorporated animations and sounds to engage children.</li>
              </ul>
            </div>
          </a>

          {/* Consumable Item List Tracker */}
          <a
            href="https://github.com/TanjodhHayer/Consumable-Item-List-Tracker"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl"
          >
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Consumable Item List Tracker
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Built with Java, Swing, Spring Boot
              </p>
              <ul className="text-gray-700 dark:text-gray-300 space-y-3">
                <li>Created an application for managing inventory and usage tracking.</li>
                <li>Implemented a REST API using Spring Boot for optimization.</li>
                <li>Used Factory pattern for modular and reusable code.</li>
              </ul>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ExperienceAndProjects;
