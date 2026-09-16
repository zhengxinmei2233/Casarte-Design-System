const HAIER_NAV_GROUPS = [
  {
    id: 'principles',
    label: '1. 原则 Principles',
    items: [
      { label: '1.1 品牌', href: 'brand.html', page: 'brand.html', id: 'principles-brand' },
      { label: '1.2 设计体验原则', href: 'design_principles.html', page: 'design_principles.html', id: 'principles-ux' },
    ],
  },
  {
    id: 'foundations',
    label: '2. 基础 Foundations',
    items: [
      { label: '2.1 视觉基础', id: 'foundations-visual', page: 'foundations.html', disabled: true },
      { label: '2.1.1 色彩', href: 'color_details.html', page: 'color_details.html', child: true },
      { label: '2.1.2 字体', href: 'typography_details.html', page: 'typography_details.html', child: true },
      { label: '2.1.3 图标', href: 'iconography_details.html', page: 'iconography_details.html', child: true },
      { label: '2.1.4 材质', href: 'materials_lighting_details.html', page: 'materials_lighting_details.html', child: true },
      { label: '2.2 布局基础', id: 'foundations-layout', page: 'foundations.html', disabled: true },
      { label: '2.2.1 信息架构', href: 'spatial_depth_details.html', page: 'spatial_depth_details.html', child: true },
      { label: '2.2.2 核心要素', href: 'hero_element_details.html', page: 'hero_element_details.html', child: true },
      { label: '2.2.3 排版', href: 'spacing_layout_details.html', page: 'spacing_layout_details.html', child: true },
      { label: '2.2.4 栅格', href: 'grid_system_details.html', page: 'grid_system_details.html', child: true },
    ],
  },
  {
    id: 'components',
    label: '3. 组件 Components',
    items: [
      { label: '3.1 操作类', id: 'components-action', disabled: true },
      { label: '按钮', href: 'component_buttons.html', page: 'component_buttons.html', child: true },
      { label: '开关', href: 'component_switch.html', page: 'component_switch.html', child: true },
      { label: '3.2 选择类', id: 'components-selection', disabled: true },
      { label: '单选按钮', href: 'component_radio_button.html', page: 'component_radio_button.html', child: true },
      { label: '复选框', href: 'component_checkbox.html', page: 'component_checkbox.html', child: true },
      { label: '滚轮选择器', href: 'component_wheel_picker.html', page: 'component_wheel_picker.html', child: true },
      { label: '3.3 输入类', id: 'components-input', disabled: true },
      { label: '文本框', href: 'component_text_field.html', page: 'component_text_field.html', child: true },
      { label: '下拉选择', href: 'component_dropdown_select.html', page: 'component_dropdown_select.html', child: true },
      { label: '调控', href: 'component_slider.html', page: 'component_slider.html', child: true },
      { label: '3.4 导航类', id: 'components-nav', disabled: true },
      { label: '应用栏', href: 'component_app_bar.html', page: 'component_app_bar.html', child: true },
      { label: '导航', href: 'component_navigation.html', page: 'component_navigation.html', child: true },
      { label: '标签页', href: 'component_tabs.html', page: 'component_tabs.html', child: true },
      { label: '面包屑', href: 'component_breadcrumbs.html', page: 'component_breadcrumbs.html', child: true },
      { label: '分页', href: 'component_pagination.html', page: 'component_pagination.html', child: true },
      { label: '步骤条', href: 'component_stepper.html', page: 'component_stepper.html', child: true },
      { label: '3.5 数据展示', id: 'components-data', disabled: true },
      { label: '卡片', href: 'component_card.html', page: 'component_card.html', child: true },
      { label: '列表 / 列表项', href: 'component_list_tile.html', page: 'component_list_tile.html', child: true },
      { label: '头像', href: 'component_avatar.html', page: 'component_avatar.html', child: true },
      { label: '分割线', href: 'component_divider.html', page: 'component_divider.html', child: true },
      { label: '徽标', href: 'component_badge.html', page: 'component_badge.html', child: true },
      { label: '3.6 反馈与浮层', id: 'components-feedback', disabled: true },
      { label: '对话框 / 模态框', href: 'component_dialog_modal.html', page: 'component_dialog_modal.html', child: true },
      { label: '底部面板', href: 'component_bottom_sheet.html', page: 'component_bottom_sheet.html', child: true },
      { label: '消息条 / 轻提示', href: 'component_snackbar_toast.html', page: 'component_snackbar_toast.html', child: true },
      { label: '工具提示', href: 'component_tooltip.html', page: 'component_tooltip.html', child: true },
      { label: '进度指示器', href: 'component_progress_indicator.html', page: 'component_progress_indicator.html', child: true },
    ],
  },
  {
    id: 'hardware',
    label: '4. 硬件 Hardware',
    items: [
      { label: '4.1 TFT 屏幕', href: 'hardware_tft.html', page: 'hardware_tft.html', id: 'hw-tft' },
      { label: '4.2 LED 屏幕', href: 'hardware_led.html', page: 'hardware_led.html', id: 'hw-led' },
      { label: '4.3 其它屏幕形态', href: 'hardware_other.html', page: 'hardware_other.html', id: 'hw-other' },
    ],
  },
  {
    id: 'motion',
    label: '5. 动效 Motion',
    items: [
      { label: '5.1 背景动效', href: 'motion.html#motion-bg', id: 'motion-bg' },
      { label: '5.2 转场 Transitions', href: 'motion.html#motion-transitions', id: 'motion-transitions' },
      { label: '5.3 微交互', href: 'motion.html#motion-micro', id: 'motion-micro' },
    ],
  },
  {
    id: 'sensory',
    label: '多感官交互 Sensory',
    items: [
      { label: '灯光 Lighting', href: 'lighting.html', page: 'lighting.html', id: 'sensory-lighting' },
      { label: '触摸 Touch', href: 'touch.html', page: 'touch.html', id: 'sensory-touch' },
      { label: '音效 Audio', href: 'audio.html', page: 'audio.html', id: 'sensory-audio' },
    ],
  },
  {
    id: 'ai',
    label: '7. AI',
    items: [
      { label: '7.1 AI 视觉标准', href: 'ai.html#ai-visual', id: 'ai-visual' },
      { label: '7.2 AI 使用标准', href: 'ai.html#ai-usage', id: 'ai-usage' },
    ],
  },
  {
    id: 'assets',
    label: '8. 资产与推行 Assets',
    items: [
      { label: '8.1 强制规范标准', href: 'assets.html#assets-strict', id: 'assets-strict' },
      { label: '8.2 UT数据推导与沉淀', href: 'assets.html#assets-ut', id: 'assets-ut' },
      { label: '8.3 Figma资产授权', href: 'assets.html#assets-figma', id: 'assets-figma' },
      { label: '8.4 统一度验收机制', href: 'assets.html#assets-qa', id: 'assets-qa' },
    ],
  },
];

