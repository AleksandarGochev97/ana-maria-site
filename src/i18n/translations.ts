export type Language = "bg" | "en" | "it";

export type Translations = Record<string, Record<Language, string>>;

export const translations: Translations = {
  // Navbar
  "nav.home": { bg: "НАЧАЛО", en: "HOME", it: "HOME" },
  "nav.about": { bg: "ЗА МЕН", en: "ABOUT", it: "CHI SONO" },
  "nav.performances": { bg: "ИЗПЪЛНЕНИЯ", en: "PERFORMANCES", it: "ESIBIZIONI" },
  "nav.teaching": { bg: "ОБУЧЕНИЕ", en: "TEACHING", it: "LEZIONI" },
  "nav.gallery": { bg: "ГАЛЕРИЯ", en: "GALLERY", it: "GALLERIA" },
  "nav.contact": { bg: "КОНТАКТИ", en: "CONTACT", it: "CONTATTI" },
  "nav.subtitle": {
    bg: "Оперна певица • Флейтист • Пианист",
    en: "Opera singer • Flautist • Pianist",
    it: "Cantante lirica • Flautista • Pianista",
  },
  "nav.cta.performance": {
    bg: "Запитване за участие",
    en: "Performance inquiry",
    it: "Richiesta per evento",
  },
  "nav.cta.lesson": { bg: "Запази час", en: "Book a lesson", it: "Prenota una lezione" },
  "nav.mobile.open": { bg: "Отвори меню", en: "Open menu", it: "Apri menu" },
  "nav.mobile.close": { bg: "Затвори меню", en: "Close menu", it: "Chiudi menu" },

  // Hero
  "hero.roles": { bg: "ОПЕРНА ПЕВИЦА", en: "OPERA SINGER", it: "CANTANTE LIRICA" },
  "hero.roles.flute": { bg: "ФЛЕЙТИСТ", en: "FLAUTIST", it: "FLAUTISTA" },
  "hero.roles.piano": { bg: "ПИАНИСТ", en: "PIANIST", it: "PIANISTA" },
  "hero.line1": { bg: "Глас от Операта.", en: "A voice from the Opera.", it: "Una voce dall'Opera." },
  "hero.line2": {
    bg: "Душа във флейтата.",
    en: "A soul within the flute.",
    it: "Un'anima nel flauto.",
  },
  "hero.line3": {
    bg: "Цял живот в изкуството.",
    en: "A lifetime devoted to art.",
    it: "Una vita dedicata all'arte.",
  },
  "hero.cta.performances": { bg: "ИЗПЪЛНЕНИЯ", en: "PERFORMANCES", it: "ESIBIZIONI" },
  "hero.cta.book": { bg: "РЕЗЕРВИРАЙ", en: "BOOK", it: "PRENOTA" },

  // About
  "about.title": { bg: "За Ана-Мария", en: "About Ana-Maria", it: "Su Ana-Maria" },
  "about.body": {
    bg: "Ана-Мария Крайчева е флейтист, оперна певица и пианист с над 20 години опит. Със съчетание от сценично присъствие, музикална елегантност и педагогически подход, тя изгражда репертоар и ученици с внимание към стила, техниката и артистичния разказ.",
    en: "Ana-Maria Kraycheva is a flautist, opera singer, and pianist with over 20 years of experience. With stage presence, musical elegance, and a pedagogical approach, she builds repertoire and students with attention to style, technique, and artistic storytelling.",
    it: "Ana-Maria Kraycheva è flautista, cantante lirica e pianista con oltre 20 anni di esperienza. Con presenza scenica, eleganza musicale e un approccio didattico, costruisce repertorio e allievi con attenzione allo stile, alla tecnica e al racconto artistico.",
  },
  "about.highlights": { bg: "АКЦЕНТИ", en: "HIGHLIGHTS", it: "IN EVIDENZA" },
  "about.edu": { bg: "Образование", en: "Education", it: "Formazione" },
  "about.edu.body": {
    bg: "3 висши образования в областта на музиката (детайлите могат да се добавят по-късно).",
    en: "3 higher education degrees in music (details can be added later).",
    it: "3 titoli universitari in ambito musicale (i dettagli possono essere aggiunti in seguito).",
  },
  "about.lang": { bg: "Езици", en: "Languages", it: "Lingue" },
  "about.lang.body": {
    bg: "Български • Италиански • Английски",
    en: "Bulgarian • Italian • English",
    it: "Bulgaro • Italiano • Inglese",
  },
  "about.work": { bg: "Работа", en: "Work", it: "Attività" },
  "about.work.body": {
    bg: "Изпълнения, камерни проекти и преподаване по флейта, пиано, солфеж и оперно пеене.",
    en: "Performances, chamber projects, and teaching flute, piano, solfège, and opera singing.",
    it: "Esibizioni, progetti cameristici e insegnamento di flauto, pianoforte, solfeggio e canto lirico.",
  },

  // Education
  "education.title": { bg: "Образование и опит", en: "Education & Experience", it: "Formazione ed esperienza" },
  "education.body": {
    bg: "Дългогодишна сцена и педагогика, подкрепени от академична подготовка. Тук секцията е тестова – можем да добавим точните специалности, университети и години.",
    en: "Years of stage work and teaching supported by academic training. This section is a draft — we can add exact majors, universities, and years.",
    it: "Anni di palcoscenico e didattica, supportati da formazione accademica. Questa sezione è provvisoria — possiamo aggiungere specializzazioni, università e anni.",
  },
  "education.exp": { bg: "ОПИТ", en: "EXPERIENCE", it: "ESPERIENZA" },
  "education.exp.years": { bg: "20+ години", en: "20+ years", it: "20+ anni" },
  "education.exp.body": {
    bg: "Изпълнения, проекти и преподаване с внимание към стил, музикална култура и артистично присъствие.",
    en: "Performances, projects, and teaching with attention to style, musical culture, and artistic presence.",
    it: "Esibizioni, progetti e insegnamento con attenzione allo stile, alla cultura musicale e alla presenza artistica.",
  },
  "education.item1": { bg: "Висше образование 1", en: "Higher education 1", it: "Formazione superiore 1" },
  "education.item1.body": { bg: "(тестово) Фокус: класическа музика / инструмент / вокал", en: "(draft) Focus: classical music / instrument / voice", it: "(bozza) Focus: musica classica / strumento / canto" },
  "education.item2": { bg: "Висше образование 2", en: "Higher education 2", it: "Formazione superiore 2" },
  "education.item2.body": { bg: "(тестово) Фокус: педагогика / музикална теория", en: "(draft) Focus: pedagogy / music theory", it: "(bozza) Focus: pedagogia / teoria musicale" },
  "education.item3": { bg: "Висше образование 3", en: "Higher education 3", it: "Formazione superiore 3" },
  "education.item3.body": { bg: "(тестово) Фокус: специализация / майсторски класове", en: "(draft) Focus: specialization / masterclasses", it: "(bozza) Focus: specializzazione / masterclass" },

  // Performances
  "performances.title": { bg: "Изпълнения", en: "Performances", it: "Esibizioni" },
  "performances.body": {
    bg: "Подбрани видео записи. По-късно можем да добавим още изпълнения, програми, участия и архив.",
    en: "Selected video recordings. Later we can add more performances, programs, events, and an archive.",
    it: "Video selezionati. In seguito possiamo aggiungere altre esibizioni, programmi, eventi e un archivio.",
  },
  "performances.prev": { bg: "Предишно видео", en: "Previous video", it: "Video precedente" },
  "performances.next": { bg: "Следващо видео", en: "Next video", it: "Video successivo" },
  "performances.play": { bg: "Пусни:", en: "Play:", it: "Riproduci:" },

  // Teaching
  "teaching.title": { bg: "Уроци в София", en: "Lessons in Sofia", it: "Lezioni a Sofia" },
  "teaching.body.before": {
    bg: "Уроци, изградени върху класическа школа и ясна структура: техника, музикалност, сценично присъствие. Занятията са ",
    en: "Lessons built on classical training and clear structure: technique, musicality, stage presence. Lessons are ",
    it: "Lezioni basate su formazione classica e struttura chiara: tecnica, musicalità, presenza scenica. Le lezioni sono ",
  },
  "teaching.body.inPerson": { bg: "само присъствено", en: "in-person only", it: "solo in presenza" },
  "teaching.disciplines": { bg: "ДИСЦИПЛИНИ", en: "DISCIPLINES", it: "DISCIPLINE" },
  "teaching.disciplines.body": { bg: "Флейта • Пиано • Солфеж • Оперно пеене", en: "Flute • Piano • Solfège • Opera singing", it: "Flauto • Pianoforte • Solfeggio • Canto lirico" },
  "teaching.disciplines.sub": { bg: "Фокус върху стабилни основи и репертоар, съобразен с възрастта и целите.", en: "Focus on solid foundations and repertoire tailored to age and goals.", it: "Focus su basi solide e repertorio adattato all'età e agli obiettivi." },
  "teaching.forWho": { bg: "ЗА КОГО", en: "FOR WHOM", it: "PER CHI" },
  "teaching.forWho.body": { bg: "Начинаещи и напреднали", en: "Beginners and advanced", it: "Principianti e avanzati" },
  "teaching.forWho.sub": { bg: "Деца, ученици, студенти и възрастни — с индивидуален план и ясна обратна връзка.", en: "Children, students, and adults — with an individual plan and clear feedback.", it: "Bambini, studenti e adulti — con un piano individuale e feedback chiaro." },
  "teaching.prep": { bg: "ПОДГОТОВКА", en: "PREPARATION", it: "PREPARAZIONE" },
  "teaching.prep.body": { bg: "Изпити • конкурси • прослушвания", en: "Exams • competitions • auditions", it: "Esami • concorsi • audizioni" },
  "teaching.prep.sub": { bg: "Подготовка за конкретна цел — програма, темпо на работа и сценична практика.", en: "Preparation for a clear goal — program, working pace, and stage practice.", it: "Preparazione per un obiettivo preciso — programma, ritmo di lavoro e pratica scenica." },
  "teaching.cta.book": { bg: "Запази час", en: "Book a lesson", it: "Prenota una lezione" },
  "teaching.cta.ask": { bg: "Задай въпрос", en: "Ask a question", it: "Fai una domanda" },
  "teaching.practical": { bg: "ПРАКТИЧНО", en: "PRACTICAL", it: "PRATICO" },
  "teaching.practical.title": { bg: "Свободни часове", en: "Available slots", it: "Orari disponibili" },
  "teaching.practical.body": { bg: "Пиши ми в контакт формата — ще върна отговор с възможни дни и часове.", en: "Message me in the contact form — I will reply with possible days and times.", it: "Scrivimi nel modulo contatti — risponderò con giorni e orari possibili." },

  // Gallery
  "gallery.title": { bg: "Галерия", en: "Gallery", it: "Galleria" },
  "gallery.body": { bg: "Тестова галерия. По-късно ще я заменим с професионални снимки от сцена, репетиции и проекти.", en: "Demo gallery. Later we will replace it with professional photos from stage, rehearsals, and projects.", it: "Galleria demo. In seguito la sostituiremo con foto professionali da palco, prove e progetti." },

  // Contact
  "contact.title": { bg: "Запитване", en: "Inquiry", it: "Richiesta" },
  "contact.intro": {
    bg: "Избери повод и изпрати кратко запитване. Отговарям с възможни часове или с уточняващи въпроси.",
    en: "Choose a reason and send a short inquiry. I reply with available times or follow-up questions.",
    it: "Scegli il motivo e invia una breve richiesta. Rispondo con orari disponibili o domande di chiarimento.",
  },
  "contact.tab.lessons": { bg: "УРОЦИ", en: "LESSONS", it: "LEZIONI" },
  "contact.tab.performances": { bg: "УЧАСТИЯ", en: "EVENTS", it: "EVENTI" },
  "contact.name": { bg: "ИМЕ", en: "NAME", it: "NOME" },
  "contact.name.placeholder": { bg: "Вашето име", en: "Your name", it: "Il tuo nome" },
  "contact.email": { bg: "ИМЕЙЛ", en: "EMAIL", it: "EMAIL" },
  "contact.instrument": { bg: "ВИД УРОК", en: "LESSON TYPE", it: "TIPO DI LEZIONE" },
  "contact.instrument.flute": { bg: "Флейта", en: "Flute", it: "Flauto" },
  "contact.instrument.piano": { bg: "Пиано", en: "Piano", it: "Pianoforte" },
  "contact.instrument.opera": { bg: "Оперно пеене", en: "Opera singing", it: "Canto lirico" },
  "contact.instrument.solfege": { bg: "Солфеж", en: "Solfège", it: "Solfeggio" },
  "contact.level": { bg: "НИВО", en: "LEVEL", it: "LIVELLO" },
  "contact.level.beginner": { bg: "Начинаещ", en: "Beginner", it: "Principiante" },
  "contact.level.intermediate": { bg: "Средно", en: "Intermediate", it: "Intermedio" },
  "contact.level.advanced": { bg: "Напреднал", en: "Advanced", it: "Avanzato" },
  "contact.pref": { bg: "ПРЕДПОЧИТАНИ ДНИ/ЧАСОВЕ", en: "PREFERRED DAYS/TIMES", it: "GIORNI/ORARI PREFERITI" },
  "contact.date": { bg: "ДАТА", en: "DATE", it: "DATA" },
  "contact.slots": { bg: "СВОБОДНИ ЧАСОВЕ", en: "AVAILABLE TIMES", it: "ORARI DISPONIBILI" },
  "contact.other": { bg: "ДРУГО (ОПЦИОНАЛНО)", en: "OTHER (OPTIONAL)", it: "ALTRO (OPZIONALE)" },
  "contact.other.placeholder": { bg: "Напр. само събота, или след 17:30", en: "e.g. only Saturdays or after 17:30", it: "es. solo sabato o dopo le 17:30" },
  "contact.chosen": { bg: "Избрано:", en: "Selected:", it: "Selezionati:" },
  "contact.loading": { bg: "Зареждане на заетост...", en: "Loading availability...", it: "Caricamento disponibilità..." },
  "contact.performance.location": { bg: "ЛОКАЦИЯ/ГРАД", en: "LOCATION/CITY", it: "LUOGO/CITTÀ" },
  "contact.performance.location.placeholder": { bg: "Напр. София, клуб/сцена", en: "e.g. Sofia, venue/stage", it: "es. Sofia, locale/palco" },
  "contact.performance.time": { bg: "ЧАС (НАЧАЛО)", en: "TIME (START)", it: "ORARIO (INIZIO)" },
  "contact.performance.busy": { bg: "Този час вече е зает за избраната дата.", en: "This time is already taken for the selected date.", it: "Questo orario è già occupato per la data selezionata." },
  "contact.performance.format": { bg: "ФОРМАТ", en: "FORMAT", it: "FORMATO" },
  "contact.performance.format.placeholder": { bg: "Сватба / събитие / концерт / заведение", en: "Wedding / event / concert / venue", it: "Matrimonio / evento / concerto / locale" },
  "contact.message": { bg: "СЪОБЩЕНИЕ", en: "MESSAGE", it: "MESSAGGIO" },
  "contact.message.placeholder.lessons": { bg: "Цел, възраст (ако е дете), предишен опит и предпочитани часове...", en: "Goal, age (if child), previous experience, and preferred times...", it: "Obiettivo, età (se bambino), esperienza precedente e orari preferiti..." },
  "contact.message.placeholder.performances": { bg: "Повод, програма/стил, технически изисквания и бюджет/условия (ако има)...", en: "Occasion, program/style, technical requirements and budget/conditions (if any)...", it: "Occasione, programma/stile, requisiti tecnici e budget/condizioni (se presenti)..." },
  "contact.submit.lesson": { bg: "Изпрати запитване за урок", en: "Send lesson inquiry", it: "Invia richiesta lezione" },
  "contact.submit.performance": { bg: "Изпрати запитване за участие", en: "Send performance inquiry", it: "Invia richiesta evento" },
  "contact.ok": { bg: "Запитването е записано. Очаквай отговор.", en: "Your inquiry has been saved. Expect a reply.", it: "La tua richiesta è stata salvata. Attendi una risposta." },
  "contact.note": { bg: "Формата записва заявка (pending). При готовност ще добавим админ панел и известяване по имейл.", en: "The form saves a request (pending). Later we will add an admin panel and email notifications.", it: "Il modulo salva una richiesta (in attesa). In seguito aggiungeremo un pannello admin e notifiche email." },

  // Validation / errors
  "err.name": { bg: "Моля, въведи име.", en: "Please enter a name.", it: "Inserisci il nome." },
  "err.email": { bg: "Моля, въведи имейл.", en: "Please enter an email.", it: "Inserisci l'email." },
  "err.date": { bg: "Моля, избери дата.", en: "Please select a date.", it: "Seleziona una data." },
  "err.time": { bg: "Моля, избери час.", en: "Please select a time.", it: "Seleziona un orario." },
  "err.location": { bg: "Моля, въведи локация/град.", en: "Please enter a location/city.", it: "Inserisci luogo/città." },
  "err.format": { bg: "Моля, въведи формат.", en: "Please enter a format.", it: "Inserisci il formato." },
  "err.busy.one": { bg: "Този час вече е зает. Избери друг.", en: "This time is already booked. Choose another.", it: "Questo orario è già prenotato. Scegline un altro." },
  "err.busy.multi": { bg: "Един или повече от избраните часове вече са заети. Избери други.", en: "One or more selected times are already booked. Choose others.", it: "Uno o più orari selezionati sono già occupati. Scegline altri." },
  "err.max3": { bg: "Можеш да избереш до 3 часа наведнъж.", en: "You can select up to 3 time slots at once.", it: "Puoi selezionare fino a 3 orari alla volta." },
  "err.supabase": { bg: "Supabase не е конфигуриран. Добави VITE_SUPABASE_URL и VITE_SUPABASE_ANON_KEY.", en: "Supabase is not configured. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.", it: "Supabase non è configurato. Aggiungi VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY." },
  "err.slot.taken": { bg: "Този слот вече е зает. Избери друга дата или час.", en: "This slot is already taken. Choose another date or time.", it: "Questo slot è già occupato. Scegli un'altra data o orario." },
  "err.save": { bg: "Грешка при запазване.", en: "Error saving.", it: "Errore durante il salvataggio." },
  "err.load": { bg: "Грешка при зареждане на заетостта.", en: "Error loading availability.", it: "Errore nel caricamento della disponibilità." },

  // Footer
  "footer.subtitle": { bg: "Флейтист • Оперна певица • Пианист", en: "Flautist • Opera singer • Pianist", it: "Flautista • Cantante lirica • Pianista" },
  "footer.contact": { bg: "КОНТАКТ", en: "CONTACT", it: "CONTATTI" },
  "footer.rights": { bg: "Всички права запазени.", en: "All rights reserved.", it: "Tutti i diritti riservati." },
};
