const comments = [
  // Story 1: Rust retrospective
  { id: 1, storyId: 1, parentId: null, author: 'tptacek', text: 'The real story here is not that Rust is popular, but that C++ is finally losing mindshare in systems programming. The safety guarantees are just too compelling to ignore at scale.', createdAt: '2026-03-07T19:00:00Z' },
  { id: 2, storyId: 1, parentId: 1, author: 'rust_evangelist', text: 'Exactly. And the ecosystem maturity is what sealed it. Cargo is leagues ahead of CMake, and the crate ecosystem covers almost everything you need now.', createdAt: '2026-03-07T19:30:00Z' },
  { id: 3, storyId: 1, parentId: 2, author: 'kernelhacker', text: 'I still think the learning curve is understated. The borrow checker is great once you understand it, but it took me months to stop fighting it.', createdAt: '2026-03-07T20:00:00Z' },
  { id: 4, storyId: 1, parentId: 3, author: 'rust_evangelist', text: 'Fair point. But I\'d argue the compiler errors are actually teaching you to write better code. Compare that to segfaults in C at 3am.', createdAt: '2026-03-07T20:30:00Z' },
  { id: 5, storyId: 1, parentId: 1, author: 'old_timer', text: 'I remember when people said the same things about Java replacing C++. Let\'s see where we are in another 10 years.', createdAt: '2026-03-07T19:45:00Z' },
  { id: 6, storyId: 1, parentId: null, author: 'academic_cs', text: 'The adoption in embedded systems is particularly interesting. Rust on microcontrollers was a pipe dream 5 years ago.', createdAt: '2026-03-07T20:15:00Z' },
  { id: 7, storyId: 1, parentId: 6, author: 'kernelhacker', text: 'Embassy and the HAL crates have matured so much. I\'m running Rust on STM32 boards in production now.', createdAt: '2026-03-07T21:00:00Z' },

  // Story 3: Ask HN weekend projects
  { id: 8, storyId: 3, parentId: null, author: 'webdev_sarah', text: 'Building a recipe manager app with React and IndexedDB. Trying to make something that works completely offline.', createdAt: '2026-03-07T12:30:00Z' },
  { id: 9, storyId: 3, parentId: null, author: 'kernelhacker', text: 'Contributing to the Linux kernel. There\'s a scheduler patch I\'ve been meaning to submit for weeks.', createdAt: '2026-03-07T13:00:00Z' },
  { id: 10, storyId: 3, parentId: 8, author: 'throwaway_dev', text: 'That sounds cool! Are you using any particular pattern for the offline sync?', createdAt: '2026-03-07T13:15:00Z' },
  { id: 11, storyId: 3, parentId: 10, author: 'webdev_sarah', text: 'CRDTs! Well, trying to. It\'s harder than the blog posts make it look.', createdAt: '2026-03-07T13:45:00Z' },
  { id: 12, storyId: 3, parentId: 11, author: 'academic_cs', text: 'Check out Yjs. It handles the CRDT complexity for you and has React bindings.', createdAt: '2026-03-07T14:00:00Z' },
  { id: 13, storyId: 3, parentId: 12, author: 'webdev_sarah', text: 'Oh nice, I\'ll look into that. Thanks!', createdAt: '2026-03-07T14:15:00Z' },

  // Story 4: Show HN terminal reader
  { id: 14, storyId: 4, parentId: null, author: 'old_timer', text: 'This is great! I\'ve been wanting something exactly like this. The vim keybindings are a nice touch.', createdAt: '2026-03-07T09:30:00Z' },
  { id: 15, storyId: 4, parentId: null, author: 'rust_evangelist', text: 'Why Go and not Rust? Bubble Tea is nice but there are comparable TUI frameworks in Rust.', createdAt: '2026-03-07T10:00:00Z' },
  { id: 16, storyId: 4, parentId: 15, author: 'kernelhacker', text: 'Because Go compiles fast and the binary is easy to distribute. Not everything needs to be in Rust.', createdAt: '2026-03-07T10:30:00Z' },
  { id: 17, storyId: 4, parentId: 16, author: 'rust_evangelist', text: 'Fair enough. I still would have chosen Rust, but I respect the pragmatic choice.', createdAt: '2026-03-07T11:00:00Z' },
  { id: 18, storyId: 4, parentId: 17, author: 'kernelhacker', text: 'The Rust community needs to learn that not every conversation needs to be about Rust. 😄', createdAt: '2026-03-07T11:30:00Z' },

  // Story 5: 10x developer myth
  { id: 19, storyId: 5, parentId: null, author: 'patio11', text: 'I wrote this because I keep seeing the "10x developer" framing used to justify toxic work cultures. The data tells a different story.', createdAt: '2026-03-07T06:30:00Z' },
  { id: 20, storyId: 5, parentId: 19, author: 'tptacek', text: 'Strong agree. The "10x" framing ignores that productivity differences are usually about environment, not individual talent.', createdAt: '2026-03-07T07:00:00Z' },
  { id: 21, storyId: 5, parentId: 20, author: 'jacquesm', text: 'I\'ve seen "10x" developers who were really just "10x cost to maintain" developers. The code they left behind took years to untangle.', createdAt: '2026-03-07T07:30:00Z' },
  { id: 22, storyId: 5, parentId: 21, author: 'webdev_sarah', text: 'This resonates. At my last job, the "rockstar" dev wrote code only they could understand. When they left, three of us spent months rewriting it.', createdAt: '2026-03-07T08:00:00Z' },
  { id: 23, storyId: 5, parentId: 22, author: 'patio11', text: 'That\'s a perfect example of what I mean. Individual output ≠ team productivity.', createdAt: '2026-03-07T08:30:00Z' },
  { id: 24, storyId: 5, parentId: null, author: 'startup_founder', text: 'Counter-argument: I\'ve hired both "average" and exceptional developers. The difference in output is real and measurable.', createdAt: '2026-03-07T07:15:00Z' },
  { id: 25, storyId: 5, parentId: 24, author: 'patio11', text: 'I don\'t deny variance exists. The myth is that it\'s 10x, and that it\'s an innate trait rather than context-dependent.', createdAt: '2026-03-07T07:45:00Z' },

  // Story 8: Burnout
  { id: 26, storyId: 8, parentId: null, author: 'old_timer', text: 'I hit burnout hard around year 8. What helped: I took 3 months off and worked on a woodworking project. Coming back to code after building something physical was transformative.', createdAt: '2026-03-06T18:30:00Z' },
  { id: 27, storyId: 8, parentId: 26, author: 'webdev_sarah', text: 'Thanks for sharing this. I can\'t afford 3 months off, but the idea of a physical hobby is interesting. Maybe I\'ll try pottery.', createdAt: '2026-03-06T19:00:00Z' },
  { id: 28, storyId: 8, parentId: null, author: 'patio11', text: 'Burnout is almost never about the work itself. It\'s about autonomy, recognition, and meaning. If you\'re burned out, look at those three things first.', createdAt: '2026-03-06T18:45:00Z' },
  { id: 29, storyId: 8, parentId: 28, author: 'throwaway_dev', text: 'This is insightful. I realized I was burned out because I had zero say in what I was building. Switched teams and felt renewed.', createdAt: '2026-03-06T19:15:00Z' },
  { id: 30, storyId: 8, parentId: 29, author: 'patio11', text: 'Autonomy is huge. The research on self-determination theory backs this up strongly.', createdAt: '2026-03-06T19:45:00Z' },

  // Story 9: PostgreSQL 18
  { id: 31, storyId: 9, parentId: null, author: 'sysadmin_jane', text: 'The native vector search is a game-changer. No more maintaining a separate Pinecone/Milvus instance just for embeddings.', createdAt: '2026-03-06T14:30:00Z' },
  { id: 32, storyId: 9, parentId: 31, author: 'ml_researcher', text: 'The performance benchmarks look good for small-to-medium datasets. For billion-scale vectors, you\'ll still want dedicated solutions.', createdAt: '2026-03-06T15:00:00Z' },
  { id: 33, storyId: 9, parentId: 32, author: 'sysadmin_jane', text: 'Sure, but 99% of companies don\'t have billion-scale vectors. They have thousands. Postgres is more than enough.', createdAt: '2026-03-06T15:30:00Z' },
  { id: 34, storyId: 9, parentId: null, author: 'academic_cs', text: 'The HNSW index implementation looks solid. Nice to see they learned from pgvector\'s mistakes.', createdAt: '2026-03-06T15:15:00Z' },

  // Story 10: Figma alternative
  { id: 35, storyId: 10, parentId: null, author: 'design_matters', text: 'We\'ve been working on this full-time for 2 years. AMA about the architecture or design decisions!', createdAt: '2026-03-06T10:30:00Z' },
  { id: 36, storyId: 10, parentId: 35, author: 'webdev_sarah', text: 'How does the real-time collaboration work? CRDT-based?', createdAt: '2026-03-06T11:00:00Z' },
  { id: 37, storyId: 10, parentId: 36, author: 'design_matters', text: 'Yes! We use a custom CRDT implementation optimized for vector graphics operations. Each shape mutation is a CRDT operation.', createdAt: '2026-03-06T11:30:00Z' },
  { id: 38, storyId: 10, parentId: 37, author: 'academic_cs', text: 'That\'s fascinating. Is the CRDT layer open-source separately? I\'d love to study the implementation.', createdAt: '2026-03-06T12:00:00Z' },
  { id: 39, storyId: 10, parentId: 38, author: 'design_matters', text: 'Planning to extract it into a separate crate soon. Will post a Show HN when it\'s ready.', createdAt: '2026-03-06T12:30:00Z' },
  { id: 40, storyId: 10, parentId: null, author: 'rust_evangelist', text: 'WebGPU + Rust is such a powerful combination. The performance must be incredible.', createdAt: '2026-03-06T11:15:00Z' },
  { id: 41, storyId: 10, parentId: 40, author: 'design_matters', text: '144fps on a MacBook Pro with 1000+ shapes on canvas. The GPU does the heavy lifting.', createdAt: '2026-03-06T11:45:00Z' },

  // Story 13: AI destroying junior careers
  { id: 42, storyId: 13, parentId: null, author: 'patio11', text: 'The headline is inflammatory but the underlying concern is real. Junior dev roles are being redefined, not eliminated.', createdAt: '2026-03-05T22:30:00Z' },
  { id: 43, storyId: 13, parentId: 42, author: 'webdev_sarah', text: 'As someone who started as a junior 6 years ago, I\'m not sure I would have gotten my foot in the door today. The bar has shifted.', createdAt: '2026-03-05T23:00:00Z' },
  { id: 44, storyId: 13, parentId: 43, author: 'startup_founder', text: 'We still hire juniors. But now we expect them to be able to work WITH AI tools effectively. It\'s a different skill set.', createdAt: '2026-03-05T23:30:00Z' },
  { id: 45, storyId: 13, parentId: 44, author: 'crypto_skeptic', text: '"Work with AI tools" = "accept that your employer values you less than a $20/month subscription." Cool.', createdAt: '2026-03-06T00:00:00Z' },
  { id: 46, storyId: 13, parentId: 45, author: 'tptacek', text: 'This is needlessly cynical. Tools amplify people. The calculator didn\'t eliminate accountants.', createdAt: '2026-03-06T00:30:00Z' },
  { id: 47, storyId: 13, parentId: 46, author: 'crypto_skeptic', text: 'It didn\'t eliminate accountants, but it absolutely eliminated a huge class of bookkeeping jobs. That\'s the analogy.', createdAt: '2026-03-06T01:00:00Z' },

  // Story 20: How LLMs work
  { id: 48, storyId: 20, parentId: null, author: 'ml_researcher', text: 'This is the best visual explanation I\'ve seen. The attention mechanism diagrams finally clicked for me.', createdAt: '2026-03-04T18:30:00Z' },
  { id: 49, storyId: 20, parentId: 48, author: 'academic_cs', text: 'Agreed. I\'m going to use this in my ML course next semester. Way better than the original "Attention is All You Need" diagrams.', createdAt: '2026-03-04T19:00:00Z' },
  { id: 50, storyId: 20, parentId: 49, author: 'throwaway_dev', text: 'As someone with no ML background, I could actually follow this. First time an explanation hasn\'t made me feel stupid.', createdAt: '2026-03-04T19:30:00Z' },
  { id: 51, storyId: 20, parentId: 50, author: 'ml_researcher', text: 'That\'s the goal! ML shouldn\'t be gatekept behind math notation.', createdAt: '2026-03-04T20:00:00Z' },

  // Story 6: Why I left Google
  { id: 52, storyId: 6, parentId: null, author: 'jacquesm', text: 'Every one of these "I left FAANG" posts follows the same arc: golden handcuffs → loss of meaning → departure. The real question is why these companies can\'t fix their culture.', createdAt: '2026-03-06T22:30:00Z' },
  { id: 53, storyId: 6, parentId: 52, author: 'old_timer', text: 'They can\'t fix it because the incentive structure rewards short-term metrics over meaningful work. That\'s by design.', createdAt: '2026-03-06T23:00:00Z' },
  { id: 54, storyId: 6, parentId: 53, author: 'tptacek', text: 'Promo-driven development is real and it\'s one of the most destructive forces in big tech.', createdAt: '2026-03-06T23:30:00Z' },
  { id: 55, storyId: 6, parentId: 54, author: 'startup_founder', text: 'This is why startups win for talent retention (when they can afford to compete on comp). You work on things that matter.', createdAt: '2026-03-07T00:00:00Z' },

  // Story 11: Against microservices
  { id: 56, storyId: 11, parentId: null, author: 'sysadmin_jane', text: 'I\'ve been saying this for years. We migrated to microservices and spent more time on infra than features. Went back to a monolith.', createdAt: '2026-03-06T08:30:00Z' },
  { id: 57, storyId: 11, parentId: 56, author: 'tptacek', text: 'The monolith-to-microservices-back-to-monolith pipeline is one of the most expensive mistakes in our industry.', createdAt: '2026-03-06T09:00:00Z' },
  { id: 58, storyId: 11, parentId: 57, author: 'kernelhacker', text: 'Modular monolith is the answer. Good boundaries without the network overhead.', createdAt: '2026-03-06T09:30:00Z' },

  // Story 15: Plain text
  { id: 59, storyId: 15, parentId: null, author: 'ColinWright', text: 'I\'ve been using plain text files for everything for 20 years. Version controlled, grep-able, and will outlast every app.', createdAt: '2026-03-05T14:30:00Z' },
  { id: 60, storyId: 15, parentId: 59, author: 'old_timer', text: 'Same. My notes from 2003 are still perfectly readable. Can\'t say the same for my old Evernote exports.', createdAt: '2026-03-05T15:00:00Z' },

  // Story 19: Local-first
  { id: 61, storyId: 19, parentId: null, author: 'design_matters', text: 'Local-first is the future. Users should own their data and apps should work offline by default.', createdAt: '2026-03-04T22:30:00Z' },
  { id: 62, storyId: 19, parentId: 61, author: 'startup_founder', text: 'The business model challenge is real though. How do you monetize when data stays on the user\'s device?', createdAt: '2026-03-04T23:00:00Z' },
  { id: 63, storyId: 19, parentId: 62, author: 'jacquesm', text: 'Sell the software, not the data. Novel concept, I know.', createdAt: '2026-03-04T23:30:00Z' },

  // Story 24: Stack Overflow demise
  { id: 64, storyId: 24, parentId: null, author: 'patio11', text: 'The irony is that LLMs were trained on Stack Overflow content. The student has consumed the teacher.', createdAt: '2026-03-04T06:30:00Z' },
  { id: 65, storyId: 24, parentId: 64, author: 'crypto_skeptic', text: 'And the LLMs are worse for it. They confidently hallucinate answers that SO would have downvoted into oblivion.', createdAt: '2026-03-04T07:00:00Z' },
  { id: 66, storyId: 24, parentId: 65, author: 'webdev_sarah', text: 'I still go to SO for niche problems. LLMs are great for common stuff but terrible for edge cases.', createdAt: '2026-03-04T07:30:00Z' },
  { id: 67, storyId: 24, parentId: 66, author: 'old_timer', text: 'The real loss is the community curation. Upvotes/downvotes were a signal of quality that LLMs can\'t replicate.', createdAt: '2026-03-04T08:00:00Z' },

  // Story 32: AWS bill
  { id: 68, storyId: 32, parentId: null, author: 'tptacek', text: 'Let me guess: the "one weird trick" was "actually look at your bill and turn off the stuff nobody uses."', createdAt: '2026-03-02T18:30:00Z' },
  { id: 69, storyId: 32, parentId: 68, author: 'sysadmin_jane', text: 'Close! It was: reserved instances + right-sizing + deleting 47 forgotten dev environments. Shocking how much waste accumulates.', createdAt: '2026-03-02T19:00:00Z' },
  { id: 70, storyId: 32, parentId: 69, author: 'startup_founder', text: 'We found $3,000/month in unused EBS volumes alone. Cloud cost optimization should be a full-time role.', createdAt: '2026-03-02T19:30:00Z' },

  // Story 43: Books that changed thinking
  { id: 71, storyId: 43, parentId: null, author: 'raganwald', text: 'Structure and Interpretation of Computer Programs. It doesn\'t teach you a language — it teaches you how to think about computation.', createdAt: '2026-02-28T22:30:00Z' },
  { id: 72, storyId: 43, parentId: null, author: 'ColinWright', text: 'Gödel, Escher, Bach. Changed how I think about recursion, self-reference, and consciousness.', createdAt: '2026-02-28T23:00:00Z' },
  { id: 73, storyId: 43, parentId: null, author: 'tptacek', text: 'The Design of Everyday Things by Don Norman. Made me realize that software UI problems are design problems, not user problems.', createdAt: '2026-02-28T23:30:00Z' },
  { id: 74, storyId: 43, parentId: 71, author: 'academic_cs', text: 'SICP is the correct answer. I assign it every year and students either love it or hate it. No middle ground.', createdAt: '2026-03-01T00:00:00Z' },
  { id: 75, storyId: 43, parentId: 74, author: 'throwaway_dev', text: 'I tried SICP three times before it clicked. On the fourth read, it rewired my brain. Worth the effort.', createdAt: '2026-03-01T00:30:00Z' },

  // Story 51: Free software
  { id: 76, storyId: 51, parentId: null, author: 'design_matters', text: 'Blender is the obvious answer. It rivals software that costs thousands per year.', createdAt: '2026-02-27T14:30:00Z' },
  { id: 77, storyId: 51, parentId: 76, author: 'webdev_sarah', text: 'VS Code. I know it\'s Microsoft, but a free editor this good with this extension ecosystem? Unreal.', createdAt: '2026-02-27T15:00:00Z' },
  { id: 78, storyId: 51, parentId: null, author: 'kernelhacker', text: 'Linux itself. An entire operating system, maintained by thousands of contributors, powering most of the internet. Free.', createdAt: '2026-02-27T15:30:00Z' },
  { id: 79, storyId: 51, parentId: 78, author: 'old_timer', text: 'And PostgreSQL. A database that competes with Oracle, for free. The Postgres community is incredible.', createdAt: '2026-02-27T16:00:00Z' },

  // Story 54: No Kubernetes
  { id: 80, storyId: 54, parentId: null, author: 'sysadmin_jane', text: 'As someone who runs Kubernetes for a living: agreed. Unless you have multiple teams and dozens of services, K8s is overkill.', createdAt: '2026-02-27T06:30:00Z' },
  { id: 81, storyId: 54, parentId: 80, author: 'startup_founder', text: 'We spent 6 months setting up Kubernetes for 3 services. Docker Compose would have been fine.', createdAt: '2026-02-27T07:00:00Z' },
  { id: 82, storyId: 54, parentId: 81, author: 'tptacek', text: 'I keep saying: a single VPS with systemd can handle more than most startups think. Start simple.', createdAt: '2026-02-27T07:30:00Z' },

  // Additional comments for depth on story 10
  { id: 83, storyId: 10, parentId: 39, author: 'rust_evangelist', text: 'Would love to see the benchmarks against Automerge. Their Rust implementation has been impressive.', createdAt: '2026-03-06T13:00:00Z' },
  { id: 84, storyId: 10, parentId: 83, author: 'design_matters', text: 'We compared against Automerge early on. Our implementation is more specialized (vector ops only) so it\'s faster for our use case but less general-purpose.', createdAt: '2026-03-06T13:30:00Z' },

  // More on story 5 for depth
  { id: 85, storyId: 5, parentId: 25, author: 'old_timer', text: 'The variance is real but it\'s multiplicative with environment. A "10x developer" in a bad codebase with bad tooling becomes a 2x developer.', createdAt: '2026-03-07T08:15:00Z' },
  { id: 86, storyId: 5, parentId: 85, author: 'academic_cs', text: 'There\'s actually research supporting this. Conway and others showed that developer productivity is dominated by the task and environment, not individual ability.', createdAt: '2026-03-07T08:45:00Z' },

  // Story 21: CS degree
  { id: 87, storyId: 21, parentId: null, author: 'academic_cs', text: 'As a CS professor: the degree teaches you fundamentals that age well. Algorithms, data structures, systems thinking. AI tools come and go.', createdAt: '2026-03-04T14:30:00Z' },
  { id: 88, storyId: 21, parentId: 87, author: 'throwaway_dev', text: 'But is 4 years and $100k+ the most efficient way to learn fundamentals? Genuine question.', createdAt: '2026-03-04T15:00:00Z' },
  { id: 89, storyId: 21, parentId: 88, author: 'patio11', text: 'Financially, the degree still has the highest expected ROI in tech. The signaling value alone is worth it for your first job.', createdAt: '2026-03-04T15:30:00Z' },
  { id: 90, storyId: 21, parentId: 89, author: 'crypto_skeptic', text: 'Signaling value is just credentialism by another name. We should be evaluating skills, not diplomas.', createdAt: '2026-03-04T16:00:00Z' },

  // Story 7: Linux scheduler
  { id: 91, storyId: 7, parentId: null, author: 'kernelhacker', text: 'The EEVDF scheduler changes in 6.6+ have been great. This article does a good job explaining the motivation.', createdAt: '2026-03-06T20:30:00Z' },
  { id: 92, storyId: 7, parentId: 91, author: 'academic_cs', text: 'The theoretical foundations are fascinating. EEVDF is basically fair queuing applied to CPU scheduling.', createdAt: '2026-03-06T21:00:00Z' },

  // Story 2: SQLite
  { id: 93, storyId: 2, parentId: null, author: 'luu', text: 'Every smartphone, every browser, most desktop apps — SQLite is everywhere. The testing rigor is what makes it possible.', createdAt: '2026-03-07T16:00:00Z' },
  { id: 94, storyId: 2, parentId: 93, author: 'sysadmin_jane', text: '100% branch coverage with billions of test cases. It\'s the gold standard for software testing.', createdAt: '2026-03-07T16:30:00Z' },
  { id: 95, storyId: 2, parentId: 94, author: 'tptacek', text: 'And it\'s public domain. Not MIT, not Apache — public domain. Richard Hipp is a treasure.', createdAt: '2026-03-07T17:00:00Z' },

  // Story 12: MongoDB to Postgres
  { id: 96, storyId: 12, parentId: null, author: 'sysadmin_jane', text: 'The dual-write strategy was key. We wrote to both databases for 3 months before cutting over. Zero data loss.', createdAt: '2026-03-06T06:30:00Z' },
  { id: 97, storyId: 12, parentId: 96, author: 'tptacek', text: 'Dual-write with reconciliation is the only safe way to do these migrations. Good engineering.', createdAt: '2026-03-06T07:00:00Z' },

  // Story 17: 50 years of programming
  { id: 98, storyId: 17, parentId: null, author: 'old_timer', text: 'Beautiful essay. The observation that programming languages change but programming challenges don\'t really resonated.', createdAt: '2026-03-05T08:30:00Z' },
  { id: 99, storyId: 17, parentId: 98, author: 'ColinWright', text: 'Thank you. I tried to capture what stays constant amid all the change. The fundamentals of clarity, correctness, and communication.', createdAt: '2026-03-05T09:00:00Z' },

  // Story 40: DNS
  { id: 100, storyId: 40, parentId: null, author: 'sysadmin_jane', text: 'I always say: "It\'s always DNS." This article explains why that\'s true.', createdAt: '2026-03-01T10:30:00Z' },
  { id: 101, storyId: 40, parentId: 100, author: 'kernelhacker', text: 'The caching layers alone make DNS one of the most complex distributed systems in existence.', createdAt: '2026-03-01T11:00:00Z' },

  // Additional for story 8 (burnout) - more depth
  { id: 102, storyId: 8, parentId: 27, author: 'design_matters', text: 'Pottery is amazing for burnout recovery. Something about working with your hands and making physical objects.', createdAt: '2026-03-06T19:30:00Z' },
  { id: 103, storyId: 8, parentId: 102, author: 'webdev_sarah', text: 'Just signed up for a pottery class. Here goes nothing!', createdAt: '2026-03-06T20:00:00Z' },

  // Story 16: Privacy analytics
  { id: 104, storyId: 16, parentId: null, author: 'crypto_skeptic', text: 'Finally! Analytics that don\'t require selling your users\' data to Google. This is how it should work.', createdAt: '2026-03-05T10:30:00Z' },
  { id: 105, storyId: 16, parentId: 104, author: 'startup_founder', text: 'The Web Worker approach is clever. No impact on main thread performance.', createdAt: '2026-03-05T11:00:00Z' },

  // Story 22: NAND gates
  { id: 106, storyId: 22, parentId: null, author: 'academic_cs', text: 'nand2tetris is the course that made me fall in love with computer science. The 2026 edition adds RISC-V support.', createdAt: '2026-03-04T10:30:00Z' },
  { id: 107, storyId: 22, parentId: 106, author: 'kernelhacker', text: 'Building a CPU from scratch gives you an appreciation for every abstraction layer above it.', createdAt: '2026-03-04T11:00:00Z' },

  // Story 23: Git explain
  { id: 108, storyId: 23, parentId: null, author: 'throwaway_dev', text: 'I\'ve been using this for a week and I finally understand what git rebase actually does.', createdAt: '2026-03-04T08:30:00Z' },
  { id: 109, storyId: 23, parentId: 108, author: 'webdev_sarah', text: 'I built this because I was tired of googling "git undo last commit" for the 400th time.', createdAt: '2026-03-04T09:00:00Z' },
  { id: 110, storyId: 23, parentId: 109, author: 'old_timer', text: 'Git\'s CLI is one of the worst UIs in computing history. This tool is a band-aid on a fundamental design problem.', createdAt: '2026-03-04T09:30:00Z' },
  { id: 111, storyId: 23, parentId: 110, author: 'webdev_sarah', text: 'Agreed on the UX problem. But sometimes a good band-aid is all you need. 🩹', createdAt: '2026-03-04T10:00:00Z' },
];

export default comments;
