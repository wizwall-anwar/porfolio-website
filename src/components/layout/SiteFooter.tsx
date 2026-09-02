import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8">
          {/* Identity */}
          <div>
            <p className="font-display font-semibold text-text-primary mb-2">Anwar Ayoon</p>
            <p className="text-sm text-text-secondary leading-relaxed">
              Technology-driven problem solver.
              <br />
              Building practical, human-centered solutions.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-eyebrow mb-3">Navigate</p>
            <nav className="space-y-1.5" aria-label="Footer navigation">
              {[
                { href: '/work', label: 'Work' },
                { href: '/notebook', label: 'Notebook' },
                { href: '/open-notebook', label: 'Open Notebook' },
                { href: '/about', label: 'About' },
                { href: '/resume', label: 'Resume' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-sm text-text-secondary hover:text-text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <p className="text-eyebrow mb-3">Connect</p>
            <div className="space-y-1.5">
              <a
                href="https://github.com/wizwall-anwar"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-text-secondary hover:text-text-primary transition-colors"
              >
                GitHub ↗
              </a>
              <a
                href="https://linkedin.com/in/anwar-ayoon"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-text-secondary hover:text-text-primary transition-colors"
              >
                LinkedIn ↗
              </a>
              <Link
                href="/contact"
                className="block text-sm text-text-secondary hover:text-text-primary transition-colors"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border-subtle flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-text-tertiary">
            © {new Date().getFullYear()} Anwar Ayoon
          </p>
          <p className="text-xs text-text-tertiary font-mono">
            Built with curiosity and Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
