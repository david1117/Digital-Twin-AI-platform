### 產品需求文件：數位孿生案例展示平台 (v2.4)

**1. 簡介與問題陳述**
*   **專案**：數位孿生案例展示平台
*   **問題**：對於想了解或投入數位孿生（Digital Twin）領域的開發者、學生或企業來說，缺乏一個集中、高品質的案例參考來源。**此外，平台目前為單向資訊展示，有成功案例的使用者無法分享其經驗，限制了平台的內容廣度與社群參與度。**
*   **解決方案**：升級現有的線上展示平台，除了原有的行業分類篩選與關鍵字搜尋功能外，**新增一個讓使用者能分享自身成功案例的功能。** 平台將精選並詳細介紹各種行業的數位孿生成功案例，並透過社群貢獻來豐富其內容，讓使用者能透過更精準的搜尋與更多元的案例，快速學習並激發靈感。

**2. 目標使用者**
*   **技術開發者/工程師**：希望尋找特定數位孿生技術棧、架構和實踐的專業人士。
*   **學生與研究人員**：正在學習數位孿生概念，需要尋找實際案例來輔助研究。
*   **企業決策者/產品經理**：評估數位孿生技術是否適用於其業務，並尋找相關行業應用靈感的人。
*   **案例貢獻者 (新)**：數位孿生領域的實踐者，希望將自己的專案成果分享給社群，建立專業影響力。

**3. 專案目標與成功指標**
*   **目標**：
    *   目標一：提供一個清晰、易於導覽的介面，讓使用者能輕鬆透過分類篩選和關鍵字搜尋找到案例。
    *   目標二：呈現至少 7 個來自不同行業的深度案例。
    *   目標三：為每個案例提供結構化的資訊，包含背景、挑戰、解決方案和技術亮點。
    *   目標四：提升使用者查找特定資訊的效率。
    *   **目標五 (新)：提供一個簡易的流程，讓使用者可以提交自己的數位孿生案例。**
*   **成功指標**：
    *   指標一：70% 以上的使用者會話（session）至少使用一次篩選或搜尋功能。
    *   指標二：相較於改版前，使用者從首頁到點擊進入案例詳情頁的平均時間縮短 15%。
    *   指標三：使用者平均停留時間超過 3 分鐘，顯示內容具有吸引力。
    *   **指標四 (新)：上線後第一個月內，收到至少 5 筆有效的使用者案例提交。**

**4. 功能需求 (使用者故事)**
*   **US-01: 案例總覽與行業篩選 (既有功能)**
    *   **作為一位** 使用者，**我想要** 在首頁看到所有案例的卡片式總覽，並可以按行業類別進行篩選，**以便** 我可以快速找到感興趣的領域。
    *   **驗收標準**：
        *   首頁以網格形式展示所有案例卡片。
        *   每個卡片應顯示案例標題、所屬行業和一張代表性圖片。
        *   頁面提供行業篩選器（例如：全部、製造、建築、能源）。
        *   點擊行業篩選器後，案例列表應即時更新，僅顯示該行業的案例。

*   **US-02: 關鍵字搜尋 (既有功能)**
    *   **作為一位** 技術開發者，**我想要** 輸入關鍵字（如 'IoT', 'Machine Learning', 'BIM'）來搜尋案例，**以便** 我可以快速找到使用了特定技術的範例。
    *   **驗收標準**：
        *   在行業篩選器的上方或旁邊，提供一個文字搜尋輸入框。
        *   當使用者在搜尋框中輸入文字時，案例網格會即時更新。
        *   搜尋功能可以與行業篩選功能同時作用。
        *   搜尋框應有清晰的提示文字，例如「搜尋技術、標題...」。

*   **US-03: 案例詳情檢視 (既有功能)**
    *   **作為一位** 使用者，**我想要** 點擊案例卡片後，能進入一個詳細頁面，看到該案例的完整介紹，**以便** 我可以深入了解其細節。
    *   **驗收標準**：
        *   詳情頁包含專案背景、解決方案、技術架構、成果展示等區塊。
        *   詳情頁有清晰的返回按鈕，可以回到案例總覽頁面。

