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
                        <h2 class="text-2xl md:text-3xl font-bold text-white btn-custom-font" data-i18n-zh="单选按钮概览" data-i18n-en="Overview & When to Use">单选按钮概览</h2>
                        <p class="text-sm text-gray-300 mt-1.5 leading-relaxed btn-custom-font" data-i18n-zh="单选框是用于在一组互斥选项中让用户选择唯一答案的交互组件。卡萨帝多终端统一提供清晰的选中与未选中视觉反馈及颜色语义规范。" data-i18n-en="A radio button is an interactive component that allows the user to select a single option from a set of mutually exclusive choices.">单选框是用于在一组互斥选项中让用户选择唯一答案的交互组件[cite: 4]。卡萨帝多终端统一提供清晰的选中与未选中视觉反馈及颜色语义规范。</p>
                    </div>
                </div>

                <div class="w-full aspect-[1364/442] bg-black/30 border border-white/5 flex items-center justify-center p-8 overflow-hidden rounded-none">
                    <img src="assets/component_radio_button/component_radio_button-1.png" alt="component_radio_button-1" class="w-[80%] h-[80%] object-contain">
                </div>
            </section>

            <hr class="border-t border-gray-800">

            <!-- ================= 02 状态与样式 ================= -->
            <section id="module-status-style" class="space-y-10">
                <div class="flex items-baseline gap-4">
                    <span class="module-num text-3xl text-[#E9BD85]">02</span>
                    <div>
                        <h2 class="text-2xl md:text-3xl font-bold text-white btn-custom-font">状态与样式</h2>
                        <p class="text-sm text-gray-300 mt-1.5 leading-relaxed btn-custom-font">选中状态和可用状态分别表达。单选框没有半选态，也不能通过再次点击清空；需要“无”时将其设为明确选项[cite: 4]。</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <!-- 默认 -->
                    <div class="gallery-panel p-6 space-y-4 rounded-none border border-white/5 bg-black/30">
                        <div class="text-xs text-gray-400 font-mono tracking-wider btn-custom-font">默认</div>
                        <div class="flex items-center gap-3 py-2">
                            <div class="w-5 h-5 rounded-full border-2 border-[#E9BD85] flex items-center justify-center"></div>
                            <span class="text-sm text-white btn-custom-font">示例选项</span>
                        </div>
                    </div>
                    <!-- 选中 -->
                    <div class="gallery-panel p-6 space-y-4 rounded-none border border-white/5 bg-black/30">
                        <div class="text-xs text-gray-400 font-mono tracking-wider btn-custom-font">选中</div>
                        <div class="flex items-center gap-3 py-2">
                            <div class="w-5 h-5 rounded-full border-2 border-[#E9BD85] flex items-center justify-center">
                                <div class="w-2.5 h-2.5 bg-[#E9BD85] rounded-full"></div>
                            </div>
                            <span class="text-sm text-white btn-custom-font">示例选项</span>
                        </div>
                    </div>
                    <!-- 悬停示意 -->
                    <div class="gallery-panel p-6 space-y-4 rounded-none border border-white/5 bg-black/30">
                        <div class="text-xs text-gray-400 font-mono tracking-wider btn-custom-font">悬停示意</div>
                        <div class="flex items-center gap-3 py-2">
                            <div class="w-5 h-5 rounded-full border-2 border-[#E9BD85] flex items-center justify-center"></div>
                            <span class="text-sm text-white btn-custom-font">示例选项</span>
                        </div>
                    </div>
                    <!-- 按下示意 (完美还原截图中的半透明扩散发光晕圈 + 金色实心内点) -->
                    <div class="gallery-panel p-6 space-y-4 rounded-none border border-white/5 bg-black/30">
                        <div class="text-xs text-gray-400 font-mono tracking-wider btn-custom-font">按下示意</div>
                        <div class="flex items-center gap-3 py-2">
                            <div class="w-7 h-7 rounded-full bg-[#E9BD85]/15 flex items-center justify-center">
                                <div class="w-5 h-5 rounded-full border-2 border-[#E9BD85] flex items-center justify-center bg-[#2B231D]">
                                    <div class="w-2.5 h-2.5 bg-[#E9BD85] rounded-full"></div>
                                </div>
                            </div>
                            <span class="text-sm text-white btn-custom-font">示例选项</span>
                        </div>
                    </div>
                    <!-- 禁用未选 -->
                    <div class="gallery-panel p-6 space-y-4 rounded-none border border-white/5 bg-black/30 opacity-40">
                        <div class="text-xs text-gray-400 font-mono tracking-wider btn-custom-font">禁用未选</div>
                        <div class="flex items-center gap-3 py-2">
                            <div class="w-5 h-5 rounded-full border-2 border-gray-600 flex items-center justify-center"></div>
                            <span class="text-sm text-gray-400 btn-custom-font">示例选项</span>
                        </div>
                    </div>
                    <!-- 禁用已选 -->
                    <div class="gallery-panel p-6 space-y-4 rounded-none border border-white/5 bg-black/30 opacity-40">
                        <div class="text-xs text-gray-400 font-mono tracking-wider btn-custom-font">禁用已选</div>
                        <div class="flex items-center gap-3 py-2">
                            <div class="w-5 h-5 rounded-full border-2 border-gray-600 flex items-center justify-center">
                                <div class="w-2.5 h-2.5 bg-gray-500 rounded-full"></div>
                            </div>
                            <span class="text-sm text-gray-400 btn-custom-font">示例选项</span>
                        </div>
                    </div>
                </div>

                <div class="p-4 bg-white/5 border border-white/10 rounded-none text-xs text-gray-300 leading-relaxed btn-custom-font">
                    <span class="text-[#E9BD85] font-bold">提示：</span>
                    <span>悬停、按下可根据实际场景选用。错误提示放在组下方，说明如何修正；运行锁定需保留已选内点与当前值。</span>
                </div>
            </section>

            <hr class="border-t border-gray-800">

            <!-- ================= 03 类型与交互 ================= -->
            <section id="module-type-interaction" class="space-y-10">
                <div class="flex items-baseline gap-4">
                    <span class="module-num text-3xl text-[#E9BD85]">03</span>
                    <div>
                        <h2 class="text-2xl md:text-3xl font-bold text-white btn-custom-font">类型与交互</h2>
                        <p class="text-sm text-gray-300 mt-1.5 leading-relaxed btn-custom-font">针对基础单选与按钮式单选在智能家电交互上的差异化布局规范。</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <!-- 基础单选 -->
                    <div class="gallery-panel p-8 space-y-6 rounded-none border border-white/5 bg-black/30">
                        <div class="space-y-2">
                            <h3 class="text-lg font-bold text-white btn-custom-font">基础单选</h3>
                            <p class="text-xs text-gray-400 btn-custom-font">短标签横排；整段文字与圆点共同构成点击区域。</p>
                        </div>
                        <div class="flex items-center gap-8 py-4" id="interactive-basic-radio">
                            <label class="flex items-center gap-2.5 cursor-pointer select-none group">
                                <input type="radio" name="demo-basic" value="1" class="hidden">
                                <div class="w-5 h-5 rounded-full border-2 border-gray-500 group-hover:border-[#E9BD85] flex items-center justify-center transition-colors">
                                    <div class="w-2.5 h-2.5 bg-[#E9BD85] rounded-full hidden"></div>
                                </div>
                                <span class="text-sm text-gray-300 group-hover:text-white btn-custom-font">1次</span>
                            </label>
                            <label class="flex items-center gap-2.5 cursor-pointer select-none group">
                                <input type="radio" name="demo-basic" value="2" checked class="hidden">
                                <div class="w-5 h-5 rounded-full border-2 border-[#E9BD85] flex items-center justify-center transition-colors">
                                    <div class="w-2.5 h-2.5 bg-[#E9BD85] rounded-full"></div>
                                </div>
                                <span class="text-sm text-white font-bold btn-custom-font">2次</span>
                            </label>
                            <label class="flex items-center gap-2.5 cursor-pointer select-none group">
                                <input type="radio" name="demo-basic" value="3" class="hidden">
                                <div class="w-5 h-5 rounded-full border-2 border-gray-500 group-hover:border-[#E9BD85] flex items-center justify-center transition-colors">
                                    <div class="w-2.5 h-2.5 bg-[#E9BD85] rounded-full hidden"></div>
                                </div>
                                <span class="text-sm text-gray-300 group-hover:text-white btn-custom-font">3次</span>
                            </label>
                        </div>
                    </div>

                    <!-- 按钮式单选 -->
                    <div class="gallery-panel p-8 space-y-6 rounded-none border border-white/5 bg-black/30">
                        <div class="space-y-2">
                            <h3 class="text-lg font-bold text-white btn-custom-font">按钮式单选</h3>
                            <p class="text-xs text-gray-400 btn-custom-font">用于短小、同等权重的档位；保持单选语义，窄屏改为纵排。</p>
                        </div>
                        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2" id="interactive-button-radio">
                            <button type="button" data-val="auto" style="width: 100%; aspect-ratio: 254 / 88;" class="bg-[#30271E] border-2 border-[#E9BD85] text-white text-xs font-bold text-center rounded-none flex items-center justify-center gap-2 transition-all shadow-md btn-custom-font">
                                <div class="w-4 h-4 rounded-full border-2 border-[#E9BD85] flex items-center justify-center"><div class="w-2 h-2 bg-[#E9BD85] rounded-full"></div></div>自动
                            </button>
                            <button type="button" data-val="low" style="width: 100%; aspect-ratio: 254 / 88;" class="bg-black/20 border-2 border-gray-600 text-gray-300 text-xs text-center rounded-none hover:border-gray-400 transition-all flex items-center justify-center gap-2 btn-custom-font">
                                <div class="w-4 h-4 rounded-full border-2 border-gray-400 flex items-center justify-center"></div>低
                            </button>
                            <button type="button" data-val="mid" style="width: 100%; aspect-ratio: 254 / 88;" class="bg-black/20 border-2 border-gray-600 text-gray-300 text-xs text-center rounded-none hover:border-gray-400 transition-all flex items-center justify-center gap-2 btn-custom-font">
                                <div class="w-4 h-4 rounded-full border-2 border-gray-400 flex items-center justify-center"></div>中
                            </button>
                            <button type="button" data-val="high" style="width: 100%; aspect-ratio: 254 / 88;" class="bg-black/20 border-2 border-gray-600 text-gray-300 text-xs text-center rounded-none hover:border-gray-400 transition-all flex items-center justify-center gap-2 btn-custom-font">
                                <div class="w-4 h-4 rounded-full border-2 border-gray-400 flex items-center justify-center"></div>高
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <hr class="border-t border-gray-800">

            <!-- ================= 04 组成与尺寸 ================= -->
            <section id="module-composition-size" class="space-y-10">
                <div class="flex items-baseline gap-4">
                    <span class="module-num text-3xl text-[#E9BD85]">04</span>
                    <div>
                        <h2 class="text-2xl md:text-3xl font-bold text-white btn-custom-font">组成与尺寸</h2>
                        <p class="text-sm text-gray-300 mt-1.5 leading-relaxed btn-custom-font">结构由组标题、圆形指示器、选项标签、可选说明和交互热区组成。说明与标签左对齐，多行内容顶对齐；热区之间不得重叠。</p>
                    </div>
                </div>

                <div class="gallery-panel p-0 overflow-hidden rounded-none border border-white/5 bg-black/30">
                    <div class="table-wrap">
                        <table class="spec-table">
                            <thead>
                                <tr>
                                    <th class="btn-custom-font">要素</th>
                                    <th class="btn-custom-font">尺寸规格</th>
                                    <th class="btn-custom-font">应用规则</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="font-bold text-white btn-custom-font">指示器</td>
                                    <td class="btn-custom-font">外圈：22 × 22 dp；选中内点：12 × 12 dp</td>
                                    <td class="btn-custom-font">选中状态使用实心圆点，避免用勾替代，以免与复选框的多选语义混淆。</td>
                                </tr>
                                <tr>
                                    <td class="font-bold text-white btn-custom-font">标签与说明</td>
                                    <td class="btn-custom-font">标签字号：20-24；说明字号：18-20</td>
                                    <td class="btn-custom-font">TFT 建议标签字号不小于 16 dp，远场场景按真实屏幕验证可读性。</td>
                                </tr>
                                <tr>
                                    <td class="font-bold text-white btn-custom-font">热区</td>
                                    <td class="btn-custom-font">最小热区：44 × 44 dp</td>
                                    <td class="btn-custom-font">家电触控建议热区高度为 48-56 dp。</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <hr class="border-t border-gray-800">

            <!-- ================= 05 交互与反馈规则 ================= -->
            <section id="module-interaction-feedback" class="space-y-10">
                <div class="flex items-baseline gap-4">
                    <span class="module-num text-3xl text-[#E9BD85]">05</span>
                    <div>
                        <h2 class="text-2xl md:text-3xl font-bold text-white btn-custom-font">交互与反馈规则</h2>
                        <p class="text-sm text-gray-300 mt-1.5 leading-relaxed btn-custom-font">明确选择结果的生效时机，并让界面状态与设备真实状态保持一致。</p>
                    </div>
                </div>

                <div class="gallery-panel p-0 overflow-hidden rounded-none border border-white/5 bg-black/30">
                    <div class="table-wrap">
                        <table class="spec-table">
                            <thead>
                                <tr>
                                    <th class="btn-custom-font">维度</th>
                                    <th class="btn-custom-font">规则说明</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="font-bold text-white btn-custom-font">选择切换</td>
                                    <td class="btn-custom-font">选择新选项时立即取消同组旧选项；再次点击当前项保持选中，不提供取消选中的空状态。</td>
                                </tr>
                                <tr>
                                    <td class="font-bold text-white btn-custom-font">生效方式</td>
                                    <td class="btn-custom-font">低风险设置可选择后立即生效；启动程序或高风险操作必须通过独立按钮确认。页面需明确说明采用哪种方式。</td>
                                </tr>
                                <tr>
                                    <td class="font-bold text-white btn-custom-font">同步反馈</td>
                                    <td class="btn-custom-font">选择后立即更新界面[cite: 4]；设备响应超过 300 ms 时显示“正在应用”并阻止重复操作。成功后确认结果，失败则恢复原值并说明原因。</td>
                                </tr>
                                <tr>
                                    <td class="font-bold text-white btn-custom-font">不可用状态</td>
                                    <td class="btn-custom-font">离线、童锁或运行限制导致选项不可用时，保留其位置并说明原因。当前选择失效时要求用户重新选择，不自动替换。</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <hr class="border-t border-gray-800">

            <!-- ================= 07 使用与验收 ================= -->
            <section id="module-best-practices" class="space-y-10">
                <div class="flex items-baseline gap-4">
                    <span class="module-num text-3xl text-[#E9BD85]">07</span>
                    <div>
                        <h2 class="text-2xl md:text-3xl font-bold text-white btn-custom-font">使用与验收</h2>
                        <p class="text-sm text-gray-300 mt-1.5 leading-relaxed btn-custom-font">规范设计师与开发团队在搭建 UI 与验收交付时的红线准则。</p>
                    </div>
                </div>

                <div class="gallery-panel p-8 md:p-12 space-y-8 rounded-none border border-white/5 bg-black/30">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div class="space-y-4">
                            <h3 class="text-base font-bold text-emerald-400 tracking-wider btn-custom-font">✓ 推荐</h3>
                            <ul class="space-y-3 text-sm text-gray-200 leading-relaxed">
                                <li class="flex items-start gap-2"><span class="text-emerald-400 font-bold">•</span> <span class="btn-custom-font">同组只放同一维度且彼此互斥的选项</span></li>
                                <li class="flex items-start gap-2"><span class="text-emerald-400 font-bold">•</span> <span class="btn-custom-font">保留当前选中项，并直接说明禁用原因</span></li>
                                <li class="flex items-start gap-2"><span class="text-emerald-400 font-bold">•</span> <span class="btn-custom-font">使用独立按钮启动程序或设置</span></li>
                            </ul>
                        </div>
                        <div class="space-y-4">
                            <h3 class="text-base font-bold text-rose-400 tracking-wider btn-custom-font">✕ 避免</h3>
                            <ul class="space-y-3 text-sm text-gray-200 leading-relaxed">
                                <li class="flex items-start gap-2"><span class="text-rose-400 font-bold">•</span> <span class="btn-custom-font">将程序、温度和附加功能混在同一组</span></li>
                                <li class="flex items-start gap-2"><span class="text-rose-400 font-bold">•</span> <span class="btn-custom-font">点击选项后立即启动高风险设备任务</span></li>
                                <li class="flex items-start gap-2"><span class="text-rose-400 font-bold">•</span> <span class="btn-custom-font">使用半选态或无提示地替换用户选择</span></li>
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

    // 绑定按钮式单选点击交互逻辑
    const buttonRadioGroup = document.getElementById('interactive-button-radio');
    if (buttonRadioGroup) {
        const buttons = buttonRadioGroup.querySelectorAll('button');
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                buttons.forEach(b => {
                    b.className = "bg-black/20 border-2 border-gray-600 text-gray-300 text-xs text-center rounded-none hover:border-gray-400 transition-all flex items-center justify-center gap-2 btn-custom-font";
                    const text = b.textContent.trim();
                    b.innerHTML = `<div class="w-4 h-4 rounded-full border-2 border-gray-400 flex items-center justify-center"></div>${text}`;
                });
                btn.className = "bg-[#30271E] border-2 border-[#E9BD85] text-white text-xs font-bold text-center rounded-none flex items-center justify-center gap-2 transition-all shadow-md btn-custom-font";
                const text = btn.textContent.trim();
                btn.innerHTML = `<div class="w-4 h-4 rounded-full border-2 border-[#E9BD85] flex items-center justify-center"><div class="w-2 h-2 bg-[#E9BD85] rounded-full"></div></div>${text}`;
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