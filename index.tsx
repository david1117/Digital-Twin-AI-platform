/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// --- DATA STRUCTURES ---
interface Case {
  id: number;
  title: string;
  industry: string;
  image: string;
  summary: string;
  background: string;
  solution: string;
  techStack: string[];
  results: string;
}

// --- STATIC DATA (Based on PRD) ---

const cases: Case[] = [
  {
    id: 1,
    title: '智慧工廠產線效能優化',
    industry: '製造業',
    image: 'https://images.unsplash.com/photo-1567789884554-0b844b597180?q=80&w=600&h=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    summary: '透過建立即時同步的產線數位孿生，成功預測設備故障，提升產能 15%。',
    background: '一家領先的汽車零件製造商面臨著因產線意外停機而導致的巨大損失。他們需要一個解決方案來預測設備故障並優化維護排程。',
    solution: '我們為其核心產線建立了一個高擬真度的數位孿生模型。該模型整合了來自 IoT 感測器的即時數據（溫度、震動、壓力），並利用機器學習演算法來分析運作模式，預測潛在的故障點。',
    techStack: ['IoT Sensors', 'Azure Digital Twins', 'Machine Learning', 'Data Analytics'],
    results: '成功將非計畫性停機時間減少了 70%，整體設備效率 (OEE) 提升了 15%，並將年度維護成本降低了 20%。',
  },
  {
    id: 2,
    title: '城市交通流量即時模擬與管理',
    industry: '智慧城市',
    image: 'https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?q=80&w=600&h=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    summary: '為市中心建立交通數位孿生，透過模擬與紅綠燈智慧調控，尖峰時段通勤時間減少 12%。',
    background: '某大都會市中心長期受到交通壅塞的困擾，尤其是在上下班尖峰時段。傳統的交通號誌控制系統已無法應對複雜的車流變化。',
    solution: '開發了一個涵蓋全市主要道路的交通數位孿生平台。平台整合了即時車流數據、公共運輸資訊和天氣狀況，能模擬不同交通情境下的流量變化。市政管理者可在此平台上測試新的交通策略，並部署 AI 驅動的號誌燈智慧調整演算法。',
    techStack: ['GIS Data', 'Real-time Traffic Sensors', 'NVIDIA Omniverse', 'AI Simulation'],
    results: '尖峰時段的平均通勤時間縮短了 12%，道路壅塞指數下降了 18%，與交通相關的碳排放量也減少了 5%。',
  },
  {
    id: 3,
    title: '手術規劃與模擬的個人化醫療',
    industry: '醫療保健',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=600&h=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    summary: '利用患者 MRI 數據建立心臟數位孿生，讓外科醫生能進行術前模擬，手術成功率顯著提升。',
    background: '複雜的心臟外科手術對精準度要求極高，傳統上醫生主要依賴 2D 影像和經驗進行規劃，存在不確定性。',
    solution: '我們開發了一套系統，能將患者的 MRI 和 CT 掃描數據自動轉換為一個功能性的 3D 心臟數位孿生。外科醫生可以在虛擬環境中對這個模型進行互動、解剖和模擬不同的手術入路，從而制定出最佳的手術方案。',
    techStack: ['Medical Imaging (MRI/CT)', '3D Modeling', 'VR Simulation', 'Biomechanical Analysis'],
    results: '手術規劃時間平均減少 30%，重大併發症的風險降低了 22%，並為年輕醫生的培訓提供了寶貴的工具。',
  },
  {
    id: 4,
    title: '風力發電場運營與維護優化',
    industry: '能源',
    image: 'https://images.unsplash.com/photo-1508212323595-65b95c3a3469?q=80&w=600&h=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    summary: '為離岸風力發電場建立數位孿生，精準預測發電量並優化維護，年發電量提升 8%。',
    background: '離岸風力發電場的運營和維護成本高昂。如何根據天氣變化最大化發電效率，並在惡劣海象下安排維護，是一個重大挑戰。',
    solution: '為整個風場的每一台風機都建立了數位孿生模型。模型整合了即時氣象數據、風機自身的感測器數據和電網需求，能夠精準預測未來 48 小時的發電量，並對各個組件的健康狀況進行評分，建議最佳的維護窗口。',
    techStack: ['SCADA Systems', 'Weather Prediction APIs', 'Asset Performance Management (APM)', 'Predictive Maintenance'],
    results: '發電量預測的準確度達到 95% 以上，年發電量提升了 8%，維護成本降低了 15%。',
  },
  {
    id: 5,
    title: '大型建築生命週期管理平台',
    industry: '建築',
    image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=600&h=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    summary: '透過整合 BIM 和 IoT 的數位孿生，實現了從設計、施工到運營的全程監控與管理。',
    background: '大型公共建築（如機場、醫院）的設計和施工過程複雜，資訊孤島嚴重，導致超支和延期。建成後的運營管理也缺乏統一的數據視圖。',
    solution: '建立了一個基於建築資訊模型 (BIM) 的數位孿生平台。在施工階段，平台整合了進度、成本和安全數據；在運營階段，整合了能源、安防和空間使用率等 IoT 數據，為管理者提供了一個統一的決策儀表板。',
    techStack: ['Building Information Modeling (BIM)', 'IoT (Energy, Security)', 'Cloud Computing', 'Facility Management Software'],
    results: '施工階段的材料浪費減少了 10%，運營階段的能源消耗降低了 25%，空間使用效率提升了 15%。',
  }
];

// --- DOM Element Selection ---

