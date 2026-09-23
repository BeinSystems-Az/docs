// Routes owned by ERP internals and deliberately excluded from user-facing
// resource documentation. They are still present in the backend route list.
const internalRoutePrefixes = [
  '/api/v1/document-ledger-items',
  '/api/v1/accounting-entry-items',
  '/api/v1/workflow-runs',
  '/api/v1/integrations/deliveries',
  '/api/v1/integrations/events',
  '/api/v1/integrations/status',
  '/api/v1/audit-logs',
  '/api/v1/audit/client-events',
  '/api/v1/changelog',
  '/api/v1/datasets',
  '/api/v1/documents/',
  '/api/v1/fields',
  '/api/v1/forms/',
  '/api/health',
  '/api/v1/layout/',
  '/api/v1/lists',
  '/api/v1/settings/reset-operational-data',
  '/api/v1/page-schema/',
  '/api/v1/view-schema/',
  '/api/v1/pos-sync',
  '/api/v1/pos-sync-monitor',
  '/api/v1/pos/sync',
  '/api/v1/stock-availability/',
  '/api/v1/stock-revaluations',
  '/api/v1/stock-reservation-allocations',
  '/api/v1/stock-reservations',
];

function isInternalRoute(path) {
  return internalRoutePrefixes.some((prefix) => path === prefix || path.startsWith(prefix));
}

module.exports = {internalRoutePrefixes, isInternalRoute};
