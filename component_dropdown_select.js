document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('component_dropdown_select');
    if (!container) return;

    container.innerHTML = `
        <div class="space-y-20">

            <!-- ================= 01 键盘概览与何时使用 ================= -->
            <section id="module-overview" class="space-y-10">
                <div class="flex items-baseline gap-4">
                    <span class="module-num text-3xl text-[#E9BD85]">01</span>
                    <div>
                        <h2 class="text-2xl md:text-3xl font-bold text-white" data-i18n-zh="键盘概览与何时使用" data-i18n-en="Overview & Usage Guidelines">键盘概览与何时使用</h2>
                        <p class="text-sm text-gray-300 mt-1.5 leading-relaxed" data-i18n-zh="虚拟软键盘在用户聚焦文本框、密码框或搜索栏时从底部唤起。针对家电 TFT 屏幕，需在保证键盘信息密度的同时兼顾按键触控成功率。" data-i18n-en="Virtual keyboards pop up when users focus on input fields, ensuring smooth touch feedback and input efficiency.">虚拟软键盘在用户聚焦文本框、密码框或搜索栏时从底部唤起。针对家电 TFT 屏幕，需在保证键盘信息密度的同时兼顾按键触控成功率。</p>
                    </div>
                </div>

                <!-- 01 全景概览图 (图1: 1364 x 511 px -> aspect-[1364/511]) -->
                <div class="w-full aspect-[1364/511] bg-black/30 flex items-center justify-center p-8 overflow-hidden">
                    <img src="assets/component_dropdown_select/component_dropdown_select-1.png" alt="component_dropdown_select-1" class="w-full h-full object-contain">
                </div>

                <div class="gallery-panel p-8 space-y-3">
                    <h3 class="text-lg font-bold text-white" data-i18n-zh="何时使用" data-i18n-en="When to Use">何时使用</h3>
                    <ul class="space-y-2 text-sm text-gray-300 leading-relaxed list-disc list-inside">
                        <li data-i18n-zh="当输入框获得焦点且硬件未配备实体按键或旋钮时，自动唤起对应形态的虚拟键盘。" data-i18n-en="Automatically invoke virtual keyboard when input fields gain focus without physical controls.">当输入框获得焦点且硬件未配备实体按键或旋钮时，自动唤起对应形态的虚拟键盘。</li>
                        <li data-i18n-zh="根据屏幕尺寸（小、中、大屏）匹配适宜的键盘间距，防止误触。" data-i18n-en="Adapt keyboard spacing to screen size (Small, Medium, Large) using proportional scaling rules.">根据屏幕尺寸（小、中、大屏）匹配适宜的键盘间距，防止误触。</li>
                        <li data-i18n-zh="按压键位时需提供即时的弹出气泡放大提示，增强触控确定感。" data-i18n-en="Provide immediate popup magnification feedback upon key press for touch confidence.">按压键位时需提供即时的弹出气泡放大提示，增强触控确定感。</li>
                    </ul>
                </div>
            </section>

            <hr class="border-t border-gray-800">

            <!-- ================= 02 中英文全键盘规范 ================= -->
            <section id="module-full-keyboard" class="space-y-10">
                <div class="flex items-baseline gap-4">
                    <span class="module-num text-3xl text-[#E9BD85]">02</span>
                    <div>
                        <h2 class="text-2xl md:text-3xl font-bold text-white" data-i18n-zh="中英文全键盘规范" data-i18n-en="Chinese & English Keyboard Specs">中英文全键盘规范</h2>
                        <p class="text-sm text-gray-300 mt-1.5 leading-relaxed" data-i18n-zh="提供中文输入与英文输入两套标准布局，每套布局均包含小（Small）、中（Medium）、大（Large）三种屏端尺寸规范。" data-i18n-en="Provides Chinese and English keyboard layouts with S, M, L dimensions tailored for different screen sizes.">提供中文输入与英文输入两套标准布局，每套布局均包含小（Small）、中（Medium）、大（Large）三种屏端尺寸规范。</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <!-- 1. 中文全键盘 (图2: 16:9) -->
                    <div class="gallery-panel p-0 overflow-hidden flex flex-col justify-between">
                        <div class="w-full aspect-[16/9] border-b border-gray-800 bg-black/30 overflow-hidden">
                            <img src="assets/component_dropdown_select/component_dropdown_select-2.png" alt="component_dropdown_select-2" class="w-full h-full object-cover">
                        </div>
                        <div class="p-8 space-y-3">
                            <h3 class="text-lg font-bold text-[#E9BD85]" data-i18n-zh="中文全键盘" data-i18n-en="Chinese Full Keyboard">中文全键盘</h3>
                            <p class="text-xs text-gray-300 leading-relaxed" data-i18n-zh="支持中英文一键切换（中/EN）与拼音候选词条，包含小屏（Small）、中屏（Medium）与大屏（Large）的自适应布局。" data-i18n-en="Supports Chinese/English toggling and adaptive layouts across Small, Medium, and Large displays.">支持中英文一键切换（中/EN）与拼音候选词条，包含小屏（Small）、中屏（Medium）与大屏（Large）的自适应布局。</p>
                        </div>
                    </div>

                    <!-- 2. 英文全键盘 (图3: 16:9) -->
                    <div class="gallery-panel p-0 overflow-hidden flex flex-col justify-between">
                        <div class="w-full aspect-[16/9] border-b border-gray-800 bg-black/30 overflow-hidden">
                            <img src="assets/component_dropdown_select/component_dropdown_select-3.png" alt="component_dropdown_select-3" class="w-full h-full object-cover">
                        </div>
                        <div class="p-8 space-y-3">
                            <h3 class="text-lg font-bold text-[#E9BD85]" data-i18n-zh="英文全键盘" data-i18n-en="English Full Keyboard">英文全键盘</h3>
                            <p class="text-xs text-gray-300 leading-relaxed" data-i18n-zh="包含标准 QWERTY 字母按键，配置 SPACE（空格）、ENTER（确认）及大小写切换 Shift 键。" data-i18n-en="Standard QWERTY layout equipped with SPACE, ENTER, and Shift keys.">包含标准 QWERTY 字母按键，配置 SPACE（空格）、ENTER（确认）及大小写切换 Shift 键。</p>
                        </div>
                    </div>
                </div>
            </section>

            <hr class="border-t border-gray-800">

            <!-- ================= 03 打字效果 ================= -->
            <section id="module-typing-effect" class="space-y-10">
                <div class="flex items-baseline gap-4">
                    <span class="module-num text-3xl text-[#E9BD85]">03</span>
                    <div>
                        <h2 class="text-2xl md:text-3xl font-bold text-white" data-i18n-zh="打字效果" data-i18n-en="Typing Effect & Key Popup">打字效果</h2>
                        <p class="text-sm text-gray-300 mt-1.5 leading-relaxed" data-i18n-zh="触控按压时触发弹出效果，按键向上悬浮放大并加深阴影，确保手指遮挡时仍能清晰感知当前选中的字符。" data-i18n-en="Key presses trigger a popup effect with elevated shadows to ensure character visibility during touch.">触控按压时触发弹出效果，按键向上悬浮放大并加深阴影，确保手指遮挡时仍能清晰感知当前选中的字符。</p>
                    </div>
                </div>

                <!-- 打字效果与测量网格 (图4: 1364 x 364 px -> aspect-[1364/364]) -->
                <div class="gallery-panel p-0 overflow-hidden flex flex-col justify-between">
                    <div class="w-full aspect-[1364/364] border-b border-gray-800 bg-black/30 overflow-hidden">
                        <img src="assets/component_dropdown_select/component_dropdown_select-4.png" alt="component_dropdown_select-4" class="w-full h-full object-cover">
                    </div>
                    <div class="p-8 space-y-3">
                        <h3 class="text-lg font-bold text-[#E9BD85]" data-i18n-zh="弹出效果与测量" data-i18n-en="Popup Effect & Grid Measurements">弹出效果与测量</h3>
                        <p class="text-xs text-gray-300 leading-relaxed" data-i18n-zh="气泡弹出尺寸按比例放大，圆角比例遵从规范（四舍五入），伴随阴影 Key_Shadow20 提升材质层级感。" data-i18n-en="Popup dimensions are scaled with corner rounding and Key_Shadow20 effects.">气泡弹出尺寸按比例放大，圆角比例遵从规范（四舍五入），伴随阴影 Key_Shadow20 提升材质层级感。</p>
                    </div>
                </div>
            </section>

            <hr class="border-t border-gray-800">

            <!-- ================= 04 深色模式与浅色模式 ================= -->
            <section id="module-color-modes" class="space-y-10">
                <div class="flex items-baseline gap-4">
                    <span class="module-num text-3xl text-[#E9BD85]">04</span>
                    <div>
                        <h2 class="text-2xl md:text-3xl font-bold text-white" data-i18n-zh="深色与浅色主题适配" data-i18n-en="Dark & Light Mode Adaptation">深色与浅色主题适配</h2>
                        <p class="text-sm text-gray-300 mt-1.5 leading-relaxed" data-i18n-zh="卡萨帝键盘组件全面支持深色与浅色双套主题模式，确保在不同环境光照及不同面板材质上均具备高对比度与典雅质感。" data-i18n-en="Casarte virtual keyboards adapt smoothly to both Dark and Light themes.">卡萨帝键盘组件全面支持深色与浅色双套主题模式，确保在不同环境光照及不同面板材质上均具备高对比度与典雅质感。</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-2">
                    <!-- 深色模式面板 (图5: 800 x 600 px -> aspect-[4/3]) -->
                    <div class="gallery-panel p-0 overflow-hidden flex flex-col justify-between bg-[#0D0D0F] border border-gray-800">
                        <div class="w-full aspect-[4/3] border-b border-gray-800 bg-black/30 overflow-hidden">
                            <img src="assets/component_dropdown_select/component_dropdown_select-5.png" alt="component_dropdown_select-5" class="w-full h-full object-cover">
                        </div>
                        <div class="p-8 space-y-4">
                            <div class="flex items-center gap-2">
                                <span class="w-3 h-3 rounded-none bg-[#D49E5A] inline-block"></span>
                                <h3 class="text-lg font-bold text-white" data-i18n-zh="深色模式" data-i18n-en="Dark Mode">深色模式</h3>
                            </div>
                            <p class="text-xs text-gray-400 leading-relaxed" data-i18n-zh="深色暗光背景环境，采用高对比金/浅灰键面字符和暗光微玻璃卡片底色，功能确认键赋予琥珀金渐变。" data-i18n-en="Dark background with gold/grey character keys and amber gold action buttons.">深色暗光背景环境，采用高对比金/浅灰键面字符和暗光微玻璃卡片底色，功能确认键赋予琥珀金渐变。</p>
                        </div>
                    </div>

                    <!-- 浅色模式面板 (图6: 800 x 600 px -> aspect-[4/3]) -->
                    <div class="gallery-panel p-0 overflow-hidden flex flex-col justify-between bg-[#F5F5F7] text-gray-900 border border-gray-300">
                        <div class="w-full aspect-[4/3] border-b border-gray-300 bg-white overflow-hidden">
                            <img src="assets/component_dropdown_select/component_dropdown_select-6.png" alt="component_dropdown_select-6" class="w-full h-full object-cover">
                        </div>
                        <div class="p-8 space-y-4">
                            <div class="flex items-center gap-2">
                                <span class="w-3 h-3 rounded-none bg-[#D49E5A] inline-block"></span>
                                <h3 class="text-lg font-bold text-gray-900" data-i18n-zh="浅色模式" data-i18n-en="Light Mode">浅色模式</h3>
                            </div>
                            <p class="text-xs text-gray-600 leading-relaxed" data-i18n-zh="高亮日光/浅色面板场景，键盘面板保持清爽纯净，键面字符微调为深灰色以保障极佳的读写对比。" data-i18n-en="Clean light background theme with refined dark text and clear contrast.">高亮日光/浅色面板场景，键盘面板保持清爽纯净，键面字符微调为深灰色以保障极佳的读写对比。</p>
                        </div>
                    </div>
                </div>
            </section>

            <hr class="border-t border-gray-800">

            <!-- ================= 05 使用与验收 ================= -->
            <section id="module-best-practices" class="space-y-10">
                <div class="flex items-baseline gap-4">
                    <span class="module-num text-3xl text-[#E9BD85]">05</span>
                    <div>
                        <h2 class="text-2xl md:text-3xl font-bold text-white" data-i18n-zh="使用与验收" data-i18n-en="Usage & Acceptance">使用与验收</h2>
                        <p class="text-sm text-gray-300 mt-1.5 leading-relaxed" data-i18n-zh="指导设计与开发团队在设计搭建与上线验收阶段恪守的规则。" data-i18n-en="Key do's and don'ts for designers and developers during creation and QA.">指导设计与开发团队在设计搭建与上线验收阶段恪守的规则。</p>
                    </div>
                </div>

                <div class="gallery-panel p-8 md:p-12 space-y-8">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div class="space-y-4">
                            <h3 class="text-base font-bold text-emerald-400 tracking-wider" data-i18n-zh="✓ 应该" data-i18n-en="✓ Recommended">✓ 应该</h3>
                            <ul class="space-y-3 text-sm text-gray-200 leading-relaxed">
                                <li class="flex items-start gap-2"><span class="text-emerald-400 font-bold">•</span> <span data-i18n-zh="按压按键时必须触发 100ms 内的气泡放大及声光微交互反馈。" data-i18n-en="Key press must trigger Popup animation and feedback within 100ms.">按压按键时必须触发 100ms 内的气泡放大及声光微交互反馈。</span></li>
                                <li class="flex items-start gap-2"><span class="text-emerald-400 font-bold">•</span> <span data-i18n-zh="键盘弹起时需确保不遮挡当前聚焦的文本框及其主要确认/下一步操作按钮。" data-i18n-en="Keyboard overlay must not obscure focused input fields or main CTA buttons.">键盘弹起时需确保不遮挡当前聚焦的文本框及其主要确认/下一步操作按钮。</span></li>
                                <li class="flex items-start gap-2"><span class="text-emerald-400 font-bold">•</span> <span data-i18n-zh="针对数字、密码等专有输入场景，优先弹出简化版数字键盘。" data-i18n-en="Prioritize numeric keyboards for numeric and password entry scenarios.">针对数字、密码等专有输入场景，优先弹出简化版数字键盘。</span></li>
                            </ul>
                        </div>
                        <div class="space-y-4">
                            <h3 class="text-base font-bold text-rose-400 tracking-wider" data-i18n-zh="✕ 不应该" data-i18n-en="✕ Avoid">✕ 不应该</h3>
                            <ul class="space-y-3 text-sm text-gray-200 leading-relaxed">
                                <li class="flex items-start gap-2"><span class="text-rose-400 font-bold">•</span> <span data-i18n-zh="禁止任意压缩按键间的最小安全距离，防止手指误触邻近键位。" data-i18n-en="Do not reduce safe margins between keys to prevent accidental touch.">禁止任意压缩按键间的最小安全距离，防止手指误触邻近键位。</span></li>
                                <li class="flex items-start gap-2"><span class="text-rose-400 font-bold">•</span> <span data-i18n-zh="切勿在输入完成后强行驻留键盘，点击空白处或确定键后应自动收起。" data-i18n-en="Keyboard should dismiss automatically upon tapping outside or confirming.">切勿在输入完成后强行驻留键盘，点击空白处或确定键后应自动收起。</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    `;

    // 双语切换支持
    const applyLang = () => {
        const lang = localStorage.getItem('haier-guideline-language') || 'zh';
        container.querySelectorAll('[data-i18n-zh][data-i18n-en]').forEach((el) => {
            el.textContent = el.dataset[lang === 'zh' ? 'i18nZh' : 'i18nEn'];
        });
    };

    applyLang();

    window.addEventListener('storage', applyLang);
    const toggleBtn = document.getElementById('language-switcher');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            setTimeout(applyLang, 50);
        });
    }
});