const HAIER_NAV_STANDALONE_ITEMS = [
  { label: '9. 更新日志 Log', href: 'changelog.html#changelog', id: 'changelog', standalone: true },
];

const HAIER_NAV_LABEL_EN = {
  '1. 原则 Principles': '1. Principles',
  '1.1 品牌': '1.1 Brand',
  '1.2 设计体验原则': '1.2 UX Principles',
  '1.2.1 品牌战略': '1.2.1 Brand Strategy',
  '1.2.2 品牌设计原则': '1.2.2 Brand Design Principles',
  '1.2.3 核心设计方向': '1.2.3 Core Design Directions',
  '2. 基础 Foundations': '2. Foundations',
  '2.1 视觉基础': '2.1 Visual Foundations',
  '2.1.1 色彩规范': '2.1.1 Color',
  '2.1.2 字体规范': '2.1.2 Typography',
  '2.1.3 图标规范': '2.1.3 Iconography',
  '2.1.4 材质': '2.1.4 Material',
  '2.2 布局基础': '2.2 Layout',
  '2.2.1 信息架构': '2.2.1 Information Architecture',
  '2.2.2 核心要素': '2.2.2 Hero Element',
  '2.2.3 排版': '2.2.3 Spacing & Layout',
  '2.2.4 栅格': '2.2.4 Grid System',
  '3. 组件 Components': '3. Components',
  '3.1 操作类': '3.1 Actions',
  '3.1.1 按钮': '3.1.1 Buttons',
  '3.1.2 开关': '3.1.2 Switch / Toggle',
  '3.2 选择类': '3.2 Selection',
  '3.2.1 单选按钮': '3.2.1 Radio Button',
  '3.2.2 复选框': '3.2.2 Checkbox',
  '3.2.3 滚轮选择器': '3.2.3 Wheel Picker',
  '3.3 输入类': '3.3 Inputs',
  '3.3.1 文本框': '3.3.1 Text Field',
  '3.3.2 下拉选择': '3.3.2 Dropdown / Select',
  '3.3.3 调控': '3.3.3 Control',
  '3.4 导航类': '3.4 Navigation',
  '3.4.1 应用栏': '3.4.1 App Bar',
  '3.4.2 导航': '3.4.2 Navigation',
  '3.4.3 标签页': '3.4.3 Tabs',
  '3.4.4 面包屑': '3.4.4 Breadcrumbs',
  '3.4.5 分页': '3.4.5 Pagination',
  '3.4.6 步骤条': '3.4.6 Steps',
  '3.5 数据展示': '3.5 Data Display',
  '3.5.1 卡片': '3.5.1 Card',
  '3.5.2 列表 / 列表项': '3.5.2 List / List Tile',
  '3.5.3 头像': '3.5.3 Avatar',
  '3.5.4 分割线': '3.5.4 Divider',
  '3.5.5 徽标': '3.5.5 Badge',
  '3.6 反馈与浮层': '3.6 Feedback & Overlays',
  '3.6.1 对话框 / 模态框': '3.6.1 Dialog / Modal',
  '3.6.2 底部面板': '3.6.2 Bottom Sheet',
  '3.6.3 消息条 / 轻提示': '3.6.3 Snackbar / Toast',
  '3.6.4 工具提示': '3.6.4 Tooltip',
  '3.6.5 进度指示器': '3.6.5 Progress Indicator',
  '按钮': 'Buttons',
  '开关': 'Switch / Toggle',
  '单选按钮': 'Radio Button',
  '复选框': 'Checkbox',
  '滚轮选择器': 'Wheel Picker',
  '文本框': 'Text Field',
  '下拉选择': 'Dropdown / Select',
  '调控': 'Control',
  '应用栏': 'App Bar',
  '导航': 'Navigation',
  '标签页': 'Tabs',
  '面包屑': 'Breadcrumbs',
  '分页': 'Pagination',
  '步骤条': 'Steps',
  '卡片': 'Card',
  '列表 / 列表项': 'List / List Tile',
  '头像': 'Avatar',
  '分割线': 'Divider',
  '徽标': 'Badge',
  '对话框 / 模态框': 'Dialog / Modal',
  '底部面板': 'Bottom Sheet',
  '消息条 / 轻提示': 'Snackbar / Toast',
  '工具提示': 'Tooltip',
  '进度指示器': 'Progress Indicator',
  '4. 硬件 Hardware': '4. Hardware',
  '4.1 TFT 屏幕': '4.1 TFT Screens',
  '4.2 LED 屏幕': '4.2 LED Screens',
  '4.3 其它屏幕形态': '4.3 Other Screens',
  '5. 动效 Motion': '5. Motion',
  '5.1 背景动效': '5.1 Background Motion',
  '5.2 转场 Transitions': '5.2 Transitions',
  '5.3 微交互': '5.3 Micro-interactions',
  '多感官交互 Sensory': 'Sensory Interaction',
  '灯光 Lighting': 'Lighting',
  '触摸 Touch': 'Touch',
  '音效 Audio': 'Audio',
  '7. AI': '7. AI',
  '7.1 AI 视觉标准': '7.1 AI Visual Standards',
  '7.2 AI 使用标准': '7.2 AI Usage Guidelines',
  '8. 资产与推行 Assets': '8. Assets & Governance',
  '8.1 强制规范标准': '8.1 Mandatory Standards',
  '8.2 UT数据推导与沉淀': '8.2 UT Data',
  '8.3 Figma资产授权': '8.3 Figma Assets',
  '8.4 统一度验收机制': '8.4 Consistency QA',
  '9. 更新日志 Log': '9. Changelog',
};

