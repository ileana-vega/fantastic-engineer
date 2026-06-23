:root {
  --navy-950: #061b33;
  --navy-900: #08284a;
  --navy-800: #0a376d;
  --blue-700: #0d6fa6;
  --blue-500: #17a2d4;
  --yellow-500: #f9c846;
  --yellow-600: #e8b529;
  --slate-900: #182331;
  --slate-700: #465568;
  --slate-500: #6c7887;
  --slate-200: #d9e2ec;
  --slate-100: #eef4f8;
  --white: #ffffff;
  --shadow-sm: 0 10px 30px rgba(6, 27, 51, 0.08);
  --shadow-md: 0 22px 54px rgba(6, 27, 51, 0.16);
  --radius-sm: 14px;
  --radius-md: 22px;
  --radius-lg: 34px;
  --container: 1180px;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
  color: var(--slate-900);
  background: #fbfdff;
  line-height: 1.6;
}

body.menu-open {
  overflow: hidden;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  display: block;
  max-width: 100%;
}

button,
input,
textarea,
select {
  font: inherit;
}

.skip-link {
  position: absolute;
  top: -50px;
  left: 16px;
  z-index: 100;
  background: var(--yellow-500);
  color: var(--navy-900);
  padding: 10px 14px;
  border-radius: 10px;
  font-weight: 800;
}

.skip-link:focus {
  top: 14px;
}

.container {
  width: min(100% - 32px, var(--container));
  margin-inline: auto;
}

.topbar {
  background: var(--navy-950);
  color: rgba(255, 255, 255, 0.86);
  font-size: 0.9rem;
}

.topbar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  min-height: 42px;
}

.topbar__links {
  display: flex;
  align-items: center;
  gap: 18px;
  flex-wrap: wrap;
}

.header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(255, 255, 255, 0.93);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(217, 226, 236, 0.8);
}

.header__inner {
  min-height: 82px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-weight: 900;
  color: var(--navy-900);
  letter-spacing: 0.2px;
}

.brand img {
  width: 154px;
  height: auto;
}

.nav {
  display: flex;
  align-items: center;
  gap: 6px;
}

.nav a {
  padding: 11px 13px;
  border-radius: 999px;
  font-weight: 750;
  color: var(--slate-700);
  transition: 0.18s ease;
}

.nav a:hover,
.nav a[aria-current="page"] {
  color: var(--navy-900);
  background: var(--slate-100);
}

.header__actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.menu-toggle {
  display: none;
  border: 0;
  width: 44px;
  height: 44px;
  border-radius: 14px;
  background: var(--navy-900);
  color: var(--white);
  cursor: pointer;
}

.menu-toggle span {
  display: block;
  width: 20px;
  height: 2px;
  background: currentColor;
  margin: 5px auto;
  border-radius: 999px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  min-height: 46px;
  padding: 12px 18px;
  border-radius: 999px;
  border: 1px solid transparent;
  font-weight: 850;
  cursor: pointer;
  transition: transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn--primary {
  background: var(--yellow-500);
  color: var(--navy-900);
  box-shadow: 0 12px 28px rgba(249, 200, 70, 0.27);
}

.btn--primary:hover {
  background: var(--yellow-600);
}

.btn--secondary {
  color: var(--white);
  border-color: rgba(255, 255, 255, 0.24);
  background: rgba(255, 255, 255, 0.1);
}

.btn--ghost {
  color: var(--navy-900);
  background: var(--white);
  border-color: var(--slate-200);
}

.hero {
  position: relative;
  overflow: hidden;
  color: var(--white);
  background:
    radial-gradient(circle at 78% 8%, rgba(249, 200, 70, 0.38), transparent 22rem),
    radial-gradient(circle at 8% 82%, rgba(23, 162, 212, 0.22), transparent 24rem),
    linear-gradient(135deg, var(--navy-950), var(--navy-800));
}

.hero::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.07) 1px, transparent 1px);
  background-size: 62px 62px;
  mask-image: linear-gradient(to bottom, rgba(0,0,0,.88), transparent 92%);
  pointer-events: none;
}

.hero__inner {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1.02fr 0.98fr;
  gap: 46px;
  align-items: center;
  min-height: 630px;
  padding-block: 76px;
}

.hero__copy {
  max-width: 680px;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin: 0 0 18px;
  padding: 7px 12px;
  border-radius: 999px;
  background: rgba(249, 200, 70, 0.14);
  color: var(--yellow-500);
  font-weight: 850;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 0.78rem;
}

