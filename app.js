/**
 * 資處一仁 英文科第一次段考・線上互動測驗平台
 * 核心應用邏輯與互動引擎 (增強版)
 */

// ==========================================
// 1. 考卷題目資料結構
// ==========================================
const EXAM_DATA = {
  sec1: [
    { id: "s1_1", num: 1, zh: "主題；學科", ans: "subject", clue: "s", hint: "s____ct (7 個字母)" },
    { id: "s1_2", num: 2, zh: "命令；掌握", ans: "command", clue: "c", hint: "c____nd (7 個字母)" },
    { id: "s1_3", num: 3, zh: "街角；角落", ans: "corner", clue: "c", hint: "c____er (6 個字母)" },
    { id: "s1_4", num: 4, zh: "電梯", ans: "elevator", clue: "e", hint: "e____tor (8 個字母)" },
    { id: "s1_5", num: 5, zh: "包裹", ans: "package", clue: "p", hint: "p____ge (7 個字母)" },
    { id: "s1_6", num: 6, zh: "結果", ans: "result", clue: "r", hint: "r____lt (6 個字母)" },
    { id: "s1_7", num: 7, zh: "目的", ans: "purpose", clue: "p", hint: "p____se (7 個字母)" },
    { id: "s1_8", num: 8, zh: "驚訝", ans: "surprise", clue: "s", hint: "s____se (8 個字母)" },
    { id: "s1_9", num: 9, zh: "請求；要求", ans: "request", clue: "r", hint: "r____st (7 個字母)" },
    { id: "s1_10", num: 10, zh: "關係", ans: "relation", clue: "r", hint: "r____on (8 個字母)" }
  ],

  sec2: [
    {
      id: "s2_1",
      num: 1,
      clue: "p",
      before: "Tom seldom talks about his",
      after: "life, so I don't know much about him.",
      ans: "personal",
      expl: "personal life 代表「私生活、個人隱私」，形容詞修飾名詞 life。"
    },
    {
      id: "s2_2",
      num: 2,
      clue: "i",
      before: "Let me",
      after: "myself. My name is Andy.",
      ans: "introduce",
      expl: "introduce oneself 為「自我介紹」，Let + 受詞 + 原形動詞。"
    },
    {
      id: "s2_3",
      num: 3,
      clue: "m",
      before: "The reading club has six",
      after: ". They meet once a month.",
      ans: "members",
      expl: "有 6 位成員，member 必須使用複數形 members。"
    },
    {
      id: "s2_4",
      num: 4,
      clue: "r",
      before: "Everyone needs to show",
      after: "for their parents.",
      ans: "respect",
      expl: "show respect for... 代表「表達對...的尊敬」，respect 為不可數名詞。"
    },
    {
      id: "s2_5",
      num: 5,
      clue: "T",
      before: "Henry didn't prepare for the test.",
      after: ", he didn't pass it.",
      ans: ["Therefore", "therefore"],
      displayAns: "Therefore",
      expl: "Therefore 代表「因此、所以」，放於句首需大寫。"
    },
    {
      id: "s2_6",
      num: 6,
      clue: "s",
      before: "For Chinese people, the color red is a",
      after: "of luck.",
      ans: "symbol",
      expl: "a symbol of luck 代表「好運的象徵」，可數名詞單數。"
    },
    {
      id: "s2_7",
      num: 7,
      clue: "l",
      before: "Julia and her boyfriend are",
      after: "to get married next year.",
      ans: "likely",
      expl: "be likely to + 原形動詞，表示「很有可能會...」。"
    },
    {
      id: "s2_8",
      num: 8,
      clue: "t",
      before: "Emily followed the family",
      after: "and became a cook.",
      ans: "tradition",
      expl: "family tradition 代表「家族傳統」，受詞需用名詞 tradition，切勿誤寫為形容詞 traditional。"
    },
    {
      id: "s2_9",
      num: 9,
      clue: "s",
      before: "My grandma enjoys learning computer",
      after: ".",
      ans: ["skills", "skill"],
      displayAns: "skills",
      expl: "computer skills 代表「電腦技能」，通常習慣使用複數形 skills。"
    },
    {
      id: "s2_10",
      num: 10,
      clue: "i",
      before: "The man",
      after: "everyone at the party with his funny tricks.",
      ans: "impressed",
      expl: "impress 使...留下深刻印象，此處為過去式事件，需加 ed 變為 impressed。"
    }
  ],

  sec3: [
    { id: "s3_1", num: 1, en: "Fine, thank you. And how are you?", ans: "C", zh: "很好，謝謝，你也好嗎？" },
    { id: "s3_2", num: 2, en: "How are you?", ans: "E", zh: "你好嗎？" },
    { id: "s3_3", num: 3, en: "I've caught a cold.", ans: "B", zh: "我感冒了。" },
    { id: "s3_4", num: 4, en: "I appreciate it.", ans: "A", zh: "非常感謝。" },
    { id: "s3_5", num: 5, en: "What's wrong with you?", ans: "D", zh: "怎麼啦？" }
  ],

  sec5: [
    {
      id: "s5_1",
      num: 1,
      zh: "那名演員穿上他的戲服，然後走上舞臺。",
      template: [
        { text: "The actor put on his " },
        { blankId: "s5_1_a", ans: "costume", clue: "c", width: "105px", hint: "戲服" },
        { text: " and walked on to the " },
        { blankId: "s5_1_b", ans: "stage", clue: "s", width: "95px", hint: "舞臺" },
        { text: "." }
      ],
      expl: "costume (戲服), stage (舞臺)。"
    },
    {
      id: "s5_2",
      num: 2,
      zh: "除了英文之外，John 還會說日文和韓文。",
      template: [
        { blankId: "s5_2_a", ans: ["In", "in"], displayAns: "In", clue: "I", width: "60px" },
        { blankId: "s5_2_b", ans: "addition", clue: "a", width: "100px" },
        { blankId: "s5_2_c", ans: "to", clue: "t", width: "60px" },
        { text: " English, John can speak Japanese and Korean." }
      ],
      expl: "In addition to + N/V-ing 代表「除了...之外（還有）」。"
    },
    {
      id: "s5_3",
      num: 3,
      zh: "Karen 擅長烹飪。事實上，她正計畫要開一間小餐館。",
      template: [
        { text: "Karen is good at cooking. " },
        { blankId: "s5_3_a", ans: ["In", "in"], displayAns: "In", clue: "I", width: "60px" },
        { blankId: "s5_3_b", ans: "fact", clue: "f", width: "70px" },
        { text: ", she is planning to open a small restaurant." }
      ],
      expl: "In fact 代表「事實上、實際上」。"
    },
    {
      id: "s5_4",
      num: 4,
      zh: "短暫休息後，我們準備好繼續前進。",
      template: [
        { text: "After a short break, we were ready to " },
        { blankId: "s5_4_a", ans: "move", clue: "m", width: "80px" },
        { blankId: "s5_4_b", ans: "on", clue: "o", width: "60px" },
        { text: "." }
      ],
      expl: "move on 代表「繼續前進、往前走」。"
    },
    {
      id: "s5_5",
      num: 5,
      zh: "請隨意在房子四處參觀。",
      template: [
        { text: "Please feel free to " },
        { blankId: "s5_5_a", ans: "look", clue: "l", width: "80px" },
        { blankId: "s5_5_b", ans: "around", clue: "a", width: "90px" },
        { text: " the house." }
      ],
      expl: "feel free to VR (隨意做...)，look around (四處參觀、環顧)。"
    },
    {
      id: "s5_6",
      num: 6,
      zh: "小男孩等不及要吹熄他生日蛋糕上的蠟燭。",
      template: [
        { text: "The little boy couldn't wait to " },
        { blankId: "s5_6_a", ans: "blow", clue: "b", width: "80px" },
        { blankId: "s5_6_b", ans: "out", clue: "o", width: "60px" },
        { text: " the candles on his birthday cake." }
      ],
      expl: "couldn't wait to + VR (迫不及待)，blow out (吹熄)。"
    },
    {
      id: "s5_7",
      num: 7,
      zh: "Nancy 打開電風扇來驅逐蒼蠅。",
      template: [
        { text: "Nancy turned on the fan to " },
        { blankId: "s5_7_a", ans: "keep", clue: "k", width: "80px" },
        { text: " the flies " },
        { blankId: "s5_7_b", ans: "away", clue: "a", width: "80px" },
        { text: "." }
      ],
      expl: "keep ... away 代表「驅趕、使...遠離」。"
    },
    {
      id: "s5_8",
      num: 8,
      zh: "我們的花園裡有不同種類的花，例如玫瑰和百合。",
      template: [
        { text: "There are different kinds of flowers in our garden. " },
        { blankId: "s5_8_a", ans: ["For", "for"], displayAns: "For", clue: "F", width: "65px" },
        { blankId: "s5_8_b", ans: "example", clue: "e", width: "100px" },
        { text: ", we have roses and lilies." }
      ],
      expl: "For example 代表「例如」，放句首 F 大寫。"
    },
    {
      id: "s5_9",
      num: 9,
      zh: "所有球員都應該按照規則進行籃球賽。",
      template: [
        { text: "All of the players should play the basketball game " },
        { blankId: "s5_9_a", ans: "according", clue: "a", width: "110px" },
        { blankId: "s5_9_b", ans: "to", clue: "t", width: "60px" },
        { text: " the rules." }
      ],
      expl: "according to 代表「根據、按照」。"
    },
    {
      id: "s5_10",
      num: 10,
      zh: "我們很期待見到你。",
      template: [
        { text: "We " },
        { blankId: "s5_10_a", ans: "look", clue: "l", width: "75px" },
        { blankId: "s5_10_b", ans: "forward", clue: "f", width: "100px" },
        { blankId: "s5_10_c", ans: "to", clue: "t", width: "60px" },
        { text: " seeing you." }
      ],
      expl: "look forward to + V-ing 代表「期待...」，to 為介系詞後接 seeing。"
    }
  ]
};

