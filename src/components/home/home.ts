import Vue from 'vue';
import Component from 'vue-class-component';
import { DisplayComponent } from '../display/display';
import './home.scss';

@Component({
    template: require('./home.html'),
    components: {
        "disinput": DisplayComponent
    }
})
export class HomeComponent extends Vue {
    package: string = 'vue-webpack-typescript';
}