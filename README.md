# ⚡ HPC & Big Data — Final Exam Prep

Интерактивный веб-тренажер для подготовки к финальному экзамену по курсу **High Performance Computing & Big Data**, собранный из всех 4 источников без дубликатов.

---

## 📊 Статистика банка вопросов (Deduplication Report)

Из 4 исходных файлов (`final-prep/`) собрано **200 сырых вопросов**, из которых удалены **44 пересечения** между sample-банками и реальными экзаменами:

| Источник | Всего вопросов | Пересечений с Sample | Уникальных новых |
| :--- | :---: | :---: | :---: |
| `hpc_sample_midterm_questions.pdf` | 50 | — | 50 |
| `my-midterm-review.html` (сданный Midterm: 35/50) | 50 | 22 | 28 |
| `HPC_Endterm_sample_questions.pdf` | 50 | — | 50 |
| `my-endterm-review.html` (сданный Endterm: 29/50) | 50 | 22 | 28 |
| **Итого в финальном банке** | **200** | **44** | **156 уникальных** |

### Распределение по 9 темам (156 вопросов)

- ⚡ **HPC fundamentals**: 16 (10 Sample + 6 Exam-Only)
- 🧠 **Memory and parallel design**: 15 (10 Sample + 5 Exam-Only)
- 🌐 **MPI**: 15 (10 Sample + 5 Exam-Only)
- 🧵 **OpenMP and hybrid programming**: 16 (10 Sample + 6 Exam-Only)
- 🗄️ **MapReduce and distributed storage**: 16 (10 Sample + 6 Exam-Only)
- 🎮 **GPU and CUDA**: 23 (15 Sample + 8 Exam-Only)
- 🔥 **Spark**: 23 (15 Sample + 8 Exam-Only)
- 🧩 **PGAS and UPC**: 16 (10 Sample + 6 Exam-Only)
- 🕸️ **Basic graph algorithms**: 16 (10 Sample + 6 Exam-Only)

---

## 📚 Доступные пулы (Question Pools)

- **🌟 All Final (156)** — полный объединенный и дедуплицированный банк.
- **📘 Midterm All (78)** — все уникальные вопросы первой половины курса (50 Sample + 28 из реального Midterm).
- **📙 Endterm All (78)** — все уникальные вопросы второй половины курса (50 Sample + 28 из реального Endterm).
- **🔥 Exam-Only (56)** — только те вопросы, которые реально попались на Moodle Midterm/Endterm, но отсутствовали в sample PDF.
- **❌ My Mistakes (36)** — все 36 вопросов, в которых были ошибки на реальных тестах (15 с Midterm + 21 с Endterm), с подсветкой вашего прошлого ошибочного ответа!
- **🏛️ Official Samples (100)** — 100 официальных sample-вопросов от лектора.

---

## 🎯 Режимы обучения

1. **🎯 Practice (Instant Feedback)** — мгновенная проверка ответа, подробное объяснение концепта/формулы, бейджи статуса на прошлом экзамене (`✓ Correct in My ...` / `⚠️ Missed in My ...`) и предупреждение о прошлом ошибочном выборе.
2. **⏱️ Exam Simulation** — симулятор Moodle с выбором формата: **50-Q Final Mock (45m)** (случайная выборка 50 вопросов из активного пула/фильтра) или **Full Pool Exam** (все вопросы активного пула), сетка навигации, таймер и разбор по темам.
3. **🃏 Flashcards** — карточки для быстрого повторения терминов, формул и синтаксиса.
4. **📋 All Questions & Cheat Sheet** — поиск по ключевым словам (`CUDA`, `Spark`, `upc_memget`, `Dijkstra`, `Amdahl`) и режим показа всех ответов.

---

## 🚀 Как запустить локально

Откройте `final-prep/index.html` в браузере:
```bash
open final-prep/index.html
```
Или запустите локальный HTTP-сервер из папки `final-prep`:
```bash
cd final-prep
python3 -m http.server 8000
```
И откройте `http://localhost:8000`.
