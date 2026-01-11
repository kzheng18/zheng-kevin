const Footer = () => {
  return (
    <footer className="relative py-6 border-t border-dark-border bg-dark-bg/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs text-dark-muted">
          {/* Left side - terminal prompt style */}
          <div className="flex items-center gap-2">
            <span>$</span>
            <span>whoami</span>
            <span className="text-dark-text">→</span>
            <span>Kevin Zheng © {new Date().getFullYear()}</span>
          </div>

          {/* Right side - system info */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span>built_with:</span>
              <span className="text-dark-text">[React + Tailwind]</span>
            </div>
            <div className="flex items-center gap-2">
              <span>status:</span>
              <span className="text-dark-text inline-flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                online
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
