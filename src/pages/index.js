import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout
      title="BEIN ERP sənədləri"
      description="BEIN ERP istifadə qaydaları və developer API reference"
    >
      <main>
        <header className="hero">
          <div className="container">
            <p className="margin-bottom--sm">BEIN SYSTEMS · ERP SƏNƏDLƏRİ</p>
            <h1 className="hero__title">BEIN ERP-də lazım olan məlumatı tez tapın.</h1>
            <p className="hero__subtitle">
              Gündəlik iş addımları və texniki inteqrasiya məlumatları bir məkanda.
            </p>
            <div className="margin-top--lg">
              <Link className="button button--primary button--lg margin-right--md" to="/docs/user-guide">
                Təlimata keç
              </Link>
              <Link className="button button--secondary button--lg" to="/docs/api">
                API sənədləri
              </Link>
            </div>
          </div>
        </header>
      </main>
    </Layout>
  );
}