.hero h1,
.page-hero h1 {
  margin: 0;
  font-size: clamp(2.4rem, 6vw, 4.9rem);
  line-height: 0.98;
  letter-spacing: -0.055em;
}

.hero p,
.page-hero p {
  max-width: 720px;
  margin: 24px 0 0;
  color: rgba(255, 255, 255, 0.82);
  font-size: clamp(1.02rem, 1.6vw, 1.24rem);
}

.hero__actions,
.section-actions {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  margin-top: 30px;
}

.hero__panel {
  position: relative;
}

.hero-card {
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: var(--radius-lg);
  padding: 24px;
  box-shadow: var(--shadow-md);
  backdrop-filter: blur(18px);
}

.hero-card__image {
  padding: 16px;
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.91);
}

.hero-card__rows {
  display: grid;
  gap: 12px;
  margin-top: 18px;
}

.mini-row {
  display: flex;
  justify-content: space-between;
  gap: 14px;
  padding: 14px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.86);
}

.mini-row strong {
  color: var(--white);
}

.stats-strip {
  margin-top: -36px;
  position: relative;
  z-index: 5;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.stat-card {
  padding: 24px;
  border-radius: var(--radius-md);
  background: var(--white);
  box-shadow: var(--shadow-sm);
  border: 1px solid rgba(217, 226, 236, 0.7);
}

.stat-card strong {
  display: block;
  color: var(--navy-900);
  font-size: clamp(1.8rem, 3vw, 2.7rem);
  line-height: 1;
  letter-spacing: -0.04em;
}

.stat-card span {
  display: block;
  margin-top: 8px;
  color: var(--slate-700);
  font-weight: 700;
}

.section {
  padding-block: 86px;
}

.section--soft {
  background: var(--slate-100);
}

.section--dark {
  color: var(--white);
  background: linear-gradient(135deg, var(--navy-950), var(--navy-800));
}

.section-header {
  max-width: 760px;
  margin-bottom: 34px;
}

.section-header--center {
  margin-inline: auto;
  text-align: center;
}

.section-kicker {
  display: block;
  color: var(--blue-700);
  font-weight: 900;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  font-size: 0.78rem;
  margin-bottom: 10px;
}

.section--dark .section-kicker {
  color: var(--yellow-500);
}

.section h2,
.section-header h2 {
  margin: 0;
  font-size: clamp(2rem, 4vw, 3.2rem);
  line-height: 1.04;
  letter-spacing: -0.045em;
  color: var(--navy-900);
}

.section--dark h2,
.section--dark .section-header p {
  color: var(--white);
}

.section-header p {
  margin: 16px 0 0;
  color: var(--slate-700);
  font-size: 1.08rem;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.card {
  position: relative;
  min-height: 100%;
  padding: 26px;
  border-radius: var(--radius-md);
  background: var(--white);
  border: 1px solid rgba(217, 226, 236, 0.84);
  box-shadow: var(--shadow-sm);
  transition: transform 0.18s ease, box-shadow 0.18s ease;
}

.card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
}

.card__icon,
.feature-icon {
  display: grid;
  place-items: center;
  width: 52px;
  height: 52px;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(13, 111, 166, .12), rgba(249, 200, 70, .18));
  color: var(--navy-900);
  font-weight: 900;
  font-size: 1.3rem;
}

.card h3 {
  margin: 18px 0 8px;
  color: var(--navy-900);
  font-size: 1.25rem;
  line-height: 1.2;
}

.card p {
  margin: 0;
  color: var(--slate-700);
}

.card__link {
  display: inline-flex;
  margin-top: 18px;
  color: var(--blue-700);
  font-weight: 900;
}

.brand-grid,
.family-grid {
  display: grid;
  gap: 14px;
}

.brand-grid {
  grid-template-columns: repeat(4, 1fr);
}

.family-grid {
  grid-template-columns: repeat(4, 1fr);
}

.brand-pill,
.family-pill {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 18px;
  border-radius: 18px;
  background: var(--white);
  border: 1px solid rgba(217, 226, 236, 0.84);
  box-shadow: var(--shadow-sm);
  font-weight: 850;
  color: var(--navy-900);
}

.brand-pill span,
.family-pill span {
  color: var(--blue-700);
}

