import logoUrl from './assets/logo.svg';
import './style.css';

const LANGUAGE_STORAGE_KEY = 'wedding-site-language';
const RSVP_STORAGE_KEY = 'rose-and-jordan-rsvp';
const supportedLanguages = ['en', 'es'];

const content = {
  en: {
    languageName: 'English',
    navLabel: 'Primary',
    brand: 'Ryan and Jessica',
    navWeekend: 'Weekend',
    navDetails: 'Details',
    navReplyNow: 'Reply Now',
    languageSwitcherLabel: 'Language',
    heroLocation: 'Costa Mujeres, MX',
    invitationKicker: "You're invited to celebrate",
    invitationTitle: 'The wedding of Ryan and Jessica',
    bookingHeading: 'Booking details',
    bookingLines: [
      'Our room block is available for 3 or 4 nights starting on April 15, 2027',
      'Optional shared transportation available for $85 per person when traveling in groups',
      'Last day to book a room in block is December 1, 2026',
      'An initial deposit is required at the time of booking'
    ],
    emailLines: [
      'For any questions on booking a room, payment plans, or other inquiries, please contact our wedding travel coordinator, Jared',
      'Phone: 877-737-0177 (option 2)'
    ],
    bookingHours: 'Hours: 9 AM - 5 PM EST',
    emailJared: 'Email Jared',
    resortCode: 'Group code 0417',
    bookRoom: 'Book a Room',
    ceremonyMoments: [
      {
        title: 'The Ceremony',
        lines: ['Beginning time TBA', 'At the Piano Bar'],
        note: 'Semi-formal attire'
      },
      {
        title: 'The Celebration',
        lines: ['Cocktail hour TBA', 'At the Terrace'],
        note: 'After party later'
      }
    ],
    weekendHeading: "Let's kick off the weekend",
    weekendMoments: [
      {
        title: 'Welcome Drinks',
        lines: ['04 16 27', 'Beginning at 5:00 PM', 'The Bar + Lounge'],
        note: 'Cocktail attire'
      },
      {
        title: 'Sunday Brunch',
        lines: ['04 18 27', 'Please join us at 10:00 AM', 'The Dining Room'],
        note: 'Casual attire'
      }
    ],
    countdownKicker: 'Counting down',
    countdownTitle: 'Until we gather in Mexico',
    countdownLabels: {
      days: 'Days',
      hours: 'Hours',
      minutes: 'Minutes',
      seconds: 'Seconds'
    },
    faqHeading: "FAQ's",
    faqs: [
      {
        question: 'What if I want to stay longer than the room block allows?',
        answer:
          'You can contact our wedding travel coordinator, Jared, to see if the hotel can accommodate your request.'
      },
      {
        question: "What if I don't want to include transport?",
        answer: 'You can arrange your own transport if you prefer not to use the options provided.'
      },
      {
        question: 'Am I required to stay at the resort that is hosting the wedding?',
        answer:
          'No, you are welcome to stay elsewhere if you prefer. However, you will need to purchase a day pass to access the resort for the wedding events if you are not staying there.'
      },
      {
        question: 'Who can I contact for more information on booking my stay?',
        answer:
          'You can contact our wedding coordinator, Jared, for any questions or additional information.'
      },
      {
        question: 'Will the ceremony or reception be directly on the beach?',
        answer:
          'No, the ceremony and reception will be held on the resort grounds, but not directly on the beach. The resort has beautiful venues that are close to the beach, but not directly on it.'
      }
    ],
    letterIntro: 'Dear friends and family,',
    letterBody:
      "The greatest gift we could receive is celebrating our wedding with you. We know that traveling for our destination wedding is a meaningful commitment, and your presence means more to us than any gift ever could.  For those who asked, we've created a registry for anyone who wishes to celebrate with us that way. Thank you for your love and support. We can't wait to celebrate with you!",
    registryKicker: 'Our registry',
    registryTitle: 'Help Us Build Our Next Chapter',
    registryIdeasLabel: 'Registry ideas',
    registryTags: ['Honeymoon Moments', 'Home Essentials', 'Future Together'],
    giftButton: 'Give a gift',
    rsvpHeading: 'Reply now',
    rsvpIntro: 'Let us know if you will be joining us.',
    rsvpFields: {
      guestName: 'Guest name',
      guestNamePlaceholder: 'Rose Bloom',
      email: 'Email address',
      emailPlaceholder: 'you@example.com',
      emailInvalid: 'Please enter a valid email address (example: you@example.com).',
      songRequest: "Share a song you'd like to hear at our wedding",
      songRequestPlaceholder: 'e.g., Beyond by Leon Bridges',
      attendance: 'Will you be joining us?',
      attendancePlaceholder: 'Select one',
      attendanceAccept: 'Joyfully accepts',
      attendanceDecline: 'Regretfully declines',
      notes: 'Notes',
      notesPlaceholder: 'Dietary notes, travel timing, or a short message',
      submit: 'Save RSVP'
    },
    statusRestored: 'Your last response has been restored from this browser.',
    statusSaved: 'RSVP submitted and saved locally.',
    statusError:
      'Unable to submit RSVP right now. Your response is still saved locally in this browser.'
  },
  es: {
    languageName: 'Español',
    navLabel: 'Principal',
    brand: 'Ryan y Jessica',
    navWeekend: 'Fin de semana',
    navDetails: 'Detalles',
    navReplyNow: 'Confirmar ahora',
    languageSwitcherLabel: 'Idioma',
    heroLocation: 'Costa Mujeres, MX',
    invitationKicker: 'Te invitamos a celebrar',
    invitationTitle: 'La boda de Ryan y Jessica',
    bookingHeading: 'Detalles de reserva',
    bookingLines: [
      'Nuestro bloque de habitaciones está disponible por 3 o 4 noches a partir del 15 de abril de 2027',
      'Transporte compartido opcional disponible por $85 por persona para grupos',
      'La fecha límite para reservar en el bloque es el 1 de diciembre de 2026',
      'Se requiere un depósito inicial al momento de reservar'
    ],
    emailLines: [
      'Para preguntas sobre reserva de habitación, planes de pago u otras consultas, contacta a nuestro coordinador de viajes para la boda, Jared',
      'Teléfono: 877-737-0177 (opción 2)'
    ],
    bookingHours: 'Horario: 9 AM - 5 PM EST',
    emailJared: 'Enviar correo a Jared',
    resortCode: 'Código de grupo 0417',
    bookRoom: 'Reservar habitación',
    ceremonyMoments: [
      {
        title: 'La ceremonia',
        lines: ['La hora está por confirmarse', 'En Bar de Piano'],
        note: 'Vestimenta semi-formal'
      },
      {
        title: 'La celebración',
        lines: ['La hora está por confirmarse', 'En La Terraza'],
        note: 'After party más tarde'
      }
    ],
    weekendHeading: 'Comencemos el fin de semana',
    weekendMoments: [
      {
        title: 'Tragos de bienvenida',
        lines: ['04 16 27', 'Comienza a las 5:00 PM', 'The Bar + Lounge'],
        note: 'Vestimenta coctel'
      },
      {
        title: 'Brunch del domingo',
        lines: ['04 18 27', 'Acompáñanos a las 10:00 AM', 'The Dining Room'],
        note: 'Vestimenta casual'
      }
    ],
    countdownKicker: 'Cuenta regresiva',
    countdownTitle: 'Hasta reunirnos en Mexico',
    countdownLabels: {
      days: 'Días',
      hours: 'Horas',
      minutes: 'Minutos',
      seconds: 'Segundos'
    },
    faqHeading: 'Preguntas frecuentes',
    faqs: [
      {
        question:
          '¿Qué pasa si quiero quedarme más tiempo del permitido por el bloque de habitaciones?',
        answer:
          'Puedes contactar a nuestro coordinador de viajes para la boda, Jared, para revisar si el hotel puede acomodar tu solicitud.'
      },
      {
        question: '¿Qué pasa si no quiero incluir transporte?',
        answer: 'Puedes organizar tu propio transporte si prefieres no usar las opciones ofrecidas.'
      },
      {
        question: '¿Es obligatorio hospedarme en el resort donde será la boda?',
        answer:
          'No, puedes hospedarte en otro lugar si lo prefieres. Sin embargo, necesitarás comprar un pase de día para acceder al resort durante los eventos de la boda si no te hospedas ahí.'
      },
      {
        question: '¿Con quién puedo comunicarme para más información sobre mi reserva?',
        answer:
          'Puedes contactar a nuestro coordinador de bodas, Jared, para cualquier pregunta o información adicional.'
      },
      {
        question: '¿La ceremonia o la recepción será directamente en la playa?',
        answer:
          'No, la ceremonia y la recepción se realizarán en las instalaciones del resort, cerca de la playa, pero no directamente sobre la arena.'
      }
    ],
    letterIntro: 'Queridos amigos y familia,',
    letterBody:
      'El regalo más grande que podríamos recibir es celebrar nuestra boda contigo. Sabemos que viajar para nuestra boda de destino es un compromiso significativo, y tu presencia significa más para nosotros que cualquier regalo. Para quienes lo preguntaron, hemos creado un registro para cualquiera que desee celebrar con nosotros de esa manera. ¡Gracias por tu amor y apoyo. ¡No podemos esperar a celebrar contigo!',
    registryKicker: 'Nuestra mesa de regalos',
    registryTitle: 'Algunas formas de celebrar con nosotros',
    registryIdeasLabel: 'Ideas de regalos',
    registryTags: ['Momentos de Luna de Miel', 'Esenciales del Hogar', 'Futuro Juntos'],
    giftButton: 'Dar un regalo',
    rsvpHeading: 'Confirma tu asistencia',
    rsvpIntro: 'Cuéntanos si nos acompañarás.',
    rsvpFields: {
      guestName: 'Nombre del invitado',
      guestNamePlaceholder: 'Rosa Flores',
      email: 'Correo electrónico',
      emailPlaceholder: 'tu@correo.com',
      emailInvalid: 'Por favor ingresa un correo valido (ejemplo: tu@correo.com).',
      songRequest: 'Comparte una canción que te gustaría escuchar en nuestra boda',
      songRequestPlaceholder: 'p. ej., Beyond de Leon Bridges',
      attendance: '¿Nos acompañarás?',
      attendancePlaceholder: 'Selecciona una opción',
      attendanceAccept: 'Acepto con gusto',
      attendanceDecline: 'Lamento no poder asistir',
      notes: 'Notas',
      notesPlaceholder: 'Notas de dieta, horario de viaje o un mensaje corto',
      submit: 'Guardar RSVP'
    },
    statusRestored: 'Tu última respuesta se restauró en este navegador.',
    statusSaved: 'RSVP enviado y guardado localmente.',
    statusError:
      'No se pudo enviar el RSVP en este momento. Tu respuesta sigue guardada localmente en este navegador.'
  }
};

