(function(){
    'use strict';

    require.config({
        paths : {
            'jquery' : '../vendor/jquery/dist/jquery',
            'bacon' : '../vendor/bacon/dist/Bacon',
            '_' : '../vendor/lodash/dist/lodash',
            'react' : '../vendor/react/react',
            'router' : '../vendor/react-router/dist/react-router',
            'MaterialDesignJS':'../vendor/bootstrap-material-design/dist/js/material',
            'MaterialDesignRipplesJS':'../vendor/bootstrap-material-design/dist/js/ripples',

            'main' : './main'

        }
    });

    window.define(['main','jquery'], function (main,$) {
        main.bindElement($('#app').get(0));
    });

}).call(this);
