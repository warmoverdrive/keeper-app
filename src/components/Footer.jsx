import React from "react";
export default Footer;

function Footer() {
  let date = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright &copy; {date}</p>
    </footer>
  );
}
