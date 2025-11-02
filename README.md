<div align="center">

# 🎮 TV.Beard.GG

### *Twitch Highlights & Live Stream Showcase*

![Twitch](https://img.shields.io/badge/Twitch-9147FF?style=for-the-badge&logo=twitch&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

**A sleek, modern Twitch highlights and live stream viewer built with vanilla JavaScript**

*Showcasing epic gaming moments and memorable clips from Beardlands live streams*

[![Live Site](https://img.shields.io/badge/🔴_LIVE-tv.beard.gg-9147ff?style=for-the-badge&logo=twitch&logoColor=white)](https://tv.beard.gg)
[![Twitch](https://img.shields.io/badge/Follow-beardlands-9147ff?style=for-the-badge&logo=twitch&logoColor=white)](https://twitch.tv/beardlands)
[![GitHub](https://img.shields.io/badge/Source-beardlyness-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/beardlyness/tv.beard.gg)

[🎬 View Clips](https://tv.beard.gg) • [🔴 Watch Live](https://tv.beard.gg/live.html) • [📺 Twitch Channel](https://twitch.tv/Beardlands) • [🐛 Report Bug](https://github.com/beardlyness/tv.beard.gg/issues)

</div>

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 🎯 **Clip Highlights Page**

- **Dynamic Clip Loading** - Fetches latest 100 clips via Twitch API
- **Smart Playlist** - Tracks played clips, avoids repetition
- **Keyboard Shortcuts** - Navigate with intuitive hotkeys
- **Share Functionality** - Beautiful modal to share clips
- **Smooth Transitions** - Elegant fade animations
- **Responsive Design** - Optimized for all screen sizes

### 🎨 **Twitch-Inspired Design**

- Authentic Twitch purple branding (#9147ff)
- Dark mode UI matching Twitch's aesthetic
- Modern Open Sans, Raleway font family
- Smooth animations and transitions
- Custom SVG graphics and icons

</td>
<td width="50%">

### 🔴 **Live Stream Page**

- **Embedded Twitch Player** - Full-featured live stream viewer
- **Integrated Chat** - Side-by-side on desktop, stacked on mobile
- **Breathing Animation** - Custom SVG live indicator
- **Quick Navigation** - Easy toggle between clips and live

###  **Smart Video Player**

- Dynamic clip fetching from Beardlands channel
- Anti-repeat algorithm for varied viewing
- Keyboard control support
- Loading states with animations
- Fallback clip on API failure

### 📱 **Responsive Layout**

- Mobile-first design philosophy
- Breakpoints: 1200px, 768px, 480px
- Sticky footer with social links
- Touch-optimized interactions

</td>
</tr>
</table>

---

## 🎹 Keyboard Shortcuts

| Key | Action |
|-----|--------|
| <kbd>R</kbd> or <kbd>Space</kbd> | Load random clip |
| <kbd>→</kbd> | Next clip |
| <kbd>←</kbd> | Previous clip |
| <kbd>T</kbd> | Toggle/Load random clip |
| <kbd>Esc</kbd> | Close share modal |

---

## 🚀 Quick Start

### Prerequisites

- Modern web browser with JavaScript enabled
- Internet connection for Twitch API and embeds

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/beardlyness/tv.beard.gg.git
   cd tv.beard.gg
   ```

2. **Open in browser**
   ```bash
   # Simply open index.html in your preferred browser
   # Or use a local server (recommended)
   python -m http.server 8000
   # Then visit http://localhost:8000
   ```

   Alternative server options:
   ```bash
   # Node.js
   npx http-server -p 8000
   
   # PHP
   php -S localhost:8000
   ```

3. **Configure (Optional)**
   - Update Twitch API credentials in `js/clips.js` if needed
   - Modify the broadcaster name to fetch clips from a different channel

---

## 📁 Project Structure

```
tv.beard.gg/
│
├── 📄 index.html              # Main clips showcase page
├── 📄 live.html               # Live stream viewer page
├── 📖 README.md               # Project documentation
│
├── 📁 css/
│   └── twitch.css            # Complete theme and styling
│
├── 📁 js/
│   └── clips.js              # Clip player & share modal logic
│
└── 📁 images/
    └── media/                # Favicons and icons
```

---

## 🔧 Configuration

### Twitch API Setup

The project uses the Twitch Helix API to fetch clips. Configuration is in `js/clips.js`:

```javascript
const TWITCH_CLIENT_ID = 'your_client_id';
const TWITCH_CLIENT_SECRET = 'your_client_secret';
const BROADCASTER_NAME = 'your_channel_name';
```

**⚠️ Note:** For production use, move credentials to a backend service to avoid exposing secrets in client-side code.

### Embed Domains

Update parent domains in the embed URLs to match your hosting:

```javascript
// In clips.js and live.html
parent=tv.beard.gg&parent=www.tv.beard.gg&parent=localhost
```

---

## 🎨 Color Palette

The project uses Twitch's official color scheme:

| Color | Hex | Usage |
|-------|-----|-------|
| Twitch Purple | `#9147ff` | Primary brand color, buttons, accents |
| Purple Hover | `#772ce8` | Hover states |
| Purple Light | `#a970ff` | Links, text highlights |
| Dark Base | `#0e0e10` | Main background |
| Dark Alt | `#18181b` | Card backgrounds |
| Text Primary | `#efeff1` | Main text color |
| Text Muted | `#808086` | Secondary text |

---

## 💻 Tech Stack

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Twitch](https://img.shields.io/badge/Twitch_API-9146FF?style=for-the-badge&logo=twitch&logoColor=white)

</div>

### Core Technologies
- **Pure Vanilla JavaScript** - No frameworks, no dependencies
- **Modern CSS3** - Custom properties, flexbox, grid, animations
- **Semantic HTML5** - Accessible markup with ARIA labels
- **Twitch Helix API** - OAuth 2.0 client credentials flow
- **Clipboard API** - Modern copy-to-clipboard functionality

### Design Philosophy
- 🎯 **Zero Dependencies** - Lightweight and fast
- ♿ **Accessibility First** - Keyboard navigation, screen reader support
- 📱 **Mobile Responsive** - Looks great on any device
- 🎨 **Brand Consistent** - Authentic Twitch design language

---

## 🌐 Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome/Edge (Chromium) | 90+ | ✅ Fully Supported |
| Firefox | 88+ | ✅ Fully Supported |
| Safari | 14+ | ✅ Fully Supported |
| Opera | 76+ | ✅ Fully Supported |
| Mobile (iOS/Android) | Latest | ✅ Fully Supported |

> **Note:** Modern browsers with ES6+ support required

---

## 🛠️ Development

### Local Development

```bash
# Serve with Python
python -m http.server 8000

# Or with Node.js
npx http-server -p 8000

# Or with PHP
php -S localhost:8000
```

### Code Style

- **Indentation:** 2 spaces
- **Quotes:** Single quotes for JS, double for HTML
- **Naming:** camelCase for JS, kebab-case for CSS
- **Comments:** JSDoc style for functions

---

## 🔒 Security Considerations

⚠️ **Important:** The current implementation exposes Twitch API credentials in client-side code. For production:

1. **Move credentials to backend** - Use a server-side proxy
2. **Implement rate limiting** - Protect against API abuse
3. **Use environment variables** - Never commit secrets to version control
4. **Add CORS protection** - Restrict API access to your domain

---

## 📄 License

This project is licensed under the **GPL-3.0 License**.

### GPL-3.0 Key Points:
- ✅ Commercial use allowed
- ✅ Modification allowed
- ✅ Distribution allowed
- ⚠️ Must disclose source
- ⚠️ Must include license
- ⚠️ Same license required for derivatives

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

### Ideas for Contributions:
- 🎯 Add clip categories/filtering
- 🔍 Implement search functionality
- 📊 Add view/popularity stats
- 🎭 Multiple streamer support
- 🌙 Light/dark theme toggle
- 🔔 Live stream notifications

---

## 📞 Contact & Social

<div align="center">

[![Twitch](https://img.shields.io/badge/Twitch-beardlands-9147FF?style=for-the-badge&logo=twitch&logoColor=white)](https://twitch.tv/beardlands)
[![Twitter](https://img.shields.io/badge/Twitter-beardlyness-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/beardlyness)
[![GitHub](https://img.shields.io/badge/GitHub-beardlyness-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/beardlyness)
[![Steam](https://img.shields.io/badge/Steam-BeardlyOG-000000?style=for-the-badge&logo=steam&logoColor=white)](https://steamcommunity.com/id/BeardlyOG)

**Made with 💜 for the Gaming Community**

</div>

---

## 🎁 Acknowledgments

- **Twitch** - For the amazing platform and API
- **Google Fonts** - Open Sans, Raleway, Droid Sans Mono
- **Shields.io** - Beautiful badges for README
- **Community** - All the awesome viewers and supporters

---

## 📊 Project Stats

- **Total Lines of Code:** ~1,500+
- **Files:** 4 main files (HTML, CSS, JS)
- **Animations:** 10+ custom CSS keyframes
- **API Endpoints:** 3 Twitch Helix endpoints
- **Responsive Breakpoints:** 3 (1200px, 768px, 480px)
- **Keyboard Shortcuts:** 5 commands
---

## 🗺️ Roadmap

### Phase 1 (Current) ✅
- [x] Dynamic clip loading from Twitch API
- [x] Live stream embed page
- [x] Share functionality with modal
- [x] Keyboard navigation shortcuts
- [x] Responsive design for all devices
- [x] Custom SVG animations

### Phase 2 (Planned) 🔮
- [ ] Backend API proxy for credentials
- [ ] Clip search and filtering
- [ ] Favorite clips system (localStorage)
- [ ] Stream schedule integration
- [ ] Multi-streamer support

### Phase 3 (Future) 🚀
- [ ] User authentication
- [ ] Clip playlists
- [ ] Comment system integration
- [ ] Analytics dashboard
- [ ] PWA support with offline mode

---

<div align="center">

### ⭐ Star this repository if you found it helpful!

**[tv.beard.gg](https://tv.beard.gg)** | **[Live Stream](https://tv.beard.gg/live.html)**

*Last Updated: November 2025*

</div>
