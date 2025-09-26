
// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import { useAuth } from '../../context/AuthContext';
// // import { FiMail, FiLock } from 'react-icons/fi';

// // export default function Login() {
// //   const [email, setEmail] = useState('admin@demo.com');
// //   const [password, setPassword] = useState('password');
// //   const [err, setErr] = useState('');
// //   const { login } = useAuth();
// //   const nav = useNavigate();

// //   const submit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       await login(email,password);
// //       nav('/for-you');
// //     } catch(e) { setErr('Login failed'); }
// //   };

// //   return (
// //     <div style={{maxWidth:480,margin:'48px auto'}} className="card" role="region" aria-labelledby="login-title">
// //       <h2 id="login-title">Sign in</h2>
// //       <form onSubmit={submit} aria-describedby="login-desc">
// //         <p id="login-desc" className="small">Demo mode — any password accepted.</p>
// //         <label className="form-row"><span>Email</span><div style={{display:'flex',alignItems:'center',gap:8}}><FiMail aria-hidden="true" /><input aria-label="Email" value={email} onChange={e=>setEmail(e.target.value)} required /></div></label>
// //         <label className="form-row"><span>Password</span><div style={{display:'flex',alignItems:'center',gap:8}}><FiLock aria-hidden="true" /><input aria-label="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} required /></div></label>
// //         <div style={{display:'flex',gap:8,alignItems:'center'}}><button className="btn" type="submit">Sign in</button><button type="button" className="btn" onClick={()=>{setEmail('alice@demo.com');setPassword('password')}}>Quick demo</button></div>
// //         {err && <p role="alert" style={{color:'red'}}>{err}</p>}
// //       </form>
// //     </div>
// //   );
// // }





// // import React, { useState } from "react";
 
// // function LoginPage() {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
 
// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     alert(`Email: ${email}, Password: ${password}`);
// //   };
 
// //   const styles = {
// //     container: {
// //       display: "flex",
// //       justifyContent: "center",
// //       alignItems: "center",
// //       height: "100vh",
// //       backgroundColor: "#f3f6f9",
// //     },
// //     card: {
// //       backgroundColor: "#fff",
// //       padding: "30px",
// //       borderRadius: "12px",
// //       boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
// //       width: "350px",
// //     },
// //     title: {
// //       textAlign: "center",
// //       marginBottom: "20px",
// //       fontSize: "24px",
// //       fontWeight: "600",
// //       color: "#333",
// //     },
// //     input: {
// //       width: "100%",
// //       padding: "10px",
// //       margin: "8px 0",
// //       borderRadius: "8px",
// //       border: "1px solid #ccc",
// //       fontSize: "14px",
// //     },
// //     button: {
// //       width: "100%",
// //       padding: "12px",
// //       marginTop: "12px",
// //       border: "none",
// //       borderRadius: "8px",
// //       backgroundColor: "#2563eb",
// //       color: "#fff",
// //       fontWeight: "600",
// //       fontSize: "16px",
// //       cursor: "pointer",
// //     },
// //     buttonHover: {
// //       backgroundColor: "#1d4ed8",
// //     },
// //   };
 
// //   return (
// //     <div style={styles.container}>
// //       <div style={styles.card}>
// //         <h2 style={styles.title}>Login</h2>
// //         <form onSubmit={handleSubmit}>
// //           <input
// //             type="email"
// //             placeholder="Enter email"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //             style={styles.input}
// //             required
// //           />
// //           <input
// //             type="password"
// //             placeholder="Enter password"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //             style={styles.input}
// //             required
// //           />
// //           <button type="submit" style={styles.button}>
// //             Login
// //           </button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // }
 
// // export default LoginPage;
 







// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { useAuth } from "../../context/AuthContext";  // adjust path

// // function LoginPage() {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const { login } = useAuth();
// //   const navigate = useNavigate();

// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     // Fake auth – you can replace with API call
// //     const userData = {
// //       name: email.split("@")[0], // just take name from email
// //       email,
// //     };

// //     login(userData); // store in context
// //     navigate("/for-you"); // redirect after login
// //   };

