# A—STORE · The Open-Source AI App Store

> **Paste a GitHub repo URL. See what app it becomes.**
> Built by a 17-year-old student from India — no laptop, no money, no team.

[![Prototype](https://img.shields.io/badge/status-prototype_v0.1-orange?style=flat-square)](https://a-store-ishraq.vercel.app)
[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen?style=flat-square)](https://a-store-ishraq.vercel.app)
[![HuggingFace](https://img.shields.io/badge/🤗_HuggingFace-demo-yellow?style=flat-square)](https://huggingface.co/spaces/ISHRAQ-Syed23/A-Store-demo)
[![Built in Public](https://img.shields.io/badge/building-in_public-purple?style=flat-square)](https://x.com/syedishraq23)
[![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)](LICENSE)

---

## What is A-Store?

A-Store is a **mobile-first, open-source AI app store** for people who want to use powerful AI models — without a terminal, without Python, without a laptop.

You paste a GitHub repo URL. A-Store analyzes it, detects the model type, checks hardware requirements and licensing, and tells you exactly what app it would become on your device.

**The vision:** When the build pipeline is complete, that repo becomes a real installable app — optimized for your device, one tap to install, no setup required.

---

## Live Right Now

| Feature | Status | Link |
|---|---|---|
| Store UI | ✅ Live | [a-store-ishraq.vercel.app](https://a-store-ishraq.vercel.app) |
| GitHub Repo Analyzer | ✅ Working | Paste any GitHub URL in the store |
| Whisper AI Demo | ✅ Running | [HuggingFace Space](https://huggingface.co/spaces/ISHRAQ-Syed23/A-Store-demo) |
| Community Waitlist | ✅ Live | Powered by Supabase |
| Email Capture | ✅ Live | Per-app interest tracking |
| Build Pipeline | 🔨 Building | Converting repos → real APKs |

---

## How It Works (Vision)

```
User pastes GitHub URL
        ↓
A-Store reads repo via GitHub API
        ↓
AI detects: model type, size, license, device needs
        ↓
Build engine creates device-matched versions
  → 1B model  for low-end phones  (2-3GB RAM)
  → 3B model  for mid-range phones (4-6GB RAM)
  → 7B model  for laptops          (8GB+ RAM)
  → 70B+      via cloud streaming  (any device)
        ↓
User installs like any normal app
No terminal. No Python. No setup.
```

---

## What's Working Today

### Real GitHub Repo Analyzer
Paste any public GitHub URL → get instant analysis:
- **Model type detection** — LLM, Speech-to-Text, Image Generation, Computer Vision
- **Device requirement** — auto-matched to your hardware
- **License check** — MIT, Apache, GPL, custom
- **Attribution** — Original author + community improvements labeled separately
- **Stars** — imported from GitHub for discovery ranking

Tested on: `openai/whisper`, `meta-llama/llama3`, `karpathy/nanochat`, `stability-ai/stable-diffusion`

### Live Whisper Demo
Speech-to-text in 99 languages running on HuggingFace free CPU tier. This is what A-Store apps look like — a working AI tool, installable, no terminal needed.

### Community Requests (Supabase backend)
Every repo added to the waitlist is saved publicly. Real submissions, real database, live counter on the homepage.

---

## Key Differentiators

| Feature | A-Store | HuggingFace | Replicate | Ollama/LM Studio |
|---|---|---|---|---|
| Mobile-first | ✅ | ❌ | ❌ | ❌ |
| Non-developer UX | ✅ | ❌ | ❌ | ❌ |
| India pricing | ✅ | ❌ | ❌ | N/A |
| Device-aware sizing | ✅ | ❌ | ❌ | Partial |
| App store format | ✅ | ❌ | ❌ | ❌ |
| Attribution system | ✅ | Partial | ❌ | ❌ |
| Open-source only | ✅ | Partial | Partial | ✅ |

---

## Tech Stack

```
Frontend    → HTML / CSS / JavaScript (GitHub Pages)
Backend     → Supabase (PostgreSQL, free tier)
Repo Data   → GitHub Public API (no auth required)
AI Demo     → HuggingFace Spaces (Gradio, free CPU)
Hosting     → Vercel (free)
```

---

## Roadmap

### Phase 1 — Prototype (Now)
- [x] Store UI live
- [x] GitHub repo analyzer
- [x] Supabase backend
- [x] Email waitlist capture
- [x] HuggingFace demo
- [x] Request an App dedicated page
- [ ] Email notification system

### Phase 2 — Beta
- [ ] URL → APK build pipeline (Android)
- [ ] Device detection on install
- [ ] 5 apps live in store (Llama, Whisper, Qwen, Stable Diffusion, Mistral)
- [ ] Cloud streaming for heavy models
- [ ] ₹1000/year developer publishing fee system

### Phase 3 — Launch
- [ ] iOS support
- [ ] Community fine-tuning + attribution system
- [ ] Pay-per-use cloud compute (50% margin)
- [ ] Research doc explainer for datasets
- [ ] App template marketplace

---

## The Story

Built by **ISHRAQ Syed**, a 17-year-old student from Nellore, Andhra Pradesh, India.

- No laptop — everything built from a phone
- No money — every tool used is on the free tier
- No team — solo project

The idea: 220M+ GitHub repos exist. Most of them contain genuinely useful AI tools. But they're completely inaccessible to anyone who isn't a developer. A-Store bridges that gap.

Applied to iCreate Accubate Spark Fund (₹50,000) — awaiting decision.

Follow the build: [@syedishraq23](https://x.com/syedishraq23)

---

## Contributing

This is open source. The current repo contains the prototype frontend.

If you want to contribute to the build pipeline (the hard part — converting repos to APKs), open an issue or reach out on Twitter.

---

## License

MIT — see [LICENSE](LICENSE)

---

## Links

- 🌐 **Store:** [a-store-ishraq.vercel.app](https://a-store-ishraq.vercel.apl)
- 🤗 **Demo:** [huggingface.co/spaces/ISHRAQ-Syed23/A-Store-demo](https://huggingface.co/spaces/ISHRAQ-Syed23/A-Store-demo)
- 🐦 **Twitter:** [@syedishraq23](https://x.com/syedishraq23)
- 📧 **Contact:** Open an issue or DM on Twitter

---

*Built with zero budget. Building in public. Day 1 was yesterday.*
