# ⚡ HPC & Big Data — Final Exam Prep

Интерактивный веб-тренажер для подготовки к финальному экзамену по курсу **High Performance Computing & Big Data**, собранный из всех 5 источников без дубликатов.

---

## 📊 Статистика банка вопросов (Deduplication Report)

Из 5 исходных файлов (`final-prep/`) собрано **260 сырых вопросов**, из которых удалены **44 пересечения** между sample-банками и реальными экзаменами (все 60 вопросов из `HPC_Final_60_Student_Questions.pdf` оказались полностью новыми и не пересекаются с предыдущими 156 вопросами):

| Источник | Всего вопросов | Пересечений с Sample | Уникальных новых |
| :--- | :---: | :---: | :---: |
| `hpc_sample_midterm_questions.pdf` | 50 | — | 50 |
| `my-midterm-review.html` (сданный Midterm: 35/50) | 50 | 22 | 28 |
| `HPC_Endterm_sample_questions.pdf` | 50 | — | 50 |
| `my-endterm-review.html` (сданный Endterm: 29/50) | 50 | 22 | 28 |
| `HPC_Final_60_Student_Questions.pdf` (Final Sample) | 60 | 0 | 60 |
| **Итого в финальном банке** | **260** | **44** | **216 уникальных** |

### Распределение по 9 темам (216 вопросов)

- ⚡ **HPC fundamentals**: 22 (10 M/E Sample + 6 Exam-Only + 6 Final Sample)
- 🧠 **Memory and parallel design**: 21 (10 M/E Sample + 5 Exam-Only + 6 Final Sample)
- 🌐 **MPI**: 21 (10 M/E Sample + 5 Exam-Only + 6 Final Sample)
- 🧵 **OpenMP and hybrid programming**: 22 (10 M/E Sample + 6 Exam-Only + 6 Final Sample)
- 🗄️ **MapReduce and distributed storage**: 22 (10 M/E Sample + 6 Exam-Only + 6 Final Sample)
- 🎮 **GPU and CUDA**: 32 (15 M/E Sample + 8 Exam-Only + 9 Final Sample)
- 🔥 **Spark**: 31 (15 M/E Sample + 8 Exam-Only + 8 Final Sample)
- 🧩 **PGAS and UPC**: 23 (10 M/E Sample + 6 Exam-Only + 7 Final Sample)
- 🕸️ **Basic graph algorithms**: 22 (10 M/E Sample + 6 Exam-Only + 6 Final Sample)

---

## 📚 Доступные пулы (Question Pools)

- **🌟 All Final (216)** — полный объединенный и дедуплицированный банк.
- **🎯 Final Sample (60)** — 60 новых официальных вопросов из `HPC_Final_60_Student_Questions.pdf`.
- **📘 Midterm All (78)** — все уникальные вопросы первой половины курса (50 Sample + 28 из реального Midterm).
- **📙 Endterm All (78)** — все уникальные вопросы второй половины курса (50 Sample + 28 из реального Endterm).
- **🔥 Exam-Only (56)** — только те вопросы, которые реально попались на Moodle Midterm/Endterm, но отсутствовали в sample PDF.
- **❌ My Mistakes (36)** — все 36 вопросов, в которых были ошибки на реальных тестах (15 с Midterm + 21 с Endterm), с подсветкой вашего прошлого ошибочного ответа!
- **🏛️ Official Samples (160)** — все 160 официальных sample-вопросов от лектора (50 Midterm + 50 Endterm + 60 Final Sample).

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