const ornament = `
  <svg class="section-ornament" viewBox="0 0 120 40" role="presentation" aria-hidden="true">
    <path d="M4 20c18 0 22-11 33-11 8 0 13 5 17 11-4 6-9 11-17 11-11 0-15-11-33-11Z" />
    <path d="M116 20c-18 0-22-11-33-11-8 0-13 5-17 11 4 6 9 11 17 11 11 0 15-11 33-11Z" />
    <path d="M60 9c0 8-5 12-5 18 0 3 2 8 5 13 3-5 5-10 5-13 0-6-5-10-5-18Z" />
    <circle cx="60" cy="20" r="3.5" />
  </svg>
`;

const countdownTarget = new Date('2027-04-17T15:00:00+02:00');
let countdownIntervalId = null;
let currentLanguage = 'en';

const renderTimelineCards = (items) =>
  items
    .map(
      (item, index) => `
        <article class="timeline-card reveal-card" data-reveal="card" data-reveal-delay="${index * 90}">
          <h3>${item.title}</h3>
          <p>${item.lines.join('<br />')}</p>
          <span class="timeline-separator">|</span>
          <span class="timeline-note">${item.note}</span>
        </article>
      `
    )
    .join('');

const renderFaqs = (items) =>
  items
    .map(
      (item, index) => `
        <article class="faq-item reveal-card" data-reveal="card" data-reveal-delay="${index * 70}">
          <h3>${item.question}</h3>
          <p>${item.answer}</p>
        </article>
      `
    )
    .join('');

