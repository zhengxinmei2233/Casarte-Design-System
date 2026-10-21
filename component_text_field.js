document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('component_text_field');
    if (!container) return;

    container.innerHTML = `
        <div class="space-y-20">

            <!-- ================= 01 概览与何时使用 ================= -->
            <section id="module-overview" class="space-y-10">
                <div class="flex items-baseline gap-4">
                    <span class="module-num text-3xl text-[#E9BD85]">01</span>
                    <div>
                        <h2 class="text-2xl md:text-3xl font-bold text-white" data-i18n-zh="文本框概览与何时使用" data-i18n-en="Overview & Usage Guidelines">文本框概览与何时使用</h2>
                        <p class="text-sm text-gray-300 mt-1.5 leading-relaxed" data-i18n-zh="文本框用于接收用户输入的文本、数字或密码信息。在卡萨帝界面中，需确保输入框层级清晰，光标与占位反馈明确。" data-i18n-en="Text fields allow users to enter text, numbers, or passwords. They must maintain high contrast and clear feedback.">文本框用于接收用户输入的文本、数字或密码信息。在卡萨帝界面中，需确保输入框层级清晰，光标与占位反馈明确。</p>
                    </div>
                </div>

                <!-- 01 全景概览图 (图1: 1364 x 511 px) -->
                <div class="w-full aspect-[1364/511] bg-black/30 flex items-center justify-center p-8 overflow-hidden">
                    <img src="assets/component_text_field/component_text_field-1.png" alt="component_text_field-1" class="w-full h-full object-contain">
                </div>

                <div class="gallery-panel p-8 space-y-3">
                    <h3 class="text-lg font-bold text-white" data-i18n-zh="何时使用" data-i18n-en="When to Use">何时使用</h3>
                    <ul class="space-y-2 text-sm text-gray-300 leading-relaxed list-disc list-inside">
                        <li data-i18n-zh="当需要用户自由录入文字、数值、账号密码等自定义内容时使用文本框。" data-i18n-en="Use text fields when users need to freely enter custom text, numbers, or credentials.">当需要用户自由录入文字、数值、账号密码等自定义内容时使用文本框。</li>
                        <li data-i18n-zh="单行文本框适用于简短信息录入；多行文本框适用于长文本备注或详细说明场景。" data-i18n-en="Single-line is for short inputs; multi-line is for notes and descriptions.">单行文本框适用于简短信息录入；多行文本框适用于长文本备注或详细说明场景。</li>
                        <li data-i18n-zh="涉及敏感信息（如密码）时，应采用密码输入框并内嵌明暗文切换视窗。" data-i18n-en="For sensitive data like passwords, use password input fields with a visibility toggle.">涉及敏感信息（如密码）时，应采用密码输入框并内嵌明暗文切换视窗。</li>
                    </ul>
                </div>
            </section>

            <hr class="border-t border-gray-800">

            <!-- ================= 02 常规输入框 ================= -->
            <section id="module-regular-input" class="space-y-10">
                <div class="flex items-baseline gap-4">
                    <span class="module-num text-3xl text-[#E9BD85]">02</span>
                    <div>
                        <h2 class="text-2xl md:text-3xl font-bold text-white" data-i18n-zh="常规输入框" data-i18n-en="Regular Input Box">常规输入框</h2>
                        <p class="text-sm text-gray-300 mt-1.5 leading-relaxed" data-i18n-zh="常规输入框支持单行与多行文本输入，涵盖默认态、输入激活态、完成态及禁用态的字号与填充规范。" data-i18n-en="Supports single-line and multi-line text input with complete state specifications.">常规输入框支持单行与多行文本输入，涵盖默认态、输入激活态、完成态及禁用态的字号与填充规范。</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <!-- 单行文本输入框 Single Line (图2: 960 x 540 px -> aspect-[960/540]) -->
                    <div class="gallery-panel p-0 overflow-hidden flex flex-col justify-between">
                        <div class="w-full aspect-[960/540] border-b border-gray-800 bg-black/30 overflow-hidden">
                            <img src="assets/component_text_field/component_text_field-2.png" alt="component_text_field-2" class="w-full h-full object-cover">
                        </div>
                        <div class="p-8 space-y-3">
                            <h3 class="text-lg font-bold text-[#E9BD85]" data-i18n-zh="单行文本输入 Single Line" data-i18n-en="Single Line Input">单行文本输入 Single Line</h3>
                            <p class="text-xs text-gray-300 leading-relaxed" data-i18n-zh="适用于简短文本（如名称、编号等）的输入，提供清晰的蓝色光标及占位提示。" data-i18n-en="Used for short text inputs with clear cursor and placeholder guidelines.">适用于简短文本（如名称、编号等）的输入，提供清晰的蓝色光标及占位提示。</p>
                        </div>
                    </div>

                    <!-- 多行文本输入 Multi Line (图3: 960 x 540 px -> aspect-[960/540]) -->
                    <div class="gallery-panel p-0 overflow-hidden flex flex-col justify-between">
                        <div class="w-full aspect-[960/540] border-b border-gray-800 bg-black/30 overflow-hidden">
                            <img src="assets/component_text_field/component_text_field-3.png" alt="component_text_field-3" class="w-full h-full object-cover">
                        </div>
                        <div class="p-8 space-y-3">
                            <h3 class="text-lg font-bold text-[#E9BD85]" data-i18n-zh="多行文本输入 Multi Line" data-i18n-en="Multi Line Input">多行文本输入 Multi Line</h3>
                            <p class="text-xs text-gray-300 leading-relaxed" data-i18n-zh="适用于备注、长文本说明等场景，支持垂直方向的文本扩展与滚动浏览。" data-i18n-en="Used for notes and long text descriptions, supporting vertical expansion.">适用于备注、长文本说明等场景，支持垂直方向的文本扩展与滚动浏览。</p>
                        </div>
                    </div>
                </div>
            </section>

            <hr class="border-t border-gray-800">

            <!-- ================= 03 密码输入框 ================= -->
            <section id="module-password-input" class="space-y-10">
                <div class="flex items-baseline gap-4">
                    <span class="module-num text-3xl text-[#E9BD85]">03</span>
                    <div>
                        <h2 class="text-2xl md:text-3xl font-bold text-white" data-i18n-zh="密码输入框" data-i18n-en="Password Input Box">密码输入框</h2>
                        <p class="text-sm text-gray-300 mt-1.5 leading-relaxed" data-i18n-zh="用于安全敏感信息的输入（如Wi-Fi密码、账号密码等），内嵌可视状态切换图标（小眼睛），保障隐私安全。" data-i18n-en="Used for sensitive information with an embedded visibility toggle icon.">用于安全敏感信息的输入（如Wi-Fi密码、账号密码等），内嵌可视状态切换图标（小眼睛），保障隐私安全。</p>
                    </div>
                </div>

                <!-- 密码输入框状态矩阵 (图4: 1360 x 349 px -> aspect-[1360/349]) -->
                <div class="gallery-panel p-0 overflow-hidden flex flex-col justify-between">
                    <div class="w-full aspect-[1360/349] border-b border-gray-800 bg-black/30 overflow-hidden">
                        <img src="assets/component_text_field/component_text_field-4.png" alt="component_text_field-4" class="w-full h-full object-cover">
                    </div>
                    <div class="p-8 space-y-3">
                        <h3 class="text-lg font-bold text-[#E9BD85]" data-i18n-zh="密码明暗文切换与状态矩阵" data-i18n-en="Password Toggle & State Matrix">密码明暗文切换与状态矩阵</h3>
                        <p class="text-xs text-gray-300 leading-relaxed" data-i18n-zh="支持密文掩码（圆点）与明文展示的无缝切换，具备完整的默认、输入、激活和禁用态。" data-i18n-en="Supports seamless switching between masked dots and plaintext.">支持密文掩码（圆点）与明文展示的无缝切换，具备完整的默认、输入、激活和禁用态。</p>
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
                        <p class="text-sm text-gray-300 mt-1.5 leading-relaxed" data-i18n-zh="卡萨帝文本框组件全面支持深色与浅色双套主题模式，确保在嵌入式屏幕、不同环境光照及不同面板材质上均具备高对比度与典雅质感。" data-i18n-en="Casarte text fields adapt smoothly to both Dark and Light themes, preserving optimal legibility.">卡萨帝文本框组件全面支持深色与浅色双套主题模式，确保在嵌入式屏幕、不同环境光照及不同面板材质上均具备高对比度与典雅质感。</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-2">
                    <!-- 深色模式面板 (图5: 800 x 600 px -> aspect-[4/3]) -->
                    <div class="gallery-panel p-0 overflow-hidden flex flex-col justify-between bg-[#0D0D0F] border border-gray-800">
                        <div class="w-full aspect-[4/3] border-b border-gray-800 bg-black/30 overflow-hidden">
                            <img src="assets/component_text_field/component_text_field-5.png" alt="component_text_field-5" class="w-full h-full object-cover">
                        </div>
                        <div class="p-8 space-y-4">
                            <div class="flex items-center gap-2">
                                <span class="w-3 h-3 rounded-none bg-[#D49E5A] inline-block"></span>
                                <h3 class="text-lg font-bold text-white" data-i18n-zh="深色模式" data-i18n-en="Dark Mode">深色模式</h3>
                            </div>
                            <p class="text-xs text-gray-400 leading-relaxed" data-i18n-zh="深色暗光背景环境，采用高对比白色字和深色微光卡片底色，激活态赋予 HaierBlue 蓝光光标及金色描边。" data-i18n-en="Dark background with high-contrast text and micro-glow background.">深色暗光背景环境，采用高对比白色字和深色微光卡片底色，激活态赋予 HaierBlue 蓝光光标及金色描边。</p>
                        </div>
                    </div>

                    <!-- 浅色模式面板 (图6: 800 x 600 px -> aspect-[4/3]) -->
                    <div class="gallery-panel p-0 overflow-hidden flex flex-col justify-between bg-[#F5F5F7] text-gray-900 border border-gray-300">
                        <div class="w-full aspect-[4/3] border-b border-gray-300 bg-white overflow-hidden">
                            <img src="assets/component_text_field/component_text_field-6.png" alt="component_text_field-6" class="w-full h-full object-cover">
                        </div>
                        <div class="p-8 space-y-4">
                            <div class="flex items-center gap-2">
                                <span class="w-3 h-3 rounded-none bg-[#D49E5A] inline-block"></span>
                                <h3 class="text-lg font-bold text-gray-900" data-i18n-zh="浅色模式" data-i18n-en="Light Mode">浅色模式</h3>
                            </div>
                            <p class="text-xs text-gray-600 leading-relaxed" data-i18n-zh="高亮日光/浅色面板场景，背景保持清爽纯净，边框及文字微调为明亮模式高读性对比度。" data-i18n-en="Clean light background theme with refined dark text and high legibility borders.">高亮日光/浅色面板场景，背景保持清爽纯净，边框及文字微调为明亮模式高读性对比度。</p>
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
                                <li class="flex items-start gap-2"><span class="text-emerald-400 font-bold">•</span> <span data-i18n-zh="为文本框提供清晰的默认占位提示（如“请输入内容”）。" data-i18n-en="Provide clear placeholder text like 'Please enter text'.">为文本框提供清晰的默认占位提示（如“请输入内容”）。</span></li>
                                <li class="flex items-start gap-2"><span class="text-emerald-400 font-bold">•</span> <span data-i18n-zh="在获得焦点时高亮光标并弹出对应软键盘或数字键盘。" data-i18n-en="Highlight cursor and trigger appropriate soft keyboard on focus.">在获得焦点时高亮光标并弹出对应软键盘或数字键盘。</span></li>
                                <li class="flex items-start gap-2"><span class="text-emerald-400 font-bold">•</span> <span data-i18n-zh="密码输入框必须提供便捷的明暗文切换视窗。" data-i18n-en="Password fields must provide a convenient visibility toggle.">密码输入框必须提供便捷的明暗文切换视窗。</span></li>
                            </ul>
                        </div>
                        <div class="space-y-4">
                            <h3 class="text-base font-bold text-rose-400 tracking-wider" data-i18n-zh="✕ 不应该" data-i18n-en="✕ Avoid">✕ 不应该</h3>
                            <ul class="space-y-3 text-sm text-gray-200 leading-relaxed">
                                <li class="flex items-start gap-2"><span class="text-rose-400 font-bold">•</span> <span data-i18n-zh="切勿在禁用状态的文本框中响应任何输入或光标聚焦。" data-i18n-en="Do not allow input or focus on disabled text fields.">切勿在禁用状态的文本框中响应任何输入或光标聚焦。</span></li>
                                <li class="flex items-start gap-2"><span class="text-rose-400 font-bold">•</span> <span data-i18n-zh="避免输入框尺寸小于最小触控热区标准，防止误触。" data-i18n-en="Avoid making text fields smaller than minimum touch targets.">避免输入框尺寸小于最小触控热区标准，防止误触。</span></li>
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