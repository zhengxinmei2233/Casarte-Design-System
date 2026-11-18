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
            /* 卡萨帝控件基础样式（白底黑字、直角边角、香槟金聚焦态） */
            .casarte-select-default {
                background-color: #FFFFFF;
                color: #1A1A1A;
                border: 1px solid rgba(255, 255, 255, 0.25);
                border-radius: 0;
            }
            .casarte-select-active {
                background-color: #FFFFFF;
                color: #1A1A1A;
                border: 1.5px solid #E9BD85;
                box-shadow: 0 0 12px rgba(233, 189, 133, 0.25);
                border-radius: 0;
            }
            .casarte-select-disabled {
                background-color: #B8B8BC;
                color: #6E6E73;
                border: 1px solid rgba(255, 255, 255, 0.15);
                border-radius: 0;
                cursor: not-allowed;
            }
            .casarte-select-error {
                background-color: #FFFFFF;
                color: #1A1A1A;
                border: 1.5px solid #FF3B30;
                border-radius: 0;
            }
            .casarte-dropdown-menu {
                background-color: #FFFFFF;
                color: #1A1A1A;
                border: 1px solid #E5E5EA;
                border-radius: 0;
                box-shadow: 0 10px 25px rgba(0, 0, 0, 0.45);
            }
        </style>

        <div class="space-y-20">

            <!-- ================= 01 概览与何时使用 ================= -->
            <section id="module-overview" class="space-y-10">
                <div class="flex items-baseline gap-4">
                    <span class="module-num text-3xl text-[#E9BD85]">01</span>
                    <div>
                        <h2 class="text-2xl md:text-3xl font-bold text-white" data-i18n-zh="选择器概览与何时使用" data-i18n-en="Overview & Usage Guidelines">选择器概览与何时使用</h2>
                        <p class="text-sm text-gray-300 mt-1.5 leading-relaxed" data-i18n-zh="选择器用于当页面空间有限，但需要提供大量预设选项供用户选择的交互场景。在卡萨帝界面中，需确保选择框的层级清晰，弹层展开时不遮挡关键核心状态。" data-i18n-en="Selectors are ideal when page space is limited but a large set of preset options needs to be provided without cluttering the screen.">选择器用于当页面空间有限，但需要提供大量预设选项供用户选择的交互场景。在卡萨帝界面中，需确保选择框的层级清晰，弹层展开时不遮挡关键核心状态。</p>
                    </div>
                </div>

                <!-- 01 全景概览图 -->
                <div class="w-full aspect-[1364/511] bg-black/30 flex items-center justify-center p-8 overflow-hidden border border-white/10">
                    <img src="assets/component_wheel_picker/component_wheel_picker-1.png" alt="component_wheel_picker-1" class="w-full h-full object-contain">
                </div>

                <div class="gallery-panel p-8 space-y-3">
                    <h3 class="text-lg font-bold text-white" data-i18n-zh="何时使用" data-i18n-en="When to Use">何时使用</h3>
                    <p class="text-sm text-gray-300 leading-relaxed" data-i18n-zh="选项多于 5 项、需要节省纵向空间，或需要搜索时使用选择器。2-5 个互斥选项优先直接使用单选框；连续数值使用滑杆或滚轮选择器；立即开启或关闭设置使用开关。" data-i18n-en="Use selectors when there are more than 5 options, vertical space needs to be saved, or search is required. For 2-5 mutually exclusive options, use radio buttons directly; for continuous values, use sliders or wheel pickers; for immediate toggles, use switches.">
                        选项多于 5 项、需要节省纵向空间，或需要搜索时使用选择器。2-5 个互斥选项优先直接使用单选框；连续数值使用滑杆或滚轮选择器；立即开启或关闭设置使用开关。
                    </p>
                </div>
            </section>

            <hr class="border-t border-gray-800">

            <!-- ================= 02 组件构成 ================= -->
            <section id="module-composition" class="space-y-10">
                <div class="flex items-baseline gap-4">
                    <span class="module-num text-3xl text-[#E9BD85]">02</span>
                    <div>
                        <h2 class="text-2xl md:text-3xl font-bold text-white" data-i18n-zh="组件构成" data-i18n-en="Component Composition">组件构成</h2>
                        <p class="text-sm text-gray-300 mt-1.5 leading-relaxed" data-i18n-zh="选择器由文本标签、选择框和下拉面板组成。" data-i18n-en="Selectors are composed of text labels, selection boxes, and dropdown panels.">选择器由文本标签、选择框和下拉面板组成。</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                    <!-- 左侧：卡萨帝控件构成结构演示 -->
                    <div class="lg:col-span-7 gallery-panel p-8 md:p-10 bg-black/40 flex flex-col justify-center">
                        <div class="w-full max-w-lg mx-auto space-y-2.5">
                            <!-- 1. 字段标签 -->
                            <div class="flex items-center justify-between">
                                <span class="text-xs font-medium text-gray-400 tracking-wide" data-i18n-zh="字段标签" data-i18n-en="Field Label">字段标签</span>
                                <span class="text-[11px] font-mono text-[#E9BD85] px-1.5 py-0.5 bg-[#E9BD85]/10 border border-[#E9BD85]/30">01</span>
                            </div>

                            <!-- 2. 选择框（卡萨帝展开态样式） -->
                            <div class="relative">
                                <div class="casarte-select-active h-12 px-4 flex items-center justify-between">
                                    <span class="text-sm font-medium text-[#1A1A1A]">选项1</span>
                                    <svg class="w-4 h-4 text-[#D49E5A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M5 15l7-7 7 7"></path>
                                    </svg>
                                </div>
                                <span class="absolute -right-7 top-1/2 -translate-y-1/2 text-[11px] font-mono text-[#E9BD85] px-1.5 py-0.5 bg-[#E9BD85]/10 border border-[#E9BD85]/30">02</span>
                            </div>

                            <!-- 3. 下拉面板 -->
                            <div class="relative pt-0.5">
                                <div class="casarte-dropdown-menu divide-y divide-gray-100">
                                    <div class="px-4 py-3 bg-[#E9BD85]/15 text-sm font-semibold text-[#9E6B28]">
                                        <span>选项1</span>
                                    </div>
                                    <div class="px-4 py-3 text-sm text-[#1A1A1A] hover:bg-gray-50 transition-colors">
                                        选项2
                                    </div>
                                    <div class="px-4 py-3 text-sm text-[#1A1A1A] hover:bg-gray-50 transition-colors">
                                        选项3
                                    </div>
                                </div>
                                <span class="absolute -right-7 top-6 text-[11px] font-mono text-[#E9BD85] px-1.5 py-0.5 bg-[#E9BD85]/10 border border-[#E9BD85]/30">03</span>
                            </div>
                        </div>
                    </div>

                    <!-- 右侧：构成元素解析 -->
                    <div class="lg:col-span-5 gallery-panel p-8 md:p-10 flex flex-col justify-center space-y-8">
                        <div class="flex items-start gap-4">
                            <div class="w-7 h-7 bg-[#E9BD85]/15 border border-[#E9BD85]/40 text-[#E9BD85] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">1</div>
                            <div class="space-y-1.5">
                                <h3 class="text-base font-bold text-white" data-i18n-zh="文本标签" data-i18n-en="Text Label">文本标签</h3>
                                <p class="text-sm text-gray-300 leading-relaxed" data-i18n-zh="说明选择对象" data-i18n-en="Describes the selection target">说明选择对象</p>
                            </div>
                        </div>

                        <div class="border-t border-gray-800/80"></div>

                        <div class="flex items-start gap-4">
                            <div class="w-7 h-7 bg-[#E9BD85]/15 border border-[#E9BD85]/40 text-[#E9BD85] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">2</div>
                            <div class="space-y-1.5">
                                <h3 class="text-base font-bold text-white" data-i18n-zh="选择框" data-i18n-en="Selection Box">选择框</h3>
                                <p class="text-sm text-gray-300 leading-relaxed" data-i18n-zh="承载当前值或占位信息，并提供展开入口" data-i18n-en="Carries the current value or placeholder info and provides an expansion entry">承载当前值或占位信息，并提供展开入口</p>
                            </div>
                        </div>

                        <div class="border-t border-gray-800/80"></div>

                        <div class="flex items-start gap-4">
                            <div class="w-7 h-7 bg-[#E9BD85]/15 border border-[#E9BD85]/40 text-[#E9BD85] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">3</div>
                            <div class="space-y-1.5">
                                <h3 class="text-base font-bold text-white" data-i18n-zh="下拉面板" data-i18n-en="Dropdown Panel">下拉面板</h3>
                                <p class="text-sm text-gray-300 leading-relaxed" data-i18n-zh="承载可供选择的选项" data-i18n-en="Carries selectable options">承载可供选择的选项</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <hr class="border-t border-gray-800">

            <!-- ================= 03 组件规格 ================= -->
            <section id="module-specs" class="space-y-10">
                <div class="flex items-baseline gap-4">
                    <span class="module-num text-3xl text-[#E9BD85]">03</span>
                    <div>
                        <h2 class="text-2xl md:text-3xl font-bold text-white" data-i18n-zh="组件规格" data-i18n-en="Component Specifications">组件规格</h2>
                        <p class="text-sm text-gray-300 mt-1.5 leading-relaxed" data-i18n-zh="以 TFT 触控屏为默认载体。根据界面密度、观看距离和操作优先级，在小号、常规、大号三种规格中选择。" data-i18n-en="TFT touchscreen as default carrier. Choose among small, regular, and large specifications based on interface density, viewing distance, and operation priority.">
                            以 TFT 触控屏为默认载体。根据界面密度、观看距离和操作优先级，在小号、常规、大号三种规格中选择。
                        </p>
                    </div>
                </div>

                <div class="gallery-panel overflow-x-auto">
                    <table class="w-full text-left border-collapse text-sm text-gray-200">
                        <thead>
                            <tr class="border-b border-gray-800 bg-white/[0.03] text-[#E9BD85]">
                                <th class="p-4 md:p-6 font-bold" data-i18n-zh="规格" data-i18n-en="Specification">规格</th>
                                <th class="p-4 md:p-6 font-bold" data-i18n-zh="选择框" data-i18n-en="Selection Box">选择框</th>
                                <th class="p-4 md:p-6 font-bold" data-i18n-zh="选项行高" data-i18n-en="Option Line Height">选项行高</th>
                                <th class="p-4 md:p-6 font-bold" data-i18n-zh="最小热区" data-i18n-en="Min Touch Target">最小热区</th>
                                <th class="p-4 md:p-6 font-bold" data-i18n-zh="适用场景" data-i18n-en="Applicable Scenario">适用场景</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-800/60 text-gray-300">
                            <tr class="hover:bg-white/[0.02] transition-colors">
                                <td class="p-4 md:p-6 font-semibold text-white" data-i18n-zh="小号" data-i18n-en="Small">小号</td>
                                <td class="p-4 md:p-6 font-mono text-white">60dp</td>
                                <td class="p-4 md:p-6 font-mono text-white">64dp</td>
                                <td class="p-4 md:p-6 font-mono text-white">64 × 64 dp</td>
                                <td class="p-4 md:p-6" data-i18n-zh="紧凑型 TFT 界面与次级设置" data-i18n-en="Compact TFT interfaces and secondary settings">紧凑型 TFT 界面与次级设置</td>
                            </tr>
                            <tr class="hover:bg-white/[0.02] transition-colors">
                                <td class="p-4 md:p-6 font-semibold text-white" data-i18n-zh="常规" data-i18n-en="Regular">常规</td>
                                <td class="p-4 md:p-6 font-mono text-white">72dp</td>
                                <td class="p-4 md:p-6 font-mono text-white">76dp</td>
                                <td class="p-4 md:p-6 font-mono text-white">72 × 72 dp</td>
                                <td class="p-4 md:p-6" data-i18n-zh="常规 TFT 触控界面的默认规格" data-i18n-en="Default specification for regular TFT touch interfaces">常规 TFT 触控界面的默认规格</td>
                            </tr>
                            <tr class="hover:bg-white/[0.02] transition-colors">
                                <td class="p-4 md:p-6 font-semibold text-white" data-i18n-zh="大号" data-i18n-en="Large">大号</td>
                                <td class="p-4 md:p-6 font-mono text-white">84dp</td>
                                <td class="p-4 md:p-6 font-mono text-white">88dp</td>
                                <td class="p-4 md:p-6 font-mono text-white">84 × 84 dp</td>
                                <td class="p-4 md:p-6" data-i18n-zh="远距离观看或高优先级选择" data-i18n-en="Long-distance viewing or high-priority selection">远距离观看或高优先级选择</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <hr class="border-t border-gray-800">

            <!-- ================= 04 状态示例 ================= -->
            <section id="module-states" class="space-y-10">
                <div class="flex items-baseline gap-4">
                    <span class="module-num text-3xl text-[#E9BD85]">04</span>
                    <div>
                        <h2 class="text-2xl md:text-3xl font-bold text-white" data-i18n-zh="状态示例" data-i18n-en="State Examples">状态示例</h2>
                        <p class="text-sm text-gray-300 mt-1.5 leading-relaxed" data-i18n-zh="展开后高亮当前值；焦点态必须可由旋钮、遥控器和键盘识别。加载、空结果和错误应出现在列表区域，不让旧数据伪装成实时结果。" data-i18n-en="Highlight current value when expanded; focus states must be recognizable by knobs, remotes, and keyboards. Loading, empty results, and errors should appear in the list area so stale data doesn't masquerade as real-time results.">
                            展开后高亮当前值；焦点态必须可由旋钮、遥控器和键盘识别。加载、空结果和错误应出现在列表区域，不让旧数据伪装成实时结果。
                        </p>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
                    <!-- 1. 默认 -->
                    <div class="gallery-panel p-8 space-y-5 flex flex-col justify-between">
                        <div class="flex items-center justify-between">
                            <span class="text-sm font-medium text-gray-300" data-i18n-zh="默认" data-i18n-en="Default">默认</span>
                            <span class="text-xs font-mono text-gray-500">DEFAULT</span>
                        </div>
                        <div class="casarte-select-default h-12 px-4 flex items-center justify-between">
                            <span class="text-sm font-medium text-[#1A1A1A]">选项1</span>
                            <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>
                    </div>

                    <!-- 2. 展开 -->
                    <div class="gallery-panel p-8 space-y-5 flex flex-col justify-between">
                        <div class="flex items-center justify-between">
                            <span class="text-sm font-medium text-[#E9BD85]" data-i18n-zh="展开" data-i18n-en="Expanded">展开</span>
                            <span class="text-xs font-mono text-[#E9BD85]/70">ACTIVE / FOCUS</span>
                        </div>
                        <div class="casarte-select-active h-12 px-4 flex items-center justify-between">
                            <span class="text-sm font-medium text-[#1A1A1A]">选项2</span>
                            <svg class="w-4 h-4 text-[#D49E5A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M5 15l7-7 7 7"></path>
                            </svg>
                        </div>
                    </div>

                    <!-- 3. 禁用 -->
                    <div class="gallery-panel p-8 space-y-5 flex flex-col justify-between">
                        <div class="flex items-center justify-between">
                            <span class="text-sm font-medium text-gray-400" data-i18n-zh="禁用" data-i18n-en="Disabled">禁用</span>
                            <span class="text-xs font-mono text-gray-500">DISABLED</span>
                        </div>
                        <div class="casarte-select-disabled h-12 px-4 flex items-center justify-between">
                            <span class="text-sm font-medium">设备运行中</span>
                            <svg class="w-4 h-4 text-[#6E6E73]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>
                    </div>

                    <!-- 4. 错误 -->
                    <div class="gallery-panel p-8 space-y-5 flex flex-col justify-between">
                        <div class="flex items-center justify-between">
                            <span class="text-sm font-medium text-[#FF3B30]" data-i18n-zh="错误" data-i18n-en="Error">错误</span>
                            <span class="text-xs font-mono text-[#FF3B30]/80">ERROR</span>
                        </div>
                        <div class="casarte-select-error h-12 px-4 flex items-center justify-between">
                            <span class="text-sm font-medium text-[#1A1A1A]">同步失败</span>
                            <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </section>

            <hr class="border-t border-gray-800">

            <!-- ================= 05 组件类型 ================= -->
            <section id="module-types" class="space-y-10">
                <div class="flex items-baseline gap-4">
                    <span class="module-num text-3xl text-[#E9BD85]">05</span>
                    <div>
                        <h2 class="text-2xl md:text-3xl font-bold text-white" data-i18n-zh="组件类型" data-i18n-en="Component Types">组件类型</h2>
                        <p class="text-sm text-gray-300 mt-1.5 leading-relaxed" data-i18n-zh="根据选项数量、是否允许多选以及是否需要搜索选择合适的组件类型。" data-i18n-en="Choose appropriate component types based on option count, multi-select allowance, and search requirements.">根据选项数量、是否允许多选以及是否需要搜索选择合适的组件类型。</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
                    <!-- 1. 单选 -->
                    <div class="gallery-panel p-8 space-y-6 flex flex-col justify-start">
                        <div class="space-y-2.5 min-h-[68px]">
                            <h3 class="text-lg font-bold text-[#E9BD85]" data-i18n-zh="单选" data-i18n-en="Single Select">单选</h3>
                            <p class="text-xs text-gray-300 leading-relaxed" data-i18n-zh="从程序、模式、房间等列表选择一个值；选中后关闭浮层。" data-i18n-en="Select a value from program, mode, or room lists; closes popup upon selection.">从程序、模式、房间等列表选择一个值；选中后关闭浮层。</p>
                        </div>
                        <div class="casarte-select-default h-12 px-4 flex items-center justify-between">
                            <span class="text-sm font-medium text-[#1A1A1A]">选项1</span>
                            <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>
                    </div>

                    <!-- 2. 多选 -->
                    <div class="gallery-panel p-8 space-y-6 flex flex-col justify-start">
                        <div class="space-y-2.5 min-h-[68px]">
                            <h3 class="text-lg font-bold text-[#E9BD85]" data-i18n-zh="多选" data-i18n-en="Multi-Select">多选</h3>
                            <p class="text-xs text-gray-300 leading-relaxed" data-i18n-zh="仅用于可并存的属性，如消息类型或设备筛选；选择后即时更新已选内容。" data-i18n-en="For co-existing attributes like message types or device filters; updates selected content instantly.">仅用于可并存的属性，如消息类型或设备筛选；选择后即时更新已选内容。</p>
                        </div>
                        <div class="casarte-select-default min-h-[48px] px-3 py-2 flex items-center justify-between">
                            <div class="flex flex-wrap items-center gap-2">
                                <span class="px-2.5 py-1 bg-[#F2F2F7] text-xs font-medium text-[#1A1A1A] flex items-center gap-1.5 border border-gray-200">
                                    选项1 <span class="text-gray-400 hover:text-gray-700 cursor-pointer">×</span>
                                </span>
                                <span class="px-2.5 py-1 bg-[#F2F2F7] text-xs font-medium text-[#1A1A1A] flex items-center gap-1.5 border border-gray-200">
                                    选项2 <span class="text-gray-400 hover:text-gray-700 cursor-pointer">×</span>
                                </span>
                            </div>
                            <svg class="w-4 h-4 text-gray-500 shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>
                    </div>

                    <!-- 3. 搜索（与右侧分组框控件严格顶对齐） -->
                    <div class="gallery-panel p-8 space-y-6 flex flex-col justify-start">
                        <div class="space-y-2.5 min-h-[68px]">
                            <h3 class="text-lg font-bold text-[#E9BD85]" data-i18n-zh="搜索" data-i18n-en="Search">搜索</h3>
                            <p class="text-xs text-gray-300 leading-relaxed" data-i18n-zh="选项超过 20 项或用户已知名称时启用；支持名称、别名与型号关键词。" data-i18n-en="Enabled when options exceed 20 or user knows name; supports name, alias, and model keywords.">选项超过 20 项或用户已知名称时启用；支持名称、别名与型号关键词。</p>
                        </div>
                        <div class="casarte-select-default h-12 px-4 flex items-center justify-between">
                            <div class="flex items-center gap-2.5">
                                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                                <span class="text-sm text-gray-400">请输入</span>
                            </div>
                            <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </div>
                    </div>

                    <!-- 4. 分组 -->
                    <div class="gallery-panel p-8 space-y-6 flex flex-col justify-start">
                        <div class="space-y-2.5 min-h-[68px]">
                            <h3 class="text-lg font-bold text-[#E9BD85]" data-i18n-zh="分组" data-i18n-en="Grouping">分组</h3>
                            <p class="text-xs text-gray-300 leading-relaxed" data-i18n-zh="按空间、产品品类或功能归类；分组标题不可选择。" data-i18n-en="Categorized by space, product category, or function; group titles are not selectable.">按空间、产品品类或功能归类；分组标题不可选择。</p>
                        </div>
                        <div class="casarte-dropdown-menu p-4 space-y-2.5">
                            <div class="text-xs text-gray-400 font-semibold tracking-wider select-none">分组标题</div>
                            <div class="text-sm font-medium text-[#1A1A1A] py-1">选项1</div>
                            <div class="text-sm font-medium text-[#1A1A1A] py-1">选项2</div>
                        </div>
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
                        <p class="text-sm text-gray-300 mt-1.5 leading-relaxed" data-i18n-zh="指导设计与开发团队在设计搭建与上线验收阶段恪守的规则。" data-i18n-en="Key do's and don'ts for designers and developers during creation and QA.">指导设计与开发团队在设计搭建与上线验收阶段恪守的规则。</p>
                    </div>
                </div>

                <div class="gallery-panel p-8 md:p-12 space-y-8">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div class="space-y-4">
                            <h3 class="text-base font-bold text-emerald-400 tracking-wider" data-i18n-zh="推荐" data-i18n-en="Recommended">推荐</h3>
                            <ul class="space-y-3 text-sm text-gray-200 leading-relaxed">
                                <li class="flex items-start gap-2.5"><span class="text-emerald-400 font-bold">✓</span> <span data-i18n-zh="默认回显设备当前值" data-i18n-en="Default to echoing current device value">默认回显设备当前值</span></li>
                                <li class="flex items-start gap-2.5"><span class="text-emerald-400 font-bold">✓</span> <span data-i18n-zh="短列表直接展示，长列表再搜索" data-i18n-en="Display short lists directly, search long lists">短列表直接展示，长列表再搜索</span></li>
                                <li class="flex items-start gap-2.5"><span class="text-emerald-400 font-bold">✓</span> <span data-i18n-zh="保持选项顺序与关键状态位置稳定" data-i18n-en="Keep option order and key state positions stable">保持选项顺序与关键状态位置稳定</span></li>
                            </ul>
                        </div>
                        <div class="space-y-4">
                            <h3 class="text-base font-bold text-rose-400 tracking-wider" data-i18n-zh="避免" data-i18n-en="Avoid">避免</h3>
                            <ul class="space-y-3 text-sm text-gray-200 leading-relaxed">
                                <li class="flex items-start gap-2.5"><span class="text-rose-400 font-bold">✕</span> <span data-i18n-zh="用占位文字替代永久标签" data-i18n-en="Use placeholder text instead of permanent labels">用占位文字替代永久标签</span></li>
                                <li class="flex items-start gap-2.5"><span class="text-rose-400 font-bold">✕</span> <span data-i18n-zh="加载失败后继续展示旧值且不提示" data-i18n-en="Continue displaying old values without notice after loading failure">加载失败后继续展示旧值且不提示</span></li>
                                <li class="flex items-start gap-2.5"><span class="text-rose-400 font-bold">✕</span> <span data-i18n-zh="在小屏上压缩出多层悬浮菜单" data-i18n-en="Compress multi-layer floating menus on small screens">在小屏上压缩出多层悬浮菜单</span></li>
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