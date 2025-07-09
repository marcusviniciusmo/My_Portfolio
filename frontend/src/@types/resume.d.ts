interface ResumeCard {
  id: string;
  period: {
    start: Date;
    end: Date;
  };
  title: string;
  institution: string;
}

export interface EducationType {
  id: string;
  periodStart: Date;
  periodEnd: Date;
  title: string;
  institution: string;
}

export interface ExperienceType extends ResumeCard {}

export interface WorkingSkillType {
  id: string;
  description: string;
  percentage: number;
}

export interface KnowledgeType {
  id: string;
  description: string;
}

export interface ResumeCardProps {
  borderColor: string;
}

export interface WorkingSkillProps {
  percentage: number;
}
