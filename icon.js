/**
 * Casarte Design System - Iconography Component Script (icon.js)
 * 最终完美版：【总览】及各分类标签页严格按要求填充 SVG 图标，其余保持空置
 */
(() => {
  const baseIconDefs = [
    { zh: "节能", en: "Energy Saving" },
    { zh: "棉麻", en: "Cotton" },
    { zh: "漂洗", en: "Rinse" },
    { zh: "热风烘烤", en: "Convection Baking" },
    { zh: "浴缸注水", en: "Bath Filling" },
    { zh: "肉类", en: "Meat" }
  ];

  // 生成所有图标的映射配置 (01~76)
  const allIcons = {};
  for (let row = 0; row <= 7; row++) {
    for (let col = 1; col <= 6; col++) {
      const slotNum = row * 10 + col;
      const numStr = String(slotNum).padStart(2, '0');
      const def = baseIconDefs[col - 1];
      allIcons[slotNum] = {
        zh: def.zh,
        en: def.en,
        file: `${numStr}-${def.en}.svg`
      };
    }
  }

  // 渲染图标网格 (每行 10 个格子，共 9 行 = 90 个格子)
  document.querySelectorAll('[data-icon-library]').forEach((library) => {
    const libType = library.dataset.iconLibrary;
    const fragment = document.createDocumentFragment();
    const currentLang = localStorage.getItem('haier-guideline-language') || 'zh';

    for (let slotIdx = 1; slotIdx <= 90; slotIdx++) {
      const slot = document.createElement('div');
      slot.className = 'icon-slot';
      const r = Math.floor((slotIdx - 1) / 10); // 第几行 (0 到 8)
      const c = (slotIdx - 1) % 10 + 1;         // 第几列 (1 到 10)
      const numStr = String(slotIdx).padStart(2, '0');

      let targetIndex = null;

      // 根据您的最新要求：各面板只在指定行、前 6 列（c <= 6）放入对应图标
      if (c <= 6) {
        if (libType === 'overview') {
          // 【总览】：前 8 行（r <= 7）每一行的前 6 个放图标
          if (r <= 7) {
            targetIndex = r * 10 + c;
          }
        } else if (libType === 'linear') {
          // 1. 【线性图标】：第一行放入截图第1行 (01~06)
          if (r === 0) targetIndex = c;
        } else if (libType === 'filled') {
          // 4. 【面性图标】：第一行放入截图第2行 (11~16)
          if (r === 0) targetIndex = 10 + c;
        } else if (libType === 'wireframe1') {
          // 2. 【线框图标1】：第一行放入截图第3行 (21~26)
          if (r === 0) targetIndex = 20 + c;
        } else if (libType === 'color1') {
          // 5. 【填充图标1】：第一行放入截图第4行 (31~36)
          if (r === 0) targetIndex = 30 + c;
        } else if (libType === 'wireframe2') {
          // 3. 【线框图标2】：第一行放入截图第5行 (41~46)，第二行放入截图第7行 (61~66)
          if (r === 0) targetIndex = 40 + c;
          else if (r === 1) targetIndex = 60 + c;
        } else if (libType === 'color2') {
          // 6. 【填充图标2】：第一行放入截图第6行 (51~56)，第二行放入截图第8行 (71~76)
          if (r === 0) targetIndex = 50 + c;
          else if (r === 1) targetIndex = 70 + c;
        }
      }

      // 如果计算出了目标图标序号，渲染图标；否则保持空表格
      if (targetIndex && allIcons[targetIndex]) {
        const item = allIcons[targetIndex];
        const imgPath = `assets/icons/Linear icon/All/${item.file}`;
        const displayName = currentLang === 'zh' ? item.zh : item.en;

        slot.classList.add('clickable');
        slot.dataset.nameZh = item.zh;
        slot.dataset.nameEn = item.en;
        slot.dataset.iconName = item.zh;
        slot.setAttribute('aria-label', item.zh);

        slot.innerHTML = `
          <img src="${imgPath}" alt="${item.zh}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
          <span class="icon-slot-mark" aria-hidden="true" style="display:none;">+</span>
          <span class="icon-slot-label" data-label-zh="${item.zh}" data-label-en="${item.en}">${displayName}</span>
        `;

        slot.addEventListener('click', () => {
          openIconModal(imgPath, currentLang === 'zh' ? item.zh : item.en);
        });
      } else {
        // 其余空格子（如每行后 4 个及未使用的行）保持纯净空表格样式（显示 + 和序号）
        slot.dataset.iconName = numStr;
        slot.setAttribute('aria-label', `Icon slot ${numStr}`);
        slot.innerHTML = `
          <span class="icon-slot-mark" aria-hidden="true">+</span>
          <span class="icon-slot-label">${numStr}</span>
        `;
      }

      fragment.appendChild(slot);
    }

    library.replaceChildren(fragment);
  });

  // Modal 弹窗逻辑
  const modal = document.getElementById('icon-modal');
  const modalImg = document.getElementById('modal-img');
  const modalText = document.getElementById('modal-text');

  function openIconModal(imgSrc, name) {
    if (!modal || !modalImg || !modalText) return;
    modalImg.src = imgSrc;
    modalText.textContent = name;
    modal.classList.add('active');
    document.body.classList.add('modal-open');
  }

  if (modal) {
    modal.addEventListener('click', () => {
      modal.classList.remove('active');
      document.body.classList.remove('modal-open');
    });
  }

  // 分类与搜索过滤
  document.querySelectorAll('[data-icon-filter]').forEach((filter) => {
    const library = document.querySelector(`[data-icon-library="${filter.dataset.iconFilter}"]`);
    if (!library) return;
    const buttons = Array.from(filter.querySelectorAll('[data-icon-category]'));
    const search = filter.querySelector('[data-icon-search]');

    const applyIconFilter = () => {
      if (!search) return;
      const keyword = search.value.trim().toLowerCase();
      let results = library.parentElement.querySelector('.icon-search-results');
      if (!results) {
        results = document.createElement('div');
        results.className = 'icon-library icon-search-results';
        results.hidden = true;
        library.insertAdjacentElement('afterend', results);
      }

      library.hidden = Boolean(keyword);
      results.hidden = !keyword;
      results.replaceChildren();
      if (!keyword) return;

      const matches = Array.from(library.querySelectorAll('.icon-slot')).filter((slot) => {
        const slotName = slot.dataset.iconName || '';
        const labelZh = slot.querySelector('.icon-slot-label')?.dataset.labelZh || '';
        const labelEn = slot.querySelector('.icon-slot-label')?.dataset.labelEn || '';
        return slotName.toLowerCase().includes(keyword) || labelZh.toLowerCase().includes(keyword) || labelEn.toLowerCase().includes(keyword);
      });

      if (matches.length) {
        matches.forEach((slot) => results.appendChild(slot.cloneNode(true)));
      } else {
        const empty = document.createElement('div');
        empty.className = 'icon-filter-empty';
        empty.textContent = (localStorage.getItem('haier-guideline-language') || 'zh') === 'zh' ? '暂无匹配图标' : 'No matching icons found';
        results.appendChild(empty);
      }
    };

    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        buttons.forEach((item) => item.classList.toggle('active', item === button));
        applyIconFilter();
      });
    });

    if (search) {
      search.addEventListener('input', applyIconFilter);
      applyIconFilter();
    }
  });

  // Tab 切换逻辑
  const iconTabs = Array.from(document.querySelectorAll('[data-icon-tab]'));
  const iconPanes = Array.from(document.querySelectorAll('[data-icon-pane]'));
  iconTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.iconTab;
      iconTabs.forEach((item) => {
        const selected = item === tab;
        item.classList.toggle('active', selected);
        item.setAttribute('aria-selected', String(selected));
      });
      iconPanes.forEach((pane) => {
        const selected = pane.dataset.iconPane === target;
        pane.classList.toggle('active', selected);
        pane.hidden = !selected;
      });
    });
  });

  // 语言环境监听
  window.addEventListener('storage', () => {
    const lang = localStorage.getItem('haier-guideline-language') || 'zh';
    document.querySelectorAll('.icon-slot-label[data-label-zh]').forEach(label => {
      label.textContent = lang === 'zh' ? label.dataset.labelZh : label.dataset.labelEn;
    });
    document.querySelectorAll('input[data-icon-search]').forEach(input => {
      input.placeholder = lang === 'zh' ? (input.dataset.i18nPlaceholder || '搜索图标') : (input.dataset.i18nPlaceholderEn || 'Search icons');
    });
  });
})();