const getInitialLanguage = () => {
  const savedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);

  if (savedLanguage && supportedLanguages.includes(savedLanguage)) {
    return savedLanguage;
  }

  const browserLanguage = (window.navigator.language || 'en').toLowerCase();
  return browserLanguage.startsWith('es') ? 'es' : 'en';
};

currentLanguage = getInitialLanguage();

const renderLanguageButton = (languageCode, activeLanguage, languageLabel) => {
  const isActive = languageCode === activeLanguage;
  return `
    <button
      class="language-button${isActive ? ' language-button--active' : ''}"
      type="button"
      data-language-button="${languageCode}"
      aria-pressed="${isActive}">
      ${languageLabel}
    </button>
  `;
};

const renderApp = () => {
  const copy = content[currentLanguage];
  const countdownLabels = copy.countdownLabels;
  const rsvpFields = copy.rsvpFields;
  const bookingLines = copy.bookingLines
    .map((line) => `<p class="travel-venue">&bull; ${line}</p>`)
    .join('');
  const emailLines = copy.emailLines
    .map((line) => `<p class="travel-venue">&bull; ${line}</p>`)
    .join('');
  const registryTags = copy.registryTags.map((tag) => `<span>${tag}</span>`).join('');

  document.documentElement.lang = currentLanguage;

  document.querySelector('#app').innerHTML = `
    <header class="site-header">
      <a class="site-brand" href="#top"><img src="${logoUrl}" alt="Ryan and Jessica" class="site-brand-logo" /></a>
      <nav class="site-nav" aria-label="${copy.navLabel}">
        <a href="#weekend">${copy.navWeekend}</a>
        <a href="#details">${copy.navDetails}</a>
        <a href="#rsvp">${copy.navReplyNow}</a>
      </nav>
    </header>

    <main id="top">
      <section class="hero-shell section-navy">
        <div class="hero-card">
          <div class="hero-overlay" aria-hidden="true"></div>
          <div class="hero-language-switcher" role="group" aria-label="${copy.languageSwitcherLabel}">
            ${renderLanguageButton('en', currentLanguage, 'EN')}
            ${renderLanguageButton('es', currentLanguage, 'ES')}
          </div>
          <div class="hero-copy">
            <p class="eyebrow">${copy.heroLocation}</p>
            <h1>${copy.brand}</h1>
            <a class="date-pill" href="#celebration">04 17 2027</a>
          </div>
        </div>
      </section>

      <section class="section section-navy invitation" id="celebration">
        <div class="section-shell section-shell--narrow">
          <span class="dash-mark" data-reveal="text">-</span>
          <p class="kicker" data-reveal="text" data-reveal-delay="70">${copy.invitationKicker}</p>
          <h2 data-reveal="text" data-reveal-delay="140">${copy.invitationTitle}<br /><br /></h2>

          <div class="travel-split reveal-card" data-reveal="card">
            <h3 class="travel-heading travel-heading--shared">${copy.bookingHeading}</h3>
            <div class="travel-col">
              ${bookingLines}
              <p class="travel-note">${copy.resortCode}</p>
              <a class="button-link--outline" href="https://l.paradiseweddings.com/jessica-and-ryan" target="_blank" rel="noopener noreferrer">${copy.bookRoom}</a>
            </div>
            <div class="travel-divider" aria-hidden="true"></div>
            <div class="travel-col">
              ${emailLines}
              <p class="travel-note">${copy.bookingHours}</p>
              <a class="button-link--outline" href="mailto:guests@paradiseweddings.com" target="_blank" rel="noopener noreferrer">${copy.emailJared}</a>
            </div>
          </div>

          <div class="timeline-grid">
            ${renderTimelineCards(copy.ceremonyMoments)}
          </div>
        </div>
      </section>

      <section class="section section-white-chocolate weekend" id="weekend">
        <div class="section-shell">
          <div class="section-heading" data-reveal="text">
            ${ornament}
            <h2>${copy.weekendHeading}</h2>
          </div>
          <div class="timeline-grid timeline-grid--sand">
            ${renderTimelineCards(copy.weekendMoments)}
          </div>
        </div>
      </section>

      <section class="section section-navy details" id="details">
        <div class="section-shell">
          <div class="countdown-block reveal-card" data-reveal="card">
            <div>
              <p class="kicker">${copy.countdownKicker}</p>
              <h2>${copy.countdownTitle}</h2>
            </div>
            <div class="countdown-grid" aria-live="polite">
              <div class="countdown-cell">
                <strong data-countdown="days">000</strong>
                <span>${countdownLabels.days}</span>
              </div>
              <div class="countdown-cell">
                <strong data-countdown="hours">00</strong>
                <span>${countdownLabels.hours}</span>
              </div>
              <div class="countdown-cell">
                <strong data-countdown="minutes">00</strong>
                <span>${countdownLabels.minutes}</span>
              </div>
              <div class="countdown-cell">
                <strong data-countdown="seconds">00</strong>
                <span>${countdownLabels.seconds}</span>
              </div>
            </div>
          </div>

          <div class="section-heading section-heading--light" data-reveal="text">
            <span class="dash-mark">-</span>
            <h2>${copy.faqHeading}</h2>
          </div>

          <div class="faq-grid">
            ${renderFaqs(copy.faqs)}
          </div>
        </div>
      </section>

      <section class="section section-white-chocolate note-registry" id="registry">
        <div class="section-shell split-layout">
          <article class="letter-card reveal-card" data-reveal="card">
            <p class="letter-intro">${copy.letterIntro}</p>
            <p class="letter-body">${copy.letterBody}</p>
          </article>

          <aside class="registry-card reveal-card" data-reveal="card" data-reveal-delay="110">
            <p class="kicker kicker--dark">${copy.registryKicker}</p>
            <h2>${copy.registryTitle}</h2>
            <div class="registry-tags" aria-label="${copy.registryIdeasLabel}">
              ${registryTags}
            </div>
            <a class="button-link" href="#rsvp">${copy.giftButton}</a>
          </aside>
        </div>
      </section>

      <section class="section section-white-chocolate rsvp" id="rsvp">
        <div class="section-shell section-shell--narrow">
          <div class="section-heading" data-reveal="text">
            ${ornament}
            <h2>${copy.rsvpHeading}</h2>
          </div>
          <p class="rsvp-intro" data-reveal="text" data-reveal-delay="90">
            ${copy.rsvpIntro}
          </p>
          <form
            class="rsvp-form reveal-card"
            name="rsvp"
            method="POST"
            data-netlify="true"
            data-rsvp-form
            data-reveal="card"
            data-reveal-delay="160">
            <input type="hidden" name="form-name" value="rsvp" />
            <label>
              ${rsvpFields.guestName}*
              <input type="text" name="guestName" placeholder="${rsvpFields.guestNamePlaceholder}" required />
            </label>
            <label>
              ${rsvpFields.email}*
              <input type="email" name="email" placeholder="${rsvpFields.emailPlaceholder}" required />
            </label>
            <label>
              ${rsvpFields.songRequest}
              <input
                type="text"
                name="songRequest"
                placeholder="${rsvpFields.songRequestPlaceholder}" />
            </label>
            <label>
              ${rsvpFields.attendance}*
              <select name="attendance" required>
                <option value="">${rsvpFields.attendancePlaceholder}</option>
                <option value="joyfullyAccepts">${rsvpFields.attendanceAccept}</option>
                <option value="regretfullyDeclines">${rsvpFields.attendanceDecline}</option>
              </select>
            </label>
            <label>
              ${rsvpFields.notes}
              <textarea name="notes" rows="4" placeholder="${rsvpFields.notesPlaceholder}"></textarea>
            </label>
            <button class="button-link" type="submit">${rsvpFields.submit}</button>
            <p class="form-status" data-form-status></p>
          </form>
        </div>
      </section>
    </main>
  `;
};

