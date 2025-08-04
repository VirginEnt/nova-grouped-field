import IndexField from './components/IndexField.vue';
import DetailField from './components/DetailField.vue';

Nova.booting((app) => {
    app.component('index-nova-grouped-field', IndexField);
    app.component('detail-nova-grouped-field', DetailField);
});
