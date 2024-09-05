import {
  IAccolade,
  ICertificate,
  IEducation,
  IExperience,
  IProject,
  IUpload,
} from "@/types";
import Dexie, { Table } from "dexie";

// Define the OlaidrisDB class outside the conditional block
export class OlaidrisDB extends Dexie {
  certification!: Table<ICertificate>;
  education!: Table<IEducation>;
  experiences!: Table<IExperience>;
  projects!: Table<IProject>;
  accolades!: Table<IAccolade>;
  uploads!: Table<IUpload>;

  constructor() {
    super("OlaIdrisDB");
    this.version(1).stores({
      certification: "_id, sponsor, title, awarding_date, logo_uri, proof_uri",
      education:
        "_id, school, programme, [location.state+location.country], [duration.startDate+duration.endDate], school_logo_uri",
      experiences:
        "_id, company, [location.state+location.country], title, [duration.startDate+duration.endDate], achievements, company_logo_uri",
      projects: "_id, project_name, project_date, project_uri, decisions",
      accolades:
        "_id, name, accolade, date_received, source_platform_logo, source_uri",
      uploads: "_id, type, uri, filename",
    });
  }
}

// Initialize LocalDB only in the browser environment
let LocalDB: OlaidrisDB;

if (typeof window !== "undefined") {
  LocalDB = new OlaidrisDB();
}

export { LocalDB };