// //   const styles = {
// //     container: {
// //       display: "flex",
// //       justifyContent: "center",
// //       alignItems: "center",
// //       height: "100vh",
// //       backgroundColor: "#f3f6f9",
// //     },
// //     card: {
// //       backgroundColor: "#fff",
// //       padding: "30px",
// //       borderRadius: "12px",
// //       boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
// //       width: "350px",
// //     },
// //     title: {
// //       textAlign: "center",
// //       marginBottom: "20px",
// //       fontSize: "24px",
// //       fontWeight: "600",
// //       color: "#333",
// //     },
// //     input: {
// //       width: "100%",
// //       padding: "10px",
// //       margin: "8px 0",
// //       borderRadius: "8px",
// //       border: "1px solid #ccc",
// //       fontSize: "14px",
// //     },
// //     button: {
// //       width: "100%",
// //       padding: "12px",
// //       marginTop: "12px",
// //       border: "none",
// //       borderRadius: "8px",
// //       backgroundColor: "#2563eb",
// //       color: "#fff",
// //       fontWeight: "600",
// //       fontSize: "16px",
// //       cursor: "pointer",
// //     },
// //   };

// //   return (
// //     <div style={styles.container}>
// //       <div style={styles.card}>
// //         <h2 style={styles.title}>Login</h2>
// //         <form onSubmit={handleSubmit}>
// //           <input
// //             type="email"
// //             placeholder="Enter email"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //             style={styles.input}
// //             required
// //           />
// //           <input
// //             type="password"
// //             placeholder="Enter password"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //             style={styles.input}
// //             required
// //           />
// //           <button type="submit" style={styles.button}>
// //             Login
// //           </button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // }

// // export default LoginPage;






// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext"; // adjust path if needed

// function LoginPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Fake authentication (replace with API later)
//     const userData = {
//       name: email.split("@")[0], // take part before @
//       email,
//     };

//     login(userData); // save in context/localStorage
//     navigate("/for-you"); // redirect after login
//   };

//   const styles = {
//     container: {
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       height: "100vh",
//       backgroundColor: "#f3f6f9",
//     },
//     card: {
//       backgroundColor: "#fff",
//       padding: "30px",
//       borderRadius: "12px",
//       boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
//       width: "350px",
//     },
//     title: {
//       textAlign: "center",
//       marginBottom: "20px",
//       fontSize: "24px",
//       fontWeight: "600",
//       color: "#333",
//     },
//     input: {
//       width: "100%",
//       padding: "10px",
//       margin: "8px 0",
//       borderRadius: "8px",
//       border: "1px solid #ccc",
//       fontSize: "14px",
//     },
//     button: {
//       width: "100%",
//       padding: "12px",
//       marginTop: "12px",
//       border: "none",
//       borderRadius: "8px",
//       backgroundColor: "#2563eb",
//       color: "#fff",
//       fontWeight: "600",
//       fontSize: "16px",
//       cursor: "pointer",
//     },
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.card}>
//         <h2 style={styles.title}>Login</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             placeholder="Enter email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             style={styles.input}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Enter password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             style={styles.input}
//             required
//           />
//           <button type="submit" style={styles.button}>
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default LoginPage;









// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";

// function LoginPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     // Simulate API call delay
//     await new Promise(resolve => setTimeout(resolve, 1000));

//     // Fake authentication (replace with API later)
//     const userData = {
//       name: email.split("@")[0],
//       email,
//       avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(email.split("@")[0])}&background=0052CC&color=fff`
//     };

//     login(userData);
//     navigate("/for-you");
//     setIsLoading(false);
//   };

