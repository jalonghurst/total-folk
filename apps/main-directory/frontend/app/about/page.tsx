import React from "react";
// Next.js convention is that file name for each route component is named page.tsx, and the folder name is the name of route in the url.
// /navigation/about
function About() {
  return (
    <div>
      <h1 className="min-h-screen">About</h1>
      <p>Example about page.</p>
    </div>
  );
}

export default About;
