// ...código anterior mantido...

{/* Navegação Desktop */}
<div className="hidden xl:flex items-center justify-between w-full">
  <nav>
    <ul className="flex items-center gap-8">
      <li><Link href="/" className={pathUrl === "/" ? "text-primary" : "hover:text-primary"}>Home</Link></li>

      <li className="relative group">
        <button onClick={() => setDropdownToggler(!dropdownToggler)} className="flex items-center gap-2 hover:text-primary">
          AI Workers
          <svg className="h-3 w-3 fill-waterloo group-hover:fill-primary" viewBox="0 0 512 512">
            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
          </svg>
        </button>

        <AnimatePresence>
          {dropdownToggler && (
            <motion.ul
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute z-50 mt-2 w-40 rounded bg-white p-4 shadow dark:bg-blacksection flex flex-col"
            >
              <li><Link href="/agents/leon" className="hover:text-primary">Leon</Link></li>
              <li><Link href="/agents/linda" className="hover:text-primary">Linda</Link></li>
              <li><Link href="/agents/ana" className="hover:text-primary">Ana</Link></li>
              <li><Link href="/agents/javi" className="hover:text-primary">Javi</Link></li>
            </motion.ul>
          )}
        </AnimatePresence>
      </li>

      <li><a href="/#about" onClick={(e) => handleAnchorClick(e, "about")} className="hover:text-primary">Company</a></li>
      <li><Link href="/blog" className={pathUrl === "/blog" ? "text-primary" : "hover:text-primary"}>Blog</Link></li>
      <li><a href="/#contact" onClick={(e) => handleAnchorClick(e, "contact")} className="hover:text-primary">Contact</a></li>
    </ul>
  </nav>

  <div className="ml-8 flex items-center gap-5">
    <ThemeToggler />
    <Link href="/auth/signin" className="text-sm font-medium text-waterloo hover:text-primary">Log in</Link>
    <Link href="/auth/signup" className="rounded-full bg-primary px-6 py-2 text-sm text-white hover:bg-primaryho">
      Get Started 🚀
    </Link>
  </div>
</div>

{/* Navegação Mobile */}
<AnimatePresence>
  {navigationOpen && (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="absolute top-full left-0 mt-3 w-full rounded-md border border-stroke bg-white/80 backdrop-blur-md p-6 shadow-lg dark:bg-blacksection/80 z-40 xl:hidden"
    >
      <nav>
        <ul className="flex flex-col gap-4 text-base">
          <li><Link href="/" className="hover:text-primary">Home</Link></li>
          <li>
            <details open={dropdownToggler} onToggle={() => setDropdownToggler(!dropdownToggler)}>
              <summary className="cursor-pointer hover:text-primary">AI Workers</summary>
              <ul className="ml-4 mt-2 flex flex-col gap-1">
                <li><Link href="/agents/leon" className="hover:text-primary">Leon</Link></li>
                <li><Link href="/agents/linda" className="hover:text-primary">Linda</Link></li>
                <li><Link href="/agents/ana" className="hover:text-primary">Ana</Link></li>
                <li><Link href="/agents/javi" className="hover:text-primary">Javi</Link></li>
              </ul>
            </details>
          </li>
          <li><a href="/#about" onClick={(e) => handleAnchorClick(e, "about")} className="hover:text-primary">Company</a></li>
          <li><Link href="/blog" className="hover:text-primary">Blog</Link></li>
          <li><a href="/#contact" onClick={(e) => handleAnchorClick(e, "contact")} className="hover:text-primary">Contact</a></li>
        </ul>
      </nav>

      <div className="mt-6 flex flex-col gap-4">
        <ThemeToggler />
        <Link href="/auth/signin" className="text-sm text-waterloo hover:text-primary">Log in</Link>
        <Link href="/auth/signup" className="rounded-full bg-primary px-6 py-2 text-sm text-white text-center hover:bg-primaryho">
          Get Started 🚀
        </Link>
      </div>
    </motion.div>
  )}
</AnimatePresence>