//   const styles = {
//     container: {
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       minHeight: "100vh",
//       backgroundColor: "#F4F5F7",
//       backgroundImage: "linear-gradient(135deg, #0052CC 0%, #0747A6 100%)",
//       padding: "20px",
//       fontFamily: "'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif"
//     },
//     card: {
//       backgroundColor: "#FFFFFF",
//       padding: "40px",
//       borderRadius: "8px",
//       boxShadow: "0 8px 32px rgba(9, 30, 66, 0.25)",
//       width: "100%",
//       maxWidth: "400px",
//       border: "1px solid #DFE1E6"
//     },
//     logo: {
//       textAlign: "center",
//       marginBottom: "32px"
//     },
//     logoText: {
//       fontSize: "32px",
//       fontWeight: "700",
//       color: "#0052CC",
//       margin: "0",
//       background: "linear-gradient(135deg, #0052CC 0%, #0747A6 100%)",
//       WebkitBackgroundClip: "text",
//       WebkitTextFillColor: "transparent",
//       backgroundClip: "text"
//     },
//     tagline: {
//       textAlign: "center",
//       color: "#6B778C",
//       fontSize: "14px",
//       marginTop: "4px",
//       fontWeight: "400"
//     },
//     title: {
//       textAlign: "center",
//       marginBottom: "32px",
//       fontSize: "24px",
//       fontWeight: "600",
//       color: "#172B4D",
//       marginTop: "0"
//     },
//     inputGroup: {
//       marginBottom: "20px",
//       position: "relative"
//     },
//     label: {
//       display: "block",
//       marginBottom: "6px",
//       fontSize: "14px",
//       fontWeight: "600",
//       color: "#172B4D"
//     },
//     input: {
//       width: "100%",
//       padding: "12px",
//       borderRadius: "4px",
//       border: "2px solid #DFE1E6",
//       fontSize: "14px",
//       color: "#172B4D",
//       backgroundColor: "#FAFBFC",
//       transition: "all 0.2s ease",
//       boxSizing: "border-box"
//     },
//     inputFocus: {
//       outline: "none",
//       borderColor: "#0052CC",
//       backgroundColor: "#FFFFFF",
//       boxShadow: "0 0 0 2px rgba(0, 82, 204, 0.2)"
//     },
//     button: {
//       width: "100%",
//       padding: "12px 16px",
//       border: "none",
//       borderRadius: "4px",
//       backgroundColor: "#0052CC",
//       color: "#FFFFFF",
//       fontWeight: "600",
//       fontSize: "14px",
//       cursor: "pointer",
//       transition: "all 0.2s ease",
//       position: "relative",
//       height: "40px"
//     },
//     buttonHover: {
//       backgroundColor: "#0747A6",
//       transform: "translateY(-1px)"
//     },
//     buttonDisabled: {
//       backgroundColor: "#B3D4FF",
//       cursor: "not-allowed",
//       transform: "none"
//     },
//     loadingSpinner: {
//       border: "2px solid #f3f3f3",
//       borderTop: "2px solid #0052CC",
//       borderRadius: "50%",
//       width: "16px",
//       height: "16px",
//       animation: "spin 1s linear infinite",
//       margin: "0 auto"
//     },
//     footer: {
//       textAlign: "center",
//       marginTop: "24px",
//       paddingTop: "24px",
//       borderTop: "1px solid #DFE1E6"
//     },
//     footerText: {
//       color: "#6B778C",
//       fontSize: "12px",
//       margin: "0"
//     },
//     error: {
//       color: "#DE350B",
//       fontSize: "12px",
//       marginTop: "4px",
//       display: "none" // Hidden for now, can be shown with validation
//     },
//     link: {
//       color: "#0052CC",
//       textDecoration: "none",
//       fontWeight: "500"
//     }
//   };

//   const isFormValid = email && password;

//   return (
//     <div style={styles.container}>
//       <div style={styles.card}>
//         {/* Logo Section */}
//         <div style={styles.logo}>
//           <h1 style={styles.logoText}>Flow Track</h1>
//           <p style={styles.tagline}>Streamline your workflow, track your progress</p>
//         </div>

//         <h2 style={styles.title}>Sign in to your account</h2>
        
//         <form onSubmit={handleSubmit}>
//           {/* Email Input */}
//           <div style={styles.inputGroup}>
//             <label style={styles.label}>Email address</label>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               style={{
//                 ...styles.input,
//                 ...(email ? styles.inputFocus : {})
//               }}
//               required
//             />
//           </div>

