// Browser Console Protection - Lightweight Security for Massageverkstan
// This provides basic protection without affecting Apple policies

interface ConsoleProtectionConfig {
  enabled: boolean;
  showWarning: boolean;
  blockDevTools: boolean;
  logAttempts: boolean;
}

class ConsoleProtection {
  private config: ConsoleProtectionConfig;
  private originalConsole: Record<string, any> = {};
  private isDevToolsOpen = false;
  private warningShown = false;

  constructor(config: Partial<ConsoleProtectionConfig> = {}) {
    this.config = {
      enabled: true,
      showWarning: true,
      blockDevTools: false, // Keep false for Apple policy compliance
      logAttempts: true,
      ...config
    };

    if (this.config.enabled) {
      this.init();
    }
  }

  private init() {
    // Store original console methods
    this.originalConsole = {
      log: console.log,
      warn: console.warn,
      error: console.error,
      info: console.info,
      debug: console.debug,
      clear: console.clear,
      table: console.table,
      group: console.group,
      groupEnd: console.groupEnd
    };

    // Override console methods with warnings
    this.overrideConsole();

    // Monitor for dev tools (lightweight detection)
    this.monitorDevTools();

    // Add context menu protection (basic)
    this.addContextMenuProtection();

    // Add keyboard shortcut monitoring
    this.addKeyboardProtection();
  }

  private overrideConsole() {
    const self = this;

    // Override main console methods
    console.log = function(...args: any[]) {
      if (self.config.showWarning && !self.warningShown) {
        self.showSecurityWarning();
        self.warningShown = true;
      }
      if (self.config.logAttempts) {
        self.logSecurityEvent('console.log', args);
      }
      return self.originalConsole.log.apply(console, args);
    };

    console.warn = function(...args: any[]) {
      if (self.config.showWarning && !self.warningShown) {
        self.showSecurityWarning();
        self.warningShown = true;
      }
      return self.originalConsole.warn.apply(console, args);
    };

    console.error = function(...args: any[]) {
      if (self.config.showWarning && !self.warningShown) {
        self.showSecurityWarning();
        self.warningShown = true;
      }
      return self.originalConsole.error.apply(console, args);
    };

    // Override other console methods
    ['info', 'debug', 'clear', 'table', 'group', 'groupEnd'].forEach(method => {
      const originalMethod = (console as any)[method];
      (console as any)[method] = function(...args: any[]) {
        if (self.config.showWarning && !self.warningShown) {
          self.showSecurityWarning();
          self.warningShown = true;
        }
        return originalMethod.apply(console, args);
      };
    });
  }

  private showSecurityWarning() {
    // Use original console methods to show warning with Massageverkstan branding
    this.originalConsole.warn(
      '%c🌿 SÄKERHETSVARNING - MASSAGEVERKSTAN',
      'color: #2D5A4F; font-size: 20px; font-weight: bold; background: #F0F9FF; padding: 10px; border-radius: 5px; border: 2px solid #8FBC8F;'
    );
    
    this.originalConsole.warn(
      '%cDenna konsol är avsedd för utvecklare. Om någon sa åt dig att klistra in kod här kan det vara ett försök att stjäla din information eller kompromettera ditt konto.\n\nMassageverkstan i Jönköping AB - Skydda din integritet',
      'color: #2D5A4F; font-size: 14px; line-height: 1.5; background: #F0F9FF; padding: 5px;'
    );

    this.originalConsole.warn(
      '%c🌿 Massageverkstan i Jönköping AB - Professionell Massage & Välmående',
      'color: #8FBC8F; font-size: 12px; font-weight: bold; background: #2D5A4F; padding: 5px; border-radius: 3px;'
    );
  }

  private monitorDevTools() {
    // Lightweight dev tools detection (non-intrusive)
    const threshold = 160;

    const detectDevTools = () => {
      if (window.outerHeight - window.innerHeight > threshold || 
          window.outerWidth - window.innerWidth > threshold) {
        if (!this.isDevToolsOpen) {
          this.isDevToolsOpen = true;
          this.onDevToolsOpen();
        }
      } else {
        if (this.isDevToolsOpen) {
          this.isDevToolsOpen = false;
          this.onDevToolsClose();
        }
      }
    };

    // Check periodically (lightweight)
    setInterval(detectDevTools, 2000);
  }

