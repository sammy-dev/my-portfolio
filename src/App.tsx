import React from 'react';
import Navbar from './components/Navbar';
import { Github, Linkedin, Mail, ExternalLink, Code2, Briefcase, User, Cpu, Award } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      
     {/* Hero Section */}
<section className="relative bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white py-24 md:py-32">
  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center"></div>
  <div className="container mx-auto px-4 relative">
    <div className="max-w-4xl mx-auto text-center">
      <div className="mb-8 relative">
        <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white/90 shadow-xl transform hover:scale-105 transition-transform duration-300 relative">
          <img 
            src="/profile.jpg.jpg"
            className="w-full h-full object-cover animate-pulse-subtle"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-500/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12 w-64 h-64 animate-spin-slow opacity-20">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-current text-blue-400">
            <defs>
              <path id="circle" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"/>
            </defs>
            <text fontSize="10">
              <textPath href="#circle">
                WEB3 DEVELOPER • BLOCKCHAIN SPECIALIST • INNOVATOR •
              </textPath>
            </text>
          </svg>
        </div>
      </div>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-shadow-lg animate-fade-in">Sammy Mulandi</h1>
      <p className="text-xl md:text-2xl mb-8 text-blue-200 animate-slide-up">Web3 Developer & Blockchain Specialist</p>
      <div className="flex justify-center space-x-6 animate-bounce-in">
        <a href="https://github.com/sammy-dev" 
           className="text-blue-200 hover:text-white transition-colors transform hover:scale-110 duration-200"
           target="_blank"
           rel="noopener noreferrer">
          <Github className="w-7 h-7" />
        </a>
        <a href="https://www.linkedin.com/in/sammy-mulandi-696926244/" 
           className="text-blue-200 hover:text-white transition-colors transform hover:scale-110 duration-200"
           target="_blank"
           rel="noopener noreferrer">
          <Linkedin className="w-7 h-7" />
        </a>
        <a href="mailto:Sammymulandi99@gmail.com" 
           className="text-blue-200 hover:text-white transition-colors transform hover:scale-110 duration-200">
          <Mail className="w-7 h-7" />
        </a>
      </div>
    </div>
  </div>
