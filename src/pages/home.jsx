import React from "react";
import SEO from "../components/seo";

export const meta = {
  name: "Homepage",
  route: "/",
  component: Page,
};

export default function Page() {
  return (
    <>
      <SEO
        title="CRA with Router"
        description="A simple setup for small, multi-view apps"
        keywords={["probably", "not", "needed"]}
      />
      <div>Hello</div>
    </>
  );
}
