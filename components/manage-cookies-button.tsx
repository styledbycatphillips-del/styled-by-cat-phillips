'use client'

interface ManageCookiesButtonProps {
  variant?: 'footer' | 'page'
}

export function ManageCookiesButton({ variant = 'page' }: ManageCookiesButtonProps) {
  const handleClick = () => {
    // This would trigger your CMP's preference center
    // Replace with your actual CMP function call
    console.log('Manage cookies clicked - integrate with your CMP');
    
    // Example integrations for common CMPs:
    
    // For Cookiebot:
    // if (typeof window !== 'undefined' && window.Cookiebot) {
    //   window.Cookiebot.show();
    // }
    
    // For OneTrust:
    // if (typeof window !== 'undefined' && window.OneTrust) {
    //   window.OneTrust.ToggleInfoDisplay();
    // }
    
    // For CookieYes:
    // if (typeof window !== 'undefined' && window.cookieyes) {
    //   window.cookieyes.showSettings();
    // }
  }

  if (variant === 'footer') {
    return (
      <button 
        id="manage-cookies-footer"
        className="hover:text-signature-black transition-colors cursor-pointer bg-transparent border-none p-0 text-sm underline-offset-2 hover:underline"
        onClick={handleClick}
      >
        Manage Cookies
      </button>
    )
  }

  return (
    <button 
      id="manage-cookies-btn"
      className="bg-navy text-cream px-4 py-2 rounded hover:bg-navy/80 transition-colors"
      onClick={handleClick}
    >
      Manage Cookie Preferences
    </button>
  )
}