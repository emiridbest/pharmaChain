import React from "react";
import "../index.css";

const Footer = () => {
  const navigation = [
    {
      name: "GitHub",
      href: "https://github.com/emiridbest",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          {/* SVG path for the GitHub icon */}
        </svg>
      ),
    },
    {
      name: "T&C",
      href: "https://github.com/emiridbest",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          {/* SVG path for the GitHub icon */}
        </svg>
      ),
    },
    {
      name: "Feedback",
      href: "https://github.com/emiridbest",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          {/* SVG path for the GitHub icon */}
        </svg>
      ),
    },
    {
      name: "Althea L1",
      href: "https://github.com/emiridbest",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          {/* SVG path for the GitHub icon */}
        </svg>
      ),
    },
    {
      name: "Community",
      href: "https://github.com/emiridbest",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          {/* SVG path for the GitHub icon */}
        </svg>
      ),
    },
    {
      name: "Bounties",
      href: "https://github.com/emiridbest",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          {/* SVG path for the GitHub icon */}
        </svg>
      ),
    },
    {
      name: "Developers",
      href: "https://github.com/emiridbest",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          {/* SVG path for the GitHub icon */}
        </svg>
      ),
    },
    {
      name: "Proposals",
      href: "https://github.com/emiridbest",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          {/* SVG path for the GitHub icon */}
        </svg>
      ),
    },
    {
      name: "Validators",
      href: "https://github.com/emiridbest",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          {/* SVG path for the GitHub icon */}
        </svg>
      ),
    },
  ];

  return (
    <footer className="custom-footer">
      <div className="custom-navigation">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="custom-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>{item.name}</span>
            <item.icon aria-hidden="true" />
          </a>
        ))}
      </div>
      <div className="custom-subscribe">
        <div className="custom-input">
          <input type="email" placeholder="Subscribe to our newsletter" />
          <button type="submit" className="custom-button">
            Subscribe
          </button>
        </div>
      </div>
      <div className="custom-copyright">
        <div className="custom-text">
          <a
            href="https://github.com/emiridbest"
            target="_blank"
            rel="noopener noreferrer"
            className="custom-link"
          >
            © 2023 Your Website. All rights reserved.
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