const searchInput = document.getElementById('search-input') as HTMLInputElement;
const filterNav = document.getElementById('filter-nav');
const caseGrid = document.getElementById('case-grid');
const caseDetailView = document.getElementById('case-detail');
const detailContent = document.getElementById('detail-content');
const backBtn = document.getElementById('back-btn');
const mainHeader = document.querySelector('header');

// --- RENDER FUNCTIONS ---

/**
 * Renders the filter buttons based on unique industries from the data.
 */
function renderFilters() {
  if (!filterNav) return;
  const industries = ['全部', ...Array.from(new Set(cases.map(c => c.industry)))];
  filterNav.innerHTML = industries.map(industry =>
    `<button class="filter-btn" data-industry="${industry}">${industry}</button>`
  ).join('');

  // Set the first button ("全部") as active by default
  const firstButton = filterNav.querySelector('.filter-btn');
  if (firstButton) {
    firstButton.classList.add('active');
  }
}

/**
 * Renders the case cards in the grid.
 * @param {Case[]} casesToRender - An array of case objects to display.
 */
function renderGrid(casesToRender: Case[]) {
  if (!caseGrid) return;
  caseGrid.innerHTML = casesToRender.map(caseItem => `
    <div class="case-card" data-id="${caseItem.id}">
      <img src="${caseItem.image}" alt="${caseItem.title}">
      <div class="card-content">
        <span class="tag">${caseItem.industry}</span>
        <h3>${caseItem.title}</h3>
        <p>${caseItem.summary}</p>
      </div>
    </div>
  `).join('');
}

/**
 * Renders the detailed view for a specific case.
 * @param {number} caseId - The ID of the case to display.
 */
function renderDetail(caseId: number) {
  const caseItem = cases.find(c => c.id === caseId);
  if (!caseItem || !detailContent) return;

  detailContent.innerHTML = `
    <img src="${caseItem.image}" alt="${caseItem.title}" class="detail-hero-image">
    <h2>${caseItem.title}</h2>
    <span class="detail-tag">${caseItem.industry}</span>
    <h4>專案背景</h4>
    <p>${caseItem.background}</p>
    <h4>解決方案</h4>
    <p>${caseItem.solution}</p>
    <h4>技術架構</h4>
    <ul>
      ${caseItem.techStack.map(tech => `<li>${tech}</li>`).join('')}
    </ul>
    <h4>成果展示</h4>
    <p>${caseItem.results}</p>
  `;
}

// --- VIEW MANAGEMENT ---

/**
 * Shows the grid view and hides the detail view.
 */
function showGridView() {
  if (caseGrid && caseDetailView && filterNav && mainHeader && searchInput) {
    caseDetailView.classList.add('hidden');
    caseGrid.classList.remove('hidden');
    filterNav.parentElement.classList.remove('hidden');
    mainHeader.classList.remove('hidden');
  }
}

/**
 * Shows the detail view for a case and hides the grid view.
 * @param {number} caseId - The ID of the case to show.
 */
function showDetailView(caseId: number) {
  if (caseGrid && caseDetailView && filterNav && mainHeader && searchInput) {
    renderDetail(caseId);
    caseGrid.classList.add('hidden');
    filterNav.parentElement.classList.add('hidden');
    mainHeader.classList.add('hidden');
    caseDetailView.classList.remove('hidden');
    window.scrollTo(0, 0);
  }
}


// --- EVENT LISTENERS & FILTERING LOGIC ---

/**
 * A centralized function to filter and render the grid based on
 * the current active industry filter and search term.
 */
function applyFilters() {
    const activeFilter = document.querySelector('.filter-btn.active') as HTMLElement;
    const selectedIndustry = activeFilter ? activeFilter.dataset.industry : '全部';
    const searchTerm = searchInput.value.toLowerCase().trim();

    let filteredCases = cases;

    // 1. Filter by industry
    if (selectedIndustry && selectedIndustry !== '全部') {
        filteredCases = filteredCases.filter(c => c.industry === selectedIndustry);
    }

    // 2. Filter by search term
    if (searchTerm) {
        filteredCases = filteredCases.filter(c => {
            const searchCorpus = [
                c.title,
                c.summary,
                c.background,
                c.solution,
                c.results,
                ...c.techStack
            ].join(' ').toLowerCase();
            return searchCorpus.includes(searchTerm);
        });
    }

    renderGrid(filteredCases);
}

/**
 * Handles clicks on the filter navigation.
 * @param {Event} e - The click event.
 */
function handleFilterClick(e: Event) {
  const target = e.target as HTMLElement;
  if (target.matches('.filter-btn')) {
    // Update active button state
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    target.classList.add('active');
    applyFilters();
  }
}

/**
 * Handles clicks on the case grid (event delegation).
 * @param {Event} e - The click event.
 */
function handleGridClick(e: Event) {
    const target = e.target as HTMLElement;
    const card = target.closest('.case-card');
    if (card instanceof HTMLElement && card.dataset.id) {
        const caseId = parseInt(card.dataset.id, 10);
        showDetailView(caseId);
    }
}


// --- INITIALIZATION ---

document.addEventListener('DOMContentLoaded', () => {
  if (!searchInput || !filterNav || !caseGrid || !caseDetailView || !backBtn) {
    console.error('A required element was not found in the DOM.');
    return;
  }
  
  // Initial render
  renderFilters();
  renderGrid(cases);

  // Attach event listeners
  filterNav.addEventListener('click', handleFilterClick);
  searchInput.addEventListener('input', applyFilters);
  caseGrid.addEventListener('click', handleGridClick);
  backBtn.addEventListener('click', showGridView);
});