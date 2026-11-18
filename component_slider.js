document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('component_slider');
    if (!container) return;

    container.innerHTML = `
        <div class="space-y-20">

            <!-- ================= 01 概览与何时使用 ================= -->
            <section id="module-overview" class="space-y-10">
                <div class="flex items-baseline gap-4">
                    <span class="module-num text-3xl text-[#E9BD85]">01</span>
                    <div>
                        <h2 class="text-2xl md:text-3xl font-bold text-white" data-i18n-zh="调控概览与何时使用" data-i18n-en="Overview & Usage Guidelines">调控概览与何时使用</h2>
                        <p class="text-sm text-gray-300 mt-1.5 leading-relaxed" data-i18n-zh="调控控件允许用户通过点击、滑动或滚动轻松调节参数。在卡萨帝触控屏界面中，需确保刻度读取清晰、触控响应即时且数值归位精准。" data-i18n-en="Control components allow users to adjust parameter values easily. Ensure precise readouts and instant tactile response across all displays.">调控控件允许用户通过点击、滑动或滚动轻松调节参数。在卡萨帝触控屏界面中，需确保刻度读取清晰、触控响应即时且数值归位精准。</p>
                    </div>
                </div>

                <!-- 01 全景概览图 -->
                <div class="w-full aspect-[1364/511] bg-black/30 flex items-center justify-center p-0 overflow-hidden">
                    <img src="assets/component_slider/component_slider-1.png" alt="component_slider-1" data-i18n-zh="组件全景概览图" data-i18n-en="Component Overview Diagram" class="w-full h-full object-cover">
                </div>

                <div class="gallery-panel p-8 space-y-3">
                    <h3 class="text-lg font-bold text-white" data-i18n-zh="何时使用" data-i18n-en="When to Use">何时使用</h3>
                    <ul class="space-y-2 text-sm text-gray-300 leading-relaxed list-disc list-inside">
                        <li data-i18n-zh="当需要对连续或离散的数值参数（如温度、音量、亮度等）进行实时微调时使用。" data-i18n-en="Used when real-time fine-tuning of continuous or discrete numeric parameters is needed.">当需要对连续或离散的数值参数（如温度、音量、亮度等）进行实时微调时使用。</li>
                        <li data-i18n-zh="根据交互场景与控件占用空间，灵活选用点击、单滑块、范围滑块或滚动调控形态。" data-i18n-en="Flexibly select click, single slider, range slider, or scroll control based on the interaction scenario.">根据交互场景与控件占用空间，灵活选用点击、单滑块、范围滑块或滚动调控形态。</li>
                    </ul>
                </div>
            </section>

            <hr class="border-t border-gray-800">

            <!-- ================= 02 组件构成 ================= -->
            <section id="module-component-composition" class="space-y-10">
                <div class="flex items-baseline gap-4">
                    <span class="module-num text-3xl text-[#E9BD85]">02</span>
                    <div>
                        <h2 class="text-2xl md:text-3xl font-bold text-white" data-i18n-zh="组件构成" data-i18n-en="Component Composition">组件构成</h2>
                        <p class="text-sm text-gray-300 mt-1.5 leading-relaxed" data-i18n-zh="当前值需标明单位，参数名称与可调范围应始终清晰可见。" data-i18n-en="Current values must indicate units; parameter names and adjustable ranges must remain clearly visible.">当前值需标明单位，参数名称与可调范围应始终清晰可见。</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-300">
                    <div class="gallery-panel p-6 space-y-2">
                        <div class="flex items-center gap-3 font-bold text-white"><span class="w-6 h-6 rounded-none bg-[#E9BD85]/20 text-[#E9BD85] flex items-center justify-center text-xs">1</span><span data-i18n-zh="标签与当前值" data-i18n-en="Label & Current Value">标签与当前值</span></div>
                        <p class="text-xs text-gray-400 pl-9" data-i18n-zh="说明调节对象，固定显示当前值与单位。" data-i18n-en="Indicates the target being adjusted, constantly displaying the current value and unit.">说明调节对象，固定显示当前值与单位。</p>
                    </div>
                    <div class="gallery-panel p-6 space-y-2">
                        <div class="flex items-center gap-3 font-bold text-white"><span class="w-6 h-6 rounded-none bg-[#E9BD85]/20 text-[#E9BD85] flex items-center justify-center text-xs">2</span><span data-i18n-zh="轨道" data-i18n-en="Track">轨道</span></div>
                        <p class="text-xs text-gray-400 pl-9" data-i18n-zh="已选轨道与未选轨道共同表达当前值和可调范围。" data-i18n-en="Selected and unselected tracks jointly express the current value and adjustable range.">已选轨道与未选轨道共同表达当前值和可调范围。</p>
                    </div>
                    <div class="gallery-panel p-6 space-y-2">
                        <div class="flex items-center gap-3 font-bold text-white"><span class="w-6 h-6 rounded-none bg-[#E9BD85]/20 text-[#E9BD85] flex items-center justify-center text-xs">3</span><span data-i18n-zh="滑块" data-i18n-en="Thumb">滑块</span></div>
                        <p class="text-xs text-gray-400 pl-9" data-i18n-zh="标识当前位置，通过拖动调整数值。" data-i18n-en="Identifies the current position and adjusts the value through dragging.">标识当前位置，通过拖动调整数值。</p>
                    </div>
                    <div class="gallery-panel p-6 space-y-2">
                        <div class="flex items-center gap-3 font-bold text-white"><span class="w-6 h-6 rounded-none bg-[#E9BD85]/20 text-[#E9BD85] flex items-center justify-center text-xs">4</span><span data-i18n-zh="刻度与数值气泡" data-i18n-en="Ticks & Value Bubble">刻度与数值气泡</span></div>
                        <p class="text-xs text-gray-400 pl-9" data-i18n-zh="按需标记关键数值，并在拖动时反馈当前值。" data-i18n-en="Marks key values on demand and provides real-time feedback during dragging.">按需标记关键数值，并在拖动时反馈当前值。</p>
                    </div>
                </div>

                <!-- 组件构成示意图（1360 × 298 px） -->
                <div class="gallery-panel p-0 overflow-hidden flex flex-col justify-between">
                    <div class="w-full aspect-[32/7] border-b border-gray-800 bg-black/30 overflow-hidden flex items-center justify-center">
                        <img
                            src="assets/component_slider/component_slider-2.png"
                            alt="组件构成示意图：标签与当前值、轨道、滑块、刻度与数值气泡"
                            data-i18n-zh="组件构成示意图：标签与当前值、轨道、滑块、刻度与数值气泡"
                            data-i18n-en="Component Composition Diagram: Label & Current Value, Track, Thumb, Ticks & Value Bubble"
                            class="w-full h-full object-contain"
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>

            <hr class="border-t border-gray-800">

            <!-- ================= 03 类型与适用场景 ================= -->
            <section id="module-types-and-scenarios" class="space-y-10">
                <div class="flex items-baseline gap-4">
                    <span class="module-num text-3xl text-[#E9BD85]">03</span>
                    <div>
                        <h2 class="text-2xl md:text-3xl font-bold text-white" data-i18n-zh="类型与适用场景" data-i18n-en="Types & Scenarios">类型与适用场景</h2>
                        <p class="text-sm text-gray-300 mt-1.5 leading-relaxed" data-i18n-zh="展示点击调控、滑块调控、滑动调控及范围调控等多种形态及具体适用场景。" data-i18n-en="Displays various control types and their applicable scenarios.">展示点击调控、滑块调控、滑动调控及范围调控等多种形态及具体适用场景。</p>
                    </div>
                </div>

                <!-- 4 张示意图 -->
                <div class="gallery-panel p-8 space-y-6">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center border-b border-gray-800 pb-6">
                        <div class="w-full aspect-[3/1] bg-black/30 overflow-hidden flex items-center justify-center">
                            <img
                                src="assets/component_slider/component_slider-3.png"
                                alt="点击调控示意图：按固定步长精确增减数值"
                                data-i18n-zh="点击调控示意图：按固定步长精确增减数值"
                                data-i18n-en="Step Control Diagram: Precise increment/decrement by fixed steps"
                                class="w-full h-full object-contain"
                                loading="lazy"
                            />
                        </div>
                        <div class="space-y-2">
                            <h3 class="text-lg font-bold text-[#E9BD85]" data-i18n-zh="点击调控" data-i18n-en="Step Control">点击调控</h3>
                            <p class="text-xs text-gray-300 leading-relaxed" data-i18n-zh="适用于按固定步长精确调整温度、时长等数值。单次点击完成一步增减，操作路径短，并立即反馈调整结果。" data-i18n-en="Suitable for precise adjustments of temperature, duration, etc., by fixed steps. Each tap completes a one-step increment/decrement with immediate feedback.">适用于按固定步长精确调整温度、时长等数值。单次点击完成一步增减，操作路径短，并立即反馈调整结果。</p>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center border-b border-gray-800 pb-6">
                        <div class="w-full aspect-[3/1] bg-black/30 overflow-hidden flex items-center justify-center">
                            <img
                                src="assets/component_slider/component_slider-4.png"
                                alt="滑块调控示意图：单一连续数值调节"
                                data-i18n-zh="滑块调控示意图：单一连续数值调节"
                                data-i18n-en="Slider Control Diagram: Single continuous value adjustment"
                                class="w-full h-full object-contain"
                                loading="lazy"
                            />
                        </div>
                        <div class="space-y-2">
                            <h3 class="text-lg font-bold text-[#E9BD85]" data-i18n-zh="滑块调控" data-i18n-en="Slider Control">滑块调控</h3>
                            <p class="text-xs text-gray-300 leading-relaxed" data-i18n-zh="适用于温度、亮度、时长等单一连续数值的高频调节。界面应固定显示当前值、单位与范围边界。" data-i18n-en="Suitable for high-frequency adjustment of single continuous values such as temperature, brightness, and duration. Displays current value, unit, and range boundaries.">适用于温度、亮度、时长等单一连续数值的高频调节。界面应固定显示当前值、单位与范围边界。</p>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center border-b border-gray-800 pb-6">
                        <div class="w-full aspect-[3/1] bg-black/30 overflow-hidden flex items-center justify-center">
                            <img
                                src="assets/component_slider/component_slider-5.png"
                                alt="滑动调控示意图：独立参数滑动调节"
                                data-i18n-zh="滑动调控示意图：独立参数滑动调节"
                                data-i18n-en="Swipe Control Diagram: Independent parameter swipe adjustment"
                                class="w-full h-full object-contain"
                                loading="lazy"
                            />
                        </div>
                        <div class="space-y-2">
                            <h3 class="text-lg font-bold text-[#E9BD85]" data-i18n-zh="滑动调控" data-i18n-en="Swipe/Scroll Control">滑动调控</h3>
                            <p class="text-xs text-gray-300 leading-relaxed" data-i18n-zh="适用于音量等语义明确、可作为页面视觉焦点的独立参数。图标用于辅助识别，不替代参数名称与当前值。" data-i18n-en="Suitable for independent parameters with clear semantics, such as volume. Icons aid recognition without replacing parameter names and current values.">适用于音量等语义明确、可作为页面视觉焦点的独立参数。图标用于辅助识别，不替代参数名称与当前值。</p>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div class="w-full aspect-[3/1] bg-black/30 overflow-hidden flex items-center justify-center">
                            <img
                                src="assets/component_slider/component_slider-6.png"
                                alt="范围调控示意图：上下限区间选择"
                                data-i18n-zh="范围调控示意图：上下限区间选择"
                                data-i18n-en="Range Control Diagram: Upper and lower limit range selection"
                                class="w-full h-full object-contain"
                                loading="lazy"
                            />
                        </div>
                        <div class="space-y-2">
                            <h3 class="text-lg font-bold text-[#E9BD85]" data-i18n-zh="范围调控" data-i18n-en="Range Control">范围调控</h3>
                            <p class="text-xs text-gray-300 leading-relaxed" data-i18n-zh="适用于湿度、温区或预约时段等上下限区间选择。两个滑块分别表达最小值与最大值，并保持合法顺序。" data-i18n-en="Suitable for upper and lower limit range selections such as humidity, temperature zones, or reservation slots. Two thumbs express minimum and maximum values respectively.">适用于湿度、温区或预约时段等上下限区间选择。两个滑块分别表达最小值与最大值，并保持合法顺序。</p>
                        </div>
                    </div>
                </div>
            </section>

            <hr class="border-t border-gray-800">

            <!-- ================= 04 尺寸与触控热区 ================= -->
            <section id="module-sizes-and-touch" class="space-y-10">
                <div class="flex items-baseline gap-4">
                    <span class="module-num text-3xl text-[#E9BD85]">04</span>
                    <div>
                        <h2 class="text-2xl md:text-3xl font-bold text-white" data-i18n-zh="尺寸与触控热区" data-i18n-en="Sizes & Touch Targets">尺寸与触控热区</h2>
                        <p class="text-sm text-gray-300 mt-1.5 leading-relaxed" data-i18n-zh="轨道长度随容器伸缩，轨道高度与滑块尺寸固定；视觉尺寸之外应保留不小于 44 × 44 dp 的透明触控热区。" data-i18n-en="Track length scales with container; track height and thumb size are fixed.">轨道长度随容器伸缩，轨道高度与滑块尺寸固定；视觉尺寸之外应保留不小于 44 × 44 dp 的透明触控热区。</p>
                    </div>
                </div>

                <div class="gallery-panel p-8 overflow-x-auto">
                    <table class="w-full text-left border-collapse text-sm text-gray-300">
                        <thead>
                            <tr class="border-b border-gray-800 text-white bg-white/5">
                                <th class="p-4" data-i18n-zh="尺寸" data-i18n-en="Size">尺寸</th>
                                <th class="p-4" data-i18n-zh="轨道高度" data-i18n-en="Track Height">轨道高度</th>
                                <th class="p-4" data-i18n-zh="滑块直径" data-i18n-en="Thumb Diameter">滑块直径</th>
                                <th class="p-4" data-i18n-zh="建议场景" data-i18n-en="Recommended Scenario">建议场景</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-800/50">
                            <tr>
                                <td class="p-4 font-medium text-[#E9BD85]" data-i18n-zh="小" data-i18n-en="Small">小</td>
                                <td class="p-4">16 dp</td>
                                <td class="p-4">32 dp</td>
                                <td class="p-4" data-i18n-zh="近距、小型控件区" data-i18n-en="Close-range, compact control areas">近距、小型控件区</td>
                            </tr>
                            <tr>
                                <td class="p-4 font-medium text-[#E9BD85]" data-i18n-zh="中" data-i18n-en="Medium">中</td>
                                <td class="p-4">20 dp</td>
                                <td class="p-4">40 dp</td>
                                <td class="p-4" data-i18n-zh="常规触控界面" data-i18n-en="Standard touch interfaces">常规触控界面</td>
                            </tr>
                            <tr>
                                <td class="p-4 font-medium text-[#E9BD85]" data-i18n-zh="大" data-i18n-en="Large">大</td>
                                <td class="p-4">24 dp</td>
                                <td class="p-4">48 dp</td>
                                <td class="p-4" data-i18n-zh="远距或核心调节" data-i18n-en="Long-distance or core adjustments">远距或核心调节</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <hr class="border-t border-gray-800">

            <!-- ================= 05 方向与布局 ================= -->
            <section id="module-orientation" class="space-y-10">
                <div class="flex items-baseline gap-4">
                    <span class="module-num text-3xl text-[#E9BD85]">05</span>
                    <div>
                        <h2 class="text-2xl md:text-3xl font-bold text-white" data-i18n-zh="方向与布局" data-i18n-en="Orientation & Layout">方向与布局</h2>
                        <p class="text-sm text-gray-300 mt-1.5 leading-relaxed" data-i18n-zh="支持横向与纵向两套主流布局方向，以适配不同的家电屏幕形态与操作空间。" data-i18n-en="Supports horizontal and vertical layout orientations to adapt to different appliance screen forms.">支持横向与纵向两套主流布局方向，以适配不同的家电屏幕形态与操作空间。</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="gallery-panel p-8 space-y-3">
                        <h3 class="text-lg font-bold text-[#E9BD85]" data-i18n-zh="横向" data-i18n-en="Horizontal">横向</h3>
                        <p class="text-xs text-gray-300 leading-relaxed" data-i18n-zh="默认方向，适合宽度充足的页面与卡片。数值从左到右递增；RTL 或业务语义相反时才反向。" data-i18n-en="Default orientation, suitable for pages and cards with sufficient width. Values increase from left to right; reversed only for RTL or opposite business semantics.">默认方向，适合宽度充足的页面与卡片。数值从左到右递增；RTL 或业务语义相反时才反向。</p>
                    </div>
                    <div class="gallery-panel p-8 space-y-3">
                        <h3 class="text-lg font-bold text-[#E9BD85]" data-i18n-zh="纵向" data-i18n-en="Vertical">纵向</h3>
                        <p class="text-xs text-gray-300 leading-relaxed" data-i18n-zh="用于窄屏、侧边控制或参数与空间方向一致的场景。数值默认从下向上递增。" data-i18n-en="Used for narrow screens, sidebar controls, or scenarios where parameters align with spatial directions. Values default to increasing from bottom to top.">用于窄屏、侧边控制或参数与空间方向一致的场景。数值默认从下向上递增。</p>
                    </div>
                </div>
            </section>

            <hr class="border-t border-gray-800">

            <!-- ================= 06 交互与反馈 ================= -->
            <section id="module-interaction" class="space-y-10">
                <div class="flex items-baseline gap-4">
                    <span class="module-num text-3xl text-[#E9BD85]">06</span>
                    <div>
                        <h2 class="text-2xl md:text-3xl font-bold text-white" data-i18n-zh="交互与反馈" data-i18n-en="Interaction & Feedback">交互与反馈</h2>
                        <p class="text-sm text-gray-300 mt-1.5 leading-relaxed" data-i18n-zh="规范滑动、点击及设备响应过程中的动态交互与触觉反馈原则。" data-i18n-en="Guidelines for dynamic interaction and tactile feedback during sliding, tapping, and device response.">规范滑动、点击及设备响应过程中的动态交互与触觉反馈原则。</p>
                    </div>
                </div>

                <div class="gallery-panel p-8 space-y-4">
                    <ul class="space-y-3 text-sm text-gray-300 leading-relaxed list-disc list-inside">
                        <li data-i18n-zh="点击轨道移动到最近合法值；拖动时连续更新界面，按 step 吸附。" data-i18n-en="Tap the track to move to the nearest valid value; continuously update the interface while dragging and snap to steps.">点击轨道移动到最近合法值；拖动时连续更新界面，按 step 吸附。</li>
                        <li data-i18n-zh="拖动期间显示数值气泡；松开后提交设备指令。关键值也应在固定位置同步显示，避免气泡消失后失去结果。" data-i18n-en="Display value bubbles during dragging; submit device commands upon release. Key values should also be displayed synchronously at fixed positions to avoid losing results when bubbles disappear.">拖动期间显示数值气泡；松开后提交设备指令。关键值也应在固定位置同步显示，避免气泡消失后失去结果。</li>
                        <li data-i18n-zh="设备响应超过 300 ms 时保留用户目标值并显示同步中；失败时回退到设备真实值并说明原因。" data-i18n-en="When device response exceeds 300ms, retain the user's target value and display 'Syncing'; revert to the actual device value and explain the reason upon failure.">设备响应超过 300 ms 时保留用户目标值并显示同步中；失败时回退到设备真实值并说明原因。</li>
                        <li data-i18n-zh="加减按钮每次改变一个步长；长按可连续调整，但应逐步加速且允许随时停止。" data-i18n-en="Increment/decrement buttons change by one step per tap; long-press allows continuous adjustment with gradual acceleration and instant stop.">加减按钮每次改变一个步长；长按可连续调整，但应逐步加速且允许随时停止。</li>
                        <li data-i18n-zh="最小值、最大值、当前值与单位需提供给辅助技术；范围滑块应分别命名上下限。" data-i18n-en="Minimum, maximum, current values, and units must be provided to assistive technologies; range sliders should name upper and lower limits separately.">最小值、最大值、当前值与单位需提供给辅助技术；范围滑块应分别命名上下限。</li>
                    </ul>
                </div>
            </section>

            <hr class="border-t border-gray-800">

            <!-- ================= 07 使用与验收 ================= -->
            <section id="module-best-practices" class="space-y-10">
                <div class="flex items-baseline gap-4">
                    <span class="module-num text-3xl text-[#E9BD85]">07</span>
                    <div>
                        <h2 class="text-2xl md:text-3xl font-bold text-white" data-i18n-zh="使用与验收" data-i18n-en="Usage & Acceptance">使用与验收</h2>
                        <p class="text-sm text-gray-300 mt-1.5 leading-relaxed" data-i18n-zh="规范设计师与开发团队在搭建 UI 与验收交付时的红线准则。" data-i18n-en="Guidelines for designers and developers during UI creation and acceptance delivery.">规范设计师与开发团队在搭建 UI 与验收交付时的红线准则。</p>
                    </div>
                </div>

                <div class="gallery-panel p-8 md:p-12 space-y-8">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div class="space-y-4">
                            <h3 class="text-base font-bold text-emerald-400 tracking-wider" data-i18n-zh="✓ 推荐" data-i18n-en="✓ Recommended">✓ 推荐</h3>
                            <ul class="space-y-3 text-sm text-gray-200 leading-relaxed">
                                <li class="flex items-start gap-2"><span class="text-emerald-400 font-bold">✓</span><span data-i18n-zh="显示当前值、单位和边界" data-i18n-en="Display current values, units, and boundaries">显示当前值、单位和边界</span></li>
                                <li class="flex items-start gap-2"><span class="text-emerald-400 font-bold">✓</span><span data-i18n-zh="让步长匹配设备真实能力" data-i18n-en="Ensure steps match actual device capabilities">让步长匹配设备真实能力</span></li>
                                <li class="flex items-start gap-2"><span class="text-emerald-400 font-bold">✓</span><span data-i18n-zh="拖动时实时反馈，结束后提交设备" data-i18n-en="Provide real-time feedback during dragging, submit to device upon completion">拖动时实时反馈，结束后提交设备</span></li>
                            </ul>
                        </div>
                        <div class="space-y-4">
                            <h3 class="text-base font-bold text-rose-400 tracking-wider" data-i18n-zh="✕ 避免" data-i18n-en="✕ Avoid">✕ 避免</h3>
                            <ul class="space-y-3 text-sm text-gray-200 leading-relaxed">
                                <li class="flex items-start gap-2"><span class="text-rose-400 font-bold">✕</span><span data-i18n-zh="用滑块输入必须精确记忆的数值" data-i18n-en="Use sliders to input values that require precise memorization">用滑块输入必须精确记忆的数值</span></li>
                                <li class="flex items-start gap-2"><span class="text-rose-400 font-bold">✕</span><span data-i18n-zh="刻度标签过密或互相遮挡" data-i18n-en="Tick labels that are too dense or overlap with each other">刻度标签过密或互相遮挡</span></li>
                                <li class="flex items-start gap-2"><span class="text-rose-400 font-bold">✕</span><span data-i18n-zh="用装饰图标替代清晰的参数标签" data-i18n-en="Use decorative icons to replace clear parameter labels">用装饰图标替代清晰的参数标签</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    `;

    // 完美衔接全局双语切换（支持文本内容与图片 alt 属性）
    const applyLang = () => {
        const lang = localStorage.getItem('haier-guideline-language') || 'zh';
        container.querySelectorAll('[data-i18n-zh][data-i18n-en]').forEach((el) => {
            if (el.tagName === 'IMG') {
                el.alt = el.dataset[lang === 'zh' ? 'i18nZh' : 'i18nEn'];
            } else {
                el.textContent = el.dataset[lang === 'zh' ? 'i18nZh' : 'i18nEn'];
            }
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