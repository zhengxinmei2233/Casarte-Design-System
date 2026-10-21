document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('component_slider');
    if (!container) return;

    container.innerHTML = `
        <div class="space-y-20">

            <!-- ================= 01 概览与何时使用 ================= -->
            <section id="module-overview" class="space-y-10">
                <div class="flex items-baseline gap-4">
                    <span class="module-num text-3xl text-[#E9BD85]">01</span>
                    <div>
                        <h2 class="text-2xl md:text-3xl font-bold text-white" data-i18n-zh="调控概览与何时使用" data-i18n-en="Overview & Usage Guidelines">调控概览与何时使用</h2>
                        <p class="text-sm text-gray-300 mt-1.5 leading-relaxed" data-i18n-zh="调控控件允许用户通过点击、滑动或滚动轻松调节参数。在卡萨帝触控屏界面中，需确保刻度读取清晰、触控响应即时且数值归位精准。" data-i18n-en="Control components allow users to adjust parameter values easily. Ensure precise readouts and instant tactile response across all displays.">调控控件允许用户通过点击、滑动或滚动轻松调节参数。在卡萨帝触控屏界面中，需确保刻度读取清晰、触控响应即时且数值归位精准。</p>
                    </div>
                </div>

                <!-- 01 全景概览图 (图1: component_slider-1.png, 1364 x 511 px) -> p-0 确保完美贴边填满 -->
                <div class="w-full aspect-[1364/511] bg-black/30 flex items-center justify-center p-0 overflow-hidden">
                    <img src="assets/component_slider/component_slider-1.png" alt="component_slider-1" class="w-full h-full object-cover">
                </div>

                <div class="gallery-panel p-8 space-y-3">
                    <h3 class="text-lg font-bold text-white" data-i18n-zh="何时使用" data-i18n-en="When to Use">何时使用</h3>
                    <ul class="space-y-2 text-sm text-gray-300 leading-relaxed list-disc list-inside">
                        <li data-i18n-zh="点击调控器：用于操作路径短、需要单步精准增减数值的场景（如温度±1℃）。" data-i18n-en="Click Control: Used for short interaction paths requiring step-by-step precise adjustments.">点击调控器：用于操作路径短、需要单步精准增减数值的场景（如温度±1℃）。</li>
                        <li data-i18n-zh="滚动调控器：用于调节影响程序核心功能、高重要性的参数，通过强视觉引导用户操作。" data-i18n-en="Scroll Control: Used for adjusting key high-priority parameters with strong visual emphasis.">滚动调控器：用于调节影响程序核心功能、高重要性的参数，通过强视觉引导用户操作。</li>
                        <li data-i18n-zh="滑块调控器：用于高频、低重要性或仅影响局部体验的参数调节（如亮度、音量微调）。" data-i18n-en="Slider Control: Used for frequent, localized adjustments like brightness or volume.">滑块调控器：用于高频、低重要性或仅影响局部体验的参数调节（如亮度、音量微调）。</li>
                        <li data-i18n-zh="刻度滑块调控器：在数值输入过程中，需要提供实时的可视化数据比例与悬浮气泡反馈时使用。" data-i18n-en="Slider Scale Controller: Used when real-time, visual feedback of proportional data with value bubbles is required during numeric input.">刻度滑块调控器：在数值输入过程中，需要提供实时的可视化数据比例与悬浮气泡反馈时使用。</li>
                    </ul>
                </div>
            </section>

            <hr class="border-t border-gray-800">

            <!-- ================= 02 基础调控类型 (5个统一规格小模块) ================= -->
            <section id="module-basic-controls" class="space-y-10">
                <div class="flex items-baseline gap-4">
                    <span class="module-num text-3xl text-[#E9BD85]">02</span>
                    <div>
                        <h2 class="text-2xl md:text-3xl font-bold text-white" data-i18n-zh="基础调控类型" data-i18n-en="Basic Control Types">基础调控类型</h2>
                        <p class="text-sm text-gray-300 mt-1.5 leading-relaxed" data-i18n-zh="包含点击调控、滚动调控、滑块调控及刻度调控等基础交互模式，满足不同层级参数调节的操作要求。" data-i18n-en="Covers Click, Scroll, Slider, and Scale controls to satisfy different levels of parameter adjustment.">包含点击调控、滚动调控、滑块调控及刻度调控等基础交互模式，满足不同层级参数调节的操作要求。</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <!-- 1. 点击调控器 (图2: component_slider-2.png, 960x540) -->
                    <div class="gallery-panel p-0 overflow-hidden flex flex-col justify-between">
                        <div class="w-full aspect-[960/540] border-b border-gray-800 bg-black/30 overflow-hidden">
                            <img src="assets/component_slider/component_slider-2.png" alt="component_slider-2" class="w-full h-full object-cover">
                        </div>
                        <div class="p-8 space-y-3">
                            <h3 class="text-lg font-bold text-[#E9BD85]" data-i18n-zh="点击调控器" data-i18n-en="Click Control">点击调控器</h3>
                            <p class="text-xs text-gray-300 leading-relaxed" data-i18n-zh="加号与减号按钮间的间距不少于设置数值字体宽度或高度。支持水平与垂直摆放。" data-i18n-en="Spacing between plus and minus buttons must equal or exceed setting font size.">加号与减号按钮间的间距不少于设置数值字体宽度或高度。支持水平与垂直摆放。</p>
                        </div>
                    </div>

                    <!-- 2. 滚动调控器 (图3: component_slider-3.png, 960x540) -->
                    <div class="gallery-panel p-0 overflow-hidden flex flex-col justify-between">
                        <div class="w-full aspect-[960/540] border-b border-gray-800 bg-black/30 overflow-hidden">
                            <img src="assets/component_slider/component_slider-3.png" alt="component_slider-3" class="w-full h-full object-cover">
                        </div>
                        <div class="p-8 space-y-3">
                            <h3 class="text-lg font-bold text-[#E9BD85]" data-i18n-zh="滚动调控器" data-i18n-en="Scroll Control">滚动调控器</h3>
                            <p class="text-xs text-gray-300 leading-relaxed" data-i18n-zh="当前选中数值置于中心并加大字号；相邻数值间距遵守 a*0.5 比例逻辑，两端保持对称。" data-i18n-en="Selected value centered and magnified. Adjacent values follow a*0.5 spacing ratio.">当前选中数值置于中心并加大字号；相邻数值间距遵守 a*0.5 比例逻辑，两端保持对称。</p>
                        </div>
                    </div>

                    <!-- 3. 滑块调控器 (图4: component_slider-4.png, 960x540) -->
                    <div class="gallery-panel p-0 overflow-hidden flex flex-col justify-between">
                        <div class="w-full aspect-[960/540] border-b border-gray-800 bg-black/30 overflow-hidden">
                            <img src="assets/component_slider/component_slider-4.png" alt="component_slider-4" class="w-full h-full object-cover">
                        </div>
                        <div class="p-8 space-y-3">
                            <h3 class="text-lg font-bold text-[#E9BD85]" data-i18n-zh="滑块调控器" data-i18n-en="Slider Control">滑块调控器</h3>
                            <p class="text-xs text-gray-300 leading-relaxed" data-i18n-zh="提供多种轨道高度与圆点尺寸，轨道总长度可随屏宽自适应，保障基础滑动操作的顺畅度。" data-i18n-en="Offers multiple track sizes with adaptable length to ensure smooth basic sliding operations.">提供多种轨道高度与圆点尺寸，轨道总长度可随屏宽自适应，保障基础滑动操作的顺畅度。</p>
                        </div>
                    </div>

                    <!-- 4. 滑块调控器 - 特殊 (图5: component_slider-5.png, 960x540) -->
                    <div class="gallery-panel p-0 overflow-hidden flex flex-col justify-between">
                        <div class="w-full aspect-[960/540] border-b border-gray-800 bg-black/30 overflow-hidden">
                            <img src="assets/component_slider/component_slider-5.png" alt="component_slider-5" class="w-full h-full object-cover">
                        </div>
                        <div class="p-8 space-y-3">
                            <h3 class="text-lg font-bold text-[#E9BD85]" data-i18n-zh="滑块调控器 - 特殊" data-i18n-en="Special Slider Control">滑块调控器 - 特殊</h3>
                            <p class="text-xs text-gray-300 leading-relaxed" data-i18n-zh="针对音量、风量等核心场景定制的胶囊状与高光阴影宽轨道样式，强化界面视觉焦点。" data-i18n-en="Customized wide-track styles for core scenarios such as volume and airflow.">针对音量、风量等核心场景定制的胶囊状与高光阴影宽轨道样式，强化界面视觉焦点。</p>
                        </div>
                    </div>

                    <!-- 5. 刻度滑块调控器 (图6: component_slider-6.png, 960x540) -->
                    <div class="gallery-panel p-0 overflow-hidden flex flex-col justify-between">
                        <div class="w-full aspect-[960/540] border-b border-gray-800 bg-black/30 overflow-hidden">
                            <img src="assets/component_slider/component_slider-6.png" alt="component_slider-6" class="w-full h-full object-cover">
                        </div>
                        <div class="p-8 space-y-3">
                            <h3 class="text-lg font-bold text-[#E9BD85]" data-i18n-zh="刻度滑块调控器" data-i18n-en="Slider Scale Controller">刻度滑块调控器</h3>
                            <p class="text-xs text-gray-300 leading-relaxed" data-i18n-zh="刻度标记清晰标示关键节点，配合数值气泡在触摸拖动时实时悬浮显示，提高精准定位效率。" data-i18n-en="Scale marks key positions, with a value bubble following finger placement in real time.">刻度标记清晰标示关键节点，配合数值气泡在触摸拖动时实时悬浮显示，提高精准定位效率。</p>
                        </div>
                    </div>
                </div>
            </section>

            <hr class="border-t border-gray-800">

            <!-- ================= 03 深色模式与浅色模式 ================= -->
            <section id="module-color-modes" class="space-y-10">
                <div class="flex items-baseline gap-4">
                    <span class="module-num text-3xl text-[#E9BD85]">03</span>
                    <div>
                        <h2 class="text-2xl md:text-3xl font-bold text-white" data-i18n-zh="深色与浅色主题适配" data-i18n-en="Dark & Light Mode Adaptation">深色与浅色主题适配</h2>
                        <p class="text-sm text-gray-300 mt-1.5 leading-relaxed" data-i18n-zh="卡萨帝调控组件全面支持深色与浅色双套主题模式，确保在不同环境光照及不同面板材质上均具备高对比度与典雅质感。" data-i18n-en="Casarte controls adapt seamlessly to both Dark and Light themes.">卡萨帝调控组件全面支持深色与浅色双套主题模式，确保在不同环境光照及不同面板材质上均具备高对比度与典雅质感。</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-2">
                    <!-- 深色模式面板 (图7: component_slider-7.png, 800x600 -> aspect-[4/3]) -->
                    <div class="gallery-panel p-0 overflow-hidden flex flex-col justify-between bg-[#0D0D0F] border border-gray-800">
                        <div class="w-full aspect-[4/3] border-b border-gray-800 bg-black/30 overflow-hidden">
                            <img src="assets/component_slider/component_slider-7.png" alt="component_slider-7" class="w-full h-full object-cover">
                        </div>
                        <div class="p-8 space-y-4">
                            <div class="flex items-center gap-2">
                                <span class="w-3 h-3 rounded-none bg-[#D49E5A] inline-block"></span>
                                <h3 class="text-lg font-bold text-white" data-i18n-zh="深色模式" data-i18n-en="Dark Mode">深色模式</h3>
                            </div>
                            <p class="text-xs text-gray-400 leading-relaxed" data-i18n-zh="暗光背景下采用琥珀金填充轨道与高对比白色数字，配以微微发光的触控圆点，确保夜间调控不刺眼。" data-i18n-en="Dark background featuring amber gold tracks and luminous touch points.">暗光背景下采用琥珀金填充轨道与高对比白色数字，配以微微发光的触控圆点，确保夜间调控不刺眼。</p>
                        </div>
                    </div>

                    <!-- 浅色模式面板 (图8: component_slider-8.png, 800x600 -> aspect-[4/3]) -->
                    <div class="gallery-panel p-0 overflow-hidden flex flex-col justify-between bg-[#F5F5F7] text-gray-900 border border-gray-300">
                        <div class="w-full aspect-[4/3] border-b border-gray-300 bg-white overflow-hidden">
                            <img src="assets/component_slider/component_slider-8.png" alt="component_slider-8" class="w-full h-full object-cover">
                        </div>
                        <div class="p-8 space-y-4">
                            <div class="flex items-center gap-2">
                                <span class="w-3 h-3 rounded-none bg-[#D49E5A] inline-block"></span>
                                <h3 class="text-lg font-bold text-gray-900" data-i18n-zh="浅色模式" data-i18n-en="Light Mode">浅色模式</h3>
                            </div>
                            <p class="text-xs text-gray-600 leading-relaxed" data-i18n-zh="高亮日光场景下保留纯净浅灰背景，轨道与加减号图标使用深色高对比描边，保证日光直射下清晰易读。" data-i18n-en="Clean light background with high-contrast borders for direct sunlight readability.">高亮日光场景下保留纯净浅灰背景，轨道与加减号图标使用深色高对比描边，保证日光直射下清晰易读。</p>
                        </div>
                    </div>
                </div>
            </section>

            <hr class="border-t border-gray-800">

            <!-- ================= 04 使用与验收 ================= -->
            <section id="module-best-practices" class="space-y-10">
                <div class="flex items-baseline gap-4">
                    <span class="module-num text-3xl text-[#E9BD85]">04</span>
                    <div>
                        <h2 class="text-2xl md:text-3xl font-bold text-white" data-i18n-zh="使用与验收" data-i18n-en="Usage & Acceptance">使用与验收</h2>
                        <p class="text-sm text-gray-300 mt-1.5 leading-relaxed" data-i18n-zh="规范设计师与开发团队在搭建 UI 与验收交付时的红线准则。" data-i18n-en="Guidelines for designers and developers during UI creation and acceptance delivery.">规范设计师与开发团队在搭建 UI 与验收交付时的红线准则。</p>
                    </div>
                </div>

                <div class="gallery-panel p-8 md:p-12 space-y-8">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div class="space-y-4">
                            <h3 class="text-base font-bold text-emerald-400 tracking-wider" data-i18n-zh="✓ 应该" data-i18n-en="✓ Recommended">✓ 应该</h3>
                            <ul class="space-y-3 text-sm text-gray-200 leading-relaxed">
                                <li class="flex items-start gap-2"><span class="text-emerald-400 font-bold">•</span> <span data-i18n-zh="滑块调控器的热区需扩展至轨道上下至少 12px，提升滑动抓取率。" data-i18n-en="Expand touch target of sliders by at least 12px beyond the track.">滑块调控器的热区需扩展至轨道上下至少 12px，提升滑动抓取率。</span></li>
                                <li class="flex items-start gap-2"><span class="text-emerald-400 font-bold">•</span> <span data-i18n-zh="滚动调控器在停止滑动后必须触发自动磁吸对齐。" data-i18n-en="Scroll controls must snap to the nearest value upon gesture release.">滚动调控器在停止滑动后必须触发自动磁吸对齐。</span></li>
                                <li class="flex items-start gap-2"><span class="text-emerald-400 font-bold">•</span> <span data-i18n-zh="温度、风速等关键参数调整时需伴随声效提示。" data-i18n-en="Provide audio feedback during adjustments of key parameters like temperature.">温度、风速等关键参数调整时需伴随声效提示。</span></li>
                            </ul>
                        </div>
                        <div class="space-y-4">
                            <h3 class="text-base font-bold text-rose-400 tracking-wider" data-i18n-zh="✕ 不应该" data-i18n-en="✕ Avoid">✕ 不应该</h3>
                            <ul class="space-y-3 text-sm text-gray-200 leading-relaxed">
                                <li class="flex items-start gap-2"><span class="text-rose-400 font-bold">•</span> <span data-i18n-zh="切勿将点击调控器的加减号按钮放置过于紧凑，防止用户误触报错。" data-i18n-en="Do not place plus and minus buttons too close to avoid mis-touches.">切勿将点击调控器的加减号按钮放置过于紧凑，防止用户误触报错。</span></li>
                                <li class="flex items-start gap-2"><span class="text-rose-400 font-bold">•</span> <span data-i18n-zh="避免在滑动过程中发生帧率卡顿，滑块位移动效需保持 60fps 顺畅。" data-i18n-en="Maintain smooth 60fps animations during touch drag.">避免在滑动过程中发生帧率卡顿，滑块位移动效需保持 60fps 顺畅。</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    `;

    // 完美衔接全局双语切换
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