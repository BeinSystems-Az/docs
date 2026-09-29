import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout title="BEIN ERP sənədləri" description="BEIN ERP API sənədləri və istifadəçi təlimatları">
      <main>
        <header className="hero">
          <div className="container">
            <p>BEIN SYSTEMS / ERP PLATFORM</p>
            <h1 className="hero__title">API sənədləri və gündəlik iş üçün istifadəçi təlimatları.</h1>
            <p className="hero__subtitle">İnteqrasiya məlumatlarını və BEIN ERP-də əməliyyatların istifadə qaydasını ayrı bölmələrdə tapın.</p>
            <div className="margin-top--lg">
              <Link className="button button--primary button--lg margin-right--md" to="/docs/api">API sənədlərinə keç</Link>
              <Link className="button button--secondary button--lg" to="/docs/user-guide">İstifadəçi təlimatlarına keç</Link>
            </div>
          </div>
        </header>
      </main>
    </Layout>
  );
}