*   **US-04: 響應式網頁設計 (既有功能)**
    *   **作為一位** 使用者，**我想要** 在手機、平板和桌機上都能獲得良好的瀏覽體驗，**以便** 我可以隨時隨地查閱資料。
    *   **驗收標準**：
        *   網站在不同螢幕尺寸下佈局能自動調整。
        *   所有文字和圖片都清晰可讀，按鈕和輸入框易于操作。

*   **US-05: 分享案例入口 (新功能)**
    *   **作為一位** 案例貢獻者，**我想要** 在網站的顯眼位置（如頁首或頁尾）找到「分享您的案例」按鈕或連結，**以便** 我可以輕鬆開始提交流程。
    *   **驗收標準**：
        *   在主頁面上方導覽列或頁首區域，有一個清晰的「分享案例」按鈕。
        *   點擊此按鈕後，會開啟一個表單頁面或一個互動式彈出視窗（Modal）。

*   **US-06: 提交案例表單 (新功能)**
    *   **作為一位** 案例貢獻者，**我想要** 填寫一個結構化的表單來提交我的案例資料，**以便** 確保所有必要資訊都被完整提供。
    *   **驗收標準**：
        *   表單包含以下欄位：標題、產業、摘要、專案背景、解決方案、技術架構（可動態增減）、成果展示、圖片 URL。
        *   所有欄位都有清晰的標籤和說明文字。
        *   對必填欄位進行客戶端驗證。
        *   表單提供「提交」和「取消」按鈕。
        *   提交後，系統應顯示一則感謝訊息，並告知使用者案例已進入審核流程。

**5. 範圍**
*   **範圍內**：
    *   案例展示（列表與詳情）。
    *   按行業分類篩選。
    *   基於關鍵字的客戶端即時搜尋功能。
    *   **新增：** 使用者案例分享功能（透過表單提交，前端處理）。
    *   靜態內容頁面。
    *   響應式設計。
*   **範圍外**：
    *   使用者登入/註冊系統。
    *   使用者上傳或提交案例的功能 **(注意：提交後不會自動發布到網站上，僅為收集資料)。**
    *   評論或互動論壇。
    *   後端資料庫（所有內容與搜尋邏輯均在客戶端處理）。

**6. 技術考量**
*   **平台**：Web (HTML, CSS, JavaScript/TypeScript)
*   **相依性**：無，使用原生技術以確保輕量和高效能。
*   **其他**：內容將以靜態方式嵌入前端程式碼。搜尋功能將在客戶端實現。**案例提交功能將在客戶端收集表單資料，並以格式化的形式（如 JSON）顯示給使用者，提示他們將此資料發送給管理者進行審核，以模擬無後端的提交流程。**

---
**附錄 A：案例內容更新與參考來源**

根據最新需求，為豐富平台內容並增加說服力，為所有案例補充詳細資訊與參考來源。

