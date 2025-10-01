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
  articleUrl?: string;
}

// --- STATIC DATA (Based on PRD with newly verified links) ---

const cases: Case[] = [
  {
    id: 1,
    title: 'BMW 智慧工廠元宇宙',
    industry: '製造業',
    image: 'https://images.unsplash.com/photo-1633596683412-21b44d909a7b?q=80&w=1470&auto=format&fit=crop',
    summary: 'BMW 與 NVIDIA 合作，使用 Omniverse 平台建立工廠的完整數位孿生，實現虛實同步的規劃與協作，提升生產效率。',
    background: '汽車製造流程極其複雜，傳統的工廠規劃方式難以應對快速變化的市場需求和客製化生產。在導入新生產線或變更佈局時，需要耗費大量時間和成本進行實體測試。',
    solution: '透過 NVIDIA Omniverse 平台，BMW 建立了一個與實體工廠完全同步、符合物理規律的數位孿生模型。全球各地的團隊可以在這個虛擬空間中協同作業，進行產線佈局、機器人編程和人因工程的模擬，並在部署到實體工廠前找出最佳方案。',
    techStack: ['NVIDIA Omniverse', 'Universal Scene Description (USD)', 'AI Simulation', 'Real-time Ray Tracing'],
    results: '規劃效率提升 30%，能夠在虛擬環境中進行無風險的測試與優化，並加速了新車型的上市時間。',
    articleUrl: 'https://www.press.bmwgroup.com/global/article/detail/T0329569EN/bmw-group-and-nvidia-take-virtual-factory-planning-to-the-next-level?language=en',
  },
  {
    id: 2,
    title: '新加坡城市交通流量即時模擬',
    industry: '智慧城市',
    image: 'https://www.ura.gov.sg/-/media/Corporate/Media-Room/2018/Nov/pr18-48/3D-SG-Model.jpg',
    summary: '「虛擬新加坡」計畫建立全國的 3D 數位孿生，用於城市規劃、交通管理與環境模擬，提升決策效率。',
    background: '新加坡是一個高密度城市國家，面臨著交通壅塞、資源有限和氣候變遷等多重挑戰。政府需要一個強大的工具來進行跨部門的協調與長期規劃。',
    solution: '「虛擬新加坡」(Virtual Singapore) 是一個動態的 3D 城市模型和協作數據平台。它整合了來自不同政府機構的靜態和即時數據，可用於模擬交通流量、太陽能板部署潛力、甚至在緊急情況下的疏散路線規劃。',
    techStack: ['GIS Data', '3DEXPERIENCE Platform', 'Real-time IoT Data', 'Urban Simulation'],
    results: '為城市規劃者提供了統一的數據視圖，能夠在虛擬環境中測試政策影響，提升了跨部門協作效率與城市韌性。',
    articleUrl: 'https://www.tech.gov.sg/technews/5-things-to-know-about-virtual-singapore',
  },
  {
    id: 3,
    title: '「活心計畫」個人化心臟手術模擬',
    industry: '醫療保健',
    image: 'https://www.simutechgroup.com/wp-content/uploads/2022/10/Living-Heart-1.png',
    summary: '利用患者 MRI 數據建立功能性心臟數位孿生，讓外科醫生能進行術前模擬，提升手術成功率。',
    background: '複雜的心臟外科手術對精準度要求極高，傳統上醫生主要依賴 2D 影像和經驗進行規劃，存在不確定性。',
    solution: '達梭系統（Dassault Systèmes）的「活心計畫」(Living Heart Project) 能將患者的 MRI 和 CT 掃描數據轉換為一個功能性的 3D 心臟數位孿生。外科醫生可以在虛擬環境中對這個模型進行互動，模擬不同手術方案，並預測手術效果。',
    techStack: ['Medical Imaging (MRI/CT)', '3D Modeling', 'Biomechanical Simulation', 'FDA Approval'],
    results: '幫助醫生為特定患者制定最佳手術方案，降低手術風險，並加速了新型醫療器材的研發與測試過程。',
    articleUrl: 'https://www.3ds.com/products-services/simulia/solutions/life-sciences-healthcare/the-living-heart-project/',
  },
  {
    id: 4,
    title: 'GE 風力發電場運營優化',
    industry: '能源',
    image: 'https://images.unsplash.com/photo-1622378342025-055d7f287532?q=80&w=1374&auto=format&fit=crop',
    summary: '為離岸風力發電場的每一台風機建立數位孿生，精準預測發電量並優化維護，年發電量提升。',
    background: '離岸風力發電場的運營和維護成本高昂。如何根據天氣變化最大化發電效率，並在惡劣海象下安排維護，是一個重大挑戰。',
    solution: 'GE 為每一台風機都建立了數位孿生模型。模型整合了即時氣象數據、風機自身的感測器數據和電網需求，能夠持續監控風機的健康狀況，並建議調整葉片角度等參數以最大化發電效率，同時預測最佳的維護窗口。',
    techStack: ['SCADA Systems', 'Predictive Analytics', 'Asset Performance Management (APM)', 'Industrial IoT (IIoT)'],
    results: '透過優化控制，單台風機的年發電量可提升高達 20%，同時降低了非計畫性停機的風險與維護成本。',
    articleUrl: 'https://www.gevernova.com/software/blog/what-digital-twin',
  },
  {
    id: 5,
    title: '大型建築生命週期管理平台',
    industry: '建築',
    image: 'https://images.unsplash.com/photo-1678923223962-f71f924376b5?q=80&w=1471&auto=format&fit=crop',
    summary: '透過整合 BIM 和 IoT 的數位孿生，實現了從設計、施工到運營的全程監控與管理。',
    background: '大型公共建築（如機場、醫院）的設計和施工過程複雜，資訊孤島嚴重，導致超支和延期。建成後的運營管理也缺乏統一的數據視圖。',
    solution: '建立一個基於建築資訊模型 (BIM) 的數位孿生平台。在施工階段，平台整合了進度、成本和安全數據；在運營階段，整合了能源、安防和空間使用率等 IoT 數據，為管理者提供了一個統一的決策儀表板。',
    techStack: ['Building Information Modeling (BIM)', 'IoT (Energy, Security)', 'Cloud Computing', 'Facility Management Software'],
    results: '施工階段的材料浪費減少了 10%，運營階段的能源消耗降低了 25%，空間使用效率提升了 15%。',
    articleUrl: 'https://cityzenith.com/case-studies',
  },
  {
    id: 6,
    title: 'Rolls-Royce 航空發動機預測性維護',
    industry: '航空航太',
    image: 'https://www.unite.ai/wp-content/uploads/2023/06/jet-engine-4518459_1280.jpg',
    summary: '為每台飛機發動機建立數位孿生，即時監控飛行數據，預測維護需求，大幅提升飛行安全與燃油效率。',
    background: '航空公司需要最大化機隊的正常運行時間並降低維護成本。傳統的定期維護模式無法有效應對個別發動機的獨特磨損情況。',
    solution: `Rolls-Royce 為其售出的每一台發動機都創建了一個數位孿生。這個數位模型會持續接收來自實體發動機感測器的數據，模擬其在不同飛行條件下的運作狀況，並預測零件的剩餘壽命，從而實現從「定期維護」到「預測性維護」的轉變。`,
    techStack: ['On-wing Sensors', 'Predictive Analytics', 'Cloud Computing', 'Engine Health Management'],
    results: '顯著減少了非計畫性的停機時間，優化了燃油消耗，並延長了發動機的使用壽命，為航空公司節省了數百萬美元的運營成本。',
    articleUrl: 'https://www.rolls-royce.com/products-and-services/civil-aerospace/services/totalcare.aspx',
  },
  {
    id: 7,
    title: 'Unilever 全球供應鏈數位孿生',
    industry: '零售與物流',
    image: 'https://images.unsplash.com/photo-1577564509939-85153f365318?q=80&w=1470&auto=format&fit=crop',
    summary: 'Unilever 與微軟合作，建立端到端的供應鏈數位孿生，實現庫存、物流與需求的即時可視化，並模擬中斷風險。',
    background: '作為一家全球消費品巨頭，Unilever 的供應鏈極其複雜，涉及數百家工廠和數千家供應商，難以應對市場波動和各種中斷風險。',
    solution: `該數位孿生平台整合了來自供應商、工廠、物流和零售商的數據，創建了一個虛擬的供應鏈模型。管理者可以在平台上即時查看全球庫存，並利用 AI 模擬各種情境（如原料短缺、需求激增），以制定更敏捷的應對策略。`,
    techStack: ['Microsoft Azure', 'Azure Digital Twins', 'AI & Machine Learning', 'Big Data Analytics', 'Supply Chain Management (SCM)'],
    results: '提高了需求預測的準確性，優化了庫存水平，縮短了對市場變化的反應時間，並增強了整個供應鏈的韌性。',
    articleUrl: 'https://customers.microsoft.com/en-us/story/855906-unilever-consumer-goods-azure',
  },
  {
    id: 8,
    title: '鹿特丹港智慧物流',
    industry: '交通與物流',
    image: 'https://images.unsplash.com/photo-1568652594639-6dbf87a8f331?q=80&w=1470&auto=format&fit=crop',
    summary: '鹿特丹港與 IBM 合作，建立了一個覆蓋整個港區的 IoT 平台與數位孿生，以即時監測、預測和優化船舶交通、基礎設施與水文狀況。',
    background: '作為歐洲最大的港口，鹿特丹港面臨著日益增長的航運量和複雜的調度挑戰。傳統的管理方式難以應對天氣變化、泊位分配和多方協作的即時需求。',
    solution: '透過部署大量 IoT 感測器，並將數據整合到 IBM IoT 平台上，鹿特丹港創建了一個港口的數位孿生。該平台能即時顯示所有船舶的動態，預測水深、潮汐和風速，並為船長、引航員和碼頭運營商提供最佳的航行和停泊建議。',
    techStack: ['IBM IoT Platform', 'Weather Company Data', 'AI Analytics', 'Real-time Sensor Network'],
    results: '船舶等待時間平均減少 1 小時，提高了泊位利用率，增強了港口運營的安全性和效率，每年可為航運公司節省數百萬歐元的成本。',
    articleUrl: 'https://www.portofrotterdam.com/en/our-port/smart-port/digitalisation',
  },
  {
    id: 9,
    title: 'John Deere 精準農業',
    industry: '農業',
    image: 'https://images.unsplash.com/photo-1615704252443-55d8f2038b3f?q=80&w=1374&auto=format&fit=crop',
    summary: 'John Deere 利用感測器、AI 和機器學習技術，為其農業機械（如拖拉機、噴灑機）建立數位孿生，實現自主作業與精準的作物管理。',
    background: '傳統農業面臨著勞動力短缺、成本上升以及資源浪費（如過度使用除草劑）的挑戰。農民需要更智慧的工具來提高產量和可持續性。',
    solution: '透過在拖拉機和噴灑機上安裝多個攝影機和感測器，John Deere 的系統能夠即時建立農田的數位孿生。AI 模型可以區分作物和雜草，並僅對雜草進行精準噴灑（See & Spray™ 技術）。同時，自主拖拉機能夠根據 GPS 和數位模型，24 小時不間斷地進行耕作。',
    techStack: ['Computer Vision', 'Machine Learning', 'GPS & Geofencing', 'See & Spray™ Technology', 'Autonomous Driving'],
    results: '除草劑使用量減少超過 77%，顯著降低了農業成本和對環境的影響。自主作業提高了農場的生產效率，並解決了勞動力短缺的問題。',
    articleUrl: 'https://www.deere.com/en/our-company/news-and-announcements/news-releases/2022/january/ces-2022-fully-autonomous-tractor/',
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
const addCaseBtn = document.getElementById('add-case-btn');
const shareCaseModal = document.getElementById('share-case-modal');
const closeModalBtn = document.getElementById('close-modal-btn');
const cancelBtn = document.getElementById('cancel-btn');
const shareCaseForm = document.getElementById('share-case-form') as HTMLFormElement;
const formContainer = document.getElementById('form-container');
const submissionResult = document.getElementById('submission-result');
const jsonOutput = document.getElementById('json-output');

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
      <img src="${caseItem.image}" alt="${caseItem.title}" referrerpolicy="no-referrer">
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

  const linksHtml = caseItem.articleUrl ? `
    <h4>參考資料</h4>
    <div class="reference-links">
      <a href="${caseItem.articleUrl}" class="ref-link" target="_blank" rel="noopener noreferrer">相關文章</a>
    </div>
  ` : '';

  detailContent.innerHTML = `
    <img src="${caseItem.image}" alt="${caseItem.title}" class="detail-hero-image" referrerpolicy="no-referrer">
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
    ${linksHtml}
  `;
}

// --- VIEW MANAGEMENT ---

/**
 * Shows the grid view and hides the detail view.
 */
function showGridView() {
  if (caseGrid && caseDetailView && mainHeader && searchInput) {
    caseDetailView.classList.add('hidden');
    caseGrid.classList.remove('hidden');
    mainHeader.classList.remove('hidden');
    document.querySelector('.controls-container').classList.remove('hidden');
  }
}

/**
 * Shows the detail view for a case and hides the grid view.
 * @param {number} caseId - The ID of the case to show.
 */
function showDetailView(caseId: number) {
  if (caseGrid && caseDetailView && mainHeader && searchInput) {
    renderDetail(caseId);
    caseGrid.classList.add('hidden');
    mainHeader.classList.add('hidden');
    document.querySelector('.controls-container').classList.add('hidden');
    caseDetailView.classList.remove('hidden');
    window.scrollTo(0, 0);
  }
}

// --- MODAL MANAGEMENT ---

/**
 * Opens the share case modal.
 */
function openModal() {
    if (shareCaseModal) {
        shareCaseModal.classList.remove('hidden');
    }
}

/**
 * Closes the share case modal and resets its state.
 */
function closeModal() {
    if (shareCaseModal && shareCaseForm && formContainer && submissionResult) {
        shareCaseModal.classList.add('hidden');
        // Reset form for next time
        shareCaseForm.reset();
        formContainer.classList.remove('hidden');
        submissionResult.classList.add('hidden');
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

/**
 * Handles the submission of the share case form.
 * @param {Event} e - The submit event.
 */
function handleFormSubmit(e: Event) {
    e.preventDefault();
    if (!shareCaseForm.checkValidity()) {
        shareCaseForm.reportValidity();
        return;
    }

    const formData = new FormData(shareCaseForm);
    const newCaseData: Omit<Case, 'id'> = {
        title: formData.get('title') as string,
        industry: formData.get('industry') as string,
        image: formData.get('image') as string,
        summary: formData.get('summary') as string,
        background: formData.get('background') as string,
        solution: formData.get('solution') as string,
        techStack: (formData.get('techStack') as string).split(',').map(tech => tech.trim()),
        results: formData.get('results') as string,
    };

    const displayData = { id: cases.length + 1, ...newCaseData };

    if (jsonOutput && formContainer && submissionResult) {
        jsonOutput.textContent = JSON.stringify(displayData, null, 2);
        formContainer.classList.add('hidden');
        submissionResult.classList.remove('hidden');
    }
}


// --- INITIALIZATION ---

document.addEventListener('DOMContentLoaded', () => {
  const requiredElements = [
    searchInput, filterNav, caseGrid, caseDetailView, backBtn,
    addCaseBtn, shareCaseModal, closeModalBtn, cancelBtn, shareCaseForm
  ];

  if (requiredElements.some(el => !el)) {
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

  // Modal event listeners
  addCaseBtn.addEventListener('click', openModal);
  closeModalBtn.addEventListener('click', closeModal);
  cancelBtn.addEventListener('click', closeModal);
  shareCaseModal.addEventListener('click', (e) => {
    if (e.target === shareCaseModal) {
        closeModal();
    }
  });
  shareCaseForm.addEventListener('submit', handleFormSubmit);
});