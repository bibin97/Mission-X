export default function Footer() {
  return (
    <footer className="bg-transparent py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 border-b border-gray-200 pb-12">
          <div>
            <h4 className="text-lg font-bold mb-6 text-teal-800">Platform</h4>
            <ul className="space-y-3">
              <li><a href="#features" className="hover:text-teal-600 font-semibold transition-colors">Features</a></li>
              <li><a href="#missions" className="hover:text-teal-600 font-semibold transition-colors">Missions</a></li>
              <li><a href="#ai-mentor" className="hover:text-teal-600 font-semibold transition-colors">AI Mentor</a></li>
              <li><a href="#community" className="hover:text-teal-600 font-semibold transition-colors">Community</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 text-teal-800">Support</h4>
            <ul className="space-y-3">
              <li><a href="/help" className="hover:text-teal-600 font-semibold transition-colors">Help Center</a></li>
              <li><a href="/contact" className="hover:text-teal-600 font-semibold transition-colors">Contact Us</a></li>
              <li><a href="/faq" className="hover:text-teal-600 font-semibold transition-colors">FAQ</a></li>
              <li><a href="/livechat" className="hover:text-teal-600 font-semibold transition-colors">Live Chat</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 text-teal-800">Company</h4>
            <ul className="space-y-3">
              <li><a href="/about" className="hover:text-teal-600 font-semibold transition-colors">About Us</a></li>
              <li><a href="/team" className="hover:text-teal-600 font-semibold transition-colors">Our Team</a></li>
              <li><a href="/careers" className="hover:text-teal-600 font-semibold transition-colors">Careers</a></li>
              <li><a href="/press" className="hover:text-teal-600 font-semibold transition-colors">Press</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 text-teal-800">Legal</h4>
            <ul className="space-y-3">
              <li><a href="/privacy" className="hover:text-teal-600 font-semibold transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-teal-600 font-semibold transition-colors">Terms of Service</a></li>
              <li><a href="/cookies" className="hover:text-teal-600 font-semibold transition-colors">Cookie Policy</a></li>
              <li><a href="/gdpr" className="hover:text-teal-600 font-semibold transition-colors">GDPR</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-sm text-gray-500 mt-8">
          &copy; {new Date().getFullYear()} Mission X. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
