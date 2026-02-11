import { useEffect } from 'react';
import { useLocation } from '@docusaurus/router';

export default function SidebarAutoCollapse() {
  const location = useLocation();

  useEffect(() => {
    // Collapse only when entering the target route for the first time
    let hasCollapsed = false;
    if (location.pathname.includes('/practice/CTF/f25-flash-ctf') && !hasCollapsed) {
      const collapseBtn = document.querySelector('[aria-label="Collapse sidebar"]');
      const sidebar = document.querySelector('.theme-doc-sidebar-container');
      if (collapseBtn && sidebar && !sidebar.classList.contains('sidebar-hidden')) {
        (collapseBtn as HTMLElement).click();
        hasCollapsed = true;
      }
    }
  }, [location.pathname]);

  return null;
}