*   **案例 1: 智慧工廠產線效能優化**
    *   **行業**: 製造業
    *   **核心**: 透過建立與實體工廠完全同步的虛擬模型，整合 IoT 數據與 AI 分析，來模擬、預測和優化整個生產流程。這使得在虛擬環境中測試變更、預測設備故障成為可能，從而提高效率、減少停機時間。
    *   **參考來源 (文章)**: Siemens - "The digital twin in manufacturing" ([https://www.plm.automation.siemens.com/global/en/our-story/glossary/digital-twin-of-production/29767](https://www.plm.automation.siemens.com/global/en/our-story/glossary/digital-twin-of-production/29767))
    *   **參考來源 (影片)**: "How a Digital Twin is Realized at the Gestamp Smart Factory" ([https://www.youtube.com/watch?v=AYg_m_-_q2E](https://www.youtube.com/watch?v=AYg_m_-_q2E))

*   **案例 2: 城市交通流量即時模擬與管理**
    *   **行業**: 智慧城市
    *   **核心**: 建立整個城市的動態 3D 模型，整合即時交通數據、天氣資訊和公共運輸系統。城市規劃者可以利用此模型模擬交通流量、測試新的道路規劃或交通號誌時序，以緩解壅塞並改善應急響應。
    *   **參考來源 (文章)**: NVIDIA Blogs - "What Is a Digital Twin?" ([https://blogs.nvidia.com/blog/what-is-a-digital-twin/](https://blogs.nvidia.com/blog/what-is-a-digital-twin/))
    *   **參考來源 (影片)**: "NVIDIA Omniverse for Digital Twins" ([https://www.youtube.com/watch?v=g_jJ8eP_8-w](https://www.youtube.com/watch?v=g_jJ8eP_8-w))

*   **案例 3: 手術規劃與模擬的個人化醫療**
    *   **行業**: 醫療保健
    *   **核心**: 基於病患個人的 MRI 或 CT 掃描數據，創建特定器官（如心臟）的高擬真度數位孿生。外科醫生可以在手術前利用這個虛擬模型進行模擬，測試不同的手術方案，從而提高手術的精準度和成功率。
    *   **參考來源 (文章)**: Dassault Systèmes - "The Living Heart Project" ([https://www.3ds.com/industries/life-sciences-healthcare/living-heart](https://www.3ds.com/industries/life-sciences-healthcare/living-heart))
    *   **參考來源 (影片)**: "A virtual heart for personalized patient care" ([https://www.youtube.com/watch?v=bovG7f6i-3c](https://www.youtube.com/watch?v=bovG7f6i-3c))

*   **案例 4: 風力發電場運營與維護優化**
    *   **行業**: 能源
    *   **核心**: 為每一台風力發電機建立數位孿生，整合即時風速、天氣預報和渦輪機自身的運作數據。這不僅能更精準地預測發電量，還能預測組件磨損，優化維護排程，從而最大化能源輸出並降低運營成本。
    *   **參考來源 (文章)**: GE Digital - "Digital Twin for Wind" ([https://www.ge.com/digital/applications/digital-twin-wind](https://www.ge.com/digital/applications/digital-twin-wind))
    *   **參考來源 (影片)**: "GE's Digital Wind Farm" ([https://www.youtube.com/watch?v=j_29-J4hcfY](https://www.youtube.com/watch?v=j_29-J4hcfY))

*   **案例 5: 大型建築生命週期管理平台**
    *   **行業**: 建築
    *   **核心**: 將建築資訊模型 (BIM) 與來自 IoT 感測器的即時數據結合，創建建築物的數位孿生。這使得從設計、施工到後期運營和維護的整個生命週期都能在一個統一的平台上進行監控和管理，優化能源使用、空間管理和設施維護。
    *   **參考來源 (文章)**: Autodesk - "What is a Digital Twin in AEC?" ([https://www.autodesk.com/design-make/articles/what-is-digital-twin-aec](https://www.autodesk.com/design-make/articles/what-is-digital-twin-aec))
    *   **參考來源 (影片)**: "Autodesk Tandem: Create a Digital Twin" ([https://www.youtube.com/watch?v=wGlpC-0Q-wM](https://www.youtube.com/watch?v=wGlpC-0Q-wM))

*   **案例 6: 航空發動機預測性維護**
    *   **行業**: 航空航太
    *   **核心**: 透過 IoT 感測器與 AI 分析，為每台發動機建立獨一無二的數位孿生，即時監控飛行中的性能數據，從而預測潛在故障，實現從「定期維護」到「預測性維護」的轉變，大幅提升飛行安全與機隊運營效率。
    *   **參考來源 (文章)**: GE Digital - "Predictive Maintenance" ([https://www.ge.com/digital/applications/predix-apm](https://www.ge.com/digital/applications/predix-apm))
    *   **參考來源 (影片)**: "GE's Digital Twins for Jet Engines" ([https://www.youtube.com/watch?v=p24Q39g_y-s](https://www.youtube.com/watch?v=p24Q39g_y-s))

*   **案例 7: 全球供應鏈可視化與風險模擬**
    *   **行業**: 零售與物流
    *   **核心**: 建立一個端到端的全球供應鏈數位孿生，整合從供應商、製造、倉儲、物流到終端銷售點的所有數據。這不僅提供了即時的庫存與貨物追蹤，更重要的是能夠進行「壓力測試」，模擬各種中斷風險（如港口罷工、惡劣天氣、貿易爭端），以制定更具韌性的應急預案。
    *   **參考來源 (文章)**: Anylogic - "Supply Chain Simulation Software" ([https://www.anylogic.com/supply-chain/](https://www.anylogic.com/supply-chain/))
    *   **參考來源 (影片)**: "DHL's Digital Twin for Supply Chain Optimization" ([https://www.youtube.com/watch?v=dYGI1V55b74](https://www.youtube.com/watch?v=dYGI1V55b74))
