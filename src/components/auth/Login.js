




// code ok 

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";

// function LoginPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);
//   const [activeInput, setActiveInput] = useState(null);
//   const [showPassword, setShowPassword] = useState(false);
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   // Floating animation elements
//   const [particles, setParticles] = useState([]);

//   useEffect(() => {
//     // Create floating particles
//     const newParticles = Array.from({ length: 15 }, (_, i) => ({
//       id: i,
//       size: Math.random() * 4 + 2,
//       left: Math.random() * 100,
//       animationDelay: Math.random() * 20,
//       duration: Math.random() * 10 + 10
//     }));
//     setParticles(newParticles);
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     // Simulate API call with beautiful loading animation
//     await new Promise(resolve => setTimeout(resolve, 1500));

//     const userData = {
//       name: email.split("@")[0],
//       email,
//       avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(email.split("@")[0])}&background=3B82F6&color=fff`
//     };

//     login(userData);
//     navigate("/for-you");
//     setIsLoading(false);
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const styles = {
//     container: {
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       minHeight: "100vh",
//       backgroundColor: "#1f2937",
//       background: "linear-gradient(135deg, #1f2937 0%, #111827 100%)",
//       padding: "20px",
//       fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
//       position: "relative",
//       overflow: "hidden"
//     },
//     particlesContainer: {
//       position: "absolute",
//       top: 0,
//       left: 0,
//       width: "100%",
//       height: "100%",
//       pointerEvents: "none"
//     },
//     particle: {
//       position: "absolute",
//       backgroundColor: "rgba(59, 130, 246, 0.3)",
//       borderRadius: "50%",
//       animation: "float 20s infinite linear"
//     },
//     card: {
//       backgroundColor: "rgba(255, 255, 255, 0.05)",
//       backdropFilter: "blur(20px)",
//       padding: "50px 40px",
//       borderRadius: "20px",
//       boxShadow: `
//         0 25px 50px -12px rgba(0, 0, 0, 0.5),
//         inset 0 1px 0 rgba(255, 255, 255, 0.1)
//       `,
//       width: "100%",
//       maxWidth: "420px",
//       border: "1px solid rgba(255, 255, 255, 0.1)",
//       position: "relative",
//       zIndex: 10,
//       animation: "slideUp 0.8s ease-out"
//     },
//     cardGlow: {
//       position: "absolute",
//       top: 0,
//       left: 0,
//       right: 0,
//       height: "1px",
//       background: "linear-gradient(90deg, transparent, #3B82F6, transparent)",
//       animation: "glow 3s ease-in-out infinite"
//     },
//     logo: {
//       textAlign: "center",
//       marginBottom: "40px",
//       animation: "fadeIn 1s ease-out"
//     },
//     logoText: {
//       fontSize: "42px",
//       fontWeight: "800",
//       background: "linear-gradient(135deg, #60A5FA 0%, #3B82F6 100%)",
//       WebkitBackgroundClip: "text",
//       WebkitTextFillColor: "transparent",
//       backgroundClip: "text",
//       margin: "0",
//       letterSpacing: "-0.02em"
//     },
//     tagline: {
//       textAlign: "center",
//       color: "#9CA3AF",
//       fontSize: "14px",
//       marginTop: "8px",
//       fontWeight: "400",
//       letterSpacing: "0.02em"
//     },
//     title: {
//       textAlign: "center",
//       marginBottom: "35px",
//       fontSize: "28px",
//       fontWeight: "700",
//       color: "#F9FAFB",
//       marginTop: "0"
//     },
//     inputGroup: {
//       marginBottom: "25px",
//       position: "relative"
//     },
//     label: {
//       display: "block",
//       marginBottom: "8px",
//       fontSize: "14px",
//       fontWeight: "600",
//       color: "#E5E7EB",
//       transition: "all 0.3s ease"
//     },
//     inputContainer: {
//       position: "relative",
//       transition: "all 0.3s ease"
//     },
//     input: {
//       width: "100%",
//       padding: "16px 50px 16px 20px",
//       borderRadius: "12px",
//       border: "2px solid rgba(255, 255, 255, 0.1)",
//       fontSize: "15px",
//       color: "#F9FAFB",
//       backgroundColor: "rgba(255, 255, 255, 0.05)",
//       transition: "all 0.3s ease",
//       boxSizing: "border-box",
//       fontFamily: "inherit"
//     },
//     inputFocus: {
//       borderColor: "#3B82F6",
//       backgroundColor: "rgba(59, 130, 246, 0.05)",
//       boxShadow: "0 0 0 4px rgba(59, 130, 246, 0.1)",
//       transform: "translateY(-2px)"
//     },
//     inputIcon: {
//       position: "absolute",
//       right: "15px",
//       top: "50%",
//       transform: "translateY(-50%)",
//       color: "#9CA3AF",
//       transition: "all 0.3s ease",
//       fontSize: "18px",
//       width: "20px",
//       height: "20px",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center"
//     },
//     eyeIcon: {
//       position: "absolute",
//       right: "15px",
//       top: "50%",
//       transform: "translateY(-50%)",
//       color: "#9CA3AF",
//       transition: "all 0.3s ease",
//       cursor: "pointer",
//       fontSize: "18px",
//       background: "none",
//       border: "none",
//       padding: "5px",
//       borderRadius: "4px",
//       width: "20px",
//       height: "20px",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center"
//     },
//     eyeIconHover: {
//       backgroundColor: "rgba(255, 255, 255, 0.1)",
//       color: "#3B82F6"
//     },
//     button: {
//       width: "100%",
//       padding: "16px",
//       border: "none",
//       borderRadius: "12px",
//       background: "linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)",
//       color: "#FFFFFF",
//       fontWeight: "600",
//       fontSize: "15px",
//       cursor: "pointer",
//       transition: "all 0.3s ease",
//       position: "relative",
//       overflow: "hidden",
//       boxShadow: "0 4px 15px rgba(59, 130, 246, 0.3)"
//     },
//     buttonHover: {
//       transform: "translateY(-3px)",
//       boxShadow: "0 8px 25px rgba(59, 130, 246, 0.4)"
//     },
//     buttonDisabled: {
//       opacity: "0.6",
//       cursor: "not-allowed",
//       transform: "none"
//     },
//     buttonGlow: {
//       position: "absolute",
//       top: "0",
//       left: "-100%",
//       width: "100%",
//       height: "100%",
//       background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
//       transition: "left 0.5s ease"
//     },
//     loadingSpinner: {
//       width: "20px",
//       height: "20px",
//       border: "2px solid rgba(255,255,255,0.3)",
//       borderTop: "2px solid #FFFFFF",
//       borderRadius: "50%",
//       animation: "spin 1s linear infinite",
//       margin: "0 auto"
//     },
//     footer: {
//       textAlign: "center",
//       marginTop: "30px",
//       paddingTop: "25px",
//       borderTop: "1px solid rgba(255, 255, 255, 0.1)"
//     },
//     footerText: {
//       color: "#9CA3AF",
//       fontSize: "12px",
//       margin: "0"
//     },
//     link: {
//       color: "#60A5FA",
//       textDecoration: "none",
//       fontWeight: "500",
//       transition: "all 0.3s ease",
//       position: "relative"
//     },
//     linkHover: {
//       color: "#3B82F6"
//     }
//   };

//   const isFormValid = email && password;
//   const [isEyeHovered, setIsEyeHovered] = useState(false);

//   // SVG Icons
//   const EmailIcon = () => (
//     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//       <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
//       <polyline points="22,6 12,13 2,6"/>
//     </svg>
//   );

//   const EyeIcon = () => (
//     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//       <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
//       <circle cx="12" cy="12" r="3"/>
//     </svg>
//   );

//   const EyeOffIcon = () => (
//     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//       <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
//       <line x1="1" y1="1" x2="23" y2="23"/>
//     </svg>
//   );

//   const LockIcon = () => (
//     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//       <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
//       <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
//     </svg>
//   );

//   return (
//     <div style={styles.container}>
//       {/* Animated Background Particles */}
//       <div style={styles.particlesContainer}>
//         {particles.map(particle => (
//           <div
//             key={particle.id}
//             style={{
//               ...styles.particle,
//               width: `${particle.size}px`,
//               height: `${particle.size}px`,
//               left: `${particle.left}%`,
//               top: "-20px",
//               animationDelay: `${particle.animationDelay}s`,
//               animationDuration: `${particle.duration}s`
//             }}
//           />
//         ))}
//       </div>

//       {/* Login Card */}
//       <div style={styles.card}>
//         <div style={styles.cardGlow} />
        
//         {/* Logo Section */}
//         <div style={styles.logo}>
//           <h1 style={styles.logoText}>Flow Track</h1>
//           <p style={styles.tagline}>Modern Project Management Solution</p>
//         </div>

//         <h2 style={styles.title}>Welcome Back</h2>
        
//         <form onSubmit={handleSubmit}>
//           {/* Email Input */}
//           <div style={styles.inputGroup}>
//             <label style={styles.label}>Email Address</label>
//             <div style={styles.inputContainer}>
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 onFocus={() => setActiveInput('email')}
//                 onBlur={() => setActiveInput(null)}
//                 style={{
//                   ...styles.input,
//                   ...(activeInput === 'email' || email ? styles.inputFocus : {})
//                 }}
//                 required
//               />
//               <span style={styles.inputIcon}>
//                 <EmailIcon />
//               </span>
//             </div>
//           </div>

//           {/* Password Input */}
//           <div style={styles.inputGroup}>
//             <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//               <label style={styles.label}>Password</label>
//               <a 
//                 href="#" 
//                 style={{
//                   ...styles.link,
//                   fontSize: "13px"
//                 }}
//                 onMouseEnter={() => setIsHovered(true)}
//                 onMouseLeave={() => setIsHovered(false)}
//               >
//                 {/* Forgot password? */}
//               </a>
//             </div>
//             <div style={styles.inputContainer}>
//               <input
//                 type={showPassword ? "text" : "password"}
//                 placeholder="Enter your password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 onFocus={() => setActiveInput('password')}
//                 onBlur={() => setActiveInput(null)}
//                 style={{
//                   ...styles.input,
//                   ...(activeInput === 'password' || password ? styles.inputFocus : {})
//                 }}
//                 required
//               />
//               <span style={styles.inputIcon}>
//                 <LockIcon />
//               </span>
//               <button
//                 type="button"
//                 style={{
//                   ...styles.eyeIcon,
//                   ...(isEyeHovered ? styles.eyeIconHover : {})
//                 }}
//                 onClick={togglePasswordVisibility}
//                 onMouseEnter={() => setIsEyeHovered(true)}
//                 onMouseLeave={() => setIsEyeHovered(false)}
//                 title={showPassword ? "Hide password" : "Show password"}
//               >
//                 {showPassword ? <EyeOffIcon /> : <EyeIcon />}
//               </button>
//             </div>
//           </div>

//           {/* Submit Button */}
//           <button 
//             type="submit" 
//             style={{
//               ...styles.button,
//               ...(isFormValid && !isLoading && isHovered ? styles.buttonHover : {}),
//               ...(!isFormValid || isLoading ? styles.buttonDisabled : {})
//             }}
//             disabled={!isFormValid || isLoading}
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//           >
//             {isLoading ? (
//               <div style={styles.loadingSpinner}></div>
//             ) : (
//               <>
//                 Sign In
//                 <div style={{
//                   ...styles.buttonGlow,
//                   left: isHovered ? '100%' : '-100%'
//                 }} />
//               </>
//             )}
//           </button>
//         </form>

//         {/* Footer */}
//         <div style={styles.footer}>
//           <p style={styles.footerText}>
//             New to Flow Track?{" "}
//             <a 
//               href="#" 
//               style={styles.link}
//               onMouseEnter={() => setIsHovered(true)}
//               onMouseLeave={() => setIsHovered(false)}
//             >
//               Get started
//             </a>
//           </p>
//           <p style={{ ...styles.footerText, marginTop: "10px" }}>
//             © 2025 Vunathi Technologies Pvt Ltd
//           </p>
//         </div>
//       </div>

//       {/* CSS Animations */}
//       <style>
//         {`
//           @keyframes float {
//             0% {
//               transform: translateY(0) rotate(0deg);
//               opacity: 0;
//             }
//             10% {
//               opacity: 1;
//             }
//             90% {
//               opacity: 1;
//             }
//             100% {
//               transform: translateY(100vh) rotate(360deg);
//               opacity: 0;
//             }
//           }

//           @keyframes slideUp {
//             0% {
//               opacity: 0;
//               transform: translateY(30px);
//             }
//             100% {
//               opacity: 1;
//               transform: translateY(0);
//             }
//           }

//           @keyframes fadeIn {
//             0% {
//               opacity: 0;
//               transform: scale(0.9);
//             }
//             100% {
//               opacity: 1;
//               transform: scale(1);
//             }
//           }

//           @keyframes glow {
//             0%, 100% {
//               opacity: 0.5;
//             }
//             50% {
//               opacity: 1;
//             }
//           }

//           @keyframes spin {
//             0% { transform: rotate(0deg); }
//             100% { transform: rotate(360deg); }
//           }

//           input:focus {
//             outline: none;
//             border-color: #3B82F6 !important;
//             background-color: rgba(59, 130, 246, 0.05) !important;
//             box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1) !important;
//             transform: translateY(-2px) !important;
//           }

//           button:hover:not(:disabled) {
//             transform: translateY(-3px) !important;
//             box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4) !important;
//           }

//           a:hover {
//             color: #3B82F6 !important;
//           }

//           .eye-button:hover {
//             background-color: rgba(255, 255, 255, 0.1) !important;
//             color: #3B82F6 !important;
//           }
//         `}
//       </style>
//     </div>
//   );
// }

// export default LoginPage;
















///////////////////////////  for mobile responsiveness ////////////////////////



import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [activeInput, setActiveInput] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const { login } = useAuth();
  const navigate = useNavigate();

  // Floating animation elements
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Handle responsiveness
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    
    // Create floating particles (fewer on mobile)
    const particleCount = isMobile ? 8 : 15;
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      size: Math.random() * (isMobile ? 3 : 4) + (isMobile ? 1 : 2),
      left: Math.random() * 100,
      animationDelay: Math.random() * 20,
      duration: Math.random() * 10 + 10
    }));
    setParticles(newParticles);

    return () => window.removeEventListener('resize', handleResize);
  }, [isMobile]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call with beautiful loading animation
    await new Promise(resolve => setTimeout(resolve, 1500));

    const userData = {
      name: email.split("@")[0],
      email,
      avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(email.split("@")[0])}&background=3B82F6&color=fff`
    };

    login(userData);
    navigate("/for-you");
    setIsLoading(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      backgroundColor: "#1f2937",
      background: "linear-gradient(135deg, #1f2937 0%, #111827 100%)",
      padding: isMobile ? "15px" : "20px",
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      position: "relative",
      overflow: "hidden"
    },
    particlesContainer: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      pointerEvents: "none"
    },
    particle: {
      position: "absolute",
      backgroundColor: "rgba(59, 130, 246, 0.3)",
      borderRadius: "50%",
      animation: "float 20s infinite linear"
    },
    card: {
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      backdropFilter: "blur(20px)",
      padding: isMobile ? "30px 20px" : "50px 40px",
      borderRadius: isMobile ? "16px" : "20px",
      boxShadow: `
        0 25px 50px -12px rgba(0, 0, 0, 0.5),
        inset 0 1px 0 rgba(255, 255, 255, 0.1)
      `,
      width: "100%",
      maxWidth: isMobile ? "100%" : "420px",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      position: "relative",
      zIndex: 10,
      animation: "slideUp 0.8s ease-out",
      margin: isMobile ? "0" : "auto"
    },
    cardGlow: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: "1px",
      background: "linear-gradient(90deg, transparent, #3B82F6, transparent)",
      animation: "glow 3s ease-in-out infinite"
    },
    logo: {
      textAlign: "center",
      marginBottom: isMobile ? "30px" : "40px",
      animation: "fadeIn 1s ease-out"
    },
    logoText: {
      fontSize: isMobile ? "32px" : "42px",
      fontWeight: "800",
      background: "linear-gradient(135deg, #60A5FA 0%, #3B82F6 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      margin: "0",
      letterSpacing: "-0.02em"
    },
    tagline: {
      textAlign: "center",
      color: "#9CA3AF",
      fontSize: isMobile ? "12px" : "14px",
      marginTop: "8px",
      fontWeight: "400",
      letterSpacing: "0.02em"
    },
    title: {
      textAlign: "center",
      marginBottom: isMobile ? "25px" : "35px",
      fontSize: isMobile ? "24px" : "28px",
      fontWeight: "700",
      color: "#F9FAFB",
      marginTop: "0"
    },
    inputGroup: {
      marginBottom: isMobile ? "20px" : "25px",
      position: "relative"
    },
    label: {
      display: "block",
      marginBottom: isMobile ? "6px" : "8px",
      fontSize: isMobile ? "13px" : "14px",
      fontWeight: "600",
      color: "#E5E7EB",
      transition: "all 0.3s ease"
    },
    inputContainer: {
      position: "relative",
      transition: "all 0.3s ease"
    },
    input: {
      width: "100%",
      padding: isMobile ? "14px 45px 14px 15px" : "16px 50px 16px 20px",
      borderRadius: isMobile ? "10px" : "12px",
      border: "2px solid rgba(255, 255, 255, 0.1)",
      fontSize: isMobile ? "14px" : "15px",
      color: "#F9FAFB",
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      transition: "all 0.3s ease",
      boxSizing: "border-box",
      fontFamily: "inherit",
      WebkitAppearance: "none" // Remove iOS shadow
    },
    inputFocus: {
      borderColor: "#3B82F6",
      backgroundColor: "rgba(59, 130, 246, 0.05)",
      boxShadow: "0 0 0 4px rgba(59, 130, 246, 0.1)",
      transform: "translateY(-2px)"
    },
    inputIcon: {
      position: "absolute",
      right: isMobile ? "12px" : "15px",
      top: "50%",
      transform: "translateY(-50%)",
      color: "#9CA3AF",
      transition: "all 0.3s ease",
      fontSize: isMobile ? "16px" : "18px",
      width: "20px",
      height: "20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    eyeIcon: {
      position: "absolute",
      right: isMobile ? "12px" : "15px",
      top: "50%",
      transform: "translateY(-50%)",
      color: "#9CA3AF",
      transition: "all 0.3s ease",
      cursor: "pointer",
      fontSize: isMobile ? "16px" : "18px",
      background: "none",
      border: "none",
      padding: "5px",
      borderRadius: "4px",
      width: "20px",
      height: "20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 2
    },
    eyeIconHover: {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      color: "#3B82F6"
    },
    button: {
      width: "100%",
      padding: isMobile ? "14px" : "16px",
      border: "none",
      borderRadius: isMobile ? "10px" : "12px",
      background: "linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)",
      color: "#FFFFFF",
      fontWeight: "600",
      fontSize: isMobile ? "14px" : "15px",
      cursor: "pointer",
      transition: "all 0.3s ease",
      position: "relative",
      overflow: "hidden",
      boxShadow: "0 4px 15px rgba(59, 130, 246, 0.3)",
      WebkitTapHighlightColor: "transparent"
    },
    buttonHover: {
      transform: "translateY(-3px)",
      boxShadow: "0 8px 25px rgba(59, 130, 246, 0.4)"
    },
    buttonDisabled: {
      opacity: "0.6",
      cursor: "not-allowed",
      transform: "none"
    },
    buttonGlow: {
      position: "absolute",
      top: "0",
      left: "-100%",
      width: "100%",
      height: "100%",
      background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
      transition: "left 0.5s ease"
    },
    loadingSpinner: {
      width: "20px",
      height: "20px",
      border: "2px solid rgba(255,255,255,0.3)",
      borderTop: "2px solid #FFFFFF",
      borderRadius: "50%",
      animation: "spin 1s linear infinite",
      margin: "0 auto"
    },
    footer: {
      textAlign: "center",
      marginTop: isMobile ? "20px" : "30px",
      paddingTop: isMobile ? "20px" : "25px",
      borderTop: "1px solid rgba(255, 255, 255, 0.1)"
    },
    footerText: {
      color: "#9CA3AF",
      fontSize: isMobile ? "11px" : "12px",
      margin: "0",
      lineHeight: "1.4"
    },
    link: {
      color: "#60A5FA",
      textDecoration: "none",
      fontWeight: "500",
      transition: "all 0.3s ease",
      position: "relative"
    },
    linkHover: {
      color: "#3B82F6"
    },
    forgotPassword: {
      fontSize: isMobile ? "12px" : "13px",
      marginLeft: "auto"
    }
  };

  const isFormValid = email && password;
  const [isEyeHovered, setIsEyeHovered] = useState(false);

  // SVG Icons
  const EmailIcon = () => (
    <svg width={isMobile ? "16" : "18"} height={isMobile ? "16" : "18"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  );

  const EyeIcon = () => (
    <svg width={isMobile ? "16" : "18"} height={isMobile ? "16" : "18"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  );

  const EyeOffIcon = () => (
    <svg width={isMobile ? "16" : "18"} height={isMobile ? "16" : "18"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
      <line x1="1" y1="1" x2="23" y2="23"/>
    </svg>
  );

  const LockIcon = () => (
    <svg width={isMobile ? "16" : "18"} height={isMobile ? "16" : "18"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    </svg>
  );

  return (
    <div style={styles.container}>
      {/* Animated Background Particles */}
      <div style={styles.particlesContainer}>
        {particles.map(particle => (
          <div
            key={particle.id}
            style={{
              ...styles.particle,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.left}%`,
              top: "-20px",
              animationDelay: `${particle.animationDelay}s`,
              animationDuration: `${particle.duration}s`
            }}
          />
        ))}
      </div>

      {/* Login Card */}
      <div style={styles.card}>
        <div style={styles.cardGlow} />
        
        {/* Logo Section */}
        <div style={styles.logo}>
          <h1 style={styles.logoText}>Flow Track</h1>
          <p style={styles.tagline}>Modern Project Management Solution</p>
        </div>

        <h2 style={styles.title}>Welcome Back</h2>
        
        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email Address</label>
            <div style={styles.inputContainer}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setActiveInput('email')}
                onBlur={() => setActiveInput(null)}
                style={{
                  ...styles.input,
                  ...(activeInput === 'email' || email ? styles.inputFocus : {})
                }}
                required
              />
              <span style={styles.inputIcon}>
                <EmailIcon />
              </span>
            </div>
          </div>

          {/* Password Input */}
          <div style={styles.inputGroup}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <label style={styles.label}>Password</label>
              <a 
                href="#" 
                style={{
                  ...styles.link,
                  ...styles.forgotPassword
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* Forgot password? */}
              </a>
            </div>
            <div style={styles.inputContainer}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setActiveInput('password')}
                onBlur={() => setActiveInput(null)}
                style={{
                  ...styles.input,
                  ...(activeInput === 'password' || password ? styles.inputFocus : {})
                }}
                required
              />
              <span style={styles.inputIcon}>
                <LockIcon />
              </span>
              <button
                type="button"
                style={{
                  ...styles.eyeIcon,
                  ...(isEyeHovered ? styles.eyeIconHover : {})
                }}
                onClick={togglePasswordVisibility}
                onMouseEnter={() => setIsEyeHovered(true)}
                onMouseLeave={() => setIsEyeHovered(false)}
                onTouchStart={() => setIsEyeHovered(true)}
                onTouchEnd={() => setIsEyeHovered(false)}
                title={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOffIcon /> : <EyeIcon />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            style={{
              ...styles.button,
              ...(isFormValid && !isLoading && isHovered ? styles.buttonHover : {}),
              ...(!isFormValid || isLoading ? styles.buttonDisabled : {})
            }}
            disabled={!isFormValid || isLoading}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={() => setIsHovered(true)}
            onTouchEnd={() => setIsHovered(false)}
          >
            {isLoading ? (
              <div style={styles.loadingSpinner}></div>
            ) : (
              <>
                Sign In
                <div style={{
                  ...styles.buttonGlow,
                  left: isHovered ? '100%' : '-100%'
                }} />
              </>
            )}
          </button>
        </form>

        {/* Footer */}
        <div style={styles.footer}>
          <p style={styles.footerText}>
            New to Flow Track?{" "}
            <a 
              href="#" 
              style={styles.link}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Get started
            </a>
          </p>
          <p style={{ ...styles.footerText, marginTop: isMobile ? "8px" : "10px" }}>
            © 2025 Vunathi Technologies Pvt Ltd
          </p>
        </div>
      </div>

      {/* CSS Animations */}
      <style>
        {`
          @keyframes float {
            0% {
              transform: translateY(0) rotate(0deg);
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            90% {
              opacity: 1;
            }
            100% {
              transform: translateY(100vh) rotate(360deg);
              opacity: 0;
            }
          }

          @keyframes slideUp {
            0% {
              opacity: 0;
              transform: translateY(30px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeIn {
            0% {
              opacity: 0;
              transform: scale(0.9);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }

          @keyframes glow {
            0%, 100% {
              opacity: 0.5;
            }
            50% {
              opacity: 1;
            }
          }

          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          input:focus {
            outline: none;
            border-color: #3B82F6 !important;
            background-color: rgba(59, 130, 246, 0.05) !important;
            box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1) !important;
            transform: translateY(-2px) !important;
          }

          button:hover:not(:disabled) {
            transform: translateY(-3px) !important;
            box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4) !important;
          }

          a:hover {
            color: #3B82F6 !important;
          }

          .eye-button:hover {
            background-color: rgba(255, 255, 255, 0.1) !important;
            color: #3B82F6 !important;
          }

          /* Mobile-specific optimizations */
          @media (max-width: 480px) {
            input {
              font-size: 16px !important; /* Prevent zoom on iOS */
            }
            
            button {
              min-height: 44px; /* Better touch target */
            }
          }

          /* Tablet responsiveness */
          @media (min-width: 768px) and (max-width: 1024px) {
            .login-card {
              max-width: 380px !important;
              padding: 40px 30px !important;
            }
          }

          /* Prevent text size adjustment on orientation change */
          @media (max-width: 768px) {
            html {
              -webkit-text-size-adjust: 100%;
            }
          }
        `}
      </style>
    </div>
  );
}

export default LoginPage;