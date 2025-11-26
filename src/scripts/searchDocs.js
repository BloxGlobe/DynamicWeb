export function searchDocs(query, docs) {
query = query.toLowerCase();
return docs.filter(doc =>
doc.title.toLowerCase().includes(query) ||
doc.content.toLowerCase().includes(query)
);
}