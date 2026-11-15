// High Performance Computing & Big Data — Final Exam Prep Data
// Deduplicated from 4 sources: Midterm Sample (50), My Midterm (50), Endterm Sample (50), My Endterm (50)
// Total raw: 200 -> 44 duplicates merged -> 156 unique questions

const FINAL_QUESTIONS = [
  {
    "id": 1,
    "part": "midterm",
    "topic": "HPC fundamentals",
    "inSample": true,
    "inExam": true,
    "sampleNum": 1,
    "moodleNum": 1,
    "originBadge": "Midterm Sample #1 • My Midterm Q1",
    "userExamAttempt": {
      "exam": "Midterm",
      "qNum": 1,
      "selectedText": "Most of its computation can be divided into independent tasks",
      "isCorrect": true
    },
    "question": "A simulation fits in one workstation’s memory, but would take several months to finish. Which observation most strongly supports trying a parallel implementation?",
    "options": [
      {
        "id": "A",
        "text": "Most of its computation can be divided into independent tasks"
      },
      {
        "id": "B",
        "text": "The input is stored in a single file"
      },
      {
        "id": "C",
        "text": "The sequential program already uses all available memory"
      },
      {
        "id": "D",
        "text": "The output contains many floating-point values"
      },
      {
        "id": "E",
        "text": "The source code contains many lines"
      }
    ],
    "correctOptionId": "A",
    "correctAnswerText": "Most of its computation can be divided into independent tasks",
    "explanation": "Parallel computing requires computational tasks that can run concurrently. If most of the computation can be split into independent tasks, parallelizing across multiple processing units will significantly cut down execution time. (Memory capacity is not the bottleneck here since it fits in RAM)."
  },
  {
    "id": 2,
    "part": "midterm",
    "topic": "HPC fundamentals",
    "inSample": true,
    "inExam": false,
    "sampleNum": 2,
    "moodleNum": null,
    "originBadge": "Midterm Sample #2",
    "userExamAttempt": null,
    "question": "Which description matches the basic distributed-memory view of a cluster?",
    "options": [
      {
        "id": "A",
        "text": "All nodes share one physical RAM without communication"
      },
      {
        "id": "B",
        "text": "Each node is a core within one processor socket"
      },
      {
        "id": "C",
        "text": "Nodes have their own memory and exchange data over an interconnect"
      },
      {
        "id": "D",
        "text": "Each node is a thread with the same address space"
      },
      {
        "id": "E",
        "text": "Nodes exchange data only through a common CPU cache"
      }
    ],
    "correctOptionId": "C",
    "correctAnswerText": "Nodes have their own memory and exchange data over an interconnect",
    "explanation": "In a distributed-memory cluster, each physical node has its own private address space (RAM). Nodes cannot directly access each other's memory and must communicate by exchanging explicit messages across a network interconnect (e.g., using MPI)."
  },
  {
    "id": 3,
    "part": "midterm",
    "topic": "HPC fundamentals",
    "inSample": true,
    "inExam": true,
    "sampleNum": 3,
    "moodleNum": 2,
    "originBadge": "Midterm Sample #3 • My Midterm Q2",
    "userExamAttempt": {
      "exam": "Midterm",
      "qNum": 2,
      "selectedText": "They occupy separate process memory; one assignment does not update the other",
      "isCorrect": true
    },
    "question": "Two MPI processes on different cluster nodes each declare int x. What is normally true of these variables in the basic message-passing model?",
    "options": [
      {
        "id": "A",
        "text": "The same variable name makes them one shared object"
      },
      {
        "id": "B",
        "text": "They occupy separate process memory; one assignment does not update the other"
      },
      {
        "id": "C",
        "text": "A barrier automatically copies the updated value to the other process"
      },
      {
        "id": "D",
        "text": "The larger rank automatically sees the smaller rank’s assignments"
      },
      {
        "id": "E",
        "text": "Running the same executable gives them the same variable storage"
      }
    ],
    "correctOptionId": "B",
    "correctAnswerText": "They occupy separate process memory; one assignment does not update the other",
    "explanation": "In the distributed-memory message-passing model (MPI), each process runs in its own private memory address space. Declaring 'int x' on different processes creates independent variables; modifying one does not affect the other unless messages are sent."
  },
  {
    "id": 4,
    "part": "midterm",
    "topic": "HPC fundamentals",
    "inSample": true,
    "inExam": false,
    "sampleNum": 4,
    "moodleNum": null,
    "originBadge": "Midterm Sample #4",
    "userExamAttempt": null,
    "question": "A processor applies one instruction to several data elements at once. Which form of parallelism is this?",
    "options": [
      {
        "id": "A",
        "text": "Instruction-level parallelism across different instructions"
      },
      {
        "id": "B",
        "text": "Pipelining different stages of successive instructions"
      },
      {
        "id": "C",
        "text": "SIMD"
      },
      {
        "id": "D",
        "text": "Task parallelism across different functions"
      },
      {
        "id": "E",
        "text": "SPMD execution by independent processes"
      }
    ],
    "correctOptionId": "C",
    "correctAnswerText": "SIMD",
    "explanation": "SIMD (Single Instruction, Multiple Data) is Flynn's taxonomy classification where a single processor instruction operates simultaneously on multiple data elements (e.g., CPU vector extensions like AVX/SSE or GPU vector units)."
  },
  {
    "id": 5,
    "part": "midterm",
    "topic": "HPC fundamentals",
    "inSample": true,
    "inExam": false,
    "sampleNum": 5,
    "moodleNum": null,
    "originBadge": "Midterm Sample #5",
    "userExamAttempt": null,
    "question": "A simulation has 5 x 10^8 cells, performs 200 floating-point operations per cell per step, and runs for 10^4 steps. How many operations are required?",
    "options": [
      {
        "id": "A",
        "text": "10^15"
      },
      {
        "id": "B",
        "text": "5 x 10^14"
      },
      {
        "id": "C",
        "text": "5 x 10^15"
      },
      {
        "id": "D",
        "text": "10^13"
      },
      {
        "id": "E",
        "text": "10^14"
      }
    ],
    "correctOptionId": "A",
    "correctAnswerText": "10^15",
    "explanation": "Total Operations = (5 × 10^8 cells) × (200 FLOP/cell/step) × (10^4 steps) = (5 × 10^8) × (2 × 10^2) × 10^4 = 10 × 10^(8 + 2 + 4) = 10 × 10^14 = 10^15 FLOPs."
  },
  {
    "id": 6,
    "part": "midterm",
    "topic": "HPC fundamentals",
    "inSample": true,
    "inExam": false,
    "sampleNum": 6,
    "moodleNum": null,
    "originBadge": "Midterm Sample #6",
    "userExamAttempt": null,
    "question": "A processor has a high theoretical FLOP/s rate, but an array-processing program spends most of its time waiting for memory. Which conclusion is best supported?",
    "options": [
      {
        "id": "A",
        "text": "A low achieved FLOP/s rate proves an incorrect calculation"
      },
      {
        "id": "B",
        "text": "Peak arithmetic performance alone is insufficient to predict this program’s speed"
      },
      {
        "id": "C",
        "text": "Peak FLOP/s determines runtime regardless of data access"
      },
      {
        "id": "D",
        "text": "Doubling arithmetic units must halve the runtime"
      },
      {
        "id": "E",
        "text": "Memory capacity alone determines the arithmetic throughput"
      }
    ],
    "correctOptionId": "B",
    "correctAnswerText": "Peak arithmetic performance alone is insufficient to predict this program’s speed",
    "explanation": "A program that spends most of its time waiting for memory is memory-bound (memory latency/bandwidth bottleneck). In such cases, theoretical peak arithmetic FLOP/s is unattainable and cannot predict real-world runtime (Roofline model)."
  },
  {
    "id": 7,
    "part": "midterm",
    "topic": "HPC fundamentals",
    "inSample": true,
    "inExam": true,
    "sampleNum": 7,
    "moodleNum": 6,
    "originBadge": "Midterm Sample #7 • My Midterm Q6",
    "userExamAttempt": {
      "exam": "Midterm",
      "qNum": 6,
      "selectedText": "20 minutes",
      "isCorrect": true
    },
    "question": "A job waits 12 minutes in a queue and then executes for 8 minutes. What is its response time, measured from submission to completion?",
    "options": [
      {
        "id": "A",
        "text": "16 minutes"
      },
      {
        "id": "B",
        "text": "8 minutes"
      },
      {
        "id": "C",
        "text": "12 minutes"
      },
      {
        "id": "D",
        "text": "20 minutes"
      },
      {
        "id": "E",
        "text": "24 minutes"
      }
    ],
    "correctOptionId": "D",
    "correctAnswerText": "20 minutes",
    "explanation": "Response time (turnaround time) is measured from the moment of submission to complete finishing: Queue Wait Time (12 min) + Execution Time (8 min) = 20 minutes."
  },
  {
    "id": 8,
    "part": "midterm",
    "topic": "HPC fundamentals",
    "inSample": true,
    "inExam": false,
    "sampleNum": 8,
    "moodleNum": null,
    "originBadge": "Midterm Sample #8",
    "userExamAttempt": null,
    "question": "Assume distinct array elements and no aliasing. Which loop is directly suitable for parallelizing its iterations?",
    "options": [
      {
        "id": "A",
        "text": "a[i] = 2*a[i-1] for increasing i"
      },
      {
        "id": "B",
        "text": "x = 3*x + 1 using the preceding x"
      },
      {
        "id": "C",
        "text": "fib[i] = fib[i-1] + fib[i-2] for increasing i"
      },
      {
        "id": "D",
        "text": "a[i] = a[i-1] + 1 for increasing i"
      },
      {
        "id": "E",
        "text": "z[i] = x[i] + y[i] for each i"
      }
    ],
    "correctOptionId": "E",
    "correctAnswerText": "z[i] = x[i] + y[i] for each i",
    "explanation": "The loop 'z[i] = x[i] + y[i]' has no loop-carried data dependencies (each iteration i writes to z[i] using only x[i] and y[i], completely independent of any other iteration j). All other options have loop-carried dependencies (recurrences)."
  },
  {
    "id": 9,
    "part": "midterm",
    "topic": "HPC fundamentals",
    "inSample": true,
    "inExam": false,
    "sampleNum": 9,
    "moodleNum": null,
    "originBadge": "Midterm Sample #9",
    "userExamAttempt": null,
    "question": "The best sequential version takes 120 seconds and a parallel version on 8 processors takes 20 seconds. What is the speedup?",
    "options": [
      {
        "id": "A",
        "text": "4"
      },
      {
        "id": "B",
        "text": "5"
      },
      {
        "id": "C",
        "text": "8"
      },
      {
        "id": "D",
        "text": "6"
      },
      {
        "id": "E",
        "text": "10"
      }
    ],
    "correctOptionId": "D",
    "correctAnswerText": "6",
    "explanation": "Speedup S = T_sequential / T_parallel = 120s / 20s = 6. (Parallel efficiency is 6 / 8 = 75%)."
  },
  {
    "id": 10,
    "part": "midterm",
    "topic": "HPC fundamentals",
    "inSample": true,
    "inExam": true,
    "sampleNum": 10,
    "moodleNum": 8,
    "originBadge": "Midterm Sample #10 • My Midterm Q8",
    "userExamAttempt": {
      "exam": "Midterm",
      "qNum": 8,
      "selectedText": "Communication and synchronization overhead can exceed the computation saved",
      "isCorrect": true
    },
    "question": "Why can a parallel version run more slowly than a sequential version on a small input?",
    "options": [
      {
        "id": "A",
        "text": "The number of processors replaces execution time in the speedup formula"
      },
      {
        "id": "B",
        "text": "Having fewer iterations per worker guarantees lower total runtime"
      },
      {
        "id": "C",
        "text": "Idle workers increase useful arithmetic work by definition"
      },
      {
        "id": "D",
        "text": "Dividing the data changes the sequential baseline to the sum of worker times"
      },
      {
        "id": "E",
        "text": "Communication and synchronization overhead can exceed the computation saved"
      }
    ],
    "correctOptionId": "E",
    "correctAnswerText": "Communication and synchronization overhead can exceed the computation saved",
    "explanation": "Creating threads/processes, synchronizing them (barriers/locks), and exchanging messages incur overhead. When input size is small, this overhead can exceed the execution time saved by dividing the work among processors."
  },
  {
    "id": 11,
    "part": "midterm",
    "topic": "Memory and parallel design",
    "inSample": true,
    "inExam": true,
    "sampleNum": 11,
    "moodleNum": 26,
    "originBadge": "Midterm Sample #11 • My Midterm Q26",
    "userExamAttempt": {
      "exam": "Midterm",
      "qNum": 26,
      "selectedText": "More accesses can be served from cache instead of lower memory levels",
      "isCorrect": true
    },
    "question": "A loop repeatedly accesses a small data set that remains in cache after its first pass. Why are later passes likely to spend less time waiting for data?",
    "options": [
      {
        "id": "A",
        "text": "Main memory becomes physically larger after the first pass"
      },
      {
        "id": "B",
        "text": "More accesses can be served from cache instead of lower memory levels"
      },
      {
        "id": "C",
        "text": "The cache permanently increases the clock frequency"
      },
      {
        "id": "D",
        "text": "Each later pass necessarily executes fewer loop iterations"
      },
      {
        "id": "E",
        "text": "The first pass eliminates the arithmetic in later passes"
      }
    ],
    "correctOptionId": "B",
    "correctAnswerText": "More accesses can be served from cache instead of lower memory levels",
    "explanation": "CPU caches have dramatically lower access latency and higher bandwidth than main memory (RAM). When a working set fits in cache, subsequent passes get cache hits instead of slow memory fetches (temporal locality)."
  },
  {
    "id": 12,
    "part": "midterm",
    "topic": "Memory and parallel design",
    "inSample": true,
    "inExam": true,
    "sampleNum": 12,
    "moodleNum": 28,
    "originBadge": "Midterm Sample #12 • My Midterm Q28",
    "userExamAttempt": {
      "exam": "Midterm",
      "qNum": 28,
      "selectedText": "Programs often reuse a limited set of recently or nearby accessed data",
      "isCorrect": true
    },
    "question": "Why is a CPU cache useful even though it cannot hold all of main memory?",
    "options": [
      {
        "id": "A",
        "text": "Programs often reuse a limited set of recently or nearby accessed data"
      },
      {
        "id": "B",
        "text": "Every program accesses all memory equally often"
      },
      {
        "id": "C",
        "text": "Cache capacity automatically expands to match the working set"
      },
      {
        "id": "D",
        "text": "Each data item is placed in a register for the entire program"
      },
      {
        "id": "E",
        "text": "Using cache removes the need for data transfers from main memory"
      }
    ],
    "correctOptionId": "A",
    "correctAnswerText": "Programs often reuse a limited set of recently or nearby accessed data",
    "explanation": "The principle of locality states that programs tend to reuse memory locations recently accessed (temporal locality) or access locations near recent accesses (spatial locality), allowing a small, fast cache to serve the vast majority of memory requests."
  },
  {
    "id": 13,
    "part": "midterm",
    "topic": "Memory and parallel design",
    "inSample": true,
    "inExam": true,
    "sampleNum": 13,
    "moodleNum": 25,
    "originBadge": "Midterm Sample #13 • My Midterm Q25",
    "userExamAttempt": {
      "exam": "Midterm",
      "qNum": 25,
      "selectedText": "A cache hit because the value was recently fetched",
      "isCorrect": true
    },
    "question": "A program loads a value from main memory and immediately reads it again. Assume its cache line remains present. What is most likely for the second read?",
    "options": [
      {
        "id": "A",
        "text": "A hit only if the value has been modified since the first read"
      },
      {
        "id": "B",
        "text": "A miss unless the address changes to a neighboring element"
      },
      {
        "id": "C",
        "text": "A compulsory miss because it is a separate read instruction"
      },
      {
        "id": "D",
        "text": "A disk access because the first load has finished"
      },
      {
        "id": "E",
        "text": "A cache hit because the value was recently fetched"
      }
    ],
    "correctOptionId": "E",
    "correctAnswerText": "A cache hit because the value was recently fetched",
    "explanation": "Because the data was just loaded into cache and the cache line has not been evicted, the subsequent read of the same address will hit directly in the cache (temporal locality)."
  },
  {
    "id": 14,
    "part": "midterm",
    "topic": "Memory and parallel design",
    "inSample": true,
    "inExam": false,
    "sampleNum": 14,
    "moodleNum": null,
    "originBadge": "Midterm Sample #14",
    "userExamAttempt": null,
    "question": "A program reads a[0], a[1], a[2], and a[3] consecutively. Which feature most directly helps this access pattern?",
    "options": [
      {
        "id": "A",
        "text": "Assigning each adjacent element to a different cache line"
      },
      {
        "id": "B",
        "text": "Increasing the stride between consecutive accesses"
      },
      {
        "id": "C",
        "text": "Keeping only the most recently used element rather than its neighbors"
      },
      {
        "id": "D",
        "text": "Reusing the same individual element many times"
      },
      {
        "id": "E",
        "text": "A cache line containing neighboring array elements"
      }
    ],
    "correctOptionId": "E",
    "correctAnswerText": "A cache line containing neighboring array elements",
    "explanation": "Memory is transferred between main memory and cache in chunks called cache lines (typically 64 bytes). Fetching a[0] brings the entire cache line containing consecutive array elements a[1], a[2], and a[3] into cache (spatial locality)."
  },
  {
    "id": 15,
    "part": "midterm",
    "topic": "Memory and parallel design",
    "inSample": true,
    "inExam": false,
    "sampleNum": 15,
    "moodleNum": null,
    "originBadge": "Midterm Sample #15",
    "userExamAttempt": null,
    "question": "Each matrix element is read ten times in independent calculations, and reordering is valid. Which organization best exploits temporal locality?",
    "options": [
      {
        "id": "A",
        "text": "Complete the ten uses of an element before moving to the next element"
      },
      {
        "id": "B",
        "text": "Perform five full scans, then another five full scans"
      },
      {
        "id": "C",
        "text": "Scan the full matrix once for each of the ten calculations"
      },
      {
        "id": "D",
        "text": "Complete each calculation across all elements before starting the next"
      },
      {
        "id": "E",
        "text": "Visit each element once before returning to any element"
      }
    ],
    "correctOptionId": "A",
    "correctAnswerText": "Complete the ten uses of an element before moving to the next element",
    "explanation": "Temporal locality is maximized by performing all operations on an element while it resides in the CPU cache/registers before moving to another element, avoiding repeated loads from slower memory levels."
  },
  {
    "id": 16,
    "part": "midterm",
    "topic": "Memory and parallel design",
    "inSample": true,
    "inExam": true,
    "sampleNum": 16,
    "moodleNum": 30,
    "originBadge": "Midterm Sample #16 • My Midterm Q30",
    "userExamAttempt": {
      "exam": "Midterm",
      "qNum": 30,
      "selectedText": "Agglomeration",
      "isCorrect": true
    },
    "question": "A designer has identified small tasks and their communication, then combines neighboring tasks before assigning them to processors. Which design step is the combination?",
    "options": [
      {
        "id": "A",
        "text": "Mapping"
      },
      {
        "id": "B",
        "text": "Agglomeration"
      },
      {
        "id": "C",
        "text": "Communication identification"
      },
      {
        "id": "D",
        "text": "Load measurement"
      },
      {
        "id": "E",
        "text": "Partitioning"
      }
    ],
    "correctOptionId": "B",
    "correctAnswerText": "Agglomeration",
    "explanation": "In Ian Foster's parallel algorithm design methodology (PCAM: Partitioning, Communication, Agglomeration, Mapping), Agglomeration is the stage where fine-grained tasks and communication are grouped into larger composite tasks."
  },
  {
    "id": 17,
    "part": "midterm",
    "topic": "Memory and parallel design",
    "inSample": true,
    "inExam": true,
    "sampleNum": 17,
    "moodleNum": 24,
    "originBadge": "Midterm Sample #17 • My Midterm Q24",
    "userExamAttempt": {
      "exam": "Midterm",
      "qNum": 24,
      "selectedText": "Reduce communication and scheduling overhead relative to useful computation",
      "isCorrect": true
    },
    "question": "What is a principal reason to agglomerate many small tasks?",
    "options": [
      {
        "id": "A",
        "text": "Increase scheduling opportunities by making each task still smaller"
      },
      {
        "id": "B",
        "text": "Remove data dependencies by changing processor assignments"
      },
      {
        "id": "C",
        "text": "Reduce communication and scheduling overhead relative to useful computation"
      },
      {
        "id": "D",
        "text": "Improve balance by forcing exactly one task per processor"
      },
      {
        "id": "E",
        "text": "Reduce useful arithmetic by assigning the same tasks to all processors"
      }
    ],
    "correctOptionId": "C",
    "correctAnswerText": "Reduce communication and scheduling overhead relative to useful computation",
    "explanation": "Fine-grained tasks create excessive communication and scheduling overhead relative to actual computation. Agglomerating tasks increases task granularity and improves the computation-to-communication ratio."
  },
  {
    "id": 18,
    "part": "midterm",
    "topic": "Memory and parallel design",
    "inSample": true,
    "inExam": false,
    "sampleNum": 18,
    "moodleNum": null,
    "originBadge": "Midterm Sample #18",
    "userExamAttempt": null,
    "question": "A simulation divides its spatial grid into regions and applies the same update to each region. Which approach is this?",
    "options": [
      {
        "id": "A",
        "text": "Agglomeration of different functions"
      },
      {
        "id": "B",
        "text": "Dynamic mapping"
      },
      {
        "id": "C",
        "text": "Functional decomposition"
      },
      {
        "id": "D",
        "text": "Domain decomposition"
      },
      {
        "id": "E",
        "text": "Collective communication"
      }
    ],
    "correctOptionId": "D",
    "correctAnswerText": "Domain decomposition",
    "explanation": "Domain decomposition (data parallelism) divides the physical or spatial grid/data structures into subdomains assigned to different processors, each running similar update algorithms on its local domain."
  },
  {
    "id": 19,
    "part": "midterm",
    "topic": "Memory and parallel design",
    "inSample": true,
    "inExam": false,
    "sampleNum": 19,
    "moodleNum": null,
    "originBadge": "Midterm Sample #19",
    "userExamAttempt": null,
    "question": "Independent Monte Carlo trials need no communication while generating samples, but their counts must be combined at the end. What pattern is appropriate?",
    "options": [
      {
        "id": "A",
        "text": "Tasks need repeated all-to-all exchanges of intermediate state"
      },
      {
        "id": "B",
        "text": "Tasks share a counter that must be updated at every step"
      },
      {
        "id": "C",
        "text": "Each task depends on the preceding task’s intermediate value"
      },
      {
        "id": "D",
        "text": "Independent local computation followed by a global reduction"
      },
      {
        "id": "E",
        "text": "Tasks require a collective exchange before every arithmetic operation"
      }
    ],
    "correctOptionId": "D",
    "correctAnswerText": "Independent local computation followed by a global reduction",
    "explanation": "Monte Carlo simulations are 'pleasantly/embarrassingly parallel': individual trials run independently without any communication during sampling, and a final global reduction accumulates the counts or averages."
  },
  {
    "id": 20,
    "part": "midterm",
    "topic": "Memory and parallel design",
    "inSample": true,
    "inExam": false,
    "sampleNum": 20,
    "moodleNum": null,
    "originBadge": "Midterm Sample #20",
    "userExamAttempt": null,
    "question": "Sending many very small messages takes longer than sending the same total data in a few larger messages. Which cost most directly explains this?",
    "options": [
      {
        "id": "A",
        "text": "Each small message requires all computations to be repeated"
      },
      {
        "id": "B",
        "text": "Bandwidth is measured in messages rather than bytes per second"
      },
      {
        "id": "C",
        "text": "The startup latency paid for each message"
      },
      {
        "id": "D",
        "text": "The total payload becomes larger when divided into messages"
      },
      {
        "id": "E",
        "text": "The receiver’s clock frequency is determined by message count"
      }
    ],
    "correctOptionId": "C",
    "correctAnswerText": "The startup latency paid for each message",
    "explanation": "Every network transmission incurs a fixed startup latency (message preparation, headers, handshakes). Sending many small messages multiplies this latency cost compared to batching the data into fewer larger messages."
  },
  {
    "id": 21,
    "part": "midterm",
    "topic": "MPI",
    "inSample": true,
    "inExam": false,
    "sampleNum": 21,
    "moodleNum": null,
    "originBadge": "Midterm Sample #21",
    "userExamAttempt": null,
    "question": "Each process has one local maximum, and every process needs the global maximum. Which single collective is most appropriate?",
    "options": [
      {
        "id": "A",
        "text": "MPI_Allreduce with MPI_MAX"
      },
      {
        "id": "B",
        "text": "MPI_Bcast of rank 0’s local maximum"
      },
      {
        "id": "C",
        "text": "MPI_Allgather of all local maxima"
      },
      {
        "id": "D",
        "text": "MPI_Reduce with MPI_MAX"
      },
      {
        "id": "E",
        "text": "MPI_Allreduce with MPI_SUM"
      }
    ],
    "correctOptionId": "A",
    "correctAnswerText": "MPI_Allreduce with MPI_MAX",
    "explanation": "MPI_Allreduce computes a reduction across all ranks (here using the MPI_MAX operator) and places the final reduced value in every process's receive buffer, exactly fulfilling the requirement without extra broadcasts."
  },
  {
    "id": 22,
    "part": "midterm",
    "topic": "MPI",
    "inSample": true,
    "inExam": true,
    "sampleNum": 22,
    "moodleNum": 39,
    "originBadge": "Midterm Sample #22 • My Midterm Q39",
    "userExamAttempt": {
      "exam": "Midterm",
      "qNum": 39,
      "selectedText": "Processes run the same program but can take different branches and operate on different data",
      "isCorrect": true
    },
    "question": "What does the SPMD model mean in a typical MPI program?",
    "options": [
      {
        "id": "A",
        "text": "Processes run the same program but can take different branches and operate on different data"
      },
      {
        "id": "B",
        "text": "All processes execute the same instruction at the same instant"
      },
      {
        "id": "C",
        "text": "Each data element must be processed by every rank"
      },
      {
        "id": "D",
        "text": "Each process must run a different executable"
      },
      {
        "id": "E",
        "text": "All ordinary variables have shared storage across ranks"
      }
    ],
    "correctOptionId": "A",
    "correctAnswerText": "Processes run the same program but can take different branches and operate on different data",
    "explanation": "SPMD (Single Program, Multiple Data) means all MPI processes run copies of the identical program binary, but can execute different execution paths/branches based on their rank (e.g. if (rank == 0)) and process distinct data."
  },
  {
    "id": 23,
    "part": "midterm",
    "topic": "MPI",
    "inSample": true,
    "inExam": false,
    "sampleNum": 23,
    "moodleNum": null,
    "originBadge": "Midterm Sample #23",
    "userExamAttempt": null,
    "question": "A process belongs to two different communicators. Which statement is correct?",
    "options": [
      {
        "id": "A",
        "text": "Its rank is its physical core number in both communicators"
      },
      {
        "id": "B",
        "text": "It must have different ranks in both communicators"
      },
      {
        "id": "C",
        "text": "It may have different ranks in the two communicators"
      },
      {
        "id": "D",
        "text": "Its rank must equal the total number of its communicators"
      },
      {
        "id": "E",
        "text": "It must have the same rank in both communicators"
      }
    ],
    "correctOptionId": "C",
    "correctAnswerText": "It may have different ranks in the two communicators",
    "explanation": "In MPI, ranks are assigned relative to a specific communicator. A process can have rank 0 in a custom sub-communicator while having rank 5 in MPI_COMM_WORLD."
  },
  {
    "id": 24,
    "part": "midterm",
    "topic": "MPI",
    "inSample": true,
    "inExam": true,
    "sampleNum": 24,
    "moodleNum": 33,
    "originBadge": "Midterm Sample #24 • My Midterm Q33",
    "userExamAttempt": {
      "exam": "Midterm",
      "qNum": 33,
      "selectedText": "0 through 5",
      "isCorrect": true
    },
    "question": "A communicator contains six processes. What are their ranks within that communicator?",
    "options": [
      {
        "id": "A",
        "text": "The physical core numbers, regardless of communicator membership"
      },
      {
        "id": "B",
        "text": "0 through 5"
      },
      {
        "id": "C",
        "text": "1 through 5"
      },
      {
        "id": "D",
        "text": "0 through 6"
      },
      {
        "id": "E",
        "text": "1 through 6"
      }
    ],
    "correctOptionId": "B",
    "correctAnswerText": "0 through 5",
    "explanation": "Ranks in any MPI communicator of size N are always zero-indexed, consecutive integers from 0 to N-1. For 6 processes, the ranks are 0 through 5."
  },
  {
    "id": 25,
    "part": "midterm",
    "topic": "MPI",
    "inSample": true,
    "inExam": true,
    "sampleNum": 25,
    "moodleNum": 34,
    "originBadge": "Midterm Sample #25 • My Midterm Q34",
    "userExamAttempt": {
      "exam": "Midterm",
      "qNum": 34,
      "selectedText": "No; different ranks can run on the same node",
      "isCorrect": true
    },
    "question": "Two processes have different ranks in MPI_COMM_WORLD. Does that alone show that they run on different physical nodes?",
    "options": [
      {
        "id": "A",
        "text": "Yes; all processes on one node share a rank"
      },
      {
        "id": "B",
        "text": "No; different ranks must share one address space"
      },
      {
        "id": "C",
        "text": "Yes; each rank identifies a separate node"
      },
      {
        "id": "D",
        "text": "No; rank determines thread count instead of process identity"
      },
      {
        "id": "E",
        "text": "No; different ranks can run on the same node"
      }
    ],
    "correctOptionId": "E",
    "correctAnswerText": "No; different ranks can run on the same node",
    "explanation": "MPI ranks represent processes, not physical nodes. A multi-core machine or single workstation can host multiple MPI processes belonging to the same communicator."
  },
  {
    "id": 26,
    "part": "midterm",
    "topic": "MPI",
    "inSample": true,
    "inExam": false,
    "sampleNum": 26,
    "moodleNum": null,
    "originBadge": "Midterm Sample #26",
    "userExamAttempt": null,
    "question": "A rank contributes a local sum to MPI_Reduce with root 0. Which rank is guaranteed to receive the combined result in its receive buffer?",
    "options": [
      {
        "id": "A",
        "text": "All ranks except rank 0"
      },
      {
        "id": "B",
        "text": "Only the rank that enters the reduction last"
      },
      {
        "id": "C",
        "text": "Only the rank with the largest local sum"
      },
      {
        "id": "D",
        "text": "Every rank"
      },
      {
        "id": "E",
        "text": "Only rank 0"
      }
    ],
    "correctOptionId": "E",
    "correctAnswerText": "Only rank 0",
    "explanation": "MPI_Reduce is a rooted collective operation: only the process designated as 'root' receives the combined reduction result. (MPI_Allreduce would deliver to all ranks)."
  },
  {
    "id": 27,
    "part": "midterm",
    "topic": "MPI",
    "inSample": true,
    "inExam": true,
    "sampleNum": 27,
    "moodleNum": 36,
    "originBadge": "Midterm Sample #27 • My Midterm Q36",
    "userExamAttempt": {
      "exam": "Midterm",
      "qNum": 36,
      "selectedText": "Five elements of type MPI_DOUBLE",
      "isCorrect": true
    },
    "question": "In MPI_Send(buffer, 5, MPI_DOUBLE, ...), what does the count 5 represent?",
    "options": [
      {
        "id": "A",
        "text": "Five bytes regardless of datatype"
      },
      {
        "id": "B",
        "text": "Five bytes for each process in the communicator"
      },
      {
        "id": "C",
        "text": "Five separate messages"
      },
      {
        "id": "D",
        "text": "Five elements of type MPI_DOUBLE"
      },
      {
        "id": "E",
        "text": "Five destination processes"
      }
    ],
    "correctOptionId": "D",
    "correctAnswerText": "Five elements of type MPI_DOUBLE",
    "explanation": "The count argument in MPI_Send represents the number of elements of the specified datatype (MPI_DOUBLE), not the number of bytes or messages."
  },
  {
    "id": 28,
    "part": "midterm",
    "topic": "MPI",
    "inSample": true,
    "inExam": false,
    "sampleNum": 28,
    "moodleNum": null,
    "originBadge": "Midterm Sample #28",
    "userExamAttempt": null,
    "question": "MPI_Test returns with its completion flag false. What does this tell the application?",
    "options": [
      {
        "id": "A",
        "text": "The operation must be restarted with a new send"
      },
      {
        "id": "B",
        "text": "The request has been cancelled"
      },
      {
        "id": "C",
        "text": "The request was not complete when tested; buffer reuse must still respect the pending operation"
      },
      {
        "id": "D",
        "text": "All processes must call MPI_Test simultaneously"
      },
      {
        "id": "E",
        "text": "The request has completed but the data is invalid"
      }
    ],
    "correctOptionId": "C",
    "correctAnswerText": "The request was not complete when tested; buffer reuse must still respect the pending operation",
    "explanation": "MPI_Test non-blockingly checks if an ongoing non-blocking operation (such as MPI_Isend or MPI_Irecv) has finished. If it returns false, the request is still pending and the buffer cannot yet be safely reused."
  },
  {
    "id": 29,
    "part": "midterm",
    "topic": "MPI",
    "inSample": true,
    "inExam": true,
    "sampleNum": 29,
    "moodleNum": 32,
    "originBadge": "Midterm Sample #29 • My Midterm Q32",
    "userExamAttempt": {
      "exam": "Midterm",
      "qNum": 32,
      "selectedText": "8",
      "isCorrect": true
    },
    "question": "Four ranks each contribute two integers to MPI_Gather. What is the minimum root receive-buffer capacity in integers for these contributions?",
    "options": [
      {
        "id": "A",
        "text": "2"
      },
      {
        "id": "B",
        "text": "8"
      },
      {
        "id": "C",
        "text": "6"
      },
      {
        "id": "D",
        "text": "16"
      },
      {
        "id": "E",
        "text": "4"
      }
    ],
    "correctOptionId": "B",
    "correctAnswerText": "8",
    "explanation": "In MPI_Gather, the root gathers recvcount items from all N ranks. With 4 ranks each sending 2 integers, the root receive buffer must hold at least 4 × 2 = 8 integers."
  },
  {
    "id": 30,
    "part": "midterm",
    "topic": "MPI",
    "inSample": true,
    "inExam": false,
    "sampleNum": 30,
    "moodleNum": null,
    "originBadge": "Midterm Sample #30",
    "userExamAttempt": null,
    "question": "Ranks 0 through 3 contribute 2, 4, 6, and 8 to MPI_Reduce with MPI_SUM and root 0. What result is placed in the root’s receive buffer?",
    "options": [
      {
        "id": "A",
        "text": "10"
      },
      {
        "id": "B",
        "text": "12"
      },
      {
        "id": "C",
        "text": "384"
      },
      {
        "id": "D",
        "text": "20"
      },
      {
        "id": "E",
        "text": "8"
      }
    ],
    "correctOptionId": "D",
    "correctAnswerText": "20",
    "explanation": "The reduction operator is MPI_SUM. The sum of contributions is 2 + 4 + 6 + 8 = 20, which is placed in root rank 0's receive buffer."
  },
  {
    "id": 31,
    "part": "midterm",
    "topic": "OpenMP and hybrid programming",
    "inSample": true,
    "inExam": false,
    "sampleNum": 31,
    "moodleNum": null,
    "originBadge": "Midterm Sample #31",
    "userExamAttempt": null,
    "question": "A shared array fits within one node, and independent iterations update different elements. Which approach most directly uses the node’s cores without first dividing the array among separate processes?",
    "options": [
      {
        "id": "A",
        "text": "An OpenMP critical region around the whole loop executed by every thread"
      },
      {
        "id": "B",
        "text": "An OpenMP parallel for over the independent iterations"
      },
      {
        "id": "C",
        "text": "An MPI broadcast that automatically assigns array iterations to cores"
      },
      {
        "id": "D",
        "text": "An MPI barrier around the unchanged serial loop"
      },
      {
        "id": "E",
        "text": "A plain OpenMP parallel region that makes every thread execute all updates"
      }
    ],
    "correctOptionId": "B",
    "correctAnswerText": "An OpenMP parallel for over the independent iterations",
    "explanation": "In shared memory on a single node, OpenMP's '#pragma omp parallel for' splits the loop iterations among worker threads that concurrently access the shared array directly without process-level message passing."
  },
  {
    "id": 32,
    "part": "midterm",
    "topic": "OpenMP and hybrid programming",
    "inSample": true,
    "inExam": true,
    "sampleNum": 32,
    "moodleNum": 44,
    "originBadge": "Midterm Sample #32 • My Midterm Q44",
    "userExamAttempt": {
      "exam": "Midterm",
      "qNum": 44,
      "selectedText": "Make the temporary private to each thread",
      "isCorrect": true
    },
    "question": "An OpenMP loop uses a temporary variable declared outside the parallel region. Every iteration assigns it before using it. Which change most directly avoids conflicting accesses without serializing the loop?",
    "options": [
      {
        "id": "A",
        "text": "Use static scheduling while keeping the temporary shared"
      },
      {
        "id": "B",
        "text": "Make the temporary private to each thread"
      },
      {
        "id": "C",
        "text": "Initialize the shared temporary to zero before the loop"
      },
      {
        "id": "D",
        "text": "Make the temporary shared explicitly"
      },
      {
        "id": "E",
        "text": "Place a barrier before the loop only"
      }
    ],
    "correctOptionId": "B",
    "correctAnswerText": "Make the temporary private to each thread",
    "explanation": "Declaring a temporary variable 'private(temp)' (or declaring it inside the loop body) gives each thread its own independent instance, eliminating data races without needing critical sections or locks."
  },
  {
    "id": 33,
    "part": "midterm",
    "topic": "OpenMP and hybrid programming",
    "inSample": true,
    "inExam": true,
    "sampleNum": 33,
    "moodleNum": 47,
    "originBadge": "Midterm Sample #33 • My Midterm Q47",
    "userExamAttempt": {
      "exam": "Midterm",
      "qNum": 47,
      "selectedText": "A team executes the region, synchronizes at its end, and the encountering thread continues",
      "isCorrect": true
    },
    "question": "What happens when a thread encounters a typical OpenMP parallel region?",
    "options": [
      {
        "id": "A",
        "text": "Each thread automatically becomes an MPI process"
      },
      {
        "id": "B",
        "text": "The team continues executing all later serial statements in parallel"
      },
      {
        "id": "C",
        "text": "A team executes the region, synchronizes at its end, and the encountering thread continues"
      },
      {
        "id": "D",
        "text": "Each statement is automatically assigned to exactly one team member"
      },
      {
        "id": "E",
        "text": "Only the primary thread executes the region while others wait"
      }
    ],
    "correctOptionId": "C",
    "correctAnswerText": "A team executes the region, synchronizes at its end, and the encountering thread continues",
    "explanation": "Under the OpenMP fork-join model, when a thread encounters a '#pragma omp parallel' directive, it forks a team of threads to execute the block, synchronizes them at the implicit barrier at the end, and the initial thread continues."
  },
  {
    "id": 34,
    "part": "midterm",
    "topic": "OpenMP and hybrid programming",
    "inSample": true,
    "inExam": true,
    "sampleNum": 34,
    "moodleNum": 48,
    "originBadge": "Midterm Sample #34 • My Midterm Q48",
    "userExamAttempt": {
      "exam": "Midterm",
      "qNum": 48,
      "selectedText": "Divide loop iterations among the existing team of threads",
      "isCorrect": true
    },
    "question": "What does an OpenMP for work-sharing construct do?",
    "options": [
      {
        "id": "A",
        "text": "Assign iterations according to their numerical results"
      },
      {
        "id": "B",
        "text": "Execute the entire loop on the first thread to arrive"
      },
      {
        "id": "C",
        "text": "Have every thread execute all iterations"
      },
      {
        "id": "D",
        "text": "Create a new team for each iteration"
      },
      {
        "id": "E",
        "text": "Divide loop iterations among the existing team of threads"
      }
    ],
    "correctOptionId": "E",
    "correctAnswerText": "Divide loop iterations among the existing team of threads",
    "explanation": "The '#pragma omp for' construct is a work-sharing construct that partitions the iterations of the following loop among the threads of the already existing team."
  },
  {
    "id": 35,
    "part": "midterm",
    "topic": "OpenMP and hybrid programming",
    "inSample": true,
    "inExam": false,
    "sampleNum": 35,
    "moodleNum": null,
    "originBadge": "Midterm Sample #35",
    "userExamAttempt": null,
    "question": "Several threads execute sum += value on the same shared integer without synchronization. What is the central problem?",
    "options": [
      {
        "id": "A",
        "text": "The runtime orders all additions by thread number"
      },
      {
        "id": "B",
        "text": "The shared clause gives each thread a private copy"
      },
      {
        "id": "C",
        "text": "The update is safe whenever each thread has a different value"
      },
      {
        "id": "D",
        "text": "Static scheduling makes the shared update indivisible"
      },
      {
        "id": "E",
        "text": "The updates can race because the read-modify-write operations are not protected"
      }
    ],
    "correctOptionId": "E",
    "correctAnswerText": "The updates can race because the read-modify-write operations are not protected",
    "explanation": "'sum += value' consists of three non-atomic machine steps: read sum, add value, write sum. Without protection (such as '#pragma omp atomic' or 'reduction'), threads can interleave these steps resulting in lost updates (race condition)."
  },
  {
    "id": 36,
    "part": "midterm",
    "topic": "OpenMP and hybrid programming",
    "inSample": true,
    "inExam": false,
    "sampleNum": 36,
    "moodleNum": null,
    "originBadge": "Midterm Sample #36",
    "userExamAttempt": null,
    "question": "Before a parallel region, x is 7. Which clause gives each thread its own x initially equal to 7?",
    "options": [
      {
        "id": "A",
        "text": "firstprivate(x)"
      },
      {
        "id": "B",
        "text": "lastprivate(x)"
      },
      {
        "id": "C",
        "text": "reduction(+:x)"
      },
      {
        "id": "D",
        "text": "shared(x)"
      },
      {
        "id": "E",
        "text": "private(x)"
      }
    ],
    "correctOptionId": "A",
    "correctAnswerText": "firstprivate(x)",
    "explanation": "'firstprivate(x)' creates a private copy of x for each thread and initializes each copy with the value x held immediately before entering the parallel construct (which was 7)."
  },
  {
    "id": 37,
    "part": "midterm",
    "topic": "OpenMP and hybrid programming",
    "inSample": true,
    "inExam": false,
    "sampleNum": 37,
    "moodleNum": null,
    "originBadge": "Midterm Sample #37",
    "userExamAttempt": null,
    "question": "A loop has iterations 0 through 11, four threads, and schedule(static,2). Which iterations are assigned to thread 1?",
    "options": [
      {
        "id": "A",
        "text": "1, 5, 9"
      },
      {
        "id": "B",
        "text": "0, 1, 8, 9"
      },
      {
        "id": "C",
        "text": "2, 6, 10"
      },
      {
        "id": "D",
        "text": "2, 3, 10, 11"
      },
      {
        "id": "E",
        "text": "3, 4, 5"
      }
    ],
    "correctOptionId": "D",
    "correctAnswerText": "2, 3, 10, 11",
    "explanation": "With 4 threads (0, 1, 2, 3) and schedule(static, 2): Chunk 0 (iter 0,1) -> Thread 0; Chunk 1 (iter 2,3) -> Thread 1; Chunk 2 (iter 4,5) -> Thread 2; Chunk 3 (iter 6,7) -> Thread 3; Chunk 4 (iter 8,9) -> Thread 0; Chunk 5 (iter 10,11) -> Thread 1. Thus, Thread 1 gets 2, 3, 10, 11."
  },
  {
    "id": 38,
    "part": "midterm",
    "topic": "OpenMP and hybrid programming",
    "inSample": true,
    "inExam": true,
    "sampleNum": 38,
    "moodleNum": 50,
    "originBadge": "Midterm Sample #38 • My Midterm Q50",
    "userExamAttempt": {
      "exam": "Midterm",
      "qNum": 50,
      "selectedText": "The addition order can change, and floating-point addition is not exactly associative",
      "isCorrect": true
    },
    "question": "Why can a correct floating-point parallel reduction differ slightly from a sequential sum?",
    "options": [
      {
        "id": "A",
        "text": "Each thread includes every input value, increasing the total"
      },
      {
        "id": "B",
        "text": "The runtime rounds each thread’s result to an integer"
      },
      {
        "id": "C",
        "text": "The addition order can change, and floating-point addition is not exactly associative"
      },
      {
        "id": "D",
        "text": "The reduction changes the declared precision of the variable"
      },
      {
        "id": "E",
        "text": "Different thread IDs directly change the input values"
      }
    ],
    "correctOptionId": "C",
    "correctAnswerText": "The addition order can change, and floating-point addition is not exactly associative",
    "explanation": "Floating-point addition is not strictly associative due to finite-precision rounding: (a + b) + c ≠ a + (b + c). A parallel tree reduction changes the order in which numbers are summed compared to a sequential loop, producing slight differences."
  },
  {
    "id": 39,
    "part": "midterm",
    "topic": "OpenMP and hybrid programming",
    "inSample": true,
    "inExam": false,
    "sampleNum": 39,
    "moodleNum": null,
    "originBadge": "Midterm Sample #39",
    "userExamAttempt": null,
    "question": "Assume valid OpenMP execution. What is sum after this code?\n\n```c\nint sum = 0;\n#pragma omp parallel for reduction(+:sum)\nfor (int i = 1; i <= 4; ++i)\nsum += i;\n```",
    "options": [
      {
        "id": "A",
        "text": "8"
      },
      {
        "id": "B",
        "text": "6"
      },
      {
        "id": "C",
        "text": "16"
      },
      {
        "id": "D",
        "text": "10"
      },
      {
        "id": "E",
        "text": "4"
      }
    ],
    "correctOptionId": "D",
    "correctAnswerText": "10",
    "explanation": "The reduction(+:sum) clause properly sums the loop values: sum = 1 + 2 + 3 + 4 = 10."
  },
  {
    "id": 40,
    "part": "midterm",
    "topic": "OpenMP and hybrid programming",
    "inSample": true,
    "inExam": false,
    "sampleNum": 40,
    "moodleNum": null,
    "originBadge": "Midterm Sample #40",
    "userExamAttempt": null,
    "question": "A cluster application uses MPI between nodes and OpenMP within each process. What is one potential advantage over keeping many separate copies in MPI processes on a node?",
    "options": [
      {
        "id": "A",
        "text": "Threads can share suitable data and reduce replication within each process"
      },
      {
        "id": "B",
        "text": "All process-private arrays become globally shared automatically"
      },
      {
        "id": "C",
        "text": "The serial fraction disappears when both models are used"
      },
      {
        "id": "D",
        "text": "MPI messages become unnecessary between nodes"
      },
      {
        "id": "E",
        "text": "Every hybrid configuration must outperform an MPI-only configuration"
      }
    ],
    "correctOptionId": "A",
    "correctAnswerText": "Threads can share suitable data and reduce replication within each process",
    "explanation": "In hybrid MPI + OpenMP, multiple threads within an MPI process share the process's virtual memory space. This eliminates the need to replicate shared data structures (e.g. read-only grids or matrices) across cores on the same node."
  },
  {
    "id": 41,
    "part": "midterm",
    "topic": "MapReduce and distributed storage",
    "inSample": true,
    "inExam": false,
    "sampleNum": 41,
    "moodleNum": null,
    "originBadge": "Midterm Sample #41",
    "userExamAttempt": null,
    "question": "Which task is directly suited to a single basic MapReduce job?",
    "options": [
      {
        "id": "A",
        "text": "Compute total sales per product from many independent transaction records"
      },
      {
        "id": "B",
        "text": "Modify one shared mutable record after every individual input record"
      },
      {
        "id": "C",
        "text": "Update a state through a strict chain where each step needs the previous result"
      },
      {
        "id": "D",
        "text": "Exchange grid-boundary values repeatedly within every map call"
      },
      {
        "id": "E",
        "text": "Perform each iteration only after a global convergence check from the previous iteration"
      }
    ],
    "correctOptionId": "A",
    "correctAnswerText": "Compute total sales per product from many independent transaction records",
    "explanation": "Computing aggregate metrics (e.g. total sales per product) from independent key-value records is the prototypical MapReduce workload: map outputs (product, sales), shuffle groups by product, and reduce sums sales per product."
  },
  {
    "id": 42,
    "part": "midterm",
    "topic": "MapReduce and distributed storage",
    "inSample": true,
    "inExam": true,
    "sampleNum": 42,
    "moodleNum": 18,
    "originBadge": "Midterm Sample #42 • My Midterm Q18",
    "userExamAttempt": {
      "exam": "Midterm",
      "qNum": 18,
      "selectedText": "Key apple with values [2,3]",
      "isCorrect": true
    },
    "question": "Two mappers emit (apple,2) and (apple,3). What grouped input should the sum reducer receive for apple?",
    "options": [
      {
        "id": "A",
        "text": "Key apple with the single value [5]"
      },
      {
        "id": "B",
        "text": "Key apple with values [2,3]"
      },
      {
        "id": "C",
        "text": "Key 2 with value apple and key 3 with value apple"
      },
      {
        "id": "D",
        "text": "Key apple with values [1,1]"
      },
      {
        "id": "E",
        "text": "Two independent reduce groups, one with [2] and one with [3]"
      }
    ],
    "correctOptionId": "B",
    "correctAnswerText": "Key apple with values [2,3]",
    "explanation": "The shuffle-and-sort phase in MapReduce groups all emitted values sharing the identical key together: here key 'apple' is grouped with the list of values [2, 3] and passed to the reducer."
  },
  {
    "id": 43,
    "part": "midterm",
    "topic": "MapReduce and distributed storage",
    "inSample": true,
    "inExam": true,
    "sampleNum": 43,
    "moodleNum": 17,
    "originBadge": "Midterm Sample #43 • My Midterm Q17",
    "userExamAttempt": {
      "exam": "Midterm",
      "qNum": 17,
      "selectedText": "A pair containing its sum and count",
      "isCorrect": true
    },
    "question": "A mapper summarizes [2,4] and another summarizes [10]. To compute the overall mean correctly through local aggregation, what should each emit for the same key?",
    "options": [
      {
        "id": "A",
        "text": "Only its sum, followed by division by the number of mappers"
      },
      {
        "id": "B",
        "text": "Only its mean, followed by an unweighted average of mapper means"
      },
      {
        "id": "C",
        "text": "Only its count, followed by division by the number of mappers"
      },
      {
        "id": "D",
        "text": "A pair containing its sum and count"
      },
      {
        "id": "E",
        "text": "Its mean and minimum, ignoring the number of observations"
      }
    ],
    "correctOptionId": "D",
    "correctAnswerText": "A pair containing its sum and count",
    "explanation": "To compute an overall average across distributed mappers, the reducer requires both the total sum and total count (mean = sum / count). Emitting only the local average would cause an inaccurate unweighted average."
  },
  {
    "id": 44,
    "part": "midterm",
    "topic": "MapReduce and distributed storage",
    "inSample": true,
    "inExam": false,
    "sampleNum": 44,
    "moodleNum": null,
    "originBadge": "Midterm Sample #44",
    "userExamAttempt": null,
    "question": "A mapper emits records with keys A, B, and A. In ordinary per-key reduction, which grouping property must hold?",
    "options": [
      {
        "id": "A",
        "text": "All A and B records must share one reducer regardless of partitioning"
      },
      {
        "id": "B",
        "text": "Mapper identity must determine grouping instead of the intermediate key"
      },
      {
        "id": "C",
        "text": "Every distinct key needs a dedicated physical worker"
      },
      {
        "id": "D",
        "text": "Every A record must be processed by a different reducer"
      },
      {
        "id": "E",
        "text": "Both A records reach the same reducer, which may also handle B"
      }
    ],
    "correctOptionId": "E",
    "correctAnswerText": "Both A records reach the same reducer, which may also handle B",
    "explanation": "The MapReduce framework guarantees that all values associated with the same key (e.g. 'A') are delivered to the same reducer task. That same reducer may also be assigned other keys (e.g. 'B')."
  },
  {
    "id": 45,
    "part": "midterm",
    "topic": "MapReduce and distributed storage",
    "inSample": true,
    "inExam": false,
    "sampleNum": 45,
    "moodleNum": null,
    "originBadge": "Midterm Sample #45",
    "userExamAttempt": null,
    "question": "Which responsibility normally belongs to the MapReduce execution framework?",
    "options": [
      {
        "id": "A",
        "text": "Choosing the meaning of application-specific keys"
      },
      {
        "id": "B",
        "text": "Choosing the business interpretation of output values"
      },
      {
        "id": "C",
        "text": "Scheduling tasks and recovering failed worker tasks"
      },
      {
        "id": "D",
        "text": "Choosing the application’s aggregation formula"
      },
      {
        "id": "E",
        "text": "Deciding which input records are relevant to the analysis"
      }
    ],
    "correctOptionId": "C",
    "correctAnswerText": "Scheduling tasks and recovering failed worker tasks",
    "explanation": "The MapReduce framework manages the low-level infrastructure: scheduling tasks across nodes, tracking execution progress, handling worker node failures, and executing retries."
  },
  {
    "id": 46,
    "part": "midterm",
    "topic": "MapReduce and distributed storage",
    "inSample": true,
    "inExam": true,
    "sampleNum": 46,
    "moodleNum": 19,
    "originBadge": "Midterm Sample #46 • My Midterm Q19",
    "userExamAttempt": {
      "exam": "Midterm",
      "qNum": 19,
      "selectedText": "Horizontal scaling by adding machines",
      "isCorrect": true
    },
    "question": "A system expands from 4 workers to 8 similar workers while retaining distributed execution. Which change has occurred?",
    "options": [
      {
        "id": "A",
        "text": "Replicating output files without adding compute workers"
      },
      {
        "id": "B",
        "text": "Increasing only the number of threads on an unchanged machine"
      },
      {
        "id": "C",
        "text": "Horizontal scaling by adding machines"
      },
      {
        "id": "D",
        "text": "Vertical scaling by upgrading one machine"
      },
      {
        "id": "E",
        "text": "Reducing data size while retaining the same hardware"
      }
    ],
    "correctOptionId": "C",
    "correctAnswerText": "Horizontal scaling by adding machines",
    "explanation": "Horizontal scaling (scaling out) involves adding more machines/nodes to the computing cluster. Vertical scaling (scaling up) means upgrading the hardware (CPU/RAM) of an existing node."
  },
  {
    "id": 47,
    "part": "midterm",
    "topic": "MapReduce and distributed storage",
    "inSample": true,
    "inExam": false,
    "sampleNum": 47,
    "moodleNum": null,
    "originBadge": "Midterm Sample #47",
    "userExamAttempt": null,
    "question": "What is the primary purpose of a combiner in a word-count job?",
    "options": [
      {
        "id": "A",
        "text": "Combine all global counts before any mapper finishes"
      },
      {
        "id": "B",
        "text": "Choose which reducer owns each key"
      },
      {
        "id": "C",
        "text": "Guarantee that each word occurs on only one mapper"
      },
      {
        "id": "D",
        "text": "Sort the final output across all reducers"
      },
      {
        "id": "E",
        "text": "Aggregate local counts to reduce intermediate network traffic"
      }
    ],
    "correctOptionId": "E",
    "correctAnswerText": "Aggregate local counts to reduce intermediate network traffic",
    "explanation": "A combiner is a local reducer that runs on the mapper node directly after the map phase to pre-aggregate intermediate values (e.g., sum local word counts), drastically reducing the volume of data sent across the network during the shuffle phase."
  },
  {
    "id": 48,
    "part": "midterm",
    "topic": "MapReduce and distributed storage",
    "inSample": true,
    "inExam": false,
    "sampleNum": 48,
    "moodleNum": null,
    "originBadge": "Midterm Sample #48",
    "userExamAttempt": null,
    "question": "For a basic inverted index, what should the mapper emit for word w found in document d?",
    "options": [
      {
        "id": "A",
        "text": "(1,w)"
      },
      {
        "id": "B",
        "text": "(w,d)"
      },
      {
        "id": "C",
        "text": "(d,1)"
      },
      {
        "id": "D",
        "text": "(d,w)"
      },
      {
        "id": "E",
        "text": "(w,1)"
      }
    ],
    "correctOptionId": "B",
    "correctAnswerText": "(w,d)",
    "explanation": "An inverted index maps terms/words to the documents in which they appear (word -> list of docs). Therefore, the mapper emits (word, doc_id), i.e., (w, d)."
  },
  {
    "id": 49,
    "part": "midterm",
    "topic": "MapReduce and distributed storage",
    "inSample": true,
    "inExam": false,
    "sampleNum": 49,
    "moodleNum": null,
    "originBadge": "Midterm Sample #49",
    "userExamAttempt": null,
    "question": "An HDFS client knows a filename but needs to locate its blocks. Which component normally supplies block-location metadata?",
    "options": [
      {
        "id": "A",
        "text": "The word-count reducer"
      },
      {
        "id": "B",
        "text": "The MapReduce partitioner"
      },
      {
        "id": "C",
        "text": "The map-side combiner"
      },
      {
        "id": "D",
        "text": "The NameNode"
      },
      {
        "id": "E",
        "text": "The DataNode holding the first input record"
      }
    ],
    "correctOptionId": "D",
    "correctAnswerText": "The NameNode",
    "explanation": "In HDFS (Hadoop Distributed File System), the NameNode maintains all filesystem namespace metadata, including the mapping of file paths to block IDs and the DataNodes hosting them."
  },
  {
    "id": 50,
    "part": "midterm",
    "topic": "MapReduce and distributed storage",
    "inSample": true,
    "inExam": true,
    "sampleNum": 50,
    "moodleNum": 13,
    "originBadge": "Midterm Sample #50 • My Midterm Q13",
    "userExamAttempt": {
      "exam": "Midterm",
      "qNum": 13,
      "selectedText": "Directly from the relevant DataNodes",
      "isCorrect": true
    },
    "question": "After obtaining block locations, where does an HDFS client normally get the actual file-block bytes?",
    "options": [
      {
        "id": "A",
        "text": "Directly from the relevant DataNodes"
      },
      {
        "id": "B",
        "text": "From the scheduler that allocated the job"
      },
      {
        "id": "C",
        "text": "From the mapper responsible for the filename"
      },
      {
        "id": "D",
        "text": "Through the NameNode, which relays every block"
      },
      {
        "id": "E",
        "text": "From the reducer assigned to the file’s first key"
      }
    ],
    "correctOptionId": "A",
    "correctAnswerText": "Directly from the relevant DataNodes",
    "explanation": "Once the HDFS client obtains the block locations from the NameNode, it streams the actual raw data blocks directly to and from the respective DataNodes over TCP sockets, preventing the NameNode from becoming a network throughput bottleneck."
  },
  {
    "id": 51,
    "part": "midterm",
    "topic": "HPC fundamentals",
    "inSample": false,
    "inExam": true,
    "sampleNum": null,
    "moodleNum": 3,
    "originBadge": "My Midterm Q3 (Exam Only)",
    "userExamAttempt": {
      "exam": "Midterm",
      "qNum": 3,
      "selectedText": "64",
      "isCorrect": true
    },
    "question": "A cluster has 4 nodes, 2 processor sockets per node, and 8 cores per socket. How many physical cores does it have in total?",
    "options": [
      {
        "id": "A",
        "text": "16"
      },
      {
        "id": "B",
        "text": "32"
      },
      {
        "id": "C",
        "text": "64"
      },
      {
        "id": "D",
        "text": "48"
      },
      {
        "id": "E",
        "text": "128"
      }
    ],
    "correctOptionId": "C",
    "correctAnswerText": "64",
    "explanation": "Multiply across every level of the hardware hierarchy: 4 nodes × 2 sockets/node × 8 cores/socket = 64 physical cores in total."
  },
  {
    "id": 52,
    "part": "midterm",
    "topic": "HPC fundamentals",
    "inSample": false,
    "inExam": true,
    "sampleNum": null,
    "moodleNum": 4,
    "originBadge": "My Midterm Q4 (Exam Only)",
    "userExamAttempt": {
      "exam": "Midterm",
      "qNum": 4,
      "selectedText": "20 seconds",
      "isCorrect": true
    },
    "question": "A sequential program takes 60 seconds. Which parallel execution time gives a speedup of 3?",
    "options": [
      {
        "id": "A",
        "text": "180 seconds"
      },
      {
        "id": "B",
        "text": "20 seconds"
      },
      {
        "id": "C",
        "text": "30 seconds"
      },
      {
        "id": "D",
        "text": "15 seconds"
      },
      {
        "id": "E",
        "text": "18 seconds"
      }
    ],
    "correctOptionId": "B",
    "correctAnswerText": "20 seconds",
    "explanation": "Speedup is defined as S = T_seq / T_par. Given T_seq = 60 s and S = 3, T_par = 60 / 3 = 20 seconds."
  },
  {
    "id": 53,
    "part": "midterm",
    "topic": "HPC fundamentals",
    "inSample": false,
    "inExam": true,
    "sampleNum": null,
    "moodleNum": 5,
    "originBadge": "My Midterm Q5 (Exam Only)",
    "userExamAttempt": {
      "exam": "Midterm",
      "qNum": 5,
      "selectedText": "Reducing communication volume merely by increasing the grid",
      "isCorrect": false
    },
    "question": "A weather model uses additional processors to simulate a finer grid in approximately the same time. Which benefit of parallel computing does this illustrate?",
    "options": [
      {
        "id": "A",
        "text": "Reducing runtime for an unchanged problem size"
      },
      {
        "id": "B",
        "text": "Increasing the problem size that can be handled within a time budget"
      },
      {
        "id": "C",
        "text": "Obtaining ideal speedup on a fixed workload"
      },
      {
        "id": "D",
        "text": "Reducing the serial fraction without changing the algorithm"
      },
      {
        "id": "E",
        "text": "Reducing communication volume merely by increasing the grid"
      }
    ],
    "correctOptionId": "B",
    "correctAnswerText": "Increasing the problem size that can be handled within a time budget",
    "explanation": "This illustrates weak scaling (or increasing problem size/resolution within a fixed time budget): instead of making the same problem faster, additional processors let you simulate a finer, larger grid in roughly the same wall-clock time."
  },
  {
    "id": 54,
    "part": "midterm",
    "topic": "HPC fundamentals",
    "inSample": false,
    "inExam": true,
    "sampleNum": null,
    "moodleNum": 7,
    "originBadge": "My Midterm Q7 (Exam Only)",
    "userExamAttempt": {
      "exam": "Midterm",
      "qNum": 7,
      "selectedText": "Cluster, nodes, cores, chips",
      "isCorrect": false
    },
    "question": "Which hierarchy best describes a typical multicore cluster?",
    "options": [
      {
        "id": "A",
        "text": "Cluster, nodes, processor chips, cores"
      },
      {
        "id": "B",
        "text": "Nodes, cluster, chips, cores"
      },
      {
        "id": "C",
        "text": "Cluster, chips, nodes, cores"
      },
      {
        "id": "D",
        "text": "Cluster, nodes, cores, chips"
      },
      {
        "id": "E",
        "text": "Cluster, cores, chips, nodes"
      }
    ],
    "correctOptionId": "A",
    "correctAnswerText": "Cluster, nodes, processor chips, cores",
    "explanation": "In a typical multicore cluster hierarchy from top to bottom: a Cluster consists of multiple compute Nodes, each node holds one or more Processor Chips (sockets), and each processor chip contains multiple Cores."
  },
  {
    "id": 55,
    "part": "midterm",
    "topic": "HPC fundamentals",
    "inSample": false,
    "inExam": true,
    "sampleNum": null,
    "moodleNum": 9,
    "originBadge": "My Midterm Q9 (Exam Only)",
    "userExamAttempt": {
      "exam": "Midterm",
      "qNum": 9,
      "selectedText": "8.1",
      "isCorrect": false
    },
    "question": "A program has a 10% serial fraction and a 90% perfectly parallel fraction. Ignoring overhead, what speedup does Amdahl's law predict on 9 processors?",
    "options": [
      {
        "id": "A",
        "text": "8.1"
      },
      {
        "id": "B",
        "text": "10"
      },
      {
        "id": "C",
        "text": "4.5"
      },
      {
        "id": "D",
        "text": "9"
      },
      {
        "id": "E",
        "text": "5"
      }
    ],
    "correctOptionId": "E",
    "correctAnswerText": "5",
    "explanation": "By Amdahl's Law, S(p) = 1 / (s + (1 - s) / p). Here the serial fraction s = 0.10, parallel fraction 1 - s = 0.90, and p = 9 processors: S(9) = 1 / (0.10 + 0.90 / 9) = 1 / (0.10 + 0.10) = 1 / 0.20 = 5."
  },
  {
    "id": 56,
    "part": "midterm",
    "topic": "HPC fundamentals",
    "inSample": false,
    "inExam": true,
    "sampleNum": null,
    "moodleNum": 10,
    "originBadge": "My Midterm Q10 (Exam Only)",
    "userExamAttempt": {
      "exam": "Midterm",
      "qNum": 10,
      "selectedText": "96 GFLOP/s",
      "isCorrect": false
    },
    "question": "A machine has 2 sockets, 8 cores per socket, a 2 GHz clock, and 4 floating-point operations per core per cycle. What is its theoretical peak performance?",
    "options": [
      {
        "id": "A",
        "text": "32 GFLOP/s"
      },
      {
        "id": "B",
        "text": "96 GFLOP/s"
      },
      {
        "id": "C",
        "text": "64 GFLOP/s"
      },
      {
        "id": "D",
        "text": "128 GFLOP/s"
      },
      {
        "id": "E",
        "text": "256 GFLOP/s"
      }
    ],
    "correctOptionId": "D",
    "correctAnswerText": "128 GFLOP/s",
    "explanation": "Theoretical peak FLOP/s = sockets × cores/socket × clock frequency × FLOPs/cycle/core = 2 × 8 × (2 × 10^9 Hz) × 4 = 128 × 10^9 FLOP/s = 128 GFLOP/s."
  },
  {
    "id": 57,
    "part": "midterm",
    "topic": "MapReduce and distributed storage",
    "inSample": false,
    "inExam": true,
    "sampleNum": null,
    "moodleNum": 11,
    "originBadge": "My Midterm Q11 (Exam Only)",
    "userExamAttempt": {
      "exam": "Midterm",
      "qNum": 11,
      "selectedText": "Equal intermediate keys must be routed to the same reducer partition",
      "isCorrect": true
    },
    "question": "Which partitioning property is necessary for ordinary per-key reduction to be correct?",
    "options": [
      {
        "id": "A",
        "text": "Different keys must always go to different reducers"
      },
      {
        "id": "B",
        "text": "Equal intermediate keys must be routed to the same reducer partition"
      },
      {
        "id": "C",
        "text": "Records from one mapper must all go to one reducer"
      },
      {
        "id": "D",
        "text": "The same key must be spread evenly over all reducer partitions"
      },
      {
        "id": "E",
        "text": "Equal values must go to the same reducer even with different keys"
      }
    ],
    "correctOptionId": "B",
    "correctAnswerText": "Equal intermediate keys must be routed to the same reducer partition",
    "explanation": "In MapReduce, reducers aggregate all values associated with a given key. Therefore, the partitioner must guarantee that all intermediate pairs with equal keys are routed to the exact same reducer partition."
  },
  {
    "id": 58,
    "part": "midterm",
    "topic": "MapReduce and distributed storage",
    "inSample": false,
    "inExam": true,
    "sampleNum": null,
    "moodleNum": 12,
    "originBadge": "My Midterm Q12 (Exam Only)",
    "userExamAttempt": {
      "exam": "Midterm",
      "qNum": 12,
      "selectedText": "(data,7)",
      "isCorrect": true
    },
    "question": "A word-count reducer receives key 'data' and values [1,1,3,2]. What should it emit?",
    "options": [
      {
        "id": "A",
        "text": "(data,6)"
      },
      {
        "id": "B",
        "text": "(data,2)"
      },
      {
        "id": "C",
        "text": "(data,4)"
      },
      {
        "id": "D",
        "text": "(data,7)"
      },
      {
        "id": "E",
        "text": "(data,3)"
      }
    ],
    "correctOptionId": "D",
    "correctAnswerText": "(data,7)",
    "explanation": "A word-count reducer sums all counts received for a key. Summing [1, 1, 3, 2] gives 1 + 1 + 3 + 2 = 7, so it emits (data,7)."
  },
  {
    "id": 59,
    "part": "midterm",
    "topic": "MapReduce and distributed storage",
    "inSample": false,
    "inExam": true,
    "sampleNum": null,
    "moodleNum": 14,
    "originBadge": "My Midterm Q14 (Exam Only)",
    "userExamAttempt": {
      "exam": "Midterm",
      "qNum": 14,
      "selectedText": "To make each mapper's input small enough to fit in one cache line",
      "isCorrect": false
    },
    "question": "Why does a MapReduce scheduler try to run a mapper near its input data?",
    "options": [
      {
        "id": "A",
        "text": "To eliminate the shuffle between mappers and reducers"
      },
      {
        "id": "B",
        "text": "To make each mapper's input small enough to fit in one cache line"
      },
      {
        "id": "C",
        "text": "To guarantee globally sorted reducer output"
      },
      {
        "id": "D",
        "text": "To reduce network data movement"
      },
      {
        "id": "E",
        "text": "To ensure that each reducer receives exactly the same number of keys"
      }
    ],
    "correctOptionId": "D",
    "correctAnswerText": "To reduce network data movement",
    "explanation": "Data locality scheduling (running mappers on or near the node holding their HDFS input blocks) minimizes moving large amounts of data across the cluster network."
  },
  {
    "id": 60,
    "part": "midterm",
    "topic": "MapReduce and distributed storage",
    "inSample": false,
    "inExam": true,
    "sampleNum": null,
    "moodleNum": 15,
    "originBadge": "My Midterm Q15 (Exam Only)",
    "userExamAttempt": {
      "exam": "Midterm",
      "qNum": 15,
      "selectedText": "(red,1), (blue,1), (red,1)",
      "isCorrect": true
    },
    "question": "A word-count mapper receives the text 'red blue red' and emits one pair per word occurrence. What does it emit?",
    "options": [
      {
        "id": "A",
        "text": "(red,1), (blue,2), (red,3)"
      },
      {
        "id": "B",
        "text": "(red,3), (blue,3)"
      },
      {
        "id": "C",
        "text": "(red,1), (blue,1) only"
      },
      {
        "id": "D",
        "text": "(red,1), (blue,1), (red,1)"
      },
      {
        "id": "E",
        "text": "(red,2), (blue,1) only"
      }
    ],
    "correctOptionId": "D",
    "correctAnswerText": "(red,1), (blue,1), (red,1)",
    "explanation": "A standard word-count mapper emits (word, 1) for every word occurrence in the input without aggregating yet: 'red blue red' produces (red,1), (blue,1), (red,1)."
  },
  {
    "id": 61,
    "part": "midterm",
    "topic": "MapReduce and distributed storage",
    "inSample": false,
    "inExam": true,
    "sampleNum": null,
    "moodleNum": 16,
    "originBadge": "My Midterm Q16 (Exam Only)",
    "userExamAttempt": {
      "exam": "Midterm",
      "qNum": 16,
      "selectedText": "A worker failure changes the meaning of every intermediate key",
      "isCorrect": false
    },
    "question": "In the classic implementation described, why may completed map tasks need to rerun after their worker fails?",
    "options": [
      {
        "id": "A",
        "text": "Their intermediate output was on that worker's local disk and may no longer be available"
      },
      {
        "id": "B",
        "text": "A worker failure changes the meaning of every intermediate key"
      },
      {
        "id": "C",
        "text": "The reducer cannot distinguish keys produced by different workers"
      },
      {
        "id": "D",
        "text": "The map output exists only in the reducer's final output file"
      },
      {
        "id": "E",
        "text": "Completed map outputs are automatically replicated like all input blocks"
      }
    ],
    "correctOptionId": "A",
    "correctAnswerText": "Their intermediate output was on that worker's local disk and may no longer be available",
    "explanation": "Unlike HDFS input/output files, intermediate map outputs are stored on the mapper worker's local disk (not replicated in HDFS). If that worker fails, its intermediate outputs are lost, so completed map tasks on that node must be re-executed."
  },
  {
    "id": 62,
    "part": "midterm",
    "topic": "MapReduce and distributed storage",
    "inSample": false,
    "inExam": true,
    "sampleNum": null,
    "moodleNum": 20,
    "originBadge": "My Midterm Q20 (Exam Only)",
    "userExamAttempt": {
      "exam": "Midterm",
      "qNum": 20,
      "selectedText": "800 GB",
      "isCorrect": false
    },
    "question": "A dataset contains 200 GB of logical data and uses three replicas of every block. Ignoring metadata and temporary files, how much physical block storage is required?",
    "options": [
      {
        "id": "A",
        "text": "200 GB"
      },
      {
        "id": "B",
        "text": "800 GB"
      },
      {
        "id": "C",
        "text": "400 GB"
      },
      {
        "id": "D",
        "text": "600 GB"
      },
      {
        "id": "E",
        "text": "1000 GB"
      }
    ],
    "correctOptionId": "D",
    "correctAnswerText": "600 GB",
    "explanation": "With a replication factor of 3, every block of the 200 GB logical dataset is stored three times across DataNodes: 200 GB × 3 = 600 GB of physical storage."
  },
  {
    "id": 63,
    "part": "midterm",
    "topic": "Memory and parallel design",
    "inSample": false,
    "inExam": true,
    "sampleNum": null,
    "moodleNum": 21,
    "originBadge": "My Midterm Q21 (Exam Only)",
    "userExamAttempt": {
      "exam": "Midterm",
      "qNum": 21,
      "selectedText": "Reduce the number of arithmetic operations in the loop",
      "isCorrect": false
    },
    "question": "A compiler requests an array block before the loop reaches the operation that needs it. What is the main intended benefit?",
    "options": [
      {
        "id": "A",
        "text": "Guarantee that the requested data will stay cached until program exit"
      },
      {
        "id": "B",
        "text": "Overlap data transfer with useful computation"
      },
      {
        "id": "C",
        "text": "Make every load complete in exactly one CPU cycle"
      },
      {
        "id": "D",
        "text": "Increase the physical bandwidth of the memory hardware"
      },
      {
        "id": "E",
        "text": "Reduce the number of arithmetic operations in the loop"
      }
    ],
    "correctOptionId": "B",
    "correctAnswerText": "Overlap data transfer with useful computation",
    "explanation": "Prefetching / requesting data before it is needed overlaps memory/network data transfer latency with ongoing computation, hiding latency rather than stalling the CPU when the loop needs the data."
  },
  {
    "id": 64,
    "part": "midterm",
    "topic": "Memory and parallel design",
    "inSample": false,
    "inExam": true,
    "sampleNum": null,
    "moodleNum": 22,
    "originBadge": "My Midterm Q22 (Exam Only)",
    "userExamAttempt": {
      "exam": "Midterm",
      "qNum": 22,
      "selectedText": "A reduction of boundary values to one scalar",
      "isCorrect": false
    },
    "question": "Each task updates a different region of a simulation grid. Before updating a boundary point, it needs values from the adjacent region. What should the communication design include?",
    "options": [
      {
        "id": "A",
        "text": "A reduction of boundary values to one scalar"
      },
      {
        "id": "B",
        "text": "A one-time boundary exchange before all time steps"
      },
      {
        "id": "C",
        "text": "Exchange of boundary data between neighboring tasks"
      },
      {
        "id": "D",
        "text": "A global barrier without exchanging any values"
      },
      {
        "id": "E",
        "text": "Gathering only each region's final result after the simulation"
      }
    ],
    "correctOptionId": "C",
    "correctAnswerText": "Exchange of boundary data between neighboring tasks",
    "explanation": "In domain decomposition of a grid (e.g. stencil/PDE solvers), updating boundary cells requires ghost/halo values from neighboring subgrids, so adjacent tasks must exchange boundary data each step."
  },
  {
    "id": 65,
    "part": "midterm",
    "topic": "Memory and parallel design",
    "inSample": false,
    "inExam": true,
    "sampleNum": null,
    "moodleNum": 23,
    "originBadge": "My Midterm Q23 (Exam Only)",
    "userExamAttempt": {
      "exam": "Midterm",
      "qNum": 23,
      "selectedText": "Registers, L1 cache, main memory, local disk",
      "isCorrect": true
    },
    "question": "Which sequence normally orders these memory levels from lowest to highest access latency?",
    "options": [
      {
        "id": "A",
        "text": "Registers, main memory, L1 cache, local disk"
      },
      {
        "id": "B",
        "text": "L1 cache, registers, main memory, local disk"
      },
      {
        "id": "C",
        "text": "Registers, L1 cache, local disk, main memory"
      },
      {
        "id": "D",
        "text": "Registers, L1 cache, main memory, local disk"
      },
      {
        "id": "E",
        "text": "Main memory, L1 cache, registers, local disk"
      }
    ],
    "correctOptionId": "D",
    "correctAnswerText": "Registers, L1 cache, main memory, local disk",
    "explanation": "Moving down the memory hierarchy increases both capacity and access latency: CPU registers (~1 cycle) are fastest, followed by L1 cache (~few cycles), main memory/DRAM (~100 ns), and local disk (ms)."
  },
  {
    "id": 66,
    "part": "midterm",
    "topic": "Memory and parallel design",
    "inSample": false,
    "inExam": true,
    "sampleNum": null,
    "moodleNum": 27,
    "originBadge": "My Midterm Q27 (Exam Only)",
    "userExamAttempt": {
      "exam": "Midterm",
      "qNum": 27,
      "selectedText": "Domain decomposition",
      "isCorrect": false
    },
    "question": "A climate model assigns different physical submodels to separate tasks. Which approach does this illustrate?",
    "options": [
      {
        "id": "A",
        "text": "Spatial cache optimization"
      },
      {
        "id": "B",
        "text": "Blocked data distribution"
      },
      {
        "id": "C",
        "text": "Functional decomposition"
      },
      {
        "id": "D",
        "text": "Domain decomposition"
      },
      {
        "id": "E",
        "text": "Cyclic data distribution"
      }
    ],
    "correctOptionId": "C",
    "correctAnswerText": "Functional decomposition",
    "explanation": "Functional (task) decomposition splits a problem by distinct operations or submodels (e.g., atmosphere, ocean, ice models) rather than splitting one uniform data array (which would be domain decomposition)."
  },
  {
    "id": 67,
    "part": "midterm",
    "topic": "Memory and parallel design",
    "inSample": false,
    "inExam": true,
    "sampleNum": null,
    "moodleNum": 29,
    "originBadge": "My Midterm Q29 (Exam Only)",
    "userExamAttempt": {
      "exam": "Midterm",
      "qNum": 29,
      "selectedText": "Dynamically assign remaining tasks to workers as they become idle",
      "isCorrect": true
    },
    "question": "Task durations are highly unpredictable. Which approach most directly addresses the resulting load imbalance?",
    "options": [
      {
        "id": "A",
        "text": "Replicate all input data but retain the same fixed assignment"
      },
      {
        "id": "B",
        "text": "Assign equal task counts once and prevent later reassignment"
      },
      {
        "id": "C",
        "text": "Assign the largest initial data block to one fixed processor"
      },
      {
        "id": "D",
        "text": "Make every processor wait after each individual task"
      },
      {
        "id": "E",
        "text": "Dynamically assign remaining tasks to workers as they become idle"
      }
    ],
    "correctOptionId": "E",
    "correctAnswerText": "Dynamically assign remaining tasks to workers as they become idle",
    "explanation": "When task execution times are unpredictable or uneven, static assignment leaves fast workers idle. Dynamic task scheduling (work queue / master-worker dispatching tasks as workers become idle) balances the load."
  },
  {
    "id": 68,
    "part": "midterm",
    "topic": "MPI",
    "inSample": false,
    "inExam": true,
    "sampleNum": null,
    "moodleNum": 31,
    "originBadge": "My Midterm Q31 (Exam Only)",
    "userExamAttempt": {
      "exam": "Midterm",
      "qNum": 31,
      "selectedText": "MPI_Allgather",
      "isCorrect": false
    },
    "question": "Rank 0 reads a scalar input that every rank needs. Which collective directly distributes that same scalar to all ranks?",
    "options": [
      {
        "id": "A",
        "text": "MPI_Gather"
      },
      {
        "id": "B",
        "text": "MPI_Allgather"
      },
      {
        "id": "C",
        "text": "MPI_Scatter"
      },
      {
        "id": "D",
        "text": "MPI_Reduce"
      },
      {
        "id": "E",
        "text": "MPI_Bcast"
      }
    ],
    "correctOptionId": "E",
    "correctAnswerText": "MPI_Bcast",
    "explanation": "MPI_Bcast sends the same data buffer from one root rank (rank 0) to all other ranks in the communicator. (MPI_Scatter splits an array; MPI_Allgather collects different data from every rank.)"
  },
  {
    "id": 69,
    "part": "midterm",
    "topic": "MPI",
    "inSample": false,
    "inExam": true,
    "sampleNum": null,
    "moodleNum": 35,
    "originBadge": "My Midterm Q35 (Exam Only)",
    "userExamAttempt": {
      "exam": "Midterm",
      "qNum": 35,
      "selectedText": "Yes; every rank must execute every statement in lockstep",
      "isCorrect": false
    },
    "question": "An MPI program uses if (rank == 0) to read a file and all other ranks skip that statement. Does this contradict SPMD?",
    "options": [
      {
        "id": "A",
        "text": "Yes; all ranks must read the same file independently"
      },
      {
        "id": "B",
        "text": "No; conditional statements execute only before MPI initialization"
      },
      {
        "id": "C",
        "text": "No; rank 0 automatically copies the input into all other memories"
      },
      {
        "id": "D",
        "text": "No; the same program can take different branches on different ranks"
      },
      {
        "id": "E",
        "text": "Yes; every rank must execute every statement in lockstep"
      }
    ],
    "correctOptionId": "D",
    "correctAnswerText": "No; the same program can take different branches on different ranks",
    "explanation": "SPMD (Single Program, Multiple Data) means all processes run the same executable/program, NOT that they execute every instruction identically. Branching on process rank (e.g., if (rank == 0)) is a standard SPMD pattern."
  },
  {
    "id": 70,
    "part": "midterm",
    "topic": "MPI",
    "inSample": false,
    "inExam": true,
    "sampleNum": null,
    "moodleNum": 37,
    "originBadge": "My Midterm Q37 (Exam Only)",
    "userExamAttempt": {
      "exam": "Midterm",
      "qNum": 37,
      "selectedText": "After the send request has completed, for example as confirmed by MPI_Wait",
      "isCorrect": true
    },
    "question": "After MPI_Isend returns, when may the application modify the send buffer safely?",
    "options": [
      {
        "id": "A",
        "text": "After entering an unrelated barrier"
      },
      {
        "id": "B",
        "text": "Immediately after MPI_Isend returns"
      },
      {
        "id": "C",
        "text": "After the send request has completed, for example as confirmed by MPI_Wait"
      },
      {
        "id": "D",
        "text": "After a fixed delay equal to one message latency"
      },
      {
        "id": "E",
        "text": "After the matching MPI_Irecv has merely been posted"
      }
    ],
    "correctOptionId": "C",
    "correctAnswerText": "After the send request has completed, for example as confirmed by MPI_Wait",
    "explanation": "MPI_Isend is a non-blocking send that returns immediately while the MPI library may still be reading the send buffer in the background. It is safe to modify or reuse that buffer only after MPI_Wait (or MPI_Test returning true) confirms completion."
  },
  {
    "id": 71,
    "part": "midterm",
    "topic": "MPI",
    "inSample": false,
    "inExam": true,
    "sampleNum": null,
    "moodleNum": 38,
    "originBadge": "My Midterm Q38 (Exam Only)",
    "userExamAttempt": {
      "exam": "Midterm",
      "qNum": 38,
      "selectedText": "MPI can communicate across nodes; OpenMP host threads share memory within a process",
      "isCorrect": true
    },
    "question": "Which statement about MPI and OpenMP in the lecture is accurate?",
    "options": [
      {
        "id": "A",
        "text": "Using MPI removes the need to exchange data between process memories"
      },
      {
        "id": "B",
        "text": "MPI and OpenMP both require separate address spaces for every worker"
      },
      {
        "id": "C",
        "text": "OpenMP host threads automatically share ordinary arrays across cluster nodes"
      },
      {
        "id": "D",
        "text": "MPI can communicate across nodes; OpenMP host threads share memory within a process"
      },
      {
        "id": "E",
        "text": "MPI is restricted to separate nodes and cannot run within one node"
      }
    ],
    "correctOptionId": "D",
    "correctAnswerText": "MPI can communicate across nodes; OpenMP host threads share memory within a process",
    "explanation": "MPI is a distributed-memory message-passing model that works both within and across cluster nodes; OpenMP is a shared-memory threading model where threads share memory within a single OS process (on one node)."
  },
  {
    "id": 72,
    "part": "midterm",
    "topic": "MPI",
    "inSample": false,
    "inExam": true,
    "sampleNum": null,
    "moodleNum": 40,
    "originBadge": "My Midterm Q40 (Exam Only)",
    "userExamAttempt": {
      "exam": "Midterm",
      "qNum": 40,
      "selectedText": "Four threads in one MPI process",
      "isCorrect": false
    },
    "question": "Assume a valid allocation and successful launch. What does mpiexec -n 4 ./program request?",
    "options": [
      {
        "id": "A",
        "text": "Four sequential runs of the executable"
      },
      {
        "id": "B",
        "text": "One MPI process on each of exactly four nodes"
      },
      {
        "id": "C",
        "text": "Four MPI processes running the program"
      },
      {
        "id": "D",
        "text": "Four processes each automatically using four OpenMP threads"
      },
      {
        "id": "E",
        "text": "Four threads in one MPI process"
      }
    ],
    "correctOptionId": "C",
    "correctAnswerText": "Four MPI processes running the program",
    "explanation": "mpiexec -n 4 ./program launches 4 MPI processes executing the program binary in the communicator (not threads inside one process, and they may be placed on one or multiple nodes depending on the hostfile/scheduler)."
  },
  {
    "id": 73,
    "part": "midterm",
    "topic": "OpenMP and hybrid programming",
    "inSample": false,
    "inExam": true,
    "sampleNum": null,
    "moodleNum": 41,
    "originBadge": "My Midterm Q41 (Exam Only)",
    "userExamAttempt": {
      "exam": "Midterm",
      "qNum": 41,
      "selectedText": "Give each thread a private temporary variable",
      "isCorrect": true
    },
    "question": "Two OpenMP threads each need a temporary scalar that they update independently. Which data-sharing choice best expresses this requirement?",
    "options": [
      {
        "id": "A",
        "text": "Use shared storage because the variable is only temporary"
      },
      {
        "id": "B",
        "text": "Use one shared temporary for all threads"
      },
      {
        "id": "C",
        "text": "Give each thread a private temporary variable"
      },
      {
        "id": "D",
        "text": "Make the temporary shared and place a barrier before the loop only"
      },
      {
        "id": "E",
        "text": "Store every thread's result in the same shared scalar without protection"
      }
    ],
    "correctOptionId": "C",
    "correctAnswerText": "Give each thread a private temporary variable",
    "explanation": "Since each thread updates its own temporary scalar independently, making it private (e.g., declared inside the parallel region or listed in private(...)) avoids data races without adding synchronization overhead."
  },
  {
    "id": 74,
    "part": "midterm",
    "topic": "OpenMP and hybrid programming",
    "inSample": false,
    "inExam": true,
    "sampleNum": null,
    "moodleNum": 42,
    "originBadge": "My Midterm Q42 (Exam Only)",
    "userExamAttempt": {
      "exam": "Midterm",
      "qNum": 42,
      "selectedText": "24",
      "isCorrect": true
    },
    "question": "A hybrid job runs four MPI processes, each with exactly six OpenMP threads in its parallel region. How many OpenMP team threads are active across the job, including each team's primary thread?",
    "options": [
      {
        "id": "A",
        "text": "24"
      },
      {
        "id": "B",
        "text": "10"
      },
      {
        "id": "C",
        "text": "30"
      },
      {
        "id": "D",
        "text": "20"
      },
      {
        "id": "E",
        "text": "28"
      }
    ],
    "correctOptionId": "A",
    "correctAnswerText": "24",
    "explanation": "In a hybrid MPI+OpenMP run with 4 MPI processes and a team of 6 OpenMP threads per process (including the primary/master thread), total active OpenMP threads across the job = 4 × 6 = 24."
  },
  {
    "id": 75,
    "part": "midterm",
    "topic": "OpenMP and hybrid programming",
    "inSample": false,
    "inExam": true,
    "sampleNum": null,
    "moodleNum": 43,
    "originBadge": "My Midterm Q43 (Exam Only)",
    "userExamAttempt": {
      "exam": "Midterm",
      "qNum": 43,
      "selectedText": "A single region that lets only one thread perform its own update",
      "isCorrect": false
    },
    "question": "Several statements must update a shared data structure as one mutually exclusive region. Which construct is the most direct choice?",
    "options": [
      {
        "id": "A",
        "text": "Separate atomic updates on each statement, without protecting the group"
      },
      {
        "id": "B",
        "text": "A critical region used consistently by the accessing threads"
      },
      {
        "id": "C",
        "text": "A private copy that is never merged back into the shared structure"
      },
      {
        "id": "D",
        "text": "A single region that lets only one thread perform its own update"
      },
      {
        "id": "E",
        "text": "A barrier immediately before the statements"
      }
    ],
    "correctOptionId": "B",
    "correctAnswerText": "A critical region used consistently by the accessing threads",
    "explanation": "A #pragma omp critical region enforces mutual exclusion across an entire block of statements updating a shared data structure. (atomic only protects a single memory operation, and single executes only once on one thread rather than letting each thread update safely.)"
  },
  {
    "id": 76,
    "part": "midterm",
    "topic": "OpenMP and hybrid programming",
    "inSample": false,
    "inExam": true,
    "sampleNum": null,
    "moodleNum": 45,
    "originBadge": "My Midterm Q45 (Exam Only)",
    "userExamAttempt": {
      "exam": "Midterm",
      "qNum": 45,
      "selectedText": "The synchronization inside every later critical region",
      "isCorrect": false
    },
    "question": "What does nowait on an omp for inside a parallel region remove?",
    "options": [
      {
        "id": "A",
        "text": "The need to respect dependencies after the loop"
      },
      {
        "id": "B",
        "text": "The implicit barrier at the end of the enclosing parallel region"
      },
      {
        "id": "C",
        "text": "The synchronization inside every later critical region"
      },
      {
        "id": "D",
        "text": "The division of iterations among threads"
      },
      {
        "id": "E",
        "text": "The implicit barrier at the end of that work-sharing loop"
      }
    ],
    "correctOptionId": "E",
    "correctAnswerText": "The implicit barrier at the end of that work-sharing loop",
    "explanation": "OpenMP work-sharing constructs like #pragma omp for include an implicit barrier at the end of the loop. Adding the nowait clause removes that implicit barrier so threads that finish early can proceed immediately."
  },
  {
    "id": 77,
    "part": "midterm",
    "topic": "OpenMP and hybrid programming",
    "inSample": false,
    "inExam": true,
    "sampleNum": null,
    "moodleNum": 46,
    "originBadge": "My Midterm Q46 (Exam Only)",
    "userExamAttempt": {
      "exam": "Midterm",
      "qNum": 46,
      "selectedText": "schedule(dynamic,1)",
      "isCorrect": true
    },
    "question": "Independent loop iterations have very different execution times. Which schedule most directly lets a thread request a new chunk when it finishes its previous chunk?",
    "options": [
      {
        "id": "A",
        "text": "schedule(static)"
      },
      {
        "id": "B",
        "text": "A fixed block assignment chosen before the loop"
      },
      {
        "id": "C",
        "text": "schedule(dynamic,1)"
      },
      {
        "id": "D",
        "text": "schedule(static,4)"
      },
      {
        "id": "E",
        "text": "schedule(static,1)"
      }
    ],
    "correctOptionId": "C",
    "correctAnswerText": "schedule(dynamic,1)",
    "explanation": "schedule(dynamic, 1) maintains a runtime queue of 1-iteration chunks; whenever a thread finishes an iteration, it dynamically requests the next available one, ideal for highly variable iteration times."
  },
  {
    "id": 78,
    "part": "midterm",
    "topic": "OpenMP and hybrid programming",
    "inSample": false,
    "inExam": true,
    "sampleNum": null,
    "moodleNum": 49,
    "originBadge": "My Midterm Q49 (Exam Only)",
    "userExamAttempt": {
      "exam": "Midterm",
      "qNum": 49,
      "selectedText": "A separate uninitialized x for each thread",
      "isCorrect": true
    },
    "question": "For an ordinary C integer x, what does private(x) provide in a parallel region?",
    "options": [
      {
        "id": "A",
        "text": "A separate x initialized from the original x"
      },
      {
        "id": "B",
        "text": "One shared x protected automatically by a lock"
      },
      {
        "id": "C",
        "text": "A separate uninitialized x for each thread"
      },
      {
        "id": "D",
        "text": "A separate x copied back automatically when the region ends"
      },
      {
        "id": "E",
        "text": "A separate x initialized to zero by this clause"
      }
    ],
    "correctOptionId": "C",
    "correctAnswerText": "A separate uninitialized x for each thread",
    "explanation": "In OpenMP, private(x) creates a separate uninitialized local copy of x for each thread inside the parallel region. (Use firstprivate(x) if the thread-local copy must be initialized to x's pre-region value.)"
  },
  {
    "id": 79,
    "part": "endterm",
    "topic": "GPU and CUDA",
    "inSample": true,
    "inExam": true,
    "sampleNum": 1,
    "moodleNum": 16,
    "originBadge": "Endterm Sample #1 • My Endterm Q16",
    "userExamAttempt": {
      "exam": "Endterm",
      "qNum": 16,
      "selectedText": "The CPU manages execution and the GPU runs highly parallel kernels",
      "isCorrect": true
    },
    "question": "In the heterogeneous CUDA model taught in the lecture, which work assignment is most typical?",
    "options": [
      {
        "id": "A",
        "text": "The CPU and GPU must execute every instruction together"
      },
      {
        "id": "B",
        "text": "The CPU is used only after all device computations finish"
      },
      {
        "id": "C",
        "text": "The GPU manages host files and the CPU executes all kernel threads"
      },
      {
        "id": "D",
        "text": "Each CUDA thread is a separate CPU process"
      },
      {
        "id": "E",
        "text": "The CPU manages execution and the GPU runs highly parallel kernels"
      }
    ],
    "correctOptionId": "E",
    "correctAnswerText": "The CPU manages execution and the GPU runs highly parallel kernels",
    "explanation": "In the heterogeneous CPU+GPU CUDA model, the CPU (host) manages overall program flow, I/O, memory transfers, and kernel launches, while the GPU (device) executes massively parallel compute kernels."
  },
  {
    "id": 80,
    "part": "endterm",
    "topic": "GPU and CUDA",
    "inSample": true,
    "inExam": false,
    "sampleNum": 2,
    "moodleNum": null,
    "originBadge": "Endterm Sample #2",
    "userExamAttempt": null,
    "question": "A function is declared __global__ void update(...). What does this declaration identify in the basic host-launched CUDA model?",
    "options": [
      {
        "id": "A",
        "text": "A kernel executed on the GPU and launched with an execution configuration"
      },
      {
        "id": "B",
        "text": "A function executed on the CPU once per GPU block"
      },
      {
        "id": "C",
        "text": "A function that allocates device memory automatically"
      },
      {
        "id": "D",
        "text": "A device helper called like an ordinary C function from the host"
      },
      {
        "id": "E",
        "text": "A variable shared by all CPU processes"
      }
    ],
    "correctOptionId": "A",
    "correctAnswerText": "A kernel executed on the GPU and launched with an execution configuration",
    "explanation": "The __global__ execution space qualifier marks a CUDA kernel function: it runs on the GPU (device) and is launched from the host (CPU) using <<<gridDim, blockDim>>> execution configuration syntax."
  },
  {
    "id": 81,
    "part": "endterm",
    "topic": "GPU and CUDA",
    "inSample": true,
    "inExam": true,
    "sampleNum": 3,
    "moodleNum": 20,
    "originBadge": "Endterm Sample #3 • My Endterm Q20",
    "userExamAttempt": {
      "exam": "Endterm",
      "qNum": 20,
      "selectedText": "197",
      "isCorrect": true
    },
    "question": "A 1D kernel uses i = blockIdx.x * blockDim.x + threadIdx.x. If blockIdx.x = 3, blockDim.x = 64, and threadIdx.x = 5, what is i?",
    "options": [
      {
        "id": "A",
        "text": "192"
      },
      {
        "id": "B",
        "text": "320"
      },
      {
        "id": "C",
        "text": "196"
      },
      {
        "id": "D",
        "text": "197"
      },
      {
        "id": "E",
        "text": "69"
      }
    ],
    "correctOptionId": "D",
    "correctAnswerText": "197",
    "explanation": "Using the standard 1D global thread index formula: i = blockIdx.x * blockDim.x + threadIdx.x = 3 * 64 + 5 = 192 + 5 = 197."
  },
  {
    "id": 82,
    "part": "endterm",
    "topic": "GPU and CUDA",
    "inSample": true,
    "inExam": false,
    "sampleNum": 4,
    "moodleNum": null,
    "originBadge": "Endterm Sample #4",
    "userExamAttempt": null,
    "question": "Why is threadIdx.x alone insufficient as a unique array index when a kernel has several 1D blocks?",
    "options": [
      {
        "id": "A",
        "text": "Thread indices begin at one within every block"
      },
      {
        "id": "B",
        "text": "threadIdx.x gives the number of threads rather than an index"
      },
      {
        "id": "C",
        "text": "Thread indices repeat in each block, so different blocks would access the same indices"
      },
      {
        "id": "D",
        "text": "threadIdx.x is available only to the host"
      },
      {
        "id": "E",
        "text": "The index changes whenever a different warp is scheduled"
      }
    ],
    "correctOptionId": "C",
    "correctAnswerText": "Thread indices repeat in each block, so different blocks would access the same indices",
    "explanation": "threadIdx.x only identifies a thread's position within its own block (0 to blockDim.x - 1). Without adding blockIdx.x * blockDim.x, threads at the same local index in different blocks would compute identical array indices."
  },
  {
    "id": 83,
    "part": "endterm",
    "topic": "GPU and CUDA",
    "inSample": true,
    "inExam": false,
    "sampleNum": 5,
    "moodleNum": null,
    "originBadge": "Endterm Sample #5",
    "userExamAttempt": null,
    "question": "One thread processes one element. For N = 1000 and 256 threads per block, how many blocks are needed to cover all elements?",
    "options": [
      {
        "id": "A",
        "text": "8"
      },
      {
        "id": "B",
        "text": "4"
      },
      {
        "id": "C",
        "text": "3"
      },
      {
        "id": "D",
        "text": "256"
      },
      {
        "id": "E",
        "text": "5"
      }
    ],
    "correctOptionId": "B",
    "correctAnswerText": "4",
    "explanation": "To cover N = 1000 elements with 256 threads per block, compute ceil(1000 / 256) = (1000 + 255) / 256 = 4 blocks (giving 4 × 256 = 1024 threads; 3 blocks would only give 768 threads)."
  },
  {
    "id": 84,
    "part": "endterm",
    "topic": "GPU and CUDA",
    "inSample": true,
    "inExam": false,
    "sampleNum": 6,
    "moodleNum": null,
    "originBadge": "Endterm Sample #6",
    "userExamAttempt": null,
    "question": "A launch creates 1024 threads for an array of 1000 elements. What is the main purpose of if (i < N) before accessing a[i]?",
    "options": [
      {
        "id": "A",
        "text": "Synchronize the final block with the first block"
      },
      {
        "id": "B",
        "text": "Prevent the extra threads from accessing elements outside the array"
      },
      {
        "id": "C",
        "text": "Make the last block contain fewer physical threads at launch"
      },
      {
        "id": "D",
        "text": "Copy the remaining elements into shared memory"
      },
      {
        "id": "E",
        "text": "Force all blocks to finish in index order"
      }
    ],
    "correctOptionId": "B",
    "correctAnswerText": "Prevent the extra threads from accessing elements outside the array",
    "explanation": "When grid size (1024 threads) is rounded up to a multiple of block size and exceeds array length N (1000), the bounds check if (i < N) prevents the extra 24 threads (indices 1000..1023) from reading or writing out of bounds."
  },
  {
    "id": 85,
    "part": "endterm",
    "topic": "GPU and CUDA",
    "inSample": true,
    "inExam": false,
    "sampleNum": 7,
    "moodleNum": null,
    "originBadge": "Endterm Sample #7",
    "userExamAttempt": null,
    "question": "A device array holds 200 floats, with sizeof(float) = 4 bytes. What allocation size should be passed to cudaMalloc?",
    "options": [
      {
        "id": "A",
        "text": "400 bytes"
      },
      {
        "id": "B",
        "text": "204 bytes"
      },
      {
        "id": "C",
        "text": "1600 bytes"
      },
      {
        "id": "D",
        "text": "800 bytes"
      },
      {
        "id": "E",
        "text": "200 bytes"
      }
    ],
    "correctOptionId": "D",
    "correctAnswerText": "800 bytes",
    "explanation": "cudaMalloc takes the allocation size in bytes. For 200 floats at 4 bytes each, pass 200 × 4 = 800 bytes (i.e., 200 * sizeof(float))."
  },
  {
    "id": 86,
    "part": "endterm",
    "topic": "GPU and CUDA",
    "inSample": true,
    "inExam": true,
    "sampleNum": 8,
    "moodleNum": 19,
    "originBadge": "Endterm Sample #8 • My Endterm Q19",
    "userExamAttempt": {
      "exam": "Endterm",
      "qNum": 19,
      "selectedText": "Copy h_out to d_out using cudaMemcpyHostToDevice",
      "isCorrect": false
    },
    "question": "In the explicit separate-memory model, a completed kernel has written results into device array d_out. How should host code obtain them in h_out?",
    "options": [
      {
        "id": "A",
        "text": "Call __syncthreads() from host code"
      },
      {
        "id": "B",
        "text": "Copy d_out to h_out using cudaMemcpyDeviceToHost"
      },
      {
        "id": "C",
        "text": "Call cudaMalloc again on d_out to expose its contents"
      },
      {
        "id": "D",
        "text": "Copy h_out to d_out using cudaMemcpyHostToDevice"
      },
      {
        "id": "E",
        "text": "Read d_out directly with ordinary CPU dereferencing"
      }
    ],
    "correctOptionId": "B",
    "correctAnswerText": "Copy d_out to h_out using cudaMemcpyDeviceToHost",
    "explanation": "With explicit separate host/device memories, the host copies results back from device pointer d_out to host pointer h_out using cudaMemcpy(..., cudaMemcpyDeviceToHost)."
  },
  {
    "id": 87,
    "part": "endterm",
    "topic": "GPU and CUDA",
    "inSample": true,
    "inExam": true,
    "sampleNum": 9,
    "moodleNum": 21,
    "originBadge": "Endterm Sample #9 • My Endterm Q21",
    "userExamAttempt": {
      "exam": "Endterm",
      "qNum": 21,
      "selectedText": "A lower block index always has priority over a higher one",
      "isCorrect": false
    },
    "question": "A kernel launches blocks numbered 0 through 7. Which execution-order assumption is safe?",
    "options": [
      {
        "id": "A",
        "text": "All blocks must be resident at the same time"
      },
      {
        "id": "B",
        "text": "Block 0 always finishes before block 1 starts"
      },
      {
        "id": "C",
        "text": "The program must not rely on blocks completing in numerical order"
      },
      {
        "id": "D",
        "text": "A lower block index always has priority over a higher one"
      },
      {
        "id": "E",
        "text": "Blocks always finish in reverse numerical order"
      }
    ],
    "correctOptionId": "C",
    "correctAnswerText": "The program must not rely on blocks completing in numerical order",
    "explanation": "CUDA guarantees no execution order across thread blocks (blocks can run in any order, concurrently or sequentially depending on SM capacity). Correct kernels must not depend on block completion order."
  },
  {
    "id": 88,
    "part": "endterm",
    "topic": "GPU and CUDA",
    "inSample": true,
    "inExam": false,
    "sampleNum": 10,
    "moodleNum": null,
    "originBadge": "Endterm Sample #10",
    "userExamAttempt": null,
    "question": "A host timer measures only the time taken to issue a kernel launch. Why can this underestimate kernel execution time?",
    "options": [
      {
        "id": "A",
        "text": "The launch timer includes only the final block’s work"
      },
      {
        "id": "B",
        "text": "The kernel executes only after the result is printed"
      },
      {
        "id": "C",
        "text": "A launch automatically excludes all device arithmetic from elapsed time"
      },
      {
        "id": "D",
        "text": "The host and device always finish at the same instant"
      },
      {
        "id": "E",
        "text": "The launch is asynchronous with respect to the host, so GPU execution may still be in progress"
      }
    ],
    "correctOptionId": "E",
    "correctAnswerText": "The launch is asynchronous with respect to the host, so GPU execution may still be in progress",
    "explanation": "CUDA kernel launches are asynchronous with respect to the host CPU: control returns to the host immediately after queuing the launch, before the GPU finishes executing. Timing without cudaDeviceSynchronize() or CUDA events only measures launch overhead."
  },
  {
    "id": 89,
    "part": "endterm",
    "topic": "GPU and CUDA",
    "inSample": true,
    "inExam": true,
    "sampleNum": 11,
    "moodleNum": 18,
    "originBadge": "Endterm Sample #11 • My Endterm Q18",
    "userExamAttempt": {
      "exam": "Endterm",
      "qNum": 18,
      "selectedText": "Host stack memory",
      "isCorrect": false
    },
    "question": "Threads in one block repeatedly reuse a tile of input data. Which storage is intended for their fast cooperation?",
    "options": [
      {
        "id": "A",
        "text": "Per-block shared memory"
      },
      {
        "id": "B",
        "text": "Host stack memory"
      },
      {
        "id": "C",
        "text": "A separate register copy accessible directly by all threads"
      },
      {
        "id": "D",
        "text": "Another block’s shared memory"
      },
      {
        "id": "E",
        "text": "Per-thread local memory shared automatically across the block"
      }
    ],
    "correctOptionId": "A",
    "correctAnswerText": "Per-block shared memory",
    "explanation": "__shared__ memory is fast, on-chip memory scoped per thread block, explicitly designed so threads within the same block can share and reuse tiles of data instead of repeatedly hitting slow global memory."
  },
  {
    "id": 90,
    "part": "endterm",
    "topic": "GPU and CUDA",
    "inSample": true,
    "inExam": false,
    "sampleNum": 12,
    "moodleNum": null,
    "originBadge": "Endterm Sample #12",
    "userExamAttempt": null,
    "question": "Many threads read the same small, unchanged set of coefficients. Which memory space is specifically intended for cached read-only device data?",
    "options": [
      {
        "id": "A",
        "text": "A separate block’s shared memory"
      },
      {
        "id": "B",
        "text": "Host stack memory"
      },
      {
        "id": "C",
        "text": "Per-thread local memory"
      },
      {
        "id": "D",
        "text": "Per-thread registers as one shared object"
      },
      {
        "id": "E",
        "text": "Constant memory"
      }
    ],
    "correctOptionId": "E",
    "correctAnswerText": "Constant memory",
    "explanation": "CUDA constant memory (__constant__) is a small, read-only device memory space backed by a dedicated constant cache, ideal when all threads in a warp read the same coefficients."
  },
  {
    "id": 91,
    "part": "endterm",
    "topic": "GPU and CUDA",
    "inSample": true,
    "inExam": true,
    "sampleNum": 13,
    "moodleNum": 15,
    "originBadge": "Endterm Sample #13 • My Endterm Q15",
    "userExamAttempt": {
      "exam": "Endterm",
      "qNum": 15,
      "selectedText": "Some threads take one branch while other threads in the same warp take another",
      "isCorrect": true
    },
    "question": "Which situation most directly causes branch divergence within a warp?",
    "options": [
      {
        "id": "A",
        "text": "All threads in a warp take the same branch"
      },
      {
        "id": "B",
        "text": "Every thread reads a different adjacent array element"
      },
      {
        "id": "C",
        "text": "Some threads take one branch while other threads in the same warp take another"
      },
      {
        "id": "D",
        "text": "Two separate kernels use different functions"
      },
      {
        "id": "E",
        "text": "Different blocks contain different thread counts across separate launches"
      }
    ],
    "correctOptionId": "C",
    "correctAnswerText": "Some threads take one branch while other threads in the same warp take another",
    "explanation": "Threads in a warp execute in SIMT lockstep. Branch divergence happens when threads within the same warp evaluate a conditional differently and take different execution paths, causing serialized execution of each path."
  },
  {
    "id": 92,
    "part": "endterm",
    "topic": "GPU and CUDA",
    "inSample": true,
    "inExam": false,
    "sampleNum": 14,
    "moodleNum": null,
    "originBadge": "Endterm Sample #14",
    "userExamAttempt": null,
    "question": "A 1D stencil sums the center element and all neighbors within radius 2. How many input elements contribute to each interior output?",
    "options": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "4"
      },
      {
        "id": "C",
        "text": "7"
      },
      {
        "id": "D",
        "text": "5"
      },
      {
        "id": "E",
        "text": "2"
      }
    ],
    "correctOptionId": "D",
    "correctAnswerText": "5",
    "explanation": "A 1D stencil with radius r = 2 accesses the center element i plus 2 neighbors on the left (i-2, i-1) and 2 on the right (i+1, i+2), totaling 2r + 1 = 5 input elements."
  },
  {
    "id": 93,
    "part": "endterm",
    "topic": "GPU and CUDA",
    "inSample": true,
    "inExam": true,
    "sampleNum": 15,
    "moodleNum": 22,
    "originBadge": "Endterm Sample #15 • My Endterm Q22",
    "userExamAttempt": {
      "exam": "Endterm",
      "qNum": 22,
      "selectedText": "MPI replaces the need to launch device kernels",
      "isCorrect": false
    },
    "question": "In a hybrid MPI/CUDA application running across nodes, which division of work is most appropriate?",
    "options": [
      {
        "id": "A",
        "text": "MPI exchanges data between processes while CUDA kernels perform GPU computations"
      },
      {
        "id": "B",
        "text": "MPI ranks are assigned automatically to individual CUDA threads"
      },
      {
        "id": "C",
        "text": "Every CUDA thread directly shares the host memory of every node"
      },
      {
        "id": "D",
        "text": "CUDA block barriers exchange data between MPI processes"
      },
      {
        "id": "E",
        "text": "MPI replaces the need to launch device kernels"
      }
    ],
    "correctOptionId": "A",
    "correctAnswerText": "MPI exchanges data between processes while CUDA kernels perform GPU computations",
    "explanation": "In hybrid MPI+CUDA across multi-GPU cluster nodes, MPI handles inter-process/inter-node communication (halo exchanges, reductions), while each rank offloads heavy parallel computation to its GPU via CUDA kernels."
  },
  {
    "id": 94,
    "part": "endterm",
    "topic": "Spark",
    "inSample": true,
    "inExam": true,
    "sampleNum": 16,
    "moodleNum": 41,
    "originBadge": "Endterm Sample #16 • My Endterm Q41",
    "userExamAttempt": {
      "exam": "Endterm",
      "qNum": 41,
      "selectedText": "It requires a separate cluster for each iteration",
      "isCorrect": false
    },
    "question": "Why can Spark be useful for an iterative algorithm that reuses the same data many times?",
    "options": [
      {
        "id": "A",
        "text": "It requires a separate cluster for each iteration"
      },
      {
        "id": "B",
        "text": "It runs every iteration entirely on the driver"
      },
      {
        "id": "C",
        "text": "It guarantees that no computation will ever access disk"
      },
      {
        "id": "D",
        "text": "It automatically removes all algorithmic dependencies"
      },
      {
        "id": "E",
        "text": "It can retain reusable data in memory between iterations"
      }
    ],
    "correctOptionId": "E",
    "correctAnswerText": "It can retain reusable data in memory between iterations",
    "explanation": "Spark's core advantage over traditional disk-based MapReduce for iterative algorithms (like PageRank or gradient descent) is keeping working datasets cached/persisted in memory across iterations."
  },
  {
    "id": 95,
    "part": "endterm",
    "topic": "Spark",
    "inSample": true,
    "inExam": true,
    "sampleNum": 17,
    "moodleNum": 44,
    "originBadge": "Endterm Sample #17 • My Endterm Q44",
    "userExamAttempt": {
      "exam": "Endterm",
      "qNum": 44,
      "selectedText": "It describes transformations that can reconstruct the lost partition",
      "isCorrect": true
    },
    "question": "A partition of an RDD is lost after a worker fails. What role does lineage play?",
    "options": [
      {
        "id": "A",
        "text": "It stores every intermediate byte on the driver"
      },
      {
        "id": "B",
        "text": "It describes transformations that can reconstruct the lost partition"
      },
      {
        "id": "C",
        "text": "It requires that all original transformations be discarded"
      },
      {
        "id": "D",
        "text": "It gives each record a new random value"
      },
      {
        "id": "E",
        "text": "It makes all worker failures impossible"
      }
    ],
    "correctOptionId": "B",
    "correctAnswerText": "It describes transformations that can reconstruct the lost partition",
    "explanation": "An RDD records its lineage—the acyclic graph (DAG) of deterministic transformations used to build it from stable storage. If a partition is lost due to a worker failure, Spark recomputes only that partition using its lineage."
  },
  {
    "id": 96,
    "part": "endterm",
    "topic": "Spark",
    "inSample": true,
    "inExam": false,
    "sampleNum": 18,
    "moodleNum": null,
    "originBadge": "Endterm Sample #18",
    "userExamAttempt": null,
    "question": "Which operation explicitly redistributes an RDD into a requested number of partitions?",
    "options": [
      {
        "id": "A",
        "text": "map(lambda x: x)"
      },
      {
        "id": "B",
        "text": "count()"
      },
      {
        "id": "C",
        "text": "take(n)"
      },
      {
        "id": "D",
        "text": "repartition(n)"
      },
      {
        "id": "E",
        "text": "cache()"
      }
    ],
    "correctOptionId": "D",
    "correctAnswerText": "repartition(n)",
    "explanation": "repartition(n) reshuffles an RDD across the network to produce an RDD with the requested n partitions."
  },
  {
    "id": 97,
    "part": "endterm",
    "topic": "Spark",
    "inSample": true,
    "inExam": false,
    "sampleNum": 19,
    "moodleNum": null,
    "originBadge": "Endterm Sample #19",
    "userExamAttempt": null,
    "question": "What values result from mapping x * 2 over [1,2,3], ignoring partition layout?",
    "options": [
      {
        "id": "A",
        "text": "[6]"
      },
      {
        "id": "B",
        "text": "[1,2,3,1,2,3]"
      },
      {
        "id": "C",
        "text": "[1,4,9]"
      },
      {
        "id": "D",
        "text": "[2,4,6]"
      },
      {
        "id": "E",
        "text": "[3,4,5]"
      }
    ],
    "correctOptionId": "D",
    "correctAnswerText": "[2,4,6]",
    "explanation": "map(lambda x: x * 2) applies the function element-wise to each record in [1, 2, 3], producing [2, 4, 6]."
  },
  {
    "id": 98,
    "part": "endterm",
    "topic": "Spark",
    "inSample": true,
    "inExam": false,
    "sampleNum": 20,
    "moodleNum": null,
    "originBadge": "Endterm Sample #20",
    "userExamAttempt": null,
    "question": "An RDD contains the strings ’red blue’ and ’green’. Which operation produces individual word records from splitting each string?",
    "options": [
      {
        "id": "A",
        "text": "flatMap(lambda s: s.split())"
      },
      {
        "id": "B",
        "text": "count()"
      },
      {
        "id": "C",
        "text": "filter(lambda s: s.split())"
      },
      {
        "id": "D",
        "text": "map(lambda s: s.split())"
      },
      {
        "id": "E",
        "text": "reduce(lambda a,b: a+b)"
      }
    ],
    "correctOptionId": "A",
    "correctAnswerText": "flatMap(lambda s: s.split())",
    "explanation": "s.split() returns a list of words for each string. map() would produce nested lists (['red', 'blue'], ['green']), whereas flatMap() flattens those lists into individual word records ('red', 'blue', 'green')."
  },
  {
    "id": 99,
    "part": "endterm",
    "topic": "Spark",
    "inSample": true,
    "inExam": true,
    "sampleNum": 21,
    "moodleNum": 47,
    "originBadge": "Endterm Sample #21 • My Endterm Q47",
    "userExamAttempt": {
      "exam": "Endterm",
      "qNum": 47,
      "selectedText": "The records 4 and 5",
      "isCorrect": true
    },
    "question": "What does filter(lambda x: x > 3) produce from [1,4,2,5]?",
    "options": [
      {
        "id": "A",
        "text": "The original four records with new indices"
      },
      {
        "id": "B",
        "text": "The Boolean records False, True, False, True"
      },
      {
        "id": "C",
        "text": "The records 4 and 5"
      },
      {
        "id": "D",
        "text": "The single value 9"
      },
      {
        "id": "E",
        "text": "The records 1 and 2"
      }
    ],
    "correctOptionId": "C",
    "correctAnswerText": "The records 4 and 5",
    "explanation": "filter(lambda x: x > 3) retains only the records for which the predicate returns True. Among [1, 4, 2, 5], only 4 and 5 satisfy x > 3."
  },
  {
    "id": 100,
    "part": "endterm",
    "topic": "Spark",
    "inSample": true,
    "inExam": true,
    "sampleNum": 22,
    "moodleNum": 40,
    "originBadge": "Endterm Sample #22 • My Endterm Q40",
    "userExamAttempt": {
      "exam": "Endterm",
      "qNum": 40,
      "selectedText": "Each key paired with an iterable of its values",
      "isCorrect": true
    },
    "question": "For key-value pairs, what does groupByKey produce conceptually?",
    "options": [
      {
        "id": "A",
        "text": "Each key paired automatically with the sum of its values"
      },
      {
        "id": "B",
        "text": "Each key paired with an iterable of its values"
      },
      {
        "id": "C",
        "text": "All keys replaced by partition numbers"
      },
      {
        "id": "D",
        "text": "One scalar sum across every key"
      },
      {
        "id": "E",
        "text": "Only the largest key in each partition"
      }
    ],
    "correctOptionId": "B",
    "correctAnswerText": "Each key paired with an iterable of its values",
    "explanation": "groupByKey() groups all values sharing the same key across partitions and returns (key, Iterable<value>) pairs without reducing them yet."
  },
  {
    "id": 101,
    "part": "endterm",
    "topic": "Spark",
    "inSample": true,
    "inExam": true,
    "sampleNum": 23,
    "moodleNum": 42,
    "originBadge": "Endterm Sample #23 • My Endterm Q42",
    "userExamAttempt": {
      "exam": "Endterm",
      "qNum": 42,
      "selectedText": "('a',5) and ('b',4)",
      "isCorrect": true
    },
    "question": "A pair RDD contains (’a’,2), (’b’,4), and (’a’,3). What does reduceByKey(addition) produce, ignoring output order?",
    "options": [
      {
        "id": "A",
        "text": "(’a’,3) and (’b’,4)"
      },
      {
        "id": "B",
        "text": "(’a’,5) and (’b’,4)"
      },
      {
        "id": "C",
        "text": "(’a’,9)"
      },
      {
        "id": "D",
        "text": "(’a’,2), (’b’,4), and (’a’,3)"
      },
      {
        "id": "E",
        "text": "(’a’,2) and (’b’,1)"
      }
    ],
    "correctOptionId": "B",
    "correctAnswerText": "(’a’,5) and (’b’,4)",
    "explanation": "reduceByKey(addition) combines values for each identical key using the associative/commutative function. Key 'a' has 2 + 3 = 5, and key 'b' has 4, producing ('a', 5) and ('b', 4)."
  },
  {
    "id": 102,
    "part": "endterm",
    "topic": "Spark",
    "inSample": true,
    "inExam": false,
    "sampleNum": 24,
    "moodleNum": null,
    "originBadge": "Endterm Sample #24",
    "userExamAttempt": null,
    "question": "Why should collect() be used carefully on a very large RDD?",
    "options": [
      {
        "id": "A",
        "text": "It brings all elements into the driver’s memory"
      },
      {
        "id": "B",
        "text": "It automatically deletes the distributed input"
      },
      {
        "id": "C",
        "text": "It guarantees that records remain only on workers"
      },
      {
        "id": "D",
        "text": "It only counts records without transferring them"
      },
      {
        "id": "E",
        "text": "It creates exactly one result per partition"
      }
    ],
    "correctOptionId": "A",
    "correctAnswerText": "It brings all elements into the driver’s memory",
    "explanation": "collect() pulls every partition of the RDD across the network into a Python/Scala list in the single driver process's RAM—which can cause an OutOfMemoryError on large datasets."
  },
  {
    "id": 103,
    "part": "endterm",
    "topic": "Spark",
    "inSample": true,
    "inExam": true,
    "sampleNum": 25,
    "moodleNum": 48,
    "originBadge": "Endterm Sample #25 • My Endterm Q48",
    "userExamAttempt": {
      "exam": "Endterm",
      "qNum": 48,
      "selectedText": "10",
      "isCorrect": true
    },
    "question": "An RDD contains [2,3,5]. What value does reduce(lambda a,b: a+b) return?",
    "options": [
      {
        "id": "A",
        "text": "5"
      },
      {
        "id": "B",
        "text": "30"
      },
      {
        "id": "C",
        "text": "[2,3,5]"
      },
      {
        "id": "D",
        "text": "3"
      },
      {
        "id": "E",
        "text": "10"
      }
    ],
    "correctOptionId": "E",
    "correctAnswerText": "10",
    "explanation": "The action reduce(lambda a, b: a + b) aggregates all elements in the RDD into a single value on the driver: 2 + 3 + 5 = 10."
  },
  {
    "id": 104,
    "part": "endterm",
    "topic": "Spark",
    "inSample": true,
    "inExam": false,
    "sampleNum": 26,
    "moodleNum": null,
    "originBadge": "Endterm Sample #26",
    "userExamAttempt": null,
    "question": "What does local[2] specify for the local Spark execution shown in the lecture?",
    "options": [
      {
        "id": "A",
        "text": "Connect to two remote cluster nodes"
      },
      {
        "id": "B",
        "text": "Run only on CPU core number 2"
      },
      {
        "id": "C",
        "text": "Run locally with two worker threads"
      },
      {
        "id": "D",
        "text": "Use exactly two RDDs"
      },
      {
        "id": "E",
        "text": "Store every record twice"
      }
    ],
    "correctOptionId": "C",
    "correctAnswerText": "Run locally with two worker threads",
    "explanation": "In Spark master URLs, local[K] runs Spark locally on one machine using K worker threads. Thus local[2] runs locally with 2 worker threads."
  },
  {
    "id": 105,
    "part": "endterm",
    "topic": "Spark",
    "inSample": true,
    "inExam": true,
    "sampleNum": 27,
    "moodleNum": 49,
    "originBadge": "Endterm Sample #27 • My Endterm Q49",
    "userExamAttempt": {
      "exam": "Endterm",
      "qNum": 49,
      "selectedText": "A sortByKey operation on unrelated records",
      "isCorrect": false
    },
    "question": "Workers need to contribute numeric updates to a total that the driver can inspect. Which feature fits this role?",
    "options": [
      {
        "id": "A",
        "text": "A sortByKey operation on unrelated records"
      },
      {
        "id": "B",
        "text": "The RDD’s partition count"
      },
      {
        "id": "C",
        "text": "A shared ordinary Python global variable"
      },
      {
        "id": "D",
        "text": "An accumulator"
      },
      {
        "id": "E",
        "text": "A broadcast variable"
      }
    ],
    "correctOptionId": "D",
    "correctAnswerText": "An accumulator",
    "explanation": "Accumulators are Spark's write-only (from workers) shared variables used to safely aggregate counters or sums from tasks back to the driver."
  },
  {
    "id": 106,
    "part": "endterm",
    "topic": "Spark",
    "inSample": true,
    "inExam": false,
    "sampleNum": 28,
    "moodleNum": null,
    "originBadge": "Endterm Sample #28",
    "userExamAttempt": null,
    "question": "An accumulator starts at zero and is incremented inside a lazy transformation. No action has run. What value should be expected when the driver reads it at this point?",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "The number of transformation calls written in the program"
      },
      {
        "id": "C",
        "text": "The number of workers"
      },
      {
        "id": "D",
        "text": "The number of input records"
      },
      {
        "id": "E",
        "text": "The number of partitions"
      }
    ],
    "correctOptionId": "A",
    "correctAnswerText": "0",
    "explanation": "Spark transformations are lazy and only build the execution DAG without running tasks until an action is triggered. Before any action executes, the accumulator has never been incremented, so the driver still reads 0."
  },
  {
    "id": 107,
    "part": "endterm",
    "topic": "Spark",
    "inSample": true,
    "inExam": false,
    "sampleNum": 29,
    "moodleNum": null,
    "originBadge": "Endterm Sample #29",
    "userExamAttempt": null,
    "question": "Which Spark library is intended for SQL queries and structured DataFrames?",
    "options": [
      {
        "id": "A",
        "text": "SparkContext"
      },
      {
        "id": "B",
        "text": "Spark Streaming"
      },
      {
        "id": "C",
        "text": "Spark SQL"
      },
      {
        "id": "D",
        "text": "GraphX"
      },
      {
        "id": "E",
        "text": "MLlib"
      }
    ],
    "correctOptionId": "C",
    "correctAnswerText": "Spark SQL",
    "explanation": "Spark SQL is the Spark module dedicated to structured data processing, DataFrames/Datasets, and running SQL queries (alongside Spark Streaming, MLlib, and GraphX)."
  },
  {
    "id": 108,
    "part": "endterm",
    "topic": "Spark",
    "inSample": true,
    "inExam": false,
    "sampleNum": 30,
    "moodleNum": null,
    "originBadge": "Endterm Sample #30",
    "userExamAttempt": null,
    "question": "In the simplified execution model from the lecture, what typically forms a boundary between stages?",
    "options": [
      {
        "id": "A",
        "text": "Every Python variable assignment"
      },
      {
        "id": "B",
        "text": "Every record boundary in a text file"
      },
      {
        "id": "C",
        "text": "Every individual map expression"
      },
      {
        "id": "D",
        "text": "Every call to cache before computation"
      },
      {
        "id": "E",
        "text": "A wide dependency requiring a shuffle"
      }
    ],
    "correctOptionId": "E",
    "correctAnswerText": "A wide dependency requiring a shuffle",
    "explanation": "Spark breaks a job DAG into stages at wide dependencies (shuffles like reduceByKey, groupByKey, repartition), because data must be exchanged across partitions over the network between stages; narrow transformations are pipelined within a single stage."
  },
  {
    "id": 109,
    "part": "endterm",
    "topic": "PGAS and UPC",
    "inSample": true,
    "inExam": false,
    "sampleNum": 31,
    "moodleNum": null,
    "originBadge": "Endterm Sample #31",
    "userExamAttempt": null,
    "question": "Which statement captures the partitioned global address space model?",
    "options": [
      {
        "id": "A",
        "text": "Each thread can address only its private memory"
      },
      {
        "id": "B",
        "text": "Shared data is globally addressable but partitioned with affinity to particular threads"
      },
      {
        "id": "C",
        "text": "Addressing a remote object guarantees the same cost as a local access"
      },
      {
        "id": "D",
        "text": "Every shared object is fully replicated on every thread"
      },
      {
        "id": "E",
        "text": "All shared data must physically reside in one uniform-memory machine"
      }
    ],
    "correctOptionId": "B",
    "correctAnswerText": "Shared data is globally addressable but partitioned with affinity to particular threads",
    "explanation": "PGAS (Partitioned Global Address Space) exposes a single globally addressable memory space across all threads/processes, while preserving explicit locality/affinity so programmers know which thread owns each partition."
  },
  {
    "id": 110,
    "part": "endterm",
    "topic": "PGAS and UPC",
    "inSample": true,
    "inExam": false,
    "sampleNum": 32,
    "moodleNum": null,
    "originBadge": "Endterm Sample #32",
    "userExamAttempt": null,
    "question": "Why should a PGAS programmer still consider locality when remote shared data is addressable?",
    "options": [
      {
        "id": "A",
        "text": "Global addressing automatically balances the work"
      },
      {
        "id": "B",
        "text": "Remote data is always read-only"
      },
      {
        "id": "C",
        "text": "All shared accesses are automatically local"
      },
      {
        "id": "D",
        "text": "Remote accesses can incur communication costs"
      },
      {
        "id": "E",
        "text": "Only local data can be synchronized"
      }
    ],
    "correctOptionId": "D",
    "correctAnswerText": "Remote accesses can incur communication costs",
    "explanation": "Even though remote shared memory can be dereferenced directly using global pointers, remote accesses still cross the network/interconnect and have much higher latency than local memory accesses."
  },
  {
    "id": 111,
    "part": "endterm",
    "topic": "PGAS and UPC",
    "inSample": true,
    "inExam": true,
    "sampleNum": 33,
    "moodleNum": 27,
    "originBadge": "Endterm Sample #33 • My Endterm Q27",
    "userExamAttempt": {
      "exam": "Endterm",
      "qNum": 27,
      "selectedText": "Multiple threads execute the same program and can operate on different data",
      "isCorrect": true
    },
    "question": "What execution model does UPC use in the lecture?",
    "options": [
      {
        "id": "A",
        "text": "One thread is created automatically for every array element"
      },
      {
        "id": "B",
        "text": "All threads execute every instruction in strict lockstep"
      },
      {
        "id": "C",
        "text": "Each thread must run a different executable"
      },
      {
        "id": "D",
        "text": "Multiple threads execute the same program and can operate on different data"
      },
      {
        "id": "E",
        "text": "Only thread 0 executes statements outside upc_forall"
      }
    ],
    "correctOptionId": "D",
    "correctAnswerText": "Multiple threads execute the same program and can operate on different data",
    "explanation": "UPC (Unified Parallel C) uses an SPMD execution model: multiple threads execute the same program simultaneously and can operate on different local/shared data using MYTHREAD and THREADS."
  },
  {
    "id": 112,
    "part": "endterm",
    "topic": "PGAS and UPC",
    "inSample": true,
    "inExam": false,
    "sampleNum": 34,
    "moodleNum": null,
    "originBadge": "Endterm Sample #34",
    "userExamAttempt": null,
    "question": "In the UPC declarations shared int x; and int y;, which statement is correct?",
    "options": [
      {
        "id": "A",
        "text": "x is shared only among threads with even indices"
      },
      {
        "id": "B",
        "text": "Both declarations create one globally shared scalar"
      },
      {
        "id": "C",
        "text": "Both declarations create one private copy per thread"
      },
      {
        "id": "D",
        "text": "There is a private x and one shared y"
      },
      {
        "id": "E",
        "text": "There is one shared x and a private y for each thread"
      }
    ],
    "correctOptionId": "E",
    "correctAnswerText": "There is one shared x and a private y for each thread",
    "explanation": "In UPC, the qualifier 'shared' places a single globally accessible instance in shared space (`shared int x;`), whereas an unqualified declaration (`int y;`) creates a private copy for each thread."
  },
  {
    "id": 113,
    "part": "endterm",
    "topic": "PGAS and UPC",
    "inSample": true,
    "inExam": true,
    "sampleNum": 35,
    "moodleNum": 30,
    "originBadge": "Endterm Sample #35 • My Endterm Q30",
    "userExamAttempt": {
      "exam": "Endterm",
      "qNum": 30,
      "selectedText": "Thread 1",
      "isCorrect": false
    },
    "question": "With THREADS = 4 and default block size 1, which thread has affinity to element a[6] of shared int a[12]?",
    "options": [
      {
        "id": "A",
        "text": "Thread 0"
      },
      {
        "id": "B",
        "text": "Thread 2"
      },
      {
        "id": "C",
        "text": "All four threads"
      },
      {
        "id": "D",
        "text": "Thread 1"
      },
      {
        "id": "E",
        "text": "Thread 3"
      }
    ],
    "correctOptionId": "B",
    "correctAnswerText": "Thread 2",
    "explanation": "With default block size 1 (round-robin/cyclic distribution), element a[i] has affinity to thread (i % THREADS). Here i = 6 and THREADS = 4, so 6 % 4 = 2 -> Thread 2."
  },
  {
    "id": 114,
    "part": "endterm",
    "topic": "PGAS and UPC",
    "inSample": true,
    "inExam": false,
    "sampleNum": 36,
    "moodleNum": null,
    "originBadge": "Endterm Sample #36",
    "userExamAttempt": null,
    "question": "Which statement about a UPC pointer-to-shared is correct?",
    "options": [
      {
        "id": "A",
        "text": "It can reference shared objects with local or remote affinity"
      },
      {
        "id": "B",
        "text": "It makes every referenced object private"
      },
      {
        "id": "C",
        "text": "It must be stored in shared memory itself"
      },
      {
        "id": "D",
        "text": "It can reference only the calling thread’s private stack"
      },
      {
        "id": "E",
        "text": "It always points to a fully replicated copy"
      }
    ],
    "correctOptionId": "A",
    "correctAnswerText": "It can reference shared objects with local or remote affinity",
    "explanation": "A UPC pointer-to-shared (`shared int *p`) can point to any shared object in the global address space, regardless of whether that object has affinity to the calling thread (local) or another thread (remote)."
  },
  {
    "id": 115,
    "part": "endterm",
    "topic": "PGAS and UPC",
    "inSample": true,
    "inExam": true,
    "sampleNum": 37,
    "moodleNum": 29,
    "originBadge": "Endterm Sample #37 • My Endterm Q29",
    "userExamAttempt": {
      "exam": "Endterm",
      "qNum": 29,
      "selectedText": "upc_all_alloc",
      "isCorrect": true
    },
    "question": "Which allocation routine is collective and returns a pointer to the same shared allocation to all participating threads?",
    "options": [
      {
        "id": "A",
        "text": "malloc"
      },
      {
        "id": "B",
        "text": "upc_free"
      },
      {
        "id": "C",
        "text": "upc_all_alloc"
      },
      {
        "id": "D",
        "text": "upc_memget"
      },
      {
        "id": "E",
        "text": "upc_global_alloc"
      }
    ],
    "correctOptionId": "C",
    "correctAnswerText": "upc_all_alloc",
    "explanation": "`upc_all_alloc` is a collective allocation function that all threads call together; it allocates a shared array and returns a pointer-to-shared referencing the same allocation to every thread. (By contrast, `upc_global_alloc` is non-collective.)"
  },
  {
    "id": 116,
    "part": "endterm",
    "topic": "PGAS and UPC",
    "inSample": true,
    "inExam": true,
    "sampleNum": 38,
    "moodleNum": 26,
    "originBadge": "Endterm Sample #38 • My Endterm Q26",
    "userExamAttempt": {
      "exam": "Endterm",
      "qNum": 26,
      "selectedText": "upc_memget",
      "isCorrect": false
    },
    "question": "Which routine copies bytes from a private source buffer into shared destination memory?",
    "options": [
      {
        "id": "A",
        "text": "upc_memput"
      },
      {
        "id": "B",
        "text": "upc_memcpy"
      },
      {
        "id": "C",
        "text": "upc_free"
      },
      {
        "id": "D",
        "text": "upc_memget"
      },
      {
        "id": "E",
        "text": "upc_memset"
      }
    ],
    "correctOptionId": "A",
    "correctAnswerText": "upc_memput",
    "explanation": "`upc_memput(dst_shared, src_private, n)` copies n bytes from a private buffer into shared memory; `upc_memget` goes from shared to private, and `upc_memcpy` copies between two shared regions."
  },
  {
    "id": 117,
    "part": "endterm",
    "topic": "PGAS and UPC",
    "inSample": true,
    "inExam": false,
    "sampleNum": 39,
    "moodleNum": null,
    "originBadge": "Endterm Sample #39",
    "userExamAttempt": null,
    "question": "What is the main role of the affinity expression in upc_forall?",
    "options": [
      {
        "id": "A",
        "text": "Make all iterations execute on every thread"
      },
      {
        "id": "B",
        "text": "Specify the number of bytes in the loop variable"
      },
      {
        "id": "C",
        "text": "Allocate the shared output array"
      },
      {
        "id": "D",
        "text": "Insert a barrier after each iteration"
      },
      {
        "id": "E",
        "text": "Determine which thread executes each independent iteration"
      }
    ],
    "correctOptionId": "E",
    "correctAnswerText": "Determine which thread executes each independent iteration",
    "explanation": "`upc_forall(init; cond; incr; affinity)` adds a fourth affinity expression that controls which thread executes each iteration (typically `i` or `&a[i]`), allowing iterations to run where their data is local."
  },
  {
    "id": 118,
    "part": "endterm",
    "topic": "PGAS and UPC",
    "inSample": true,
    "inExam": false,
    "sampleNum": 40,
    "moodleNum": null,
    "originBadge": "Endterm Sample #40",
    "userExamAttempt": null,
    "question": "Which description matches a split-phase UPC barrier?",
    "options": [
      {
        "id": "A",
        "text": "upc_notify alone guarantees that all threads have finished"
      },
      {
        "id": "B",
        "text": "Only thread 0 calls either construct"
      },
      {
        "id": "C",
        "text": "upc_notify announces arrival and upc_wait completes the waiting phase"
      },
      {
        "id": "D",
        "text": "Both calls independently allocate shared memory"
      },
      {
        "id": "E",
        "text": "upc_wait announces arrival and upc_notify performs all waiting"
      }
    ],
    "correctOptionId": "C",
    "correctAnswerText": "upc_notify announces arrival and upc_wait completes the waiting phase",
    "explanation": "A split-phase UPC barrier separates signaling from waiting: `upc_notify` announces that the thread has reached the barrier (allowing local work that doesn't depend on other threads in between), and `upc_wait` blocks until all other threads have notified."
  },
  {
    "id": 119,
    "part": "endterm",
    "topic": "Basic graph algorithms",
    "inSample": true,
    "inExam": false,
    "sampleNum": 41,
    "moodleNum": null,
    "originBadge": "Endterm Sample #41",
    "userExamAttempt": null,
    "question": "Which description defines a tree in the undirected setting?",
    "options": [
      {
        "id": "A",
        "text": "A connected graph with no cycles"
      },
      {
        "id": "B",
        "text": "A connected graph with every possible edge"
      },
      {
        "id": "C",
        "text": "Any graph in which every vertex has degree two"
      },
      {
        "id": "D",
        "text": "A graph with exactly one cycle"
      },
      {
        "id": "E",
        "text": "Any graph with weighted edges"
      }
    ],
    "correctOptionId": "A",
    "correctAnswerText": "A connected graph with no cycles",
    "explanation": "In graph theory, an undirected tree is defined as a connected, acyclic (no cycles) undirected graph (equivalently, a connected graph with |V| - 1 edges)."
  },
  {
    "id": 120,
    "part": "endterm",
    "topic": "Basic graph algorithms",
    "inSample": true,
    "inExam": false,
    "sampleNum": 42,
    "moodleNum": null,
    "originBadge": "Endterm Sample #42",
    "userExamAttempt": null,
    "question": "For an undirected graph, how do adjacency-matrix entries A[u][v] and A[v][u] relate?",
    "options": [
      {
        "id": "A",
        "text": "Their sum must equal one"
      },
      {
        "id": "B",
        "text": "They represent unrelated edges with arbitrary values"
      },
      {
        "id": "C",
        "text": "One must be zero whenever the other is one"
      },
      {
        "id": "D",
        "text": "They are equal"
      },
      {
        "id": "E",
        "text": "They are equal only on the diagonal"
      }
    ],
    "correctOptionId": "D",
    "correctAnswerText": "They are equal",
    "explanation": "Because undirected edges have no direction (an edge between u and v is the same as between v and u), the adjacency matrix is symmetric: A[u][v] == A[v][u]."
  },
  {
    "id": 121,
    "part": "endterm",
    "topic": "Basic graph algorithms",
    "inSample": true,
    "inExam": false,
    "sampleNum": 43,
    "moodleNum": null,
    "originBadge": "Endterm Sample #43",
    "userExamAttempt": null,
    "question": "Which representation directly stores a list of neighbors for each vertex?",
    "options": [
      {
        "id": "A",
        "text": "A table of only vertex names"
      },
      {
        "id": "B",
        "text": "A list of shortest-path distances from one source"
      },
      {
        "id": "C",
        "text": "A minimum spanning tree weight"
      },
      {
        "id": "D",
        "text": "A list of connected-component sizes only"
      },
      {
        "id": "E",
        "text": "An adjacency list"
      }
    ],
    "correctOptionId": "E",
    "correctAnswerText": "An adjacency list",
    "explanation": "An adjacency list stores, for each vertex v, a list/array of its adjacent neighbors (and optional edge weights), taking O(|V| + |E|) space."
  },
  {
    "id": 122,
    "part": "endterm",
    "topic": "Basic graph algorithms",
    "inSample": true,
    "inExam": false,
    "sampleNum": 44,
    "moodleNum": null,
    "originBadge": "Endterm Sample #44",
    "userExamAttempt": null,
    "question": "What must a spanning tree of a connected undirected graph include?",
    "options": [
      {
        "id": "A",
        "text": "Every possible edge between all vertices"
      },
      {
        "id": "B",
        "text": "Only vertices on the shortest path between two selected nodes"
      },
      {
        "id": "C",
        "text": "All original edges, even if they form cycles"
      },
      {
        "id": "D",
        "text": "All vertices, connected without cycles"
      },
      {
        "id": "E",
        "text": "Only edges incident to one chosen vertex in every graph"
      }
    ],
    "correctOptionId": "D",
    "correctAnswerText": "All vertices, connected without cycles",
    "explanation": "A spanning tree of a connected undirected graph G = (V, E) is a subgraph that includes every vertex in V and connects them without any cycles (using |V| - 1 edges)."
  },
  {
    "id": 123,
    "part": "endterm",
    "topic": "Basic graph algorithms",
    "inSample": true,
    "inExam": true,
    "sampleNum": 45,
    "moodleNum": 2,
    "originBadge": "Endterm Sample #45 • My Endterm Q2",
    "userExamAttempt": {
      "exam": "Endterm",
      "qNum": 2,
      "selectedText": "The sum of all edges in the original graph, including unused edges",
      "isCorrect": false
    },
    "question": "What does a minimum spanning tree minimize?",
    "options": [
      {
        "id": "A",
        "text": "The shortest-path distance from every vertex to every other vertex"
      },
      {
        "id": "B",
        "text": "The sum of all edges in the original graph, including unused edges"
      },
      {
        "id": "C",
        "text": "The sum of the weights of its selected edges"
      },
      {
        "id": "D",
        "text": "The number of vertices included"
      },
      {
        "id": "E",
        "text": "The largest vertex identifier"
      }
    ],
    "correctOptionId": "C",
    "correctAnswerText": "The sum of the weights of its selected edges",
    "explanation": "A Minimum Spanning Tree (MST) is a spanning tree whose sum of selected edge weights is minimum among all possible spanning trees of the graph."
  },
  {
    "id": 124,
    "part": "endterm",
    "topic": "Basic graph algorithms",
    "inSample": true,
    "inExam": false,
    "sampleNum": 46,
    "moodleNum": null,
    "originBadge": "Endterm Sample #46",
    "userExamAttempt": null,
    "question": "The only edges from the current Prim tree to outside vertices have weights 2, 5, and 7. Which weight is selected next?",
    "options": [
      {
        "id": "A",
        "text": "12"
      },
      {
        "id": "B",
        "text": "5"
      },
      {
        "id": "C",
        "text": "7"
      },
      {
        "id": "D",
        "text": "14"
      },
      {
        "id": "E",
        "text": "2"
      }
    ],
    "correctOptionId": "E",
    "correctAnswerText": "2",
    "explanation": "Prim's algorithm greedily extends the current tree by choosing the minimum-weight edge connecting a vertex inside the tree to a vertex outside the tree. Among weights 2, 5, and 7, the minimum is 2."
  },
  {
    "id": 125,
    "part": "endterm",
    "topic": "Basic graph algorithms",
    "inSample": true,
    "inExam": true,
    "sampleNum": 47,
    "moodleNum": 1,
    "originBadge": "Endterm Sample #47 • My Endterm Q1",
    "userExamAttempt": {
      "exam": "Endterm",
      "qNum": 1,
      "selectedText": "Shortest paths from one source to other vertices",
      "isCorrect": true
    },
    "question": "What problem does Dijkstra’s algorithm address for graphs with nonnegative edge weights?",
    "options": [
      {
        "id": "A",
        "text": "Shortest paths from one source to other vertices"
      },
      {
        "id": "B",
        "text": "A maximum-weight spanning tree"
      },
      {
        "id": "C",
        "text": "A list of all possible cycles"
      },
      {
        "id": "D",
        "text": "A minimum spanning tree by total edge weight"
      },
      {
        "id": "E",
        "text": "A partition into connected components only"
      }
    ],
    "correctOptionId": "A",
    "correctAnswerText": "Shortest paths from one source to other vertices",
    "explanation": "Dijkstra's algorithm solves the single-source shortest-path (SSSP) problem on graphs with nonnegative edge weights, finding the shortest path weight from a chosen source vertex to every other reachable vertex."
  },
  {
    "id": 126,
    "part": "endterm",
    "topic": "Basic graph algorithms",
    "inSample": true,
    "inExam": false,
    "sampleNum": 48,
    "moodleNum": null,
    "originBadge": "Endterm Sample #48",
    "userExamAttempt": null,
    "question": "Two available routes from S to T have edge weights (2,3) and (1,6). Which route has the smaller total weight?",
    "options": [
      {
        "id": "A",
        "text": "The route with weights 1 and 6"
      },
      {
        "id": "B",
        "text": "The route with the smaller first edge regardless of the second"
      },
      {
        "id": "C",
        "text": "The route with weights 2 and 3"
      },
      {
        "id": "D",
        "text": "Neither route because each contains two edges"
      },
      {
        "id": "E",
        "text": "They have equal total weight"
      }
    ],
    "correctOptionId": "C",
    "correctAnswerText": "The route with weights 2 and 3",
    "explanation": "Shortest paths minimize total summed edge weight, not just the first edge. Route (2, 3) has total weight 2 + 3 = 5, which is smaller than route (1, 6) with total weight 1 + 6 = 7."
  },
  {
    "id": 127,
    "part": "endterm",
    "topic": "Basic graph algorithms",
    "inSample": true,
    "inExam": true,
    "sampleNum": 49,
    "moodleNum": 8,
    "originBadge": "Endterm Sample #49 • My Endterm Q8",
    "userExamAttempt": {
      "exam": "Endterm",
      "qNum": 8,
      "selectedText": "It asks for shortest paths between every pair of vertices",
      "isCorrect": true
    },
    "question": "How does the all-pairs shortest-path problem differ from single-source shortest paths?",
    "options": [
      {
        "id": "A",
        "text": "It ignores edge weights in every graph"
      },
      {
        "id": "B",
        "text": "It asks for shortest paths between every pair of vertices"
      },
      {
        "id": "C",
        "text": "It asks only whether the graph contains a cycle"
      },
      {
        "id": "D",
        "text": "It finds only one minimum spanning tree"
      },
      {
        "id": "E",
        "text": "It asks only for edges adjacent to one chosen vertex"
      }
    ],
    "correctOptionId": "B",
    "correctAnswerText": "It asks for shortest paths between every pair of vertices",
    "explanation": "Single-source shortest paths (SSSP) finds shortest paths from one fixed source vertex to all others, whereas all-pairs shortest paths (APSP) computes the shortest path distance between every pair of vertices (u, v)."
  },
  {
    "id": 128,
    "part": "endterm",
    "topic": "Basic graph algorithms",
    "inSample": true,
    "inExam": true,
    "sampleNum": 50,
    "moodleNum": 5,
    "originBadge": "Endterm Sample #50 • My Endterm Q5",
    "userExamAttempt": {
      "exam": "Endterm",
      "qNum": 5,
      "selectedText": "Skip all later communication even when needed",
      "isCorrect": false
    },
    "question": "Once the next vertex has been selected and announced, which work can different processors do in parallel in the lecture’s formulation?",
    "options": [
      {
        "id": "A",
        "text": "Independently choose incompatible global next vertices"
      },
      {
        "id": "B",
        "text": "Update their own assigned portions of the distance or key array"
      },
      {
        "id": "C",
        "text": "Replace the graph with an unrelated complete graph"
      },
      {
        "id": "D",
        "text": "Skip all later communication even when needed"
      },
      {
        "id": "E",
        "text": "Change other processors’ source programs"
      }
    ],
    "correctOptionId": "B",
    "correctAnswerText": "Update their own assigned portions of the distance or key array",
    "explanation": "In the parallel 1D block-partitioned Prim/Dijkstra formulation, after the global minimum vertex is selected and broadcast, each processor independently updates the distance/key entries for its own assigned subset of vertices in parallel."
  },
  {
    "id": 129,
    "part": "endterm",
    "topic": "Basic graph algorithms",
    "inSample": false,
    "inExam": true,
    "sampleNum": null,
    "moodleNum": 3,
    "originBadge": "My Endterm Q3 (Exam Only)",
    "userExamAttempt": {
      "exam": "Endterm",
      "qNum": 3,
      "selectedText": "An edge from u to v is present",
      "isCorrect": true
    },
    "question": "In an unweighted adjacency matrix, what does an entry of 1 at row u, column v normally indicate?",
    "options": [
      {
        "id": "A",
        "text": "The shortest-path distance is always one for every pair"
      },
      {
        "id": "B",
        "text": "A path of exactly two edges is present"
      },
      {
        "id": "C",
        "text": "Vertex u has exactly v neighbors"
      },
      {
        "id": "D",
        "text": "Vertices u and v have the same label"
      },
      {
        "id": "E",
        "text": "An edge from u to v is present"
      }
    ],
    "correctOptionId": "E",
    "correctAnswerText": "An edge from u to v is present",
    "explanation": "In an unweighted adjacency matrix A, rows represent source vertices u and columns represent target vertices v; A[u][v] = 1 indicates a directed (or undirected) edge from u to v exists, and 0 means no direct edge."
  },
  {
    "id": 130,
    "part": "endterm",
    "topic": "Basic graph algorithms",
    "inSample": false,
    "inExam": true,
    "sampleNum": null,
    "moodleNum": 4,
    "originBadge": "My Endterm Q4 (Exam Only)",
    "userExamAttempt": {
      "exam": "Endterm",
      "qNum": 4,
      "selectedText": "Only an edge incident to the starting vertex",
      "isCorrect": false
    },
    "question": "In Prim's algorithm, which edge is eligible to extend the current tree?",
    "options": [
      {
        "id": "A",
        "text": "Only an edge whose weight is larger than the last selected weight"
      },
      {
        "id": "B",
        "text": "Any edge between two outside vertices regardless of the current tree"
      },
      {
        "id": "C",
        "text": "Only an edge incident to the starting vertex"
      },
      {
        "id": "D",
        "text": "An edge connecting a tree vertex to a vertex outside the tree"
      },
      {
        "id": "E",
        "text": "An edge with both endpoints already in the tree"
      }
    ],
    "correctOptionId": "D",
    "correctAnswerText": "An edge connecting a tree vertex to a vertex outside the tree",
    "explanation": "At each step of Prim's algorithm, the candidate edges are those crossing the cut between vertices already in the growing MST and vertices not yet in the MST. Edges with both endpoints inside or both outside are ineligible."
  },
  {
    "id": 131,
    "part": "endterm",
    "topic": "Basic graph algorithms",
    "inSample": false,
    "inExam": true,
    "sampleNum": null,
    "moodleNum": 6,
    "originBadge": "My Endterm Q6 (Exam Only)",
    "userExamAttempt": {
      "exam": "Endterm",
      "qNum": 6,
      "selectedText": "To give every processor a different source code",
      "isCorrect": false
    },
    "question": "In the simple parallel Prim or Dijkstra formulation, why combine processors' local candidate choices?",
    "options": [
      {
        "id": "A",
        "text": "To force every local candidate into the final result"
      },
      {
        "id": "B",
        "text": "To make every edge weight equal"
      },
      {
        "id": "C",
        "text": "To give every processor a different source code"
      },
      {
        "id": "D",
        "text": "To select the globally best next candidate"
      },
      {
        "id": "E",
        "text": "To remove all graph edges after each step"
      }
    ],
    "correctOptionId": "D",
    "correctAnswerText": "To select the globally best next candidate",
    "explanation": "Each processor only knows the best candidate vertex within its own assigned partition of vertices. Combining (reducing) local candidate choices via MPI_Allreduce(MPI_MINLOC) finds the globally minimum candidate across the whole graph."
  },
  {
    "id": 132,
    "part": "endterm",
    "topic": "Basic graph algorithms",
    "inSample": false,
    "inExam": true,
    "sampleNum": null,
    "moodleNum": 7,
    "originBadge": "My Endterm Q7 (Exam Only)",
    "userExamAttempt": {
      "exam": "Endterm",
      "qNum": 7,
      "selectedText": "Whether a path exists from one vertex to another",
      "isCorrect": true
    },
    "question": "What information does a graph's transitive closure represent?",
    "options": [
      {
        "id": "A",
        "text": "The exact execution time of a traversal"
      },
      {
        "id": "B",
        "text": "Whether a path exists from one vertex to another"
      },
      {
        "id": "C",
        "text": "Only the weights of MST edges"
      },
      {
        "id": "D",
        "text": "Only the number of vertices in each adjacency list"
      },
      {
        "id": "E",
        "text": "Only which pairs have a direct edge"
      }
    ],
    "correctOptionId": "B",
    "correctAnswerText": "Whether a path exists from one vertex to another",
    "explanation": "The transitive closure of a graph is a boolean reachability matrix T where T[u][v] = 1 if and only if there is a path (of one or more edges) from vertex u to vertex v."
  },
  {
    "id": 133,
    "part": "endterm",
    "topic": "Basic graph algorithms",
    "inSample": false,
    "inExam": true,
    "sampleNum": null,
    "moodleNum": 9,
    "originBadge": "My Endterm Q9 (Exam Only)",
    "userExamAttempt": {
      "exam": "Endterm",
      "qNum": 9,
      "selectedText": "All-pairs shortest paths",
      "isCorrect": true
    },
    "question": "Which problem is Floyd's algorithm presented as solving in the lecture?",
    "options": [
      {
        "id": "A",
        "text": "Sorting vertices by their names"
      },
      {
        "id": "B",
        "text": "Minimum spanning tree from one starting vertex"
      },
      {
        "id": "C",
        "text": "All-pairs shortest paths"
      },
      {
        "id": "D",
        "text": "Choosing one maximum-weight edge"
      },
      {
        "id": "E",
        "text": "Counting only directly adjacent vertices"
      }
    ],
    "correctOptionId": "C",
    "correctAnswerText": "All-pairs shortest paths",
    "explanation": "Floyd's (Floyd-Warshall) algorithm uses dynamic programming over intermediate vertices k = 1..n to compute the shortest-path distances between all pairs of vertices (APSP) in O(|V|^3) time."
  },
  {
    "id": 134,
    "part": "endterm",
    "topic": "Basic graph algorithms",
    "inSample": false,
    "inExam": true,
    "sampleNum": null,
    "moodleNum": 10,
    "originBadge": "My Endterm Q10 (Exam Only)",
    "userExamAttempt": {
      "exam": "Endterm",
      "qNum": 10,
      "selectedText": "4",
      "isCorrect": false
    },
    "question": "An undirected graph contains edges A-B and C-D, with no other edges or vertices. How many connected components does it have?",
    "options": [
      {
        "id": "A",
        "text": "4"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "3"
      },
      {
        "id": "D",
        "text": "0"
      },
      {
        "id": "E",
        "text": "2"
      }
    ],
    "correctOptionId": "E",
    "correctAnswerText": "2",
    "explanation": "Vertices A and B form one connected component via edge A-B, and vertices C and D form a second connected component via edge C-D. With no edges connecting {A,B} to {C,D}, there are 2 connected components."
  },
  {
    "id": 135,
    "part": "endterm",
    "topic": "GPU and CUDA",
    "inSample": false,
    "inExam": true,
    "sampleNum": null,
    "moodleNum": 11,
    "originBadge": "My Endterm Q11 (Exam Only)",
    "userExamAttempt": {
      "exam": "Endterm",
      "qNum": 11,
      "selectedText": "Reuse loaded input elements and reduce repeated global-memory accesses",
      "isCorrect": true
    },
    "question": "What is the main performance motivation for tiling matrix multiplication into shared memory?",
    "options": [
      {
        "id": "A",
        "text": "Make the CPU calculate every tile before launch"
      },
      {
        "id": "B",
        "text": "Remove all need for synchronization within a block"
      },
      {
        "id": "C",
        "text": "Reduce the mathematical number of output elements"
      },
      {
        "id": "D",
        "text": "Reuse loaded input elements and reduce repeated global-memory accesses"
      },
      {
        "id": "E",
        "text": "Make every thread compute the entire output matrix"
      }
    ],
    "correctOptionId": "D",
    "correctAnswerText": "Reuse loaded input elements and reduce repeated global-memory accesses",
    "explanation": "Shared memory tiling loads small sub-matrices (tiles) once from high-latency global memory into fast on-chip shared memory so every thread in the block reuses those loaded elements many times, drastically reducing global memory bandwidth demand."
  },
  {
    "id": 136,
    "part": "endterm",
    "topic": "GPU and CUDA",
    "inSample": false,
    "inExam": true,
    "sampleNum": null,
    "moodleNum": 12,
    "originBadge": "My Endterm Q12 (Exam Only)",
    "userExamAttempt": {
      "exam": "Endterm",
      "qNum": 12,
      "selectedText": "Fewer blocks may fit concurrently on the SM",
      "isCorrect": true
    },
    "question": "If each block uses more shared memory while other requirements stay fixed, what may happen on an SM with limited shared memory?",
    "options": [
      {
        "id": "A",
        "text": "Register usage is forced to zero"
      },
      {
        "id": "B",
        "text": "Shared memory becomes private to the host"
      },
      {
        "id": "C",
        "text": "The number of grid blocks automatically decreases"
      },
      {
        "id": "D",
        "text": "More blocks must fit concurrently because each block is larger"
      },
      {
        "id": "E",
        "text": "Fewer blocks may fit concurrently on the SM"
      }
    ],
    "correctOptionId": "E",
    "correctAnswerText": "Fewer blocks may fit concurrently on the SM",
    "explanation": "Each Streaming Multiprocessor (SM) has a fixed shared-memory capacity. If each thread block consumes more shared memory, fewer blocks can reside concurrently on an SM, reducing occupancy."
  },
  {
    "id": 137,
    "part": "endterm",
    "topic": "GPU and CUDA",
    "inSample": false,
    "inExam": true,
    "sampleNum": null,
    "moodleNum": 13,
    "originBadge": "My Endterm Q13 (Exam Only)",
    "userExamAttempt": {
      "exam": "Endterm",
      "qNum": 13,
      "selectedText": "cudaFree(device_pointer)",
      "isCorrect": true
    },
    "question": "Which operation releases memory previously allocated with cudaMalloc, after all uses have completed?",
    "options": [
      {
        "id": "A",
        "text": "cudaMalloc(device_pointer, 0) as a required release operation"
      },
      {
        "id": "B",
        "text": "cudaFree(device_pointer)"
      },
      {
        "id": "C",
        "text": "__syncthreads()"
      },
      {
        "id": "D",
        "text": "free(device_pointer)"
      },
      {
        "id": "E",
        "text": "Setting the host pointer variable to NULL only"
      }
    ],
    "correctOptionId": "B",
    "correctAnswerText": "cudaFree(device_pointer)",
    "explanation": "Memory allocated on the GPU via cudaMalloc must be released using cudaFree(device_pointer). Standard C free() operates on host heap memory and cannot free device allocations."
  },
  {
    "id": 138,
    "part": "endterm",
    "topic": "GPU and CUDA",
    "inSample": false,
    "inExam": true,
    "sampleNum": null,
    "moodleNum": 14,
    "originBadge": "My Endterm Q14 (Exam Only)",
    "userExamAttempt": {
      "exam": "Endterm",
      "qNum": 14,
      "selectedText": "Different paths within a warp may be executed separately with some lanes inactive",
      "isCorrect": true
    },
    "question": "Why can branch divergence reduce performance?",
    "options": [
      {
        "id": "A",
        "text": "Different paths within a warp may be executed separately with some lanes inactive"
      },
      {
        "id": "B",
        "text": "Threads automatically discard values from the shorter branch"
      },
      {
        "id": "C",
        "text": "Each branch necessarily creates another kernel launch"
      },
      {
        "id": "D",
        "text": "Divergence increases the physical number of GPU cores"
      },
      {
        "id": "E",
        "text": "Every branch forces all data to be copied to the CPU"
      }
    ],
    "correctOptionId": "A",
    "correctAnswerText": "Different paths within a warp may be executed separately with some lanes inactive",
    "explanation": "Because threads within a warp share one program counter / instruction issue unit (SIMT), if threads diverge down different branches, the warp executes each active path sequentially while masking off threads on the other path, reducing throughput."
  },
  {
    "id": 139,
    "part": "endterm",
    "topic": "GPU and CUDA",
    "inSample": false,
    "inExam": true,
    "sampleNum": null,
    "moodleNum": 17,
    "originBadge": "My Endterm Q17 (Exam Only)",
    "userExamAttempt": {
      "exam": "Endterm",
      "qNum": 17,
      "selectedText": "blockIdx.x * blockDim.x + threadIdx.x",
      "isCorrect": true
    },
    "question": "Which expression gives a unique linear index for a 1D grid of 1D blocks?",
    "options": [
      {
        "id": "A",
        "text": "blockIdx.x + threadIdx.x"
      },
      {
        "id": "B",
        "text": "blockIdx.x * gridDim.x + threadIdx.x"
      },
      {
        "id": "C",
        "text": "threadIdx.x * gridDim.x + blockDim.x"
      },
      {
        "id": "D",
        "text": "blockDim.x + gridDim.x + threadIdx.x"
      },
      {
        "id": "E",
        "text": "blockIdx.x * blockDim.x + threadIdx.x"
      }
    ],
    "correctOptionId": "E",
    "correctAnswerText": "blockIdx.x * blockDim.x + threadIdx.x",
    "explanation": "In a 1D grid of 1D blocks, blockIdx.x gives the block index, blockDim.x gives threads per block, and threadIdx.x gives the thread's offset inside the block: global index = blockIdx.x * blockDim.x + threadIdx.x."
  },
  {
    "id": 140,
    "part": "endterm",
    "topic": "GPU and CUDA",
    "inSample": false,
    "inExam": true,
    "sampleNum": null,
    "moodleNum": 23,
    "originBadge": "My Endterm Q23 (Exam Only)",
    "userExamAttempt": {
      "exam": "Endterm",
      "qNum": 23,
      "selectedText": "256",
      "isCorrect": true
    },
    "question": "A 2D block is configured as dim3(16,16). How many threads are in that block?",
    "options": [
      {
        "id": "A",
        "text": "16"
      },
      {
        "id": "B",
        "text": "512"
      },
      {
        "id": "C",
        "text": "256"
      },
      {
        "id": "D",
        "text": "128"
      },
      {
        "id": "E",
        "text": "32"
      }
    ],
    "correctOptionId": "C",
    "correctAnswerText": "256",
    "explanation": "A 2D thread block configured with dim3(16, 16) (meaning blockDim.x = 16, blockDim.y = 16, blockDim.z = 1) contains 16 × 16 × 1 = 256 threads."
  },
  {
    "id": 141,
    "part": "endterm",
    "topic": "GPU and CUDA",
    "inSample": false,
    "inExam": true,
    "sampleNum": null,
    "moodleNum": 24,
    "originBadge": "My Endterm Q24 (Exam Only)",
    "userExamAttempt": {
      "exam": "Endterm",
      "qNum": 24,
      "selectedText": "cudaMemcpy(h_in, d_in, N*sizeof(float), cudaMemcpyHostToDevice)",
      "isCorrect": false
    },
    "question": "Host array h_in contains input values and d_in is an allocated device pointer. Which call copies N floats to the device?",
    "options": [
      {
        "id": "A",
        "text": "cudaMemcpy(d_in, h_in, N, cudaMemcpyHostToDevice)"
      },
      {
        "id": "B",
        "text": "cudaMemcpy(h_in, d_in, N*sizeof(float), cudaMemcpyHostToDevice)"
      },
      {
        "id": "C",
        "text": "cudaMemcpy(d_in, h_in, N*sizeof(float), cudaMemcpyDeviceToHost)"
      },
      {
        "id": "D",
        "text": "cudaMemcpy(h_in, d_in, N*sizeof(float), cudaMemcpyDeviceToHost)"
      },
      {
        "id": "E",
        "text": "cudaMemcpy(d_in, h_in, N*sizeof(float), cudaMemcpyHostToDevice)"
      }
    ],
    "correctOptionId": "E",
    "correctAnswerText": "cudaMemcpy(d_in, h_in, N*sizeof(float), cudaMemcpyHostToDevice)",
    "explanation": "cudaMemcpy follows C's memcpy convention: (destination, source, byteCount, direction). To copy N floats from host h_in to device d_in, call cudaMemcpy(d_in, h_in, N*sizeof(float), cudaMemcpyHostToDevice)."
  },
  {
    "id": 142,
    "part": "endterm",
    "topic": "GPU and CUDA",
    "inSample": false,
    "inExam": true,
    "sampleNum": null,
    "moodleNum": 25,
    "originBadge": "My Endterm Q25 (Exam Only)",
    "userExamAttempt": {
      "exam": "Endterm",
      "qNum": 25,
      "selectedText": "Thread t accesses a[base + 1000*t]",
      "isCorrect": false
    },
    "question": "For a suitably aligned float array, which access pattern generally offers better coalescing across neighboring threads of a warp?",
    "options": [
      {
        "id": "A",
        "text": "Thread t accesses the first element of row t in a very wide row-major matrix"
      },
      {
        "id": "B",
        "text": "Thread t accesses a[base + 512*t]"
      },
      {
        "id": "C",
        "text": "Thread t accesses a[base + 1000*t]"
      },
      {
        "id": "D",
        "text": "Thread t accesses a[base + t]"
      },
      {
        "id": "E",
        "text": "Thread t accesses a randomly chosen distant position"
      }
    ],
    "correctOptionId": "D",
    "correctAnswerText": "Thread t accesses a[base + t]",
    "explanation": "Memory coalescing merges global memory accesses from threads in the same warp into minimal cache-line/sector transactions when consecutive threads access consecutive memory addresses: thread t accessing a[base + t] (unit stride)."
  },
  {
    "id": 143,
    "part": "endterm",
    "topic": "PGAS and UPC",
    "inSample": false,
    "inExam": true,
    "sampleNum": null,
    "moodleNum": 28,
    "originBadge": "My Endterm Q28 (Exam Only)",
    "userExamAttempt": {
      "exam": "Endterm",
      "qNum": 28,
      "selectedText": "Thread 3",
      "isCorrect": false
    },
    "question": "With THREADS = 4 and shared [2] int a[16], which thread has affinity to a[5]?",
    "options": [
      {
        "id": "A",
        "text": "Thread 2"
      },
      {
        "id": "B",
        "text": "Thread 1"
      },
      {
        "id": "C",
        "text": "Thread 5"
      },
      {
        "id": "D",
        "text": "Thread 3"
      },
      {
        "id": "E",
        "text": "Thread 0"
      }
    ],
    "correctOptionId": "A",
    "correctAnswerText": "Thread 2",
    "explanation": "For `shared [2] int a[16]` with THREADS = 4, block size B = 2. Element a[i] belongs to block floor(i / B), which maps to thread floor(i / B) % THREADS. For a[5]: block = floor(5 / 2) = 2, and 2 % 4 = 2 -> Thread 2."
  },
  {
    "id": 144,
    "part": "endterm",
    "topic": "PGAS and UPC",
    "inSample": false,
    "inExam": true,
    "sampleNum": null,
    "moodleNum": 31,
    "originBadge": "My Endterm Q31 (Exam Only)",
    "userExamAttempt": {
      "exam": "Endterm",
      "qNum": 31,
      "selectedText": "A shared pointer to an integer in private space",
      "isCorrect": false
    },
    "question": "What does shared int *p declare in UPC?",
    "options": [
      {
        "id": "A",
        "text": "A shared pointer that automatically replicates its target"
      },
      {
        "id": "B",
        "text": "A private pointer to an integer in shared space"
      },
      {
        "id": "C",
        "text": "A shared integer whose value is a thread number"
      },
      {
        "id": "D",
        "text": "A private pointer restricted to private integers"
      },
      {
        "id": "E",
        "text": "A shared pointer to an integer in private space"
      }
    ],
    "correctOptionId": "B",
    "correctAnswerText": "A private pointer to an integer in shared space",
    "explanation": "In UPC pointer declarations, the qualifier before `*` qualifies the target, not the pointer itself. Thus `shared int *p` declares a private pointer (each thread has its own pointer variable p) pointing to an int in shared memory."
  },
  {
    "id": 145,
    "part": "endterm",
    "topic": "PGAS and UPC",
    "inSample": false,
    "inExam": true,
    "sampleNum": null,
    "moodleNum": 32,
    "originBadge": "My Endterm Q32 (Exam Only)",
    "userExamAttempt": {
      "exam": "Endterm",
      "qNum": 32,
      "selectedText": "upc_memcpy",
      "isCorrect": false
    },
    "question": "Which routine copies bytes from shared source memory into a private destination buffer?",
    "options": [
      {
        "id": "A",
        "text": "upc_all_alloc"
      },
      {
        "id": "B",
        "text": "upc_memput"
      },
      {
        "id": "C",
        "text": "upc_memcpy"
      },
      {
        "id": "D",
        "text": "upc_memget"
      },
      {
        "id": "E",
        "text": "upc_memset"
      }
    ],
    "correctOptionId": "D",
    "correctAnswerText": "upc_memget",
    "explanation": "`upc_memget(dst_private, src_shared, size)` transfers bytes from shared memory into a thread's private buffer. (`upc_memput` copies private -> shared; `upc_memcpy` copies shared -> shared.)"
  },
  {
    "id": 146,
    "part": "endterm",
    "topic": "PGAS and UPC",
    "inSample": false,
    "inExam": true,
    "sampleNum": null,
    "moodleNum": 33,
    "originBadge": "My Endterm Q33 (Exam Only)",
    "userExamAttempt": {
      "exam": "Endterm",
      "qNum": 33,
      "selectedText": "The number of local array elements",
      "isCorrect": false
    },
    "question": "With THREADS = 4, which values can MYTHREAD take?",
    "options": [
      {
        "id": "A",
        "text": "0, 1, 2, 3"
      },
      {
        "id": "B",
        "text": "4 on every thread"
      },
      {
        "id": "C",
        "text": "The number of local array elements"
      },
      {
        "id": "D",
        "text": "1, 2, 3, 4"
      },
      {
        "id": "E",
        "text": "0, 1, 2, 3, 4"
      }
    ],
    "correctOptionId": "A",
    "correctAnswerText": "0, 1, 2, 3",
    "explanation": "In UPC, MYTHREAD is the built-in 0-based identifier of the calling thread, taking integer values 0, 1, ..., THREADS - 1. For THREADS = 4, MYTHREAD takes 0, 1, 2, 3."
  },
  {
    "id": 147,
    "part": "endterm",
    "topic": "PGAS and UPC",
    "inSample": false,
    "inExam": true,
    "sampleNum": null,
    "moodleNum": 34,
    "originBadge": "My Endterm Q34 (Exam Only)",
    "userExamAttempt": {
      "exam": "Endterm",
      "qNum": 34,
      "selectedText": "0, 1, 8, 9",
      "isCorrect": true
    },
    "question": "With THREADS = 4 and shared [2] int a[16], which elements have affinity to thread 0?",
    "options": [
      {
        "id": "A",
        "text": "0, 4, 8, 12"
      },
      {
        "id": "B",
        "text": "0, 1, 2, 3"
      },
      {
        "id": "C",
        "text": "0, 1, 4, 5"
      },
      {
        "id": "D",
        "text": "0, 1, 8, 9"
      },
      {
        "id": "E",
        "text": "0, 2, 4, 6"
      }
    ],
    "correctOptionId": "D",
    "correctAnswerText": "0, 1, 8, 9",
    "explanation": "With `shared [2] int a[16]` and THREADS = 4, blocks of 2 elements cycle across threads 0..3: block 0 (indices 0,1) -> Thread 0; block 1 (2,3) -> Thread 1; block 2 (4,5) -> Thread 2; block 3 (6,7) -> Thread 3; block 4 (8,9) -> Thread 0. So Thread 0 owns 0, 1, 8, 9."
  },
  {
    "id": 148,
    "part": "endterm",
    "topic": "PGAS and UPC",
    "inSample": false,
    "inExam": true,
    "sampleNum": null,
    "moodleNum": 35,
    "originBadge": "My Endterm Q35 (Exam Only)",
    "userExamAttempt": {
      "exam": "Endterm",
      "qNum": 35,
      "selectedText": "Prevent overlapping updates from losing contributions",
      "isCorrect": true
    },
    "question": "Several threads perform read-modify-write updates on one shared counter. What is the purpose of using the same UPC lock around each update?",
    "options": [
      {
        "id": "A",
        "text": "Prevent overlapping updates from losing contributions"
      },
      {
        "id": "B",
        "text": "Guarantee that threads update in numerical ID order"
      },
      {
        "id": "C",
        "text": "Make the counter private to each thread"
      },
      {
        "id": "D",
        "text": "Replace the counter with a reduction automatically"
      },
      {
        "id": "E",
        "text": "Move the counter to every thread's stack"
      }
    ],
    "correctOptionId": "A",
    "correctAnswerText": "Prevent overlapping updates from losing contributions",
    "explanation": "Simultaneous read-modify-write updates on a shared counter without synchronization cause a race condition where updates overwrite one another. Wrapping the update in a UPC lock (`upc_lock`/`upc_unlock`) ensures mutual exclusion so no increment is lost."
  },
  {
    "id": 149,
    "part": "endterm",
    "topic": "Spark",
    "inSample": false,
    "inExam": true,
    "sampleNum": null,
    "moodleNum": 36,
    "originBadge": "My Endterm Q36 (Exam Only)",
    "userExamAttempt": {
      "exam": "Endterm",
      "qNum": 36,
      "selectedText": "Records may need to move between workers over the network",
      "isCorrect": true
    },
    "question": "Why can a shuffle be expensive?",
    "options": [
      {
        "id": "A",
        "text": "Each key must receive its own physical server"
      },
      {
        "id": "B",
        "text": "Records may need to move between workers over the network"
      },
      {
        "id": "C",
        "text": "Every record must be converted into source code"
      },
      {
        "id": "D",
        "text": "The RDD becomes mutable during execution"
      },
      {
        "id": "E",
        "text": "All worker memory is permanently disabled"
      }
    ],
    "correctOptionId": "B",
    "correctAnswerText": "Records may need to move between workers over the network",
    "explanation": "A shuffle (triggered by wide dependencies like groupByKey or sortByKey) requires redistributing records across partitions—often serializing data, writing/reading shuffle files, and transferring data across the network between worker nodes."
  },
  {
    "id": 150,
    "part": "endterm",
    "topic": "Spark",
    "inSample": false,
    "inExam": true,
    "sampleNum": null,
    "moodleNum": 37,
    "originBadge": "My Endterm Q37 (Exam Only)",
    "userExamAttempt": {
      "exam": "Endterm",
      "qNum": 37,
      "selectedText": "map applied independently to each record",
      "isCorrect": true
    },
    "question": "Which transformation normally has a narrow dependency on its input RDD?",
    "options": [
      {
        "id": "A",
        "text": "repartition to redistribute records"
      },
      {
        "id": "B",
        "text": "sortByKey across partitions"
      },
      {
        "id": "C",
        "text": "groupByKey when equal keys are spread across partitions"
      },
      {
        "id": "D",
        "text": "map applied independently to each record"
      },
      {
        "id": "E",
        "text": "reduceByKey when equal keys must be combined across partitions"
      }
    ],
    "correctOptionId": "D",
    "correctAnswerText": "map applied independently to each record",
    "explanation": "map() transforms each input record independently within its own partition without needing data from other partitions—each output partition depends on at most one input partition (a narrow dependency)."
  },
  {
    "id": 151,
    "part": "endterm",
    "topic": "Spark",
    "inSample": false,
    "inExam": true,
    "sampleNum": null,
    "moodleNum": 38,
    "originBadge": "My Endterm Q38 (Exam Only)",
    "userExamAttempt": {
      "exam": "Endterm",
      "qNum": 38,
      "selectedText": "An immutable, partitioned collection of records",
      "isCorrect": true
    },
    "question": "Which description best matches an RDD?",
    "options": [
      {
        "id": "A",
        "text": "A list that is always replicated completely on every worker"
      },
      {
        "id": "B",
        "text": "One mutable array stored only on the driver"
      },
      {
        "id": "C",
        "text": "An immutable, partitioned collection of records"
      },
      {
        "id": "D",
        "text": "A shared variable that workers update byte by byte"
      },
      {
        "id": "E",
        "text": "A file that must have exactly one partition per node"
      }
    ],
    "correctOptionId": "C",
    "correctAnswerText": "An immutable, partitioned collection of records",
    "explanation": "An RDD (Resilient Distributed Dataset) is Spark's core abstraction: an immutable, fault-tolerant collection of records partitioned across cluster nodes so operations can run in parallel."
  },
  {
    "id": 152,
    "part": "endterm",
    "topic": "Spark",
    "inSample": false,
    "inExam": true,
    "sampleNum": null,
    "moodleNum": 39,
    "originBadge": "My Endterm Q39 (Exam Only)",
    "userExamAttempt": {
      "exam": "Endterm",
      "qNum": 39,
      "selectedText": "To force every worker to hold the complete RDD",
      "isCorrect": false
    },
    "question": "Why divide an RDD into partitions?",
    "options": [
      {
        "id": "A",
        "text": "To convert all records into key-value pairs automatically"
      },
      {
        "id": "B",
        "text": "To make every record a separate application"
      },
      {
        "id": "C",
        "text": "To force every worker to hold the complete RDD"
      },
      {
        "id": "D",
        "text": "To create units of data that tasks can process in parallel"
      },
      {
        "id": "E",
        "text": "To guarantee one partition per physical server forever"
      }
    ],
    "correctOptionId": "D",
    "correctAnswerText": "To create units of data that tasks can process in parallel",
    "explanation": "Partitions are the basic units of parallelism in Spark: each partition is processed by a task on an executor core, enabling distributed parallel computation across the cluster."
  },
  {
    "id": 153,
    "part": "endterm",
    "topic": "Spark",
    "inSample": false,
    "inExam": true,
    "sampleNum": null,
    "moodleNum": 43,
    "originBadge": "My Endterm Q43 (Exam Only)",
    "userExamAttempt": {
      "exam": "Endterm",
      "qNum": 43,
      "selectedText": "A new SparkContext for each record",
      "isCorrect": false
    },
    "question": "Every task needs the same read-only lookup table. Which Spark feature is intended to distribute it efficiently?",
    "options": [
      {
        "id": "A",
        "text": "A separate collect call in every task"
      },
      {
        "id": "B",
        "text": "A new SparkContext for each record"
      },
      {
        "id": "C",
        "text": "A broadcast variable"
      },
      {
        "id": "D",
        "text": "An accumulator"
      },
      {
        "id": "E",
        "text": "A mutable driver list updated by workers"
      }
    ],
    "correctOptionId": "C",
    "correctAnswerText": "A broadcast variable",
    "explanation": "A broadcast variable (`sc.broadcast(table)`) caches a read-only copy of data once on each worker node rather than re-sending the lookup table over the network with every single task."
  },
  {
    "id": 154,
    "part": "endterm",
    "topic": "Spark",
    "inSample": false,
    "inExam": true,
    "sampleNum": null,
    "moodleNum": 45,
    "originBadge": "My Endterm Q45 (Exam Only)",
    "userExamAttempt": {
      "exam": "Endterm",
      "qNum": 45,
      "selectedText": "In tasks executed by worker-side executors",
      "isCorrect": true
    },
    "question": "In Spark's distributed execution, where is the work on RDD partitions normally performed?",
    "options": [
      {
        "id": "A",
        "text": "In one CPU register shared by all nodes"
      },
      {
        "id": "B",
        "text": "Only in the driver's user-interface process"
      },
      {
        "id": "C",
        "text": "In tasks executed by worker-side executors"
      },
      {
        "id": "D",
        "text": "In the compiler before the program starts"
      },
      {
        "id": "E",
        "text": "Only inside the NameNode"
      }
    ],
    "correctOptionId": "C",
    "correctAnswerText": "In tasks executed by worker-side executors",
    "explanation": "The Spark driver coordinates scheduling and DAG planning, while the actual computations on RDD partitions run inside tasks executed by worker-side executor processes."
  },
  {
    "id": 155,
    "part": "endterm",
    "topic": "Spark",
    "inSample": false,
    "inExam": true,
    "sampleNum": null,
    "moodleNum": 46,
    "originBadge": "My Endterm Q46 (Exam Only)",
    "userExamAttempt": {
      "exam": "Endterm",
      "qNum": 46,
      "selectedText": "count()",
      "isCorrect": true
    },
    "question": "Which operation is an action rather than a transformation?",
    "options": [
      {
        "id": "A",
        "text": "count()"
      },
      {
        "id": "B",
        "text": "map(f)"
      },
      {
        "id": "C",
        "text": "distinct()"
      },
      {
        "id": "D",
        "text": "filter(f)"
      },
      {
        "id": "E",
        "text": "flatMap(f)"
      }
    ],
    "correctOptionId": "A",
    "correctAnswerText": "count()",
    "explanation": "map(), filter(), flatMap(), and distinct() are lazy transformations that return a new RDD. count() is an action that triggers execution of the DAG and returns an integer count to the driver."
  },
  {
    "id": 156,
    "part": "endterm",
    "topic": "Spark",
    "inSample": false,
    "inExam": true,
    "sampleNum": null,
    "moodleNum": 50,
    "originBadge": "My Endterm Q50 (Exam Only)",
    "userExamAttempt": {
      "exam": "Endterm",
      "qNum": 50,
      "selectedText": "take(5)",
      "isCorrect": true
    },
    "question": "You want to inspect only the first five records of a large RDD. Which action is most direct?",
    "options": [
      {
        "id": "A",
        "text": "reduce(addition)"
      },
      {
        "id": "B",
        "text": "collect()"
      },
      {
        "id": "C",
        "text": "take(5)"
      },
      {
        "id": "D",
        "text": "countByKey()"
      },
      {
        "id": "E",
        "text": "count()"
      }
    ],
    "correctOptionId": "C",
    "correctAnswerText": "take(5)",
    "explanation": "take(5) is an action that retrieves only the first 5 records to the driver (stopping once 5 elements are collected), avoiding the memory hazard of collect() which pulls the entire RDD."
  }
];

