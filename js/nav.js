import { NavTopTemplate, NavBottomTemplate } from './templates/nav-template.js'

const NavTop = {
    template: NavTopTemplate,
    props: ['auth', 'user'],
    methods: {
        signOut() {
            WeDeploy.auth('auth-bicyclegallery.wedeploy.io').signOut();
            this.$root.$data.auth.loggedIn = false;
            this.$router.replace({ path: '/' });
        }
    },
    data: function() {
        return {
        }
    }
}

const NavBottom = {
    template: NavBottomTemplate,
    methods: {},
    data: function() {
        return {
            
        }
    }
}

export { NavTop, NavBottom }