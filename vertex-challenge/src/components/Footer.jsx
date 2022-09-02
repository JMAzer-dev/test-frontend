import React from "react";
const Footer = () => {
  return (
    <footer className="text-sm md:text-md text-white flex justify-between p-4 md:p-5">
      &copy; Copyright 2022 - Vertex Challenge
      <span>
        By:{" "}
        <a
          href="https://jmazer.net"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#F31503" }}
        >
          JMAzer
        </a>
      </span>
    </footer>
  );
};

export default Footer;
