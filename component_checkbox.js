document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('component_checkbox');
    if (!container) return;

    // 仅复选框控件本身的金色调整为 #D49E5A，页面其他标题序号等保持原样
    if (!document.getElementById('casarte-checkbox-styles')) {
        const styleEl = document.createElement('style');
        styleEl.id = 'casarte-checkbox-styles';
        styleEl.textContent = `
            .cs-cb-box {
                width: 22px;
                height: 22px;
                border-radius: 3px;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                flex-shrink: 0;
                transition: all 0.18s cubic-bezier(0.4, 0, 0.2, 1);
                box-sizing: border-box;
            }
            /* 默认未选 */
            .cs-cb-default {
                border: 1.5px solid #6E6E77;
                background: transparent;
            }
            /* 悬停示意 / 聚焦（复选框控件专属 #D49E5A） */
            .cs-cb-hover {
                border: 1.5px solid #D49E5A;
                background: rgba(212, 158, 90, 0.08);
                box-shadow: 0 0 0 3px rgba(212, 158, 90, 0.15);
            }
            /* 按下未选 */
            .cs-cb-pressed {
                border: 1.5px solid #D49E5A;
                background: rgba(212, 158, 90, 0.24);
            }
            /* 选中 & 半选 */
            .cs-cb-checked, .cs-cb-indeterminate {
                border: 1.5px solid #D49E5A;
                background: #D49E5A;
                color: #FFFFFF;
            }
            /* 禁用未选 */
            .cs-cb-disabled {
                border: 1.5px solid #3A3A42;
                background: rgba(255, 255, 255, 0.03);
            }
            /* 禁用已选 & 禁用半选 */
            .cs-cb-disabled-checked {
                border: 1.5px solid #4A4A52;
                background: #4A4A52;
                color: #8E8E98;
            }
            /* 错误状态 */
            .cs-cb-error {
                border: 1.5px solid #EF4444;
                background: rgba(239, 68, 68, 0.08);
            }

            /* 可交互复选框控件悬停与按下 */
            .cs-interactive-cb {
                cursor: pointer;
                user-select: none;
            }
            .cs-interactive-cb:hover .cs-cb-box[data-state="unchecked"] {
                border: 1.5px solid #D49E5A;
                background: rgba(212, 158, 90, 0.08);
                box-shadow: 0 0 0 3px rgba(212, 158, 90, 0.15);
            }
            .cs-interactive-cb:active .cs-cb-box[data-state="unchecked"] {
                border-color: #D49E5A;
                background: rgba(212, 158, 90, 0.24);
                box-shadow: none;
            }
            .cs-interactive-cb:hover .cs-cb-box[data-state="checked"],
            .cs-interactive-cb:hover .cs-cb-box[data-state="indeterminate"] {
                border-color: #E2B273;
                background: #E2B273;
            }
            .cs-interactive-cb:active .cs-cb-box[data-state="checked"],
            .cs-interactive-cb:active .cs-cb-box[data-state="indeterminate"] {
                border-color: #B88547;
                background: #B88547;
            }
        `;
        document.head.appendChild(styleEl);
    }

    // 矢量图标定义
    const ICON_CHECK = `<svg class="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="2.8 7.2 5.6 10 11.2 4"></polyline></svg>`;
    const ICON_MINUS = `<svg class="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><line x1="3.5" y1="7" x2="10.5" y2="7"></line></svg>`;

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

                <div class="w-full aspect-[1364/442] bg-black/30 flex items-center justify-center p-8 overflow-hidden border border-gray-800">
                    <img src="assets/component_checkbox/component_checkbox-1.png" alt="component_checkbox-1" class="w-[80%] h-[80%] object-contain">
                </div>
            </section>

            <hr class="border-t border-gray-800">

            <!-- ================= 02 状态与样式 ================= -->
            <section id="module-checkbox-style" class="space-y-10">
                <div class="flex items-baseline gap-4">
                    <span class="module-num text-3xl text-[#E9BD85]">02</span>
                    <div>
                        <h2 class="text-2xl md:text-3xl font-bold text-white" data-i18n-zh="状态与样式" data-i18n-en="States & Styles">状态与样式</h2>
                        <p class="text-sm text-gray-300 mt-1.5 leading-relaxed" data-i18n-zh="复选框包含未选、选中和半选三种状态，均可禁用。半选用于父级选项，表示部分子项已选。" data-i18n-en="Checkboxes include unchecked, checked, and indeterminate states, all of which can be disabled. Indeterminate is used for parent options when only a subset of child items is selected.">复选框包含未选、选中和半选三种状态，均可禁用。半选用于父级选项，表示部分子项已选。</p>
                    </div>
                </div>

                <div class="gallery-panel p-8 md:p-10 space-y-8">
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        <!-- 1. 默认 -->
                        <div class="border border-white/10 bg-black/35 p-6 flex flex-col justify-between min-h-[136px]">
                            <span class="text-sm font-semibold text-white" data-i18n-zh="默认" data-i18n-en="Default">默认</span>
                            <div class="flex items-center gap-3 mt-6">
                                <span class="cs-cb-box cs-cb-default"></span>
                                <span class="text-sm text-gray-200" data-i18n-zh="示例选项" data-i18n-en="Sample Option">示例选项</span>
                            </div>
                        </div>

                        <!-- 2. 选中 -->
                        <div class="border border-white/10 bg-black/35 p-6 flex flex-col justify-between min-h-[136px]">
                            <span class="text-sm font-semibold text-white" data-i18n-zh="选中" data-i18n-en="Checked">选中</span>
                            <div class="flex items-center gap-3 mt-6">
                                <span class="cs-cb-box cs-cb-checked">${ICON_CHECK}</span>
                                <span class="text-sm text-white" data-i18n-zh="示例选项" data-i18n-en="Sample Option">示例选项</span>
                            </div>
                        </div>

                        <!-- 3. 半选 -->
                        <div class="border border-white/10 bg-black/35 p-6 flex flex-col justify-between min-h-[136px]">
                            <span class="text-sm font-semibold text-white" data-i18n-zh="半选" data-i18n-en="Indeterminate">半选</span>
                            <div class="flex items-center gap-3 mt-6">
                                <span class="cs-cb-box cs-cb-indeterminate">${ICON_MINUS}</span>
                                <span class="text-sm text-white" data-i18n-zh="示例选项" data-i18n-en="Sample Option">示例选项</span>
                            </div>
                        </div>

                        <!-- 4. 悬停示意 -->
                        <div class="border border-white/10 bg-black/35 p-6 flex flex-col justify-between min-h-[136px]">
                            <span class="text-sm font-semibold text-white" data-i18n-zh="悬停示意" data-i18n-en="Hover / Focus">悬停示意</span>
                            <div class="flex items-center gap-3 mt-6">
                                <span class="cs-cb-box cs-cb-hover"></span>
                                <span class="text-sm text-white" data-i18n-zh="示例选项" data-i18n-en="Sample Option">示例选项</span>
                            </div>
                        </div>

                        <!-- 5. 禁用未选 -->
                        <div class="border border-white/10 bg-black/35 p-6 flex flex-col justify-between min-h-[136px]">
                            <span class="text-sm font-semibold text-gray-300" data-i18n-zh="禁用未选" data-i18n-en="Disabled Unchecked">禁用未选</span>
                            <div class="flex items-center gap-3 mt-6">
                                <span class="cs-cb-box cs-cb-disabled"></span>
                                <span class="text-sm text-gray-500" data-i18n-zh="示例选项" data-i18n-en="Sample Option">示例选项</span>
                            </div>
                        </div>

                        <!-- 6. 禁用已选 -->
                        <div class="border border-white/10 bg-black/35 p-6 flex flex-col justify-between min-h-[136px]">
                            <span class="text-sm font-semibold text-gray-300" data-i18n-zh="禁用已选" data-i18n-en="Disabled Checked">禁用已选</span>
                            <div class="flex items-center gap-3 mt-6">
                                <span class="cs-cb-box cs-cb-disabled-checked">${ICON_CHECK}</span>
                                <span class="text-sm text-gray-500" data-i18n-zh="示例选项" data-i18n-en="Sample Option">示例选项</span>
                            </div>
                        </div>

                        <!-- 7. 禁用半选 -->
                        <div class="border border-white/10 bg-black/35 p-6 flex flex-col justify-between min-h-[136px]">
                            <span class="text-sm font-semibold text-gray-300" data-i18n-zh="禁用半选" data-i18n-en="Disabled Indeterminate">禁用半选</span>
                            <div class="flex items-center gap-3 mt-6">
                                <span class="cs-cb-box cs-cb-disabled-checked">${ICON_MINUS}</span>
                                <span class="text-sm text-gray-500" data-i18n-zh="示例选项" data-i18n-en="Sample Option">示例选项</span>
                            </div>
                        </div>

                        <!-- 8. 错误 -->
                        <div class="border border-white/10 bg-black/35 p-6 flex flex-col justify-between min-h-[136px]">
                            <span class="text-sm font-semibold text-rose-400" data-i18n-zh="错误" data-i18n-en="Error">错误</span>
                            <div class="flex items-center gap-3 mt-6">
                                <span class="cs-cb-box cs-cb-error"></span>
                                <span class="text-sm text-gray-200" data-i18n-zh="示例选项" data-i18n-en="Sample Option">示例选项</span>
                            </div>
                        </div>
                    </div>

                    <p class="text-xs md:text-sm text-gray-400 pt-2 border-t border-white/10" data-i18n-zh="禁用时保留对勾或横线；必选组未选择任何项时，显示错误状态并提示“请至少选择一项”。" data-i18n-en="Retain checkmark or dash when disabled; if a required group has no selection, display the error state and prompt 'Please select at least one item'.">
                        禁用时保留对勾或横线；必选组未选择任何项时，显示错误状态并提示“请至少选择一项”。
                    </p>
                </div>
            </section>

            <hr class="border-t border-gray-800">

            <!-- ================= 03 组成与尺寸 ================= -->
            <section id="module-anatomy" class="space-y-10">
                <div class="flex items-baseline gap-4">
                    <span class="module-num text-3xl text-[#E9BD85]">03</span>
                    <div>
                        <h2 class="text-2xl md:text-3xl font-bold text-white" data-i18n-zh="组成与尺寸" data-i18n-en="Anatomy & Dimensions">组成与尺寸</h2>
                        <p class="text-sm text-gray-300 mt-1.5 leading-relaxed" data-i18n-zh="复选框由方形指示器、标签、可选说明与交互热区组成。组标题说明任务和数量限制；多行标签顶对齐，说明与文字左对齐。" data-i18n-en="A checkbox consists of a square indicator, label, optional description, and touch target. Group titles specify tasks and limits; multi-line labels align to top, descriptions align left with text.">复选框由方形指示器、标签、可选说明与交互热区组成。组标题说明任务和数量限制；多行标签顶对齐，说明与文字左对齐。</p>
                    </div>
                </div>

                <div class="gallery-panel overflow-x-auto">
                    <table class="w-full text-left border-collapse min-w-[680px]">
                        <thead>
                            <tr class="border-b border-white/15 bg-white/[0.04] text-xs md:text-sm font-semibold text-[#E9BD85] tracking-wider">
                                <th class="py-4 px-6 w-1/5" data-i18n-zh="要素" data-i18n-en="Element">要素</th>
                                <th class="py-4 px-6 w-1/4" data-i18n-zh="尺寸规格" data-i18n-en="Specifications">尺寸规格</th>
                                <th class="py-4 px-6" data-i18n-zh="应用规则" data-i18n-en="Application Rules">应用规则</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-white/10 text-sm text-gray-200">
                            <tr class="hover:bg-white/[0.02] transition-colors">
                                <td class="py-5 px-6 font-medium text-white" data-i18n-zh="指示器" data-i18n-en="Indicator">指示器</td>
                                <td class="py-5 px-6 text-gray-300 font-mono text-xs md:text-sm" data-i18n-zh="方框：22 × 22 dp；圆角：3 dp" data-i18n-en="Box: 22 × 22 dp; Radius: 3 dp">方框：22 × 22 dp；圆角：3 dp</td>
                                <td class="py-5 px-6 text-gray-300 leading-relaxed" data-i18n-zh="选中用对勾，半选用横线；保持方形轮廓，避免与圆形单选框混淆。" data-i18n-en="Use checkmark for checked, dash for indeterminate; maintain square contour to avoid confusion with circular radio buttons.">选中用对勾，半选用横线；保持方形轮廓，避免与圆形单选框混淆。</td>
                            </tr>
                            <tr class="hover:bg-white/[0.02] transition-colors">
                                <td class="py-5 px-6 font-medium text-white" data-i18n-zh="标签 / 说明" data-i18n-en="Label / Description">标签 / 说明</td>
                                <td class="py-5 px-6 text-gray-300 font-mono text-xs md:text-sm" data-i18n-zh="标签字号：20–24 dp；说明字号：18–20 dp" data-i18n-en="Label: 20–24 dp; Description: 18–20 dp">标签字号：20–24 dp；说明字号：18–20 dp</td>
                                <td class="py-5 px-6 text-gray-300 leading-relaxed" data-i18n-zh="TFT 标签建议不小于 18 dp；关键条件不能只放在难以辨认的小字中。" data-i18n-en="TFT labels are recommended to be at least 18 dp; critical conditions must not be hidden in tiny illegible text.">TFT 标签建议不小于 18 dp；关键条件不能只放在难以辨认的小字中。</td>
                            </tr>
                            <tr class="hover:bg-white/[0.02] transition-colors">
                                <td class="py-5 px-6 font-medium text-white" data-i18n-zh="触控热区" data-i18n-en="Touch Target">触控热区</td>
                                <td class="py-5 px-6 text-gray-300 font-mono text-xs md:text-sm" data-i18n-zh="最小热区：44 × 44 dp" data-i18n-en="Min Target: 44 × 44 dp">最小热区：44 × 44 dp</td>
                                <td class="py-5 px-6 text-gray-300 leading-relaxed" data-i18n-zh="家电建议高度 48–56 dp；硬件按像素密度换算，热区之间不得重叠。" data-i18n-en="Recommended appliance height is 48–56 dp; scale by hardware DPI, and touch targets must not overlap.">家电建议高度 48–56 dp；硬件按像素密度换算，热区之间不得重叠。</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <hr class="border-t border-gray-800">

            <!-- ================= 04 组件布局 ================= -->
            <section id="module-layout" class="space-y-10">
                <div class="flex items-baseline gap-4">
                    <span class="module-num text-3xl text-[#E9BD85]">04</span>
                    <div>
                        <h2 class="text-2xl md:text-3xl font-bold text-white" data-i18n-zh="组件布局" data-i18n-en="Component Layout">组件布局</h2>
                        <p class="text-sm text-gray-300 mt-1.5 leading-relaxed" data-i18n-zh="规范单组复选框的排列方向及带全选功能的层级组排布方式（以下示例均可点击切换选中状态）。" data-i18n-en="Defines orientation for checkbox groups and hierarchical parent-child select-all layouts (all demos below are interactive).">规范单组复选框的排列方向及带全选功能的层级组排布方式（以下示例均可点击切换选中状态）。</p>
                    </div>
                </div>

                <div class="gallery-panel p-8 md:p-10 space-y-10">
                    <!-- 子模块 A：对齐方式 -->
                    <div class="space-y-4">
                        <div>
                            <h3 class="text-lg font-bold text-[#E9BD85]" data-i18n-zh="对齐方式" data-i18n-en="Alignment Orientation">对齐方式</h3>
                            <p class="text-sm text-gray-300 mt-1" data-i18n-zh="同组复选框保持统一排列。短标签可横向排布；空间有限或标签较长时，优先纵向排布。" data-i18n-en="Keep checkboxes in the same group consistently aligned. Use horizontal layout for short labels; prefer vertical layout when space is limited or labels are long.">同组复选框保持统一排列。短标签可横向排布；空间有限或标签较长时，优先纵向排布。</p>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                            <!-- 水平排列 -->
                            <div class="border border-white/10 bg-black/35 p-6 space-y-5">
                                <div class="flex items-center justify-between">
                                    <span class="text-sm font-medium text-gray-300" data-i18n-zh="水平排列" data-i18n-en="Horizontal Layout">水平排列</span>
                                    <span class="text-[11px] text-[#E9BD85]/80 border border-[#E9BD85]/30 px-2 py-0.5" data-i18n-zh="可点击交互" data-i18n-en="Interactive">可点击交互</span>
                                </div>
                                <div class="flex flex-wrap items-center gap-8 pt-2 pb-4">
                                    <div class="cs-interactive-cb js-single-cb flex items-center gap-3 min-h-[44px]" data-checked="false" role="checkbox" aria-checked="false" tabindex="0">
                                        <span class="cs-cb-box cs-cb-default" data-state="unchecked"></span>
                                        <span class="text-sm text-gray-200" data-i18n-zh="选项1" data-i18n-en="Option 1">选项1</span>
                                    </div>
                                    <div class="cs-interactive-cb js-single-cb flex items-center gap-3 min-h-[44px]" data-checked="false" role="checkbox" aria-checked="false" tabindex="0">
                                        <span class="cs-cb-box cs-cb-default" data-state="unchecked"></span>
                                        <span class="text-sm text-gray-200" data-i18n-zh="选项2" data-i18n-en="Option 2">选项2</span>
                                    </div>
                                    <div class="cs-interactive-cb js-single-cb flex items-center gap-3 min-h-[44px]" data-checked="false" role="checkbox" aria-checked="false" tabindex="0">
                                        <span class="cs-cb-box cs-cb-default" data-state="unchecked"></span>
                                        <span class="text-sm text-gray-200" data-i18n-zh="选项3" data-i18n-en="Option 3">选项3</span>
                                    </div>
                                </div>
                            </div>

                            <!-- 垂直排列 -->
                            <div class="border border-white/10 bg-black/35 p-6 space-y-4">
                                <div class="flex items-center justify-between">
                                    <span class="text-sm font-medium text-gray-300" data-i18n-zh="垂直排列" data-i18n-en="Vertical Layout">垂直排列</span>
                                    <span class="text-[11px] text-[#E9BD85]/80 border border-[#E9BD85]/30 px-2 py-0.5" data-i18n-zh="可点击交互" data-i18n-en="Interactive">可点击交互</span>
                                </div>
                                <div class="flex flex-col space-y-1">
                                    <div class="cs-interactive-cb js-single-cb flex items-center gap-3 min-h-[44px]" data-checked="false" role="checkbox" aria-checked="false" tabindex="0">
                                        <span class="cs-cb-box cs-cb-default" data-state="unchecked"></span>
                                        <span class="text-sm text-gray-200" data-i18n-zh="选项1" data-i18n-en="Option 1">选项1</span>
                                    </div>
                                    <div class="cs-interactive-cb js-single-cb flex items-center gap-3 min-h-[44px]" data-checked="false" role="checkbox" aria-checked="false" tabindex="0">
                                        <span class="cs-cb-box cs-cb-default" data-state="unchecked"></span>
                                        <span class="text-sm text-gray-200" data-i18n-zh="选项2" data-i18n-en="Option 2">选项2</span>
                                    </div>
                                    <div class="cs-interactive-cb js-single-cb flex items-center gap-3 min-h-[44px]" data-checked="false" role="checkbox" aria-checked="false" tabindex="0">
                                        <span class="cs-cb-box cs-cb-default" data-state="unchecked"></span>
                                        <span class="text-sm text-gray-200" data-i18n-zh="选项3" data-i18n-en="Option 3">选项3</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr class="border-t border-white/10">

                    <!-- 子模块 B：复选框组 -->
                    <div class="space-y-4">
                        <div>
                            <h3 class="text-lg font-bold text-[#E9BD85]" data-i18n-zh="复选框组" data-i18n-en="Checkbox Group">复选框组</h3>
                            <p class="text-sm text-gray-300 mt-1" data-i18n-zh="全选独占一行，子项在下一行横向排列。全选可选中或清空所有子项；仅部分子项选中时，全选显示半选状态。" data-i18n-en="Select All occupies its own row, with child options arranged horizontally below. Select All toggles all children; when partially selected, it displays the indeterminate state.">全选独占一行，子项在下一行横向排列。全选可选中或清空所有子项；仅部分子项选中时，全选显示半选状态。</p>
                        </div>

                        <div class="border border-white/10 bg-black/35 p-6 space-y-3" id="interactive-checkbox-group">
                            <div class="flex items-center justify-between">
                                <!-- 全选母项 -->
                                <div id="group-select-all" class="cs-interactive-cb flex items-center gap-3 min-h-[44px]" role="checkbox" aria-checked="mixed" tabindex="0">
                                    <span class="cs-cb-box cs-cb-indeterminate" data-state="indeterminate">${ICON_MINUS}</span>
                                    <span class="text-sm font-semibold text-white" data-i18n-zh="全选" data-i18n-en="Select All">全选</span>
                                </div>
                                <span class="text-[11px] text-[#E9BD85]/80 border border-[#E9BD85]/30 px-2 py-0.5" data-i18n-zh="支持全选/半选联动" data-i18n-en="Parent-Child Sync">支持全选/半选联动</span>
                            </div>

                            <!-- 子项行 -->
                            <div class="flex flex-wrap items-center gap-8 pt-1">
                                <div class="cs-interactive-cb js-group-child flex items-center gap-3 min-h-[44px]" data-checked="true" role="checkbox" aria-checked="true" tabindex="0">
                                    <span class="cs-cb-box cs-cb-checked" data-state="checked">${ICON_CHECK}</span>
                                    <span class="text-sm text-white" data-i18n-zh="选项1" data-i18n-en="Option 1">选项1</span>
                                </div>
                                <div class="cs-interactive-cb js-group-child flex items-center gap-3 min-h-[44px]" data-checked="false" role="checkbox" aria-checked="false" tabindex="0">
                                    <span class="cs-cb-box cs-cb-default" data-state="unchecked"></span>
                                    <span class="text-sm text-gray-200" data-i18n-zh="选项2" data-i18n-en="Option 2">选项2</span>
                                </div>
                                <div class="cs-interactive-cb js-group-child flex items-center gap-3 min-h-[44px]" data-checked="false" role="checkbox" aria-checked="false" tabindex="0">
                                    <span class="cs-cb-box cs-cb-default" data-state="unchecked"></span>
                                    <span class="text-sm text-gray-200" data-i18n-zh="选项3" data-i18n-en="Option 3">选项3</span>
                                </div>
                                <div class="cs-interactive-cb js-group-child flex items-center gap-3 min-h-[44px]" data-checked="false" role="checkbox" aria-checked="false" tabindex="0">
                                    <span class="cs-cb-box cs-cb-default" data-state="unchecked"></span>
                                    <span class="text-sm text-gray-200" data-i18n-zh="选项4" data-i18n-en="Option 4">选项4</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <hr class="border-t border-gray-800">

            <!-- ================= 05 全选与数量规则 ================= -->
            <section id="module-rules" class="space-y-10">
                <div class="flex items-baseline gap-4">
                    <span class="module-num text-3xl text-[#E9BD85]">05</span>
                    <div>
                        <h2 class="text-2xl md:text-3xl font-bold text-white" data-i18n-zh="全选与数量规则" data-i18n-en="Select-All & Quantity Rules">全选与数量规则</h2>
                        <p class="text-sm text-gray-300 mt-1.5 leading-relaxed" data-i18n-zh="明确半选状态计算逻辑、禁用项边界、可选数量上限及动态列表刷新时的状态处理。" data-i18n-en="Specifies indeterminate state calculation, disabled item boundaries, selection limits, and dynamic content refresh behavior.">明确半选状态计算逻辑、禁用项边界、可选数量上限及动态列表刷新时的状态处理。</p>
                    </div>
                </div>

                <div class="gallery-panel divide-y divide-white/10">
                    <div class="p-6 md:px-8 flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
                        <div class="w-40 shrink-0 font-bold text-white text-sm md:text-base" data-i18n-zh="计算半选" data-i18n-en="Indeterminate Calculation">计算半选</div>
                        <div class="text-sm text-gray-300 leading-relaxed" data-i18n-zh="可操作项中：0 项为未选、全部为选中、部分为半选；点击全选可选中或清空全部可操作项。" data-i18n-en="Among operable items: 0 selected = unchecked, all selected = checked, partial = indeterminate; clicking Select All checks or clears all operable items.">可操作项中：0 项为未选、全部为选中、部分为半选；点击全选可选中或清空全部可操作项。</div>
                    </div>
                    <div class="p-6 md:px-8 flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
                        <div class="w-40 shrink-0 font-bold text-white text-sm md:text-base" data-i18n-zh="禁用与范围" data-i18n-en="Disabled & Scope">禁用与范围</div>
                        <div class="text-sm text-gray-300 leading-relaxed" data-i18n-zh="禁用项不参与全选；保留其已有状态并说明原因。没有可操作项时禁用全选。" data-i18n-en="Disabled items do not participate in Select All; preserve their current state and state the reason. Disable Select All when no items are operable.">禁用项不参与全选；保留其已有状态并说明原因。没有可操作项时禁用全选。</div>
                    </div>
                    <div class="p-6 md:px-8 flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
                        <div class="w-40 shrink-0 font-bold text-white text-sm md:text-base" data-i18n-zh="数量限制" data-i18n-en="Quantity Limits">数量限制</div>
                        <div class="text-sm text-gray-300 leading-relaxed" data-i18n-zh="普通附加项可全部不选；有数量限制时预先说明，超限后保留选择并提示修正。" data-i18n-en="Optional add-ons may have zero selections; specify limits upfront, and retain selections while prompting correction if exceeded.">普通附加项可全部不选；有数量限制时预先说明，超限后保留选择并提示修正。</div>
                    </div>
                    <div class="p-6 md:px-8 flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
                        <div class="w-40 shrink-0 font-bold text-white text-sm md:text-base" data-i18n-zh="动态内容" data-i18n-en="Dynamic Content">动态内容</div>
                        <div class="text-sm text-gray-300 leading-relaxed" data-i18n-zh="刷新或筛选后重新计算半选态；全选范围保持可见，新项目不自动选中，失效项目提示复核。" data-i18n-en="Recalculate indeterminate state after refresh or filtering; keep Select All scope visible, do not auto-select new items, and prompt review for invalid items.">刷新或筛选后重新计算半选态；全选范围保持可见，新项目不自动选中，失效项目提示复核。</div>
                    </div>
                </div>
            </section>

            <hr class="border-t border-gray-800">

            <!-- ================= 06 使用与验收 ================= -->
            <section id="module-best-practices" class="space-y-10">
                <div class="flex items-baseline gap-4">
                    <span class="module-num text-3xl text-[#E9BD85]">06</span>
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
                                <li class="flex items-start gap-2"><span class="text-emerald-400 font-bold">•</span> <span data-i18n-zh="将可独立组合的功能作为选项" data-i18n-en="Use independently combinable functions as options">将可独立组合的功能作为选项</span></li>
                                <li class="flex items-start gap-2"><span class="text-emerald-400 font-bold">•</span> <span data-i18n-zh="用半选状态表示组内部分选中" data-i18n-en="Use indeterminate state to indicate partial selection within a group">用半选状态表示组内部分选中</span></li>
                                <li class="flex items-start gap-2"><span class="text-emerald-400 font-bold">•</span> <span data-i18n-zh="明确全选范围、数量限制与禁用原因" data-i18n-en="Clearly specify Select All scope, quantity limits, and reasons for disabled items">明确全选范围、数量限制与禁用原因</span></li>
                            </ul>
                        </div>
                        <div class="space-y-4">
                            <h3 class="text-base font-bold text-rose-400 tracking-wider" data-i18n-zh="✕ 不应该" data-i18n-en="✕ Avoid">✕ 不应该</h3>
                            <ul class="space-y-3 text-sm text-gray-200 leading-relaxed">
                                <li class="flex items-start gap-2"><span class="text-rose-400 font-bold">•</span> <span data-i18n-zh="用复选框选择互斥程序" data-i18n-en="Use checkboxes to select mutually exclusive programs">用复选框选择互斥程序</span></li>
                                <li class="flex items-start gap-2"><span class="text-rose-400 font-bold">•</span> <span data-i18n-zh="默认勾选高能耗附加功能" data-i18n-en="Check high-energy-consumption add-on features by default">默认勾选高能耗附加功能</span></li>
                                <li class="flex items-start gap-2"><span class="text-rose-400 font-bold">•</span> <span data-i18n-zh="用半选表示待执行，或通过全选修改禁用项" data-i18n-en="Use indeterminate state to represent pending execution, or modify disabled items via Select All">用半选表示待执行，或通过全选修改禁用项</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    `;

    // ================= 04 模块交互逻辑 =================
    const renderCheckboxVisual = (cbWrapper, state) => {
        const box = cbWrapper.querySelector('.cs-cb-box');
        const label = cbWrapper.querySelector('span:last-child');
        if (!box) return;

        box.className = 'cs-cb-box';
        box.dataset.state = state;

        if (state === 'checked') {
            box.classList.add('cs-cb-checked');
            box.innerHTML = ICON_CHECK;
            cbWrapper.dataset.checked = 'true';
            cbWrapper.setAttribute('aria-checked', 'true');
            if (label) {
                label.classList.remove('text-gray-200');
                label.classList.add('text-white');
            }
        } else if (state === 'indeterminate') {
            box.classList.add('cs-cb-indeterminate');
            box.innerHTML = ICON_MINUS;
            cbWrapper.dataset.checked = 'mixed';
            cbWrapper.setAttribute('aria-checked', 'mixed');
            if (label) {
                label.classList.remove('text-gray-200');
                label.classList.add('text-white');
            }
        } else {
            box.classList.add('cs-cb-default');
            box.innerHTML = '';
            cbWrapper.dataset.checked = 'false';
            cbWrapper.setAttribute('aria-checked', 'false');
            if (label && cbWrapper.id !== 'group-select-all') {
                label.classList.remove('text-white');
                label.classList.add('text-gray-200');
            }
        }
    };

    // 1. 水平排列 & 垂直排列单选独立切换
    document.querySelectorAll('.js-single-cb').forEach((item) => {
        const toggleSingle = () => {
            const isChecked = item.dataset.checked === 'true';
            renderCheckboxVisual(item, isChecked ? 'unchecked' : 'checked');
        };
        item.addEventListener('click', toggleSingle);
        item.addEventListener('keydown', (e) => {
            if (e.key === ' ' || e.key === 'Enter') {
                e.preventDefault();
                toggleSingle();
            }
        });
    });

    // 2. 复选框组（全选 + 子项联动）
    const selectAllEl = document.getElementById('group-select-all');
    const childEls = Array.from(document.querySelectorAll('.js-group-child'));

    const syncSelectAllState = () => {
        if (!selectAllEl || childEls.length === 0) return;
        const checkedCount = childEls.filter((el) => el.dataset.checked === 'true').length;
        if (checkedCount === 0) {
            renderCheckboxVisual(selectAllEl, 'unchecked');
        } else if (checkedCount === childEls.length) {
            renderCheckboxVisual(selectAllEl, 'checked');
        } else {
            renderCheckboxVisual(selectAllEl, 'indeterminate');
        }
    };

    if (selectAllEl && childEls.length > 0) {
        const toggleAll = () => {
            const checkedCount = childEls.filter((el) => el.dataset.checked === 'true').length;
            const targetState = checkedCount === childEls.length ? 'unchecked' : 'checked';
            childEls.forEach((child) => renderCheckboxVisual(child, targetState));
            syncSelectAllState();
        };

        selectAllEl.addEventListener('click', toggleAll);
        selectAllEl.addEventListener('keydown', (e) => {
            if (e.key === ' ' || e.key === 'Enter') {
                e.preventDefault();
                toggleAll();
            }
        });

        childEls.forEach((child) => {
            const toggleChild = () => {
                const isChecked = child.dataset.checked === 'true';
                renderCheckboxVisual(child, isChecked ? 'unchecked' : 'checked');
                syncSelectAllState();
            };
            child.addEventListener('click', toggleChild);
            child.addEventListener('keydown', (e) => {
                if (e.key === ' ' || e.key === 'Enter') {
                    e.preventDefault();
                    toggleChild();
                }
            });
        });
    }

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