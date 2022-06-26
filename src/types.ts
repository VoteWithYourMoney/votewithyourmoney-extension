export enum Sender {
  React,
  Content,
}

export interface ChromeMessage {
  from: Sender;
  message: any;
}

export interface OpenSecretsOrganization {
  response: {
    organization: {
      "@attributes": {
        cycle: string;
        dems: string;
        gave_to_527: string;
        gave_to_cand: string;
        gave_to_pac: string;
        gave_to_party: string;
        indivs: string;
        lobbying: string;
        mems_invested: string;
        orgid: string;
        orgname: string;
        outside: string;
        pacs: string;
        repubs: string;
        soft: string;
        source: string;
        tot527: string;
        total: string;
      };
    };
  };
}
