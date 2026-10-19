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
                            <div class="flex flex-col items-center space-y-3 p-4 bg-black/30 rounded-xl border border-white/5">
                                <div class="h-[50px] flex items-center justify-center">
                                    <div class="w-[56px] h-[33.6px] bg-[#E9BD85] rounded-[3.2px] p-[2.4px] flex items-center justify-end shadow-md">
                                        <div class="w-[28.8px] h-[28.8px] bg-white rounded-[1.6px] shadow"></div>
                                    </div>
                                </div>
                                <span class="text-xs text-gray-300 font-mono">Variant 1</span>
                            </div>

                            <div class="flex flex-col items-center space-y-3 p-4 bg-black/30 rounded-xl border border-white/5">
                                <div class="h-[50px] flex items-center justify-center">
                                    <div class="w-[56px] h-[33.6px] bg-[#999999] rounded-[3.2px] p-[2.4px] flex items-center justify-start shadow-md">
                                        <div class="w-[28.8px] h-[28.8px] bg-white rounded-[1.6px] shadow"></div>
                                    </div>
                                </div>
                                <span class="text-xs text-gray-300 font-mono">Variant 2</span>
                            </div>

                            <div class="flex flex-col items-center space-y-3 p-4 bg-black/30 rounded-xl border border-white/5">
                                <div class="h-[50px] flex items-center justify-center opacity-40">
                                    <div class="w-[56px] h-[33.6px] bg-[#E9BD85] rounded-[3.2px] p-[2.4px] flex items-center justify-end shadow-md">
                                        <div class="w-[28.8px] h-[28.8px] bg-white rounded-[1.6px] shadow"></div>
                                    </div>
                                </div>
                                <span class="text-xs text-gray-400 font-mono">Variant 3</span>
                            </div>

                            <div class="flex flex-col items-center space-y-3 p-4 bg-black/30 rounded-xl border border-white/5">
                                <div class="h-[50px] flex items-center justify-center opacity-40">
                                    <div class="w-[56px] h-[33.6px] bg-[#999999] rounded-[3.2px] p-[2.4px] flex items-center justify-start shadow-md">
                                        <div class="w-[28.8px] h-[28.8px] bg-white rounded-[1.6px] shadow"></div>
                                    </div>
                                </div>
                                <span class="text-xs text-gray-400 font-mono">Variant 4</span>
                            </div>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-gray-800/80">
                        <div class="space-y-2">
                            <h4 class="text-sm font-bold text-[#E9BD85]" data-i18n-zh="开关的状态" data-i18n-en="Switch States (ZH)">开关的状态</h4>
                            <ul class="text-xs text-gray-300 space-y-1.5 list-disc list-inside">
                                <li data-i18n-zh="开启状态（Toggle On）" data-i18n-en="Toggle On">开启状态（Toggle On）</li>
                                <li data-i18n-zh="关闭状态（Toggle Off）" data-i18n-en="Toggle Off">关闭状态（Toggle Off）</li>
                                <li data-i18n-zh="禁用的开启状态（Toggle On, 禁用）" data-i18n-en="Toggle On (Disabled)">禁用的开启状态（Toggle On, 禁用）</li>
                                <li data-i18n-zh="禁用的关闭状态（Toggle Off, 禁用）" data-i18n-en="Toggle Off (Disabled)">禁用的关闭状态（Toggle Off, 禁用）</li>
                            </ul>
                            <p class="text-[11px] text-gray-400 pt-1" data-i18n-zh="以上是 UI 组件中开关常见的四种状态。" data-i18n-en="These are the four common states of a toggle switch.">以上是 UI 组件中开关常见的四种状态。</p>
                        </div>

                        <div class="space-y-2">
                            <h4 class="text-sm font-bold text-[#E9BD85]" data-i18n-en="Toggle Switch States">Toggle Switch States</h4>
                            <ul class="text-xs text-gray-300 space-y-1.5 list-disc list-inside">
                                <li data-i18n-en="Toggle On">Toggle On</li>
                                <li data-i18n-en="Toggle Off">Toggle Off</li>
                                <li data-i18n-en="Toggle On (Disabled)">Toggle On (Disabled)</li>
                                <li data-i18n-en="Toggle Off (Disabled)">Toggle Off (Disabled)</li>
                            </ul>
                            <p class="text-[11px] text-gray-400 pt-1" data-i18n-en="These are the four standard states of a toggle switch used in UI components.">These are the four standard states of a toggle switch used in UI components.</p>
                        </div>
                    </div>
                </div>
            </section>

            <hr class="border-t border-gray-800">

            <!-- ================= 03 测量（整体等比缩小 20%） ================= -->
            <section id="module-measurements" class="space-y-10">
                <div class="flex items-baseline gap-4">
                    <span class="module-num text-3xl text-[#E9BD85]">03</span>
                    <div>
                        <h2 class="text-2xl md:text-3xl font-bold text-white" data-i18n-zh="测量" data-i18n-en="Measurements">测量</h2>
                        <p class="text-sm text-gray-300 mt-1.5 leading-relaxed" data-i18n-zh="提供不同尺寸规格（Small、Medium、Large）的具体长宽、边距及内部元素比例规范。" data-i18n-en="Provides specific width, height, padding, and internal proportion specs for Small, Medium, and Large sizes.">提供不同尺寸规格（Small、Medium、Large）的具体长宽、边距及内部元素比例规范。</p>
                    </div>
                </div>

                <div class="gallery-panel p-8 space-y-6">
                    <div class="flex flex-col items-center justify-center py-10 bg-black/40 rounded-2xl border border-white/5">
                        <div class="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center">
                            
                            <!-- Small (缩放20%后：56 × 33.6px，滑块 28.8px) -->
                            <div class="text-center space-y-3">
                                <div class="h-20 flex items-center justify-center">
                                    <div class="w-[56px] h-[33.6px] bg-[#E9BD85] rounded-[3.2px] p-[2.4px] flex items-center justify-end shadow-md">
                                        <div class="w-[28.8px] h-[28.8px] bg-white rounded-[1.6px] shadow"></div>
                                    </div>
                                </div>
                                <div class="space-y-1">
                                    <div class="text-xs text-gray-300 font-medium">Small</div>
                                    <div class="text-xs font-mono text-[#E9BD85]">70×42px</div>
                                </div>
                            </div>

                            <!-- Medium (缩放20%后：72 × 43.2px，滑块 36.8px) -->
                            <div class="text-center space-y-3">
                                <div class="h-20 flex items-center justify-center">
                                    <div class="w-[72px] h-[43.2px] bg-[#E9BD85] rounded-[3.2px] p-[3.2px] flex items-center justify-end shadow-md">
                                        <div class="w-[36.8px] h-[36.8px] bg-white rounded-[1.6px] shadow"></div>
                                    </div>
                                </div>
                                <div class="space-y-1">
                                    <div class="text-xs text-gray-300 font-medium">Medium</div>
                                    <div class="text-xs font-mono text-[#E9BD85]">90×54px</div>
                                </div>
                            </div>

                            <!-- Large (缩放20%后：80 × 48px，滑块 40px) -->
                            <div class="text-center space-y-3">
                                <div class="h-20 flex items-center justify-center">
                                    <div class="w-[80px] h-[48px] bg-[#E9BD85] rounded-[3.2px] p-[4px] flex items-center justify-end shadow-md">
                                        <div class="w-[40px] h-[40px] bg-white rounded-[1.6px] shadow"></div>
                                    </div>
                                </div>
                                <div class="space-y-1">
                                    <div class="text-xs text-gray-300 font-medium">Large</div>
                                    <div class="text-xs font-mono text-[#E9BD85]">100×60px</div>
                                </div>
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