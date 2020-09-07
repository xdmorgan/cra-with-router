import React from "react";
import { Helmet } from "react-helmet";

export default function SEO({ title, description, keywords, canonical }) {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      {title && <title>{title}</title>}
      {canonical && <link rel="canonical" href={canonical} />}
      {description && <meta name="description" content={description} />}
      {keywords && (
        <meta
          name="keywords"
          content={Array.isArray(keywords) ? keywords.join(", ") : keywords}
        />
      )}
    </Helmet>
  );
}
