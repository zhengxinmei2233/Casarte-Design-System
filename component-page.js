document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('component-page');
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
            .proportional-btn {
                width: 100px;
                height: 36px;
                font-size: 14px;
                line-height: 1;
            }
            .proportional-border-2 {
                border: 1.5px solid rgba(255, 255, 255, 0.8);
            }
            .state-btn-spec {
                height: 36px;
                font-size: 14px;
                line-height: 1;
                padding-left: 16px;
                padding-right: 16px;
            }
        </style>

        <div class="space-y-20">

            <!-- ================= 01 概览与何时使用 ================= -->
            <section id="module-overview" class="space-y-10">
                <div class="flex items-baseline gap-4">
                    <span class="module-num text-3xl text-[#E9BD85]">01</span>
                    <div>
                        <h2 class="text-2xl md:text-3xl font-bold text-white" data-i18n-zh="按钮概览与何时使用" data-i18n-en="Overview & When to Use">按钮概览与何时使用</h2>
                        <p class="text-sm text-gray-300 mt-1.5 leading-relaxed" data-i18n-zh="按钮用于触发即时操作。卡萨帝家电界面的按钮必须在不同观看距离、触控方式和运行状态下保持清晰、稳定且可预期。" data-i18n-en="Buttons are used to trigger immediate actions. They must remain clear, stable, and predictable across different viewing distances, touch inputs, and operating states.">按钮用于触发即时操作。卡萨帝家电界面的按钮必须在不同观看距离、触控方式和运行状态下保持清晰、稳定且可预期。</p>
                    </div>
                </div>

                <div class="gallery-panel p-8 space-y-3">
                    <h3 class="text-lg font-bold text-white" data-i18n-zh="何时使用" data-i18n-en="When to Use">何时使用</h3>
                    <p class="text-sm text-gray-300 leading-relaxed" data-i18n-zh="用于启动、暂停、确认、保存、取消等明确动作。状态切换优先使用开关（Switch）；页面跳转优先使用导航；不可用按钮需在旁解释原因。" data-i18n-en="Used for clear actions like Start, Pause, Confirm, Save, Cancel. Use Switches for state toggles; use Navigation for page jumps; display reasons for disabled buttons.">用于启动、暂停、确认、保存、取消等明确动作。状态切换优先使用开关（Switch）；页面跳转优先使用导航；不可用按钮需在旁解释原因。</p>
                </div>

                <div class="gallery-panel p-8 space-y-6">
                    <div class="space-y-2">
                        <h3 class="text-lg font-bold text-white" data-i18n-zh="按钮类型总览" data-i18n-en="Button Types Overview">按钮类型总览</h3>
                        <p class="text-sm text-gray-300 leading-relaxed" data-i18n-zh="按任务优先级选择类型。单一视区只允许一个主按钮，避免多个高权重操作竞争。" data-i18n-en="Choose types based on task priority. Only one primary button is allowed per screen.">按任务优先级选择类型。单一视区只允许一个主按钮，避免多个高权重操作竞争。</p>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-5 gap-4 pt-2">
                        <!-- 1. 主要按钮 -->
                        <div class="p-4 bg-transparent text-center flex flex-col justify-between items-center space-y-3">
                            <div class="py-2 flex items-center justify-center">
                                <div class="proportional-btn proportional-border-2 flex items-center justify-center bg-white/20 rounded-none text-white btn-custom-font" data-i18n-zh="按钮" data-i18n-en="Button">按钮</div>
                            </div>
                            <div class="w-full space-y-2">
                                <h4 class="text-xs font-bold text-[#E9BD85] tracking-wider" data-i18n-zh="主要按钮" data-i18n-en="Primary">主要按钮</h4>
                                <div class="text-xs text-gray-400 leading-relaxed" data-i18n-zh="当前任务的唯一主操作（如启动、确认）。" data-i18n-en="The primary action for the current task (e.g., Start, Confirm).">当前任务的唯一主操作（如启动、确认）。</div>
                            </div>
                        </div>

                        <!-- 2. 次要按钮 -->
                        <div class="p-4 bg-transparent text-center flex flex-col justify-between items-center space-y-3">
                            <div class="py-2 flex items-center justify-center">
                                <div class="proportional-btn proportional-border-2 flex items-center justify-center bg-[#6A6A6A]/30 rounded-none text-[#999999] btn-custom-font" data-i18n-zh="按钮" data-i18n-en="Button">按钮</div>
                            </div>
                            <div class="w-full space-y-2">
                                <h4 class="text-xs font-bold text-[#E9BD85] tracking-wider" data-i18n-zh="次要按钮" data-i18n-en="Secondary">次要按钮</h4>
                                <div class="text-xs text-gray-400 leading-relaxed" data-i18n-zh="与主操作并列的辅助动作（如取消、稍后）。" data-i18n-en="Auxiliary actions parallel to the main action.">与主操作并列的辅助动作（如取消、稍后）。</div>
                            </div>
                        </div>

                        <!-- 3. 线框按钮 -->
                        <div class="p-4 bg-transparent text-center flex flex-col justify-between items-center space-y-3">
                            <div class="py-2 flex items-center justify-center">
                                <div class="proportional-btn proportional-border-2 flex items-center justify-center bg-transparent rounded-none text-white btn-custom-font" data-i18n-zh="按钮" data-i18n-en="Button">按钮</div>
                            </div>
                            <div class="w-full space-y-2">
                                <h4 class="text-xs font-bold text-[#E9BD85] tracking-wider" data-i18n-zh="线框按钮" data-i18n-en="Outline">线框按钮</h4>
                                <div class="text-xs text-gray-400 leading-relaxed" data-i18n-zh="用于低频或容器内操作，降低视觉负担。" data-i18n-en="Used for low-frequency operations to reduce visual burden.">用于低频或容器内操作，降低视觉负担。</div>
                            </div>
                        </div>

                        <!-- 4. 文字按钮 -->
                        <div class="p-4 bg-transparent text-center flex flex-col justify-between items-center space-y-3">
                            <div class="py-2 flex items-center justify-center">
                                <div class="proportional-btn flex items-center justify-center bg-transparent border-0 rounded-none text-white btn-custom-font" data-i18n-zh="按钮" data-i18n-en="Button">按钮</div>
                            </div>
                            <div class="w-full space-y-2">
                                <h4 class="text-xs font-bold text-[#E9BD85] tracking-wider" data-i18n-zh="文字按钮" data-i18n-en="Text">文字按钮</h4>
                                <div class="text-xs text-gray-400 leading-relaxed" data-i18n-zh="用于最低层级操作，不承载安全关键动作。" data-i18n-en="Used for the lowest-level operations.">用于最低层级操作，不承载安全关键动作。</div>
                            </div>
                        </div>

                        <!-- 5. 危险按钮 -->
                        <div class="p-4 bg-transparent text-center flex flex-col justify-between items-center space-y-3">
                            <div class="py-2 flex items-center justify-center">
                                <div class="proportional-btn flex items-center justify-center bg-[#F23D3D] border-0 rounded-none text-white btn-custom-font" data-i18n-zh="按钮" data-i18n-en="Button">按钮</div>
                            </div>
                            <div class="w-full space-y-2">
                                <h4 class="text-xs font-bold text-[#E9BD85] tracking-wider" data-i18n-zh="危险按钮" data-i18n-en="Danger">危险按钮</h4>
                                <div class="text-xs text-gray-400 leading-relaxed" data-i18n-zh="仅用于删除、复位等不可逆高风险操作。" data-i18n-en="Only for irreversible high-risk operations.">仅用于删除、复位等不可逆高风险操作。</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <hr class="border-t border-gray-800">

            <!-- ================= 02 尺寸、观看距离与交互状态 ================= -->
            <section id="module-sizes-and-states" class="space-y-10">
                <div class="flex items-baseline gap-4">
                    <span class="module-num text-3xl text-[#E9BD85]">02</span>
                    <div>
                        <h2 class="text-2xl md:text-3xl font-bold text-white" data-i18n-zh="尺寸规范与交互状态" data-i18n-en="Sizes & Interactive States">尺寸规范与交互状态</h2>
                        <p class="text-sm text-gray-300 mt-1.5 leading-relaxed" data-i18n-zh="按钮分为小 (S)、中 (M)、大 (L) 三种尺寸。根据界面密度、观看距离和操作优先级选择。家电触控视觉高度不等于热区大小，触控热区仍需遵循安全基准。" data-i18n-en="Buttons are categorized into S, M, and L sizes. Choose based on density, viewing distance, and priority.">按钮分为小 (S)、中 (M)、大 (L) 三种尺寸。根据界面密度、观看距离和操作优先级选择。家电触控视觉高度不等于热区大小，触控热区仍需遵循安全基准。</p>
                    </div>
                </div>

                <div class="space-y-4 pt-2">
                    <h3 class="text-lg font-bold text-white" data-i18n-zh="尺寸与适用场景" data-i18n-en="Sizes & Applicable Scenarios">尺寸与适用场景</h3>
                    <div class="overflow-x-auto">
                        <table class="w-full text-left text-sm text-gray-300 border-collapse">
                            <thead>
                                <tr class="border-b border-gray-800 text-[#E9BD85] font-semibold text-xs">
                                    <th class="py-3 px-4" data-i18n-zh="规格 Size" data-i18n-en="Size">规格 Size</th>
                                    <th class="py-3 px-4" data-i18n-zh="建议视觉高度" data-i18n-en="Visual Height">建议视觉高度</th>
                                    <th class="py-3 px-4" data-i18n-zh="适用场景与观看距离" data-i18n-en="Applicable Scenarios & Viewing Distance">适用场景与观看距离</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-800/60 text-xs">
                                <tr>
                                    <td class="py-3.5 px-4 font-bold text-white" data-i18n-zh="小 (S)" data-i18n-en="Small (S)">小 (S)</td>
                                    <td class="py-3.5 px-4 font-mono">80px</td>
                                    <td class="py-3.5 px-4" data-i18n-zh="近距离屏幕控制、低频辅助操作或嵌入式微调控制。" data-i18n-en="Close-range screen control, low-frequency auxiliary operations.">近距离屏幕控制、低频辅助操作或嵌入式微调控制。</td>
                                </tr>
                                <tr>
                                    <td class="py-3.5 px-4 font-bold text-white" data-i18n-zh="中 (M)" data-i18n-en="Medium (M)">中 (M)</td>
                                    <td class="py-3.5 px-4 font-mono">88px</td>
                                    <td class="py-3.5 px-4" data-i18n-zh="常规家电触控屏的主力按键，默认标准触控尺寸。" data-i18n-en="Main touch buttons for regular home appliances.">常规家电触控屏的主力按键，默认标准触控尺寸。</td>
                                </tr>
                                <tr>
                                    <td class="py-3.5 px-4 font-bold text-white" data-i18n-zh="大 (L)" data-i18n-en="Large (L)">大 (L)</td>
                                    <td class="py-3.5 px-4 font-mono">96px</td>
                                    <td class="py-3.5 px-4" data-i18n-zh="远距离观看、核心启动/停止操作或高频入口。" data-i18n-en="Long-distance viewing, core start/stop operations.">远距离观看、核心启动/停止操作或高频入口。</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-2">
                    <div class="gallery-panel p-8 space-y-4">
                        <h3 class="text-lg font-bold text-white" data-i18n-zh="交互状态反馈" data-i18n-en="Interactive State Feedback">交互状态反馈</h3>
                        <p class="text-xs text-gray-400 leading-relaxed" data-i18n-zh="触控按下需在 100ms 内反馈；设备指令超 300ms 时应自动进入执行中状态并阻止重复触发。" data-i18n-en="Touch press feedback within 100ms; enter executing state if over 300ms.">触控按下需在 100ms 内反馈；设备指令超 300ms 时应自动进入执行中状态并阻止重复触发。</p>
                        <div class="flex flex-wrap items-center gap-3 pt-2">
                            <div class="proportional-btn state-btn-spec flex items-center justify-center bg-[#A95D00]/80 text-white btn-custom-font rounded-none hover:bg-[#A95D00]/80 transition-colors" data-i18n-zh="默认" data-i18n-en="Default">默认</div>
                            <div class="proportional-btn state-btn-spec flex items-center justify-center bg-[#A95D00]/80 text-white btn-custom-font rounded-none opacity-50 hover:bg-[#A95D00]/80 transition-colors" data-i18n-zh="按下" data-i18n-en="Pressed">按下</div>
                            <div class="proportional-btn state-btn-spec flex items-center justify-center bg-[#A8917B] text-white btn-custom-font rounded-none opacity-50 transition-colors" data-i18n-zh="禁用" data-i18n-en="Disabled">禁用</div>
                            <div class="proportional-btn state-btn-spec flex items-center justify-center bg-[#00B988] text-white btn-custom-font rounded-none" data-i18n-zh="✓ 完成" data-i18n-en="✓ Done">✓ 完成</div>
                        </div>
                    </div>

                    <div class="gallery-panel p-8 space-y-4">
                        <h3 class="text-lg font-bold text-white" data-i18n-zh="语义状态表达" data-i18n-en="Semantic State Expression">语义状态表达</h3>
                        <p class="text-xs text-gray-400 leading-relaxed" data-i18n-zh="分为警告、危险、成功三种，可与主要、次要、线框按钮类型组合使用。状态语义优先于按钮类型。" data-i18n-en="Warning, danger, success states. State semantics take priority over button types.">分为警告、危险、成功三种，可与主要、次要、线框按钮类型组合使用。状态语义优先于按钮类型。</p>
                        <div class="flex flex-wrap items-center gap-3 pt-2">
                            <div class="state-btn-spec min-w-[100px] flex items-center justify-center bg-[#F23D3D] text-white btn-custom-font rounded-none" data-i18n-zh="警告" data-i18n-en="Warning">警告</div>
                            <div class="state-btn-spec min-w-[100px] flex items-center justify-center bg-[#F7AB48] text-white btn-custom-font rounded-none" data-i18n-zh="危险" data-i18n-en="Danger">危险</div>
                            <div class="state-btn-spec min-w-[100px] flex items-center justify-center bg-[#00B988] text-white btn-custom-font rounded-none" data-i18n-zh="成功" data-i18n-en="Success">成功</div>
                        </div>
                    </div>
                </div>
            </section>

            <hr class="border-t border-gray-800">

            <!-- ================= 03 特殊按钮与其他形态 ================= -->
            <section id="module-special-buttons" class="space-y-10">
                <div class="flex items-baseline gap-4">
                    <span class="module-num text-3xl text-[#E9BD85]">03</span>
                    <div>
                        <h2 class="text-2xl md:text-3xl font-bold text-white" data-i18n-zh="特殊按钮与其他形态" data-i18n-en="Special Button & Other Shapes">特殊按钮与其他形态</h2>
                        <p class="text-sm text-gray-300 mt-1.5 leading-relaxed" data-i18n-zh="特殊按钮是用于控制程序或功能核心状态（如开启、暂停等）的专用交互组件，多用于 TFT 屏幕。右侧其他形态与左侧尺寸保持一致，通过不同层级的微光与描边反馈区分交互层级。" data-i18n-en="Special buttons are dedicated interactive components used to control core states on TFT screens.">特殊按钮是用于控制程序或功能核心状态（如开启、暂停等）的专用交互组件，多用于 TFT 屏幕。右侧其他形态与左侧尺寸保持一致，通过不同层级的微光与描边反馈区分交互层级。</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-2">
                    <div class="gallery-panel p-8 flex flex-col justify-between space-y-6">
                        <div class="space-y-4">
                            <h3 class="text-lg font-bold text-white" data-i18n-zh="特殊按钮" data-i18n-en="Special Button">特殊按钮</h3>
                            <p class="text-sm text-gray-300 leading-relaxed" data-i18n-zh="专用于控制核心状态，提供快速触控入口。外观样式一致，包含 S、M、L 三种尺寸。" data-i18n-en="Dedicated to controlling core states, providing quick touch access.">专用于控制核心状态，提供快速触控入口。外观样式一致，包含 S、M、L 三种尺寸。</p>
                        </div>
                        
                        <div class="grid grid-cols-3 gap-6 items-end text-center pt-4">
                            <div class="space-y-3 flex flex-col items-center">
                                <div class="w-[65px] h-[65px] sm:w-[72px] sm:h-[72px] flex items-center justify-center bg-transparent overflow-hidden">
                                    <img src="assets/component_buttons/special form-1.png" alt="special form-1" class="max-h-full max-w-full object-contain" onerror="this.onerror=null; this.src='assets/component_buttons/special form-1.jpg';">
                                </div>
                                <div class="text-xs text-gray-400 font-mono">S<br><span class="text-[11px] text-[#E9BD85]">120×120px</span></div>
                            </div>
                            <div class="space-y-3 flex flex-col items-center">
                                <div class="w-[83px] h-[83px] sm:w-[94px] sm:h-[94px] flex items-center justify-center bg-transparent overflow-hidden">
                                    <img src="assets/component_buttons/special form-2.png" alt="special form-2" class="max-h-full max-w-full object-contain" onerror="this.onerror=null; this.src='assets/component_buttons/special form-2.jpg';">
                                </div>
                                <div class="text-xs text-gray-400 font-mono">M<br><span class="text-[11px] text-[#E9BD85]">162×162px</span></div>
                            </div>
                            <div class="space-y-3 flex flex-col items-center">
                                <div class="w-[101px] h-[101px] sm:w-[115px] sm:h-[115px] flex items-center justify-center bg-transparent overflow-hidden">
                                    <img src="assets/component_buttons/special form-3.png" alt="special form-3" class="max-h-full max-w-full object-contain" onerror="this.onerror=null; this.src='assets/component_buttons/special form-3.jpg';">
                                </div>
                                <div class="text-xs text-gray-400 font-mono">L<br><span class="text-[11px] text-[#E9BD85]">200×200px</span></div>
                            </div>
                        </div>
                    </div>

                    <div class="gallery-panel p-8 flex flex-col justify-between space-y-6">
                        <div class="space-y-4">
                            <h3 class="text-lg font-bold text-white" data-i18n-zh="其他形态" data-i18n-en="Other Shapes">其他形态</h3>
                            <p class="text-sm text-gray-300 leading-relaxed" data-i18n-zh="其他形式允许根据实际视觉情况进行微调整，以下示例" data-i18n-en="Other shapes share identical dimensions with the left side.">其他形式允许根据实际视觉情况进行微调整，以下示例</p>
                        </div>
                        
                        <div class="grid grid-cols-3 gap-6 items-end text-center pt-4">
                            <div class="space-y-3 flex flex-col items-center">
                                <div class="w-[83px] h-[83px] sm:w-[94px] sm:h-[94px] flex items-center justify-center bg-transparent overflow-hidden">
                                    <img src="assets/component_buttons/Other forms-1.png" alt="Other forms-1" class="max-h-full max-w-full object-contain" onerror="this.onerror=null; this.src='assets/component_buttons/Other forms-1.jpg';">
                                </div>
                                <div class="text-xs text-gray-400 font-mono">Variant 1<br><span class="text-[11px] text-[#E9BD85]">162×162px</span></div>
                            </div>
                            <div class="space-y-3 flex flex-col items-center">
                                <div class="w-[83px] h-[83px] sm:w-[94px] sm:h-[94px] flex items-center justify-center bg-transparent overflow-hidden">
                                    <img src="assets/component_buttons/Other forms-2.png" alt="Other forms-2" class="max-h-full max-w-full object-contain" onerror="this.onerror=null; this.src='assets/component_buttons/Other forms-2.jpg';">
                                </div>
                                <div class="text-xs text-gray-400 font-mono">Variant 2<br><span class="text-[11px] text-[#E9BD85]">162×162px</span></div>
                            </div>
                            <div class="space-y-3 flex flex-col items-center">
                                <div class="w-[83px] h-[83px] sm:w-[94px] sm:h-[94px] flex items-center justify-center bg-transparent overflow-hidden">
                                    <img src="assets/component_buttons/Other forms-3.png" alt="Other forms-3" class="max-h-full max-w-full object-contain" onerror="this.onerror=null; this.src='assets/component_buttons/Other forms-3.jpg';">
                                </div>
                                <div class="text-xs text-gray-400 font-mono">Variant 3<br><span class="text-[11px] text-[#E9BD85]">162×162px</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <hr class="border-t border-gray-800">

            <!-- ================= 04 跨屏与硬件适配 ================= -->
            <section id="module-hardware" class="space-y-10">
                <div class="flex items-baseline gap-4">
                    <span class="module-num text-3xl text-[#E9BD85]">04</span>
                    <div>
                        <h2 class="text-2xl md:text-3xl font-bold text-white" data-i18n-zh="跨屏与硬件适配" data-i18n-en="Cross-screen & Hardware Adaptation">跨屏与硬件适配</h2>
                        <p class="text-sm text-gray-300 mt-1.5 leading-relaxed" data-i18n-zh="卡萨帝产品线覆盖 TFT 触控屏、LED/段码屏、旋钮及窄条屏，不同硬件载体下的按钮渲染与响应机制需进行针对性微调。" data-i18n-en="Casarte product lines cover TFT screens, LED screens, knobs, and strip displays.">卡萨帝产品线覆盖 TFT 触控屏、LED/段码屏、旋钮及窄条屏，不同硬件载体下的按钮渲染与响应机制需进行针对性微调。</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
                    <div class="gallery-panel p-6 space-y-3">
                        <h3 class="text-lg font-bold text-white" data-i18n-zh="TFT 触控屏" data-i18n-en="TFT Touch Screen">TFT 触控屏</h3>
                        <p class="text-xs text-gray-300 leading-relaxed" data-i18n-zh="保留完整微光材质与交互状态；主操作固定在主要拇指或视线焦段区域。" data-i18n-en="Retain full micro-glow materials and interactive states.">保留完整微光材质与交互状态；主操作固定在主要拇指或视线焦段区域。</p>
                    </div>
                    <div class="gallery-panel p-6 space-y-3">
                        <h3 class="text-lg font-bold text-white" data-i18n-zh="LED / 段码屏" data-i18n-en="LED / Segment Screen">LED / 段码屏</h3>
                        <p class="text-xs text-gray-300 leading-relaxed" data-i18n-zh="简化复杂微光材质，映射为固定背光图标或实体按键，保持位置与 TFT 一致。" data-i18n-en="Simplify complex micro-glow materials into fixed backlight icons.">简化复杂微光材质，映射为固定背光图标或实体按键，保持位置与 TFT 一致。</p>
                    </div>
                    <div class="gallery-panel p-6 space-y-3">
                        <h3 class="text-lg font-bold text-white" data-i18n-zh="旋钮 / 遥控器" data-i18n-en="Knob / Remote Control">旋钮 / 遥控器</h3>
                        <p class="text-xs text-gray-300 leading-relaxed" data-i18n-zh="提供高对比焦环；旋转移动焦点，按压确认。焦点不可以无规律自动跳走。" data-i18n-en="Provide high-contrast focus rings; rotate to move focus.">提供高对比焦环；旋转移动焦点，按压确认。焦点不可以无规律自动跳走。</p>
                    </div>
                    <div class="gallery-panel p-6 space-y-3">
                        <h3 class="text-lg font-bold text-white" data-i18n-zh="窄屏 / 条形屏" data-i18n-en="Narrow / Bar Screen">窄屏 / 条形屏</h3>
                        <p class="text-xs text-gray-300 leading-relaxed" data-i18n-zh="优先保留主操作文字，隐藏装饰图标；必要时使用通栏按钮，不压缩最小热区。" data-i18n-en="Prioritize main action text, hide decorative icons.">优先保留主操作文字，隐藏装饰图标；必要时使用通栏按钮，不压缩最小热区。</p>
                    </div>
                </div>
            </section>

            <hr class="border-t border-gray-800">

            <!-- ================= 05 使用与验收红线 ================= -->
            <section id="module-best-practices" class="space-y-10">
                <div class="flex items-baseline gap-4">
                    <span class="module-num text-3xl text-[#E9BD85]">05</span>
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
                                <li class="flex items-start gap-2"><span class="text-emerald-400 font-bold">•</span> <span data-i18n-zh="先确定内容层级或功能层，再选择对应的按钮类型。" data-i18n-en="Determine content or functional hierarchy before selecting button types.">先确定内容层级或功能层，再选择对应的按钮类型。</span></li>
                                <li class="flex items-start gap-2"><span class="text-emerald-400 font-bold">•</span> <span data-i18n-zh="一个屏幕内主要填充按钮只保留一个，避免视觉焦点涣散。" data-i18n-en="Keep only one primary filled action per screen to avoid visual distraction.">一个屏幕内主要填充按钮只保留一个，避免视觉焦点涣散。</span></li>
                                <li class="flex items-start gap-2"><span class="text-emerald-400 font-bold">•</span> <span data-i18n-zh="高温、高压、门锁等风险动作需要明确后果，必要时二次确认。" data-i18n-en="High-risk actions require clear consequences and prompt confirmation when necessary.">高温、高压、门锁等风险动作需要明确后果，必要时二次确认。</span></li>
                                <li class="flex items-start gap-2"><span class="text-emerald-400 font-bold">•</span> <span data-i18n-zh="确保按钮在卡萨帝暗色微光背景下具备充足的文字与图标对比度。" data-i18n-en="Ensure sufficient text contrast against dark micro-glow backgrounds.">确保按钮在卡萨帝暗色微光背景下具备充足的文字与图标对比度。</span></li>
                            </ul>
                        </div>
                        <div class="space-y-4">
                            <h3 class="text-base font-bold text-rose-400 tracking-wider" data-i18n-zh="✓ 不应该" data-i18n-en="✕ Avoid">✕ 不应该</h3>
                            <ul class="space-y-3 text-sm text-gray-200 leading-relaxed">
                                <li class="flex items-start gap-2"><span class="text-rose-400 font-bold">•</span> <span data-i18n-zh="切勿在同一层级同时堆砌多个相同视觉权重的填充按钮。" data-i18n-en="Do not stack multiple primary filled buttons of equal weight on the same level.">切勿在同一层级同时堆砌多个相同视觉权重的填充按钮。</span></li>
                                <li class="flex items-start gap-2"><span class="text-rose-400 font-bold">•</span> <span data-i18n-zh="紧急停止不可使用仅图标或仅颜色表达，且不得放入溢出菜单。" data-i18n-en="Emergency stops must not rely solely on icons or colors.">紧急停止不可使用仅图标或仅颜色表达，且不得放入溢出菜单。</span></li>
                                <li class="flex items-start gap-2"><span class="text-rose-400 font-bold">•</span> <span data-i18n-zh="避免在禁用状态下提供任何交互动效反馈。" data-i18n-en="Avoid providing any interactive motion feedback for disabled buttons.">避免在禁用状态下提供任何交互动效反馈。</span></li>
                                <li class="flex items-start gap-2"><span class="text-rose-400 font-bold">•</span> <span data-i18n-zh="以透明度或阴影作为唯一的状态提示。" data-i18n-en="Do not use opacity or shadow as the sole state indicator.">以透明度或阴影作为唯一的状态提示。</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    `;

    // 完美衔接全局翻译：无论何时加载或点击切换，都主动应用当前语言
    const applyLang = () => {
        const lang = localStorage.getItem('haier-guideline-language') || 'zh';
        container.querySelectorAll('[data-i18n-zh][data-i18n-en]').forEach((el) => {
            el.textContent = el.dataset[lang === 'zh' ? 'i18nZh' : 'i18nEn'];
        });
    };

    // 立即执行一次
    applyLang();

    // 监听全局切换按钮或存储变化，确保点击时实时刷新
    window.addEventListener('storage', applyLang);
    const toggleBtn = document.getElementById('language-switcher');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            setTimeout(applyLang, 50);
        });
    }
});