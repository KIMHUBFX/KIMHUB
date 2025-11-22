import Head from "next/head";
import BotBuilder from "../components/BotBuilder";

export default function Home() {
  return (
    <>
      <Head>
        <title>KIMHUB DollarClone</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Hero Section */}
      <section id="hero" style={{ background: "linear-gradient(135deg,#1f2937,#4f46e5)", color: "white", padding: "80px 20px", textAlign: "center" }}>
        <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "20px" }}>Build Your Automated Trading Bots</h1>
        <p style={{ fontSize: "1.2rem", marginBottom: "30px" }}>Drag & drop strategies, connect Deriv, and automate your trades effortlessly.</p>
        <a
          href="https://deriv.partners/rx?ca=kimhuhfx.com&utm_campaign=dynamicworks&utm_medium=affiliate&utm_source=CU154142"
          target="_blank"
          style={{ display:"inline-block", padding:"15px 30px", fontSize:"1.2rem", background:"#ef4444", color:"white", borderRadius:"8px", textDecoration:"none", marginRight:"10px", transition:"0.3s" }}
        >Connect Deriv</a>
        <a href="#features" style={{ display:"inline-block", padding:"15px 30px", fontSize:"1.2rem", background:"#3b82f6", color:"white", borderRadius:"8px", textDecoration:"none", transition:"0.3s" }}>Learn More</a>
      </section>

      {/* Features Section */}
      <section id="features" style={{ padding:"80px 20px", background:"#f9fafb", textAlign:"center" }}>
        <h2 style={{ fontSize:"2.5rem", marginBottom:"40px", color:"#111827" }}>Features</h2>
        <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"center", gap:"20px" }}>
          {["Drag & Drop","Automated Trading","Referral Integration","Strategy Storage"].map((title, idx) => (
            <div key={idx} style={{ background:"white", padding:"30px", borderRadius:"12px", width:"250px", boxShadow:"0 4px 6px rgba(0,0,0,0.1)" }}>
              <h3 style={{ fontSize:"1.5rem", marginBottom:"15px" }}>{title}</h3>
              <p>
                {title === "Drag & Drop" && "Create strategies visually with an easy drag & drop builder."}
                {title === "Automated Trading" && "Run bots automatically on Deriv with real-time trading logic."}
                {title === "Referral Integration" && "Earn commissions automatically via your Deriv affiliate ID."}
                {title === "Strategy Storage" && "Save your trading strategies for future reuse or demo testing."}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" style={{ padding:"80px 20px", background:"#fff", textAlign:"center" }}>
        <h2 style={{ fontSize:"2.5rem", marginBottom:"50px", color:"#111827" }}>How It Works</h2>
        <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"center", gap:"40px" }}>
          {["Create Strategy","Connect Deriv","Run Bot","Track Profits"].map((step, idx) => (
            <div key={idx} style={{ width:"220px" }}>
              <div style={{ fontSize:"2rem", fontWeight:"bold", color:"#3b82f6", marginBottom:"15px" }}>{idx+1}</div>
              <h3 style={{ fontSize:"1.5rem", marginBottom:"10px" }}>{step}</h3>
              <p>
                {step === "Create Strategy" && "Use our drag & drop builder to design your trading strategy visually."}
                {step === "Connect Deriv" && "Click the Connect Deriv button to link your account via our affiliate referral."}
                {step === "Run Bot" && "Start your bot and let it execute trades automatically based on your strategy."}
                {step === "Track Profits" && "Monitor your performance and refine strategies for better results."}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Bot Builder Section */}
      <section id="bot-builder" style={{ padding:"80px 20px", background:"#f9fafb", textAlign:"center" }}>
        <h2 style={{ fontSize:"2.5rem", marginBottom:"40px", color:"#111827" }}>Try the Bot Builder</h2>
        <p style={{ marginBottom:"30px" }}>Drag and connect the blocks to design a strategy demo.</p>
        <BotBuilder />
      </section>

      {/* Footer */}
      <footer style={{ background:"#1f2937", color:"white", textAlign:"center", padding:"40px 20px" }}>
        <p>&copy; 2025 KIMHUB. All rights reserved.</p>
        <p>
          <a href="#hero" style={{ color:"#3b82f6", textDecoration:"none", marginRight:"15px" }}>Home</a>
          <a href="#features" style={{ color:"#3b82f6", textDecoration:"none", marginRight:"15px" }}>Features</a>
          <a href="#how-it-works" style={{ color:"#3b82f6", textDecoration:"none", marginRight:"15px" }}>How It Works</a>
          <a href="#bot-builder" style={{ color:"#3b82f6", textDecoration:"none", marginRight:"15px" }}>Bot Builder</a>
          <a href="https://deriv.partners/rx?ca=kimhuhfx.com&utm_campaign=dynamicworks&utm_medium=affiliate&utm_source=CU154142" target="_blank" style={{ color:"#3b82f6", textDecoration:"none" }}>Connect Deriv</a>
        </p>
        <p style={{ marginTop:"10px", fontSize:"0.9rem" }}>Trading involves risk. Users trade at their own risk. Affiliate referral ID 112604 included for commission tracking.</p>
      </footer>
    </>
  );
}
