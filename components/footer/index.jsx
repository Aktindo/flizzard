const Footer = () => {
  return (
    <footer className="relative lg:fixed bottom-0 left-0 m-2">
      &copy; {new Date().getFullYear()} - Developed by Aktindo <br />
      Icons by{" "}
      <a className="link link-primary link-hover" href="https://icons8.com">
        Icons8
      </a>
    </footer>
  );
};

export { Footer };
