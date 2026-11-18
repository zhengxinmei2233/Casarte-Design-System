document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('component_text_field');
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
            .text-field-font {
                font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            }
            /* 卡萨帝高端家电深色主题控件样式 */
            .casarte-box-style {
                background: #6C5F53;
                border: none;
                border-radius: 0;
                color: #FFFFFF;
            }
            .casarte-box-active {
                background: #6C5F53;
                border: 1.5px solid #E9BD85;
                box-shadow: 0 0 12px rgba(233, 189, 133, 0.25);
                border-radius: 0;
                color: #FFFFFF;
            }
            .casarte-box-disabled {
                background: rgba(108, 95, 83, 0.5);
                border: none;
                border-radius: 0;
                color: rgba(255, 255, 255, 0.4);
                cursor: not-allowed;
            }
            .casarte-box-error {
                background: #6C5F53;
                border: 1.5px solid #FF3B30;
                border-radius: 0;
                color: #FFFFFF;
            }
            .casarte-code-box {
                width: 48px;
                height: 48px;
                background: rgba(255, 255, 255, 0.08);
                border: 1px solid rgba(255, 255, 255, 0.2);
                border-radius: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 18px;
                font-weight: 500;
                color: #FFFFFF;
            }
            .casarte-code-box-error {
                width: 48px;
                height: 48px;
                background: rgba(255, 255, 255, 0.08);
                border: 1.5px solid #FF3B30;
                border-radius: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 18px;
                font-weight: 500;
                color: #FF3B30;
            }
        </style>

        <div class="space-y-20">

            <!-- ================= 01 概览与何时使用 ================= -->
            <section id="module-overview" class="space-y-10">
                <div class="flex items-baseline gap-4">
                    <span class="module-num text-3xl text-[#E9BD85]">01</span>
                    <div>
                        <h2 class="text-2xl md:text-3xl font-bold text-white" data-i18n-zh="文本框概览与何时使用" data-i18n-en="Overview & Usage Guidelines">文本框概览与何时使用</h2>
                        <p class="text-sm text-gray-300 mt-1.5 leading-relaxed" data-i18n-zh="文本框用于接收用户输入的文本、数字或密码信息。在卡萨帝界面中，需确保输入框层级清晰，光标与占位反馈明确。" data-i18n-en="Text fields allow users to enter text, numbers, or passwords. They must maintain high contrast and clear feedback.">文本框用于接收用户输入的文本、数字或密码信息。在卡萨帝界面中，需确保输入框层级清晰，光标与占位反馈明确。</p>
                    </div>
                </div>

                <!-- 01 全景概览图 -->
                <div class="w-full aspect-[1364/511] bg-black/30 flex items-center justify-center p-8 overflow-hidden border border-white/10">
                    <img src="assets/component_text_field/component_text_field-1.png" alt="component_text_field-1" class="w-full h-full object-contain">
                </div>

                <div class="gallery-panel p-8 space-y-3">
                    <h3 class="text-lg font-bold text-white" data-i18n-zh="何时使用" data-i18n-en="When to Use">何时使用</h3>
                    <ul class="space-y-2 text-sm text-gray-300 leading-relaxed list-disc list-inside">
                        <li data-i18n-zh="当需要用户自由录入文字、数值、账号密码等自定义内容时使用文本框。" data-i18n-en="Use text fields when users need to freely enter custom text, numbers, or credentials.">当需要用户自由录入文字、数值、账号密码等自定义内容时使用文本框。</li>
                        <li data-i18n-zh="单行文本框适用于简短信息录入；多行文本框适用于长文本备注或详细说明场景。" data-i18n-en="Single-line is for short inputs; multi-line is for notes and descriptions.">单行文本框适用于简短信息录入；多行文本框适用于长文本备注或详细说明场景。</li>
                        <li data-i18n-zh="涉及敏感信息（如密码）时，应采用密码输入框并内嵌明暗文切换视窗。" data-i18n-en="For sensitive data like passwords, use password input fields with a visibility toggle.">涉及敏感信息（如密码）时，应采用密码输入框并内嵌明暗文切换视窗。</li>
                    </ul>
                </div>
            </section>

            <hr class="border-t border-gray-800">

            <!-- ================= 02 组件尺寸 ================= -->
            <section id="module-sizes" class="space-y-10">
                <div class="flex items-baseline gap-4">
                    <span class="module-num text-3xl text-[#E9BD85]">02</span>
                    <div>
                        <h2 class="text-2xl md:text-3xl font-bold text-white" data-i18n-zh="组件尺寸" data-i18n-en="Component Sizes">组件尺寸</h2>
                        <p class="text-sm text-gray-300 mt-1.5 leading-relaxed" data-i18n-zh="定义文本框在不同规格下的高度、字体及内边距标准。" data-i18n-en="Defines height, typography, and padding standards for text fields across different specifications.">定义文本框在不同规格下的高度、字体及内边距标准。</p>
                    </div>
                </div>

                <div class="gallery-panel p-8 space-y-6">
                    <ul class="space-y-2 text-sm text-gray-300 leading-relaxed list-disc list-inside">
                        <li data-i18n-zh="宽度随预期内容设置，确保常用内容可完整展示。" data-i18n-en="Set width according to expected content to ensure common content is fully displayed.">宽度随预期内容设置，确保常用内容可完整展示。</li>
                        <li data-i18n-zh="正文建议 24dp，图标建议 34dp；同一表单保持一致。" data-i18n-en="Body text suggested 24dp, icons suggested 34dp; keep consistent within the same form.">正文建议 24dp，图标建议 34dp；同一表单保持一致。</li>
                        <li data-i18n-zh="标签、辅助文字与容器建议间距 4dp；多行输入按内容向下扩展。" data-i18n-en="Suggested spacing between labels, helper text, and container is 4dp; multi-line inputs expand downward with content.">标签、辅助文字与容器建议间距 4dp；多行输入按内容向下扩展。</li>
                    </ul>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                        <!-- 小号 -->
                        <div class="gallery-panel p-6 space-y-4">
                            <span class="text-xs font-semibold text-[#E9BD85] uppercase tracking-wider">小号 · 60DP</span>
                            <div class="casarte-box-style h-12 px-4 flex items-center">
                                <span class="text-sm text-white">文本信息</span>
                            </div>
                        </div>
                        <!-- 常规 -->
                        <div class="gallery-panel p-6 space-y-4">
                            <span class="text-xs font-semibold text-[#E9BD85] uppercase tracking-wider">常规 · 72DP</span>
                            <div class="casarte-box-style h-[57.6px] px-[19.2px] flex items-center">
                                <span class="text-[16.8px] text-white">文本信息</span>
                            </div>
                        </div>
                        <!-- 大号 -->
                        <div class="gallery-panel p-6 space-y-4">
                            <span class="text-xs font-semibold text-[#E9BD85] uppercase tracking-wider">大号 · 84DP</span>
                            <div class="casarte-box-style h-[67.2px] px-[22.4px] flex items-center">
                                <span class="text-[19.6px] text-white">文本信息</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <hr class="border-t border-gray-800">

            <!-- ================= 03 组件类型 ================= -->
            <section id="module-types" class="space-y-10">
                <div class="flex items-baseline gap-4">
                    <span class="module-num text-3xl text-[#E9BD85]">03</span>
                    <div>
                        <h2 class="text-2xl md:text-3xl font-bold text-white" data-i18n-zh="组件类型" data-i18n-en="Component Types">组件类型</h2>
                        <p class="text-sm text-gray-300 mt-1.5 leading-relaxed" data-i18n-zh="按输入内容与文本长度选择类型，避免让用户承担不必要的输入负担。" data-i18n-en="Choose types based on input content and text length to avoid unnecessary input burden.">按输入内容与文本长度选择类型，避免让用户承担不必要的输入负担。</p>
                    </div>
                </div>

                <div class="gallery-panel overflow-x-auto">
                    <table class="w-full text-left border-collapse text-sm text-gray-200">
                        <thead>
                            <tr class="border-b border-gray-800 bg-white/[0.03] text-[#E9BD85]">
                                <th class="p-4 md:p-6 font-bold" data-i18n-zh="类型" data-i18n-en="Type">类型</th>
                                <th class="p-4 md:p-6 font-bold" data-i18n-zh="输入内容" data-i18n-en="Input Content">输入内容</th>
                                <th class="p-4 md:p-6 font-bold" data-i18n-zh="适用场景" data-i18n-en="Applicable Scenario">适用场景</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-800/60 text-gray-300">
                            <tr class="hover:bg-white/[0.02] transition-colors">
                                <td class="p-4 md:p-6 font-semibold text-white" data-i18n-zh="单行输入框" data-i18n-en="Single-line Input">单行输入框</td>
                                <td class="p-4 md:p-6" data-i18n-zh="一行自由文本" data-i18n-en="Single line of free text">一行自由文本</td>
                                <td class="p-4 md:p-6" data-i18n-zh="设备名称、搜索词；超出宽度时在框内横向滚动" data-i18n-en="Device names, search terms; scrolls horizontally when exceeding width">设备名称、搜索词；超出宽度时在框内横向滚动</td>
                            </tr>
                            <tr class="hover:bg-white/[0.02] transition-colors">
                                <td class="p-4 md:p-6 font-semibold text-white" data-i18n-zh="多行输入框" data-i18n-en="Multi-line Input">多行输入框</td>
                                <td class="p-4 md:p-6" data-i18n-zh="多行自由文本" data-i18n-en="Multi-line free text">多行自由文本</td>
                                <td class="p-4 md:p-6" data-i18n-zh="备注、问题描述；高度随内容向下扩展" data-i18n-en="Notes, problem descriptions; height expands downward with content">备注、问题描述；高度随内容向下扩展</td>
                            </tr>
                            <tr class="hover:bg-white/[0.02] transition-colors">
                                <td class="p-4 md:p-6 font-semibold text-white" data-i18n-zh="密码/验证码输入框" data-i18n-en="Password / Verification Code Input">密码/验证码输入框</td>
                                <td class="p-4 md:p-6" data-i18n-zh="身份校验 / 掩码数据" data-i18n-en="Identity verification / masked data">身份校验 / 掩码数据</td>
                                <td class="p-4 md:p-6" data-i18n-zh="4-6 位一次性验证码或 PIN、Wi-Fi 密码" data-i18n-en="4-6 digit one-time verification code or PIN, Wi-Fi password">4-6 位一次性验证码或 PIN、Wi-Fi 密码</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <hr class="border-t border-gray-800">

            <!-- ================= 04 文本输入框 ================= -->
            <section id="module-text-fields" class="space-y-10">
                <div class="flex items-baseline gap-4">
                    <span class="module-num text-3xl text-[#E9BD85]">04</span>
                    <div>
                        <h2 class="text-2xl md:text-3xl font-bold text-white" data-i18n-zh="文本输入框" data-i18n-en="Text Input Fields">文本输入框</h2>
                        <p class="text-sm text-gray-300 mt-1.5 leading-relaxed" data-i18n-zh="单行、多行及带辅助元素的文本输入样式。" data-i18n-en="Single-line, multi-line, and text input styles with auxiliary elements.">单行、多行及带辅助元素的文本输入样式。</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    <!-- 常规 -->
                    <div class="gallery-panel p-6 space-y-4 flex flex-col justify-start h-[180px]">
                        <div class="space-y-1">
                            <h3 class="text-sm font-bold text-[#E9BD85]" data-i18n-zh="常规" data-i18n-en="Regular">常规</h3>
                        </div>
                        <div class="casarte-box-style h-12 px-4 flex items-center">
                            <span class="text-sm text-white">文本信息</span>
                        </div>
                    </div>

                    <!-- 聚焦 -->
                    <div class="gallery-panel p-6 space-y-4 flex flex-col justify-start h-[180px]">
                        <div class="space-y-1">
                            <h3 class="text-sm font-bold text-[#E9BD85]" data-i18n-zh="聚焦" data-i18n-en="Focused">聚焦</h3>
                        </div>
                        <div class="casarte-box-active h-12 px-4 flex items-center">
                            <span class="text-sm text-white font-medium">文本信息</span>
                        </div>
                    </div>

                    <!-- 置灰 -->
                    <div class="gallery-panel p-6 space-y-4 flex flex-col justify-start h-[180px]">
                        <div class="space-y-1">
                            <h3 class="text-sm font-bold text-[#E9BD85]" data-i18n-zh="置灰" data-i18n-en="Disabled">置灰</h3>
                        </div>
                        <div class="casarte-box-disabled h-12 px-4 flex items-center">
                            <span class="text-sm">文本信息</span>
                        </div>
                    </div>

                    <!-- 带图标 (已按要求改为截图2样式：左侧白色搜索图标+白色文字“请输入”，并顶部对齐) -->
                    <div class="gallery-panel p-6 space-y-4 flex flex-col justify-start h-[180px]">
                        <div class="space-y-1">
                            <h3 class="text-sm font-bold text-[#E9BD85]" data-i18n-zh="带图标" data-i18n-en="With Icon">带图标</h3>
                        </div>
                        <div class="casarte-box-style h-12 px-4 flex items-center gap-3">
                            <svg class="w-4 h-4 text-white shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            <span class="text-sm text-white">请输入</span>
                        </div>
                    </div>

                    <!-- 错误 -->
                    <div class="gallery-panel p-6 space-y-4 flex flex-col justify-start h-[180px]">
                        <div class="space-y-1">
                            <h3 class="text-sm font-bold text-[#FF3B30]" data-i18n-zh="错误" data-i18n-en="Error">错误</h3>
                        </div>
                        <div class="space-y-1.5">
                            <div class="casarte-box-error h-12 px-4 flex items-center">
                                <span class="text-sm text-white">名称超过20个字符</span>
                            </div>
                            <p class="text-xs text-[#FF3B30]">错误说明</p>
                        </div>
                    </div>

                    <!-- 多行 -->
                    <div class="gallery-panel p-6 space-y-4 flex flex-col justify-start h-[180px]">
                        <div class="space-y-1">
                            <h3 class="text-sm font-bold text-[#E9BD85]" data-i18n-zh="多行" data-i18n-en="Multi-line">多行</h3>
                        </div>
                        <div class="casarte-box-style h-28 p-4 flex flex-col justify-between">
                            <span class="text-sm text-white">文本信息</span>
                            <span class="text-[11px] text-gray-400 text-right">0/120</span>
                        </div>
                    </div>
                </div>
            </section>

            <hr class="border-t border-gray-800">

            <!-- ================= 05 密码/验证码输入框 ================= -->
            <section id="module-code-fields" class="space-y-10">
                <div class="flex items-baseline gap-4">
                    <span class="module-num text-3xl text-[#E9BD85]">05</span>
                    <div>
                        <h2 class="text-2xl md:text-3xl font-bold text-white" data-i18n-zh="密码/验证码输入框" data-i18n-en="Password / Verification Code Input">密码/验证码输入框</h2>
                        <p class="text-sm text-gray-300 mt-1.5 leading-relaxed" data-i18n-zh="不同位数, 分组, 掩码及状态的验证码与密码输入样式。" data-i18n-en="Verification code and password input styles with different digits, groupings, masks, and states.">不同位数、分组、掩码及状态的验证码与密码输入样式。</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <!-- 正确-隐藏 -->
                    <div class="gallery-panel p-8 space-y-6 flex flex-col justify-between">
                        <div class="space-y-1">
                            <h3 class="text-base font-bold text-[#E9BD85]" data-i18n-zh="正确-隐藏" data-i18n-en="Valid - Hidden">正确-隐藏</h3>
                            <p class="text-xs text-gray-400" data-i18n-zh="正确密码/验证码隐藏状态下的输入框样式" data-i18n-en="Input field style for valid password/verification code in hidden state">正确密码/验证码隐藏状态下的输入框样式</p>
                        </div>
                        <div class="casarte-box-style h-14 px-6 flex items-center justify-between">
                            <div class="flex items-center">
                                <div class="flex items-center gap-4">
                                    <span class="w-1 h-1 bg-white"></span>
                                    <span class="w-1 h-1 bg-white"></span>
                                    <span class="w-1 h-1 bg-white"></span>
                                    <span class="w-1 h-1 bg-white"></span>
                                    <span class="w-1 h-1 bg-white"></span>
                                    <span class="w-1 h-1 bg-white"></span>
                                </div>
                                <span class="w-[1.5px] h-5 bg-[#E9BD85] ml-4 animate-pulse"></span>
                            </div>
                            <!-- 隐藏眼睛图标（无眼珠子） -->
                            <svg class="w-6 h-6 text-white shrink-0" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                <path d="M2.5 12C4.6 8.2 8 6.3 12 6.3C16 6.3 19.4 8.2 21.5 12C19.4 15.8 16 17.7 12 17.7C8 17.7 4.6 15.8 2.5 12Z"></path>
                                <path d="M19.5 4.5L4.5 19.5"></path>
                            </svg>
                        </div>
                    </div>

                    <!-- 错误-隐藏 -->
                    <div class="gallery-panel p-8 space-y-6 flex flex-col justify-between">
                        <div class="space-y-1">
                            <h3 class="text-base font-bold text-[#E9BD85]" data-i18n-zh="错误-隐藏" data-i18n-en="Error - Hidden">错误-隐藏</h3>
                            <p class="text-xs text-gray-400" data-i18n-zh="错误密码/验证码隐藏状态下的输入框样式" data-i18n-en="Input field style for invalid password/verification code in hidden state">错误密码/验证码隐藏状态下的输入框样式</p>
                        </div>
                        <div class="casarte-box-style h-14 px-6 flex items-center justify-between">
                            <div class="flex items-center gap-4">
                                <span class="w-1 h-1 bg-[#FF3B30]"></span>
                                <span class="w-1 h-1 bg-[#FF3B30]"></span>
                                <span class="w-1 h-1 bg-[#FF3B30]"></span>
                                <span class="w-1 h-1 bg-[#FF3B30]"></span>
                                <span class="w-1 h-1 bg-[#FF3B30]"></span>
                                <span class="w-1 h-1 bg-[#FF3B30]"></span>
                            </div>
                            <!-- 隐藏眼睛图标（无眼珠子） -->
                            <svg class="w-6 h-6 text-white shrink-0" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                <path d="M2.5 12C4.6 8.2 8 6.3 12 6.3C16 6.3 19.4 8.2 21.5 12C19.4 15.8 16 17.7 12 17.7C8 17.7 4.6 15.8 2.5 12Z"></path>
                                <path d="M19.5 4.5L4.5 19.5"></path>
                            </svg>
                        </div>
                    </div>

                    <!-- 正确-显示 -->
                    <div class="gallery-panel p-8 space-y-6 flex flex-col justify-between">
                        <div class="space-y-1">
                            <h3 class="text-base font-bold text-[#E9BD85]" data-i18n-zh="正确-显示" data-i18n-en="Valid - Visible">正确-显示</h3>
                            <p class="text-xs text-gray-400" data-i18n-zh="正确密码/验证码显示状态下的输入框样式" data-i18n-en="Input field style for valid password/verification code in visible state">正确密码/验证码显示状态下的输入框样式</p>
                        </div>
                        <div class="casarte-box-style h-14 px-6 flex items-center justify-between">
                            <div class="flex items-center">
                                <span class="text-xl text-white tracking-wider font-medium" style="font-family: 'FZFangJHJW', sans-serif;">123456</span>
                                <span class="w-[1.5px] h-5 bg-[#E9BD85] ml-4 animate-pulse"></span>
                            </div>
                            <!-- 显示眼睛图标 -->
                            <svg class="w-6 h-6 text-white shrink-0" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                <path d="M2.5 12C4.6 8.2 8 6.3 12 6.3C16 6.3 19.4 8.2 21.5 12C19.4 15.8 16 17.7 12 17.7C8 17.7 4.6 15.8 2.5 12Z"></path>
                                <circle cx="12" cy="12" r="3.2"></circle>
                            </svg>
                        </div>
                    </div>

                    <!-- 错误-显示 -->
                    <div class="gallery-panel p-8 space-y-6 flex flex-col justify-between">
                        <div class="space-y-1">
                            <h3 class="text-base font-bold text-[#FF3B30]" data-i18n-zh="错误-显示" data-i18n-en="Error - Visible">错误-显示</h3>
                            <p class="text-xs text-gray-400" data-i18n-zh="错误密码/验证码显示状态下的输入框样式" data-i18n-en="Input field style for invalid password/verification code in visible state">错误密码/验证码显示状态下的输入框样式</p>
                        </div>
                        <div class="casarte-box-style h-14 px-6 flex items-center justify-between">
                            <span class="text-xl text-[#FF3B30] tracking-wider font-medium" style="font-family: 'FZFangJHJW', sans-serif;">123456</span>
                            <!-- 显示眼睛图标 -->
                            <svg class="w-6 h-6 text-white shrink-0" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                <path d="M2.5 12C4.6 8.2 8 6.3 12 6.3C16 6.3 19.4 8.2 21.5 12C19.4 15.8 16 17.7 12 17.7C8 17.7 4.6 15.8 2.5 12Z"></path>
                                <circle cx="12" cy="12" r="3.2"></circle>
                            </svg>
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
                                <li class="flex items-start gap-2.5"><span class="text-emerald-400 font-bold">✓</span> <span data-i18n-zh="标签持续可见，单位与范围明确" data-i18n-en="Labels remain visible with clear units and ranges">标签持续可见，单位与范围明确</span></li>
                                <li class="flex items-start gap-2.5"><span class="text-emerald-400 font-bold">✓</span> <span data-i18n-zh="使用匹配内容的键盘和输入类型" data-i18n-en="Use keyboards and input types matching the content">使用匹配内容的键盘和输入类型</span></li>
                                <li class="flex items-start gap-2.5"><span class="text-emerald-400 font-bold">✓</span> <span data-i18n-zh="校验信息说明原因与修正路径" data-i18n-en="Validation info explains reasons and correction paths">校验信息说明原因与修正路径</span></li>
                            </ul>
                        </div>
                        <div class="space-y-4">
                            <h3 class="text-base font-bold text-rose-400 tracking-wider" data-i18n-zh="避免" data-i18n-en="Avoid">避免</h3>
                            <ul class="space-y-3 text-sm text-gray-200 leading-relaxed">
                                <li class="flex items-start gap-2.5"><span class="text-rose-400 font-bold">✕</span> <span data-i18n-zh="用占位文字代替标签" data-i18n-en="Use placeholder text instead of labels">用占位文字代替标签</span></li>
                                <li class="flex items-start gap-2.5"><span class="text-rose-400 font-bold">✕</span> <span data-i18n-zh="输入时强制格式化导致光标跳动" data-i18n-en="Forced formatting during input causes cursor jumping">输入时强制格式化导致光标跳动</span></li>
                                <li class="flex items-start gap-2.5"><span class="text-rose-400 font-bold">✕</span> <span data-i18n-zh="仅用红色表达错误或自动覆盖设备值" data-i18n-en="Express errors only in red or automatically overwrite device values">仅用红色表达错误或自动覆盖设备值</span></li>
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