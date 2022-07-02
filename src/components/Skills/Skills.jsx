import React from "react";

function Skills() {
  return (
    <div className="container mt-12 space-y-4 mx-auto">
      <h1 className="text-white text-center text-3xl">SKILLS</h1>
      <div className="flex justify-center space-x-5 mx-auto">
        <i className="devicon-javascript-plain colored dev"></i>
        <i class="devicon-react-original-wordmark colored dev"></i>
        <i class="devicon-sass-original colored dev"></i>
        <i class="devicon-bootstrap-plain colored dev"></i>
      </div>

      <div className="flex justify-center space-x-5 mt-16 mx-auto">
        <i class="devicon-git-plain colored dev"></i>
        <i class="devicon-github-original dev "></i>
        <i class="devicon-webpack-plain colored dev"></i>
        <i class="devicon-heroku-plain-wordmark colored dev"></i>
      </div>
    </div>
  );
}

export default Skills;
