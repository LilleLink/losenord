import React, { useState } from "react";

export function DialectHeader(props: any) {
  return (
    <header>
      <img src={`/${props.imagePath}`} />
    </header>
  );
}

export function DialectFooter(props: any) {
  const mailToLink =
    "mailto:support@dialect.se?subject=Problem%20med%20losenord.dialect.it";

  return (
    <div className="footerWrapper">
      <footer>
        <a href="https://dialect.se">Dialect.se</a> |{" "}
        <a href={mailToLink}>Maila supporten</a> |{" "}
        <a href="tel:+46500105350">Ring supporten</a>
      </footer>
    </div>
  );
}