//           {/* Password Input */}
//           <div style={styles.inputGroup}>
//             <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//               <label style={styles.label}>Password</label>
//               <a href="#" style={{ ...styles.link, fontSize: "12px" }}>Forgot password?</a>
//             </div>
//             <input
//               type="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               style={{
//                 ...styles.input,
//                 ...(password ? styles.inputFocus : {})
//               }}
//               required
//             />
//           </div>

//           {/* Submit Button */}
//           <button 
//             type="submit" 
//             style={{
//               ...styles.button,
//               ...(isFormValid && !isLoading ? { ...styles.buttonHover } : {}),
//               ...(!isFormValid || isLoading ? styles.buttonDisabled : {})
//             }}
//             disabled={!isFormValid || isLoading}
//           >
//             {isLoading ? (
//               <div style={styles.loadingSpinner}></div>
//             ) : (
//               "Sign in"
//             )}
//           </button>
//         </form>

//         {/* Footer */}
//         {/* <div style={styles.footer}>
//           <p style={styles.footerText}>
//             Don't have an account?{" "}
//             <a href="#" style={styles.link}>Contact administrator</a>
//           </p>
//           <p style={{ ...styles.footerText, marginTop: "8px" }}>
//             © 2024 Flow Track. Jira-inspired project management.
//           </p>
//         </div> */}
//       </div>

//       {/* Add CSS animation for spinner */}
//       <style>
//         {`
//           @keyframes spin {
//             0% { transform: rotate(0deg); }
//             100% { transform: rotate(360deg); }
//           }
//           input:focus {
//             outline: none;
//             border-color: #0052CC !important;
//             background-color: #FFFFFF !important;
//             box-shadow: 0 0 0 2px rgba(0, 82, 204, 0.2) !important;
//           }
//           button:hover:not(:disabled) {
//             background-color: #0747A6 !important;
//             transform: translateY(-1px) !important;
//           }
//         `}
//       </style>
//     </div>
//   );
// }

// export default LoginPage;









// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";

// function LoginPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);
//   const [activeInput, setActiveInput] = useState(null);
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
//       padding: "16px 20px",
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
//       transition: "all 0.3s ease"
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
//     },
//     ripple: {
//       position: "absolute",
//       borderRadius: "50%",
//       backgroundColor: "rgba(59, 130, 246, 0.3)",
//       transform: "scale(0)",
//       animation: "ripple 0.6s linear",
//       pointerEvents: "none"
//     }
//   };

//   const isFormValid = email && password;

//   const handleMouseEnter = () => setIsHovered(true);
//   const handleMouseLeave = () => setIsHovered(false);

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
//               <span style={styles.inputIcon}>✉️</span>
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
//                 onMouseEnter={handleMouseEnter}
//                 onMouseLeave={handleMouseLeave}
//               >
//                 Forgot password?
//               </a>
//             </div>
//             <div style={styles.inputContainer}>
//               <input
//                 type="password"
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
//               <span style={styles.inputIcon}>🔒</span>
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
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
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
//               onMouseEnter={handleMouseEnter}
//               onMouseLeave={handleMouseLeave}
//             >
//               Get started
//             </a>
//           </p>
//           <p style={{ ...styles.footerText, marginTop: "10px" }}>
//             © 2024 Flow Track. Enterprise-ready project management.
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

//           @keyframes ripple {
//             to {
//               transform: scale(4);
//               opacity: 0;
//             }
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
//         `}
//       </style>
//     </div>
//   );
// }

