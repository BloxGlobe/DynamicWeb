export async function loadDocs() {
const res = await fetch('/data/docs.json');
return await res.json();
}


export function filterByCategory(docs, category) {
return docs.filter(doc => doc.category === category);
}