(function initHaierNavigation() {
  const sidebar = document.getElementById('sidebar');
  const mobileButton = document.getElementById('mobile-menu-btn');
  const backdrop = document.getElementById('sidebar-backdrop');
  const mainContent = document.getElementById('main-content') || document.querySelector('main');

  if (!sidebar) return;

  const currentPage = window.location.pathname.split('/').pop() || 'haier_os_design_system.html';
  const currentLanguage = localStorage.getItem('haier-guideline-language') || 'zh';
  const sensorySubpages = new Set(['lighting.html', 'touch.html', 'audio.html']);
  let scrollSpyPausedUntil = 0;
  const stripNavNumber = (label) => label.replace(/^\d+(?:\.\d+)*\.?\s*/, '').trim();
  const zhNavLabel = (label) => {
    const stripped = stripNavNumber(label);
    return /[\u4e00-\u9fff]/.test(stripped) ? stripped.replace(/\s+[A-Za-z&].*$/, '').trim() : stripped;
  };
  const navLabel = (label) => currentLanguage === 'zh'
    ? zhNavLabel(label)
    : stripNavNumber(HAIER_NAV_LABEL_EN[label] || label);
  const normalizeHref = (href) =>
    href.replace(
      /^haier_os_design_system\.html(?=#)/,
      currentPage === 'haier_os_design_system.html' ? '' : 'haier_os_design_system.html'
    );
  const currentHash = window.location.hash.replace('#', '');
  const currentGroup = HAIER_NAV_GROUPS.find((group) =>
    group.items.some((item) => item.page === currentPage || item.href?.startsWith(`${currentPage}#`) || item.id === currentHash)
  )?.id;
  const openGroups = new Set(currentGroup ? [currentGroup] : []);

  const FALLBACK_I18N_EN = {
    '返回主页': 'Home',
    '返回主规范': 'Home',
    '返回基础': 'Home',
    '基础': 'Foundations',
    '视觉基础': 'Visual Foundations',
    '布局基础': 'Layout Foundations',
    '图标规范': 'Iconography',
    '图标': 'Iconography',
    '材质': 'Material',
    '层级（空间深度）': 'Hierarchy',
    '信息架构': 'Information Architecture',
    '核心要素': 'Hero Element',
    '排版': 'Spacing & Layout',
    '栅格系统': 'Grid System',
    '设计体验原则': 'User Experience Principles',
    '品牌': 'Brand Identity',
    '色彩': 'Color',
    '字体': 'Typography',
    '组件': 'Components',
    '硬件': 'Hardware',
    '动效': 'Motion',
    '多感官': 'Sensory',
    '资产与推行': 'Assets & Governance',
    '更新日志': 'Changelog',
    '© 2026 Haier Design 设计团队 · 内部保密': '© 2026 Casarte Design Lab · Internal Confidential'
  };
  Object.assign(FALLBACK_I18N_EN, window.HAIER_HARDWARE_I18N_EN || {});

  const PAGE_TITLE_EN = {
    'haier_os_design_system.html': 'Casarte Design | Multimodal & Cross-device Design Guidelines',
    'principles.html': 'Casarte Design | Principles',
    'design_principles.html': 'Casarte Design | User Experience Principles',
    'brand.html': 'Casarte Design | Brand',
    'foundations.html': 'Casarte Design | Foundations',
    'color_details.html': 'Casarte Design | Color',
    'typography_details.html': 'Casarte Design | Typography',
    'iconography_details.html': 'Casarte Design | Iconography',
    'materials_lighting_details.html': 'Casarte Design | Material',
    'spatial_depth_details.html': 'Casarte Design | Information Architecture',
    'hero_element_details.html': 'Casarte Design | Hero Element',
    'spacing_layout_details.html': 'Casarte Design | Spacing & Layout',
    'grid_system_details.html': 'Casarte Design | Grid System',
    'components.html': 'Casarte Design | Components',
    'hardware.html': 'Casarte Design | Hardware',
    'motion.html': 'Casarte Design | Motion',
    'sensory.html': 'Casarte Design | Sensory Interaction',
    'lighting.html': 'Casarte Design | Lighting',
    'touch.html': 'Casarte Design | Touch',
    'audio.html': 'Casarte Design | Audio',
    'ai.html': 'Casarte Design | AI',
    'assets.html': 'Casarte Design | Assets & Governance',
    'changelog.html': 'Casarte Design | Changelog',
  };

  const normalizeTopHomeLink = () => {
    if (!mainContent || currentPage === 'haier_os_design_system.html') return;

    const pageTitle = mainContent.querySelector('h1');
    const isSensorySubpage = sensorySubpages.has(currentPage);
    if (isSensorySubpage && pageTitle?.previousElementSibling?.tagName === 'P') {
      pageTitle.previousElementSibling.remove();
    }
    const pageIntro = isSensorySubpage ? null : pageTitle?.closest('section');
    const pageDescription = isSensorySubpage
      ? (pageTitle?.nextElementSibling?.tagName === 'P' ? pageTitle.nextElementSibling : null)
      : (pageIntro ? Array.from(pageIntro.children).find((element) => element.tagName === 'P') || pageIntro.querySelector('p') : null);
    if (pageIntro) pageIntro.classList.add('guideline-page-intro');
    pageTitle?.classList.add('guideline-page-title');
    pageDescription?.classList.add('guideline-page-description');

    const container = Array.from(mainContent.children).find((element) => element.id !== 'language-switcher');
    if (isSensorySubpage) {
      mainContent.classList.add('guideline-sensory-main');
      container?.classList.add('guideline-sensory-page');
    }
    let link = mainContent.querySelector('a[href="haier_os_design_system.html"], a[href="foundations.html"]');

    if (!link && container) {
      const wrapper = document.createElement('div');
      wrapper.className = 'guideline-top-actions flex items-center justify-between mb-8';
      wrapper.innerHTML = '<a href="haier_os_design_system.html" class="px-4 py-2 bg-white/50 hover:bg-white/90 rounded-full transition-colors flex items-center text-gray-700 shadow-sm border border-gray-200/50 backdrop-blur-md"><span class="text-sm font-semibold"></span></a>';
      container.prepend(wrapper);
      link = wrapper.querySelector('a');
    }

    if (!link) return;
    link.href = 'haier_os_design_system.html';
    link.className = 'guideline-home-link px-4 py-2 bg-white/50 hover:bg-white/90 rounded-full transition-colors flex items-center text-gray-700 shadow-sm border border-gray-200/50 backdrop-blur-md';
    const label = link.querySelector('span') || link;
    if (label !== link) label.className = 'text-sm font-semibold';
    label.dataset.i18nZh = '返回主页';
    label.dataset.i18nEn = 'Home';
    label.textContent = currentLanguage === 'zh' ? '返回主页' : 'Home';

    const actions = link.closest('div');
    const switcher = document.getElementById('language-switcher');
    if (actions) {
      actions.className = 'guideline-top-actions flex items-center justify-between mb-8';
      if (switcher && switcher.parentElement !== actions) actions.append(switcher);
    }
  };

  const applyFallbackTranslations = (language = currentLanguage) => {
    normalizeTopHomeLink();

    document.querySelectorAll('[data-i18n-zh][data-i18n-en]').forEach((element) => {
      element.textContent = element.dataset[language === 'zh' ? 'i18nZh' : 'i18nEn'];
    });

    if (language === 'en') {
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      let node;
      while ((node = walker.nextNode())) {
        if (['SCRIPT', 'STYLE', 'SVG', 'PATH', 'CODE'].includes(node.parentElement?.tagName)) continue;
        const text = node.nodeValue.trim();
        if (!FALLBACK_I18N_EN[text]) continue;
        const leading = node.nodeValue.match(/^\s*/)?.[0] || '';
        const trailing = node.nodeValue.match(/\s*$/)?.[0] || '';
        node.nodeValue = `${leading}${FALLBACK_I18N_EN[text]}${trailing}`;
      }
      if (PAGE_TITLE_EN[currentPage]) document.title = PAGE_TITLE_EN[currentPage];
    }
  };

  const initLanguageSwitcher = () => {
    if (!mainContent || document.getElementById('language-switcher')) return;

    const switcher = document.createElement('div');
    switcher.id = 'language-switcher';
    switcher.className = 'fixed top-6 right-6 md:static md:ml-auto z-50 pointer-events-none';
    switcher.innerHTML = `
      <button type="button" class="pointer-events-auto min-w-[72px] px-5 py-2 rounded-full bg-white/80 hover:bg-white text-gray-700 hover:text-[#C89B58] border border-white/60 shadow-sm backdrop-blur-md text-xs font-semibold transition-colors" aria-label="切换中英文" data-language-toggle>
        <span data-language-label>${currentLanguage === 'zh' ? 'EN' : '中文'}</span>
      </button>
    `;

    mainContent.prepend(switcher);
    document.documentElement.lang = currentLanguage === 'zh' ? 'zh-CN' : 'en';
    document.documentElement.dataset.guidelineLanguage = currentLanguage;

    switcher.querySelector('[data-language-toggle]').addEventListener('click', () => {
      const nextLanguage = (localStorage.getItem('haier-guideline-language') || 'zh') === 'zh' ? 'en' : 'zh';
      localStorage.setItem('haier-guideline-language', nextLanguage);
      document.documentElement.lang = nextLanguage === 'zh' ? 'zh-CN' : 'en';
      document.documentElement.dataset.guidelineLanguage = nextLanguage;
      switcher.querySelector('[data-language-label]').textContent = nextLanguage === 'zh' ? 'EN' : '中文';
      applyFallbackTranslations(nextLanguage);
      window.location.reload();
    });

    applyFallbackTranslations(currentLanguage);
  };

  const initNavigationStyleOverrides = () => {
    if (document.getElementById('haier-navigation-style-overrides')) return;

    const style = document.createElement('style');
    style.id = 'haier-navigation-style-overrides';
    style.textContent = `
      :root {
        --brand-primary: #E9BD85;
        --brand-hover: #C89B58;
        --brand-light: #FAF2E8;
      }

      body {
        background: #fcfbfa !important;
      }

      /* 磨砂光晕背景适配卡萨帝香槟金调 */
      .aura-background {
        position: fixed !important;
        inset: 0 !important;
        background:
          radial-gradient(circle at 12% 0, #f8ede0 0, transparent 40%),
          radial-gradient(circle at 90% 85%, #f5e9d9 0, transparent 42%),
          #fcfbfa !important;
      }

      .aura-background .aura-blob {
        display: none !important;
      }

      #sidebar,
      body > header.glass-panel {
        background: rgba(255, 255, 255, 0.85) !important;
        backdrop-filter: blur(22px) !important;
        -webkit-backdrop-filter: blur(22px) !important;
        border-color: rgba(255, 255, 255, 0.9) !important;
        box-shadow: 0 12px 36px rgba(233, 189, 133, 0.08) !important;
      }

      #sidebar {
        overflow-y: auto !important;
        scrollbar-width: none;
        scrollbar-color: #e5d8c8 transparent;
        transition: transform 0.28s ease, opacity 0.28s ease !important;
      }

      #sidebar:hover {
        scrollbar-width: thin;
        scrollbar-color: #e5d8c8 transparent;
      }

      #sidebar::-webkit-scrollbar {
        width: 0;
      }

      #sidebar:hover::-webkit-scrollbar {
        width: 8px;
      }

      #sidebar::-webkit-scrollbar-track {
        background: transparent;
      }

      #sidebar::-webkit-scrollbar-thumb {
        background: #e5d8c8;
        border-radius: 10px;
      }

      #main-content {
        background: transparent !important;
        transition: margin-left 0.28s ease !important;
      }

      .guideline-page-intro {
        margin-bottom: 3rem !important;
      }

      .guideline-page-title {
        margin-bottom: 1rem !important;
        color: #111827 !important;
        font-size: 2.25rem !important;
        line-height: 2.5rem !important;
        font-weight: 700 !important;
        letter-spacing: -0.025em !important;
      }

      .guideline-page-description {
        max-width: 48rem !important;
        color: #86868b !important;
        font-size: 1.125rem !important;
        line-height: 1.625 !important;
        font-weight: 400 !important;
      }

      .guideline-sensory-page {
        width: 100% !important;
        max-width: 1200px !important;
        margin-right: auto !important;
        margin-left: auto !important;
        padding-bottom: 6rem !important;
        font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif !important;
      }

      #main-content.guideline-sensory-main {
        padding: 1.5rem !important;
      }

      .guideline-sensory-page > .guideline-page-description {
        margin-bottom: 2.25rem !important;
      }

      .guideline-home-link {
        min-width: auto !important;
        padding: 0.5rem 1rem !important;
        border-radius: 9999px !important;
        color: #374151 !important;
        font-size: 0.875rem !important;
        line-height: 1.25rem !important;
      }

      .guideline-home-link:hover {
        color: #C89B58 !important;
      }

      [data-sidebar-collapse],
      #sidebar-restore-button {
        align-items: center;
        justify-content: center;
        width: 2.25rem;
        height: 2.25rem;
        border: 1px solid rgba(233, 189, 133, 0.3);
        border-radius: 0.75rem;
        background: rgba(255, 255, 255, 0.7);
        color: #667085;
        box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
        transition: color 0.2s ease, background 0.2s ease, transform 0.2s ease;
      }

      [data-sidebar-collapse]:hover,
      #sidebar-restore-button:hover {
        color: #C89B58;
        background: rgba(255, 255, 255, 0.96);
      }

      #sidebar-restore-button {
        display: none;
        position: fixed;
        top: 1.5rem;
        left: 1.5rem;
        z-index: 49;
      }

      @media (min-width: 768px) {
        #main-content.guideline-sensory-main {
          padding: 2.5rem !important;
        }

        .guideline-page-title {
          font-size: 3rem !important;
          line-height: 1 !important;
        }

        body.haier-sidebar-collapsed #sidebar {
          transform: translateX(-100%) !important;
          opacity: 0 !important;
          pointer-events: none !important;
        }

        body.haier-sidebar-collapsed #main-content {
          margin-left: 0 !important;
        }

        body.haier-sidebar-collapsed #sidebar-restore-button {
          display: flex;
        }
      }

      @media (min-width: 1024px) {
        #main-content.guideline-sensory-main {
          padding: 3rem !important;
        }
      }

      /* 统一鼠标悬浮高亮色 */
      a:hover,
      .sidebar-group-trigger:hover,
      .sidebar-nav-item:hover {
        color: var(--brand-hover) !important;
      }

      [class~="hover:text-blue-600"]:hover,
      [class~="hover:text-blue-700"]:hover,
      .group:hover [class~="group-hover:text-blue-600"],
      .group:hover [class~="group-hover:text-blue-600/70"],
      .group:hover [class~="group-hover:text-blue-700"],
      .icon-tab:hover,
      .tab-btn:hover {
        color: var(--brand-hover) !important;
      }

      [class~="hover:bg-blue-600"]:hover,
      .group:hover [class~="group-hover:bg-blue-600"] {
        background-color: var(--brand-hover) !important;
      }

      .icon-slot:hover {
        color: var(--brand-hover) !important;
        box-shadow: inset 0 0 0 1px var(--brand-hover) !important;
      }

      /* 卡萨帝 Logo 直角小方块容器（带品牌色底色与自适应防空白内边距） */
      .haier-logo-container {
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        width: 4rem !important;
        height: 4rem !important;
        flex: 0 0 4rem !important;
        font-size: 0 !important;
        background: var(--brand-primary) !important;
        border: 0 !important;
        border-radius: 0 !important;
        overflow: hidden !important;
        padding: 0.5rem !important;
        box-sizing: border-box !important;
      }

      .haier-logo-container img {
        display: block !important;
        width: 100% !important;
        height: 100% !important;
        object-fit: contain !important;
        border-radius: 0 !important;
      }

      /* 侧边栏整体背景渐变 */
      #sidebar {
        background: linear-gradient(180deg, #ffffff 0%, #fcf7f1 100%) !important;
        backdrop-filter: none !important;
        -webkit-backdrop-filter: none !important;
        border-radius: 0 !important;
        border-right: 1px solid #f2e7d8 !important;
      }

      .sidebar-nav-item.nav-child {
        border-left: 0 !important;
        padding-left: 1.75rem !important;
      }

      .sidebar-nav-item {
        border-left-width: 0 !important;
        font-weight: 400 !important;
      }

      .sidebar-group-trigger {
        font-weight: 400 !important;
      }

      .sidebar-group-panel .sidebar-nav-item:not(.nav-child) {
        padding-left: 1.75rem !important;
      }

      .sidebar-nav-item.nav-disabled {
        color: rgba(107, 114, 128, 0.55) !important;
        cursor: default !important;
        pointer-events: none !important;
      }

      .sidebar-nav-item.nav-child.active {
        border-left-color: transparent !important;
      }

      /* 菜单高亮与激活选中态（金色） */
      .sidebar-nav-item.active {
        color: #B28241 !important;
        background: linear-gradient(90deg, var(--brand-light) 0%, transparent 100%) !important;
        border-left: 3px solid var(--brand-primary) !important;
        border-radius: 0 !important;
        font-weight: 600 !important;
      }
    `;
    document.head.appendChild(style);
  };

  const navItemTemplate = (item) => {
    if (item.disabled) {
      return `<span class="sidebar-nav-item nav-disabled block px-4 py-2.5 text-sm font-normal rounded-xl transition-colors" data-nav-id="${item.id || ''}">${navLabel(item.label)}</span>`;
    }

    const [itemPage, itemHash] = item.href.split('#');
    const isCurrentPage =
      item.page === currentPage ||
      (itemPage === currentPage && (!currentHash || itemHash === currentHash)) ||
      (!itemPage && itemHash && itemHash === currentHash);
    const childPrefix = '';
    const baseClasses = item.standalone
      ? 'sidebar-nav-item block px-4 py-2.5 text-sm font-normal text-gray-500/80 hover:text-[#C89B58] rounded-xl transition-colors'
      : item.child
        ? 'sidebar-nav-item nav-child block px-4 py-2 text-sm font-normal text-gray-600 hover:text-[#C89B58] pl-7 rounded-r-lg transition-colors'
        : 'sidebar-nav-item block px-4 py-2.5 text-sm font-normal text-gray-700 hover:text-[#C89B58] rounded-xl transition-colors';

    return `<a href="${normalizeHref(item.href)}" class="${baseClasses}${isCurrentPage ? ' active' : ''}" data-nav-id="${item.id || ''}" data-nav-page="${item.page || ''}">${childPrefix}${navLabel(item.label)}</a>`;
  };

  const groupTemplate = (group) => {
    const isOpen = openGroups.has(group.id);

    return `
      <div class="sidebar-nav-group" data-nav-group="${group.id}">
        <button type="button" class="sidebar-group-trigger w-full flex items-center justify-between gap-3 px-4 py-2.5 mt-2 text-left text-sm font-normal text-gray-500/80 hover:text-[#C89B58] hover:bg-white/40 rounded-xl transition-colors" aria-expanded="${isOpen}" aria-controls="nav-panel-${group.id}" data-nav-toggle="${group.id}">
          <span>${navLabel(group.label)}</span>
          <svg class="w-4 h-4 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
        </button>
        <div id="nav-panel-${group.id}" class="sidebar-group-panel mt-1 space-y-1 ${isOpen ? '' : 'hidden'}">
          ${group.items.map(navItemTemplate).join('')}
        </div>
      </div>`;
  };

  sidebar.innerHTML = `
    <div class="relative p-8 pb-4">
      <button type="button" class="hidden md:flex absolute top-6 right-5" aria-label="收起左侧导航" title="收起导航" data-sidebar-collapse>
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
      </button>
      <a href="haier_os_design_system.html" class="haier-logo-container w-16 h-16 mb-4 text-xl shadow-md" aria-label="Casarte Design 首页"><img src="assets/icons/casarte-logo-03.png" alt="Casarte"></a>
      <h1 class="text-2xl font-bold tracking-tight text-gray-900">Casarte Design</h1>
      <p class="text-sm text-gray-500 mt-1">NEXT UX Guideline 1.0.0</p>
    </div>
    <nav class="flex-1 px-4 pb-12 space-y-1" aria-label="章节目录">
      ${HAIER_NAV_GROUPS.map(groupTemplate).join('')}
      <div class="mt-2 pt-2 border-t border-amber-900/10">
        ${HAIER_NAV_STANDALONE_ITEMS.map(navItemTemplate).join('')}
    </div>
    </nav>`;

  const sidebarRestoreButton = document.createElement('button');
  sidebarRestoreButton.id = 'sidebar-restore-button';
  sidebarRestoreButton.type = 'button';
  sidebarRestoreButton.setAttribute('aria-label', '展开左侧导航');
  sidebarRestoreButton.setAttribute('title', '展开导航');
  sidebarRestoreButton.innerHTML = '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>';
  document.body.appendChild(sidebarRestoreButton);

  const setSidebarCollapsed = (collapsed, persist = true) => {
    document.body.classList.toggle('haier-sidebar-collapsed', collapsed);
    sidebar.querySelector('[data-sidebar-collapse]')?.setAttribute('aria-expanded', String(!collapsed));
    sidebarRestoreButton.setAttribute('aria-expanded', String(!collapsed));
    if (persist) localStorage.setItem('haier-guideline-sidebar-collapsed', collapsed ? '1' : '0');
  };

  setSidebarCollapsed(localStorage.getItem('haier-guideline-sidebar-collapsed') === '1', false);
  sidebar.querySelector('[data-sidebar-collapse]')?.addEventListener('click', () => setSidebarCollapsed(true));
  sidebarRestoreButton.addEventListener('click', () => setSidebarCollapsed(false));

  document.querySelectorAll('.haier-logo-container').forEach((logo) => {
    logo.setAttribute('aria-label', 'Casarte');
    logo.innerHTML = '<img src="assets/icons/casarte-logo-03.png" alt="Casarte">';
  });

  const expandGroup = (groupId) => {
    openGroups.clear();
    sidebar.querySelectorAll('[data-nav-toggle]').forEach((button) => {
      button.setAttribute('aria-expanded', 'false');
      button.querySelector('svg')?.classList.remove('rotate-180');
    });
    sidebar.querySelectorAll('.sidebar-group-panel').forEach((panel) => {
      panel.classList.add('hidden');
    });

    openGroups.add(groupId);
    const group = sidebar.querySelector(`[data-nav-group="${groupId}"]`);
    const trigger = sidebar.querySelector(`[data-nav-toggle="${groupId}"]`);
    const panel = sidebar.querySelector(`#nav-panel-${groupId}`);

    group?.classList.add('is-open');
    trigger?.setAttribute('aria-expanded', 'true');
    trigger?.querySelector('svg')?.classList.add('rotate-180');
    panel?.classList.remove('hidden');
  };

  const toggleGroup = (groupId) => {
    const isOpen = openGroups.has(groupId);
    const trigger = sidebar.querySelector(`[data-nav-toggle="${groupId}"]`);
    const panel = sidebar.querySelector(`#nav-panel-${groupId}`);

    if (isOpen) {
      openGroups.delete(groupId);
      trigger?.setAttribute('aria-expanded', 'false');
      trigger?.querySelector('svg')?.classList.remove('rotate-180');
      panel?.classList.add('hidden');
    } else {
      expandGroup(groupId);
    }
  };

  sidebar.querySelectorAll('[data-nav-toggle]').forEach((button) => {
    button.addEventListener('click', () => toggleGroup(button.dataset.navToggle));
  });

  const setMenuOpen = (open) => {
    sidebar.classList.toggle('hidden', !open && window.innerWidth < 768);
    sidebar.classList.toggle('flex', open || window.innerWidth >= 768);
    sidebar.classList.toggle('z-50', open);
    sidebar.classList.toggle('bg-white/90', open);
    sidebar.setAttribute('aria-hidden', String(!open && window.innerWidth < 768));
    mobileButton?.setAttribute('aria-expanded', String(open));
    backdrop?.classList.toggle('hidden', !open);
  };

  mobileButton?.setAttribute('aria-controls', 'sidebar');
  mobileButton?.setAttribute('aria-expanded', 'false');
  mobileButton?.addEventListener('click', () => setMenuOpen(sidebar.classList.contains('hidden')));
  backdrop?.addEventListener('click', () => setMenuOpen(false));

  const navLinks = sidebar.querySelectorAll('.sidebar-nav-item');
  const setActiveNavLink = (activeLink) => {
    navLinks.forEach((link) => {
      link.classList.toggle('active', link === activeLink);
    });
  };

  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const href = link.getAttribute('href') || '';
      const [page, hash] = href.split('#');
      const isSamePageHash = hash && (!page || page === currentPage);

      if (isSamePageHash && mainContent) {
        const target = document.getElementById(hash);
        if (target) {
          event.preventDefault();
          scrollSpyPausedUntil = Date.now() + 300;
          setActiveNavLink(link);
          const previousScrollBehavior = mainContent.style.scrollBehavior;
          mainContent.style.scrollBehavior = 'auto';
          mainContent.scrollTop = Math.max(target.offsetTop - 40, 0);
          mainContent.style.scrollBehavior = previousScrollBehavior;
          history.replaceState(null, '', `#${hash}`);
        }
      }

      if (window.innerWidth < 768) setMenuOpen(false);
    });
  });

  initNavigationStyleOverrides();
  initLanguageSwitcher();

  if (mainContent && currentHash) {
    const initialTarget = document.getElementById(currentHash);
    if (initialTarget) {
      requestAnimationFrame(() => {
        mainContent.scrollTop = Math.max(initialTarget.offsetTop - 40, 0);
        const initialLink = sidebar.querySelector(`[data-nav-id="${currentHash}"]`);
        if (initialLink) {
          scrollSpyPausedUntil = Date.now() + 300;
          setActiveNavLink(initialLink);
        }
      });
    }
  }

  if (mainContent) {
    const observedSections = [...document.querySelectorAll('[id]')].filter((element) =>
      sidebar.querySelector(`[data-nav-id="${element.id}"]`)
    );

    if (observedSections.length) {
      const updateActiveLink = () => {
        if (Date.now() < scrollSpyPausedUntil) return;

        let currentId = observedSections[0]?.id || '';
        observedSections.forEach((section) => {
          if (mainContent.scrollTop >= section.offsetTop - 120) currentId = section.id;
        });
        navLinks.forEach((link) => {
          link.classList.toggle('active', Boolean(link.dataset.navId) && link.dataset.navId === currentId);
        });

        const activeGroup = HAIER_NAV_GROUPS.find((group) =>
          group.items.some((item) => item.id === currentId)
        );
        if (activeGroup) expandGroup(activeGroup.id);
      };

      mainContent.addEventListener('scroll', updateActiveLink, { passive: true });
      updateActiveLink();
    }
  }

  if (window.innerWidth >= 768) {
    sidebar.setAttribute('aria-hidden', 'false');
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
      sidebar.classList.remove('hidden');
      sidebar.classList.add('flex');
      sidebar.setAttribute('aria-hidden', 'false');
      backdrop?.classList.add('hidden');
    } else if (!sidebar.classList.contains('z-50')) {
      sidebar.classList.add('hidden');
      sidebar.setAttribute('aria-hidden', 'true');
    }
  });
})();