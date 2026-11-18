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

                <!-- 01 全景概览图 -->
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

            <!-- ================= 02 组件类型 ================= -->
            <section id="module-component-types" class="space-y-10">
                <div class="flex items-baseline gap-4">
                    <span class="module-num text-3xl text-[#E9BD85]">02</span>
                    <div>
                        <h2 class="text-2xl md:text-3xl font-bold text-white" data-i18n-zh="组件类型" data-i18n-en="Component Types">组件类型</h2>
                        <p class="text-sm text-gray-300 mt-1.5 leading-relaxed" data-i18n-zh="始终选择与输入内容最匹配、按键最少的键盘，降低查找与误触成本。" data-i18n-en="Always choose the keyboard that best matches the input content with the fewest keys to reduce search and mis-touch costs.">始终选择与输入内容最匹配、按键最少的键盘，降低查找与误触成本。</p>
                    </div>
                </div>

                <div class="gallery-panel p-8 overflow-x-auto">
                    <table class="input-type-table w-full text-left border-collapse text-sm text-gray-300">
                        <thead>
                            <tr class="border-b border-gray-800 text-white bg-white/5">
                                <th class="p-4 w-1/4" data-i18n-zh="类型" data-i18n-en="Type">类型</th>
                                <th class="p-4 w-1/3" data-i18n-zh="适用内容" data-i18n-en="Applicable Content">适用内容</th>
                                <th class="p-4" data-i18n-zh="布局要求" data-i18n-en="Layout Requirements">布局要求</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-800/50">
                            <tr>
                                <td class="p-4 font-medium text-[#E9BD85]" data-i18n-zh="字母键盘" data-i18n-en="Alphabetic Keyboard">字母键盘</td>
                                <td class="p-4" data-i18n-zh="名称、账号、搜索关键词等文本" data-i18n-en="Text such as names, accounts, and search keywords">名称、账号、搜索关键词等文本</td>
                                <td class="p-4" data-i18n-zh="默认显示当前语言；保留 123/符、中/EN、空格、删除与确认" data-i18n-en="Display current language by default; retain 123/Symbol, CN/EN, Space, Delete, and Confirm">默认显示当前语言；保留 123/符、中/EN、空格、删除与确认</td>
                            </tr>
                            <tr>
                                <td class="p-4 font-medium text-[#E9BD85]" data-i18n-zh="符号数字键盘" data-i18n-en="Symbol & Numeric Keyboard">符号数字键盘</td>
                                <td class="p-4" data-i18n-zh="同时需要数字、标点或常用符号" data-i18n-en="Requires numbers, punctuation, or common symbols simultaneously">同时需要数字、标点或常用符号</td>
                                <td class="p-4" data-i18n-zh="数字位于首行；返回键回到字母布局，不清除已输入内容" data-i18n-en="Numbers on top row; return key switches back to alphabetic layout without clearing entered content">数字位于首行；返回键回到字母布局，不清除已输入内容</td>
                            </tr>
                            <tr>
                                <td class="p-4 font-medium text-[#E9BD85]" data-i18n-zh="九宫格数字键盘" data-i18n-en="9-Key Numeric Keyboard">九宫格数字键盘</td>
                                <td class="p-4" data-i18n-zh="PIN、验证码、纯整数" data-i18n-en="PIN, verification codes, pure integers">PIN、验证码、纯整数</td>
                                <td class="p-4" data-i18n-zh="仅保留 0–9 与删除；短码输入不添加无关功能键" data-i18n-en="Retain only 0–9 and Delete; do not add irrelevant function keys for short code entry">仅保留 0–9 与删除；短码输入不添加无关功能键</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <hr class="border-t border-gray-800">

            <!-- ================= 03 类型示例 ================= -->
            <section id="module-type-examples" class="space-y-10">
                <div class="flex items-baseline gap-4">
                    <span class="module-num text-3xl text-[#E9BD85]">03</span>
                    <div>
                        <h2 class="text-2xl md:text-3xl font-bold text-white" data-i18n-zh="类型示例" data-i18n-en="Type Examples">类型示例</h2>
                        <p class="text-sm text-gray-300 mt-1.5 leading-relaxed" data-i18n-zh="以下示例展示字母、符号数字与九宫格数字三类键盘组件。设计与开发应根据实际输入内容选用对应类型，并保持既定的键位布局、视觉规格与功能层级一致。" data-i18n-en="The examples below demonstrate alphabetic, symbol/numeric, and 9-key numeric keyboards. Select the corresponding type based on actual input content while maintaining consistent key layouts, visual specs, and functional hierarchy.">以下示例展示字母、符号数字与九宫格数字三类键盘组件。设计与开发应根据实际输入内容选用对应类型，并保持既定的键位布局、视觉规格与功能层级一致。</p>
                    </div>
                </div>

                <!-- 竖向排列 3 张图片（再次缩小20%，宽度 755.38px，圆角 31.74px） -->
                <div class="gallery-panel p-8 md:p-12 space-y-12">
                    <!-- 1. 字母键盘 (-2) -->
                    <div class="flex flex-col items-center space-y-4">
                        <h3 class="text-base font-bold text-white tracking-wide" data-i18n-zh="字母键盘" data-i18n-en="Alphabetic Keyboard">字母键盘</h3>
                        <div class="w-full max-w-[755.38px] aspect-[1230/473.48] rounded-[31.74px] bg-black/30 overflow-hidden flex items-center justify-center">
                            <img src="assets/component_dropdown_select/component_dropdown_select-2.png" alt="component_dropdown_select-2" class="w-full h-full object-cover">
                        </div>
                    </div>

                    <!-- 2. 符号数字键盘 (-3) -->
                    <div class="flex flex-col items-center space-y-4">
                        <h3 class="text-base font-bold text-white tracking-wide" data-i18n-zh="符号数字键盘" data-i18n-en="Symbol & Numeric Keyboard">符号数字键盘</h3>
                        <div class="w-full max-w-[755.38px] aspect-[1230/473.48] rounded-[31.74px] bg-black/30 overflow-hidden flex items-center justify-center">
                            <img src="assets/component_dropdown_select/component_dropdown_select-3.png" alt="component_dropdown_select-3" class="w-full h-full object-cover">
                        </div>
                    </div>

                    <!-- 3. 九宫格数字键盘 (-4) -->
                    <div class="flex flex-col items-center space-y-4">
                        <h3 class="text-base font-bold text-white tracking-wide" data-i18n-zh="九宫格数字键盘" data-i18n-en="9-Key Numeric Keyboard">九宫格数字键盘</h3>
                        <div class="w-full max-w-[755.38px] aspect-[1230/473.48] rounded-[31.74px] bg-black/30 overflow-hidden flex items-center justify-center">
                            <img src="assets/component_dropdown_select/component_dropdown_select-4.png" alt="component_dropdown_select-4" class="w-full h-full object-cover">
                        </div>
                    </div>
                </div>
            </section>

            <hr class="border-t border-gray-800">

            <!-- ================= 04 组件样式 ================= -->
            <section id="module-component-styles" class="space-y-10">
                <div class="flex items-baseline gap-4">
                    <span class="module-num text-3xl text-[#E9BD85]">04</span>
                    <div>
                        <h2 class="text-2xl md:text-3xl font-bold text-white" data-i18n-zh="组件样式" data-i18n-en="Component Styles">组件样式</h2>
                        <p class="text-sm text-gray-300 mt-1.5 leading-relaxed" data-i18n-zh="根据需求切换不同的深/浅模式" data-i18n-en="Key material, gradient, and multi-state styling under Casarte aesthetic.">根据需求切换不同的深/浅模式</p>
                    </div>
                </div>

                <!-- 左右双栏 2 个图片样式 (900 x 346.45, 圆角 23.23px) -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <!-- 浅色模式 (-5) -->
                    <div class="gallery-panel p-8 space-y-5">
                        <h3 class="text-base font-bold text-white" data-i18n-zh="浅色模式" data-i18n-en="Light Mode">浅色模式</h3>
                        <div class="w-full aspect-[900/346.45] rounded-[23.23px] bg-black/30 overflow-hidden flex items-center justify-center">
                            <img src="assets/component_dropdown_select/component_dropdown_select-5.png" alt="component_dropdown_select-5" class="w-full h-full object-cover">
                        </div>
                    </div>

                    <!-- 深色模式 (-6) -->
                    <div class="gallery-panel p-8 space-y-5">
                        <h3 class="text-base font-bold text-white" data-i18n-zh="深色模式" data-i18n-en="Dark Mode">深色模式</h3>
                        <div class="w-full aspect-[900/346.45] rounded-[23.23px] bg-black/30 overflow-hidden flex items-center justify-center">
                            <img src="assets/component_dropdown_select/component_dropdown_select-6.png" alt="component_dropdown_select-6" class="w-full h-full object-cover">
                        </div>
                    </div>
                </div>
            </section>

            <hr class="border-t border-gray-800">

            <!-- ================= 05 结构与稳定性 ================= -->
            <section id="module-structure" class="space-y-10">
                <div class="flex items-baseline gap-4">
                    <span class="module-num text-3xl text-[#E9BD85]">05</span>
                    <div>
                        <h2 class="text-2xl md:text-3xl font-bold text-white" data-i18n-zh="结构与稳定性" data-i18n-en="Structure & Stability">结构与稳定性</h2>
                    </div>
                </div>

                <div class="gallery-panel p-8 space-y-4">
                    <ul class="space-y-3 text-sm text-gray-300 leading-relaxed list-disc list-inside">
                        <li data-i18n-zh="键盘固定从页面底部出现。显示键盘后，正在编辑的输入框及已输入内容必须保持可见，不得被键盘遮挡。" data-i18n-en="The keyboard always appears from the bottom of the page. Once displayed, the active input field and entered content must remain visible and unobstructed.">键盘固定从页面底部出现。显示键盘后，正在编辑的输入框及已输入内容必须保持可见，不得被键盘遮挡。</li>
                        <li data-i18n-zh="同一类键盘应保持行数、键位顺序、键帽间距和功能键位置一致。切换中英文时只替换字符，不移动删除、空格和确认键。" data-i18n-en="Keyboards of the same category must maintain consistent row counts, key order, keycap spacing, and function key positions. Switching CN/EN only replaces characters without shifting Delete, Space, or Confirm.">同一类键盘应保持行数、键位顺序、键帽间距和功能键位置一致。切换中英文时只替换字符，不移动删除、空格和确认键。</li>
                        <li data-i18n-zh="字母、数字和符号在键帽内居中显示。九宫格数字键盘中的辅助字母排列在数字下方，并降低视觉强调。" data-i18n-en="Letters, numbers, and symbols are centered inside keycaps. Secondary letters on 9-key numeric keypads are placed below numbers with reduced visual emphasis.">字母、数字和符号在键帽内居中显示。九宫格数字键盘中的辅助字母排列在数字下方，并降低视觉强调。</li>
                        <li data-i18n-zh="删除、Shift、键盘类型切换和确认键使用规定的图标、文字与固定位置，不随页面或业务场景重新排列。" data-i18n-en="Delete, Shift, keyboard type toggle, and Confirm keys use standardized icons, labels, and fixed positions without rearranging across pages or scenarios.">删除、Shift、键盘类型切换和确认键使用规定的图标、文字与固定位置，不随页面或业务场景重新排列。</li>
                    </ul>
                </div>
            </section>

            <hr class="border-t border-gray-800">

            <!-- ================= 06 交互原则 ================= -->
            <section id="module-interaction" class="space-y-10">
                <div class="flex items-baseline gap-4">
                    <span class="module-num text-3xl text-[#E9BD85]">06</span>
                    <div>
                        <h2 class="text-2xl md:text-3xl font-bold text-white" data-i18n-zh="交互原则" data-i18n-en="Interaction Principles">交互原则</h2>
                    </div>
                </div>

                <div class="gallery-panel p-8 space-y-4">
                    <ul class="space-y-3 text-sm text-gray-300 leading-relaxed list-disc list-inside">
                        <li data-i18n-zh="点按键帽后立即输入，并提供清晰的按下反馈；字符不得在动画结束后才出现。" data-i18n-en="Tapping a keycap enters the character immediately with clear press feedback; characters must not wait until animations finish to appear.">点按键帽后立即输入，并提供清晰的按下反馈；字符不得在动画结束后才出现。</li>
                        <li data-i18n-zh="长按删除可连续删除，松手立即停止；删除到空值时保持输入框，不退出页面。" data-i18n-en="Long-pressing Delete continuously removes characters and stops immediately upon release; keep the input field focused when cleared without exiting the page.">长按删除可连续删除，松手立即停止；删除到空值时保持输入框，不退出页面。</li>
                        <li data-i18n-zh="Shift 首次点按输入一个大写字符后复位；连续状态必须有可识别反馈。" data-i18n-en="Single-tapping Shift capitalizes one character then resets; Caps Lock state must provide recognizable visual feedback.">Shift 首次点按输入一个大写字符后复位；连续状态必须有可识别反馈。</li>
                        <li data-i18n-zh="123/符与返回键在布局间切换，已输入内容、光标位置和输入焦点均保持不变。" data-i18n-en="Switching layouts via 123/Symbol and Return keys preserves entered text, cursor position, and input focus.">123/符与返回键在布局间切换，已输入内容、光标位置和输入焦点均保持不变。</li>
                        <li data-i18n-zh="确认键文案应匹配任务结果，如“搜索”“下一步”“完成”；附件中的“确定/ENTER”为默认展示，不应替代更具体的任务动词。" data-i18n-en="Confirm key labels should match task outcomes such as 'Search', 'Next', or 'Done'; 'Confirm/ENTER' is a default placeholder and should not replace specific action verbs.">确认键文案应匹配任务结果，如“搜索”“下一步”“完成”；附件中的“确定/ENTER”为默认展示，不应替代更具体的任务动词。</li>
                        <li data-i18n-zh="系统返回或点击明确的关闭路径可收起键盘；不得因一次误触背景丢失已输入内容。" data-i18n-en="System back or explicit close actions dismiss the keyboard; accidental background taps must not discard entered content.">系统返回或点击明确的关闭路径可收起键盘；不得因一次误触背景丢失已输入内容。</li>
                    </ul>
                </div>
            </section>

            <hr class="border-t border-gray-800">

            <!-- ================= 07 使用与验收 ================= -->
            <section id="module-best-practices" class="space-y-10">
                <div class="flex items-baseline gap-4">
                    <span class="module-num text-3xl text-[#E9BD85]">07</span>
                    <div>
                        <h2 class="text-2xl md:text-3xl font-bold text-white" data-i18n-zh="使用与验收" data-i18n-en="Usage & Acceptance">使用与验收</h2>
                        <p class="text-sm text-gray-300 mt-1.5 leading-relaxed" data-i18n-zh="指导设计与开发团队在设计搭建与上线验收阶段恪守的规则。" data-i18n-en="Key do's and don'ts for designers and developers during creation and QA.">指导设计与开发团队在设计搭建与上线验收阶段恪守的规则。</p>
                    </div>
                </div>

                <div class="gallery-panel p-8 md:p-12 space-y-8">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div class="space-y-4">
                            <h3 class="text-base font-bold text-emerald-400 tracking-wider" data-i18n-zh="✓ 推荐" data-i18n-en="✓ Recommended">✓ 推荐</h3>
                            <ul class="space-y-3 text-sm text-gray-200 leading-relaxed">
                                <li class="flex items-start gap-2"><span class="text-emerald-400 font-bold">✓</span> <span data-i18n-zh="按内容类型显示最精简的键盘" data-i18n-en="Display the most streamlined keyboard for the content type">按内容类型显示最精简的键盘</span></li>
                                <li class="flex items-start gap-2"><span class="text-emerald-400 font-bold">✓</span> <span data-i18n-zh="键盘出现时保持当前字段可见" data-i18n-en="Keep the active field visible when the keyboard appears">键盘出现时保持当前字段可见</span></li>
                                <li class="flex items-start gap-2"><span class="text-emerald-400 font-bold">✓</span> <span data-i18n-zh="切换布局时保留输入与光标" data-i18n-en="Preserve input and cursor when switching layouts">切换布局时保留输入与光标</span></li>
                                <li class="flex items-start gap-2"><span class="text-emerald-400 font-bold">✓</span> <span data-i18n-zh="用具体任务动词命名确认键" data-i18n-en="Label the confirm key with a specific task verb">用具体任务动词命名确认键</span></li>
                            </ul>
                        </div>
                        <div class="space-y-4">
                            <h3 class="text-base font-bold text-rose-400 tracking-wider" data-i18n-zh="✕ 避免" data-i18n-en="✕ Avoid">✕ 避免</h3>
                            <ul class="space-y-3 text-sm text-gray-200 leading-relaxed">
                                <li class="flex items-start gap-2"><span class="text-rose-400 font-bold">✕</span> <span data-i18n-zh="为追求适配而改造既有键帽样式" data-i18n-en="Modify existing keycap styles just to fit a layout">为追求适配而改造既有键帽样式</span></li>
                                <li class="flex items-start gap-2"><span class="text-rose-400 font-bold">✕</span> <span data-i18n-zh="用全键盘输入纯数字或短验证码" data-i18n-en="Use a full keyboard for pure numbers or short verification codes">用全键盘输入纯数字或短验证码</span></li>
                                <li class="flex items-start gap-2"><span class="text-rose-400 font-bold">✕</span> <span data-i18n-zh="遮挡当前字段或关键设备状态" data-i18n-en="Obscure the active field or critical device status">遮挡当前字段或关键设备状态</span></li>
                                <li class="flex items-start gap-2"><span class="text-rose-400 font-bold">✕</span> <span data-i18n-zh="在键盘内部堆叠教程与帮助内容" data-i18n-en="Stack tutorials or help content inside the keyboard">在键盘内部堆叠教程与帮助内容</span></li>
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