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
function render() {
  if (tab === 'vocabulary') { railObserver?.disconnect(); renderWords(); return; }
  $('#list').hidden = false; $('#word-card').hidden = true; $('#word-pagination').hidden = true;
  const query = $('#search').value.trim().toLowerCase();
  const source = tab === 'grammar' ? grammar : vocabulary;
  const rows = source.filter(item => (category === '전체' || item.cat === category) && JSON.stringify(item).toLowerCase().includes(query));
  const learned = saved();
  $('#quiz-open').disabled = rows.length === 0;
  $('#count').textContent = `${rows.length}${tab === 'grammar' ? '개 강의 · 제목을 눌러 설명·분석·연습 문제를 펼치세요.' : '개 표현 · 제목을 눌러 예문을 펼치세요.'}`;
  $('#list').innerHTML = rows.map(item => grammarLesson(item, learned)).join('') || '<p class="empty">검색 결과가 없습니다. 다른 표현을 검색해 보세요.</p>';
  observeLessons();
}
function renderFilters() {
  $('#filters').hidden = tab !== 'grammar';
  const source = tab === 'grammar' ? grammar : vocabulary;
  $('#filters').setAttribute('aria-label', tab === 'grammar' ? '문법 학습 단계' : '단어 주제');
  $('#filters').innerHTML = ['전체', ...new Set(source.map(item => item.cat))].map(c => `<button data-category="${h(c)}" aria-pressed="${category === c}" class="${category === c ? 'active' : ''}">${h(c)}</button>`).join('');
}
function switchTab(next) {
  tab = next; category = '전체'; $('#search').value = '';
  document.body.dataset.tab = tab;
  $('#grammar-rail').hidden = tab !== 'grammar'; $('#word-tools').hidden = tab !== 'vocabulary';
  $('#word-topic').value = '전체'; wordPage = 1;
  if (tab === 'vocabulary') resetCards();
  document.querySelectorAll('nav button').forEach(button => {
    button.classList.toggle('active', button.dataset.tab === tab);
    button.setAttribute('aria-pressed', button.dataset.tab === tab);
  });
  $('#heading').textContent = tab === 'grammar' ? '규칙을 이해하고, 문장을 만드는 문법.' : '자주 쓰는 말부터, 내 표현으로.';
  $('#description').textContent = tab === 'grammar' ? `문장 기초 → 명사와 수식 → 시제 → 동사 확장 → 문장 연결. ${grammar.length}개 강의에서 개념, 형태, 예문 분석과 연습 해설을 차례로 공부하세요.` : `말하기에 쓰는 핵심 단어·표현 ${vocabulary.length.toLocaleString()}개. 뜻과 사용 표현을 익히고, 모르는 단어만 섞어서 반복하세요.`;
  $('#study-guide').hidden = tab !== 'grammar';
  $('#search').placeholder = tab === 'grammar' ? '개념, 문장, 예문까지 검색' : '단어, 뜻, 예문 검색';
  renderFilters(); render();
}
function grammarQuestions(source) {
  return source.flatMap(lesson => lesson.exercises.map(exercise => ({ ...exercise, lessonId: lesson.id, lessonTitle: lesson.title })));
}
function startQuiz(retry = false) {
  if (!retry) quizScope = { tab, category, status: wordStatus, query: $('#search').value };
  const source = quizScope.tab === 'grammar' ? grammar : vocabulary;
  const scoped = quizScope.tab === 'grammar' ? source.filter(item => quizScope.category === '전체' || item.cat === quizScope.category) : wordPool(quizScope);
  const pool = quizScope.tab === 'grammar' ? grammarQuestions(scoped) : scoped;
  if (!pool.length) return;
  round = shuffle(pool).slice(0, 10); position = 0; score = 0; missed = [];
  showQuestion();
  if (!$('#quiz').open) $('#quiz').showModal();
}
function showQuestion() {
  answered = false;
  const item = round[position];
  if (!item) {
    $('#quiz-label').textContent = '복습 결과';
    $('#quiz-body').innerHTML = `<h2 class="question" tabindex="-1">${round.length}문제 중 ${score}문제 정답</h2><p>${missed.length ? '아래 표현과 해설을 다시 확인해 보세요.' : '잘했어요. 같은 규칙으로 내 문장도 만들어 보세요.'}</p>${missed.map(m => `<div class="review-item"><p>${h(m.q || m.term)}</p><p class="review-answer">정답: ${h(m.answer || m.meaning)}</p><p>${h(m.explanation || m.example || m.usages?.[0] || m.meaning)}</p>${m.lessonId ? `<button data-review-lesson="${m.lessonId}">${h(m.lessonTitle)} 다시 읽기</button>` : ''}</div>`).join('')}<button class="next" id="retry">다시 풀기</button>`;
    $('.question').focus(); return;
  }
  const isGrammar = quizScope.tab === 'grammar';
  const options = isGrammar ? shuffle(item.options) : quizWordOptions(item);
  $('#quiz-label').textContent = `${isGrammar ? '문법' : '단어'} 퀴즈 · ${position + 1} / ${round.length}`;
  $('#quiz-body').innerHTML = `<p class="meta">${isGrammar ? h(item.lessonTitle) : '이 표현의 뜻을 골라 보세요.'}</p><h2 class="question" tabindex="-1">${h(isGrammar ? item.q : item.term)}</h2><div class="answers">${options.map(option => `<button data-answer="${h(option)}">${h(option)}</button>`).join('')}</div><div class="feedback" aria-live="polite"></div><button class="next" id="next-question" hidden>${position + 1 === round.length ? '결과 보기' : '다음 문제'}</button>`;
  if ($('#quiz').open) $('.question').focus();
}
function answerQuiz(button) {
  if (answered) return;
  answered = true;
  const item = round[position], isGrammar = quizScope.tab === 'grammar';
  const correct = isGrammar ? item.answer : item.meaning, ok = button.dataset.answer === correct;
  if (ok) score++; else { missed.push(item); if (!isGrammar) saveWordState(item.term, false); }
  $('#quiz-body').querySelectorAll('[data-answer]').forEach(option => {
    option.disabled = true;
    if (option.dataset.answer === correct) option.classList.add('correct');
    else if (option === button) option.classList.add('wrong');
  });
  $('.feedback').innerHTML = `<p>${ok ? '정답이에요.' : '정답: ' + h(correct)}</p>${isGrammar ? `<p class="quiz-explanation">${h(item.explanation)}</p>` : `${usageHTML(item)}${wordStateButtons(item)}`}`;
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
const WORD_PAGE_SIZE = 30;
let wordView = 'list', wordStatus = 'unknown', wordPage = 1, wordOrder = vocabulary.map(item => item.term);
let cardDeck = [], cardIndex = 0, cardCycle = 1, cardRevealed = false;
let activeLesson = 'g01', railObserver = null;
const railMedia = matchMedia('(min-width: 1100px)');
function readKnownWords() {
  try {
    const existing = localStorage.getItem('opic-known-words');
    const data = existing === null ? saved().filter(key => vocabulary.some(word => word.term === key)) : JSON.parse(existing);
    return new Set(Array.isArray(data) ? data : []);
  } catch { return new Set(); }
}
let knownWords = readKnownWords();
function saveWordState(term, known) {
  if (known) knownWords.add(term); else knownWords.delete(term);
  try {
    localStorage.setItem('opic-known-words', JSON.stringify([...knownWords]));
    $('#storage-notice').hidden = true;
  } catch {
    $('#storage-notice').textContent = '브라우저 저장을 사용할 수 없어 이번 화면에서만 학습 상태가 유지됩니다.';
    $('#storage-notice').hidden = false;
  }
}
function wordPool(scope = {category, status: wordStatus, query: $('#search').value}) {
  const query = scope.query.trim().toLowerCase();
  return vocabulary.filter(word => (scope.category === '전체' || word.cat === scope.category)
    && (scope.status === 'all' || (scope.status === 'known' ? knownWords.has(word.term) : !knownWords.has(word.term)))
    && JSON.stringify(word).toLowerCase().includes(query));
}
function orderedWords() {
  const pool = new Map(wordPool().map(word => [word.term, word]));
  return wordOrder.filter(term => pool.has(term)).map(term => pool.get(term));
}
function usageHTML(word) {
  return `${word.example ? `<div class="example"><p lang="en">${h(word.example)}</p><p class="translation">${h(word.ko)}</p></div>` : ''}${word.usages?.length ? `<p class="pattern usage-label">함께 쓰는 표현</p>${word.usages.map(usage => `<p class="word-usage" lang="en">${h(usage)}</p>`).join('')}` : ''}`;
}
function wordStateButtons(word, card = false) {
  const known = knownWords.has(word.term);
  return `<div class="word-state-actions"><button data-word-state="known" data-term="${h(word.term)}" ${card ? 'data-card-action="true"' : ''} aria-pressed="${known}">알아요</button><button data-word-state="unknown" data-term="${h(word.term)}" ${card ? 'data-card-action="true"' : ''} aria-pressed="${!known}">아직 몰라요</button></div>`;
}
function vocabularyLesson(word) {
  return `<details class="lesson word-row" data-word="${h(word.term)}"><summary><span>${h(word.term)}<small>${h(word.meaning)}</small></span><span class="word-status-mark">${knownWords.has(word.term) ? '알아요' : ''}</span></summary><div class="body"><p class="pattern">${h(word.cat)}</p>${usageHTML(word)}<div class="practice"><span>뜻을 가리고 떠올린 뒤 표시하세요.</span>${wordStateButtons(word)}</div></div></details>`;
}
function renderWordCount(rows) {
  const knownCount = vocabulary.filter(word => knownWords.has(word.term)).length;
  $('#count').textContent = `${rows.length.toLocaleString()}개 ${wordStatus === 'unknown' ? '모르는 단어' : wordStatus === 'known' ? '아는 단어' : '단어'} · 전체 ${vocabulary.length.toLocaleString()}개 중 ${knownCount.toLocaleString()}개 알아요`;
  $('#quiz-open').disabled = rows.length === 0;
}
function renderWords() {
  const rows = orderedWords(); renderWordCount(rows);
  $('#list').hidden = wordView === 'cards'; $('#word-card').hidden = wordView !== 'cards';
  $('#word-pagination').hidden = wordView === 'cards' || rows.length <= WORD_PAGE_SIZE;
  if (wordView === 'cards') { renderCard(); return; }
  const pages = Math.max(1, Math.ceil(rows.length / WORD_PAGE_SIZE));
  wordPage = Math.max(1, Math.min(wordPage, pages));
  const visible = rows.slice((wordPage - 1) * WORD_PAGE_SIZE, wordPage * WORD_PAGE_SIZE);
  $('#list').innerHTML = visible.map(vocabularyLesson).join('') || `<p class="empty">${wordStatus === 'unknown' && category === '전체' && !$('#search').value ? '모르는 단어를 모두 복습했습니다. 상태를 ‘전체 단어’로 바꾸어 다시 확인할 수 있습니다.' : '이 조건에 맞는 단어가 없습니다. 주제·상태·검색 조건을 바꿔 보세요.'}</p>`;
  $('#word-page').textContent = `${wordPage} / ${pages}`;
  $('#word-prev').disabled = wordPage === 1; $('#word-next').disabled = wordPage === pages;
}
function resetCards() {
  cardDeck = shuffle(wordPool()); cardIndex = 0; cardCycle = 1; cardRevealed = false;
}
function currentCard() { return cardDeck[cardIndex]; }
function renderCard() {
  const item = currentCard();
  if (!item) {
    $('#word-card').innerHTML = '<p class="empty">이 조건에 맞는 단어가 없습니다. 주제·상태·검색 조건을 바꿔 보세요.</p>';
    return;
  }
  $('#word-card').innerHTML = `<div class="flashcard"><p class="pattern">${h(item.cat)} · ${cardCycle}회차 · ${cardIndex + 1} / ${cardDeck.length}</p><h2 class="card-term" lang="en" tabindex="-1">${h(item.term)}</h2>${cardRevealed ? `<div class="card-answer"><p>${h(item.meaning)}</p>${usageHTML(item)}</div>${wordStateButtons(item, true)}` : '<button id="reveal-word">뜻과 표현 보기</button>'}<p class="card-note">${cardRevealed ? '알아요: 모르는 단어에서 제외 · 아직 몰라요: 다음 회차에 다시 복습' : '뜻을 소리 내어 말해 본 뒤 확인하세요.'}</p></div>`;
}
function advanceCard(known) {
  const last = currentCard(); if (!last) return;
  saveWordState(last.term, known); cardIndex++; cardRevealed = false;
  while (cardIndex < cardDeck.length && ((wordStatus === 'unknown' && knownWords.has(currentCard().term)) || (wordStatus === 'known' && !knownWords.has(currentCard().term)))) cardIndex++;
  if (cardIndex >= cardDeck.length) {
    cardDeck = shuffle(wordPool()); cardIndex = 0; cardCycle++;
    if (cardDeck.length > 1 && cardDeck[0].term === last.term) [cardDeck[0], cardDeck[1]] = [cardDeck[1], cardDeck[0]];
  }
  renderWords();
  if (!currentCard() && wordStatus === 'unknown' && !wordPool().length) $('#word-card').innerHTML = '<p class="empty">이 범위의 모르는 단어를 모두 복습했습니다. 다른 주제를 고르거나 상태를 ‘전체 단어’로 바꾸세요.</p>';
  $('#word-card .card-term')?.focus();
}
function setWordView(view) {
  wordView = view;
  document.querySelectorAll('[data-word-view]').forEach(button => button.setAttribute('aria-pressed', button.dataset.wordView === view));
  if (view === 'cards') resetCards();
  renderWords();
}
function refreshWordScope() { wordPage = 1; resetCards(); renderWords(); }
function activateRail(id) {
  activeLesson = id;
  $('#grammar-index').querySelectorAll('[data-lesson-target]').forEach(link => {
    if (link.dataset.lessonTarget === id) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current');
  });
}
function renderRail() {
  $('#rail-toggle > span').textContent = `${grammar.length}개 강의`;
  $('#grammar-index').innerHTML = [...new Set(grammar.map(lesson => lesson.cat))].map(cat => `<section class="rail-group"><h2>${h(cat)}</h2>${grammar.filter(lesson => lesson.cat === cat).map(lesson => `<a href="#${lesson.id}" data-lesson-target="${lesson.id}"><span>${lesson.title.slice(0,2)}</span><span>${h(lesson.title.slice(5))}</span></a>`).join('')}</section>`).join('');
  activateRail(activeLesson);
}
function observeLessons() {
  railObserver?.disconnect();
  const visible = new Set();
  railObserver = new IntersectionObserver(entries => {
    for (const entry of entries) { if (entry.isIntersecting) visible.add(entry.target); else visible.delete(entry.target); }
    const targets = [...visible].sort((a,b) => Math.abs(a.getBoundingClientRect().top - 100) - Math.abs(b.getBoundingClientRect().top - 100));
    if (targets[0]) activateRail(targets[0].id);
  }, {rootMargin:'-10% 0px -65% 0px',threshold:0});
  document.querySelectorAll('#list > .lesson').forEach(lesson => railObserver.observe(lesson));
}
function goToLesson(id, updateHash = true) {
  if (!grammar.some(lesson => lesson.id === id)) return;
  if (tab !== 'grammar') switchTab('grammar');
  if (category !== '전체' || $('#search').value) { category = '전체'; $('#search').value = ''; renderFilters(); render(); }
  const lesson = document.getElementById(id); if (!lesson) return;
  lesson.open = true; activateRail(id);
  if (!railMedia.matches) { $('#grammar-rail').classList.remove('rail-open'); $('#rail-toggle').setAttribute('aria-expanded','false'); }
  if (updateHash) history.replaceState(null,'','#'+id);
  lesson.querySelector('summary').focus({preventScroll:true}); lesson.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',block:'start'});
}
function syncRailSize() {
  $('#rail-toggle').setAttribute('aria-expanded',railMedia.matches ? 'true':'false');
  $('#grammar-rail').classList.toggle('rail-open',railMedia.matches);
}
function quizWordOptions(item) {
  const categories = ['사람·가족','음식·재료','집·공간','교통·이동'];
  const meaningParts = item.meaning.split(/[;,·\s]+/).filter(part => part.length > 1);
  const candidates = vocabulary.filter(word => word.term !== item.term && word.cat !== item.cat && categories.includes(word.cat) && word.meaning !== item.meaning && !meaningParts.some(part => word.meaning.includes(part)));
  const distractors = shuffle([...new Set(candidates.map(word => word.meaning))]).slice(0,3);
  return shuffle([item.meaning,...distractors]);
}

$('nav').addEventListener('click', event => { const button = event.target.closest('[data-tab]'); if (button) switchTab(button.dataset.tab); });
$('#search').addEventListener('input', () => { if (tab === 'vocabulary') refreshWordScope(); else render(); });
$('#filters').addEventListener('click', event => { const button = event.target.closest('[data-category]'); if (button) { category = button.dataset.category; renderFilters(); render(); } });
$('#list').addEventListener('click', event => {
  const wordButton = event.target.closest('[data-word-state]');
  if (wordButton) {
    const previousRows = [...document.querySelectorAll('#list > .word-row')], rowIndex = previousRows.indexOf(wordButton.closest('.word-row'));
    const term = wordButton.dataset.term, state = wordButton.dataset.wordState;
    saveWordState(term, state === 'known'); renderWords();
    const currentRows = [...document.querySelectorAll('#list > .word-row')], same = currentRows.find(row => row.dataset.word === term);
    if (same) { same.open = true; same.querySelector(`[data-word-state="${state}"]`).focus(); }
    else currentRows[Math.min(rowIndex,currentRows.length - 1)]?.querySelector('summary').focus();
    return;
  }
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
  const wordButton = event.target.closest('[data-word-state]');
  if (wordButton) { saveWordState(wordButton.dataset.term, wordButton.dataset.wordState === 'known'); wordButton.parentElement.querySelectorAll('[data-word-state]').forEach(b => b.setAttribute('aria-pressed', b.dataset.wordState === wordButton.dataset.wordState)); return; }
  if (event.target.id === 'next-question') { position++; showQuestion(); return; }
  if (event.target.id === 'retry') { startQuiz(true); return; }
  const review = event.target.closest('[data-review-lesson]');
  if (review) {
    $('#quiz').close(); switchTab('grammar');
    goToLesson(review.dataset.reviewLesson); return;
  }
  const button = event.target.closest('[data-answer]'); if (button) answerQuiz(button);
});
$('#word-topic').innerHTML = ['전체', ...new Set(vocabulary.map(word => word.cat))].map(cat => `<option value="${h(cat)}">${h(cat)}</option>`).join('');
$('#word-topic').addEventListener('change', event => { category = event.target.value; refreshWordScope(); });
$('#word-status').addEventListener('change', event => { wordStatus = event.target.value; refreshWordScope(); });
$('#word-tools').addEventListener('click', event => { const view = event.target.closest('[data-word-view]'); if (view) setWordView(view.dataset.wordView); });
$('#word-shuffle').addEventListener('click', () => {
  const previous = orderedWords()[0]?.term, previousCard = currentCard()?.term;
  wordOrder = shuffle(vocabulary.map(word => word.term));
  const pool = new Set(wordPool().map(word => word.term));
  const selected = wordOrder.filter(term => pool.has(term));
  if (selected.length > 1 && selected[0] === previous) {
    const first = wordOrder.indexOf(selected[0]), second = wordOrder.indexOf(selected[1]);
    [wordOrder[first], wordOrder[second]] = [wordOrder[second], wordOrder[first]];
  }
  wordPage = 1; resetCards();
  if (cardDeck.length > 1 && cardDeck[0].term === previousCard) [cardDeck[0],cardDeck[1]] = [cardDeck[1],cardDeck[0]];
  renderWords();
});
$('#word-prev').addEventListener('click', () => { wordPage--; renderWords(); $('#count').scrollIntoView({block:'start'}); });
$('#word-next').addEventListener('click', () => { wordPage++; renderWords(); $('#count').scrollIntoView({block:'start'}); });
$('#word-card').addEventListener('click', event => {
  if (event.target.id === 'reveal-word') { cardRevealed = true; renderCard(); $('#word-card [data-word-state]')?.focus(); return; }
  const button = event.target.closest('[data-card-action]'); if (button) advanceCard(button.dataset.wordState === 'known');
});
$('#quiz').addEventListener('close', () => { if (tab === 'vocabulary') renderWords(); });
$('#grammar-index').addEventListener('click', event => { const link = event.target.closest('[data-lesson-target]'); if (link) { event.preventDefault(); goToLesson(link.dataset.lessonTarget); } });
$('#rail-toggle').addEventListener('click', () => { const open = $('#grammar-rail').classList.toggle('rail-open'); $('#rail-toggle').setAttribute('aria-expanded', open); });
railMedia.addEventListener('change', syncRailSize);
renderRail(); syncRailSize(); switchTab('grammar');
if (/^#g\d{2}$/.test(location.hash)) goToLesson(location.hash.slice(1), false);
window.addEventListener('hashchange', () => { if (/^#g\d{2}$/.test(location.hash)) goToLesson(location.hash.slice(1), false); });
