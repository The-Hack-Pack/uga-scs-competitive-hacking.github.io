import { useEffect } from 'react';
import { useLocation } from '@docusaurus/router';

export default function SidebarAutoCollapse() {
  const location = useLocation();

  useEffect(() => {
    // Adjust this path to match your CTF page route
    if (location.pathname.includes('/practice/CTF/f25-flash-ctf')) {
      // Find the sidebar collapse button (update selector if needed)
      const collapseBtn = document.querySelector('[aria-label="Collapse sidebar"]');
      if (collapseBtn) {
        // Only collapse if not already collapsed
        const sidebar = document.querySelector('.theme-doc-sidebar-container');
        if (sidebar && !sidebar.classList.contains('sidebar-hidden')) {
          (collapseBtn as HTMLElement).click();
        }
      }
    }
  }, [location]);

  return null;
}
