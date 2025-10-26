/**
 * Twitch Clips Video Player
 * Loads and manages Twitch clip embeds for tv.beard.gg
 */

(function() {
  'use strict';

  // Twitch Clip URLs with parent parameters
  const clips = [
    "https://clips.twitch.tv/embed?clip=IronicMoldyLardSaltBae&parent=tv.beard.gg&parent=www.tv.beard.gg",
    "https://clips.twitch.tv/embed?clip=BrainyHomelyDinosaurCmonBruh&parent=tv.beard.gg&parent=www.tv.beard.gg",
    "https://clips.twitch.tv/embed?clip=HedonisticProductiveBeaverHotPokket&parent=tv.beard.gg&parent=www.tv.beard.gg",
    "https://clips.twitch.tv/embed?clip=AntediluvianSassyHedgehogTooSpicy-vYLszOeS2IvWz2Zf&parent=tv.beard.gg&parent=www.tv.beard.gg",
    "https://clips.twitch.tv/embed?clip=FurryBoredSnoodPoooound&parent=tv.beard.gg&parent=www.tv.beard.gg",
    "https://clips.twitch.tv/embed?clip=VibrantRockyTroutPJSalt-20jRamN9icjuO0q5&parent=tv.beard.gg&parent=www.tv.beard.gg",
    "https://clips.twitch.tv/embed?clip=PlumpAbrasiveRaccoonNononoCat-oUydhZKYTJoW1RMC&parent=tv.beard.gg&parent=www.tv.beard.gg",
    "https://clips.twitch.tv/embed?clip=CautiousFunnyWallabyThisIsSparta&parent=tv.beard.gg&parent=www.tv.beard.gg",
    "https://clips.twitch.tv/embed?clip=CooperativeObservantOkapiSquadGoals&parent=tv.beard.gg&parent=www.tv.beard.gg",
    "https://clips.twitch.tv/embed?clip=AmorphousRelievedBulgogiWholeWheat-w-T_vYI_YG-rmPdy&parent=tv.beard.gg&parent=www.tv.beard.gg",
    "https://clips.twitch.tv/embed?clip=LittleArborealCaribouOhMyDog-FvKEpTVGewY87DpY&parent=tv.beard.gg&parent=www.tv.beard.gg",
    "https://clips.twitch.tv/embed?clip=GiftedStrongKuduFUNgineer-DPM8gHXDbGJhNFZw&parent=tv.beard.gg&parent=www.tv.beard.gg",
    "https://clips.twitch.tv/embed?clip=PunchyFreezingMangoCurseLit-bFzNZEuJ4yES-3eV&parent=tv.beard.gg&parent=www.tv.beard.gg",
    "https://clips.twitch.tv/embed?clip=FastTardyChickenPJSugar-cDy_EcC6nIjsQaV2&parent=tv.beard.gg&parent=www.tv.beard.gg",
    "https://clips.twitch.tv/embed?clip=ImpartialDifficultMoonTakeNRG-W3VqRXP9Cr01eYfA&parent=tv.beard.gg&parent=www.tv.beard.gg",
    "https://clips.twitch.tv/embed?clip=RelievedBigEggplantUWot-hhbME-xoLlXen-hI&parent=tv.beard.gg&parent=www.tv.beard.gg"
  ];

  /**
   * Video Player Manager
   */
  class TwitchClipPlayer {
    constructor() {
      this.clips = clips;
      this.currentClipIndex = -1;
      this.iframe = null;
      this.playedClips = new Set();
      
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
    setup() {
      this.iframe = document.getElementById('twtvrnd');
      
      if (!this.iframe) {
        console.error('Twitch clip iframe not found');
        return;
      }

      // Load initial random clip
      this.loadRandomClip();

      // Setup keyboard shortcuts
      this.setupKeyboardShortcuts();

      // Setup theme toggle if it exists
      this.setupThemeToggle();
    }

    /**
     * Get a random clip index
     */
    getRandomClipIndex() {
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
      if (!this.iframe) return;

      const index = this.getRandomClipIndex();
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

    /**
     * Setup theme toggle functionality
     */
    setupThemeToggle() {
      const themeToggle = document.getElementById('themeToggle');
      
      if (!themeToggle) return;

      // Remove theme toggle functionality since we have a single Twitch theme
      // Just make it load a random clip instead
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
  }

  // Initialize the player
  const player = new TwitchClipPlayer();

  // Expose to window for debugging
  window.TwitchClipPlayer = player;

})();
