'use client';

import { useEffect, useRef } from 'react';

export function MobileNav({ basePath }: { basePath: string }) {
  const menu = useRef<HTMLDetailsElement>(null);
  const close = () => {
    if (menu.current) menu.current.open = false;
  };
  useEffect(() => {
    const escape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && menu.current?.open) {
        menu.current.open = false;
        menu.current.querySelector('summary')?.focus();
      }
    };
    document.addEventListener('keydown', escape);
    return () => document.removeEventListener('keydown', escape);
  }, []);
  return (
    <details className="mobile-nav" ref={menu}>
      <summary aria-label="Navigation menu">
        <span>Menu</span>
        <span className="menu-symbol" aria-hidden="true">
          +
        </span>
      </summary>
      <nav aria-label="Mobile navigation">
        <a onClick={close} href={`${basePath}/platform`}>
          Platform
        </a>
        <a onClick={close} href={`${basePath}/#products`}>
          Products
        </a>
        <a onClick={close} href={`${basePath}/products/spec`}>
          TBSP Spec
        </a>
        <a onClick={close} href={`${basePath}/products/code`}>
          TBSP Code
        </a>
        <a onClick={close} href={`${basePath}/products/review`}>
          TBSP Review
        </a>
        <a onClick={close} href={`${basePath}/products/on-call`}>
          TBSP On-call
        </a>
        <a onClick={close} href={`${basePath}/security`}>
          Security
        </a>
        <a onClick={close} href={`${basePath}/integrations`}>
          Integrations
        </a>
        <a onClick={close} href={`${basePath}/enterprise`}>
          Enterprise
        </a>
        <a onClick={close} href={`${basePath}/resources`}>
          Resources
        </a>
        <a onClick={close} href={`${basePath}/docs`}>
          Documentation
        </a>
      </nav>
    </details>
  );
}
