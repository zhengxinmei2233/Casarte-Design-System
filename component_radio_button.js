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
            .spec-table {
                width: 100%;
                border-collapse: collapse;
                min-width: 650px;
            }
            .spec-table th, .spec-table td {
                padding: 16px 20px;
                text-align: left;
                border-bottom: 1px solid rgba(255, 255, 255, 0.08);
                vertical-align: middle;
                word-break: break-word;
            }
            .spec-table th {
                font-size: 12px;
                letter-spacing: 0.05em;
                color: #9CA3AF;
                background: rgba(255, 255, 255, 0.03);
                white-space: nowrap;
            }
            .spec-table td {
                font-size: 14px;
                color: #D1D5DB;
            }
            .spec-table tr:last-child td {
                border-bottom: 0;
            }
            .table-wrap {
                overflow-x: auto;
                width: 100%;
            }
        </style>

        <div class="space-y-20">

            <!-- ================= 01 概览 ================= -->
            <section id="module-overview" class="space-y-10">
                <div class="flex items-baseline gap-4">
                    <span class="module-num text-3xl text-[#E9BD85]">01</span>
                    <div>
                        <h2 class="text-2xl md:text-3xl font-bold text-white" data-i18n-zh="单选按钮概览" data-i18n-en="Overview & When to Use">单选按钮概览</h2>
                        <p class="text-sm text-gray-300 mt-1.5 leading-relaxed" data-i18n-zh="单选框是用于在一组互斥选项中让用户选择唯一答案的交互组件。卡萨帝多终端统一提供清晰的选中与未选中视觉反馈及颜色语义规范。" data-i18n-en="A radio button is an interactive component that allows the user to select a single option from a set of mutually exclusive choices.">单选框是用于在一组互斥选项中让用户选择唯一答案的交互组件[cite: 4]。卡萨帝多终端统一提供清晰的选中与未选中视觉反馈及颜色语义规范。</p>
                    </div>
                </div>

                <div class="w-full aspect-[1364/442] bg-black/30 border border-white/5 flex items-center justify-center p-8 overflow-hidden rounded-none">
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
                    <div class="gallery-panel p-8 space-y-4 rounded-none border border-white/5 bg-black/30">
                        <h3 class="text-lg font-bold text-white" data-i18n-zh="颜色语义" data-i18n-en="Color Semantics">颜色语义</h3>
                        <p class="text-xs text-gray-300 leading-relaxed" data-i18n-zh="在常规的表单填写、偏好设置等无风险选择场景中，严禁使用红色作为单选组件的常态或选中颜色，以免引起用户的困惑或操作焦虑。" data-i18n-en="In routine, risk-free selection scenarios, the use of red as the default or selected color is strictly prohibited.">在常规的表单填写、偏好设置等无风险选择场景中，严禁使用红色作为单选组件的常态或选中颜色，以免引起用户的困惑或操作焦虑。</p>
                        <div class="pt-2 text-xs space-y-2 text-gray-400">
                            <p><strong class="text-white" data-i18n-zh="• 规范说明：" data-i18n-en="• Specification: ">• 规范说明：</strong><span data-i18n-zh="红色带有强烈的“警告”和“危险”视觉语义。" data-i18n-en="Red carries a strong warning and danger visual semantic.">红色带有强烈的“警告”和“危险”视觉语义。</span></p>
                            <p><strong class="text-white" data-i18n-zh="• 使用场景：" data-i18n-en="• Usage Scenario: ">• 使用场景：</strong><span data-i18n-zh="仅限于具有破坏性或不可逆的危险操作场景（如：确认删除、解除绑定、注销账号等）。" data-i18n-en="Limited to destructive or irreversible dangerous operations (e.g., delete, unbind).">仅限于具有破坏性或不可逆的危险操作场景（如：确认删除、解除绑定、注销账号等）。</span></p>
                        </div>
                    </div>

                    <div class="gallery-panel p-8 space-y-4 rounded-none border border-white/5 bg-black/30">
                        <h3 class="text-lg font-bold text-white" data-i18n-zh="状态精简" data-i18n-en="State Simplification">状态精简</h3>
                        <p class="text-xs text-gray-300 leading-relaxed" data-i18n-zh="按下/点击时状态定义为可选交互状态，而非强制使用。" data-i18n-en="The Pressed state is defined as an optional interaction state, not a mandatory one.">按下/点击时状态定义为可选交互状态，而非强制使用。</p>
                    </div>
                </div>
            </section>

            <hr class="border-t border-gray-800">

            <!-- ================= 03 类型与交互 (按钮式单选严格应用截图3红框规范：254x88比例，未选中/选中形态) ================= -->
            <section id="module-type-interaction" class="space-y-10">
                <div class="flex items-baseline gap-4">
                    <span class="module-num text-3xl text-[#E9BD85]">03</span>
                    <div>
                        <h2 class="text-2xl md:text-3xl font-bold text-white" data-i18n-zh="类型与交互" data-i18n-en="Types & Interactions">类型与交互</h2>
                        <p class="text-sm text-gray-300 mt-1.5 leading-relaxed" data-i18n-zh="针对基础单选与按钮式单选在智能家电交互上的差异化布局规范。" data-i18n-en="Differentiated layout guidelines for basic radio and button-style radio selections on smart appliance interfaces.">针对基础单选与按钮式单选在智能家电交互上的差异化布局规范。</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <!-- 基础单选 (2px边框，可交互切换) -->
                    <div class="gallery-panel p-8 space-y-6 rounded-none border border-white/5 bg-black/30">
                        <div class="space-y-2">
                            <h3 class="text-lg font-bold text-white" data-i18n-zh="基础单选" data-i18n-en="Basic Radio">基础单选</h3>
                            <p class="text-xs text-gray-400" data-i18n-zh="短标签横排；整段文字与圆点共同构成点击区域。" data-i18n-en="Short labels horizontal; text and dot form joint click area.">短标签横排；整段文字与圆点共同构成点击区域。</p>
                        </div>
                        <div class="flex items-center gap-8 py-4" id="interactive-basic-radio">
                            <label class="flex items-center gap-2.5 cursor-pointer select-none group">
                                <input type="radio" name="demo-basic" value="1" class="hidden">
                                <div class="w-5 h-5 rounded-full border-2 border-gray-500 group-hover:border-[#E9BD85] flex items-center justify-center transition-colors">
                                    <div class="w-2.5 h-2.5 bg-[#E9BD85] rounded-full hidden"></div>
                                </div>
                                <span class="text-sm text-gray-300 group-hover:text-white">1次</span>
                            </label>
                            <label class="flex items-center gap-2.5 cursor-pointer select-none group">
                                <input type="radio" name="demo-basic" value="2" checked class="hidden">
                                <div class="w-5 h-5 rounded-full border-2 border-[#E9BD85] flex items-center justify-center transition-colors">
                                    <div class="w-2.5 h-2.5 bg-[#E9BD85] rounded-full"></div>
                                </div>
                                <span class="text-sm text-white font-bold">2次</span>
                            </label>
                            <label class="flex items-center gap-2.5 cursor-pointer select-none group">
                                <input type="radio" name="demo-basic" value="3" class="hidden">
                                <div class="w-5 h-5 rounded-full border-2 border-gray-500 group-hover:border-[#E9BD85] flex items-center justify-center transition-colors">
                                    <div class="w-2.5 h-2.5 bg-[#E9BD85] rounded-full hidden"></div>
                                </div>
                                <span class="text-sm text-gray-300 group-hover:text-white">3次</span>
                            </label>
                        </div>
                    </div>

                    <!-- 按钮式单选 (应用截图3红框：选中项为金框+深褐底色，未选中为细边框) -->
                    <div class="gallery-panel p-8 space-y-6 rounded-none border border-white/5 bg-black/30">
                        <div class="space-y-2">
                            <h3 class="text-lg font-bold text-white" data-i18n-zh="按钮式单选" data-i18n-en="Button-style Radio">按钮式单选</h3>
                            <p class="text-xs text-gray-400" data-i18n-zh="用于短小、同等权重的档位；保持单选语义，窄屏改为纵排。" data-i18n-en="Used for short, equal-weight gears; maintains single-selection semantics, switches to vertical layout on narrow screens.">用于短小、同等权重的档位；保持单选语义，窄屏改为纵排。</p>
                        </div>
                        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2" id="interactive-button-radio">
                            <button type="button" data-val="auto" style="width: 100%; aspect-ratio: 254 / 88;" class="bg-[#3D3123] border border-[#E9BD85] text-white text-xs font-bold text-center rounded-none flex items-center justify-center gap-2 transition-all shadow-md">
                                <div class="w-2 h-2 bg-[#E9BD85] rounded-none"></div>自动
                            </button>
                            <button type="button" data-val="low" style="width: 100%; aspect-ratio: 254 / 88;" class="bg-black/20 border border-white/20 text-gray-300 text-xs text-center rounded-none hover:border-white/40 transition-all flex items-center justify-center">低</button>
                            <button type="button" data-val="mid" style="width: 100%; aspect-ratio: 254 / 88;" class="bg-black/20 border border-white/20 text-gray-300 text-xs text-center rounded-none hover:border-white/40 transition-all flex items-center justify-center">中</button>
                            <button type="button" data-val="high" style="width: 100%; aspect-ratio: 254 / 88;" class="bg-black/20 border border-white/20 text-gray-300 text-xs text-center rounded-none hover:border-white/40 transition-all flex items-center justify-center">高</button>
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

                <div class="gallery-panel p-8 md:p-12 space-y-8 rounded-none border border-white/5 bg-black/30">
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

    // 绑定基础单选点击交互逻辑
    const basicRadioGroup = document.getElementById('interactive-basic-radio');
    if (basicRadioGroup) {
        const labels = basicRadioGroup.querySelectorAll('label');
        labels.forEach(label => {
            label.addEventListener('click', () => {
                labels.forEach(l => {
                    const radio = l.querySelector('input[type="radio"]');
                    const dot = l.querySelector('div > div');
                    const outer = l.querySelector('div');
                    const txt = l.querySelector('span');
                    radio.checked = false;
                    dot.classList.add('hidden');
                    outer.classList.remove('border-[#E9BD85]');
                    outer.classList.add('border-gray-500');
                    txt.classList.remove('text-white', 'font-bold');
                    txt.classList.add('text-gray-300');
                });
                const currentRadio = label.querySelector('input[type="radio"]');
                const currentDot = label.querySelector('div > div');
                const currentOuter = label.querySelector('div');
                const currentTxt = label.querySelector('span');
                currentRadio.checked = true;
                currentDot.classList.remove('hidden');
                currentOuter.classList.remove('border-gray-500');
                currentOuter.classList.add('border-[#E9BD85]');
                currentTxt.classList.remove('text-gray-300');
                currentTxt.classList.add('text-white', 'font-bold');
            });
        });
    }

    // 绑定按钮式单选点击交互逻辑（完美应用截图3红框形态：选中为金框深褐底，未选中为细边框）
    const buttonRadioGroup = document.getElementById('interactive-button-radio');
    if (buttonRadioGroup) {
        const buttons = buttonRadioGroup.querySelectorAll('button');
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                buttons.forEach(b => {
                    b.className = "bg-black/20 border border-white/20 text-gray-300 text-xs text-center rounded-none hover:border-white/40 transition-all flex items-center justify-center";
                    b.innerHTML = b.textContent.trim();
                });
                btn.className = "bg-[#3D3123] border border-[#E9BD85] text-white text-xs font-bold text-center rounded-none flex items-center justify-center gap-2 transition-all shadow-md";
                const text = btn.textContent.trim();
                btn.innerHTML = `<div class="w-2 h-2 bg-[#E9BD85] rounded-none"></div>${text}`;
            });
        });
    }

    // 语言切换与同步应用函数
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