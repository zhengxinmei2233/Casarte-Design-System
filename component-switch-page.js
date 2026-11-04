document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('component-switch-page');
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
                        <h2 class="text-2xl md:text-3xl font-bold text-white" data-i18n-zh="开关概览" data-i18n-en="Overview">开关概览</h2>
                        <p class="text-sm text-gray-300 mt-1.5 leading-relaxed" data-i18n-zh="开关用于在两个互斥状态之间进行切换（如开启/关闭）。" data-i18n-en="Switches are used to toggle between two mutually exclusive states.">开关用于在两个互斥状态之间进行切换（如开启/关闭）。</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="gallery-panel p-6 flex items-center justify-between">
                        <div class="space-y-1">
                            <h4 class="text-base font-bold text-white" data-i18n-zh="网络连接" data-i18n-en="Network Connection">网络连接</h4>
                            <div class="flex items-center gap-2 text-xs text-emerald-400">
                                <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
                                <span data-i18n-zh="已连接" data-i18n-en="Connected">已连接</span>
                            </div>
                        </div>
                        <div class="w-[56px] h-[33.6px] bg-[#E9BD85] rounded-[3.2px] p-[2.4px] flex items-center justify-end shadow-inner cursor-pointer">
                            <div class="w-[28.8px] h-[28.8px] bg-white rounded-[1.6px] shadow-md"></div>
                        </div>
                    </div>

                    <div class="gallery-panel p-6 flex items-center justify-between">
                        <div class="space-y-1">
                            <h4 class="text-base font-bold text-white" data-i18n-zh="语音提示" data-i18n-en="Voice Prompt">语音提示</h4>
                            <div class="flex items-center gap-2 text-xs text-gray-400">
                                <span class="w-2 h-2 rounded-full bg-gray-500"></span>
                                <span data-i18n-zh="已关闭" data-i18n-en="Closed">已关闭</span>
                            </div>
                        </div>
                        <div class="w-[56px] h-[33.6px] bg-[#999999] rounded-[3.2px] p-[2.4px] flex items-center justify-start shadow-inner cursor-pointer">
                            <div class="w-[28.8px] h-[28.8px] bg-white rounded-[1.6px] shadow-md"></div>
                        </div>
                    </div>
                </div>
            </section>

            <hr class="border-t border-gray-800">

            <!-- ================= 02 滑块开关 ================= -->
            <section id="module-slider-switch" class="space-y-10">
                <div class="flex items-baseline gap-4">
                    <span class="module-num text-3xl text-[#E9BD85]">02</span>
                    <div>
                        <h2 class="text-2xl md:text-3xl font-bold text-white" data-i18n-zh="滑块开关" data-i18n-en="Slider Switch">滑块开关</h2>
                        <p class="text-sm text-gray-300 mt-1.5 leading-relaxed" data-i18n-zh="展示开关在不同交互及可用性状态下的视觉规范表现。" data-i18n-en="Displays the visual specifications of switches under different interaction and availability states.">展示开关在不同交互及可用性状态下的视觉规范表现。</p>
                    </div>
                </div>

                <div class="gallery-panel p-8 space-y-8">
                    <div class="space-y-3">
                        <h3 class="text-xs font-bold text-gray-400 tracking-wider" data-i18n-zh="状态样式 Status" data-i18n-en="Status Style">状态样式 Status</h3>
                        
                        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                            <div class="flex flex-col items-center justify-between py-6 px-4 bg-black/30 rounded-none border border-white/5 min-height-[140px]">
                                <div class="h-[60px] flex items-center justify-center">
                                    <div class="w-[56px] h-[33.6px] bg-[#E9BD85] rounded-[3.2px] p-[2.4px] flex items-center justify-end shadow-md">
                                        <div class="w-[28.8px] h-[28.8px] bg-white rounded-[1.6px] shadow"></div>
                                    </div>
                                </div>
                                <span class="text-xs text-gray-300 text-center font-medium mt-3" data-i18n-zh="开启状态" data-i18n-en="Toggle On">开启状态</span>
                            </div>

                            <div class="flex flex-col items-center justify-between py-6 px-4 bg-black/30 rounded-none border border-white/5 min-height-[140px]">
                                <div class="h-[60px] flex items-center justify-center">
                                    <div class="w-[56px] h-[33.6px] bg-[#999999] rounded-[3.2px] p-[2.4px] flex items-center justify-start shadow-md">
                                        <div class="w-[28.8px] h-[28.8px] bg-white rounded-[1.6px] shadow"></div>
                                    </div>
                                </div>
                                <span class="text-xs text-gray-300 text-center font-medium mt-3" data-i18n-zh="关闭状态" data-i18n-en="Toggle Off">关闭状态</span>
                            </div>

                            <div class="flex flex-col items-center justify-between py-6 px-4 bg-black/30 rounded-none border border-white/5 min-height-[140px]">
                                <div class="h-[60px] flex items-center justify-center opacity-40">
                                    <div class="w-[56px] h-[33.6px] bg-[#E9BD85] rounded-[3.2px] p-[2.4px] flex items-center justify-end shadow-md">
                                        <div class="w-[28.8px] h-[28.8px] bg-white rounded-[1.6px] shadow"></div>
                                    </div>
                                </div>
                                <span class="text-xs text-gray-400 text-center font-medium mt-3" data-i18n-zh="禁用的开启状态" data-i18n-en="Toggle On (Disabled)">禁用的开启状态</span>
                            </div>

                            <div class="flex flex-col items-center justify-between py-6 px-4 bg-black/30 rounded-none border border-white/5 min-height-[140px]">
                                <div class="h-[60px] flex items-center justify-center opacity-40">
                                    <div class="w-[56px] h-[33.6px] bg-[#999999] rounded-[3.2px] p-[2.4px] flex items-center justify-start shadow-md">
                                        <div class="w-[28.8px] h-[28.8px] bg-white rounded-[1.6px] shadow"></div>
                                    </div>
                                </div>
                                <span class="text-xs text-gray-400 text-center font-medium mt-3" data-i18n-zh="禁用的关闭状态" data-i18n-en="Toggle Off (Disabled)">禁用的关闭状态</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <hr class="border-t border-gray-800">

            <!-- ================= 03 测量（缩放比例展示与参数表） ================= -->
            <section id="module-measurements" class="space-y-10">
                <div class="flex items-baseline gap-4">
                    <span class="module-num text-3xl text-[#E9BD85]">03</span>
                    <div>
                        <h2 class="text-2xl md:text-3xl font-bold text-white" data-i18n-zh="测量" data-i18n-en="Measurements">测量</h2>
                        <p class="text-sm text-gray-300 mt-1.5 leading-relaxed" data-i18n-zh="提供不同尺寸规格（Small、Medium、Large）的具体长宽、边距及内部元素比例规范。" data-i18n-en="Provides specific width, height, padding, and internal proportion specs for Small, Medium, and Large sizes.">提供不同尺寸规格（Small、Medium、Large）的具体长宽、边距及内部元素比例规范。</p>
                    </div>
                </div>

                <div class="gallery-panel p-8 space-y-8">
                    <div class="flex flex-col items-center justify-center py-8 bg-black/40 rounded-none border border-white/5">
                        <div class="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center">
                            
                            <!-- Small -->
                            <div class="text-center space-y-3">
                                <div class="h-20 flex items-center justify-center">
                                    <div class="w-[56px] h-[33.6px] bg-[#E9BD85] rounded-[3.2px] p-[2.4px] flex items-center justify-end shadow-md">
                                        <div class="w-[28.8px] h-[28.8px] bg-white rounded-[1.6px] shadow"></div>
                                    </div>
                                </div>
                                <div class="space-y-1">
                                    <div class="text-xs text-gray-300 font-medium">Small</div>
                                    <div class="text-xs font-mono text-[#E9BD85]">70×42 dp</div>
                                </div>
                            </div>

                            <!-- Medium -->
                            <div class="text-center space-y-3">
                                <div class="h-20 flex items-center justify-center">
                                    <div class="w-[72px] h-[43.2px] bg-[#E9BD85] rounded-[3.2px] p-[3.2px] flex items-center justify-end shadow-md">
                                        <div class="w-[36.8px] h-[36.8px] bg-white rounded-[1.6px] shadow"></div>
                                    </div>
                                </div>
                                <div class="space-y-1">
                                    <div class="text-xs text-gray-300 font-medium">Medium</div>
                                    <div class="text-xs font-mono text-[#E9BD85]">90×54 dp</div>
                                </div>
                            </div>

                            <!-- Large -->
                            <div class="text-center space-y-3">
                                <div class="h-20 flex items-center justify-center">
                                    <div class="w-[80px] h-[48px] bg-[#E9BD85] rounded-[3.2px] p-[4px] flex items-center justify-end shadow-md">
                                        <div class="w-[40px] h-[40px] bg-white rounded-[1.6px] shadow"></div>
                                    </div>
                                </div>
                                <div class="space-y-1">
                                    <div class="text-xs text-gray-300 font-medium">Large</div>
                                    <div class="text-xs font-mono text-[#E9BD85]">100×60 dp</div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <!-- 类型与尺寸详细参数表格 -->
                    <div class="space-y-4 pt-4">
                        <div class="space-y-1">
                            <h3 class="text-lg font-bold text-white" data-i18n-zh="类型与尺寸" data-i18n-en="Type & Size">类型与尺寸</h3>
                            <p class="text-xs text-gray-400" data-i18n-zh="仅使用圆形滑块的胶囊形开关。根据界面密度、观看距离与输入方式选择小号、常规或大号，不使用方形滑块、矩形轨道或图标装饰。" data-i18n-en="Capsule-shaped switch with circular thumb only. Choose small, regular, or large based on interface density, viewing distance, and input method.">仅使用圆形滑块的胶囊形开关。根据界面密度、观看距离与输入方式选择小号、常规或大号，不使用方形滑块、矩形轨道或图标装饰。</p>
                        </div>

                        <div class="gallery-panel overflow-hidden">
                            <div class="table-wrap">
                                <table class="spec-table">
                                    <thead>
                                        <tr>
                                            <th style="min-width: 130px;" data-i18n-zh="规格" data-i18n-en="Specification">规格</th>
                                            <th style="min-width: 130px;" data-i18n-zh="视觉尺寸" data-i18n-en="Visual Size">视觉尺寸</th>
                                            <th style="min-width: 110px;" data-i18n-zh="滑块尺寸" data-i18n-en="Thumb Size">滑块尺寸</th>
                                            <th style="min-width: 110px;" data-i18n-zh="胶囊内边距" data-i18n-en="Capsule Padding">胶囊内边距</th>
                                            <th style="min-width: 130px;" data-i18n-zh="最小热区" data-i18n-en="Min Touch Target">最小热区</th>
                                            <th style="min-width: 220px;" data-i18n-zh="适用场景" data-i18n-en="Applicable Scenario">适用场景</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div class="flex items-center gap-2">
                                                    <div class="w-[36px] h-[20px] bg-[#E9BD85] rounded-[2px] p-[2px] flex items-center justify-end">
                                                        <div class="w-[16px] h-[16px] bg-white rounded-[1px]"></div>
                                                    </div>
                                                    <strong class="text-white" data-i18n-zh="小号" data-i18n-en="Small">小号</strong>
                                                </div>
                                            </td>
                                            <td>70 × 42 dp</td>
                                            <td>36 dp</td>
                                            <td>3 dp</td>
                                            <td>74 × 48 dp</td>
                                            <td data-i18n-zh="近距、小尺寸或高密度界面" data-i18n-en="Close range, small size, or high-density interfaces">近距、小尺寸或高密度界面</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="flex items-center gap-2">
                                                    <div class="w-[44px] h-[24px] bg-[#E9BD85] rounded-[2.5px] p-[2px] flex items-center justify-end">
                                                        <div class="w-[20px] h-[20px] bg-white rounded-[1px]"></div>
                                                    </div>
                                                    <strong class="text-white" data-i18n-zh="常规" data-i18n-en="Regular">常规</strong>
                                                </div>
                                            </td>
                                            <td>90 × 54 dp</td>
                                            <td>46 dp</td>
                                            <td>4 dp</td>
                                            <td>94 × 56 dp</td>
                                            <td data-i18n-zh="App 与常规家电触控屏" data-i18n-en="Apps and standard appliance touch screens">App 与常规家电触控屏</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="flex items-center gap-2">
                                                    <div class="w-[52px] h-[32px] bg-[#E9BD85] rounded-[3px] p-[3px] flex items-center justify-end">
                                                        <div class="w-[26px] h-[26px] bg-white rounded-[1px]"></div>
                                                    </div>
                                                    <strong class="text-white" data-i18n-zh="大号" data-i18n-en="Large">大号</strong>
                                                </div>
                                            </td>
                                            <td>100 × 60 dp</td>
                                            <td>50 dp</td>
                                            <td>5 dp</td>
                                            <td>104 × 64 dp</td>
                                            <td data-i18n-zh="远距观看、旋钮或遥控器输入" data-i18n-en="Long-distance viewing, knob, or remote control input">远距观看、旋钮或遥控器输入</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <hr class="border-t border-gray-800">

            <!-- ================= 04 组合 ================= -->
            <section id="module-combination" class="space-y-10">
                <div class="flex items-baseline gap-4">
                    <span class="module-num text-3xl text-[#E9BD85]">04</span>
                    <div>
                        <h2 class="text-2xl md:text-3xl font-bold text-white" data-i18n-zh="组合" data-i18n-en="Combination">组合</h2>
                        <p class="text-sm text-gray-300 mt-1.5 leading-relaxed" data-i18n-zh="开关与文本、状态描述组合的多种面板呈现形式。" data-i18n-en="Various panel presentation forms combining switches with text and status descriptions.">开关与文本、状态描述组合的多种面板呈现形式。</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="gallery-panel p-6 flex items-center justify-between">
                        <div class="space-y-1">
                            <h4 class="text-base font-bold text-white" data-i18n-zh="功能开关" data-i18n-en="Function Switch">功能开关</h4>
                            <div class="flex items-center gap-2 text-xs text-emerald-400">
                                <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
                                <span data-i18n-zh="功能状态" data-i18n-en="Function Status">功能状态</span>
                            </div>
                        </div>
                        <div class="w-[56px] h-[33.6px] bg-[#E9BD85] rounded-[3.2px] p-[2.4px] flex items-center justify-end shadow-inner cursor-pointer">
                            <div class="w-[28.8px] h-[28.8px] bg-white rounded-[1.6px] shadow-md"></div>
                        </div>
                    </div>

                    <div class="gallery-panel p-6 flex items-center justify-between">
                        <div class="space-y-1">
                            <h4 class="text-base font-bold text-white" data-i18n-zh="语音提示" data-i18n-en="Voice Prompt">语音提示</h4>
                            <div class="flex items-center gap-2 text-xs text-gray-400">
                                <span class="w-2 h-2 rounded-full bg-gray-500"></span>
                                <span data-i18n-zh="已关闭" data-i18n-en="Closed">已关闭</span>
                            </div>
                        </div>
                        <div class="w-[56px] h-[33.6px] bg-[#999999] rounded-[3.2px] p-[2.4px] flex items-center justify-start shadow-inner cursor-pointer">
                            <div class="w-[28.8px] h-[28.8px] bg-white rounded-[1.6px] shadow-md"></div>
                        </div>
                    </div>

                    <div class="gallery-panel p-6 flex items-center justify-between">
                        <div class="space-y-1">
                            <h4 class="text-base font-bold text-white" data-i18n-zh="功能开关" data-i18n-en="Function Switch">功能开关</h4>
                        </div>
                        <div class="w-[56px] h-[33.6px] bg-[#E9BD85] rounded-[3.2px] p-[2.4px] flex items-center justify-end shadow-inner cursor-pointer">
                            <div class="w-[28.8px] h-[28.8px] bg-white rounded-[1.6px] shadow-md"></div>
                        </div>
                    </div>

                    <div class="gallery-panel p-6 flex items-center justify-between">
                        <div class="space-y-1">
                            <h4 class="text-base font-bold text-white" data-i18n-zh="语音提示" data-i18n-en="Voice Prompt">语音提示</h4>
                        </div>
                        <div class="w-[56px] h-[33.6px] bg-[#999999] rounded-[3.2px] p-[2.4px] flex items-center justify-start shadow-inner cursor-pointer">
                            <div class="w-[28.8px] h-[28.8px] bg-white rounded-[1.6px] shadow-md"></div>
                        </div>
                    </div>
                </div>
            </section>

            <hr class="border-t border-gray-800">

            <!-- ================= 05 使用与验收（圆角已修改为 0 / 纯直角） ================= -->
            <section id="module-usage-acceptance" class="space-y-10">
                <div class="flex items-baseline gap-4">
                    <span class="module-num text-3xl text-[#E9BD85]">05</span>
                    <div>
                        <h2 class="text-2xl md:text-3xl font-bold text-white" data-i18n-zh="使用与验收" data-i18n-en="Usage & Acceptance">使用与验收</h2>
                        <p class="text-sm text-gray-300 mt-1.5 leading-relaxed" data-i18n-zh="规范设计师与开发团队在搭建 UI 与验收交付时的红线准则。" data-i18n-en="Guidelines for designers and developers during UI creation and acceptance delivery.">规范设计师与开发团队在搭建 UI 与验收交付时的红线准则。</p>
                    </div>
                </div>

                <div class="gallery-panel p-8 md:p-12 space-y-10 rounded-none">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <!-- 交互与反馈 -->
                        <div class="space-y-4">
                            <h3 class="text-base font-bold text-white tracking-wider" data-i18n-zh="交互与反馈" data-i18n-en="Interaction & Feedback">交互与反馈</h3>
                            <ul class="space-y-3 text-sm text-gray-300 leading-relaxed">
                                <li class="flex items-start gap-2">
                                    <span class="text-emerald-400 font-bold">✓</span>
                                    <span data-i18n-zh="点击开关或其标签即可切换；触控热区小号 74×48 dp、常规 94×56 dp、大号 104×64 dp。" data-i18n-en="Tap switch or label to toggle; min touch target is 74x48 dp for small, 94x56 dp for regular, 104x64 dp for large.">点击开关或其标签即可切换；触控热区小号 74×48 dp、常规 94×56 dp、大号 104×64 dp。</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <span class="text-emerald-400 font-bold">✓</span>
                                    <span data-i18n-zh="操作后立即更新视觉状态，并同步设备真实状态。" data-i18n-en="Immediately update visual state after operation and sync real device state.">操作后立即更新视觉状态，并同步设备真实状态。</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <span class="text-emerald-400 font-bold">✓</span>
                                    <span data-i18n-zh="设备响应超过 300 ms 时进入处理中状态，锁定重复操作；失败后回退并说明原因。" data-i18n-en="Enter processing state if response exceeds 300 ms, locking repeat operations; revert and explain on failure.">设备响应超过 300 ms 时进入处理中状态，锁定重复操作；失败后回退并说明原因。</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <span class="text-emerald-400 font-bold">✓</span>
                                    <span data-i18n-zh="不要仅用颜色表达状态；标签、位置与辅助技术需共同传达当前值。" data-i18n-en="Do not use color alone to express state; labels, position, and assistive technology must convey the current value.">不要仅用颜色表达状态；标签、位置与辅助技术需共同传达当前值。</span>
                                </li>
                            </ul>
                        </div>

                        <!-- 标签规则 -->
                        <div class="space-y-4">
                            <h3 class="text-base font-bold text-white tracking-wider" data-i18n-zh="标签规则" data-i18n-en="Labeling Rules">标签规则</h3>
                            <ul class="space-y-3 text-sm text-gray-300 leading-relaxed">
                                <li class="flex items-start gap-2">
                                    <span class="text-emerald-400 font-bold">✓</span>
                                    <span data-i18n-zh="使用名词或名词短语，如“提示音”“童锁”。" data-i18n-en="Use nouns or noun phrases, such as 'Tone', 'Child Lock'.">使用名词或名词短语，如“提示音”“童锁”。</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <span class="text-emerald-400 font-bold">✓</span>
                                    <span data-i18n-zh="开启与关闭的结果应可预测；若会触发高风险行为，应增加确认。" data-i18n-en="Toggle results should be predictable; add confirmation if high-risk actions are triggered.">开启与关闭的结果应可预测；若会触发高风险行为，应增加确认。</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <span class="text-emerald-400 font-bold">✓</span>
                                    <span data-i18n-zh="不要把“开/关”写进标签，也不要用开关执行“启动”“保存”等一次性动作。" data-i18n-en="Do not include 'On/Off' in labels, nor use switches for one-time actions like 'Start' or 'Save'.">不要把“开/关”写进标签，也不要用开关执行“启动”“保存”等一次性动作。</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <!-- 应该 (✔) 与 不应该 (×) 双栏对比面板（圆角设为 0 / 纯直角） -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-white/10">
                        <!-- 应该 (Recommended) -->
                        <div class="p-6 bg-emerald-950/10 border border-emerald-500/30 rounded-none space-y-4">
                            <h4 class="text-base font-bold text-emerald-400 flex items-center gap-2">
                                <span>✓</span>
                                <span data-i18n-zh="应该" data-i18n-en="Recommended">应该</span>
                            </h4>
                            <ul class="space-y-3 text-sm text-gray-300 leading-relaxed">
                                <li class="flex items-start gap-2">
                                    <span class="text-emerald-400 font-bold">•</span>
                                    <span data-i18n-zh="标签描述被控制的设置" data-i18n-en="Labels describe the setting being controlled">标签描述被控制的设置</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <span class="text-emerald-400 font-bold">•</span>
                                    <span data-i18n-zh="切换后立即反馈真实状态" data-i18n-en="Immediately feed back real state after switching">切换后立即反馈真实状态</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <span class="text-emerald-400 font-bold">•</span>
                                    <span data-i18n-zh="同一列表内右对齐开关" data-i18n-en="Right-align switches within the same list">同一列表内右对齐开关</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <span class="text-emerald-400 font-bold">•</span>
                                    <span data-i18n-zh="确保开关在卡萨帝暗色微光背景下具备充足的文字与图标对比度。" data-i18n-en="Ensure switches have sufficient text and icon contrast against Casarte dark subtle-glow backgrounds.">确保开关在卡萨帝暗色微光背景下具备充足的文字与图标对比度。</span>
                                </li>
                            </ul>
                        </div>

                        <!-- 不应该 (Avoid) -->
                        <div class="p-6 bg-rose-950/10 border border-rose-500/30 rounded-none space-y-4">
                            <h4 class="text-base font-bold text-rose-400 flex items-center gap-2">
                                <span>×</span>
                                <span data-i18n-zh="不应该" data-i18n-en="Avoid">不应该</span>
                            </h4>
                            <ul class="space-y-3 text-sm text-gray-300 leading-relaxed">
                                <li class="flex items-start gap-2">
                                    <span class="text-rose-400 font-bold">•</span>
                                    <span data-i18n-zh="使用方形或矩形开关形态" data-i18n-en="Use square or rectangular switch shapes">使用方形或矩形开关形态</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <span class="text-rose-400 font-bold">•</span>
                                    <span data-i18n-zh="在滑块或轨道内放置图标" data-i18n-en="Place icons inside the thumb or track">在滑块或轨道内放置图标</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <span class="text-rose-400 font-bold">•</span>
                                    <span data-i18n-zh="用开关提交表单或启动任务" data-i18n-en="Use switches to submit forms or launch tasks">用开关提交表单或启动任务</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <span class="text-rose-400 font-bold">•</span>
                                    <span data-i18n-zh="以透明度或阴影作为唯一的状态提示。" data-i18n-en="Use opacity or shadows as the sole state indicator.">以透明度或阴影作为唯一的状态提示。</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    `;

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