// export default LoginPage;










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
//       fontSize: "18px"
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
//       borderRadius: "4px"
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
//               <span style={styles.inputIcon}>✉️</span>
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
//               <button
//                 type="button"
//                 style={{
//                   ...styles.eyeIcon,
//                   ...(isEyeHovered ? styles.eyeIconHover : {})
//                 }}
//                 onClick={togglePasswordVisibility}
//                 onMouseEnter={() => setIsEyeHovered(true)}
//                 onMouseLeave={() => setIsEyeHovered(false)}
//               >
//                 {showPassword ? (
//                   <span title="Hide password">👁️</span>
//                 ) : (
//                   <span title="Show password">👁️‍🗨️</span>
//                 )}
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
  const { login } = useAuth();
  const navigate = useNavigate();

  // Floating animation elements
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Create floating particles
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      size: Math.random() * 4 + 2,
      left: Math.random() * 100,
      animationDelay: Math.random() * 20,
      duration: Math.random() * 10 + 10
    }));
    setParticles(newParticles);
  }, []);

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
      padding: "20px",
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
      padding: "50px 40px",
      borderRadius: "20px",
      boxShadow: `
        0 25px 50px -12px rgba(0, 0, 0, 0.5),
        inset 0 1px 0 rgba(255, 255, 255, 0.1)
      `,
      width: "100%",
      maxWidth: "420px",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      position: "relative",
      zIndex: 10,
      animation: "slideUp 0.8s ease-out"
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
      marginBottom: "40px",
      animation: "fadeIn 1s ease-out"
    },
    logoText: {
      fontSize: "42px",
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
      fontSize: "14px",
      marginTop: "8px",
      fontWeight: "400",
      letterSpacing: "0.02em"
    },
    title: {
      textAlign: "center",
      marginBottom: "35px",
      fontSize: "28px",
      fontWeight: "700",
      color: "#F9FAFB",
      marginTop: "0"
    },
    inputGroup: {
      marginBottom: "25px",
      position: "relative"
    },
    label: {
      display: "block",
      marginBottom: "8px",
      fontSize: "14px",
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
      padding: "16px 50px 16px 20px",
      borderRadius: "12px",
      border: "2px solid rgba(255, 255, 255, 0.1)",
      fontSize: "15px",
      color: "#F9FAFB",
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      transition: "all 0.3s ease",
      boxSizing: "border-box",
      fontFamily: "inherit"
    },
    inputFocus: {
      borderColor: "#3B82F6",
      backgroundColor: "rgba(59, 130, 246, 0.05)",
      boxShadow: "0 0 0 4px rgba(59, 130, 246, 0.1)",
      transform: "translateY(-2px)"
    },
    inputIcon: {
      position: "absolute",
      right: "15px",
      top: "50%",
      transform: "translateY(-50%)",
      color: "#9CA3AF",
      transition: "all 0.3s ease",
      fontSize: "18px",
      width: "20px",
      height: "20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    eyeIcon: {
      position: "absolute",
      right: "15px",
      top: "50%",
      transform: "translateY(-50%)",
      color: "#9CA3AF",
      transition: "all 0.3s ease",
      cursor: "pointer",
      fontSize: "18px",
      background: "none",
      border: "none",
      padding: "5px",
      borderRadius: "4px",
      width: "20px",
      height: "20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    eyeIconHover: {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      color: "#3B82F6"
    },
    button: {
      width: "100%",
      padding: "16px",
      border: "none",
      borderRadius: "12px",
      background: "linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)",
      color: "#FFFFFF",
      fontWeight: "600",
      fontSize: "15px",
      cursor: "pointer",
      transition: "all 0.3s ease",
      position: "relative",
      overflow: "hidden",
      boxShadow: "0 4px 15px rgba(59, 130, 246, 0.3)"
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
      marginTop: "30px",
      paddingTop: "25px",
      borderTop: "1px solid rgba(255, 255, 255, 0.1)"
    },
    footerText: {
      color: "#9CA3AF",
      fontSize: "12px",
      margin: "0"
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
    }
  };

  const isFormValid = email && password;
  const [isEyeHovered, setIsEyeHovered] = useState(false);

  // SVG Icons
  const EmailIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  );

  const EyeIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  );

  const EyeOffIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
      <line x1="1" y1="1" x2="23" y2="23"/>
    </svg>
  );

  const LockIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
                  fontSize: "13px"
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
          <p style={{ ...styles.footerText, marginTop: "10px" }}>
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
        `}
      </style>
    </div>
  );
}

export default LoginPage;