const QUESTION_POOLS = {
  all: {
    id: 'all',
    name: '🌟 All Final Questions (156)',
    badge: 'Full Deduplicated Bank',
    description: 'All 156 unique questions across Midterm & Endterm (44 overlapping duplicates merged)',
    questions: FINAL_QUESTIONS
  },
  midterm: {
    id: 'midterm',
    name: '📘 Midterm All (78)',
    badge: 'Midterm Pool',
    description: '50 Midterm Sample questions + 28 additional questions from your Moodle Midterm',
    questions: FINAL_QUESTIONS.filter(q => q.part === 'midterm')
  },
  endterm: {
    id: 'endterm',
    name: '📙 Endterm All (78)',
    badge: 'Endterm Pool',
    description: '50 Endterm Sample questions + 28 additional questions from your Moodle Endterm',
    questions: FINAL_QUESTIONS.filter(q => q.part === 'endterm')
  },
  exam_only: {
    id: 'exam_only',
    name: '🔥 Exam-Only Unseen (56)',
    badge: 'Real Exam Exclusives',
    description: '56 questions that appeared on your real Moodle Midterm/Endterm but were NOT in the sample PDFs',
    questions: FINAL_QUESTIONS.filter(q => q.inExam && !q.inSample)
  },
  mistakes: {
    id: 'mistakes',
    name: '❌ My Past Mistakes (36)',
    badge: 'Review Weak Spots',
    description: '15 missed questions from your Midterm + 21 missed questions from your Endterm',
    questions: FINAL_QUESTIONS.filter(q => q.userExamAttempt && !q.userExamAttempt.isCorrect)
  },
  samples: {
    id: 'samples',
    name: '🏛️ Official Samples (100)',
    badge: 'Lecturer Sample PDFs',
    description: '50 Midterm Sample + 50 Endterm Sample questions (~50% of real exam pool)',
    questions: FINAL_QUESTIONS.filter(q => q.inSample)
  }
};

const QUESTIONS_DATA = FINAL_QUESTIONS;
