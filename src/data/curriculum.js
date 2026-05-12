export const curriculumModules = [
  {
    id: "psychology",
    title: "Psychological Foundations",
    lessonCount: 24,
    summary:
      "An empirical study of cognition, emotion, habit, personality, and mental models. The module gives learners the scientific vocabulary needed to understand how people process information, form identities, regulate behaviour, and make predictable errors in judgement.",
    objective:
      "Understand the mechanics of the human mind and use behavioural science to improve critical thinking, emotional regulation, and practical self-awareness.",
    sections: [
      {
        title: "Cognitive biases and heuristics",
        points: [
          "Heuristics as fast mental shortcuts that reduce processing time but create systematic error.",
          "Research-method biases: sampling bias, demand characteristics, investigator effects, social sensitivity, gender bias, cultural bias, androcentrism, ethnocentrism, alpha bias, and beta bias.",
          "Memory distortion through leading questions, post-event discussion, anxiety, and reconstructive eyewitness testimony.",
          "Forensic distortions including hostile attribution bias and minimalisation as explanations for offending behaviour."
        ]
      },
      {
        title: "Habit, emotion, and behavioural change",
        points: [
          "Classical conditioning, operant conditioning, social learning theory, imitation, identification, mediational processes, and vicarious reinforcement.",
          "Stable-context habits reduce cognitive load, while nonhabitual behaviour in novel contexts requires continuous oversight and increases stress.",
          "Behavioural modification through token economies, anger management, environmental design, and emotional learning.",
          "Emotion as a motivational and biological system linked to the limbic system, bodily awareness, and long-term habit change."
        ]
      },
      {
        title: "Personality paradigms",
        points: [
          "Psychodynamic theory: Id, Ego, Superego, unconscious conflict, defence mechanisms, and psychosexual development.",
          "Humanistic theory: self-actualisation, congruence, ideal self, perceived self, and Maslow's hierarchy of needs.",
          "Biological and trait approaches including Eysenck's dimensions of extraversion, neuroticism, and psychoticism.",
          "Authoritarian Personality as a dispositional explanation for obedience, intolerance of ambiguity, and submission to authority."
        ]
      },
      {
        title: "Mental models",
        points: [
          "The Map is Not the Territory, Circle of Competence, First Principles Thinking, Second-Order Thinking, Inversion, Hanlon's Razor, Occam's Razor, and Probabilistic Thinking.",
          "Mental models help learners compress complexity, bypass cognitive bias, and make better decisions under uncertainty."
        ]
      }
    ]
  },
  {
    id: "philosophy",
    title: "Philosophical Inquiry",
    lessonCount: 31,
    summary:
      "A rigorous introduction to epistemology, logic, ethics, metaphysics, Hellenistic practical philosophy, and existentialism. The module trains learners to analyse concepts, evaluate arguments, and interrogate reality, knowledge, morality, identity, and meaning.",
    objective:
      "Develop normative, metaphysical, and logical reasoning so learners can examine what is true, what is good, and how one ought to live.",
    sections: [
      {
        title: "Epistemology and knowledge",
        points: [
          "Justified True Belief, Gettier cases, infallibilism, no false lemmas, reliabilism, and virtue epistemology.",
          "Direct realism, indirect realism, idealism, illusion, hallucination, perceptual variation, the time-lag argument, Locke's primary and secondary qualities, Berkeley's Master Argument, and the veil of perception.",
          "Local and global scepticism, Descartes' three waves of doubt, the Evil Demon hypothesis, and responses from empiricism, rationalism, and reliabilism."
        ]
      },
      {
        title: "Logic and argumentation",
        points: [
          "Deductive validity, soundness, categorical propositions, symbolic translation, truth tables, and formal proofs.",
          "Informal fallacies of relevance, ambiguity, and false causality, with emphasis on exposing hidden premises in everyday discourse."
        ]
      },
      {
        title: "Moral philosophy and metaethics",
        points: [
          "Utilitarianism: Bentham, Mill, act utilitarianism, rule utilitarianism, utility calculation, higher and lower pleasures, and major critiques.",
          "Kantian deontology: good will, duty, the Categorical Imperative, universalisation, contradiction in conception, contradiction in will, and humanity as an end in itself.",
          "Aristotelian virtue ethics: eudaimonia, function argument, doctrine of the mean, skill analogy, and phronesis.",
          "Metaethics: moral realism, ethical naturalism, ethical non-naturalism, Moore's Open Question Argument, Mackie's Error Theory, queerness, emotivism, Hume, and the is-ought gap."
        ]
      },
      {
        title: "Ancient schools and existentialism",
        points: [
          "Cynicism, Stoicism, Epicureanism, and Skepticism as therapeutic philosophies aimed at freedom, tranquillity, resilience, moderation, and intellectual humility.",
          "Kierkegaard, Nietzsche, Sartre, Camus, de Beauvoir, Du Bois, and Fanon on subjectivity, nihilism, bad faith, absurdity, oppression, otherness, and self-authorship."
        ]
      }
    ]
  },
  {
    id: "reflection",
    title: "Reflection Practice",
    lessonCount: 14,
    summary:
      "A structured metacognitive practice that converts psychological and philosophical theory into daily self-understanding. Learners use critical reflection, guided journaling, and thought experiments to examine their assumptions, emotions, values, and future behaviour.",
    objective:
      "Bridge theory and action through disciplined reflection, helping learners stress-test their beliefs and develop practical self-authorship.",
    sections: [
      {
        title: "Critical reflection architecture",
        points: [
          "Schön's reflection-in-action and reflection-on-action as two forms of reflective awareness.",
          "DEAL model: Describe the event objectively, Examine it through academic concepts, and Articulate Learning into future behaviour.",
          "The practical sequence: What happened? So what does it mean? Now what will change?"
        ]
      },
      {
        title: "Guided journaling and self-inquiry",
        points: [
          "Perspective-shifting journaling to reduce attribution error and reveal alternative interpretations.",
          "Backward-looking prompts for process analysis, inward-looking prompts for metacognition and emotional regulation, and future-looking prompts for action planning.",
          "Daily reflection as a measurable discipline rather than unstructured rumination."
        ]
      },
      {
        title: "Thought experiments as reflective simulators",
        points: [
          "Identity and metaphysics: Ship of Theseus, Swampman, Parfit's Split-Brain, and the Sorites Paradox.",
          "Morality and justice: Trolley Problem, Utility Monster, Veil of Ignorance, Prisoner's Dilemma, and Experience Machine.",
          "Epistemology and mind: Allegory of the Cave, Chinese Room, Mary's Room, Buridan's Ass, Omnipotence Paradox, and Problem of Evil."
        ]
      }
    ]
  }
];

