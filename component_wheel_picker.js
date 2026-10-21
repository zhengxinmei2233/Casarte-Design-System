document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('component_wheel_picker');
    if (!container) return;

    container.innerHTML = `
        <style>
            @font-face {
                font-family: 'FZFangJHJW';
                src: url('assets/fonts/FZFangJunHeiS-Medium.ttf') format('truetype'),
                     url('assets/fonts/FZFangJHJW.ttf') format('truetype');
                font-weight: 400;
                font-style: normal;
                font-display: swap;
            }
            .picker-font {
                font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            }
            .placeholder-box {
                background: rgba(255, 255, 255, 0.03);
                border: 1px dashed rgba(255, 255, 255, 0.2);
                transition: all 0.3s ease;
            }
            .placeholder-box:hover {
                border-color: #E9BD85;
                background: rgba(233, 189, 133, 0.05);
            }
        </style>

        <div class="space-y-20">

            <!-- ================= 01 概览与使用场景 ================= -->
            <section id="module-overview" class="space-y-10">
                <div class="flex items-baseline gap-4">
                    <span class="module-num text-3xl text-[#E9BD85]">01</span>
                    <div>
                        <h2 class="text-2xl md:text-3xl font-bold text-white" data-i18n-zh="选择器概览与何时使用" data-i18n-en="Overview & Usage Guidelines">选择器概览与何时使用</h2>
                        <p class="text-sm text-gray-300 mt-1.5 leading-relaxed" data-i18n-zh="选择器用于当页面空间有限，但需要提供大量预设选项供用户选择的交互场景。在卡萨帝界面中，需确保选择框的层级清晰，弹层展开时不遮挡关键核心状态。" data-i18n-en="Selectors are ideal when page space is limited but a large set of preset options needs to be provided without cluttering the screen.">选择器用于当页面空间有限，但需要提供大量预设选项供用户选择的交互场景。在卡萨帝界面中，需确保选择框的层级清晰，弹层展开时不遮挡关键核心状态。</p>
                    </div>
                </div>

                <!-- 01 全景概览图 (图1: 1364 x 511 px) -->
                <div class="w-full aspect-[1364/511] bg-black/30 flex items-center justify-center p-8 overflow-hidden">
                    <img src="assets/component_wheel_picker/component_wheel_picker-1.png" alt="component_wheel_picker-1" class="w-full h-full object-contain">
                </div>

                <div class="gallery-panel p-8 space-y-3">
                    <h3 class="text-lg font-bold text-white" data-i18n-zh="何时使用" data-i18n-en="When to Use">何时使用</h3>
                    <ul class="space-y-2 text-sm text-gray-300 leading-relaxed list-disc list-inside">
                        <li data-i18n-zh="选项数量超过 5 个时，优先使用下拉选择器，避免平铺单选框占用过多屏幕空间。" data-i18n-en="When options exceed 5 items, drop-down selectors are preferred over inline radio buttons.">选项数量超过 5 个时，优先使用下拉选择器，避免平铺单选框占用过多屏幕空间。</li>
                        <li data-i18n-zh="单选场景：使用单下拉菜单或带有独立标签提示的选中态；多选场景：结合勾选框与选中标签项表达。" data-i18n-en="Single Select: Uses single dropdown with text tag; Multi-Select: Combines checkboxes and active tags.">单选场景：使用单下拉菜单或带有独立标签提示的选中态；多选场景：结合勾选框与选中标签项表达。</li>
                        <li data-i18n-zh="带有层级分类的复杂数据，可使用分组/分类选项保持逻辑清晰。" data-i18n-en="For hierarchical option sets, use categorized option layouts to maintain clear sectioning.">带有层级分类的复杂数据，可使用分组/分类选项保持逻辑清晰。</li>
                    </ul>
                </div>
            </section>

            <hr class="border-t border-gray-800">

            <!-- ================= 02 下拉选择器（单选） ================= -->
            <section id="module-single-select" class="space-y-10">
                <div class="flex items-baseline gap-4">
                    <span class="module-num text-3xl text-[#E9BD85]">02</span>
                    <div>
                        <h2 class="text-2xl md:text-3xl font-bold text-white" data-i18n-zh="下拉选择器（单选）" data-i18n-en="Drop-down Selector (Single Select)">下拉选择器（单选）</h2>
                        <p class="text-sm text-gray-300 mt-1.5 leading-relaxed" data-i18n-zh="适用于从单组备选项中精准选取单个参数的单选下拉交互控件规范。" data-i18n-en="Specifications for single-select dropdown components used to pick one parameter from a group of options.">适用于从单组备选项中精准选取单个参数的单选下拉交互控件规范。</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
                    
                    <!-- 1. 默认 (图2) -->
                    <div class="gallery-panel p-0 overflow-hidden flex flex-col justify-between">
                        <div class="w-full aspect-[16/9] border-b border-gray-800 bg-black/30 overflow-hidden">
                            <img src="assets/component_wheel_picker/component_wheel_picker-2.png" alt="component_wheel_picker-2" class="w-full h-full object-cover">
                        </div>
                        <div class="p-8 space-y-3">
                            <h3 class="text-lg font-bold text-[#E9BD85]" data-i18n-zh="默认" data-i18n-en="Default">默认</h3>
                            <p class="text-xs text-gray-300 leading-relaxed" data-i18n-zh="标准单选下拉框在默认, 激活, 已选及禁用状态下的视觉外观。" data-i18n-en="Visual appearance of standard single-select dropdown across default, active, selected, and disabled states.">标准单选下拉框在默认、激活、已选及禁用状态下的视觉外观。</p>
                        </div>
                    </div>

                    <!-- 2. 带文本 (图3) -->
                    <div class="gallery-panel p-0 overflow-hidden flex flex-col justify-between">
                        <div class="w-full aspect-[16/9] border-b border-gray-800 bg-black/30 overflow-hidden">
                            <img src="assets/component_wheel_picker/component_wheel_picker-3.png" alt="component_wheel_picker-3" class="w-full h-full object-cover">
                        </div>
                        <div class="p-8 space-y-3">
                            <h3 class="text-lg font-bold text-[#E9BD85]" data-i18n-zh="带文本" data-i18n-en="With Text">带文本</h3>
                            <p class="text-xs text-gray-300 leading-relaxed" data-i18n-zh="带有独立前置标签或字段说明的单选下拉选择框样式规范。" data-i18n-en="Single-select dropdown styling specifications with accompanying leading labels or field descriptions.">带有独立前置标签或字段说明的单选下拉选择框样式规范。</p>
                        </div>
                    </div>

                </div>
            </section>

            <hr class="border-t border-gray-800">

            <!-- ================= 03 下拉选择器（多选） ================= -->
            <section id="module-multi-select" class="space-y-10">
                <div class="flex items-baseline gap-4">
                    <span class="module-num text-3xl text-[#E9BD85]">03</span>
                    <div>
                        <h2 class="text-2xl md:text-3xl font-bold text-white" data-i18n-zh="下拉选择器（多选）" data-i18n-en="Drop-down Selector (Multi-Select)">下拉选择器（多选）</h2>
                        <p class="text-sm text-gray-300 mt-1.5 leading-relaxed" data-i18n-zh="包含默认, 选择器选项, 分类选项以及多选+分类选项四种核心形态, 满足家电多维参数输入需求。" data-i18n-en="Includes Default, Selector Options, Categorized Options, and Multi-Select + Categorized Options.">包含默认、选择器选项、分类选项以及多选+分类选项四种核心形态，满足家电多维参数输入需求。</p>
                    </div>
                </div>

                <!-- 4个小模块网格布局 -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
                    
                    <!-- 1. 默认 (图4) -->
                    <div class="gallery-panel p-0 overflow-hidden flex flex-col justify-between">
                        <div class="w-full aspect-[16/9] border-b border-gray-800 bg-black/30 overflow-hidden">
                            <img src="assets/component_wheel_picker/component_wheel_picker-4.png" alt="component_wheel_picker-4" class="w-full h-full object-cover">
                        </div>
                        <div class="p-8 space-y-3">
                            <h3 class="text-lg font-bold text-[#E9BD85]" data-i18n-zh="默认" data-i18n-en="Default">默认</h3>
                            <p class="text-xs text-gray-300 leading-relaxed" data-i18n-zh="标准未展开状态、已选状态以及禁用状态的视觉规范。" data-i18n-en="Visual specifications for Default, Selected, and Disabled states.">标准未展开状态、已选状态以及禁用状态的视觉规范。</p>
                        </div>
                    </div>

                    <!-- 2. 选择器选项 (图5) -->
                    <div class="gallery-panel p-0 overflow-hidden flex flex-col justify-between">
                        <div class="w-full aspect-[16/9] border-b border-gray-800 bg-black/30 overflow-hidden">
                            <img src="assets/component_wheel_picker/component_wheel_picker-5.png" alt="component_wheel_picker-5" class="w-full h-full object-cover">
                        </div>
                        <div class="p-8 space-y-3">
                            <h3 class="text-lg font-bold text-[#E9BD85]" data-i18n-zh="选择器选项" data-i18n-en="Selector Options">选择器选项</h3>
                            <p class="text-xs text-gray-300 leading-relaxed" data-i18n-zh="点击展开后的弹层列表, 支持全选及多项勾选操作的布局规范。" data-i18n-en="Expanded dropdown list layout supporting select all and multi-selection items.">点击展开后的弹层列表，支持全选及多项勾选操作的布局规范。</p>
                        </div>
                    </div>

                    <!-- 3. 分类选项 (图6) -->
                    <div class="gallery-panel p-0 overflow-hidden flex flex-col justify-between">
                        <div class="w-full aspect-[16/9] border-b border-gray-800 bg-black/30 overflow-hidden">
                            <img src="assets/component_wheel_picker/component_wheel_picker-6.png" alt="component_wheel_picker-6" class="w-full h-full object-cover">
                        </div>
                        <div class="p-8 space-y-3">
                            <h3 class="text-lg font-bold text-[#E9BD85]" data-i18n-zh="分类选项" data-i18n-en="Categorized Options">分类选项</h3>
                            <p class="text-xs text-gray-300 leading-relaxed" data-i18n-zh="针对具有层级归类的复杂选项（如分类一、分类二）, 带分割线的下拉列表展示样式。" data-i18n-en="Dropdown list layout with section dividers for hierarchically grouped options.">针对具有层级归类的复杂选项（如分类一、分类二），带分割线的下拉列表展示样式。</p>
                        </div>
                    </div>

                    <!-- 4. 多选+分类选项 (图7) -->
                    <div class="gallery-panel p-0 overflow-hidden flex flex-col justify-between">
                        <div class="w-full aspect-[16/9] border-b border-gray-800 bg-black/30 overflow-hidden">
                            <img src="assets/component_wheel_picker/component_wheel_picker-7.png" alt="component_wheel_picker-7" class="w-full h-full object-cover">
                        </div>
                        <div class="p-8 space-y-3">
                            <h3 class="text-lg font-bold text-[#E9BD85]" data-i18n-zh="多选+分类选项" data-i18n-en="Multi-Select + Categorized Options">多选+分类选项</h3>
                            <p class="text-xs text-gray-300 leading-relaxed" data-i18n-zh="将多选复选框与多级分类组合的复杂弹层规范, 适用于多分类批量录入场景。" data-i18n-en="Complex overlay specification combining multi-select checkboxes with categorized sections.">将多选复选框与多级分类组合的复杂弹层规范，适用于多分类批量录入场景。</p>
                        </div>
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
                        <p class="text-sm text-gray-300 mt-1.5 leading-relaxed" data-i18n-zh="卡萨帝选择器控件全面支持深色与浅色双套主题模式, 确保在嵌入式屏幕、不同环境光照及不同面板材质上均具备高对比度与典雅质感。" data-i18n-en="Casarte Selectors adapt smoothly to both Dark and Light themes, preserving optimal legibility and premium feel across various display panels.">卡萨帝选择器控件全面支持深色与浅色双套主题模式，确保在嵌入式屏幕、不同环境光照及不同面板材质上均具备高对比度与典雅质感。</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-2">
                    <!-- 深色模式面板 (图8: 800x600 px -> aspect-[4/3]) -->
                    <div class="gallery-panel p-0 overflow-hidden flex flex-col justify-between bg-[#0D0D0F] border border-gray-800">
                        <div class="w-full aspect-[4/3] border-b border-gray-800 bg-black/30 overflow-hidden">
                            <img src="assets/component_wheel_picker/component_wheel_picker-8.png" alt="component_wheel_picker-8" class="w-full h-full object-cover">
                        </div>
                        <div class="p-8 space-y-4">
                            <div class="flex items-center gap-2">
                                <span class="w-3 h-3 rounded-none bg-[#D49E5A] inline-block"></span>
                                <h3 class="text-lg font-bold text-white" data-i18n-zh="深色模式" data-i18n-en="Dark Mode">深色模式</h3>
                            </div>
                            <p class="text-xs text-gray-400 leading-relaxed" data-i18n-zh="深色暗光背景环境, 采用高对比金/浅灰字和深色微光卡片底色, 激活态赋予金色辉光边框。" data-i18n-en="Dark background with gold/light grey accents, gold glow border for active state.">深色暗光背景环境，采用高对比金/浅灰字和深色微光卡片底色，激活态赋予金色辉光边框。</p>
                        </div>
                    </div>

                    <!-- 浅色模式面板 (图9: 800x600 px -> aspect-[4/3]) -->
                    <div class="gallery-panel p-0 overflow-hidden flex flex-col justify-between bg-[#F5F5F7] text-gray-900 border border-gray-300">
                        <div class="w-full aspect-[4/3] border-b border-gray-300 bg-white overflow-hidden">
                            <img src="assets/component_wheel_picker/component_wheel_picker-9.png" alt="component_wheel_picker-9" class="w-full h-full object-cover">
                        </div>
                        <div class="p-8 space-y-4">
                            <div class="flex items-center gap-2">
                                <span class="w-3 h-3 rounded-none bg-[#D49E5A] inline-block"></span>
                                <h3 class="text-lg font-bold text-gray-900" data-i18n-zh="浅色模式" data-i18n-en="Light Mode">浅色模式</h3>
                            </div>
                            <p class="text-xs text-gray-600 leading-relaxed" data-i18n-zh="高亮日光/浅色面板场景, 背景保持清爽纯净, 边框及文字微调为明亮模式高读性对比度。" data-i18n-en="Clean light background theme with refined dark text and high legibility borders.">高亮日光/浅色面板场景，背景保持清爽纯净，边框及文字微调为明亮模式高读性对比度。</p>
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
                                <li class="flex items-start gap-2"><span class="text-emerald-400 font-bold">•</span> <span data-i18n-zh="为选择框提供清晰的默认占位提示文字（如“请选择”）。" data-i18n-en="Provide clear placeholder text like 'Please Select'.">为选择框提供清晰的默认占位提示文字（如“请选择”）。</span></li>
                                <li class="flex items-start gap-2"><span class="text-emerald-400 font-bold">•</span> <span data-i18n-zh="在下拉面板展开时使用明确的高光或金色描边进行焦点聚焦表达。" data-i18n-en="Highlight active state with gold outline/glow during dropdown expansion.">在下拉面板展开时使用明确的高光或金色描边进行焦点聚焦表达。</span></li>
                                <li class="flex items-start gap-2"><span class="text-emerald-400 font-bold">•</span> <span data-i18n-zh="家电触控屏上的选择器需特别注意触控热区与弹层展示位置, 防止遮挡核心按钮。" data-i18n-en="Ensure proper touch hit areas and overlay positioning to avoid covering critical buttons.">家电触控屏上的选择器需特别注意触控热区与弹层展示位置，防止遮挡核心按钮。</span></li>
                            </ul>
                        </div>
                        <div class="space-y-4">
                            <h3 class="text-base font-bold text-rose-400 tracking-wider" data-i18n-zh="✕ 不应该" data-i18n-en="✕ Avoid">✕ 不应该</h3>
                            <ul class="space-y-3 text-sm text-gray-200 leading-relaxed">
                                <li class="flex items-start gap-2"><span class="text-rose-400 font-bold">•</span> <span data-i18n-zh="禁止遮挡关键核心状态, 展开菜单应具备正确的浮层层级。" data-i18n-en="Do not obscure critical core states; ensure correct overlay layering.">禁止遮挡关键核心状态，展开菜单应具备正确的浮层层级。</span></li>
                                <li class="flex items-start gap-2"><span class="text-rose-400 font-bold">•</span> <span data-i18n-zh="不要在禁用状态的选择器上响应任何点击及弹窗交互。" data-i18n-en="Do not respond with popup interactions on disabled selectors.">不要在禁用状态的选择器上响应任何点击及弹窗交互。</span></li>
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