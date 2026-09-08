export type Severity = 'critical' | 'high' | 'medium' | 'low';
export type BugStatus = 'reported' | 'investigating' | 'fixing' | 'verifying' | 'resolved';

export interface EvidenceItem {
  id: string;
  type: 'screenshot' | 'console' | 'network' | 'browser' | 'log';
  title: string;
  content: string;
  timestamp: string;
}

export interface ReproductionStep {
  stepNumber: number;
  description: string;
  isFailedStep?: boolean;
}

export interface InvestigationFlow {
  symptom: string;
  trigger: string;
  evidence: string;
  rootCause: string;
}

export interface FixDetails {
  description: string;
  beforeCode?: string;
  afterCode?: string;
  commitHash?: string;
}

export interface BugCase {
  id: string; // e.g. BUG-0482
  title: string;
  description: string;
  severity: Severity;
  status: BugStatus;
  project: string;
  assignee: {
    name: string;
    avatar?: string;
  };
  reportedAt: string;
  updatedAt: string;
  evidence: EvidenceItem[];
  reproduction: ReproductionStep[];
  investigation?: InvestigationFlow;
  fix?: FixDetails;
  verifiedBy?: string;
  verifiedAt?: string;
}
