export function Footer() {
  return (
    <footer className="bg-primary text-secondary py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        <div>
          <h3 className="font-bold mb-2">Company</h3>
          <ul className="space-y-1">
            <li><a href="/about">About Us</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Help</h3>
          <ul className="space-y-1">
            <li><a href="/contact">Contact</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Follow Us</h3>
          <ul className="space-y-1">
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Facebook</a></li>
          </ul>
        </div>
        <div className="text-sm">
          © {new Date().getFullYear()} Ambraya. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
