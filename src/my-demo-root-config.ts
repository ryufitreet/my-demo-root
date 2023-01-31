import { registerApplication, start, LifeCycles } from "single-spa";
import './style.css'
import url from 'url'

registerApplication(
  'nav',
  () => System.import<LifeCycles>('@my-demo/my-demo-nav'),
  () => true,
  { domElement: document.getElementById('nav-container') },
)

registerApplication(
  'page-1',
  () => System.import<LifeCycles>('@my-demo/page-1'),
  () => url.parse(location.href).path.startsWith('/page-1'),
  { domElement: document.getElementById('page-1-container') },
)

registerApplication(
  'page-2',
  () => System.import<LifeCycles>('@my-demo/page-2'),
  () => url.parse(location.href).path.startsWith('/page-2'),
  { domElement: document.getElementById('page-2-container') },
)

start({
  urlRerouteOnly: true,
});
