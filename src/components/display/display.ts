import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
    template: require('./display.html'),
    props: {
        inputtext: String
    }
})

export class DisplayComponent extends Vue {
}