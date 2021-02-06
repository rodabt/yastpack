<!-- App.svelte -->
<script>
  import './main.css';
  import { Router } from '@roxi/routify';
  import { routes } from "./.routify/routes";
</script>

<Router {routes} />