// ==========================================
// 2. 音效生成器 (Web Audio API)
// ==========================================
class SoundFX {
  constructor() {
    this.enabled = true;
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playPop() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(440, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.08);
    gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.08);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.08);
  }

  playCorrect() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    [523.25, 659.25, 783.99].forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + idx * 0.08);
      gain.gain.setValueAtTime(0.15, now + idx * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.25);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now + idx * 0.08);
      osc.stop(now + idx * 0.08 + 0.25);
    });
  }

  playWrong() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(220, now);
    osc.frequency.exponentialRampToValueAtTime(140, now + 0.2);
    gain.gain.setValueAtTime(0.1, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.2);
  }

  playVictory() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.5];
    notes.forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + i * 0.12);
      gain.gain.setValueAtTime(0.2, now + i * 0.12);
      gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.12 + 0.4);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now + i * 0.12);
      osc.stop(now + i * 0.12 + 0.4);
    });
  }
}

const sfx = new SoundFX();

// ==========================================
// 3. 彩帶禮花粒子系統 (Canvas Confetti)
// ==========================================
class ConfettiCannon {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas ? this.canvas.getContext('2d') : null;
    this.particles = [];
    this.animating = false;
    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  fire(count = 90) {
    if (!this.ctx) return;
    const colors = ['#6366f1', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b', '#38bdf8'];
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: window.innerWidth / 2 + (Math.random() - 0.5) * 300,
        y: window.innerHeight / 2,
        w: Math.random() * 9 + 4,
        h: Math.random() * 6 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 16,
        vy: (Math.random() - 0.8) * 18,
        gravity: 0.45,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 12,
        opacity: 1
      });
    }
    if (!this.animating) {
      this.animating = true;
      this.loop();
    }
  }

  loop() {
    if (!this.animating) return;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.rotation += p.rotationSpeed;
      p.opacity -= 0.008;

      if (p.opacity <= 0 || p.y > this.canvas.height + 50) {
        this.particles.splice(i, 1);
        continue;
      }

      this.ctx.save();
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate((p.rotation * Math.PI) / 180);
      this.ctx.globalAlpha = p.opacity;
      this.ctx.fillStyle = p.color;
      this.ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      this.ctx.restore();
    }

    if (this.particles.length > 0) {
      requestAnimationFrame(() => this.loop());
    } else {
      this.animating = false;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }
}

