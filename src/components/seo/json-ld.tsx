/**
 * The one place this codebase writes `dangerouslySetInnerHTML`.
 *
 * Structured data is rendered as a plain `<script>` in the server component's
 * JSX — not inside `<head>`, and not via the `metadata` export, which has no
 * mechanism for it. Search engines read JSON-LD from anywhere in the document.
 *
 * The payload is always a literal we construct, never user input, so there is
 * nothing to escape beyond the `</script>` sequence guarded below.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        // A "</script>" inside any string value would close the tag early and
        // spill the rest of the JSON into the page as markup.
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
