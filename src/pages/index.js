import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout title="ERP API və arxitektura sənədləşdirməsi" description="BEIN ERP texniki sənədləşdirməsi">
      <main>
        <header className="hero">
          <div className="container">
            <p>BEIN SYSTEMS / ERP PLATFORM</p>
            <h1 className="hero__title">İnteqrasiya üçün dəqiq API, inkişaf üçün aydın arxitektura.</h1>
            <p className="hero__subtitle">Tenant, filial, biznes modulları və ERP əməliyyatları üçün vahid texniki mənbə.</p>
            <div className="margin-top--lg">
              <Link className="button button--primary button--lg margin-right--md" to="/docs/intro">Başlanğıc</Link>
              <Link className="button button--secondary button--lg" to="/docs/api/reference">API Reference</Link>
            </div>
          </div>
        </header>
      </main>
    </Layout>
  );
}