// ==========================================
// 4. 測驗主要狀態控制器 (ExamController)
// ==========================================
class ExamController {
  constructor() {
    this.totalBlanks = 52;
    this.confetti = new ConfettiCannon('confettiCanvas');
    
    // 計時器狀態
    this.seconds = 0;
    this.timerInterval = null;
    this.timerPaused = false;

    // 設定選項
    this.instantFeedback = true;
    this.showMistakesOnly = false;
    this.lastFocusedMatchInput = null;

    this.init();
  }

  init() {
    this.renderSection1();
    this.renderSection2();
    this.renderSection3();
    this.renderSection5();
    this.bindEvents();
    this.startTimer();
    this.updateProgress();
    this.loadSavedData();
  }

  // --- 題目渲染 ---
  renderSection1() {
    const container = document.getElementById('sec1Grid');
    if (!container) return;
    container.innerHTML = EXAM_DATA.sec1.map(item => `
      <div class="vocab-item" id="card_${item.id}" data-card-for="${item.id}">
        <div class="vocab-prompt">
          <div>
            <span class="vocab-prompt-num">${item.num}.</span>
            <span class="vocab-prompt-zh">${item.zh}</span>
          </div>
        </div>
        <div class="vocab-input-row">
          <input type="text" class="exam-input blank-input" id="${item.id}" data-ans="${item.ans}" placeholder="請填入英文單字" autocomplete="off" spellcheck="false">
        </div>
        <div class="vocab-feedback" id="fb_${item.id}"></div>
      </div>
    `).join('');
  }

