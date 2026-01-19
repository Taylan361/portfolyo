import React, { useEffect, useCallback, useState } from 'react';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import AOS from 'aos';
import Typewriter from 'typewriter-effect';
import 'aos/dist/aos.css';
import './App.css';

// Resim Importları (Dosya isimlerinin doğruluğundan emin ol)
import profilResmi from './profil.jpg';
import taylanHomesImg from './taylanhomes.png'; 
import examSecImg from './examsec.png';

function App() {
  
  // Navbar'ın görünüp görünmeyeceğini kontrol eden state
  const [menuAcik, setMenuAcik] = useState(false);

  // AOS (Scroll Animasyonu) Başlatma
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  // Particles (Arka Plan Ağı) Başlatma
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  const particlesOptions = {
    background: { color: { value: "#0b0f19" } },
    fpsLimit: 120,
    interactivity: {
      events: { onHover: { enable: true, mode: "grab" }, resize: true },
      modes: { grab: { distance: 200, line_linked: { opacity: 1 } } }
    },
    particles: {
      color: { value: "#e31b6d" },
      links: { color: "#ffffff", distance: 150, enable: true, opacity: 0.2, width: 1 },
      move: { enable: true, speed: 1 },
      number: { density: { enable: true, area: 800 }, value: 60 },
      opacity: { value: 0.5 },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  };

  // Proje Listesi Verisi
  const projects = [
    {
      title: "TaylanHomes.com",
      desc: "Modern arayüze sahip, Full-Stack emlak platformu. Kullanıcıların ilanları filtreleyebildiği, detaylı inceleyebildiği dinamik yapı.",
      stack: ["React", "Node.js", "Firebase"],
      img: taylanHomesImg, // Import ettiğimiz resim
      link: "https://taylanhomes.com"
    },
    {
      title: "Exam Security System",
      desc: "The Exam Security System is a comprehensive web application designed to digitize and secure physical university examinations.",
      stack: ["React", "Flask", "PostgreSQL" , "ML" , "Python"],
      img: examSecImg, // Import ettiğimiz resim,
      link : "https://examsec.vercel.app"
    },
    {
      title: "Öğrenci Otomasyonu",
      desc: "SQL veritabanı mimarisi üzerine kurulu, .NET tabanlı kapsamlı üniversite yönetim sistemi backend projesi.",
      stack: ["SQL", "C#", ".NET"],
      img: null
    }
  ];

  return (
    <div className="App">
      {/* Arka Plan Efekti */}
      <Particles id="tsparticles" init={particlesInit} options={particlesOptions} className="particles-bg" />

      <div className="content-wrapper">
        
        {/* Navbar - Butona basılınca 'visible' sınıfı eklenir ve aşağı kayar */}
        <nav className={`navbar ${menuAcik ? 'visible' : ''}`}>
          <div className="nav-container">
            <span className="logo">taylan@maltepe:~$</span>
            <ul className="nav-links">
              <li><a href="#about">Hakkımda</a></li>
              <li><a href="#projects">Projeler</a></li>
              <li><a href="#contact">İletişim</a></li>
            </ul>
          </div>
        </nav>

        {/* Hero Section (Giriş) */}
        <header className="hero">
          <div className="hero-text">
            {/* Daktilo Efekti */}
            <h1 className="typewriter-h1">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString('Merhaba,')
                    .pauseFor(500)
                    .typeString('<br/>Ben <span style="color: #e31b6d;">Taylan Alp Çakı.</span>')
                    .start();
                }}
                options={{ autoStart: true, delay: 75, cursor: '_' }}
              />
            </h1>
            
            {/* Gecikmeli Gelen Alan */}
            <div className="fade-in-delayed">
                <p className="subtitle">Maltepe Üniversitesi Yazılım Mühendisliği 3. Sınıf Öğrencisi.</p>
                
                {/* Butona tıklayınca menü açılır */}
                <a href="#about" className="cta-button" onClick={() => setMenuAcik(true)}>
                  Hakkımda <span className="arrow">↓</span>
                </a>
            </div>
          </div>
        </header>

        {/* Hakkımda Bölümü */}
        <section id="about" className="section about-section">
          <h2 data-aos="fade-right">Hakkımda</h2>
          <div className="about-container">
            
            {/* Sol: Profil Resmi */}
            <div className="profile-img-wrapper" data-aos="fade-right">
              <img src={profilResmi} alt="Taylan Alp Çakı" className="profile-img" />
            </div>
            
            {/* Sağ: Yazı ve Yetenekler */}
            <div className="about-text" data-aos="fade-left">
              <p>
                Yazılım geliştirme tutkum lise yıllarında başladı. Şu anda <strong>Maltepe Üniversitesi</strong>'nde eğitimime devam ederken, özellikle <strong>Siber Güvenlik</strong> ve <strong>Web Teknolojileri</strong> üzerine kendimi geliştiriyorum.
              </p>
              
              {/* Ayrıştırılmış Yetenek Barları */}
              <div className="skills-bar-container">
                <div className="skill-label">Python & Scripting</div>
                <div className="progress-bar"><div className="progress" style={{width: '90%'}}></div></div>

                <div className="skill-label">React.js / Frontend</div>
                <div className="progress-bar"><div className="progress" style={{width: '70%'}}></div></div>

                <div className="skill-label">Kali Linux / Bash</div>
                <div className="progress-bar"><div className="progress" style={{width: '85%'}}></div></div>
                
                <div className="skill-label">SQL / Database</div>
                <div className="progress-bar"><div className="progress" style={{width: '80%'}}></div></div>
              </div>
            </div>
          </div>
        </section>

        {/* Projeler Bölümü */}
        <section id="projects" className="section">
          <h2 data-aos="fade-up">Projelerim</h2>
          <div className="grid">
            {projects.map((p, i) => (
              <div key={i} className="card" data-aos="flip-left" data-aos-delay={i * 100}>
                
                {/* Resim Alanı */}
                <div className="card-image-wrapper">
                    {p.img ? (
                        <img src={p.img} alt={p.title} className="card-img" />
                    ) : (
                        <div className="card-img-placeholder">Terminal/Code</div>
                    )}
                </div>

                {/* Kart İçeriği */}
                <div className="card-content">
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                    <div className="tech-tags">
                      {p.stack.map(s => <span key={s}>{s}</span>)}
                    </div>
                    
                    {/* Link Varsa Buton Göster */}
                    {p.link && (
                        <a href={p.link} target="_blank" rel="noreferrer" className="project-link">
                            Siteye Git →
                        </a>
                    )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* İletişim Bölümü */}
        <section id="contact" className="section footer-section" data-aos="fade-in">
          <h2>İletişim</h2>
          <p>Projeleriniz için benimle iletişime geçin.</p>
          <a href="mailto:taylanalp12@hotmail.com" className="cta-button contact-btn">Mail Gönder</a>
          <footer className="copyright">
            <p>© 2024 Taylan Alp Çakı</p>
          </footer>
        </section>

      </div>
    </div>
  );
}

export default App;