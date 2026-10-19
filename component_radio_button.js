document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('component_radio_button');
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
            .btn-custom-font {
                font-family: 'FZFangJHJW', sans-serif;
                font-weight: 400;
                font-stretch: normal;
                -webkit-font-smoothing: antialiased;
            }
        </style>

        <div class="space-y-20">

            <!-- ================= 01 概览与何时使用 ================= -->
            <section id="module-overview" class="space-y-10">
                <div class="flex items-baseline gap-4">
                    <span class="module-num text-3xl text-[#E9BD85]">01</span>
                    <div>
                        <h2 class="text-2xl md:text-3xl font-bold text-white" data-i18n-zh="单选按钮概览" data-i18n-en="Overview & When to Use">单选按钮概览</h2>
                        <p class="text-sm text-gray-300 mt-1.5 leading-relaxed" data-i18n-zh="单选框用于在一组互斥选项中选择单一结果。卡萨帝家电界面中的单选控件需在极简面板下具备明确的触控热区与选中区分。" data-i18n-en="Radio buttons allow selecting a single option from a set of mutually exclusive choices.">单选框用于在一组互斥选项中选择单一结果。卡萨帝家电界面中的单选控件需在极简面板下具备明确的触控热区与选中区分。</p>
                    </div>
                </div>

                <!-- 模块 01：对应第 1 张图 component_radio_button-1.png (等比缩小 20%，已移除外边框) -->
                <div class="w-full aspect-[1364/442] bg-black/30 flex items-center justify-center p-8 overflow-hidden">
                    <img src="assets/component_radio_button/component_radio_button-1.png" alt="component_radio_button-1" class="w-[80%] h-[80%] object-contain">
                </div>
            </section>

            <hr class="border-t border-gray-800">

            <!-- ================= 02 使用原则 ================= -->
            <section id="module-usage-principles" class="space-y-10">
                <div class="flex items-baseline gap-4">
                    <span class="module-num text-3xl text-[#E9BD85]">02</span>
                    <div>
                        <h2 class="text-2xl md:text-3xl font-bold text-white" data-i18n-zh="使用原则" data-i18n-en="Usage Principles & Color Semantics">使用原则</h2>
                        <p class="text-sm text-gray-300 mt-1.5 leading-relaxed" data-i18n-zh="规范颜色语义的使用限制，避免在无风险设置中造成用户的误解与操作焦虑。" data-i18n-en="Defines color semantic restrictions to avoid user confusion in risk-free scenarios.">规范颜色语义的使用限制，避免在无风险设置中造成用户的误解与操作焦虑。</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="gallery-panel p-8 space-y-4">
                        <h3 class="text-lg font-bold text-white" data-i18n-zh="颜色语义" data-i18n-en="Color Semantics">颜色语义</h3>
                        <p class="text-xs text-gray-300 leading-relaxed" data-i18n-zh="在常规的表单填写、偏好设置等无风险选择场景中，严禁使用红色作为单选组件的常态或选中颜色，以免引起用户的困惑或操作焦虑。" data-i18n-en="In routine, risk-free selection scenarios, the use of red as the default or selected color is strictly prohibited.">在常规的表单填写、偏好设置等无风险选择场景中，严禁使用红色作为单选组件的常态或选中颜色，以免引起用户的困惑或操作焦虑。</p>
                        <div class="pt-2 text-xs space-y-2 text-gray-400">
                            <p><strong class="text-white" data-i18n-zh="• 规范说明：" data-i18n-en="• Specification: ">• 规范说明：</strong><span data-i18n-zh="红色带有强烈的“警告”和“危险”视觉语义。" data-i18n-en="Red carries a strong warning and danger visual semantic.">红色带有强烈的“警告”和“危险”视觉语义。</span></p>
                            <p><strong class="text-white" data-i18n-zh="• 使用场景：" data-i18n-en="• Usage Scenario: ">• 使用场景：</strong><span data-i18n-zh="仅限于具有破坏性或不可逆的危险操作场景（如：确认删除、解除绑定、注销账号等）。" data-i18n-en="Limited to destructive or irreversible dangerous operations (e.g., delete, unbind).">仅限于具有破坏性或不可逆的危险操作场景（如：确认删除、解除绑定、注销账号等）。</span></p>
                        </div>
                    </div>

                    <div class="gallery-panel p-8 space-y-4">
                        <h3 class="text-lg font-bold text-white" data-i18n-zh="状态精简" data-i18n-en="State Simplification">状态精简</h3>
                        <p class="text-xs text-gray-300 leading-relaxed" data-i18n-zh="按下/点击时状态定义为可选交互状态，而非强制使用。" data-i18n-en="The Pressed state is defined as an optional interaction state, not a mandatory one.">按下/点击时状态定义为可选交互状态，而非强制使用。</p>
                    </div>
                </div>
            </section>

            <hr class="border-t border-gray-800">

            <!-- ================= 03 单选样式规范矩阵 ================= -->
            <section id="module-radio-style" class="space-y-10">
                <div class="flex items-baseline gap-4">
                    <span class="module-num text-3xl text-[#E9BD85]">03</span>
                    <div>
                        <h2 class="text-2xl md:text-3xl font-bold text-white" data-i18n-zh="单选样式规范矩阵" data-i18n-en="Radio Style Matrix">单选样式规范矩阵</h2>
                        <p class="text-sm text-gray-300 mt-1.5 leading-relaxed" data-i18n-zh="全面梳理未选 (Unselected) 与已选 (Selected) 在默认、按下、禁用 三种交互状态下的表现规范。" data-i18n-en="Covers full state matrix for Unselected and Selected radio buttons across Default, Pressed, and Disabled states.">全面梳理未选 (Unselected) 与已选 (Selected) 在默认、按下、禁用 三种交互状态下的表现规范。</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <!-- 左侧：未选状态 -> 对应第 2 张图 component_radio_button-2.png -->
                    <div class="gallery-panel p-0 overflow-hidden flex flex-col justify-between">
                        <div class="w-full aspect-[16/9] border-b border-gray-800 bg-black/30 overflow-hidden">
                            <img src="assets/component_radio_button/component_radio_button-2.png" alt="component_radio_button-2" class="w-full h-full object-cover">
                        </div>
                        <div class="p-8 space-y-4">
                            <h3 class="text-lg font-bold text-[#E9BD85]" data-i18n-zh="未选状态" data-i18n-en="Unselected State">未选状态</h3>
                            <ul class="text-xs text-gray-300 space-y-2 leading-relaxed">
                                <li>
                                    <strong class="text-white" data-i18n-zh="默认：" data-i18n-en="Default: ">默认：</strong>
                                    <span data-i18n-zh="标准暗色环境下的微光描边圆环，配以清晰的文字标签。" data-i18n-en="Standard subtle outlined ring in dark mode with clear text labels.">标准暗色环境下的微光描边圆环，配以清晰的文字标签。</span>
                                </li>
                                <li>
                                    <strong class="text-white" data-i18n-zh="按下：" data-i18n-en="Pressed: ">按下：</strong>
                                    <span data-i18n-zh="触控按下时的可选交互状态，圆环及文本呈现轻微高亮或透明度变化。" data-i18n-en="Optional interactive state when touched/pressed, showing slight highlight or opacity change.">触控按下时的可选交互状态，圆环及文本呈现轻微高亮或透明度变化。</span>
                                </li>
                                <li>
                                    <strong class="text-white" data-i18n-zh="禁用：" data-i18n-en="Disabled: ">禁用：</strong>
                                    <span data-i18n-zh="降低整体透明度，不响应任何点击或触摸交互。" data-i18n-en="Reduced overall opacity, unresponsive to any click or touch interactions.">降低整体透明度，不响应任何点击或触摸交互。</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <!-- 右侧：已选状态 -> 对应第 3 张图 component_radio_button-3.png -->
                    <div class="gallery-panel p-0 overflow-hidden flex flex-col justify-between">
                        <div class="w-full aspect-[16/9] border-b border-gray-800 bg-black/30 overflow-hidden">
                            <img src="assets/component_radio_button/component_radio_button-3.png" alt="component_radio_button-3" class="w-full h-full object-cover">
                        </div>
                        <div class="p-8 space-y-4">
                            <h3 class="text-lg font-bold text-[#E9BD85]" data-i18n-zh="已选状态" data-i18n-en="Selected State">已选状态</h3>
                            <ul class="text-xs text-gray-300 space-y-2 leading-relaxed">
                                <li>
                                    <strong class="text-white" data-i18n-zh="默认：" data-i18n-en="Default: ">默认：</strong>
                                    <span data-i18n-zh="核心选中反馈，采用卡萨帝品牌金环（或警示红环）与中心圆点高亮。" data-i18n-en="Core selection feedback, featuring Casarte brand gold ring (or warning red ring) with center dot highlight.">核心选中反馈，采用卡萨帝品牌金环（或警示红环）与中心圆点高亮。</span>
                                </li>
                                <li>
                                    <strong class="text-white" data-i18n-zh="按下：" data-i18n-en="Pressed: ">按下：</strong>
                                    <span data-i18n-zh="选中项在被持续触控或点击瞬间的动态反馈态。" data-i18n-en="Dynamic feedback state when a selected item is continuously touched or clicked.">选中项在被持续触控或点击瞬间的动态反馈态。</span>
                                </li>
                                <li>
                                    <strong class="text-white" data-i18n-zh="禁用：" data-i18n-en="Disabled: ">禁用：</strong>
                                    <span data-i18n-zh="已选中但处于不可操作状态下的灰色或低饱和度呈现。" data-i18n-en="Grayed out or low saturation presentation when selected but non-operable.">已选中但处于不可操作状态下的灰色或低饱和度呈现。</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <hr class="border-t border-gray-800">

            <!-- ================= 04 使用与验收红线 ================= -->
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
                                <li class="flex items-start gap-2"><span class="text-emerald-400 font-bold">•</span> <span data-i18n-zh="组内必须有且仅有一个默认选中项，避免出现无默认值情况。" data-i18n-en="Ensure exactly one option is selected by default within a group.">组内必须有且仅有一个默认选中项，避免出现无默认值情况。</span></li>
                                <li class="flex items-start gap-2"><span class="text-emerald-400 font-bold">•</span> <span data-i18n-zh="文本标签必须可以点击并直接触发对应的单选状态改变。" data-i18n-en="Text labels must be clickable to trigger radio selection.">文本标签必须可以点击并直接触发对应的单选状态改变。</span></li>
                            </ul>
                        </div>
                        <div class="space-y-4">
                            <h3 class="text-base font-bold text-rose-400 tracking-wider" data-i18n-zh="✕ 不应该" data-i18n-en="✕ Avoid">✕ 不应该</h3>
                            <ul class="space-y-3 text-sm text-gray-200 leading-relaxed">
                                <li class="flex items-start gap-2"><span class="text-rose-400 font-bold">•</span> <span data-i18n-zh="切勿将单选框当做多选复选框使用。" data-i18n-en="Do not use radio buttons for multiple selection tasks.">切勿将单选框当做多选复选框使用。</span></li>
                                <li class="flex items-start gap-2"><span class="text-rose-400 font-bold">•</span> <span data-i18n-zh="常态与普通选中切勿使用红色，仅破坏性动作才可使用危险色。" data-i18n-en="Do not use red for non-destructive or normal radio selections.">常态与普通选中切勿使用红色，仅破坏性动作才可使用危险色。</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    `;

    // 健壮的语言切换与同步应用函数
    const applyLang = () => {
        const lang = localStorage.getItem('haier-guideline-language') || 'zh';
        document.querySelectorAll('[data-i18n-zh][data-i18n-en]').forEach((el) => {
            const targetText = el.dataset[lang === 'zh' ? 'i18nZh' : 'i18nEn'];
            if (targetText) {
                el.textContent = targetText;
            }
        });
    };

    applyLang();

    window.addEventListener('storage', applyLang);
    window.addEventListener('languageChanged', applyLang);

    document.addEventListener('click', (e) => {
        const toggleBtn = e.target.closest('#language-switcher, [data-lang-toggle]');
        if (toggleBtn) {
            setTimeout(applyLang, 50);
        }
    });
});