.split {
  display: grid;
  grid-template-columns: 0.92fr 1.08fr;
  gap: 48px;
  align-items: center;
}

.feature-list {
  display: grid;
  gap: 14px;
}

.feature-item {
  display: grid;
  grid-template-columns: 52px 1fr;
  gap: 16px;
  align-items: start;
  padding: 18px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.13);
}

.feature-item h3 {
  margin: 0 0 4px;
  color: var(--white);
}

.feature-item p {
  margin: 0;
  color: rgba(255, 255, 255, 0.78);
}

.page-hero {
  color: var(--white);
  background:
    radial-gradient(circle at 90% 8%, rgba(249, 200, 70, 0.35), transparent 23rem),
    linear-gradient(135deg, var(--navy-950), var(--navy-800));
  overflow: hidden;
}

.page-hero__inner {
  display: grid;
  grid-template-columns: 0.98fr 1.02fr;
  gap: 42px;
  align-items: center;
  padding-block: 76px;
  min-height: 480px;
}

.page-hero__media {
  padding: 18px;
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.11);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: var(--shadow-md);
}

.specs-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  margin-top: 28px;
}

.spec-box {
  padding: 15px;
  border-radius: 17px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.16);
}

.spec-box strong {
  display: block;
  font-size: 1.2rem;
  color: var(--white);
}

.spec-box span {
  color: rgba(255, 255, 255, 0.76);
  font-size: 0.92rem;
}

.vfd-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18px;
}

.vfd-card {
  padding: 26px;
  border-radius: var(--radius-md);
  background: var(--white);
  border: 1px solid rgba(217, 226, 236, 0.84);
  box-shadow: var(--shadow-sm);
}

.vfd-card__head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
}

.badge {
  display: inline-flex;
  align-items: center;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(13, 111, 166, 0.1);
  color: var(--blue-700);
  font-size: 0.78rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.vfd-card h3 {
  margin: 10px 0 6px;
  color: var(--navy-900);
  font-size: 1.45rem;
}

.vfd-card p {
  color: var(--slate-700);
  margin: 0 0 16px;
}

.check-list,
.simple-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 10px;
}

.check-list li,
.simple-list li {
  position: relative;
  padding-left: 28px;
  color: var(--slate-700);
}

.check-list li::before,
.simple-list li::before {
  content: "✓";
  position: absolute;
  left: 0;
  top: 0;
  color: var(--blue-700);
  font-weight: 900;
}

.model-chip-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
}

.model-chip {
  padding: 7px 10px;
  border-radius: 999px;
  background: var(--slate-100);
  color: var(--navy-900);
  font-size: 0.82rem;
  font-weight: 850;
}

.table-wrap {
  overflow-x: auto;
  background: var(--white);
  border: 1px solid rgba(217, 226, 236, 0.84);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
}

table {
  width: 100%;
  border-collapse: collapse;
  min-width: 760px;
}

th,
td {
  padding: 18px;
  border-bottom: 1px solid var(--slate-200);
  text-align: left;
  vertical-align: top;
}