export const mentalModels = [
  { name: "The Map is Not the Territory", origin: "Semantics / Psychology", use: "Distinguish simplified representations from complex reality." },
  { name: "Circle of Competence", origin: "Economics / Strategy", use: "Make decisions inside areas of genuine expertise and name areas of ignorance." },
  { name: "First Principles Thinking", origin: "Physics / Philosophy", use: "Break problems down into fundamental truths and rebuild from there." },
  { name: "Second-Order Thinking", origin: "Systems Theory", use: "Ask what consequences follow after the immediate consequence." },
  { name: "Inversion", origin: "Mathematics / Logic", use: "Identify what would guarantee failure, then design against it." },
  { name: "Hanlon's Razor", origin: "Logic / Psychology", use: "Avoid attributing to malice what may be explained by error or incompetence." },
  { name: "Occam's Razor", origin: "Philosophy", use: "Prefer the explanation that requires the fewest assumptions when predictions are equal." },
  { name: "Probabilistic Thinking", origin: "Statistics / Mathematics", use: "Update beliefs as evidence changes and avoid false certainty." }
];

export const thoughtExperiments = [
  { name: "The Ship of Theseus", category: "Identity", prompt: "If every part of you changes over time, what makes you still you?" },
  { name: "The Trolley Problem", category: "Morality", prompt: "Do outcomes justify actively causing harm, or are some actions prohibited regardless of result?" },
  { name: "The Veil of Ignorance", category: "Justice", prompt: "What rules would you choose if you did not know your future position in society?" },
  { name: "The Experience Machine", category: "Meaning", prompt: "Is a perfect simulation of happiness enough, or does contact with reality matter?" },
  { name: "Allegory of the Cave", category: "Knowledge", prompt: "Which of your certainties might be shadows of a deeper reality?" },
  { name: "Mary's Room", category: "Mind", prompt: "Can objective facts fully explain subjective experience?" },
  { name: "Chinese Room", category: "Mind", prompt: "Is processing information the same as understanding?" },
  { name: "Problem of Evil", category: "Metaphysics", prompt: "How should suffering change your view of justice, meaning, or divinity?" }
];

export const reflectionPrompts = [
  "Describe one event today without interpretation. What actually happened?",
  "Which psychological concept best explains your reaction?",
  "Which ethical framework would judge your action most harshly, and why?",
  "What belief did this event reveal?",
  "What would change tomorrow if you acted from practical wisdom rather than impulse?"
];
