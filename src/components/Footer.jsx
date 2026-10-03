import React from "react";

function Footer() {
  return (
    <footer className="text-center py-12 text-xs sm:text-sm text-slate-500 font-medium">
      Built and designed with care by Terngu Favour - © {new Date().getFullYear()}
    </footer>
  );
}

export default Footer;