th {
  color: var(--navy-900);
  background: var(--slate-100);
  font-size: 0.86rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

td {
  color: var(--slate-700);
}

tr:last-child td {
  border-bottom: 0;
}

.quote-panel {
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 24px;
  align-items: start;
}

.quote-card {
  padding: 28px;
  border-radius: var(--radius-md);
  background: var(--white);
  border: 1px solid rgba(217, 226, 236, 0.84);
  box-shadow: var(--shadow-sm);
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
}

.form-field {
  display: grid;
  gap: 7px;
}

.form-field--full {
  grid-column: 1 / -1;
}

label {
  color: var(--navy-900);
  font-weight: 850;
  font-size: 0.9rem;
}

input,
select,
textarea {
  width: 100%;
  border: 1px solid var(--slate-200);
  border-radius: 14px;
  background: #fff;
  color: var(--slate-900);
  padding: 12px 14px;
  outline: none;
  transition: border-color .18s ease, box-shadow .18s ease;
}

textarea {
  min-height: 114px;
  resize: vertical;
}

input:focus,
select:focus,
textarea:focus {
  border-color: var(--blue-700);
  box-shadow: 0 0 0 4px rgba(13, 111, 166, 0.12);
}

.form-note {
  margin: 14px 0 0;
  color: var(--slate-500);
  font-size: 0.92rem;
}

.banner-shell {
  padding: 24px;
  border-radius: var(--radius-lg);
  background: var(--white);
  box-shadow: var(--shadow-md);
  border: 1px solid rgba(217, 226, 236, 0.84);
}

.banner-shell img {
  width: 100%;
  border-radius: 28px;
}

.promo-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.promo-card {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  padding: 24px;
  border-radius: var(--radius-md);
  background: var(--white);
  border: 1px solid rgba(217, 226, 236, 0.84);
  box-shadow: var(--shadow-sm);
}

.promo-card__top {
  display: flex;
  justify-content: space-between;
  gap: 14px;
  align-items: flex-start;
}

.promo-card h3 {
  margin: 14px 0 8px;
  color: var(--navy-900);
  font-size: 1.24rem;
  line-height: 1.2;
}

.promo-card p {
  margin: 0 0 16px;
  color: var(--slate-700);
}

.promo-price {
  margin-top: auto;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 14px;
  padding-top: 16px;
  border-top: 1px solid var(--slate-200);
}

.promo-price strong {
  color: var(--navy-900);
  font-size: 1.2rem;
}

.date-note {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  border-radius: 999px;
  background: rgba(249, 200, 70, 0.16);
  color: var(--navy-900);
  font-weight: 850;
}

.cta-band {
  border-radius: var(--radius-lg);
  padding: 42px;
  color: var(--white);
  background:
    radial-gradient(circle at 92% 20%, rgba(249, 200, 70, 0.34), transparent 17rem),
    linear-gradient(135deg, var(--navy-950), var(--navy-800));
  box-shadow: var(--shadow-md);
}

.cta-band h2 {
  margin: 0;
  color: var(--white);
}

.cta-band p {
  max-width: 740px;
  color: rgba(255,255,255,.78);
  margin: 12px 0 0;
}

.footer {
  padding-block: 52px 26px;
  color: rgba(255, 255, 255, 0.76);
  background: var(--navy-950);
}

.footer__grid {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr 0.85fr;
  gap: 32px;
}

.footer h3,
.footer h4 {
  margin: 0 0 12px;
  color: var(--white);
}

.footer p,
.footer ul {
  margin: 0;
}

.footer ul {
  list-style: none;
  padding: 0;
  display: grid;
  gap: 8px;
}

.footer a:hover {
  color: var(--yellow-500);
}

.footer__bottom {
  border-top: 1px solid rgba(255,255,255,.12);
  margin-top: 34px;
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
}

.source-note {
  margin-top: 16px;
  padding: 14px;
  border-radius: 16px;
  background: rgba(13, 111, 166, 0.08);
  color: var(--slate-700);
  font-size: 0.94rem;
}

@media (max-width: 980px) {
  .topbar__inner,
  .header__inner {
    width: min(100% - 24px, var(--container));
  }

  .nav {
    position: fixed;
    inset: 124px 16px auto 16px;
    display: none;
    flex-direction: column;
    align-items: stretch;
    padding: 14px;
    background: var(--white);
    border: 1px solid var(--slate-200);
    border-radius: 22px;
    box-shadow: var(--shadow-md);
  }

  .nav.is-open {
    display: flex;
  }

  .nav a {
    border-radius: 14px;
  }

  .menu-toggle {
    display: inline-block;
  }

  .header__actions .btn {
    display: none;
  }

  .hero__inner,
  .page-hero__inner,
  .split,
  .quote-panel {
    grid-template-columns: 1fr;
  }

  .hero__inner,
  .page-hero__inner {
    min-height: auto;
  }

  .cards-grid,
  .promo-grid,
  .stats-grid,
  .brand-grid,
  .family-grid,
  .vfd-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 680px) {
  .topbar__inner {
    align-items: flex-start;
    flex-direction: column;
    padding-block: 10px;
  }

  .brand img {
    width: 126px;
  }

  .hero__inner,
  .page-hero__inner,
  .section {
    padding-block: 54px;
  }

  .stats-strip {
    margin-top: 16px;
  }

  .cards-grid,
  .promo-grid,
  .stats-grid,
  .brand-grid,
  .family-grid,
  .vfd-grid,
  .specs-row,
  .form-grid,
  .footer__grid {
    grid-template-columns: 1fr;
  }

  .quote-card,
  .card,
  .promo-card,
  .vfd-card,
  .banner-shell,
  .cta-band {
    padding: 20px;
  }

  .footer__bottom {
    flex-direction: column;
  }
}
