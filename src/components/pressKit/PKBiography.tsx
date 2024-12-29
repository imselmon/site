import React from 'react';

import Title from '../ui/Title';

export default function PKBiography() {
  return (
    <>
      <div>
        <Title title="✍️ Biography" level={3} className="text-3xl" />
        <p>
          I&apos;ve written two versions of my biography, a short one and a long
          one. Please use the one that fits your needs.
        </p>
      </div>
      <div>
        <p className="mb-3">
          <strong className="font-mono text-sm">Short Biography</strong>
        </p>
        <blockquote className="border-l-4 border-primary pl-4">
          <p className="text-lg italic">
            Salman Shaikh is a JavaScript Fullstack developer, Firebase expert,
            Kotlin enthusiast, and product developer. He is the Founder of
            Scattr.io and CEO at Yuva, contributing to developer communities for
            over 3 years.
          </p>
        </blockquote>
      </div>
      <div>
        <p className="mb-3">
          <strong className="font-mono text-sm">Long Biography</strong>
        </p>
        <blockquote className="border-l-4 border-primary pl-4">
          <p className="text-lg italic">
            Salman Shaikh is an entrepreneur and software developer with a
            strong focus on JavaScript Fullstack, Firebase, and Kotlin
            development. As the Founder of SaaS products Scattr.io and Triplist,
            he is passionate about building innovative tools that solve
            real-world problems. He also serves as the CEO at Yuva, driving
            impactful product development and leadership.
            <br />
            <br />
            For over 3 years, Salman has been actively contributing to developer
            communities, including Google Developer Groups, Kotlin, and KaiOS,
            sharing his expertise and nurturing talent. He enjoys exploring
            emerging technologies, solving complex problems, and fostering
            collaboration among developers.
            <br />
            <br />
            Beyond his professional endeavors, Salman is deeply interested in
            mentoring and empowering young developers, believing in the
            potential of technology to create meaningful change.
          </p>
        </blockquote>
      </div>
    </>
  );
}
