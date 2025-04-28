import { TabsComponent } from './components/tabs.component'

document.addEventListener("DOMContentLoaded", () => {
    const tabs = new TabsComponent();

    tabs.init()
  
    console.log('Page Loaded✅');
});
  