const Resume = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-100 shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center text-blue-600">J. Jakiya Safiya</h1>
      <p className="text-center text-gray-700">Full Stack Developer - Fresher</p>
      <p className="text-center text-gray-700">70/109 Perumal Kulam Street, Nagercoil, Kanyakumari</p>
      <p className="text-center text-gray-700">📞 8015584846 | 📧 jakiyapeer@gmail.com</p>
      <p className="text-center text-gray-700">🔗 <a href="https://www.linkedin.com/in/jakiyasafiya" className="text-blue-600">LinkedIn</a></p>
      
      <section className="mt-6">
        <h2 className="text-xl font-bold text-blue-600 border-b pb-2">Education</h2>
        <p className="mt-2"><strong>Duthie Higher Secondary School, Nagercoil</strong></p>
        <p>MUSLIM ARTS COLLEGE, THIRUVITHAMCODE — BSc Computer Science (2019-2020)</p>
        <p>Manonmaniam Sundaranar University</p>
      </section>
      
      <section className="mt-6">
        <h2 className="text-xl font-bold text-blue-600 border-b pb-2">Projects</h2>
        <ul className="list-disc pl-5 mt-2 text-gray-700">
          <li><strong>Landing Page Task:</strong> HTML, CSS</li>
          <li><strong>Add to Cart Task:</strong> React.js, Tailwind CSS, JavaScript</li>
          <li><strong>Recipes App:</strong> Node.js, Express.js, MongoDB, Postman</li>
          <li><strong>User Authentication & Authorization:</strong> Node.js, Express.js, MongoDB, Postman</li>
        </ul>
      </section>
      
      <section className="mt-6">
        <h2 className="text-xl font-bold text-blue-600 border-b pb-2">Skills</h2>
        <p className="text-gray-700">Full Stack Development, JavaScript, HTML/CSS, React.js, Node.js, Git & GitHub, MongoDB</p>
      </section>
      
      <section className="mt-6">
        <h2 className="text-xl font-bold text-blue-600 border-b pb-2">Additional</h2>
        <p className="text-gray-700">GUVI: Attended interactive courses and webinars on web development & full-stack development.</p>
      </section>
      
      <section className="mt-6">
        <h2 className="text-xl font-bold text-blue-600 border-b pb-2">Languages</h2>
        <p className="text-gray-700">Tamil, English</p>
      </section>
      
      <section className="mt-6">
        <h2 className="text-xl font-bold text-blue-600 border-b pb-2">Hobbies</h2>
        <p className="text-gray-700">Travel, Reading Books</p>
      </section>
    </div>
  );
};

export default Resume;
