document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('component-page');
    if (!container) return;

    const iconSvg = `<svg class="w-5 h-5 inline-block shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>`;

    container.innerHTML = `
        <div class="space-y-16">

            <!-- ================= 1. 特殊按钮 Special Button ================= -->
            <section class="gallery-panel p-8 md:p-10 space-y-8">
                <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                    <div class="md:col-span-4 space-y-3">
                        <h2 class="text-2xl font-bold text-white flex items-center gap-2">
                            <span data-i18n-zh="特殊按钮" data-i18n-en="Special button">特殊按钮</span>
                            <span class="text-xs text-[#E9BD85] font-normal">Special button</span>
                        </h2>
                        <p class="text-sm text-gray-300 leading-relaxed" data-i18n-zh="特殊按钮是用于控制程序或功能核心状态（如开启、暂停等）的专用交互组件，为关键操作提供快速触控入口。" data-i18n-en="Special buttons are dedicated interactive components used to control core states of a program or function, such as power on or pause. They provide quick access for triggering critical actions.">
                            特殊按钮是用于控制程序或功能核心状态（如开启、暂停等）的专用交互组件，为关键操作提供快速触控入口。
                        </p>
                    </div>

                    <div class="md:col-span-8 flex flex-wrap items-center justify-start gap-8 bg-black/40 p-8 border border-white/10">
                        <!-- Play -->
                        <div class="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#4a3a2a] via-[#221a12] to-[#110d08] border border-[#E9BD85]/60 flex items-center justify-center text-white shadow-2xl">
                            <svg class="w-8 h-8 fill-current text-white/90" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                        </div>
                        <!-- Pause -->
                        <div class="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#4a3a2a] via-[#221a12] to-[#110d08] border border-[#E9BD85]/60 flex items-center justify-center text-white shadow-2xl">
                            <svg class="w-8 h-8 fill-current text-white/90" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
                        </div>
                    </div>
                </div>
            </section>


            <!-- ================= 2. 图标按钮 Icon Button ================= -->
            <section class="gallery-panel p-8 md:p-10 space-y-10">
                <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b border-gray-800 pb-8">
                    <div class="md:col-span-4 space-y-3">
                        <h2 class="text-2xl font-bold text-white flex items-center gap-2">
                            <span data-i18n-zh="图标按钮" data-i18n-en="Icon Button">图标按钮</span>
                            <span class="text-xs text-[#E9BD85] font-normal">Icon Button</span>
                        </h2>
                        <p class="text-sm text-gray-300 leading-relaxed" data-i18n-zh="图标按钮用来表示可以打开和关闭的二进制操作。" data-i18n-en="Icon buttons are used to represent binary operations that can be toggled on or off.">
                            图标按钮用来表示可以打开和关闭的二进制操作。
                        </p>
                    </div>

                    <!-- 场景模拟展示 -->
                    <div class="md:col-span-8 bg-black/50 p-6 border border-white/10 flex items-center gap-6">
                        <div class="text-4xl md:text-5xl font-light text-white tracking-tight mr-4">08<span class="text-xl align-top">°</span></div>
                        <!-- 速冷 -->
                        <div class="w-20 h-20 bg-gradient-to-br from-[#3d2e1f] to-[#120d09] border border-[#E9BD85]/50 flex flex-col items-center justify-center gap-1.5 text-white">
                            <svg class="w-6 h-6 stroke-current text-[#E9BD85]" viewBox="0 0 24 24" fill="none"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 3v18m9-9H3m15.364 6.364l-12.728-12.728m0 12.728l12.728-12.728"/></svg>
                            <span class="text-xs text-gray-200" data-i18n-zh="速冷" data-i18n-en="Fast Cool">速冷</span>
                        </div>
                        <!-- 解冻 -->
                        <div class="w-20 h-20 bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-1.5 text-gray-400">
                            <svg class="w-6 h-6 stroke-current" viewBox="0 0 24 24" fill="none"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                            <span class="text-xs text-gray-400" data-i18n-zh="解冻" data-i18n-en="Defrost">解冻</span>
                        </div>
                    </div>
                </div>

                <!-- 矩阵与参数说明 -->
                <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                    <!-- 图标按钮 3*3 状态矩阵 -->
                    <div class="md:col-span-6 space-y-4">
                        <div class="grid grid-cols-3 gap-4">
                            <!-- Row 1: S -->
                            <div class="w-12 h-12 bg-[#E9BD85]/20 border border-[#E9BD85] flex items-center justify-center text-[#E9BD85]">${iconSvg}</div>
                            <div class="w-12 h-12 bg-white/5 border border-white/20 flex items-center justify-center text-gray-300">${iconSvg}</div>
                            <div class="w-12 h-12 bg-white/[0.02] border border-white/5 flex items-center justify-center text-gray-600 opacity-40">${iconSvg}</div>
                            <!-- Row 2: M -->
                            <div class="w-16 h-16 bg-[#E9BD85]/20 border border-[#E9BD85] flex items-center justify-center text-[#E9BD85]">${iconSvg}</div>
                            <div class="w-16 h-16 bg-white/5 border border-white/20 flex items-center justify-center text-gray-300">${iconSvg}</div>
                            <div class="w-16 h-16 bg-white/[0.02] border border-white/5 flex items-center justify-center text-gray-600 opacity-40">${iconSvg}</div>
                            <!-- Row 3: L -->
                            <div class="w-20 h-20 bg-[#E9BD85]/20 border border-[#E9BD85] flex items-center justify-center text-[#E9BD85]">${iconSvg}</div>
                            <div class="w-20 h-20 bg-white/5 border border-white/20 flex items-center justify-center text-gray-300">${iconSvg}</div>
                            <div class="w-20 h-20 bg-white/[0.02] border border-white/5 flex items-center justify-center text-gray-600 opacity-40">${iconSvg}</div>
                        </div>
                    </div>

                    <!-- 参数说明表格 -->
                    <div class="md:col-span-6 bg-black/40 p-6 border border-white/10 space-y-4">
                        <div class="grid grid-cols-4 pb-2 border-b border-gray-700 text-xs font-semibold text-[#E9BD85]">
                            <div></div>
                            <div>S</div>
                            <div>M</div>
                            <div>L</div>
                        </div>
                        <div class="grid grid-cols-4 text-xs text-gray-300 py-1">
                            <div class="text-gray-400 font-medium" data-i18n-zh="尺寸 Size" data-i18n-en="Size">尺寸 Size</div>
                            <div>48*48</div>
                            <div>68*68</div>
                            <div>80*80</div>
                        </div>
                        <div class="pt-3 border-t border-gray-800 space-y-2">
                            <div class="text-xs font-semibold text-white" data-i18n-zh="图标按钮分为三种状态：" data-i18n-en="Icon buttons have three states:">图标按钮分为三种状态：</div>
                            <ul class="text-xs text-gray-400 space-y-1 list-disc list-inside">
                                <li data-i18n-zh="开启状态 (Active)" data-i18n-en="Active">开启状态 (Active)</li>
                                <li data-i18n-zh="关闭状态 (Inactive)" data-i18n-en="Inactive">关闭状态 (Inactive)</li>
                                <li data-i18n-zh="禁用状态 (Disabled)" data-i18n-en="Disabled">禁用状态 (Disabled)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>


            <!-- ================= 3. 常规按钮 Regular Button ================= -->
            <section class="gallery-panel p-8 md:p-10 space-y-12">
                <div class="border-b border-gray-800 pb-6">
                    <h2 class="text-2xl font-bold text-white flex items-center gap-2">
                        <span data-i18n-zh="常规按钮" data-i18n-en="Regular button">常规按钮</span>
                        <span class="text-xs text-[#E9BD85] font-normal">Regular button</span>
                    </h2>
                </div>

                <!-- 测量尺寸 Measurements -->
                <div class="space-y-6">
                    <div>
                        <h3 class="text-lg font-bold text-white mb-1" data-i18n-zh="测量 Measurements" data-i18n-en="Measurements">测量 Measurements</h3>
                        <p class="text-xs text-gray-400" data-i18n-zh="此部分的注释是为了约束每个按钮尺寸的元素间距和安全距离。" data-i18n-en="This annotation defines the spacing and safety margins between elements based on the size of each button.">
                            此部分的注释是为了约束每个按钮尺寸的元素间距和安全距离。
                        </p>
                    </div>

                    <div class="bg-black/50 p-6 border border-white/10 space-y-6">
                        <!-- S size -->
                        <div class="flex items-center gap-6 text-xs text-gray-400">
                            <span class="w-12 font-bold text-gray-300">S size</span>
                            <div class="flex items-center gap-4">
                                <!-- 纯文字 -->
                                <div class="relative bg-[#a65d18] text-white h-10 px-9 flex items-center justify-center font-medium">
                                    <span class="absolute left-1 text-[10px] text-red-300">36</span>
                                    <span data-i18n-zh="按钮" data-i18n-en="Button">按钮</span>
                                    <span class="absolute right-1 text-[10px] text-red-300">36</span>
                                    <span class="absolute -left-6 top-2 text-[10px] text-red-400">80</span>
                                </div>
                                <!-- 图标+文字 -->
                                <div class="relative bg-[#a65d18] text-white h-10 px-9 flex items-center justify-center gap-5 font-medium">
                                    <span class="absolute left-1 text-[10px] text-red-300">36</span>
                                    ${iconSvg}
                                    <span class="text-[10px] text-red-300 -mx-3">20</span>
                                    <span data-i18n-zh="按钮" data-i18n-en="Button">按钮</span>
                                    <span class="absolute right-1 text-[10px] text-red-300">36</span>
                                </div>
                            </div>
                        </div>

                        <!-- M size -->
                        <div class="flex items-center gap-6 text-xs text-gray-400">
                            <span class="w-12 font-bold text-gray-300">M size</span>
                            <div class="flex items-center gap-4">
                                <div class="relative bg-[#a65d18] text-white h-11 px-10 flex items-center justify-center font-medium">
                                    <span class="absolute left-1 text-[10px] text-red-300">40</span>
                                    <span data-i18n-zh="按钮" data-i18n-en="Button">按钮</span>
                                    <span class="absolute right-1 text-[10px] text-red-300">40</span>
                                    <span class="absolute -left-6 top-2.5 text-[10px] text-red-400">88</span>
                                </div>
                                <div class="relative bg-[#a65d18] text-white h-11 px-10 flex items-center justify-center gap-5.5 font-medium">
                                    <span class="absolute left-1 text-[10px] text-red-300">40</span>
                                    ${iconSvg}
                                    <span class="text-[10px] text-red-300 -mx-3">22</span>
                                    <span data-i18n-zh="按钮" data-i18n-en="Button">按钮</span>
                                    <span class="absolute right-1 text-[10px] text-red-300">40</span>
                                </div>
                            </div>
                        </div>

                        <!-- L size -->
                        <div class="flex items-center gap-6 text-xs text-gray-400">
                            <span class="w-12 font-bold text-gray-300">L size</span>
                            <div class="flex items-center gap-4">
                                <div class="relative bg-[#a65d18] text-white h-12 px-11 flex items-center justify-center font-medium">
                                    <span class="absolute left-1 text-[10px] text-red-300">44</span>
                                    <span data-i18n-zh="按钮" data-i18n-en="Button">按钮</span>
                                    <span class="absolute right-1 text-[10px] text-red-300">44</span>
                                    <span class="absolute -left-6 top-3 text-[10px] text-red-400">96</span>
                                </div>
                                <div class="relative bg-[#a65d18] text-white h-12 px-11 flex items-center justify-center gap-6 font-medium">
                                    <span class="absolute left-1 text-[10px] text-red-300">44</span>
                                    ${iconSvg}
                                    <span class="text-[10px] text-red-300 -mx-3">24</span>
                                    <span data-i18n-zh="按钮" data-i18n-en="Button">按钮</span>
                                    <span class="absolute right-1 text-[10px] text-red-300">44</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <!-- 目标区域 Target areas -->
                <div class="space-y-6 pt-6 border-t border-gray-800">
                    <div>
                        <h3 class="text-lg font-bold text-white mb-1" data-i18n-zh="目标区域 Target areas" data-i18n-en="Target areas">目标区域 Target areas</h3>
                        <p class="text-xs text-gray-400" data-i18n-zh="小尺寸和中尺寸按钮的热区尺寸必须为 92 像素或更大。" data-i18n-en="The touch target size for small and medium buttons must be at least 92.">
                            小尺寸和中尺寸按钮的热区尺寸必须为 92 像素或更大。
                        </p>
                    </div>

                    <div class="bg-black/50 p-6 border border-white/10 space-y-4">
                        <div class="flex items-center gap-6 text-xs text-gray-400">
                            <span class="w-12 font-bold text-gray-300">S size</span>
                            <div class="relative bg-[#c2410c] text-white h-12 w-48 flex items-center justify-center font-medium">
                                <span class="absolute -left-6 top-3 text-[10px] text-red-400">92</span>
                                <span data-i18n-zh="按钮" data-i18n-en="Button">按钮</span>
                            </div>
                        </div>
                        <div class="flex items-center gap-6 text-xs text-gray-400">
                            <span class="w-12 font-bold text-gray-300">M size</span>
                            <div class="relative bg-[#c2410c] text-white h-14 w-56 flex items-center justify-center font-medium">
                                <span class="absolute -left-6 top-4 text-[10px] text-red-400">92</span>
                                <span data-i18n-zh="按钮" data-i18n-en="Button">按钮</span>
                            </div>
                        </div>
                    </div>
                </div>


                <!-- 填充按钮 Filled Button -->
                <div class="space-y-6 pt-6 border-t border-gray-800">
                    <div>
                        <h3 class="text-lg font-bold text-white mb-1" data-i18n-zh="填充按钮 Filled Button" data-i18n-en="Filled Button">填充按钮 Filled Button</h3>
                        <p class="text-xs text-gray-400" data-i18n-zh="适用于决定流程关键节点的操作。" data-i18n-en="Used for actions that determine key decision points in a process.">
                            适用于决定流程关键节点的操作。
                        </p>
                    </div>

                    <div class="bg-black/50 p-6 border border-white/10 space-y-6">
                        <!-- 文字状态排布 -->
                        <div class="grid grid-cols-4 gap-4">
                            <button class="h-12 bg-[#b46912] text-white font-medium flex items-center justify-center" data-i18n-zh="按钮" data-i18n-en="Button">按钮</button>
                            <button class="h-12 bg-[#78716c] text-gray-200 font-medium flex items-center justify-center" data-i18n-zh="按钮" data-i18n-en="Button">按钮</button>
                            <button class="h-12 bg-[#44403c] text-gray-500 font-medium flex items-center justify-center cursor-not-allowed" disabled data-i18n-zh="按钮" data-i18n-en="Button">按钮</button>
                            <button class="h-12 bg-[#ef4444] text-white font-medium flex items-center justify-center" data-i18n-zh="按钮" data-i18n-en="Button">按钮</button>
                        </div>
                        <!-- 图标+文字状态排布 -->
                        <div class="grid grid-cols-4 gap-4">
                            <button class="h-12 bg-[#b46912] text-white font-medium flex items-center justify-center gap-2">${iconSvg} <span data-i18n-zh="按钮" data-i18n-en="Button">按钮</span></button>
                            <button class="h-12 bg-[#78716c] text-gray-200 font-medium flex items-center justify-center gap-2">${iconSvg} <span data-i18n-zh="按钮" data-i18n-en="Button">按钮</span></button>
                            <button class="h-12 bg-[#44403c] text-gray-500 font-medium flex items-center justify-center gap-2 cursor-not-allowed" disabled>${iconSvg} <span data-i18n-zh="按钮" data-i18n-en="Button">按钮</span></button>
                            <button class="h-12 bg-[#ef4444] text-white font-medium flex items-center justify-center gap-2">${iconSvg} <span data-i18n-zh="按钮" data-i18n-en="Button">按钮</span></button>
                        </div>
                    </div>
                </div>


                <!-- 线性按钮 Linear Button -->
                <div class="space-y-6 pt-6 border-t border-gray-800">
                    <div>
                        <h3 class="text-lg font-bold text-white mb-1" data-i18n-zh="线性按钮 Linear Button" data-i18n-en="Linear Button">线性按钮 Linear Button</h3>
                        <p class="text-xs text-gray-400" data-i18n-zh="适用于辅助性操作。" data-i18n-en="Used for secondary or supportive actions.">
                            适用于辅助性操作。
                        </p>
                    </div>

                    <div class="bg-black/50 p-6 border border-white/10 space-y-6">
                        <div class="grid grid-cols-4 gap-4">
                            <button class="h-12 border border-[#E9BD85] text-[#E9BD85] font-medium flex items-center justify-center" data-i18n-zh="按钮" data-i18n-en="Button">按钮</button>
                            <button class="h-12 border border-white/30 text-gray-300 font-medium flex items-center justify-center" data-i18n-zh="按钮" data-i18n-en="Button">按钮</button>
                            <button class="h-12 border border-white/10 text-gray-600 font-medium flex items-center justify-center cursor-not-allowed" disabled data-i18n-zh="按钮" data-i18n-en="Button">按钮</button>
                            <button class="h-12 border border-[#ef4444] text-[#ef4444] font-medium flex items-center justify-center" data-i18n-zh="按钮" data-i18n-en="Button">按钮</button>
                        </div>
                        <div class="grid grid-cols-4 gap-4">
                            <button class="h-12 border border-[#E9BD85] text-[#E9BD85] font-medium flex items-center justify-center gap-2">${iconSvg} <span data-i18n-zh="按钮" data-i18n-en="Button">按钮</span></button>
                            <button class="h-12 border border-white/30 text-gray-300 font-medium flex items-center justify-center gap-2">${iconSvg} <span data-i18n-zh="按钮" data-i18n-en="Button">按钮</span></button>
                            <button class="h-12 border border-white/10 text-gray-600 font-medium flex items-center justify-center gap-2 cursor-not-allowed" disabled>${iconSvg} <span data-i18n-zh="按钮" data-i18n-en="Button">按钮</span></button>
                            <button class="h-12 border border-[#ef4444] text-[#ef4444] font-medium flex items-center justify-center gap-2">${iconSvg} <span data-i18n-zh="按钮" data-i18n-en="Button">按钮</span></button>
                        </div>
                    </div>
                </div>


                <!-- 文字按钮 Text Button -->
                <div class="space-y-6 pt-6 border-t border-gray-800">
                    <div>
                        <h3 class="text-lg font-bold text-white mb-1" data-i18n-zh="文字按钮 Text Button" data-i18n-en="Text Button">文字按钮 Text Button</h3>
                        <p class="text-xs text-red-400 font-medium" data-i18n-zh="适用于不常用或需谨慎触发的操作。" data-i18n-en="Used for infrequent or sensitive actions that should be triggered with caution.">
                            适用于不常用或需谨慎触发的操作。
                        </p>
                    </div>

                    <div class="bg-black/50 p-6 border border-white/10 space-y-6">
                        <div class="grid grid-cols-4 gap-4 text-center">
                            <button class="text-[#E9BD85] font-medium py-2 hover:underline" data-i18n-zh="按钮" data-i18n-en="Button">按钮</button>
                            <button class="text-gray-300 font-medium py-2 hover:underline" data-i18n-zh="按钮" data-i18n-en="Button">按钮</button>
                            <button class="text-gray-600 font-medium py-2 cursor-not-allowed" disabled data-i18n-zh="按钮" data-i18n-en="Button">按钮</button>
                            <button class="text-[#ef4444] font-medium py-2 hover:underline" data-i18n-zh="按钮" data-i18n-en="Button">按钮</button>
                        </div>
                        <div class="grid grid-cols-4 gap-4 text-center">
                            <button class="text-[#E9BD85] font-medium py-2 flex items-center justify-center gap-2">${iconSvg} <span data-i18n-zh="按钮" data-i18n-en="Button">按钮</span></button>
                            <button class="text-gray-300 font-medium py-2 flex items-center justify-center gap-2">${iconSvg} <span data-i18n-zh="按钮" data-i18n-en="Button">按钮</span></button>
                            <button class="text-gray-600 font-medium py-2 flex items-center justify-center gap-2 cursor-not-allowed" disabled>${iconSvg} <span data-i18n-zh="按钮" data-i18n-en="Button">按钮</span></button>
                            <button class="text-[#ef4444] font-medium py-2 flex items-center justify-center gap-2">${iconSvg} <span data-i18n-zh="按钮" data-i18n-en="Button">按钮</span></button>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    `;
});