export interface Topic {
  slug: string;
  title: string;
  content: string;
}

export const TOPICS: Topic[] = [
  {
    slug: 'what-is-intelligence',
    title: 'What is Intelligence?',
    content: `
      <p>Intelligence can be broadly defined as the ability to acquire and apply knowledge and skills. In the context of AI, it refers to an agent’s capacity to perceive its environment, reason, learn from experience, and make decisions.</p>
      <p>There are many forms of intelligence—human, animal, collective, and artificial. While humans show general intelligence across many domains, AI typically demonstrates narrow intelligence, excelling at specific tasks.</p>
      <p>In reinforcement learning, intelligence is often demonstrated through an agent’s improvement over time via feedback (rewards). This is different from simply being pre-programmed to perform well in a task.</p>
      <ul>
        <li><strong>Reactive vs. Proactive Behavior</strong></li>
        <li><strong>Predefined vs. Learned Knowledge</strong></li>
        <li><strong>Adaptability to New Situations</strong></li>
      </ul>
      <p>Ultimately, artificial intelligence seeks to replicate (and sometimes surpass) aspects of human problem-solving, learning, and adaptation, though it remains fundamentally different in how it operates.</p>
    `
  },
  {
    slug: 'purpose-of-ai',
    title: 'The Purpose of AI in Society',
    content: `
      <p>Discover how AI is shaping productivity, creativity, ethics, and human interaction in modern life. Artificial intelligence is transforming nearly every aspect of society—from how we work and communicate to how decisions are made at large scale.</p>
      <p>AI tools are used in medicine, education, finance, manufacturing, and even the arts. While these advancements offer huge potential, they also raise important questions about trust, accountability, and the future of human-AI collaboration.</p>
      <p>Understanding the purpose and limits of AI is key to developing systems that align with our values and enhance human capabilities.</p>
    `
  },
  {
    slug: 'reinforcement-learning',
    title: 'How Reinforcement Learning Works',
    content: `
      <p>Reinforcement learning (RL) is a type of machine learning where an agent learns by interacting with an environment. The agent receives feedback in the form of rewards or penalties based on the actions it takes.</p>
      <p>Unlike supervised learning, RL does not require labeled datasets. Instead, the agent explores different strategies and gradually improves its policy through trial and error.</p>
      <ul>
        <li><strong>States</strong> – the situation the agent is in</li>
        <li><strong>Actions</strong> – choices available to the agent</li>
        <li><strong>Rewards</strong> – feedback indicating how good or bad an action was</li>
        <li><strong>Policy</strong> – a strategy mapping states to actions</li>
        <li><strong>Q-values</strong> – estimates of expected future rewards</li>
      </ul>
      <p>Over time, a well-trained RL agent converges toward an optimal policy that maximizes cumulative rewards across many episodes of experience.</p>
    `
  },
  {
    slug: 'game-strategy-vs-ai',
    title: 'Game Strategies vs. AI Learning',
    content: `
      <p>Human players often rely on known strategies and heuristics when playing games — like controlling the center in chess or choosing corners in Tic-Tac-Toe.</p>
      <p>AI agents, on the other hand, can discover effective strategies through reinforcement learning without being explicitly taught. These strategies can be similar to human tactics or sometimes even surprising and novel.</p>
      <p>This comparison is crucial in education — showing that intelligent behavior doesn’t have to be hand-coded, but can emerge from interaction and adaptation.</p>
    `
  },
  {
    slug: 'heuristics-vs-emergent',
    title: 'Heuristics vs. Emergent Behavior',
    content: `
      <p>Heuristics are simple, predefined rules or guidelines that help humans and machines make decisions quickly — for example, “if the path is blocked, turn right.”</p>
      <p>Emergent behavior, in contrast, arises from the learning process itself. Rather than following explicit rules, an AI agent develops its own patterns of behavior by interacting with the environment and receiving feedback.</p>
      <p>In many cases, emergent behavior surpasses hand-coded logic, especially in complex or dynamic environments.</p>
    `
  },
  {
    slug: 'visualization-techniques',
    title: 'Visualization Techniques in Education',
    content: `
      <p>Visual tools can dramatically improve how people understand complex ideas — especially in fields like artificial intelligence and reinforcement learning.</p>
      <p>Techniques such as heatmaps, directional arrows, overlays, and animated transitions help learners see how an agent behaves, where decisions are made, and what strategies are evolving over time.</p>
      <p>Effective visualizations bridge the gap between abstract concepts and intuitive understanding, making education more engaging and accessible.</p>
    `
  },
  {
    slug: 'state-space-and-generalization',
    title: 'State Space and Generalization in AI',
    content: `
      <p>The state space of a system refers to the set of all possible situations or configurations it can be in. In games like Tic-Tac-Toe, the state space is the collection of every possible board position.</p>
      <p>Generalization refers to an agent's ability to apply learned behavior to unseen states or similar environments. For instance, an agent trained on a 3x3 maze might struggle in a 5x5 maze unless it has learned general principles rather than memorized paths.</p>
      <p>Understanding state space and generalization helps us design smarter AI that can adapt to complexity and scale.</p>
    `
  },
  {
    slug: 'ai-vs-human-creativity',
    title: 'AI Creativity vs. Human Creativity',
    content: `
      <p>Can machines be creative? That question sparks debates in philosophy, art, and technology. While AI can generate art, music, and text that appear creative, it's based on patterns learned from data — not from inspiration or emotion.</p>
      <p>Human creativity often involves intuition, ambiguity, risk-taking, and deep meaning. AI, in contrast, mixes and matches what it has seen, excelling at novel combinations but lacking true understanding.</p>
      <p>Still, AI-assisted creativity is a powerful tool. Artists, writers, and scientists can use AI to explore ideas faster and uncover patterns they might miss.</p>
      <p>Rather than asking whether AI can be <em>as</em> creative as humans, we might ask how it can <em>enhance</em> our own creativity.</p>
    `
  }
];