export default function Footer() {
  return (
    <>
      <hr />
      <footer
        style={{
          display: "grid",
          placeItems: "center",
        }}
      >
        <p>
          GameLib | Version: 0.0.6 | Built with{" "}
          <a href="http://react.dev" target="_blank" rel="noopener noreferrer">
            React
          </a>{" "}
          |{" "}
          <a href="http://www.lukecreated.com" target="_blank">
            By LukeCreated
          </a>
        </p>
      </footer>
    </>
  );
}
