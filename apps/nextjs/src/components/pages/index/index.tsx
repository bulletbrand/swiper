// it's not needed with React v17
import React from 'react';

import { TargetBlankLink } from '@nx-nextjs/shared/components';

import styles from './index.module.scss';

import star from '@nx-nextjs/shared/assets/images/star.svg';

export const IndexPage = () => (
  <div className={styles.page}>
    <h2>Resources &amp; Tools</h2>
    <p className="font-open-sans italic">
      Thank you for using and showing some ♥ for Nx.
    </p>
    <div className="flex github-star-container">
      <TargetBlankLink href="https://github.com/nrwl/nx">
        {' '}
        If you like Nx, please give it a star:
        <div className="github-star-badge">
          <img src={star} className="material-icons" alt="" />
          Star
        </div>
      </TargetBlankLink>
    </div>
    <p className="font-open-sans font-thin">
      Here are some links to help you get started.
    </p>
    <ul className="resources">
      <li className="col-span-2">
        <a
          className="resource flex"
          href="https://connect.nrwl.io/app/courses/nx-workspaces/intro"
        >
          Nx video course
        </a>
      </li>
      <li className="col-span-2">
        <a
          className="resource flex"
          href="https://nx.dev/react/getting-started/what-is-nx"
        >
          Nx video tutorial
        </a>
      </li>
      <li className="col-span-2">
        <a
          className="resource flex"
          href="https://nx.dev/react/tutorial/01-create-application"
        >
          Interactive tutorial
        </a>
      </li>
      <li className="col-span-2">
        <a className="resource flex" href="https://connect.nrwl.io/">
          <img
            height="36"
            alt="Nrwl Connect"
            src="https://connect.nrwl.io/assets/img/CONNECT_ColorIcon.png"
          />
          <span className="gutter-left">Nrwl Connect</span>
        </a>
      </li>
    </ul>
    <h2>Next Steps</h2>
    <p className="font-open-sans font-thin">
      Here are some things you can do with Nx.
    </p>
    <details open>
      <summary>Add UI library</summary>
      <pre>{`# Generate UI lib
nx g @nrwl/react:lib ui

# Add a component
nx g @nrwl/react:component xyz --project ui`}</pre>
    </details>
    <details>
      <summary>View dependency graph</summary>
      <pre>{`nx dep-graph`}</pre>
    </details>
    <details>
      <summary>Run affected commands</summary>
      <pre>{`# see what's been affected by changes
nx affected:dep-graph

# run tests for current changes
nx affected:test

# run e2e tests for current changes
nx affected:e2e
`}</pre>
    </details>
  </div>
);

export default IndexPage;
