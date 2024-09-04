export interface ICertificate {
  id?: number;
  sponsor: string;
  title: string;
  awarding_date: Date;
  logo_uri?: string;
  proof_uri?: string;
}

export interface IEducation {
  id?: number;
  school: string;
  programme: string;
  location: {
    state: string;
    country: string;
  };
  duration: {
    startDate: Date | "expected";
    endDate: Date;
  };
  school_logo_uri?: string;
}

export interface IExperience {
  id?: number;
  company: string;
  location: {
    state: string;
    country: string;
  };
  title: string;
  duration: {
    startDate: Date;
    endDate: Date | "present";
  };
  achievements: string[];
  company_logo_uri?: string;
}

export interface IContextualContent {
  render_order: number;
  type: "image" | "code";
  image_uri?: string;
  code_content?: string;
  explanation?: string;
}

export interface ISolution {
  explanation: string;
  context: IContextualContent[];
}

export interface IDecision {
  title: string;
  problem: {
    title: string;
    content: {
      intro: string;
      key_points: string[];
      closing: string;
    };
  };
  solution: ISolution[];
}

export interface IProject {
  id?: number;
  project_name: string;
  project_date: string;
  project_uri: string;
  decisions: IDecision[];
}

export interface IAccolade {
  id?: number;
  name: string;
  accolade: string;
  date_received: Date;
  source_platform_logo?: string;
  source_uri?: string;
}