  renderSection2() {
    const container = document.getElementById('sec2List');
    if (!container) return;
    container.innerHTML = EXAM_DATA.sec2.map(item => {
      const ansData = Array.isArray(item.ans) ? item.ans.join('|') : item.ans;
      const display = item.displayAns || (Array.isArray(item.ans) ? item.ans[0] : item.ans);
      return `
        <div class="q-sentence-card" id="card_${item.id}" data-card-for="${item.id}">
          <div class="q-sentence-body">
            <span class="q-num">${item.num}.</span>
            ${item.before}
            <span class="inline-input-wrap">
              <input type="text" class="exam-input blank-input" id="${item.id}" data-ans="${ansData}" data-display-ans="${display}" placeholder="請填空" autocomplete="off" spellcheck="false">
            </span>
            ${item.after}
          </div>
          <div class="q-expl-box" id="fb_${item.id}">
            💡 正解：<strong class="feedback-ans">${display}</strong>。${item.expl}
          </div>
        </div>
      `;
    }).join('');
  }

  renderSection3() {
    const container = document.getElementById('sec3List');
    if (!container) return;
    container.innerHTML = EXAM_DATA.sec3.map(item => `
      <div class="matching-item" id="card_${item.id}" data-card-for="${item.id}">
        <input type="text" class="exam-input match-input blank-input" id="${item.id}" data-ans="${item.ans}" maxlength="1" placeholder="選項">
        <div class="match-en">
          <span class="q-num">${item.num}.</span> ${item.en}
        </div>
        <div class="match-ans-label" id="fb_${item.id}">
          正解：<strong>${item.ans}</strong> (${item.zh})
        </div>
      </div>
    `).join('');
  }

  renderSection5() {
    const container = document.getElementById('sec5List');
    if (!container) return;
    container.innerHTML = EXAM_DATA.sec5.map(item => {
      let sentenceHtml = '';
      item.template.forEach(part => {
        if (part.text) {
          sentenceHtml += part.text;
        } else if (part.blankId) {
          const ansData = Array.isArray(part.ans) ? part.ans.join('|') : part.ans;
          const display = part.displayAns || (Array.isArray(part.ans) ? part.ans[0] : part.ans);
          sentenceHtml += `
            <span class="trans-blank-wrap">
              <input type="text" class="exam-input trans-input blank-input" id="${part.blankId}" data-ans="${ansData}" data-display-ans="${display}" style="width: ${part.width || '95px'}" placeholder="請填空" autocomplete="off" spellcheck="false">
            </span>
          `;
        }
      });

      return `
        <div class="trans-item" id="card_${item.id}" data-card-for="${item.id}">
          <div class="trans-zh">
            <span class="trans-num">${item.num}.</span> ${item.zh}
          </div>
          <div class="trans-en">
            ${sentenceHtml}
          </div>
          <div class="trans-hint-pill" id="fb_${item.id}">
            💡 重點解析：${item.expl}
          </div>
        </div>
      `;
    }).join('');
  }

