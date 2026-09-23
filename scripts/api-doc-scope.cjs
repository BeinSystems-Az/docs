/**
 * Resources backed by the ERP itself rather than by a normal user workflow.
 * They remain in the repository for backend/integration reference, but are
 * intentionally excluded from the business-module API navigation.
 */
const internalResourceDocs = new Set([
  'docs/modules/accounting/resources/document-ledger-item.md',
  'docs/modules/accounting/resources/journal-item.md',
  'docs/modules/automation/resources/workflow-run.md',
  'docs/modules/integrations/resources/integration-monitor.md',
  'docs/modules/platform/resources/audit-log.md',
  'docs/modules/platform/resources/changelog.md',
  'docs/modules/platform/resources/dataset.md',
  'docs/modules/platform/resources/document-name.md',
  'docs/modules/platform/resources/field.md',
  'docs/modules/platform/resources/form-onchange.md',
  'docs/modules/platform/resources/health.md',
  'docs/modules/platform/resources/layout.md',
  'docs/modules/platform/resources/list.md',
  'docs/modules/platform/resources/operational-data-reset.md',
  'docs/modules/platform/resources/page-schema.md',
  'docs/modules/platform/resources/related-document.md',
  'docs/modules/platform/resources/view-schema.md',
  'docs/modules/pos/resources/pos-sync-monitor.md',
  'docs/modules/pos/resources/pos-sync.md',
  'docs/modules/stock/resources/historical-stock-availability.md',
  'docs/modules/stock/resources/stock-cost-adjustment.md',
  'docs/modules/stock/resources/stock-reservation.md',
]);

function isInternalResourceDocId(id) {
  return internalResourceDocs.has(`docs/${id}.md`) || internalResourceDocs.has(`docs/${id}.mdx`);
}

function isTechnicalDocId(id) {
  return isInternalResourceDocId(id)
    || id === 'api/coverage'
    || id === 'api/reference/route-catalog'
    || id === 'api/reference/route-finder'
    || id.startsWith('api/endpoints/');
}

module.exports = {internalResourceDocs, isInternalResourceDocId, isTechnicalDocId};