</section>

      {/* About Section */}
      <section className="py-20 bg-gray-800" id="about">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <User className="w-8 h-8 text-blue-400 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">About Me</h2>
            </div>
            <div className="space-y-6 relative">
              <div className="absolute -right-20 top-0 hidden lg:block">
                <img 
                  src="https://api.dicebear.com/7.x/bottts/svg?seed=Eugene&backgroundColor=b6e3f4&colors=blue"
                  alt="Decorative Robot"
                  className="w-40 h-40 animate-float-bounce"
                />
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                I am a passionate and certified Blockchain Developer with hands-on experience in building decentralized applications (dApps) and smart contracts. Through my certification from the Dacade Platform, I have completed advanced courses and projects, including Sui DeFi Development, Rust Smart Contract 101, and TypeScript Smart Contract 101. These experiences have equipped me with a strong foundation in blockchain architecture, smart contract development, and decentralized finance (DeFi) solutions.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
              I am proficient in programming languages like Rust and TypeScript, and I enjoy tackling challenges in the blockchain space to create secure, scalable, and innovative solutions. My goal is to contribute to the growing ecosystem of decentralized technologies and drive the adoption of blockchain in real-world applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-900" id="skills">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-12">
              <Cpu className="w-8 h-8 text-blue-400 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">Technical Skills</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                { name: 'Blockchain Development', skills: ['ICP '] },
                { name: 'Smart Contracts', skills: ['Rust', 'TypeScript', 'Sui DeFi Development', 'Rust Smart Contract 101'] },
                { name: 'Web3 Integrations', skills: ['ICP SDK', 'JavaScript SDK'] },
              ].map((category, index) => (
                <div 
                  key={index} 
                  className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-700 group"
                >
                  <h3 className="text-lg font-semibold text-blue-400 mb-4 group-hover:text-blue-300 transition-colors">{category.name}</h3>
                  <ul className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="text-gray-300 flex items-center group-hover:translate-x-2 transition-transform duration-300">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 group-hover:scale-125 transition-transform"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    {/* Achievements Section */}
<section className="py-20 bg-gray-800" id="achievements">
  <div className="container mx-auto px-4">
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center mb-12">
        <Award className="w-8 h-8 text-blue-400 mr-3" />
        <h2 className="text-3xl md:text-4xl font-bold text-white">Achievements</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          {
            title: 'Helcon Certificate',
            description: 'Recognized for contributions to Helcon’s development and deployment, showcasing expertise in decentralized healthcare solutions.',
            image: '/helcon.png'
          },
          {
            title: 'Certified Blockchain Developer (Dacade Platform)',
            description: 'Successfully completed blockchain courses and projects, including Sui DeFi Development, Rust Smart Contract 101, and TypeScript Smart Contract 101.',
            image: '/dacade.png',
            link: 'https://dacade.org/profile/samido'
          }
        ].map((achievement, index) => (
          <div 
            key={index} 
            className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-2"
          >
            <div className="relative overflow-hidden">
              <img 
                src={achievement.image} 
                alt={achievement.title}
                className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                {achievement.title}
              </h3>
              <p className="text-gray-400 mt-2">{achievement.description}</p>

              {/* Button for External Links */}
              {achievement.link && (
                <a 
                  href={achievement.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 inline-block px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors"
                >
                  View Certificate
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>



     {/* Experience Section */}
    <section className="py-20 bg-gray-900" id="experience">
    <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center mb-12">
        <Briefcase className="w-8 h-8 text-blue-400 mr-3" />
        <h2 className="text-3xl md:text-4xl font-bold text-white">Experience</h2>
      </div>
      <div className="space-y-12">
        {[
          {
            role: 'ICP Hub Kenya Ambassador',
            company: 'Technical University of Mombasa',
            period: '2024',
            description: 'Promoted the adoption of Internet Computer Protocol (ICP) by organizing and leading workshops attended by 50+ participants, including students, developers, and industry professionals. Delivered presentations and hands-on training sessions on blockchain technology, smart contracts, and decentralized applications (DApps), leading to a 20% increase in student engagement with ICP initiatives.'
          },
          {
            role: 'Backend Developer – Helcon Project',
            company: 'ICP Hub Kenya Incubation Program',
            period: '2024',
            description: 'Developed Rust-based backend solutions for Helcon, a decentralized healthcare platform, improving system efficiency by 10%. Implemented secure blockchain features, including decentralized appointment booking and data management, reducing data breaches by 20%.'
          },
          {
            role: 'Web3 Developer Intern',
            company: 'Swahili Pot Hub, Mombasa',
            period: 'Sept – Dec 2023',
            description: 'Participated in tech events and a Web3 Hackathon by ICP Hub Kenya. Developed Rust-based Web3 backend applications.'
          }
        ].map((job, index) => (
          <div 
            key={index} 
            className="border-l-4 border-blue-400 pl-6 hover:border-blue-300 transition-all duration-300 transform hover:-translate-x-2"
          >
            <h3 className="text-xl font-semibold text-white group-hover:text-blue-400">{job.role}</h3>
            <div className="text-blue-400 mt-1 font-medium">{job.company}</div>
            <div className="text-gray-400 mt-1">{job.period}</div>
            <p className="text-gray-300 mt-2">{job.description}</p>
          </div>
        ))}
      </div>
    </div>
   </div>
   </section>

      {/* Education Section */}
   <section className="py-20 bg-gray-900" id="education">
   <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Education</h2>
      <div className="bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
        <h3 className="text-xl font-semibold text-blue-400">Bachelor of Science in Information Technology</h3>
        <p className="text-gray-300 mt-2">Technical University of Mombasa</p>
        <p className="text-gray-400 mt-1">2020 – 2024</p>
      </div>
      <div className="bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 mt-6">
        <h3 className="text-xl font-semibold text-blue-400">ALX Software Engineering Program</h3>
        <p className="text-gray-300 mt-2">ALX Africa</p>
        <p className="text-gray-400 mt-1">Ongoing</p>
      </div>
    </div>
    </div>
    </section>


 {/* Contact Section */}
<section className="py-20 bg-gray-800" id="contact">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Get In Touch</h2>
      <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8">
        <a 
          href="mailto:Sammymulandi99@gmail.com" 
          className="flex items-center justify-center text-gray-300 hover:text-blue-400 transition-colors group"
        >
          <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
          Sammymulandi99@gmail.com
        </a>
        <a 
          href="https://www.linkedin.com/in/sammy-mulandi-696926244/" 
          className="flex items-center justify-center text-gray-300 hover:text-blue-400 transition-colors group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
          LinkedIn
        </a>
        <a 
          href="https://github.com/sammy-dev" 
          className="flex items-center justify-center text-gray-300 hover:text-blue-400 transition-colors group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
          GitHub
        </a>
      </div>
    </div>
  </div>
</section>

  {/* Footer */}
  <footer className="bg-black text-gray-400 py-8">
  <div className="container mx-auto px-4 text-center">
    <p>© {new Date().getFullYear()} Sammy Mulandi. All rights reserved.</p>
  </div>
  </footer>
    </div>
  );
}

export default App;