const setLanguage = (languageCode) => {
  if (!supportedLanguages.includes(languageCode) || languageCode === currentLanguage) {
    return;
  }

  currentLanguage = languageCode;
  window.localStorage.setItem(LANGUAGE_STORAGE_KEY, languageCode);
  initializeApp();
};

const initializeLanguageSwitcher = () => {
  const languageButtons = [...document.querySelectorAll('[data-language-button]')];

  for (const button of languageButtons) {
    button.addEventListener('click', () => {
      setLanguage(button.dataset.languageButton);
    });
  }
};

const initializeHeaderBehavior = () => {
  const siteHeader = document.querySelector('.site-header');
  const heroShell = document.querySelector('.hero-shell');

  if (!siteHeader || !heroShell) {
    return;
  }

  const toggleHeader = (showHeader) => {
    siteHeader.classList.toggle('site-header--visible', showHeader);
  };

  const updateHeaderVisibilityFromBounds = () => {
    const heroBounds = heroShell.getBoundingClientRect();
    toggleHeader(heroBounds.bottom <= 0);
  };

  if ('IntersectionObserver' in window) {
    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        const heroHasScrolledPast = !entry.isIntersecting && entry.boundingClientRect.bottom <= 0;
        toggleHeader(heroHasScrolledPast);
      },
      {
        threshold: 0
      }
    );

    heroObserver.observe(heroShell);
  } else {
    updateHeaderVisibilityFromBounds();
    window.addEventListener('scroll', updateHeaderVisibilityFromBounds, { passive: true });
  }

  updateHeaderVisibilityFromBounds();
};

