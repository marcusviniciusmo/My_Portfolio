const knowledges = [
  {
    description: 'React',
  },
  {
    description: 'TypeScript',
  },
  {
    description: 'CSS',
  },
  {
    description: 'JavaScript',
  },
  {
    description: 'HTML',
  },
  {
    description: 'C#',
  },
  {
    description: 'React Native',
  },
  {
    description: 'SQL Server',
  },
  {
    description: 'Scrum',
  },
  {
    description: 'Kanban',
  },
  {
    description: 'VS Code',
  },
  {
    description: 'Visual Studio',
  },
  {
    description: 'Android Studio',
  },
];

export function GetKnowledgesByUserToInsert(userId: string) {
  const knwoledgesByUserToInsert = knowledges.map(knowledge => ({
    ...knowledge,
    user_ID: userId,
  }));

  return knwoledgesByUserToInsert;
}
