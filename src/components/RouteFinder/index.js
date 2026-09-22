import React, {useMemo, useState} from 'react';
import routes from '@site/src/generated/api-routes.json';

const methods = ['Hamısı', 'GET', 'POST', 'PUT', 'PATCH', 'DELETE'];
const modules = ['Hamısı', ...new Set(routes.map((route) => route.module).sort((a, b) => a.localeCompare(b, 'az')))];

export default function RouteFinder() {
  const [query, setQuery] = useState('');
  const [method, setMethod] = useState('Hamısı');
  const [module, setModule] = useState('Hamısı');
  const visibleRoutes = useMemo(() => {
    const needle = query.trim().toLocaleLowerCase('az');
    return routes.filter((route) => {
      if (method !== 'Hamısı' && route.method !== method) return false;
      if (module !== 'Hamısı' && route.module !== module) return false;
      return !needle || [route.path, route.module, route.purpose, route.routeName, route.handler, route.access]
        .join(' ')
        .toLocaleLowerCase('az')
        .includes(needle);
    });
  }, [method, module, query]);

  return (
    <section className="route-finder" aria-label="Endpoint axtarışı">
      <div className="route-finder__filters">
        <label className="route-finder__search">
          <span>Path, handler və ya resurs</span>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Məsələn: stock-documents, payment, @post" />
        </label>
        <label>
          <span>Metod</span>
          <select value={method} onChange={(event) => setMethod(event.target.value)}>
            {methods.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
        <label>
          <span>Modul</span>
          <select value={module} onChange={(event) => setModule(event.target.value)}>
            {modules.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
      </div>
      <p className="route-finder__count"><strong>{visibleRoutes.length}</strong> operation göstərilir.</p>
      <div className="route-finder__table-wrap">
        <table>
          <thead>
            <tr><th>Metod</th><th>Path</th><th>Modul</th><th>Məqsəd</th><th>Handler</th></tr>
          </thead>
          <tbody>
            {visibleRoutes.map((route) => (
              <tr key={`${route.method}:${route.path}`}>
                <td><code>{route.method}</code></td>
                <td><code>{route.path}</code></td>
                <td>{route.module}</td>
                <td>{route.purpose}</td>
                <td><code>{route.handler}</code></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