const initializeRevealAnimations = () => {
  const revealElements = [...document.querySelectorAll('[data-reveal]')];

  if (!revealElements.length) {
    return;
  }

  document.documentElement.classList.add('js-enhanced');

  for (const element of revealElements) {
    const delay = Number(element.dataset.revealDelay || '0');
    element.style.setProperty('--reveal-delay', `${delay}ms`);
  }

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    for (const element of revealElements) {
      element.classList.add('reveal-in');
    }
    return;
  }

  const revealElement = (element) => {
    element.classList.add('reveal-in');
  };

  const isNearViewport = (element) => {
    const bounds = element.getBoundingClientRect();
    const revealBoundary = window.innerHeight * 0.92;

    return bounds.top <= revealBoundary && bounds.bottom >= 0;
  };

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) {
          continue;
        }

        revealElement(entry.target);
        observer.unobserve(entry.target);
      }
    },
    {
      threshold: 0.08,
      rootMargin: '0px 0px -8% 0px'
    }
  );

  for (const element of revealElements) {
    if (isNearViewport(element)) {
      revealElement(element);
      continue;
    }

    observer.observe(element);
  }
};

const initializeCountdown = () => {
  if (countdownIntervalId) {
    window.clearInterval(countdownIntervalId);
  }

  const countdownFields = {
    days: document.querySelector('[data-countdown="days"]'),
    hours: document.querySelector('[data-countdown="hours"]'),
    minutes: document.querySelector('[data-countdown="minutes"]'),
    seconds: document.querySelector('[data-countdown="seconds"]')
  };

  if (
    !countdownFields.days ||
    !countdownFields.hours ||
    !countdownFields.minutes ||
    !countdownFields.seconds
  ) {
    return;
  }

  const updateCountdown = () => {
    const difference = countdownTarget.getTime() - Date.now();
    const remaining = Math.max(difference, 0);
    const days = Math.floor(remaining / 86400000);
    const hours = Math.floor((remaining % 86400000) / 3600000);
    const minutes = Math.floor((remaining % 3600000) / 60000);
    const seconds = Math.floor((remaining % 60000) / 1000);

    countdownFields.days.textContent = String(days).padStart(3, '0');
    countdownFields.hours.textContent = String(hours).padStart(2, '0');
    countdownFields.minutes.textContent = String(minutes).padStart(2, '0');
    countdownFields.seconds.textContent = String(seconds).padStart(2, '0');
  };

  updateCountdown();
  countdownIntervalId = window.setInterval(updateCountdown, 1000);
};

