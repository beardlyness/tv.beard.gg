/**
 * Twitch Clips Video Player
 * Dynamically fetches and manages Twitch clip embeds from Beardlands channel
 */

(function() {
  'use strict';

  // Twitch API Configuration
  const TWITCH_CLIENT_ID = '#';
  const TWITCH_CLIENT_SECRET = '#';
  const BROADCASTER_NAME = 'beardlands';
  
  /**
   * Video Player Manager
   */
  class TwitchClipPlayer {
    constructor() {
      this.clips = [];
      this.currentClipIndex = -1;
      this.iframe = null;
      this.playedClips = new Set();
      this.accessToken = null;
      this.broadcasterId = null;
      
      this.init();
    }

    /**
     * Initialize the player
     */
    init() {
      // Wait for DOM to be ready
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => this.setup());
      } else {
        this.setup();
      }
    }

    /**
     * Setup the player after DOM is ready
     */
    async setup() {
      this.iframe = document.getElementById('twtvrnd');
      
      if (!this.iframe) {
        console.error('Twitch clip iframe not found');
        return;
      }

      // Show loading state
      const container = this.iframe.closest('.container');
      if (container) {
        container.classList.add('loading');
      }

      try {
        // Get OAuth token
        await this.getAccessToken();
        
        // Get broadcaster ID
        await this.getBroadcasterId();
        
        // Fetch clips
        await this.fetchClips();
        
        // Load initial random clip
        this.loadRandomClip();

        // Setup keyboard shortcuts
        this.setupKeyboardShortcuts();

        // Setup theme toggle
        this.setupThemeToggle();
        
        // Remove loading state
        if (container) {
          container.classList.remove('loading');
        }
      } catch (error) {
        console.error('Error setting up player:', error);
        if (container) {
          container.classList.remove('loading');
        }
        // Fallback to a default clip if API fails
        this.loadFallbackClip();
      }
    }

    /**
     * Get OAuth access token from Twitch
     */
    async getAccessToken() {
      const response = await fetch('https://id.twitch.tv/oauth2/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
          client_id: TWITCH_CLIENT_ID,
          client_secret: TWITCH_CLIENT_SECRET,
          grant_type: 'client_credentials'
        })
      });

      if (!response.ok) {
        throw new Error('Failed to get access token');
      }

      const data = await response.json();
      this.accessToken = data.access_token;
      console.log('Access token obtained');
    }

    /**
     * Get broadcaster ID from username
     */
    async getBroadcasterId() {
      const response = await fetch(`https://api.twitch.tv/helix/users?login=${BROADCASTER_NAME}`, {
        headers: {
          'Client-ID': TWITCH_CLIENT_ID,
          'Authorization': `Bearer ${this.accessToken}`
        }
      });

      if (!response.ok) {
        throw new Error('Failed to get broadcaster ID');
      }

      const data = await response.json();
      if (data.data && data.data.length > 0) {
        this.broadcasterId = data.data[0].id;
        console.log('Broadcaster ID:', this.broadcasterId);
      } else {
        throw new Error('Broadcaster not found');
      }
    }

    /**
     * Fetch clips from Twitch API
     */
    async fetchClips() {
      const response = await fetch(
        `https://api.twitch.tv/helix/clips?broadcaster_id=${this.broadcasterId}&first=100`,
        {
          headers: {
            'Client-ID': TWITCH_CLIENT_ID,
            'Authorization': `Bearer ${this.accessToken}`
          }
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch clips');
      }

      const data = await response.json();
      
      if (data.data && data.data.length > 0) {
        // Convert clips to embed URLs
        this.clips = data.data.map(clip => {
          return `https://clips.twitch.tv/embed?clip=${clip.id}&parent=tv.beard.gg&parent=www.tv.beard.gg&parent=localhost`;
        });
        console.log(`Fetched ${this.clips.length} clips from ${BROADCASTER_NAME}`);
      } else {
        console.warn('No clips found, using fallback');
        this.loadFallbackClip();
      }
    }

    /**
     * Load a fallback clip if API fails
     */
    loadFallbackClip() {
      this.clips = [
        "https://clips.twitch.tv/embed?clip=IronicMoldyLardSaltBae&parent=tv.beard.gg&parent=www.tv.beard.gg&parent=localhost"
      ];
      this.loadRandomClip();
    }

    /**
     * Get a random clip index
     */
    getRandomClipIndex() {
      if (this.clips.length === 0) return -1;
      
      // If all clips have been played, reset the played set
      if (this.playedClips.size >= this.clips.length) {
        this.playedClips.clear();
      }

      let index;
      let attempts = 0;
      const maxAttempts = 50;

      // Try to find an unplayed clip
      do {
        index = Math.floor(Math.random() * this.clips.length);
        attempts++;
      } while (this.playedClips.has(index) && attempts < maxAttempts);

      return index;
    }

    /**
     * Load a random clip
     */
    loadRandomClip() {
      if (!this.iframe || this.clips.length === 0) return;

      const index = this.getRandomClipIndex();
      if (index === -1) return;
      
      this.currentClipIndex = index;
      this.playedClips.add(index);

      const clipUrl = this.clips[index];
      
      // Add smooth transition
      this.iframe.style.opacity = '0';
      
      setTimeout(() => {
        this.iframe.src = clipUrl;
        
        // Fade back in
        setTimeout(() => {
          this.iframe.style.opacity = '1';
        }, 100);
      }, 300);

      // Log for debugging
      console.log(`Loading clip ${index + 1}/${this.clips.length}`);
    }

    /**
     * Load a specific clip by index
     */
    loadClip(index) {
      if (!this.iframe || index < 0 || index >= this.clips.length) return;

      this.currentClipIndex = index;
      this.playedClips.add(index);
      
      this.iframe.style.opacity = '0';
      
      setTimeout(() => {
        this.iframe.src = this.clips[index];
        
        setTimeout(() => {
          this.iframe.style.opacity = '1';
        }, 100);
      }, 300);

      console.log(`Loading clip ${index + 1}/${this.clips.length}`);
    }

    /**
     * Load next clip
     */
    nextClip() {
      const nextIndex = (this.currentClipIndex + 1) % this.clips.length;
      this.loadClip(nextIndex);
    }

    /**
     * Load previous clip
     */
    previousClip() {
      const prevIndex = (this.currentClipIndex - 1 + this.clips.length) % this.clips.length;
      this.loadClip(prevIndex);
    }

    /**
     * Setup keyboard shortcuts
     */
    setupKeyboardShortcuts() {
      document.addEventListener('keydown', (e) => {
        // Ignore if user is typing in an input field
        if (e.target.matches('input, textarea')) return;

        switch(e.key.toLowerCase()) {
          case 'r':
          case ' ':
            e.preventDefault();
            this.loadRandomClip();
            break;
          case 'arrowright':
            e.preventDefault();
            this.nextClip();
            break;
          case 'arrowleft':
            e.preventDefault();
            this.previousClip();
            break;
        }
      });
    }
    
    setupThemeToggle() {
      const themeToggle = document.getElementById('themeToggle');
      
      if (!themeToggle) return;

      // Just load a random clip
      themeToggle.addEventListener('click', () => {
        this.loadRandomClip();
      });

      // Also respond to 'T' key
      document.addEventListener('keydown', (e) => {
        if (e.target.matches('input, textarea')) return;
        
        if (e.key.toLowerCase() === 't') {
          e.preventDefault();
          this.loadRandomClip();
        }
      });
    }

    /**
     * Get current clip URL
     */
    getCurrentClipUrl() {
      if (this.currentClipIndex === -1 || !this.clips[this.currentClipIndex]) {
        return window.location.href;
      }
      
      // Extract clip ID from embed URL
      const embedUrl = this.clips[this.currentClipIndex];
      const clipIdMatch = embedUrl.match(/clip=([^&]+)/);
      
      if (clipIdMatch && clipIdMatch[1]) {
        return `https://clips.twitch.tv/${clipIdMatch[1]}`;
      }
      
      return window.location.href;
    }
  }

  // Initialize the player
  const player = new TwitchClipPlayer();

  // Expose to window for debugging
  window.TwitchClipPlayer = player;

  /**
   * Share Modal Functionality
   */
  class ShareModal {
    constructor() {
      this.modal = document.getElementById('shareModal');
      this.shareBtn = document.getElementById('shareBtn');
      this.modalClose = document.getElementById('modalClose');
      this.modalOverlay = document.getElementById('modalOverlay');
      this.shareUrl = document.getElementById('shareUrl');
      this.copyBtn = document.getElementById('copyBtn');
      this.copySuccess = document.getElementById('copySuccess');
      
      this.init();
    }

    init() {
      if (!this.modal || !this.shareBtn) return;

      // Open modal
      this.shareBtn.addEventListener('click', () => this.openModal());

      // Close modal
      this.modalClose?.addEventListener('click', () => this.closeModal());
      this.modalOverlay?.addEventListener('click', () => this.closeModal());

      // Copy URL
      this.copyBtn?.addEventListener('click', () => this.copyUrl());

      // Close on Escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.modal.classList.contains('active')) {
          this.closeModal();
        }
      });
    }

    openModal() {
      // Get current clip URL from player
      const clipUrl = player.getCurrentClipUrl();
      this.shareUrl.value = clipUrl;

      // Show modal
      this.modal.classList.add('active');
      
      // Select the URL for easy copying
      setTimeout(() => {
        this.shareUrl.select();
      }, 100);
    }

    closeModal() {
      this.modal.classList.remove('active');
      this.copySuccess.classList.remove('show');
    }

    async copyUrl() {
      try {
        // Copy to clipboard
        await navigator.clipboard.writeText(this.shareUrl.value);
        
        // Show success message
        this.copySuccess.classList.add('show');
        
        // Hide after 2 seconds
        setTimeout(() => {
          this.copySuccess.classList.remove('show');
        }, 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
        
        // Fallback: select the text
        this.shareUrl.select();
        document.execCommand('copy');
        
        this.copySuccess.classList.add('show');
        setTimeout(() => {
          this.copySuccess.classList.remove('show');
        }, 2000);
      }
    }
  }

  // Initialize share modal
  const shareModal = new ShareModal();

})();
