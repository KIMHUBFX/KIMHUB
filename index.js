import Hero from "../components/Hero";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import BotBuilder from "../components/BotBuilder";

export default function Home() {
  return (
    <div>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Features Section */}
      <Features />

      {/* 3. How It Works Section */}
      <HowItWorks />

      {/* 4. Bot Builder Section */}
      <section id="bot-builder" style={{ padding: '80px 20px', background: '#f9fafb', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '40px', color: '#111827' }}>Try the Bot Builder</h2>
        <p style={{ marginBottom: '30px' }}>Drag and connect the blocks to design a strategy demo.</p>
        <BotBuilder />
      </section>

      {/* 5. Footer Section */}
      <footer style={{ background: '#1f2937', color: 'white', textAlign: 'center', padding: '40px 20px' }}>
        <p>&copy; 2025 KIMHUB. All rights reserved.</p>
        <p>
          <a href="#hero" style={{ color: '#3b82f6', textDecoration: 'none', marginRight: '15px' }}>Home</a>
          <a href="#features" style={{ color: '#3b82f6', textDecoration: 'none', marginRight: '15px' }}>Features</a>
          <a href="#how-it-works" style={{ color: '#3b82f6', textDecoration: 'none', marginRight: '15px' }}>How It Works</a>
          <a href="#bot-builder" style={{ color: '#3b82f6', textDecoration: 'none', marginRight: '15px' }}>Bot Builder</a>
          <a href="https://deriv.partners/rx?ca=kimhuhfx.com&utm_campaign=dynamicworks&utm_medium=affiliate&utm_source=CU154142"
             target="_blank" style={{ color: '#3b82f6', textDecoration: 'none', marginRight: '15px' }}>Connect Deriv</a>
          <a href="/terms" style={{ color: '#3b82f6', textDecoration: 'none', marginRight: '15px' }}>Terms</a>
          <a href="/privacy" style={{ color: '#3b82f6', textDecoration: 'none' }}>Privacy</a>
        </p>
        <p style={{ marginTop: '10px', fontSize: '0.9rem' }}>
          Trading involves risk. Users trade at their own risk. Affiliate referral ID 112604 included.
        </p>
      </footer>
    </div>
  );
}
