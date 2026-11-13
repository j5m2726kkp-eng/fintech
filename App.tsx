import React from 'react';
import mermaid from 'mermaid';

/* ─── Section 1: Infographic ─── */
function AdoptionInfographic() {
  const adoptionData = [
    { year: '2022', value: 58 },
    { year: '2024', value: 75 },
    { year: '2027 (прогноз)', value: 85 },
  ];

  const marketData = [
    { period: '2023–2025', value: '22–30 млрд $' },
    { period: '2030–2032 (прогноз)', value: '79–94 млрд $' },
  ];

  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Adoption dynamics */}
      <div className="border border-slate-200 rounded-lg p-6">
        <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">
          Динамика внедрения ИИ в финансовых организациях
        </h4>
        <div className="space-y-4">
          {adoptionData.map((d) => (
            <div key={d.year}>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-slate-600">{d.year}</span>
                <span className="font-semibold text-slate-800">{d.value}%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-3">
                <div
                  className="h-3 rounded-full transition-all"
                  style={{
                    width: `${d.value}%`,
                    backgroundColor: d.year === '2027 (прогноз)' ? '#64748b' : '#1e3a5f',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-400 mt-4">Источник: Bank of England & FCA Multilateral Review, ноябрь 2024</p>
      </div>

      {/* Market growth */}
      <div className="border border-slate-200 rounded-lg p-6">
        <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">
          Глобальный рынок ИИ-решений в финтехе
        </h4>
        <div className="space-y-6">
          {marketData.map((d) => (
            <div key={d.period} className="flex items-center gap-4">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-slate-50 border-2 border-slate-200 flex items-center justify-center">
                <span className="text-xs text-slate-500 text-center leading-tight">{d.period.split(' ')[0]}</span>
              </div>
              <div>
                <p className="text-lg font-semibold text-slate-800">{d.value}</p>
                <p className="text-sm text-slate-500">{d.period}</p>
              </div>
            </div>
          ))}
          <div className="pt-2 border-t border-slate-100">
            <p className="text-sm text-slate-600">
              Среднегодовые темпы роста (CAGR): <span className="font-semibold">18–23%</span>
            </p>
          </div>
        </div>
        <p className="text-xs text-slate-400 mt-4">Источник: аналитические агентства, оценки 2023–2025</p>
      </div>
    </div>
  );
}

/* ─── Section 2: Technology Architecture ─── */
function TechArchitecture() {
  const families = [
    {
      name: 'Предиктивное ML',
      examples: ['XGBoost', 'LightGBM', 'Графовые нейросети'],
    },
    {
      name: 'Генеративный ИИ',
      examples: ['Большие языковые модели (LLM)', 'RAG-системы', 'Fine-tuned модели'],
    },
    {
      name: 'Агентные системы',
      examples: ['Reinforcement Learning', 'Multi-agent', 'Автономные агенты'],
    },
  ];

  const patterns = [
    'Fraud Detection & AML',
    'Кредитный скоринг',
    'Автоматизация KYC/KYB',
    'Клиентские и внутренние копайлоты',
    'Алгоритмическая торговля',
    'RegTech',
  ];

  return (
    <div className="mt-8">
      {/* Triangle of model families */}
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        <div className="w-full lg:w-1/2">
          <svg viewBox="0 0 400 340" className="w-full max-w-md mx-auto">
            {/* Triangle */}
            <polygon
              points="200,30 50,290 350,290"
              fill="none"
              stroke="#1e3a5f"
              strokeWidth="2"
            />
            {/* Center label */}
            <text x="200" y="180" textAnchor="middle" className="text-xs" fill="#64748b" fontSize="11">
              Технологическая
            </text>
            <text x="200" y="195" textAnchor="middle" className="text-xs" fill="#64748b" fontSize="11">
              архитектура
            </text>

            {/* Top node - Generative AI */}
            <circle cx="200" cy="30" r="6" fill="#1e3a5f" />
            <text x="200" y="15" textAnchor="middle" fill="#1e3a5f" fontSize="12" fontWeight="600">
              Генеративный ИИ
            </text>

            {/* Bottom left - Predictive ML */}
            <circle cx="50" cy="290" r="6" fill="#1e3a5f" />
            <text x="50" y="315" textAnchor="middle" fill="#1e3a5f" fontSize="12" fontWeight="600">
              Предиктивное ML
            </text>

            {/* Bottom right - Agent systems */}
            <circle cx="350" cy="290" r="6" fill="#1e3a5f" />
            <text x="350" y="315" textAnchor="middle" fill="#1e3a5f" fontSize="12" fontWeight="600">
              Агентные системы
            </text>
          </svg>
        </div>

        <div className="w-full lg:w-1/2 space-y-4">
          <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
            Три семейства моделей
          </h4>
          {families.map((f) => (
            <div key={f.name} className="border-l-2 border-slate-300 pl-4">
              <p className="font-semibold text-slate-800 text-sm">{f.name}</p>
              <ul className="text-sm text-slate-600 mt-1 space-y-0.5">
                {f.examples.map((ex) => (
                  <li key={ex}>• {ex}</li>
                ))}
              </ul>
            </div>
          ))}

          <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wide pt-4">
            Шесть паттернов применения
          </h4>
          <div className="grid grid-cols-2 gap-2">
            {patterns.map((p) => (
              <div key={p} className="bg-slate-50 border border-slate-200 rounded px-3 py-2 text-xs text-slate-700">
                {p}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Section 3: Case Cards ─── */
function CaseCards() {
  const cases = [
    {
      company: 'JPMorgan Chase',
      metric: '1,5–2 млрд $',
      description: 'совокупный эффект ИИ-инициатив ежегодно',
      detail: 'Платформа LLM Suite развёрнута у 200 000+ сотрудников, 175+ use cases в production',
    },
    {
      company: 'Ant Group',
      metric: '99,99%',
      description: 'точность обработки транзакций',
      detail: 'Более 100 млн транзакций в день, снижение потерь от мошенничества на ~80%',
    },
    {
      company: 'Klarna',
      metric: '2,3 млн',
      description: 'диалогов за первый месяц',
      detail: 'ИИ-ассистент обрабатывает 2/3 обращений, среднее время решения: 11 мин → 2 мин',
    },
    {
      company: 'Mastercard / Revolut',
      metric: '×2 / −30%',
      description: 'эффективность детекции / снижение ложных срабатываний',
      detail: 'Mastercard удвоила эффективность детекции fraudulent карт; Revolut сократил false positives на 30%',
    },
  ];

  return (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
      {cases.map((c) => (
        <div key={c.company} className="border border-slate-200 rounded-lg p-6 hover:border-slate-300 transition-colors">
          <div className="flex items-start justify-between mb-3">
            <h4 className="font-semibold text-slate-800 text-base">{c.company}</h4>
            <span className="text-xl font-bold text-slate-700">{c.metric}</span>
          </div>
          <p className="text-sm text-slate-600 mb-2">{c.description}</p>
          <p className="text-xs text-slate-400 leading-relaxed">{c.detail}</p>
        </div>
      ))}
    </div>
  );
}

/* ─── Section 4: Mermaid Container ─── */
const MERMAID_CODE = `mindmap
  root((SOC в банке))
    Роль современного SOC в банке
      Инфраструктура реагирования
      Мониторинг разнородной среды
      Адаптация под изменения технологий
    Мониторинг legacy и микросервисов
      SIEM для legacy
      Принцип "не навреди"
      Falco для контейнеров
      Специфичные события Kubernetes
    Границы ответственности
      Ответственность всегда у банка
      Внешний SOC - глаза снаружи
      Внутренний SOC - глаза и руки
      Плейбуки и SLA
    Взаимодействие и эскалация
      Сквозной процесс ИБ
      Киберучения
      Автоматизация действий
      Договорённости до подключения
    Зрелость процессов
      Единый процесс с внешним SOC
      Унификация реагирования
      Доверие между сторонами`;

function MermaidContainer() {
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    let cancelled = false;

    async function renderDiagram() {
      if (!containerRef.current) return;

      mermaid.initialize({
        startOnLoad: false,
        theme: 'base',
        securityLevel: 'loose',
        themeVariables: {
          primaryColor: '#e2e8f0',
          primaryTextColor: '#1e293b',
          primaryBorderColor: '#94a3b8',
          lineColor: '#64748b',
          secondaryColor: '#f1f5f9',
          tertiaryColor: '#ffffff',
          fontFamily: 'Inter, sans-serif',
          fontSize: '13px',
        },
        mindmap: {
          padding: 16,
          useMaxWidth: true,
        },
      });

      try {
        const id = 'mermaid-mindmap-' + Date.now();
        const { svg, bindFunctions } = await mermaid.render(id, MERMAID_CODE);
        if (!cancelled && containerRef.current) {
          containerRef.current.innerHTML = svg;
          if (bindFunctions) {
            bindFunctions(containerRef.current);
          }
        }
      } catch (err) {
        console.error('Mermaid render error:', err);
        if (!cancelled && containerRef.current) {
          containerRef.current.innerHTML =
            '<p style="color:#991b1b;font-size:0.875rem;text-align:center;">Ошибка рендеринга диаграммы. Проверьте консоль браузера.</p>';
        }
      }
    }

    renderDiagram();
    return () => { cancelled = true; };
  }, []);

  return (
    <div className="mt-8">
      <div
        className="border border-slate-200 rounded-lg p-6 bg-slate-50 overflow-x-auto"
      >
        <div
          ref={containerRef}
          id="mermaid-diagram"
          className="flex justify-center min-h-[200px] items-center"
        />
      </div>
      <p className="text-xs text-slate-400 mt-3 text-center">
        Ментальная карта: структура SOC в банке — от роли и мониторинга до зрелости процессов и взаимодействия с внешним контуром.
      </p>
    </div>
  );
}

/* ─── Section 5: Barriers ─── */
function BarriersList() {
  const barriers = [
    {
      label: 'Качество и доступность данных',
      value: '40–66%',
      source: 'RegTech Analyst, Cambridge CCAF, 2026',
      width: 66,
    },
    {
      label: 'Требования explainability и «галлюцинации» моделей',
      value: '55%',
      source: 'Bank of England/FCA, 2024',
      width: 55,
    },
    {
      label: 'Полностью автономные use cases',
      value: '2%',
      source: 'Bank of England/FCA, 2024',
      width: 5,
    },
    {
      label: 'Регуляторная нагрузка (EU AI Act, Consumer Duty)',
      value: 'значимый',
      source: 'GAO, 2025; EU AI Act',
      width: 45,
    },
    {
      label: 'Зависимость от сторонних foundation models',
      value: 'растущий',
      source: 'BIS FSI, 2024',
      width: 35,
    },
  ];

  return (
    <div className="mt-8 space-y-4">
      {barriers.map((b) => (
        <div key={b.label}>
          <div className="flex justify-between items-baseline mb-1">
            <span className="text-sm text-slate-700">{b.label}</span>
            <span className="text-sm font-semibold text-slate-800 ml-4 flex-shrink-0">{b.value}</span>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-2.5">
            <div
              className="h-2.5 rounded-full bg-slate-600"
              style={{ width: `${b.width}%` }}
            />
          </div>
          <p className="text-xs text-slate-400 mt-0.5">{b.source}</p>
        </div>
      ))}
    </div>
  );
}

/* ─── Section 6: Polarization Diagram ─── */
function PolarizationDiagram() {
  return (
    <div className="mt-8">
      <div className="border border-slate-200 rounded-lg overflow-hidden">
        {/* Leaders strip */}
        <div className="bg-slate-800 text-white p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-slate-300 uppercase tracking-wide">
                ~5% — Технологические лидеры
              </p>
              <p className="text-xs text-slate-400 mt-1">
                JPMorgan Chase, Capital One, RBC, Ant Group
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs bg-slate-700 text-slate-200 px-2 py-1 rounded">AI-native продукты</span>
              <span className="text-xs bg-slate-700 text-slate-200 px-2 py-1 rounded">Multi-agent системы</span>
              <span className="text-xs bg-slate-700 text-slate-200 px-2 py-1 rounded">Enterprise orchestration</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-slate-300 relative">
          <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-white px-3 text-xs text-slate-400">
            разрыв увеличивается
          </span>
        </div>

        {/* Rest of market */}
        <div className="bg-slate-50 p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-slate-600 uppercase tracking-wide">
                ~95% — Основная масса игроков
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Ограниченные пилоты, зависимость от внешних поставщиков, фрагментарное внедрение
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs bg-white border border-slate-200 text-slate-600 px-2 py-1 rounded">Точечные пилоты</span>
              <span className="text-xs bg-white border border-slate-200 text-slate-600 px-2 py-1 rounded">Human-in-the-loop</span>
              <span className="text-xs bg-white border border-slate-200 text-slate-600 px-2 py-1 rounded">Governance-вызовы</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="text-center p-4 bg-slate-50 rounded-lg">
          <p className="text-2xl font-bold text-slate-700">сотни млрд $</p>
          <p className="text-xs text-slate-500 mt-1">потенциал экономии (McKinsey, 2026)</p>
        </div>
        <div className="text-center p-4 bg-slate-50 rounded-lg">
          <p className="text-2xl font-bold text-slate-700">2–3 года</p>
          <p className="text-xs text-slate-500 mt-1">горизонт прогноза поляризации</p>
        </div>
        <div className="text-center p-4 bg-slate-50 rounded-lg">
          <p className="text-2xl font-bold text-slate-700">~5%</p>
          <p className="text-xs text-slate-500 mt-1">достигнут зрелый уровень (Deloitte, 2027)</p>
        </div>
      </div>
    </div>
  );
}

/* ─── Section 7: Open Questions ─── */
function OpenQuestions() {
  const questions = [
    {
      text: 'Каковы регуляторные последствия поляризации рынка, когда 5% организаций концентрируют непропорциональную долю преимуществ от ИИ?',
      context: 'McKinsey Global Banking Annual Review, 2026; Deloitte Financial Services Outlooks, 2027',
    },
    {
      text: 'Как обеспечить этичность алгоритмического скоринга при сохранении эффективности моделей и соблюдении требований explainability?',
      context: 'GAO Report on AI in Financial Services, 2025; EU AI Act requirements',
    },
    {
      text: 'Где проходит граница между допустимой автономностью агентных систем и необходимым контролем человека в критических финансовых процессах?',
      context: 'BIS FSI Analysis on AI Governance, 2024; Bank of England/FCA Review, 2024',
    },
  ];

  return (
    <div className="mt-8 space-y-6">
      {questions.map((q, i) => (
        <blockquote
          key={i}
          className="border-l-4 border-slate-300 pl-6 py-3 bg-slate-50 rounded-r-lg pr-6"
        >
          <p className="text-slate-700 text-base leading-relaxed italic">
            «{q.text}»
          </p>
          <footer className="mt-2 text-xs text-slate-400">
            — {q.context}
          </footer>
        </blockquote>
      ))}
    </div>
  );
}

/* ─── Main App ─── */
export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6 py-12 sm:py-16">
          <p className="text-xs uppercase tracking-widest text-slate-400 mb-3">
            Академическая презентация
          </p>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 leading-tight">
            Искусственный интеллект в финансовом секторе: масштаб, архитектура и перспективы
          </h1>
          <p className="mt-4 text-slate-500 text-sm max-w-2xl">
            Обзор технологических подходов, эмпирических результатов внедрения и системных барьеров масштабирования ИИ в регулируемых финансовых организациях
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12 space-y-20">
        {/* Section 1 */}
        <section>
          <SectionNumber num="1" />
          <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-4">
            Контекст и масштаб явления
          </h2>
          <p className="text-slate-600 leading-relaxed">
            По данным совместного обзора Банка Англии и FCA (ноябрь 2024), 75% регулируемых финансовых организаций уже используют ИИ, ещё 10% планируют внедрение в ближайшие три года — против 58% в 2022 году. Глобальный рынок решений на базе ИИ в финтехе оценивался в 22–30 млрд долл. в 2023–2025 годах и, по прогнозам аналитических агентств, может достичь 79–94 млрд долл. к 2030–2032 годам при среднегодовых темпах роста 18–23%. Эти цифры фиксируют переход ИИ из разряда экспериментальных технологий в инфраструктурный элемент финансового сектора.
          </p>
          <AdoptionInfographic />
        </section>

        {/* Section 2 */}
        <section>
          <SectionNumber num="2" />
          <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-4">
            Технологическая архитектура финтеха
          </h2>
          <p className="text-slate-600 leading-relaxed">
            В современной практике выделяются три семейства моделей: предиктивное машинное обучение (XGBoost, LightGBM, графовые нейросети), генеративный ИИ на базе больших языковых моделей и агентные системы с reinforcement learning. Они комбинируются в шести устойчивых паттернах применения: fraud detection и AML, кредитный скоринг, автоматизация KYC/KYB, клиентские и внутренние копайлоты, алгоритмическая торговля и RegTech. Наибольшие текущие выгоды респонденты опроса Bank of England связывают с аналитикой данных, противодействием мошенничеству и кибербезопасностью.
          </p>
          <TechArchitecture />
        </section>

        {/* Section 3 */}
        <section>
          <SectionNumber num="3" />
          <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-4">
            Эмпирические кейсы и измеримые результаты
          </h2>
          <p className="text-slate-600 leading-relaxed">
            JPMorgan Chase развернул платформу LLM Suite более чем у 200 тысяч сотрудников, совокупный эффект ИИ-инициатив оценивается в 1,5–2 млрд долл. ежегодно при 175+ use cases в production. Система Ant Group обрабатывает свыше 100 млн транзакций в день с точностью 99,99%, сократив потери от мошенничества примерно на 80%. ИИ-ассистент Klarna за первый месяц обработал 2,3 млн диалогов (две трети обращений), снизив среднее время решения запроса с 11 до 2 минут. Дополнительно Mastercard сообщила об удвоении эффективности детекции мошеннических карт, а Revolut — о снижении доли ложных срабатываний на 30%.
          </p>
          <CaseCards />
        </section>

        {/* Section 4 */}
        <section>
          <SectionNumber num="4" />
          <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-4">
            Диаграмма связей между темами исследования
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Визуализация отражает системную связь четырёх аспектов исследования: технологические подходы формируют основу для конкретных кейсов внедрения, которые, в свою очередь, выявляют операционные и регуляторные барьеры. Эти барьеры определяют траекторию развития на горизонте 2–3 лет, включая переход к агентным системам и AI-native продуктам. Обратные связи показывают, как прогнозы зрелости внедрения влияют на выбор технологий и дизайн новых кейсов. Такой граф позволяет увидеть исследование как целостную систему, а не как набор разрозненных наблюдений.
          </p>
          <MermaidContainer />
        </section>

        {/* Section 5 */}
        <section>
          <SectionNumber num="5" />
          <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-4">
            Барьеры масштабирования и проблема доверия
          </h2>
          <p className="text-slate-600 leading-relaxed">
            От 40% до 66% организаций называют качество и доступность данных ведущим барьером масштабирования (RegTech Analyst, Cambridge CCAF, 2026). В опросе Bank of England/FCA 2024 года лишь 2% use cases оказались полностью автономными, а в 55% случаев финальное решение оставалось за человеком из-за требований explainability и рисков «галлюцинаций» моделей. Дополнительно фиксируются регуляторная нагрузка (EU AI Act, Consumer Duty), алгоритмическая предвзятость (GAO, 2025) и зависимость от сторонних foundation models. Эти ограничения объясняют разрыв между лабораторными результатами и производственной эксплуатацией.
          </p>
          <BarriersList />
        </section>

        {/* Section 6 */}
        <section>
          <SectionNumber num="6" />
          <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-4">
            Прогноз поляризации рынка (2026–2028/29)
          </h2>
          <p className="text-slate-600 leading-relaxed">
            McKinsey (Global Banking Annual Review 2026) оценивает потенциал экономии банков от дисциплинированного внедрения ИИ в сотни миллиардов долларов в глобальном масштабе. Deloitte (2027 Financial Services Outlooks) фиксирует сдвиг к AI-native продуктам и enterprise-wide orchestration, однако лишь около 5% организаций достигнут зрелого уровня внедрения. Ключевые тренды включают рост multi-agent систем, усиление требований к governance и human-in-the-loop, интеграцию ИИ с токенизацией активов. При этом разрыв между технологическими лидерами (JPMorgan Chase, Capital One, RBC) и основной массой игроков будет увеличиваться.
          </p>
          <PolarizationDiagram />
        </section>

        {/* Section 7 */}
        <section>
          <SectionNumber num="7" />
          <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-4">
            Итоговые выводы и направления для дискуссии
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Исследование показывает, что ИИ перешёл из стадии пилотов в фазу масштабирования, однако переход блокируется качеством данных, регуляторной неопределённостью и требованиями прозрачности. Регуляторы большинства стран, согласно анализу BIS FSI (2024), предпочитают дополнять существующие рамки точечными требованиями, а не вводить новые режимы. Для научной дискуссии остаются открытыми вопросы о регуляторных последствиях поляризации рынка, этике алгоритмического скоринга и балансе между автономностью агентных систем и контролем человека.
          </p>
          <OpenQuestions />
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 mt-12">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <p className="text-xs text-slate-400">
            Источники: Bank of England & FCA Multilateral Review (2024), McKinsey Global Banking Annual Review (2026), Deloitte Financial Services Outlooks (2027), BIS FSI (2024), GAO (2025), RegTech Analyst, Cambridge CCAF (2026).
          </p>
        </div>
      </footer>
    </div>
  );
}

/* ─── Helper: Section Number ─── */
function SectionNumber({ num }: { num: string }) {
  return (
    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-slate-100 text-slate-500 text-xs font-semibold mb-3">
      {num}
    </span>
  );
}
