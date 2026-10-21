document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('component_checkbox');
    if (!container) return;

    container.innerHTML = `
        <div class="space-y-20">

            <!-- ================= 01 复选框样式概览 ================= -->
            <section id="module-overview" class="space-y-10">
                <div class="flex items-baseline gap-4">
                    <span class="module-num text-3xl text-[#E9BD85]">01</span>
                    <div>
                        <h2 class="text-2xl md:text-3xl font-bold text-white" data-i18n-zh="复选框样式概览" data-i18n-en="Checkbox Style Overview">复选框样式概览</h2>
                        <p class="text-sm text-gray-300 mt-1.5 leading-relaxed" data-i18n-zh="用于多选场景（可选可不选，可选择一项或多项），选中状态呈现“勾选”或“实心选中”，强调“选择 / 不选择”的独立性。" data-i18n-en="Used in multi-selection scenarios (where one or more options can be selected). The selected state emphasizes the independence of selecting or deselecting.">用于多选场景（可选可不选，可选择一项或多项），选中状态呈现“勾选”或“实心选中”，强调“选择 / 不选择”的独立性。</p>
                    </div>
                </div>

                <!-- 模块 01：第一张图采用与单选按钮完全一致的 w-[80%] h-[80%] 缩放比例 -->
                <div class="w-full aspect-[1364/442] bg-black/30 flex items-center justify-center p-8 overflow-hidden">
                    <img src="assets/component_checkbox/component_checkbox-1.png" alt="component_checkbox-1" class="w-[80%] h-[80%] object-contain">
                </div>
            </section>

            <hr class="border-t border-gray-800">

            <!-- ================= 02 复选框样式规范矩阵 ================= -->
            <section id="module-checkbox-style" class="space-y-10">
                <div class="flex items-baseline gap-4">
                    <span class="module-num text-3xl text-[#E9BD85]">02</span>
                    <div>
                        <h2 class="text-2xl md:text-3xl font-bold text-white" data-i18n-zh="复选框样式规范矩阵" data-i18n-en="Checkbox Style Matrix">复选框样式规范矩阵</h2>
                        <p class="text-sm text-gray-300 mt-1.5 leading-relaxed" data-i18n-zh="全面梳理勾选样式与单选样式在默认、按下、禁用等交互状态下的表现规范。" data-i18n-en="Covers full state matrix for Check Style and Radio Style across various interactive states.">全面梳理勾选样式与单选样式在默认、按下、禁用等交互状态下的表现规范。</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <!-- 左侧：勾选样式 Check Style -->
                    <div class="gallery-panel p-0 overflow-hidden flex flex-col justify-between">
                        <div class="w-full aspect-[16/9] border-b border-gray-800 bg-black/30 overflow-hidden">
                            <img src="assets/component_checkbox/component_checkbox-2.png" alt="component_checkbox-2" class="w-full h-full object-cover">
                        </div>
                        <div class="p-8 space-y-4">
                            <h3 class="text-lg font-bold text-[#E9BD85]" data-i18n-zh="勾选样式 Check Style" data-i18n-en="Check Style">勾选样式 Check Style</h3>
                            <ul class="text-xs text-gray-300 space-y-2 leading-relaxed">
                                <li>
                                    <strong class="text-white" data-i18n-zh="默认：" data-i18n-en="Default: ">默认：</strong>
                                    <span data-i18n-zh="标准暗色环境下的描边方形框，配以清晰的文字标签与对勾（√）。" data-i18n-en="Standard outlined square box with clear text labels and checkmark.">标准暗色环境下的描边方形框，配以清晰的文字标签与对勾（√）。</span>
                                </li>
                                <li>
                                    <strong class="text-white" data-i18n-zh="按下：" data-i18n-en="Pressed: ">按下：</strong>
                                    <span data-i18n-zh="触控按下时的可选交互状态，呈现轻微高亮或透明度变化。" data-i18n-en="Optional interactive state when touched/pressed, showing slight highlight.">触控按下时的可选交互状态，呈现轻微高亮或透明度变化。</span>
                                </li>
                                <li>
                                    <strong class="text-white" data-i18n-zh="禁用：" data-i18n-en="Disabled: ">禁用：</strong>
                                    <span data-i18n-zh="降低整体透明度，不响应任何点击或触摸交互。" data-i18n-en="Reduced overall opacity, unresponsive to interactions.">降低整体透明度，不响应任何点击或触摸交互。</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <!-- 右侧：单选样式 Radio Style -->
                    <div class="gallery-panel p-0 overflow-hidden flex flex-col justify-between">
                        <div class="w-full aspect-[16/9] border-b border-gray-800 bg-black/30 overflow-hidden">
                            <img src="assets/component_checkbox/component_checkbox-3.png" alt="component_checkbox-3" class="w-full h-full object-cover">
                        </div>
                        <div class="p-8 space-y-4">
                            <h3 class="text-lg font-bold text-[#E9BD85]" data-i18n-zh="单选样式 Radio Style" data-i18n-en="Radio Style">单选样式 Radio Style</h3>
                            <ul class="text-xs text-gray-300 space-y-2 leading-relaxed">
                                <li>
                                    <strong class="text-white" data-i18n-zh="默认：" data-i18n-en="Default: ">默认：</strong>
                                    <span data-i18n-zh="采用方形实心色块填充形态作为独立多选的视觉强化表达。" data-i18n-en="Uses square solid color block fill as a visual reinforcement for multi-selection.">采用方形实心色块填充形态作为独立多选的视觉强化表达。</span>
                                </li>
                                <li>
                                    <strong class="text-white" data-i18n-zh="按下：" data-i18n-en="Pressed: ">按下：</strong>
                                    <span data-i18n-zh="选中或填充项在被持续触控或点击瞬间的动态反馈态。" data-i18n-en="Dynamic feedback state when touched or clicked.">选中或填充项在被持续触控或点击瞬间的动态反馈态。</span>
                                </li>
                                <li>
                                    <strong class="text-white" data-i18n-zh="禁用：" data-i18n-en="Disabled: ">禁用：</strong>
                                    <span data-i18n-zh="灰色或低饱和度呈现，指示当前不可操作。" data-i18n-en="Gray or low saturation presentation indicating non-operable.">灰色或低饱和度呈现，指示当前不可操作。</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <hr class="border-t border-gray-800">

            <!-- ================= 03 对齐规范 Alignment ================= -->
            <section id="module-alignment" class="space-y-10">
                <div class="flex items-baseline gap-4">
                    <span class="module-num text-3xl text-[#E9BD85]">03</span>
                    <div>
                        <h2 class="text-2xl md:text-3xl font-bold text-white" data-i18n-zh="对齐规范" data-i18n-en="Alignment Rules">对齐规范</h2>
                        <p class="text-sm text-gray-300 mt-1.5 leading-relaxed" data-i18n-zh="当选项聚焦且字段长度不一时，建议将选项对齐到统一的参考对齐锚点，保障整洁规整的视觉对齐排布。" data-i18n-en="When options are focused and field lengths vary, align options to a common reference point.">当选项聚焦且字段长度不一时，建议将选项对齐到统一的参考对齐锚点，保障整洁规整的视觉对齐排布。</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <!-- 正确对齐示例 -->
                    <div class="gallery-panel p-0 overflow-hidden flex flex-col justify-between">
                        <div class="w-full aspect-[16/9] border-b border-gray-800 bg-black/30 overflow-hidden">
                            <img src="assets/component_checkbox/component_checkbox-4.png" alt="component_checkbox-4" class="w-full h-full object-cover">
                        </div>
                        <div class="p-6 space-y-2">
                            <h3 class="text-base font-bold text-emerald-400" data-i18n-zh="✓ 建议：统一参考锚点对齐" data-i18n-en="✓ Recommended: Align to Common Reference">✓ 建议：统一参考锚点对齐</h3>
                            <p class="text-xs text-gray-300 leading-relaxed" data-i18n-zh="多项并排时采用统一列首/固定间距做左对齐，视觉动线更加整洁流畅。" data-i18n-en="Use consistent column left alignment for multiple horizontal items.">多项并排时采用统一列首/固定间距做左对齐，视觉动线更加整洁流畅。</p>
                        </div>
                    </div>

                    <!-- 错误对齐示例 -->
                    <div class="gallery-panel p-0 overflow-hidden flex flex-col justify-between">
                        <div class="w-full aspect-[16/9] border-b border-gray-800 bg-black/30 overflow-hidden">
                            <img src="assets/component_checkbox/component_checkbox-5.png" alt="component_checkbox-5" class="w-full h-full object-cover">
                        </div>
                        <div class="p-6 space-y-2">
                            <h3 class="text-base font-bold text-rose-400" data-i18n-zh="✕ 避免：随字长随意分散对齐" data-i18n-en="✕ Avoid: Uneven Alignment">✕ 避免：随字长随意分散对齐</h3>
                            <p class="text-xs text-gray-300 leading-relaxed" data-i18n-zh="避开因各项文本长度不同而导致勾选框错落不齐，这会增加用户的扫视与识别成本。" data-i18n-en="Avoid uneven checkbox positions caused by varying text lengths.">避开因各项文本长度不同而导致勾选框错落不齐，这会增加用户的扫视与识别成本。</p>
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
                        <p class="text-sm text-gray-300 mt-1.5 leading-relaxed" data-i18n-zh="规范设计交付与前端开发实现在卡萨帝 OS 智能屏上的核对准则。" data-i18n-en="Checklist guidelines for design delivery and frontend implementation.">规范设计交付与前端开发实现在卡萨帝 OS 智能屏上的核对准则。</p>
                    </div>
                </div>

                <div class="gallery-panel p-8 md:p-12 space-y-8">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div class="space-y-4">
                            <h3 class="text-base font-bold text-emerald-400 tracking-wider" data-i18n-zh="✓ 应该" data-i18n-en="✓ Recommended">✓ 应该</h3>
                            <ul class="space-y-3 text-sm text-gray-200 leading-relaxed">
                                <li class="flex items-start gap-2"><span class="text-emerald-400 font-bold">•</span> <span data-i18n-zh="明确告知用户多选属性（例如在标题后标注“可选择多个”）。" data-i18n-en="Clearly state multi-selection attributes in the header.">明确告知用户多选属性（例如在标题后标注“可选择多个”）。</span></li>
                                <li class="flex items-start gap-2"><span class="text-emerald-400 font-bold">•</span> <span data-i18n-zh="选项字长不一时，统一参考列首线进行对齐规整。" data-i18n-en="Align options along a common reference anchor when label lengths differ.">选项字长不一时，统一参考列首线进行对齐规整。</span></li>
                            </ul>
                        </div>
                        <div class="space-y-4">
                            <h3 class="text-base font-bold text-rose-400 tracking-wider" data-i18n-zh="✕ 不应该" data-i18n-en="✕ Avoid">✕ 不应该</h3>
                            <ul class="space-y-3 text-sm text-gray-200 leading-relaxed">
                                <li class="flex items-start gap-2"><span class="text-rose-400 font-bold">•</span> <span data-i18n-zh="切勿在非危险破坏性场景滥用红色选中态。" data-i18n-en="Do not abuse red selection state in non-destructive scenarios.">切勿在非危险破坏性场景滥用红色选中态。</span></li>
                                <li class="flex items-start gap-2"><span class="text-rose-400 font-bold">•</span> <span data-i18n-zh="切勿将多选复选框强行用于互斥单选场景。" data-i18n-en="Do not force multi-select checkboxes into mutually exclusive single-select tasks.">切勿将多选复选框强行用于互斥单选场景。</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    `;

    // 语言国际化同步逻辑
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