  private onDevToolsOpen() {
    this.isDevToolsOpen = true;
    if (this.config.logAttempts) {
      this.logSecurityEvent('devtools_opened');
    }
    
    // Show friendly message instead of blocking
    if (this.config.showWarning) {
      this.originalConsole.info(
        '%c🌿 Hej utvecklare!',
        'color: #2D5A4F; font-size: 16px; font-weight: bold; background: #F0F9FF; padding: 5px;'
      );
      this.originalConsole.info(
        '%cOm du utvecklar för Massageverkstan, välkommen! Annars, var försiktig med vad du kör i konsolen.\n\n🌿 Massageverkstan i Jönköping AB - Professionell Massage & Välmående',
        'color: #4A7C59; font-size: 12px; background: #F0F9FF; padding: 3px;'
      );
    }
  }

  private onDevToolsClose() {
    this.isDevToolsOpen = false;
    if (this.config.logAttempts) {
      this.logSecurityEvent('devtools_closed');
    }
  }

  private addContextMenuProtection() {
    // Basic context menu protection (can be bypassed, but adds a layer)
    document.addEventListener('contextmenu', (e) => {
      // Allow context menu on input fields for usability
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        return;
      }
      
      e.preventDefault();
      if (this.config.logAttempts) {
        this.logSecurityEvent('context_menu_blocked');
      }
    });
  }

  private addKeyboardProtection() {
    // Monitor common dev tools shortcuts (informational only)
    document.addEventListener('keydown', (e) => {
      // F12
      if (e.key === 'F12') {
        if (this.config.logAttempts) {
          this.logSecurityEvent('f12_pressed');
        }
        // Don't prevent - Apple policy compliance
        return;
      }

      // Ctrl+Shift+I (Windows/Linux)
      if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        if (this.config.logAttempts) {
          this.logSecurityEvent('ctrl_shift_i_pressed');
        }
        return;
      }

      // Cmd+Option+I (Mac)
      if (e.metaKey && e.altKey && e.key === 'i') {
        if (this.config.logAttempts) {
          this.logSecurityEvent('cmd_option_i_pressed');
        }
        return;
      }

      // Ctrl+Shift+J (Console)
      if (e.ctrlKey && e.shiftKey && e.key === 'J') {
        if (this.config.logAttempts) {
          this.logSecurityEvent('ctrl_shift_j_pressed');
        }
        return;
      }

      // Ctrl+U (View Source)
      if (e.ctrlKey && e.key === 'u') {
        if (this.config.logAttempts) {
          this.logSecurityEvent('ctrl_u_pressed');
        }
        return;
      }
    });
  }

  private logSecurityEvent(event: string, data?: any) {
    // Log security events (could be sent to analytics in production)
    const timestamp = new Date().toISOString();
    const userAgent = navigator.userAgent;
    const url = window.location.href;

    const logEntry = {
      timestamp,
      event,
      data,
      userAgent,
      url,
      sessionId: this.getSessionId(),
      company: 'Massageverkstan i Jönköping AB'
    };

    // Store in sessionStorage for potential analysis
    try {
      const existingLogs = JSON.parse(sessionStorage.getItem('massageverkstan_security_logs') || '[]');
      existingLogs.push(logEntry);
      
      // Keep only last 50 entries
      if (existingLogs.length > 50) {
        existingLogs.splice(0, existingLogs.length - 50);
      }
      
      sessionStorage.setItem('massageverkstan_security_logs', JSON.stringify(existingLogs));
    } catch (error) {
      // Silently fail if storage is not available
    }

    // Log to original console for debugging (in development)
    if (import.meta.env.DEV) {
      this.originalConsole.log('🌿 Massageverkstan Security Event:', logEntry);
    }
  }

  private getSessionId(): string {
    let sessionId = sessionStorage.getItem('massageverkstan_session_id');
    if (!sessionId) {
      sessionId = 'mv_' + Math.random().toString(36).substring(2) + Date.now().toString(36);
      sessionStorage.setItem('massageverkstan_session_id', sessionId);
    }
    return sessionId;
  }

  // Public methods for configuration
  public disable() {
    this.config.enabled = false;
    this.restoreConsole();
  }

  public enable() {
    this.config.enabled = true;
    this.init();
  }

  private restoreConsole() {
    // Restore original console methods
    Object.keys(this.originalConsole).forEach(method => {
      (console as any)[method] = this.originalConsole[method];
    });
  }

  public getSecurityLogs(): any[] {
    try {
      return JSON.parse(sessionStorage.getItem('massageverkstan_security_logs') || '[]');
    } catch {
      return [];
    }
  }

  public clearSecurityLogs() {
    sessionStorage.removeItem('massageverkstan_security_logs');
  }
}

// Export singleton instance with Massageverkstan branding
export const consoleProtection = new ConsoleProtection({
  enabled: true,
  showWarning: true,
  blockDevTools: false, // Apple policy compliant
  logAttempts: true
});

export default ConsoleProtection;