const initializeRsvpForm = () => {
  const form = document.querySelector('[data-rsvp-form]');
  const status = document.querySelector('[data-form-status]');

  if (!form || !status) {
    return;
  }

  const savedResponse = window.localStorage.getItem(RSVP_STORAGE_KEY);
  const copy = content[currentLanguage];
  const guestNameField = form.querySelector('input[name="guestName"]');
  const emailField = form.querySelector('input[name="email"]');
  const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(value);

  if (emailField) {
    emailField.addEventListener('input', () => {
      emailField.setCustomValidity('');
    });
  }

  if (savedResponse) {
    try {
      const values = JSON.parse(savedResponse);
      for (const [key, value] of Object.entries(values)) {
        const field = form.elements.namedItem(key);
        if (field) {
          field.value = value;
        }
      }

      status.textContent = copy.statusRestored;
    } catch {
      window.localStorage.removeItem(RSVP_STORAGE_KEY);
    }
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (guestNameField) {
      guestNameField.value = guestNameField.value.trim();
    }

    if (emailField) {
      emailField.value = emailField.value.trim();

      if (emailField.value && !isValidEmail(emailField.value)) {
        emailField.setCustomValidity(copy.rsvpFields.emailInvalid);
      } else {
        emailField.setCustomValidity('');
      }
    }

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const formData = new FormData(form);
    const response = Object.fromEntries(formData.entries());

    const savedFields = {
      guestName: response.guestName || '',
      email: response.email || '',
      songRequest: response.songRequest || '',
      attendance: response.attendance || '',
      notes: response.notes || ''
    };
    window.localStorage.setItem(RSVP_STORAGE_KEY, JSON.stringify(savedFields));

    const netlifyPayload = new URLSearchParams(response).toString();

    try {
      const submission = await window.fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: netlifyPayload
      });

      status.textContent = submission.ok ? copy.statusSaved : copy.statusError;
    } catch {
      status.textContent = copy.statusError;
    }
  });
};

const initializeApp = () => {
  renderApp();
  initializeLanguageSwitcher();
  initializeHeaderBehavior();
  initializeRevealAnimations();
  initializeCountdown();
  initializeRsvpForm();
};

initializeApp();
