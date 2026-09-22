<?php

declare(strict_types=1);

use App\Authorization\RoutePermissionResolver;
use Illuminate\Contracts\Console\Kernel;

$backend = $argv[1] ?? null;
if (! is_string($backend) || $backend === '') {
    fwrite(STDERR, "Backend root argument is required.\n");
    exit(1);
}

chdir($backend);
require $backend.'/vendor/autoload.php';
$app = require $backend.'/bootstrap/app.php';
$app->make(Kernel::class)->bootstrap();

$resolver = $app->make(RoutePermissionResolver::class);
$rows = [];
foreach ($app->make('router')->getRoutes() as $route) {
    if (! str_starts_with($route->uri(), 'api/')) {
        continue;
    }
    $target = $resolver->resolve($route);
    foreach (array_diff($route->methods(), ['HEAD']) as $method) {
        $rows[] = [
            'method' => $method,
            'uri' => $route->uri(),
            'resource' => $target?->resource,
            'action' => $target?->action,
            'global_permission' => $target?->globalPermission,
            'requires_permission' => $target?->requiresPermission ?? false,
        ];
    }
}

echo json_encode($rows, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE).PHP_EOL;
