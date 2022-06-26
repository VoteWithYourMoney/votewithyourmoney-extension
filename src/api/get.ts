import React from "react";
import superagent from "superagent";
import { OpenSecretsOrganization } from "../types";

export const useGetOrgData = (siteDomain: string | undefined) => {
  const [apiResponse, setApiResponse] =
    React.useState<OpenSecretsOrganization>();

  // TODO: Replace with React-query
  if (siteDomain) {
    superagent
      .get("http://localhost:8080/api")
      .query({
        siteDomain: siteDomain,
      })
      .then((res) => {
        setApiResponse(JSON.parse(res.text));
      });
  }
  return apiResponse;
};