  // --- 事件綁定 ---
  bindEvents() {
    // 監聽所有填空輸入
    document.querySelectorAll('.blank-input, .cloze-input').forEach(input => {
      input.addEventListener('input', () => {
        this.updateProgress();
        this.saveCurrentInputs();
      });

      input.addEventListener('focus', (e) => {
        if (e.target.classList.contains('match-input')) {
          this.lastFocusedMatchInput = e.target;
        }
      });

      input.addEventListener('blur', (e) => {
        if (this.instantFeedback && e.target.value.trim() !== '') {
          this.checkSingleInput(e.target);
        }
      });

      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          this.focusNextInput(e.target);
        }
      });
    });

    // 點擊第三大題選項晶片填入答案
    document.querySelectorAll('#matchingOptionChips .option-pill').forEach(btn => {
      btn.addEventListener('click', (e) => {
        sfx.playPop();
        const key = btn.dataset.key;
        let target = this.lastFocusedMatchInput;
        if (!target) {
          // 找第一個空的 match-input
          const empty = Array.from(document.querySelectorAll('.match-input')).find(inp => inp.value.trim() === '');
          target = empty || document.querySelector('.match-input');
        }
        if (target) {
          target.value = key;
          target.focus();
          if (this.instantFeedback) this.checkSingleInput(target);
          this.updateProgress();
          this.saveCurrentInputs();
        }
      });
    });



    // 字體縮放按鈕
    const fontInc = document.getElementById('fontIncBtn');
    const fontDec = document.getElementById('fontDecBtn');
    if (fontInc) {
      fontInc.addEventListener('click', () => {
        const cur = document.body.getAttribute('data-font-size') || 'medium';
        const next = cur === 'small' ? 'medium' : 'large';
        document.body.setAttribute('data-font-size', next);
      });
    }
    if (fontDec) {
      fontDec.addEventListener('click', () => {
        const cur = document.body.getAttribute('data-font-size') || 'medium';
        const next = cur === 'large' ? 'medium' : 'small';
        document.body.setAttribute('data-font-size', next);
      });
    }

    // 切換即時反饋
    const instantToggle = document.getElementById('instantFeedbackToggle');
    if (instantToggle) {
      instantToggle.addEventListener('change', (e) => {
        this.instantFeedback = e.target.checked;
        if (this.instantFeedback) {
          this.checkAllInputs(false);
        }
      });
    }

    // 只看錯題切換
    const mistakeToggle = document.getElementById('showMistakesOnlyToggle');
    if (mistakeToggle) {
      mistakeToggle.addEventListener('change', (e) => {
        this.showMistakesOnly = e.target.checked;
        this.filterMistakesView();
      });
    }

    // 查看全部解答按鈕
    const showAllBtn = document.getElementById('showAllAnswersBtn');
    if (showAllBtn) {
      showAllBtn.addEventListener('click', () => {
        sfx.playPop();
        this.revealAllAnswers();
      });
    }

    // 全部清空重測按鈕
    const resetBtn = document.getElementById('resetAllBtn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        if (confirm('確定要清空所有已填寫的答案，並重新開始測驗嗎？')) {
          sfx.playPop();
          this.resetAll();
        }
      });
    }

    // 送出批改按鈕
    const submitBtn = document.getElementById('submitExamBtn');
    const bottomCheckBtn = document.getElementById('bottomCheckBtn');
    [submitBtn, bottomCheckBtn].forEach(btn => {
      if (btn) {
        btn.addEventListener('click', () => {
          this.submitAndCalculate();
        });
      }
    });

    // 複製錯題本按鈕
    const copyWrongBtn = document.getElementById('modalCopyWrongBtn');
    if (copyWrongBtn) {
      copyWrongBtn.addEventListener('click', () => {
        this.copyWrongQuestionsToClipboard();
      });
    }

    // Modal 關閉與按鈕
    const closeModal = document.getElementById('closeModalBtn');
    if (closeModal) {
      closeModal.addEventListener('click', () => {
        document.getElementById('resultModal').classList.remove('is-open');
      });
    }
    const modalRetryBtn = document.getElementById('modalRetryBtn');
    if (modalRetryBtn) {
      modalRetryBtn.addEventListener('click', () => {
        document.getElementById('resultModal').classList.remove('is-open');
        this.resetAll();
      });
    }
    const modalReviewBtn = document.getElementById('modalReviewMistakesBtn');
    if (modalReviewBtn) {
      modalReviewBtn.addEventListener('click', () => {
        document.getElementById('resultModal').classList.remove('is-open');
        const mistakeBox = document.getElementById('showMistakesOnlyToggle');
        if (mistakeBox) {
          mistakeBox.checked = true;
          this.showMistakesOnly = true;
          this.filterMistakesView();
        }
      });
    }

    // 計時器暫停/開始
    const timerBtn = document.getElementById('toggleTimerBtn');
    if (timerBtn) {
      timerBtn.addEventListener('click', () => {
        this.toggleTimer();
      });
    }

    // 主題切換 (深淺模式)
    const themeBtn = document.getElementById('themeToggleBtn');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        this.toggleTheme();
      });
    }

    // 音效開關
    const sfxBtn = document.getElementById('sfxToggleBtn');
    if (sfxBtn) {
      sfxBtn.addEventListener('click', () => {
        sfx.enabled = !sfx.enabled;
        const icon = document.getElementById('sfxIcon');
        if (icon) icon.textContent = sfx.enabled ? '🔊' : '🔇';
        sfxBtn.title = sfx.enabled ? '切換音效 (已開啟)' : '切換音效 (已靜音)';
      });
    }



    // 錨點標籤滾動高亮
    window.addEventListener('scroll', () => {
      const sections = ['section1', 'section2', 'section3', 'section4', 'section5'];
      const scrollY = window.pageYOffset + 150;
      sections.forEach((id, i) => {
        const sec = document.getElementById(id);
        if (sec) {
          const top = sec.offsetTop;
          const height = sec.offsetHeight;
          const link = document.querySelector(`.tab-link[href="#${id}"]`);
          if (scrollY >= top && scrollY < top + height) {
            document.querySelectorAll('.tab-link').forEach(l => l.classList.remove('active'));
            if (link) link.classList.add('active');
          }
        }
      });
    });
  }

  // --- 自動跳到下一個輸入框 ---
  focusNextInput(current) {
    const all = Array.from(document.querySelectorAll('.blank-input, .cloze-input'));
    const idx = all.indexOf(current);
    if (idx !== -1 && idx + 1 < all.length) {
      all[idx + 1].focus();
    }
  }

  // --- 單一格檢驗 ---
  checkSingleInput(input) {
    const rawVal = input.value.trim();
    if (rawVal === '') {
      input.classList.remove('is-correct', 'is-wrong');
      return null;
    }

    const acceptedStr = input.dataset.ans || '';
    const acceptedAnswers = acceptedStr.split('|').map(a => a.trim().toLowerCase());
    const isCorrect = acceptedAnswers.includes(rawVal.toLowerCase());

    if (isCorrect) {
      input.classList.add('is-correct');
      input.classList.remove('is-wrong');
      sfx.playCorrect();
    } else {
      input.classList.add('is-wrong');
      input.classList.remove('is-correct');
      sfx.playWrong();
    }

    return isCorrect;
  }

  // --- 全卷批改與計分 ---
  checkAllInputs(playSound = true) {
    const allInputs = document.querySelectorAll('.blank-input, .cloze-input');
    let correctCount = 0;
    let wrongCount = 0;

    allInputs.forEach(input => {
      const rawVal = input.value.trim();
      const acceptedStr = input.dataset.ans || '';
      const accepted = acceptedStr.split('|').map(a => a.trim().toLowerCase());
      const isCorrect = accepted.includes(rawVal.toLowerCase());

      if (isCorrect) {
        input.classList.add('is-correct');
        input.classList.remove('is-wrong');
        correctCount++;
      } else {
        input.classList.add('is-wrong');
        input.classList.remove('is-correct');
        wrongCount++;
      }
    });

    // 計算總分 (滿分 100)
    const score = Math.round((correctCount / this.totalBlanks) * 100);

    // 更新即時得分顯示
    const liveScore = document.getElementById('liveScoreNumber');
    if (liveScore) liveScore.textContent = score;

    const bannerScore = document.getElementById('bannerScore');
    if (bannerScore) bannerScore.textContent = `${score} 分`;

    // 展開所有反饋
    document.querySelectorAll('.vocab-feedback, .q-expl-box, .match-ans-label, .trans-hint-pill, #sec4Expl').forEach(el => {
      el.classList.add('show');
      el.style.display = 'block';
    });

    if (playSound) {
      if (score >= 90) {
        sfx.playVictory();
        this.confetti.fire(120);
      } else if (score >= 60) {
        sfx.playCorrect();
      } else {
        sfx.playWrong();
      }
    }

    return { correctCount, wrongCount, score };
  }

  // --- 送出批改並彈出詳細報告 ---
  submitAndCalculate() {
    const result = this.checkAllInputs(true);

    const modal = document.getElementById('resultModal');
    const modalScore = document.getElementById('modalFinalScore');
    const modalCorrect = document.getElementById('modalCorrectCount');
    const modalWrong = document.getElementById('modalWrongCount');
    const modalAccuracy = document.getElementById('modalAccuracy');
    const modalTime = document.getElementById('modalTimeSpent');
    const modalComment = document.getElementById('modalComment');
    const modalTrophy = document.getElementById('modalTrophy');
    const modalGrade = document.getElementById('modalGradeBadge');

    modalScore.textContent = result.score;
    modalCorrect.textContent = result.correctCount;
    modalWrong.textContent = result.wrongCount;
    const accuracy = Math.round((result.correctCount / this.totalBlanks) * 100);
    modalAccuracy.textContent = `${accuracy}%`;

    const timerDisp = document.getElementById('timerDisplay');
    modalTime.textContent = timerDisp ? timerDisp.textContent : '00:00';

    // 等第判定
    let grade = 'C 等第';
    if (result.score === 100) {
      grade = 'S 滿分等第';
      modalTrophy.textContent = '👑';
      modalComment.textContent = '🎉 完美滿分 100 分！資處一仁英文科第一次段考內容已完全精通！';
      modalComment.style.background = 'var(--success-bg)';
      modalComment.style.color = 'var(--success)';
    } else if (result.score >= 90) {
      grade = 'A+ 優異等第';
      modalTrophy.textContent = '🌟';
      modalComment.textContent = '💪 成績優異！段考實力堅強，只要留意少數細節即可直取滿分！';
      modalComment.style.background = 'var(--success-bg)';
      modalComment.style.color = 'var(--success)';
    } else if (result.score >= 80) {
      grade = 'A 良好等第';
      modalTrophy.textContent = '✨';
      modalComment.textContent = '👍 表現良好！錯題大多集中在時態或介系詞，點擊「複習錯題」加強！';
      modalComment.style.background = 'var(--success-bg)';
      modalComment.style.color = 'var(--success)';
    } else if (result.score >= 60) {
      grade = 'B 及格等第';
      modalTrophy.textContent = '📖';
      modalComment.textContent = '⚡ 順利及格！請加強單字拼字與第 5 大題的常用片語搭配。';
      modalComment.style.background = 'var(--warning-bg)';
      modalComment.style.color = 'var(--warning)';
    } else {
      grade = 'C 待加強等第';
      modalTrophy.textContent = '💡';
      modalComment.textContent = '📝 建議點擊「查看所有解答」或「複製錯題本」，重新背誦常考重點再測一次！';
      modalComment.style.background = 'var(--danger-bg)';
      modalComment.style.color = 'var(--danger)';
    }

    if (modalGrade) modalGrade.textContent = grade;
    modal.classList.add('is-open');
  }

  // --- 複製錯題本到剪貼簿 ---
  copyWrongQuestionsToClipboard() {
    const wrongList = [];
    document.querySelectorAll('.blank-input, .cloze-input').forEach(inp => {
      if (inp.classList.contains('is-wrong') || inp.value.trim() === '') {
        const correct = inp.dataset.displayAns || (inp.dataset.ans ? inp.dataset.ans.split('|')[0] : '');
        wrongList.push(`• 填空題 [${inp.id}]：您的答案「${inp.value || '(未作答)'}」❌ → 正確答案「${correct}」✅`);
      }
    });

    if (wrongList.length === 0) {
      alert('太厲害了！目前沒有任何錯題，不需要複製錯題本！🎉');
      return;
    }

    const textToCopy = `【資處一仁 英文科第一次段考・錯題複習筆記】\n` +
      `作答日期：${new Date().toLocaleDateString()}\n` +
      `錯題清單（共 ${wrongList.length} 題）：\n` +
      wrongList.join('\n') + `\n\n加油！多複習幾次就能完全記熟！`;

    navigator.clipboard.writeText(textToCopy).then(() => {
      alert('✅ 錯題清單已成功複製到剪貼簿！您可以貼到 Word、備忘錄或筆記軟體中。');
    }).catch(() => {
      alert('複製失敗，請手動選取文字。');
    });
  }

  // --- 只顯示錯題模式 ---
  filterMistakesView() {
    const allCards = document.querySelectorAll('[data-card-for]');
    if (!this.showMistakesOnly) {
      allCards.forEach(c => c.style.display = '');
      return;
    }

    allCards.forEach(card => {
      const inputs = card.querySelectorAll('.blank-input, .cloze-input');
      let hasWrong = false;
      inputs.forEach(input => {
        if (input.classList.contains('is-wrong') || input.value.trim() === '') {
          hasWrong = true;
        }
      });

      card.style.display = hasWrong ? '' : 'none';
    });
  }

  // --- 一鍵填入正解 ---
  revealAllAnswers() {
    const allInputs = document.querySelectorAll('.blank-input, .cloze-input');
    allInputs.forEach(input => {
      const display = input.dataset.displayAns || (input.dataset.ans ? input.dataset.ans.split('|')[0] : '');
      input.value = display;
      input.classList.add('is-correct');
      input.classList.remove('is-wrong');
    });

    document.querySelectorAll('.vocab-feedback, .q-expl-box, .match-ans-label, .trans-hint-pill, #sec4Expl').forEach(el => {
      el.classList.add('show');
      el.style.display = 'block';
    });

    this.updateProgress();
    const liveScore = document.getElementById('liveScoreNumber');
    if (liveScore) liveScore.textContent = '100';
    const bannerScore = document.getElementById('bannerScore');
    if (bannerScore) bannerScore.textContent = '100 分';
  }

  // --- 清空重設 ---
  resetAll() {
    const allInputs = document.querySelectorAll('.blank-input, .cloze-input');
    allInputs.forEach(input => {
      input.value = '';
      input.classList.remove('is-correct', 'is-wrong');
    });

    document.querySelectorAll('.vocab-feedback, .q-expl-box, .match-ans-label, .trans-hint-pill, #sec4Expl').forEach(el => {
      el.classList.remove('show');
      el.style.display = 'none';
    });

    this.seconds = 0;
    this.timerPaused = false;
    this.updateProgress();

    const liveScore = document.getElementById('liveScoreNumber');
    if (liveScore) liveScore.textContent = '--';
    const bannerScore = document.getElementById('bannerScore');
    if (bannerScore) bannerScore.textContent = '0 分';

    // 重設只看錯題開關
    const mistakeToggle = document.getElementById('showMistakesOnlyToggle');
    if (mistakeToggle) {
      mistakeToggle.checked = false;
      this.showMistakesOnly = false;
      this.filterMistakesView();
    }

    localStorage.removeItem('exam_answers');
  }

  // --- 進度條與計數 ---
  updateProgress() {
    const allInputs = document.querySelectorAll('.blank-input, .cloze-input');
    let answered = 0;
    allInputs.forEach(input => {
      if (input.value.trim() !== '') answered++;
    });

    const percent = Math.round((answered / this.totalBlanks) * 100);

    const answeredEl = document.getElementById('answeredCount');
    const percentEl = document.getElementById('progressPercent');
    const fillEl = document.getElementById('progressBarFill');
    const bannerComp = document.getElementById('bannerCompleted');

    if (answeredEl) answeredEl.textContent = answered;
    if (percentEl) percentEl.textContent = `${percent}%`;
    if (fillEl) fillEl.style.width = `${percent}%`;
    if (bannerComp) bannerComp.textContent = `${answered} / ${this.totalBlanks}`;
  }

  // --- 本地儲存存取 ---
  saveCurrentInputs() {
    const state = {};
    document.querySelectorAll('.blank-input, .cloze-input').forEach(inp => {
      if (inp.id) state[inp.id] = inp.value;
    });
    localStorage.setItem('exam_answers', JSON.stringify(state));
  }

  loadSavedData() {


    // 讀取答題進度
    const savedAns = localStorage.getItem('exam_answers');
    if (savedAns) {
      try {
        const state = JSON.parse(savedAns);
        Object.keys(state).forEach(id => {
          const el = document.getElementById(id);
          if (el && state[id]) {
            el.value = state[id];
            if (this.instantFeedback) this.checkSingleInput(el);
          }
        });
        this.updateProgress();
      } catch (e) {
        console.error(e);
      }
    }
  }

  // --- 計時器 ---
  startTimer() {
    if (this.timerInterval) clearInterval(this.timerInterval);
    this.timerInterval = setInterval(() => {
      if (!this.timerPaused) {
        this.seconds++;
        const mins = String(Math.floor(this.seconds / 60)).padStart(2, '0');
        const secs = String(this.seconds % 60).padStart(2, '0');
        const disp = document.getElementById('timerDisplay');
        if (disp) disp.textContent = `${mins}:${secs}`;
      }
    }, 1000);
  }

  toggleTimer() {
    this.timerPaused = !this.timerPaused;
    const btn = document.getElementById('toggleTimerBtn');
    if (btn) btn.textContent = this.timerPaused ? '▶' : '⏸';
  }

  // --- 主題切換 ---
  toggleTheme() {
    const currentTheme = document.body.getAttribute('data-theme') || 'light';
    const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.body.setAttribute('data-theme', nextTheme);
    localStorage.setItem('exam_theme', nextTheme);

    const themeIcon = document.getElementById('themeIcon');
    if (themeIcon) {
      themeIcon.textContent = nextTheme === 'light' ? '🌙' : '☀️';
    }
  }
}

// 頁面載入初始化
document.addEventListener('DOMContentLoaded', () => {
  // 恢復主題
  const savedTheme = localStorage.getItem('exam_theme');
  if (savedTheme) {
    document.body.setAttribute('data-theme', savedTheme);
    const themeIcon = document.getElementById('themeIcon');
    if (themeIcon) {
      themeIcon.textContent = savedTheme === 'light' ? '🌙' : '☀️';
    }
  }

  window.examApp = new ExamController();
});
