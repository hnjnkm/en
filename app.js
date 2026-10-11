let tab = 'grammar', category = '전체';
let round = [], position = 0, score = 0, answered = false, missed = [], quizScope = null;
const $ = selector => document.querySelector(selector);
const h = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));

function saved() {
  try {
    const value = JSON.parse(localStorage.getItem('opic-learned') || '[]');
    return Array.isArray(value) ? value : [];
  } catch { return []; }
}
function shuffle(items) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
function completionButton(key, learned) {
  const checked = learned.includes(key);
  return `<button class="learned" data-key="${h(key)}" aria-pressed="${checked}">${checked ? '복습 완료 ✓' : '복습 표시'}</button>`;
}
function grammarLesson(item, learned) {
  return `<details class="lesson" id="${item.id}">
    <summary><span>${h(item.title)}<small>${h(item.cat)}</small></span></summary>
    <div class="body lesson-body">
      <p class="lesson-lead">${h(item.lead)}</p>
      <section class="lesson-section"><h2>개념 이해</h2>
        ${item.concepts.map(c => `<div class="concept"><h3>${h(c.title)}</h3><p>${h(c.text)}</p></div>`).join('')}
      </section>
      <section class="lesson-section"><h2>형태와 쓰임</h2>
        <table class="forms"><thead><tr><th scope="col">구분</th><th scope="col">문장 구조와 설명</th></tr></thead><tbody>
          ${item.forms.map(f => `<tr><th scope="row">${h(f.label)}</th><td><p>${h(f.pattern)}</p><p class="form-note">${h(f.note)}</p></td></tr>`).join('')}
        </tbody></table>
      </section>
      <section class="lesson-section"><h2>예문을 한 부분씩 보기</h2>
        ${item.examples.map(e => `<div class="analyzed-example"><p class="english" lang="en">${h(e.en)}</p><p class="translation">${h(e.ko)}</p><p class="analysis">${h(e.analysis)}</p></div>`).join('')}
      </section>
      <section class="lesson-section"><h2>자주 틀리는 이유</h2>
        ${item.mistakes.map(m => `<div class="mistake"><p class="wrong-example"><span>수정 전</span> ${h(m.wrong)}</p><p class="right-example"><span>수정 후</span> ${h(m.right)}</p><p>${h(m.why)}</p></div>`).join('')}
      </section>
      <section class="lesson-section"><h2>이해했는지 확인하기</h2>
        ${item.exercises.map((e, i) => `<fieldset class="lesson-exercise" data-lesson="${item.id}" data-exercise="${i}"><legend>${i + 1}. ${h(e.q)}</legend><div class="inline-options">${e.options.map(o => `<button data-inline-answer="${h(o)}">${h(o)}</button>`).join('')}</div><p class="inline-feedback" aria-live="polite" hidden></p><button class="inline-retry" hidden>다시 풀기</button></fieldset>`).join('')}
      </section>
      <section class="lesson-section"><h2>내 이야기로 말하기</h2><p>${h(item.spoken.prompt)}</p>
        <details class="speaking-answer"><summary>답변 예시 보기</summary><div class="example"><p lang="en">${h(item.spoken.sample)}</p><p class="analysis">${h(item.spoken.note)}</p></div></details>
      </section>
      <div class="practice"><span>규칙을 설명하고, 예문을 내 상황으로 바꿔 말할 수 있나요?</span>${completionButton(item.id, learned)}</div>
    </div>
  </details>`;
}
function vocabularyLesson(item, learned) {
  return `<details class="lesson"><summary><span>${h(item.term)}<small>${h(item.meaning)}</small></span></summary><div class="body"><p class="pattern">${h(item.cat)}</p><div class="example"><p lang="en">${h(item.example)}</p><p class="translation">${h(item.ko)}</p></div><div class="practice"><span>내 상황으로 바꿔 소리 내어 말해 보세요.</span>${completionButton(item.term, learned)}</div></div></details>`;
}
function render() {
  const query = $('#search').value.trim().toLowerCase();
  const source = tab === 'grammar' ? grammar : vocabulary;
  const rows = source.filter(item => (category === '전체' || item.cat === category) && JSON.stringify(item).toLowerCase().includes(query));
  const learned = saved();
  $('#count').textContent = `${rows.length}${tab === 'grammar' ? '개 강의 · 제목을 눌러 설명·분석·연습 문제를 펼치세요.' : '개 표현 · 제목을 눌러 예문을 펼치세요.'}`;
  $('#list').innerHTML = rows.map(item => tab === 'grammar' ? grammarLesson(item, learned) : vocabularyLesson(item, learned)).join('') || '<p class="empty">검색 결과가 없습니다. 다른 표현을 검색해 보세요.</p>';
}
function renderFilters() {
  const source = tab === 'grammar' ? grammar : vocabulary;
  $('#filters').setAttribute('aria-label', tab === 'grammar' ? '문법 학습 단계' : '단어 주제');
  $('#filters').innerHTML = ['전체', ...new Set(source.map(item => item.cat))].map(c => `<button data-category="${h(c)}" aria-pressed="${category === c}" class="${category === c ? 'active' : ''}">${h(c)}</button>`).join('');
}
function switchTab(next) {
  tab = next; category = '전체'; $('#search').value = '';
  document.querySelectorAll('nav button').forEach(button => {
    button.classList.toggle('active', button.dataset.tab === tab);
    button.setAttribute('aria-pressed', button.dataset.tab === tab);
  });
  $('#heading').textContent = tab === 'grammar' ? '규칙을 이해하고, 문장을 만드는 문법.' : '자주 쓰는 말부터, 내 표현으로.';
  $('#description').textContent = tab === 'grammar' ? '문장 기초 → 명사와 수식 → 시제 → 동사 확장 → 문장 연결. 32개 강의에서 개념, 형태, 예문 분석과 연습 해설을 차례로 공부하세요.' : '일상과 경험을 설명하는 핵심 단어·표현 64개. 단어 하나보다 문장 속 쓰임을 익혀 보세요.';
  $('#study-guide').hidden = tab !== 'grammar';
  $('#search').placeholder = tab === 'grammar' ? '개념, 문장, 예문까지 검색' : '단어, 뜻, 예문 검색';
  renderFilters(); render();
}
function grammarQuestions(source) {
  return source.flatMap(lesson => lesson.exercises.map(exercise => ({ ...exercise, lessonId: lesson.id, lessonTitle: lesson.title })));
}
function startQuiz(retry = false) {
  if (!retry) quizScope = { tab, category };
  const source = quizScope.tab === 'grammar' ? grammar : vocabulary;
  const scoped = source.filter(item => quizScope.category === '전체' || item.cat === quizScope.category);
  const pool = quizScope.tab === 'grammar' ? grammarQuestions(scoped) : scoped;
  round = shuffle(pool).slice(0, 10); position = 0; score = 0; missed = [];
  showQuestion();
  if (!$('#quiz').open) $('#quiz').showModal();
}
function showQuestion() {
  answered = false;
  const item = round[position];
  if (!item) {
    $('#quiz-label').textContent = '복습 결과';
    $('#quiz-body').innerHTML = `<h2 class="question" tabindex="-1">${round.length}문제 중 ${score}문제 정답</h2><p>${missed.length ? '아래 표현과 해설을 다시 확인해 보세요.' : '잘했어요. 같은 규칙으로 내 문장도 만들어 보세요.'}</p>${missed.map(m => `<div class="review-item"><p>${h(m.q || m.term)}</p><p class="review-answer">정답: ${h(m.answer || m.meaning)}</p><p>${h(m.explanation || m.example)}</p>${m.lessonId ? `<button data-review-lesson="${m.lessonId}">${h(m.lessonTitle)} 다시 읽기</button>` : ''}</div>`).join('')}<button class="next" id="retry">다시 풀기</button>`;
    $('.question').focus(); return;
  }
  const isGrammar = quizScope.tab === 'grammar';
  const options = isGrammar ? shuffle(item.options) : shuffle([item.meaning, ...shuffle(vocabulary.filter(word => word.meaning !== item.meaning)).slice(0, 3).map(word => word.meaning)]);
  $('#quiz-label').textContent = `${isGrammar ? '문법' : '단어'} 퀴즈 · ${position + 1} / ${round.length}`;
  $('#quiz-body').innerHTML = `<p class="meta">${isGrammar ? h(item.lessonTitle) : '표현의 뜻을 골라 보세요.'}</p><h2 class="question" tabindex="-1">${h(isGrammar ? item.q : item.term)}</h2><div class="answers">${options.map(option => `<button data-answer="${h(option)}">${h(option)}</button>`).join('')}</div><div class="feedback" aria-live="polite"></div><button class="next" id="next-question" hidden>${position + 1 === round.length ? '결과 보기' : '다음 문제'}</button>`;
  if ($('#quiz').open) $('.question').focus();
}
function answerQuiz(button) {
  if (answered) return;
  answered = true;
  const item = round[position], isGrammar = quizScope.tab === 'grammar';
  const correct = isGrammar ? item.answer : item.meaning, ok = button.dataset.answer === correct;
  if (ok) score++; else missed.push(item);
  $('#quiz-body').querySelectorAll('[data-answer]').forEach(option => {
    option.disabled = true;
    if (option.dataset.answer === correct) option.classList.add('correct');
    else if (option === button) option.classList.add('wrong');
  });
  $('.feedback').innerHTML = `<p>${ok ? '정답이에요.' : '정답: ' + h(correct)}</p>${isGrammar ? `<p class="quiz-explanation">${h(item.explanation)}</p>` : `<div class="example"><p lang="en">${h(item.example)}</p><p class="translation">${h(item.ko)}</p></div>`}`;
  $('#next-question').hidden = false; $('#next-question').focus();
}
function answerInline(button) {
  const field = button.closest('.lesson-exercise');
  const exercise = grammar.find(lesson => lesson.id === field.dataset.lesson).exercises[Number(field.dataset.exercise)];
  const correct = button.dataset.inlineAnswer === exercise.answer;
  field.querySelectorAll('[data-inline-answer]').forEach(option => {
    option.disabled = true;
    if (option.dataset.inlineAnswer === exercise.answer) option.classList.add('correct');
    else if (option === button) option.classList.add('wrong');
  });
  const feedback = field.querySelector('.inline-feedback');
  feedback.textContent = `${correct ? '정답이에요.' : '정답: ' + exercise.answer} ${exercise.explanation}`;
  feedback.hidden = false;
  const retry = field.querySelector('.inline-retry'); retry.hidden = false; retry.focus();
}
$('nav').addEventListener('click', event => { const button = event.target.closest('[data-tab]'); if (button) switchTab(button.dataset.tab); });
$('#search').addEventListener('input', render);
$('#filters').addEventListener('click', event => { const button = event.target.closest('[data-category]'); if (button) { category = button.dataset.category; renderFilters(); render(); } });
$('#list').addEventListener('click', event => {
  const inline = event.target.closest('[data-inline-answer]'); if (inline) { answerInline(inline); return; }
  if (event.target.closest('.inline-retry')) {
    const field = event.target.closest('.lesson-exercise');
    field.querySelectorAll('[data-inline-answer]').forEach(button => { button.disabled = false; button.classList.remove('correct', 'wrong'); });
    field.querySelector('.inline-feedback').hidden = true;
    field.querySelector('.inline-retry').hidden = true;
    field.querySelector('[data-inline-answer]').focus(); return;
  }
  const button = event.target.closest('.learned'); if (!button) return;
  const key = button.dataset.key; let items = saved();
  items = items.includes(key) ? items.filter(item => item !== key) : [...items, key];
  try {
    localStorage.setItem('opic-learned', JSON.stringify(items));
    button.textContent = items.includes(key) ? '복습 완료 ✓' : '복습 표시';
    button.setAttribute('aria-pressed', items.includes(key));
  } catch { button.textContent = '저장할 수 없습니다'; }
});
$('#quiz-open').addEventListener('click', () => startQuiz());
$('#quiz-close').addEventListener('click', () => $('#quiz').close());
$('#quiz-body').addEventListener('click', event => {
  if (event.target.id === 'next-question') { position++; showQuestion(); return; }
  if (event.target.id === 'retry') { startQuiz(true); return; }
  const review = event.target.closest('[data-review-lesson]');
  if (review) {
    $('#quiz').close(); switchTab('grammar');
    const lesson = document.getElementById(review.dataset.reviewLesson);
    lesson.open = true; lesson.scrollIntoView({ behavior: 'smooth', block: 'start' }); lesson.querySelector('summary').focus(); return;
  }
  const button = event.target.closest('[data-answer]'); if (button) answerQuiz(button);
});
switchTab('grammar');
