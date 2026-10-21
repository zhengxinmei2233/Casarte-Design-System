(() => {
if (window.__casarteNavigationLoaded) return;
window.__casarteNavigationLoaded = true;
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
      { label: '2.1.5 背景', href: 'background_details.html', page: 'background_details.html', child: true },
      { label: '2.2 信息架构', id: 'foundations-layout', page: 'foundations.html', disabled: true },
      { label: '2.2.1 信息与交互', href: 'spatial_depth_details.html', page: 'spatial_depth_details.html', child: true },
      { label: '2.2.2 LED布局', href: 'led_rules_details.html', page: 'led_rules_details.html', child: true },
      { label: '2.2.3 TFT布局', href: 'casarte_tft_rules_details.html', page: 'casarte_tft_rules_details.html', child: true },
      { label: '2.2.4 组合布局', href: 'casarte_tftled_rules_details.html', page: 'casarte_tftled_rules_details.html', child: true },
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
      { label: '选择器', href: 'component_wheel_picker.html', page: 'component_wheel_picker.html', child: true },
      { label: '3.3 输入类', id: 'components-input', disabled: true },
      { label: '文本框', href: 'component_text_field.html', page: 'component_text_field.html', child: true },
      { label: '键盘', href: 'component_dropdown_select.html', page: 'component_dropdown_select.html', child: true },
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
  '2. 基础 Foundations': '2. Foundations',
  '2.1 视觉基础': '2.1 Visual Foundations',
  '2.1.1 色彩': '2.1.1 Color',
  '2.1.2 字体': '2.1.2 Typography',
  '2.1.3 图标': '2.1.3 Iconography',
  '2.1.4 材质': '2.1.4 Material',
  '2.1.5 背景': '2.1.5 Background',
  '2.2 信息架构': '2.2 Information Architecture',
  '2.2.1 信息与交互': '2.2.1 Information & Interaction',
  '2.2.2 LED布局': '2.2.2 LED Layout',
  '2.2.3 TFT布局': '2.2.3 TFT Layout',
  '2.2.4 组合布局': '2.2.4 Combined Layout',
  '3. 组件 Components': '3. Components',
  '3.1 操作类': '3.1 Actions',
  '按钮': 'Button',
  '开关': 'Switch / Toggle',
  '3.2 选择类': '3.2 Selection',
  '单选按钮': 'Radio Button',
  '复选框': 'Checkbox',
  '选择器': 'Selector',
  '3.3 输入类': '3.3 Inputs',
  '文本框': 'Text Field',
  '键盘': 'Keyboard',
  '调控': 'Control',
  '3.4 导航类': '3.4 Navigation',
  '应用栏': 'App Bar',
  '导航': 'Navigation Bar',
  '标签页': 'Tabs',
  '面包屑': 'Breadcrumbs',
  '分页': 'Pagination',
  '步骤条': 'Steps',
  '3.5 数据展示': '3.5 Data Display',
  '卡片': 'Card',
  '列表 / 列表项': 'List / List Item',
  '头像': 'Avatar',
  '分割线': 'Divider',
  '徽标': 'Badge',
  '3.6 反馈与浮层': '3.6 Feedback & Overlays',
  '对话框 / 模态框': 'Dialog / Modal',
  '底部面板': 'Bottom Sheet',
  '消息条 / 轻提示': 'Snackbar / Toast',
  '工具提示': 'Tooltip',
  '进度指示器': 'Progress Indicator',
  '4. 硬件 Hardware': '4. Hardware',
  '4.1 TFT 屏幕': '4.1 TFT Screen',
  '4.2 LED 屏幕': '4.2 LED Screen',
  '4.3 其它屏幕形态': '4.3 Other Formats',
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
  '7.2 AI 使用标准': '7.2 AI Usage Standards',
  '8. 资产与推行 Assets': '8. Assets & Governance',
  '8.1 强制规范标准': '8.1 Mandatory Standards',
  '8.2 UT数据推导与沉淀': '8.2 UT Data & Insights',
  '8.3 Figma资产授权': '8.3 Figma Assets Authorization',
  '8.4 统一度验收机制': '8.4 Uniformity Acceptance',
  '9. 更新日志 Log': '9. Changelog',
};

(function initHaierNavigation() {
  const sidebar = document.getElementById('sidebar');
  const mobileButton = document.getElementById('mobile-menu-btn');
  const backdrop = document.getElementById('sidebar-backdrop');
  const mainContent = document.getElementById('main-content') || document.querySelector('main');

  if (!sidebar) return;

  const currentPage = decodeURIComponent(window.location.pathname.split('/').pop() || 'haier_os_design_system.html').replace(/\(\d+\)(?=\.html$)/, '');
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
  
  const isPrinciplesMainPage = currentPage === 'principles.html';
  const isFoundationsMainPage = currentPage === 'foundations.html';
  const isComponentsMainPage = currentPage === 'components.html';
  const isHardwareMainPage = currentPage === 'hardware.html';
  const isMotionMainPage = currentPage === 'motion.html';

  const currentGroup = HAIER_NAV_GROUPS.find((group) =>
    group.items.some((item) => item.page === currentPage || item.href?.startsWith(`${currentPage}#`) || item.id === currentHash)
  )?.id || (
    isPrinciplesMainPage ? 'principles' : 
    isFoundationsMainPage ? 'foundations' : 
    isComponentsMainPage ? 'components' : 
    isHardwareMainPage ? 'hardware' : 
    isMotionMainPage ? 'motion' : undefined
  );
  
  const openGroups = new Set(currentGroup ? [currentGroup] : []);

  const FALLBACK_I18N_EN = {
    '返回主页': 'Home',
    '返回主规范': 'Home',
    '返回基础': 'Home',
    '基础': 'Foundations',
    '视觉基础': 'Visual Foundations',
    '信息架构': 'Information Architecture',
    '图标规范': 'Iconography',
    '图标': 'Iconography',
    '材质': 'Material',
    '背景': 'Background',
    '层级（空间深度）': 'Hierarchy',
    '信息与交互': 'Information & Interaction',
    'LED布局': 'LED Layout',
    'TFT布局': 'TFT Layout',
    '组合布局': 'Combined Layout',
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
    'background_details.html': 'Casarte Design | Background Guidelines',
    'spatial_depth_details.html': 'Casarte Design | Information Architecture',
    'led_rules_details.html': 'Casarte Design | Hero Element',
    'casarte_tft_rules_details.html': 'Casarte Design | TFT Layout',
    'casarte_tftled_rules_details.html': 'Casarte Design | Grid System',
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
      wrapper.className = 'guideline-top-actions hidden md:flex items-center mb-8'; // 保持与材质页完全一致的 mb-8 间距
      // 将 rounded-full 改为 rounded-none 保持直角/硬边设计规范
      wrapper.innerHTML = '<a href="haier_os_design_system.html" class="px-5 py-2.5 bg-white/15 hover:bg-white/25 transition-colors flex items-center text-white border border-white/20 rounded-none"><span class="text-sm font-medium tracking-wide"></span></a>';
      container.prepend(wrapper);
      link = wrapper.querySelector('a');
    }

    if (!link) return;
    link.href = 'haier_os_design_system.html';
    link.className = 'px-5 py-2.5 bg-white/15 hover:bg-white/25 transition-colors flex items-center text-white border border-white/20 rounded-none';
    const label = link.querySelector('span') || link;
    if (label !== link) label.className = 'text-sm font-medium tracking-wide';
    label.dataset.i18nZh = '返回主页';
    label.dataset.i18nEn = 'Home';
    label.textContent = currentLanguage === 'zh' ? '返回主页' : 'Home';

    const actions = link.closest('div');
    const switcher = document.getElementById('language-switcher');
    if (actions) {
      actions.className = 'guideline-top-actions hidden md:flex items-center mb-8';
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
      <button type="button" class="pointer-events-auto min-w-[72px] px-5 py-2 rounded-none bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-semibold transition-colors" aria-label="切换中英文" data-language-toggle>
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
        --bg-deep: #0D0D0F;
        --panel-bg: rgba(22, 22, 26, 0.75);
        --border-gray: rgba(255, 255, 255, 0.1);
        --text-gold: #E9BD85;
      }

      body {
        background-color: var(--bg-deep) !important;
        color: #F5F5F7 !important;
      }

      .ambient-bg {
        position: fixed !important;
        top: 0 !important; left: 0 !important; right: 0 !important; bottom: 0 !important;
        z-index: -1 !important;
        background: radial-gradient(circle at 50% 0%, #1E1812 0%, #0D0D0F 70%) !important;
      }

      #sidebar,
      body > header.gallery-panel,
      body > header.glass-panel {
        background: #141418 !important;
        backdrop-filter: blur(40px) !important;
        -webkit-backdrop-filter: blur(40px) !important;
        border-color: rgba(255, 255, 255, 0.12) !important;
        box-shadow: 4px 0 30px rgba(0, 0, 0, 0.5) !important;
        border-radius: 0 !important;
      }

      #sidebar {
        overflow-y: auto !important;
        scrollbar-width: thin;
        scrollbar-color: #2A2A30 transparent;
        transition: transform 0.28s ease, opacity 0.28s ease !important;
      }

      #main-content {
        background: transparent !important;
        transition: margin-left 0.28s ease !important;
      }

      .guideline-page-intro {
        margin-bottom: 2rem !important;
      }

      .guideline-top-actions {
        margin-bottom: 2rem !important;
      }

      [data-sidebar-collapse],
      #sidebar-restore-button {
        align-items: center;
        justify-content: center;
        width: 2.25rem;
        height: 2.25rem;
        border: 1px solid rgba(255, 255, 255, 0.15);
        border-radius: 0 !important;
        background: #1C1C22;
        color: #9CA3AF;
        box-shadow: 0 4px 14px rgba(0, 0, 0, 0.4);
        transition: color 0.2s ease, background 0.2s ease, transform 0.2s ease;
      }

      [data-sidebar-collapse]:hover,
      #sidebar-restore-button:hover {
        color: var(--text-gold);
        background: #25252C;
      }

      #sidebar-restore-button {
        display: none;
        position: fixed;
        top: 1.5rem;
        left: 1.5rem;
        z-index: 49;
      }

      @media (min-width: 768px) {
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

      a:hover,
      .sidebar-group-trigger:hover,
      .sidebar-nav-item:hover {
        color: var(--text-gold) !important;
      }

      .haier-logo-container {
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        width: 3.5rem !important;
        height: 3.5rem !important;
        flex: 0 0 3.5rem !important;
        background: var(--text-gold) !important;
        border: 0 !important;
        border-radius: 0 !important;
        overflow: hidden !important;
        padding: 0.4rem !important;
        box-sizing: border-box !important;
      }

      .haier-logo-container img {
        display: block !important;
        width: 100% !important;
        height: 100% !important;
        object-fit: contain !important;
      }

      .sidebar-nav-item.nav-child {
        padding-left: 1.75rem !important;
      }

      .sidebar-nav-item.active {
        color: var(--text-gold) !important;
        background: rgba(233, 189, 133, 0.1) !important;
        border-left: 3px solid var(--text-gold) !important;
        font-weight: 600 !important;
      }

      /* Public Casarte sidebar: independent of page-scoped Tailwind and resets.
         Change navigation styles here; all selectors stay inside the sidebar/control surfaces. */
      #sidebar#sidebar {
        box-sizing:border-box; position:fixed; inset:0 auto 0 0; width:288px; height:100vh;
        display:flex; flex-direction:column; padding:0; margin:0;
        border:1px solid rgba(255,255,255,.12)!important; border-radius:0!important;
        background:#141418!important; color:#F5F5F7;
        font:400 16px/24px 'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;
        z-index:40; overflow-x:hidden; overflow-y:auto;
      }
      #sidebar#sidebar *, #sidebar#sidebar *::before, #sidebar#sidebar *::after {
        box-sizing:border-box; border-width:0; border-style:solid; border-color:#E5E7EB;
      }
      #sidebar#sidebar a { text-decoration:none; }
      #sidebar#sidebar button { appearance:none; margin:0; padding:0; border-width:0; background:transparent; color:inherit; font:inherit; text-transform:none; cursor:pointer; }
      #sidebar#sidebar > .relative { position:relative; padding:24px 24px 16px; }
      #sidebar#sidebar h1 { padding:0; margin:0; font-size:20px; line-height:28px; font-weight:700; letter-spacing:-.025em; color:#FFF!important; }
      #sidebar#sidebar p { padding:0; margin:2px 0 0; font-size:12px; line-height:16px; font-weight:400; color:#9CA3AF!important; }
      #sidebar#sidebar nav { flex:1; padding:0 12px 48px; margin:0; }
      #sidebar#sidebar .sidebar-nav-group + .sidebar-nav-group { margin-top:4px; }
      #sidebar#sidebar .sidebar-group-header { display:flex; width:100%; justify-content:space-between; align-items:center; gap:8px; padding:10px 16px; margin:8px 0 0; font-size:14px; line-height:20px; font-weight:400; }
      #sidebar#sidebar .sidebar-group-header:hover { background:rgba(255,255,255,.05); }
      #sidebar#sidebar .sidebar-group-header > a { flex:1; text-align:left; color:#9CA3AF; }
      #sidebar#sidebar .sidebar-group-header > a.font-semibold { color:#E9BD85; font-weight:600; }
      #sidebar#sidebar .sidebar-group-header > button { flex-shrink:0; padding:4px; font-size:14px; line-height:20px; font-weight:400; color:#9CA3AF!important; }
      #sidebar#sidebar .sidebar-group-header > button:hover { color:#FFF!important; }
      #sidebar#sidebar svg { display:block; width:16px; height:16px; flex-shrink:0; }
      #sidebar#sidebar [data-nav-toggle] svg { transition:transform .15s ease; }
      #sidebar#sidebar [data-nav-toggle][aria-expanded="true"] svg { transform:rotate(180deg); }
      #sidebar#sidebar .sidebar-group-trigger { display:flex; width:100%; align-items:center; justify-content:space-between; gap:12px; padding:10px 16px; margin:8px 0 0; text-align:left; font-size:14px; line-height:20px; font-weight:400; color:#9CA3AF!important; }
      #sidebar#sidebar .sidebar-group-trigger:hover { color:#E9BD85!important; background:rgba(255,255,255,.05); }
      #sidebar#sidebar .sidebar-group-panel { margin-top:4px; }
      #sidebar#sidebar .sidebar-group-panel.hidden { display:none; }
      #sidebar#sidebar .sidebar-group-panel > * + * { margin-top:4px; }
      #sidebar#sidebar .sidebar-nav-item { display:block; padding:10px 16px; border-width:0; margin:0; font-size:14px; line-height:20px; font-weight:400; color:#D1D5DB!important; border-radius:0; }
      #sidebar#sidebar .sidebar-nav-item.text-gray-400 { color:#9CA3AF!important; }
      #sidebar#sidebar .sidebar-nav-item.nav-child { padding:8px 16px 8px 28px!important; color:#9CA3AF!important; }
      #sidebar#sidebar .sidebar-nav-item.nav-disabled { color:#F5F5F7!important; }
      #sidebar#sidebar .sidebar-group-panel > * + * { margin-top:4px; }
      #sidebar#sidebar a.sidebar-nav-item:hover, #sidebar#sidebar .sidebar-group-header > a:hover { color:#E9BD85!important; }
      #sidebar#sidebar .sidebar-nav-item.active, #sidebar#sidebar .sidebar-nav-item.active:hover { color:#E9BD85!important; background:rgba(233,189,133,.1)!important; border-left:3px solid #E9BD85!important; font-weight:600!important; }
      #sidebar#sidebar nav > div:last-child { margin-top:4px; padding-top:8px; border-top:1px solid rgba(255,255,255,.1); }
      #sidebar#sidebar .haier-logo-container { font-family:Arial,Helvetica,sans-serif; font-size:20px; line-height:28px; font-weight:700; color:#111!important; text-decoration:none; margin:0 0 12px; }
      #sidebar#sidebar [data-sidebar-collapse], #sidebar-restore-button#sidebar-restore-button {
        box-sizing:border-box; width:36px; height:36px; align-items:center; justify-content:center; padding:0; margin:0;
        border:1px solid rgba(255,255,255,.15); border-radius:0!important; background:#1C1C22; color:#9CA3AF!important;
        font:400 16px/24px 'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;
        cursor:pointer;
      }
      #sidebar#sidebar [data-sidebar-collapse] { display:flex; position:absolute; top:20px; right:16px; }
      #sidebar#sidebar [data-sidebar-collapse]:hover, #sidebar-restore-button#sidebar-restore-button:hover { color:#E9BD85!important; background:#25252C; }
      #sidebar-restore-button#sidebar-restore-button svg { display:block; width:16px; height:16px; box-sizing:border-box; border:0 solid #E5E7EB; }
      #sidebar#sidebar a:focus-visible, #sidebar#sidebar button:focus-visible, #sidebar-restore-button#sidebar-restore-button:focus-visible { outline:2px solid #E9BD85; outline-offset:2px; }
      #sidebar-backdrop#sidebar-backdrop { display:none; position:fixed; inset:0; background:rgba(0,0,0,.7); backdrop-filter:blur(4px); z-index:55; }
      @media(min-width:768px) {
        body.haier-sidebar-collapsed #main-content#main-content { margin-left:0!important; }
      }
      @media(max-width:767px) {
        #sidebar#sidebar { display:none; max-width:calc(100vw - 48px); z-index:60!important; }
        #sidebar#sidebar[data-menu-open="true"] { display:flex; }
        #sidebar-backdrop#sidebar-backdrop[data-menu-open="true"] { display:block; }
        #sidebar#sidebar [data-sidebar-collapse] { display:none; }
      }
      @media(prefers-reduced-motion:reduce) { #sidebar#sidebar, #sidebar#sidebar * { transition:none!important; } }
    `;
    document.head.appendChild(style);
  };

  const navItemTemplate = (item) => {
    if (item.disabled) {
      return `<span class="sidebar-nav-item nav-disabled block px-4 py-2.5 text-sm font-normal rounded-none transition-colors" data-nav-id="${item.id || ''}">${navLabel(item.label)}</span>`;
    }

    const [itemPage, itemHash] = item.href.split('#');
    const isCurrentPage =
      !isPrinciplesMainPage && !isFoundationsMainPage && !isComponentsMainPage && !isHardwareMainPage && !isMotionMainPage && (
        item.page === currentPage ||
        (itemPage === currentPage && (!currentHash || itemHash === currentHash)) ||
        (!itemPage && itemHash && itemHash === currentHash)
      );
    const baseClasses = item.standalone
      ? 'sidebar-nav-item block px-4 py-2.5 text-sm font-normal text-gray-400 hover:text-[#E9BD85] rounded-none transition-colors'
      : item.child
        ? 'sidebar-nav-item nav-child block px-4 py-2 text-sm font-normal text-gray-400 hover:text-[#E9BD85] pl-7 rounded-none transition-colors'
        : 'sidebar-nav-item block px-4 py-2.5 text-sm font-normal text-gray-300 hover:text-[#E9BD85] rounded-none transition-colors';

    return `<a href="${normalizeHref(item.href)}" class="${baseClasses}${isCurrentPage ? ' active' : ''}" data-nav-id="${item.id || ''}" data-nav-page="${item.page || ''}">${navLabel(item.label)}</a>`;
  };

  const groupTemplate = (group) => {
    const isOpen = openGroups.has(group.id);

    if (['principles', 'foundations', 'components', 'hardware', 'motion'].includes(group.id)) {
      const isTargetPage = 
        (group.id === 'principles' && isPrinciplesMainPage) || 
        (group.id === 'foundations' && isFoundationsMainPage) ||
        (group.id === 'components' && isComponentsMainPage) ||
        (group.id === 'hardware' && isHardwareMainPage) ||
        (group.id === 'motion' && isMotionMainPage);
        
      const targetUrl = 
        group.id === 'principles' ? 'principles.html' : 
        group.id === 'foundations' ? 'foundations.html' : 
        group.id === 'components' ? 'components.html' : 
        group.id === 'hardware' ? 'hardware.html' : 'motion.html';
      
      return `
      <div class="sidebar-nav-group" data-nav-group="${group.id}">
        <div class="sidebar-group-header w-full flex items-center justify-between gap-2 px-4 py-2.5 mt-2 text-sm font-normal hover:bg-white/5 transition-colors">
          <a href="${targetUrl}" class="flex-1 text-left ${isTargetPage ? 'text-[#E9BD85] font-semibold' : 'text-gray-400 hover:text-[#E9BD85]'}">${navLabel(group.label)}</a>
          <button type="button" class="p-1 text-gray-400 hover:text-white transition-colors" aria-expanded="${isOpen}" aria-controls="nav-panel-${group.id}" data-nav-toggle="${group.id}" aria-label="展开或收起子菜单">
            <svg class="w-4 h-4 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
          </button>
        </div>
        <div id="nav-panel-${group.id}" class="sidebar-group-panel mt-1 space-y-1 ${isOpen ? '' : 'hidden'}">
          ${group.items.map(navItemTemplate).join('')}
        </div>
      </div>`;
    }

    return `
      <div class="sidebar-nav-group" data-nav-group="${group.id}">
        <button type="button" class="sidebar-group-trigger w-full flex items-center justify-between gap-3 px-4 py-2.5 mt-2 text-left text-sm font-normal text-gray-400 hover:text-[#E9BD85] hover:bg-white/5 rounded-none transition-colors" aria-expanded="${isOpen}" aria-controls="nav-panel-${group.id}" data-nav-toggle="${group.id}">
          <span>${navLabel(group.label)}</span>
          <svg class="w-4 h-4 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
        </button>
        <div id="nav-panel-${group.id}" class="sidebar-group-panel mt-1 space-y-1 ${isOpen ? '' : 'hidden'}">
          ${group.items.map(navItemTemplate).join('')}
        </div>
      </div>`;
  };

  sidebar.innerHTML = `
    <div class="relative p-6 pb-4">
      <button type="button" class="hidden md:flex absolute top-5 right-4" aria-label="收起左侧导航" title="收起导航" data-sidebar-collapse>
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
      </button>
      <a href="haier_os_design_system.html" class="haier-logo-container w-14 h-14 mb-3 text-xl shadow-md" aria-label="Casarte Design 首页"><img src="assets/icons/casarte-logo-03.png" alt="Casarte"></a>
      <h1 class="text-xl font-bold tracking-tight text-white">Casarte Design</h1>
      <p class="text-xs text-gray-400 mt-0.5">NEXT UX Guideline 1.0.1</p>
    </div>
    <nav class="flex-1 px-3 pb-12 space-y-1" aria-label="章节目录">
      ${HAIER_NAV_GROUPS.map(groupTemplate).join('')}
      <div class="mt-2 pt-2 border-t border-white/10">
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
    sidebar.inert = window.innerWidth >= 768 && collapsed;
    sidebar.setAttribute('aria-hidden', String(window.innerWidth >= 768 ? collapsed : sidebar.dataset.menuOpen !== 'true'));
    if (persist) localStorage.setItem('haier-guideline-sidebar-collapsed', collapsed ? '1' : '0');
  };

  setSidebarCollapsed(localStorage.getItem('haier-guideline-sidebar-collapsed') === '1', false);
  sidebar.querySelector('[data-sidebar-collapse]')?.addEventListener('click', () => setSidebarCollapsed(true));
  sidebarRestoreButton.addEventListener('click', () => setSidebarCollapsed(false));

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

  let mobileMenuOpen = false;
  const setMenuOpen = (open) => {
    mobileMenuOpen = Boolean(open && window.innerWidth < 768);
    sidebar.dataset.menuOpen = String(mobileMenuOpen);
    sidebar.classList.toggle('hidden', !mobileMenuOpen && window.innerWidth < 768);
    sidebar.classList.toggle('flex', mobileMenuOpen || window.innerWidth >= 768);
    sidebar.inert = window.innerWidth >= 768 && document.body.classList.contains('haier-sidebar-collapsed');
    sidebar.setAttribute('aria-hidden', String(window.innerWidth < 768 ? !mobileMenuOpen : sidebar.inert));
    mobileButton?.setAttribute('aria-expanded', String(mobileMenuOpen));
    if (backdrop) {
      backdrop.dataset.menuOpen = String(mobileMenuOpen);
      backdrop.classList.toggle('hidden', !mobileMenuOpen);
      backdrop.setAttribute('aria-hidden', String(!mobileMenuOpen));
    }
  };
  mobileButton?.setAttribute('aria-controls', 'sidebar');
  mobileButton?.addEventListener('click', () => setMenuOpen(!mobileMenuOpen));
  backdrop?.addEventListener('click', () => { setMenuOpen(false); mobileButton?.focus(); });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && mobileMenuOpen) { setMenuOpen(false); mobileButton?.focus(); }
  });
  setMenuOpen(false);

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

  if (mainContent && !isPrinciplesMainPage && !isFoundationsMainPage && !isComponentsMainPage && !isHardwareMainPage && !isMotionMainPage) {
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

  window.addEventListener('resize', () => setMenuOpen(false));

})();

document.addEventListener('DOMContentLoaded', () => {
  const footerParagraphs = document.querySelectorAll('footer p');
  footerParagraphs.forEach((p) => {
    if (p.textContent.includes('Haier OS Design Group') || p.textContent.includes('Internal Confidential')) {
      p.innerHTML = '&copy; 2026 Casarte Design Lab. Internal Confidential.';
    }
  });
});
})();
