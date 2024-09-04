import {
  IAccolade,
  ICertificate,
  IEducation,
  IExperience,
  IProject,
} from "@/types";
import Dexie, { Table } from "dexie";
export class OlaidrisDB extends Dexie {
  certifications!: Table<ICertificate>;
  educations!: Table<IEducation>;
  experiences!: Table<IExperience>;
  projects!: Table<IProject>;
  accolades!: Table<IAccolade>;

  constructor() {
    super("OlaIdrisDB");
    this.version(1).stores({
      certifications:
        "++id, sponsor, title, awarding_date, logo_uri, proof_uri",
      educations:
        "++id, school, programme, [location.state+location.country], [duration.startDate+duration.endDate], school_logo_uri",
      experiences:
        "++id, company, [location.state+location.country], title, [duration.startDate+duration.endDate], achievements, company_logo_uri",
      projects: "++id, project_name, project_date, project_uri, decisions",
      accolades:
        "++id, name, accolade, date_received, source_platform_logo, source_uri",
    });
  }
}

export const LocalDB = new OlaidrisDB();
